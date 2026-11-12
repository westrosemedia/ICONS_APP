import { NextRequest, NextResponse } from "next/server";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { getAdminApp } from "@/lib/firebaseAdmin";
import { COACHING_WAITLIST_COLLECTION, validateCoachingEmail } from "@/lib/coachingWaitlist";

export const dynamic = "force-dynamic";

function alreadyExists(error: unknown): boolean {
  if (!error || typeof error !== "object" || !("code" in error)) return false;
  const code = String((error as { code: unknown }).code);
  return code === "6" || code === "already-exists";
}

export async function POST(req: NextRequest) {
  let body: { email?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const parsed = validateCoachingEmail(body.email);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  try {
    const db = getFirestore(getAdminApp());
    const ref = db.collection(COACHING_WAITLIST_COLLECTION).doc(parsed.email);
    const existing = await ref.get();
    if (existing.exists) {
      return NextResponse.json({ error: "That email is already on the waitlist." }, { status: 409 });
    }

    await ref.create({
      email: parsed.email,
      signedUpAt: Timestamp.now(),
    });
  } catch (error) {
    if (alreadyExists(error)) {
      return NextResponse.json({ error: "That email is already on the waitlist." }, { status: 409 });
    }
    console.error("Private coaching waitlist signup failed");
    return NextResponse.json({ error: "We couldn't save that. Try again in a minute." }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
