import { NextRequest, NextResponse } from "next/server";
import { getStripe } from "@/lib/stripe";
import {
  createCourseEnrollmentAdmin,
  createCustomAuthToken,
  setUserPassword,
} from "@/lib/firebaseAdmin";

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

    const userId = await setUserPassword(email, password);

    await createCourseEnrollmentAdmin(
      userId,
      courseId,
      typeof session.payment_intent === "string" ? session.payment_intent : null,
      typeof session.subscription === "string" ? session.subscription : null
    );

    const customToken = await createCustomAuthToken(userId);

    return NextResponse.json({
      email,
      courseId,
      customToken,
    });
  } catch (error: unknown) {
    console.error("Activate account error:", error);
    const message = error instanceof Error ? error.message : "";
    const isConfigError =
      message.includes("Firebase Admin credentials") ||
      message.includes("Failed to parse private key") ||
      message.includes("Invalid PEM");

    return NextResponse.json(
      {
        error: isConfigError
          ? "We could not finish setting up your account. Please try again in a few minutes or email support."
          : message || "Unable to activate your account.",
      },
      { status: 500 }
    );
  }
}
