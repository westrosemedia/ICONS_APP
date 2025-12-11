import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const { priceId, courseId, userId } = await req.json();

    if (!priceId || !courseId || !userId) {
      return NextResponse.json(
        { error: "Missing required fields: priceId, courseId, or userId" },
        { status: 400 }
      );
    }

    const stripe = getStripe();
    const origin = req.nextUrl.origin;

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      mode: 'payment', // Change to 'subscription' if using payment plans
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${origin}/courses/${courseId}/enrollment-success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/courses/${courseId}`,
      metadata: {
        courseId: courseId,
        userId: userId,
        type: 'course_enrollment',
      },
      allow_promotion_codes: true,
    });

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("Course checkout error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to create checkout session" },
      { status: 500 }
    );
  }
}

