import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe, getStripe } from "@/lib/stripe";

// Make this route dynamic to avoid build-time execution
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  const sig = headers().get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET as string;

  let event;
  try {
    const buf = await req.text();
    event = stripe.webhooks.constructEvent(buf, sig as string, secret);
  } catch (err: unknown) {
    console.error("Webhook signature verification failed:", err);
    return new NextResponse(`Webhook Error: ${err instanceof Error ? err.message : 'Unknown error'}`, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    try {
      const session = event.data.object as any;
      const sessionId = session.id;
      
      console.log("Processing checkout session:", sessionId);

      // Helper function to check if payment is for a course
      async function checkIfCoursePayment(session: any): Promise<boolean> {
        try {
          const { CourseService } = await import("@/lib/courseService");
          const allCourses = await CourseService.getAllCourses();
          const stripeClient = getStripe();
          const lineItems = await stripeClient.checkout.sessions.listLineItems(session.id);
          
          if (lineItems.data.length > 0) {
            const priceId = lineItems.data[0].price?.id;
            return allCourses.some(c => c.stripePriceId === priceId);
          }
          return false;
        } catch {
          return false;
        }
      }

      // Helper function to get userId by email using Firebase Admin
      async function getUserIdByEmail(email: string): Promise<string | null> {
        try {
          // Initialize Firebase Admin if not already initialized
          const { initializeApp, cert, getApps } = await import("firebase-admin/app");
          const { getAuth } = await import("firebase-admin/auth");
          
          if (!getApps().length) {
            initializeApp({
              credential: cert({
                projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
              }),
            });
          }
          
          const auth = getAuth();
          const user = await auth.getUserByEmail(email);
          return user.uid;
        } catch (error) {
          console.error("Error getting user by email:", error);
          // If user doesn't exist, try querying Firestore for a user document with this email
          try {
            const { getFirestore } = await import("firebase-admin/firestore");
            const db = getFirestore();
            const usersRef = db.collection("users");
            const snapshot = await usersRef.where("email", "==", email).limit(1).get();
            
            if (!snapshot.empty) {
              return snapshot.docs[0].id;
            }
          } catch (firestoreError) {
            console.error("Error querying Firestore for user:", firestoreError);
          }
          return null;
        }
      }
      
      // Check if this is a course enrollment (from pricing table or direct checkout)
      // Check metadata first, then check if customer email matches a user
      const isCourseEnrollment = session.metadata?.type === 'course_enrollment' || 
                                  session.metadata?.courseId ||
                                  (session.customer_email && await checkIfCoursePayment(session));
      
      if (isCourseEnrollment) {
        const { CourseService } = await import("@/lib/courseService");
        let courseId = session.metadata?.courseId;
        let userId = session.metadata?.userId;
        
        // If no courseId in metadata, try to find it from the price/product
        if (!courseId) {
          // Get the course that uses this Stripe price
          const allCourses = await CourseService.getAllCourses();
          const lineItems = await stripe.checkout.sessions.listLineItems(session.id);
          
          if (lineItems.data.length > 0) {
            const priceId = lineItems.data[0].price?.id;
            const matchingCourse = allCourses.find(c => c.stripePriceId === priceId);
            if (matchingCourse) {
              courseId = matchingCourse.id;
            }
          }
        }
        
        // If no userId, try to find user by email
        if (!userId && session.customer_email) {
          userId = await getUserIdByEmail(session.customer_email);
          if (userId) {
            console.log("Found userId by email:", userId);
          } else {
            console.log("Could not find user by email:", session.customer_email);
          }
        }
        
        if (courseId && userId) {
          // Check if enrollment already exists to prevent duplicates
          const existingEnrollment = await CourseService.getUserEnrollment(userId, courseId);
          
          if (existingEnrollment) {
            console.log("Enrollment already exists:", { userId, courseId });
            // Update payment info if needed (using Firebase Admin)
            if (session.payment_intent && !existingEnrollment.stripePaymentIntentId) {
              const { getFirestore } = await import("firebase-admin/firestore");
              const db = getFirestore();
              const enrollmentRef = db.collection("courseEnrollments").doc(existingEnrollment.id);
              await enrollmentRef.update({
                stripePaymentIntentId: session.payment_intent,
                stripeSubscriptionId: session.subscription || null,
                paymentStatus: 'completed',
              });
            }
          } else {
            // Create enrollment
            await CourseService.createEnrollment(
              userId,
              courseId,
              session.payment_intent,
              session.subscription
            );
            
            console.log("Course enrollment created:", { userId, courseId });
          }
        } else {
          console.log("Course enrollment pending - missing courseId or userId", {
            courseId,
            userId,
            email: session.customer_email
          });
        }
        
        return NextResponse.json({ received: true });
      }
      
      // Original booking logic
      // Import Firebase functions dynamically to avoid build-time issues
      const { getBooking, updateBookingStatus, updateBookingStripeData, getPackage } = await import("@/lib/booking");
      const { sendBookingNotification } = await import("@/lib/email");
      
      // Find the booking by session ID
      // We'll need to store the session ID when creating the checkout session
      // For now, let's assume it's in the metadata
      const bookingId = session.metadata?.bookingId;
      
      if (!bookingId) {
        console.error("No booking ID found in session metadata");
        return NextResponse.json({ error: "No booking ID found" }, { status: 400 });
      }

      // Get the booking
      const booking = await getBooking(bookingId);
      if (!booking) {
        console.error("Booking not found:", bookingId);
        return NextResponse.json({ error: "Booking not found" }, { status: 404 });
      }

      // Update booking status to confirmed
      await updateBookingStatus(bookingId, "confirmed");
      
      // Update booking with Stripe data
      await updateBookingStripeData(bookingId, {
        sessionId: sessionId,
        paymentIntentId: session.payment_intent,
        customerId: session.customer,
        amountPaid: session.amount_total
      });

      // Get package details for email
      const pkg = await getPackage(booking.packageId);
      if (!pkg) {
        console.error("Package not found:", booking.packageId);
        return NextResponse.json({ error: "Package not found" }, { status: 404 });
      }

      // Send email notifications
      await sendBookingNotification({
        booking: {
          ...booking,
          status: "confirmed",
          stripe: {
            ...booking.stripe,
            sessionId: sessionId,
            paymentIntentId: session.payment_intent,
            customerId: session.customer,
            amountPaid: session.amount_total
          }
        },
        package: pkg,
        customerEmail: booking.customer.email
      });

      console.log("Booking confirmed and notifications sent:", bookingId);
      
    } catch (error) {
      console.error("Error processing checkout session:", error);
      return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
  }

  return NextResponse.json({ received: true });
}

export const config = {
  api: { bodyParser: false },
};
