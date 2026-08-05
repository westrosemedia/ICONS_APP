#!/usr/bin/env node
/**
 * One-time script: activate a paid Stripe checkout session for course access.
 * Usage: node scripts/activatePaidCourse.mjs <session_id> <password>
 */
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { createHash, randomBytes, scryptSync } from "crypto";
import Stripe from "stripe";
import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const __dirname = dirname(fileURLToPath(import.meta.url));

function loadEnv() {
  try {
    const envPath = resolve(__dirname, "../.env.local");
    const content = readFileSync(envPath, "utf8");
    for (const line of content.split("\n")) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith("#")) continue;
      const eq = trimmed.indexOf("=");
      if (eq === -1) continue;
      const key = trimmed.slice(0, eq);
      let value = trimmed.slice(eq + 1);
      if (
        (value.startsWith('"') && value.endsWith('"')) ||
        (value.startsWith("'") && value.endsWith("'"))
      ) {
        value = value.slice(1, -1);
      }
      if (!process.env[key]) process.env[key] = value;
    }
  } catch {
    // ignore
  }
}

loadEnv();

function getCourseAccountId(email) {
  return createHash("sha256")
    .update(email.trim().toLowerCase())
    .digest("hex")
    .slice(0, 32);
}

function hashPassword(password) {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

function initFirebase() {
  if (getApps().length) return getFirestore();

  const jsonPath = process.env.FIREBASE_SERVICE_ACCOUNT_JSON;
  if (jsonPath) {
    const creds = JSON.parse(readFileSync(resolve(jsonPath), "utf8"));
    initializeApp({ credential: cert(creds) });
    return getFirestore();
  }

  initializeApp({
    credential: cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
    }),
  });
  return getFirestore();
}

async function createEnrollment(db, userId, courseId, paymentIntent) {
  const existing = await db
    .collection("courseEnrollments")
    .where("userId", "==", userId)
    .where("courseId", "==", courseId)
    .limit(1)
    .get();

  if (!existing.empty) {
    await existing.docs[0].ref.update({ paymentStatus: "completed" });
    console.log("Updated existing enrollment");
    return;
  }

  await db.collection("courseEnrollments").add({
    userId,
    courseId,
    enrolledAt: Timestamp.now(),
    stripePaymentIntentId: paymentIntent || null,
    stripeSubscriptionId: null,
    paymentStatus: "completed",
    currentWeek: 0,
    completedWeeks: [],
    progress: 0,
  });

  await db
    .collection("courseProgress")
    .doc(`${userId}_${courseId}`)
    .set(
      {
        userId,
        courseId,
        currentWeek: 0,
        completedWeeks: [],
        progress: 0,
        lastAccessedAt: Timestamp.now(),
      },
      { merge: true }
    );

  console.log("Created enrollment");
}

async function main() {
  const sessionId = process.argv[2];
  const password = process.argv[3];

  if (!sessionId || !password) {
    console.error("Usage: node scripts/activatePaidCourse.mjs <session_id> <password>");
    process.exit(1);
  }

  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  if (session.payment_status !== "paid") {
    console.error("Session is not paid:", session.payment_status);
    process.exit(1);
  }

  const email = (
    session.customer_details?.email ||
    session.customer_email ||
    ""
  ).trim().toLowerCase();
  const courseId = session.metadata?.courseId;

  if (!email || !courseId) {
    console.error("Missing email or courseId on session");
    process.exit(1);
  }

  const accountId = getCourseAccountId(email);
  const db = initFirebase();

  await db.collection("courseAccounts").doc(accountId).set(
    {
      email,
      passwordHash: hashPassword(password),
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    },
    { merge: true }
  );

  await createEnrollment(
    db,
    accountId,
    courseId,
    typeof session.payment_intent === "string" ? session.payment_intent : null
  );

  console.log("Activated:", { email, accountId, courseId });
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
