import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { stripe } from "@/lib/stripe"; // ensure this exports a configured Stripe client

// Make this route dynamic to avoid build-time execution
export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    const { priceId, mode } = await req.json();

    if (!priceId) {
      return NextResponse.json({ error: "Missing priceId" }, { status: 400 });
    }

    const origin = headers().get("origin") || process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

    const session = await stripe.checkout.sessions.create({
      mode: mode === "payment" ? "payment" : "subscription",
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${origin}/thank-you?source=icons-society`,
      cancel_url: `${origin}/icons-society?canceled=true`,
      allow_promotion_codes: true,
      billing_address_collection: "auto",
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: "Checkout session error" }, { status: 500 });
  }
}
