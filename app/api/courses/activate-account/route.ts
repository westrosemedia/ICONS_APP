import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import { setCourseAccountPassword } from "@/lib/courseAccountStore";
import { createCourseEnrollmentAdmin } from "@/lib/firebaseAdmin";
import {
  buildCourseSessionCookie,
  createCourseSessionToken,
} from "@/lib/courseSession";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { sessionId, password } = await req.json();

    if (!sessionId || !password) {
      return NextResponse.json(
        { error: "Missing sessionId or password" },
        { status: 400 }
      );
    }

    if (typeof password !== "string" || password.length < 6) {
      return NextResponse.json(
        { error: "Password must be at least 6 characters." },
        { status: 400 }
      );
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid") {
      return NextResponse.json({ error: "Payment not completed" }, { status: 400 });
    }

    const email =
      session.customer_details?.email || session.customer_email || null;
    const courseId = session.metadata?.courseId || null;

    if (!email || !courseId) {
      return NextResponse.json(
        { error: "Checkout session is missing email or course details." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();
    const accountId = await setCourseAccountPassword(normalizedEmail, password);

    await createCourseEnrollmentAdmin(
      accountId,
      courseId,
      typeof session.payment_intent === "string" ? session.payment_intent : null,
      typeof session.subscription === "string" ? session.subscription : null
    );

    const { token, maxAge } = createCourseSessionToken(accountId, normalizedEmail);
    const response = NextResponse.json({
      email: normalizedEmail,
      courseId,
      uid: accountId,
      success: true,
    });
    response.headers.set("Set-Cookie", buildCourseSessionCookie(token, maxAge));

    return response;
  } catch (error: unknown) {
    console.error("Activate account error:", error);
    const message = error instanceof Error ? error.message : "";

    return NextResponse.json(
      { error: message || "Unable to activate your account." },
      { status: 500 }
    );
  }
}
