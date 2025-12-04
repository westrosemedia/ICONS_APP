import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";
import { Customer, BookingDetails } from "@/types/booking";

// Make this route dynamic to avoid build-time execution
export const dynamic = 'force-dynamic';



export async function POST(req: NextRequest) {
  try {
    const { pkg, values, intake } = await req.json();

    if (!pkg || !["spotlight", "immersion", "icon"].includes(pkg)) {
      return NextResponse.json({ error: "Invalid package" }, { status: 400 });
    }

    // Check if Stripe is configured
    if (!process.env.STRIPE_SECRET_KEY) {
      console.error("Stripe secret key not configured");
      return NextResponse.json({ error: "Payment system not configured" }, { status: 500 });
    }

    // Import Firebase functions dynamically to avoid build-time issues
    const { getPackage, createDraftBooking } = await import("@/lib/booking");

    // Get package data from your existing system
    const packageData = await getPackage(pkg);
    if (!packageData) {
      return NextResponse.json({ error: "Package not found" }, { status: 404 });
    }

    // Create a draft booking first
    const customer: Customer = {
      fullName: intake?.fullName || "Unknown",
      email: intake?.email || "",
      phone: intake?.phoneNumber || ""
    };

    const bookingDetails: BookingDetails = {
      intake: intake || {},
      preferences: {},
      notes: `Personal Information:
- Full Name: ${intake?.fullName || "Not provided"}
- Business Name: ${intake?.businessName || "Not provided"}
- Instagram Handle: ${intake?.instagramHandle || "Not provided"}
- Pronouns: ${intake?.pronouns || "Not provided"}
- Phone: ${intake?.phoneNumber || "Not provided"}
- Email: ${intake?.email || "Not provided"}
- Mailing Address: ${intake?.mailingAddress || "Not provided"}

Business Information:
- How did you hear about us: ${intake?.howDidYouHear || "Not provided"}
- City: ${intake?.city || "Not provided"}
- Big Launch/Offer: ${intake?.bigLaunch || "Not provided"}
- Income Goal (12 months): ${intake?.incomeGoal || "Not provided"}

Event Information:
- Event Type: ${intake?.eventType || "Not provided"}
- Event Name: ${intake?.eventName || "Not provided"}
- Event Dates: ${intake?.eventDates || "Not provided"}
- Number of Guests: ${intake?.numberOfGuests || "Not provided"}
- Event Location: ${intake?.eventLocation || "Not provided"}
- Event Schedule: ${intake?.eventSchedule || "Not provided"}
- Key Moments: ${intake?.keyMoments || "Not provided"}
- Participant Content Quantity: ${intake?.participantQuantity || 0}
- Travel Needed: ${intake?.travelNeeded || "Not provided"}
- Additional Notes: ${intake?.notes || "None"}`
    };

    const bookingId = await createDraftBooking({
      packageId: pkg,
      customer,
      details: bookingDetails,
      pricing: {
        basePrice: packageData.basePrice,
        totalPrice: packageData.basePrice, // Will be updated if there are add-ons
        currency: "CAD"
      }
    });


    const lineItems = [];

    if (packageData.type === "subscription") {
      // For Lite package - subscription mode
      if (packageData.stripePriceId) {
        lineItems.push({
          price: packageData.stripePriceId,
          quantity: 1,
        });
      } else {
        // Fallback to price_data if no price ID
        lineItems.push({
          price_data: {
            currency: "cad",
            product_data: {
              name: packageData.name,
              description: packageData.description || "",
            },
            unit_amount: packageData.basePrice,
            recurring: {
              interval: "month",
            },
          },
          quantity: 1,
        });
      }
    } else {
      // For one-time and event packages
      if (packageData.stripePriceId) {
        lineItems.push({
          price: packageData.stripePriceId,
          quantity: 1,
        });
      } else {
        lineItems.push({
          price_data: {
            currency: "cad",
            product_data: {
              name: packageData.name,
              description: packageData.description || "",
            },
            unit_amount: packageData.basePrice,
          },
          quantity: 1,
        });
      }

      // Add participant add-ons for immersion package
      if (packageData.type === "event" && values?.participants && Number(values.participants) > 0) {
        const participantPrice = packageData.options?.participantPrice || 100000; // 1000 CAD default
        lineItems.push({
          price_data: {
            currency: "cad",
            product_data: {
              name: "Participant Content",
              description: `${values.participants} participant(s) content add-on`,
            },
            unit_amount: participantPrice,
          },
          quantity: Number(values.participants),
        });
      }
    }

    // Prepare session data
    const sessionData: any = {
      mode: packageData.type === "subscription" ? "subscription" : "payment",
      success_url: `${req.nextUrl.origin}/book/success`,
      cancel_url: `${req.nextUrl.origin}/book/cancel`,
      line_items: lineItems,
      automatic_tax: { enabled: false },
      currency: "cad",
      metadata: {
        bookingId: bookingId,
        packageType: pkg
      }
    };

    // Only add customer_email if it's valid
    if (customer.email && customer.email.trim() && customer.email.includes('@')) {
      sessionData.customer_email = customer.email.trim();
    }

    const session = await stripe.checkout.sessions.create(sessionData);

    return NextResponse.json({ url: session.url });
  } catch (e: unknown) {
    console.error("Checkout error:", e);
    return NextResponse.json(
      { error: e instanceof Error ? e.message : "Checkout error" },
      { status: 500 }
    );
  }
}
