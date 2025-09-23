import { NextRequest, NextResponse } from "next/server";
import { stripe } from "@/lib/stripe";

// Make this route dynamic to avoid build-time execution
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const { amount, currency } = await req.json();

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: currency || "usd",
            product_data: {
              name: "Power Hour Strategy Session",
              description: "One focused hour to transform your brand and get instant results",
              images: [], // You can add product images here
            },
            unit_amount: amount || 21200, // $212.00 in cents
          },
          quantity: 1,
        },
      ],
      success_url: `${req.nextUrl.origin}/power-hour/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.nextUrl.origin}/power-hour`,
      metadata: {
        product: "power_hour",
        amount: amount?.toString() || "21200"
      },
      allow_promotion_codes: true, // Allow coupon codes like TEST_FREE
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Power Hour checkout error:", error);
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    );
  }
}


