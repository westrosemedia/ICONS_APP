import { headers } from "next/headers";
import { NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

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
      // Import Firebase functions dynamically to avoid build-time issues
      const { getBooking, updateBookingStatus, updateBookingStripeData, getPackage } = await import("@/lib/booking");
      const { sendBookingNotification } = await import("@/lib/email");

      const session = event.data.object as any;
      const sessionId = session.id;
      
      console.log("Processing checkout session:", sessionId);
      
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
