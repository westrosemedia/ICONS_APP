import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  try {
    const sessionId = req.nextUrl.searchParams.get("session_id");

    if (!sessionId) {
      return NextResponse.json({ error: "Missing session_id" }, { status: 400 });
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json({ error: "Payment not completed" }, { status: 400 });
    }

    return NextResponse.json({
      email: session.customer_details?.email || session.customer_email,
      courseId: session.metadata?.courseId || null,
      paid: true,
    });
  } catch (error: unknown) {
    console.error("Verify session error:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error ? error.message : "Unable to verify checkout session",
      },
      { status: 500 }
    );
  }
}
