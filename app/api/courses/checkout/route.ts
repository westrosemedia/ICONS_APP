import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { getPublicStripeErrorMessage } from "@/lib/stripeErrors";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { priceId, courseId, userId, customerEmail, cancelPath } =
      await req.json();

    if (!priceId || !courseId) {
      return NextResponse.json(
        { error: "Missing required fields: priceId or courseId" },
        { status: 400 }
      );
    }

    const stripe = getStripe();
    const origin = req.nextUrl.origin;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${origin}/courses/${courseId}/enrollment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}${cancelPath || `/courses/${courseId}`}`,
      customer_email: customerEmail || undefined,
      metadata: {
        courseId,
        type: "course_enrollment",
        ...(userId ? { userId } : {}),
      },
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: unknown) {
    console.error("Course checkout error:", error);
    return NextResponse.json(
      { error: getPublicStripeErrorMessage(error) },
      { status: 500 }
    );
  }
}
