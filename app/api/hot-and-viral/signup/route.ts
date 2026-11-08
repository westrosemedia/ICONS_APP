import { NextRequest, NextResponse } from "next/server";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { getAdminApp } from "@/lib/firebaseAdmin";
import {
  NEXT_ROUND_COLLECTION,
  WAITLIST_COLLECTION,
  copy,
  validateSignup,
  type SignupList,
} from "@/lib/hotAndViral";

export const dynamic = "force-dynamic";

const collections: Record<SignupList, string> = {
  waitlist: WAITLIST_COLLECTION,
  next_round: NEXT_ROUND_COLLECTION,
};

function alreadyExists(error: unknown): boolean {
  if (!error || typeof error !== "object" || !("code" in error)) return false;
  const code = String((error as { code: unknown }).code);
  return code === "6" || code === "already-exists";
}

export async function POST(req: NextRequest) {
  let body: { name?: unknown; email?: unknown; list?: unknown };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Enter your first name." }, { status: 400 });
  }

  const list = body.list;
  if (list !== "waitlist" && list !== "next_round") {
    return NextResponse.json({ error: "Enter your first name." }, { status: 400 });
  }

  const parsed = validateSignup(body);
  if (!parsed.ok) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  try {
    const db = getFirestore(getAdminApp());
    const ref = db.collection(collections[list]).doc(parsed.email);
    const existing = await ref.get();
    if (existing.exists) {
      return NextResponse.json({ error: copy.duplicate }, { status: 409 });
    }

    await ref.create({
      name: parsed.name,
      email: parsed.email,
      signedUpAt: Timestamp.now(),
    });
  } catch (error) {
    if (alreadyExists(error)) {
      return NextResponse.json({ error: copy.duplicate }, { status: 409 });
    }
    console.error("Hot and Viral signup failed");
    return NextResponse.json(
      { error: "We couldn't save that. Try again in a minute." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
