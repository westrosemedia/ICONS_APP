import { App, cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

export function getAdminApp(): App {
  if (getApps().length) {
    return getApps()[0]!;
  }

  const privateKey = process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!privateKey || !process.env.FIREBASE_CLIENT_EMAIL || !process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID) {
    throw new Error("Firebase Admin credentials are not configured.");
  }

  return initializeApp({
    credential: cert({
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      privateKey,
    }),
  });
}

export async function getOrCreateUserIdByEmail(email: string): Promise<string> {
  getAdminApp();
  const auth = getAuth();
  const normalizedEmail = email.trim().toLowerCase();

  try {
    const existing = await auth.getUserByEmail(normalizedEmail);
    return existing.uid;
  } catch {
    const created = await auth.createUser({
      email: normalizedEmail,
      emailVerified: true,
    });
    return created.uid;
  }
}

export async function setUserPassword(email: string, password: string): Promise<string> {
  getAdminApp();
  const auth = getAuth();
  const userId = await getOrCreateUserIdByEmail(email);
  await auth.updateUser(userId, { password });
  return userId;
}

export async function createCustomAuthToken(userId: string): Promise<string> {
  getAdminApp();
  return getAuth().createCustomToken(userId);
}

export async function createCourseEnrollmentAdmin(
  userId: string,
  courseId: string,
  stripePaymentIntentId?: string | null,
  stripeSubscriptionId?: string | null
): Promise<void> {
  getAdminApp();
  const db = getFirestore();

  const existing = await db
    .collection("courseEnrollments")
    .where("userId", "==", userId)
    .where("courseId", "==", courseId)
    .limit(1)
    .get();

  if (!existing.empty) {
    const docRef = existing.docs[0].ref;
    await docRef.update({
      paymentStatus: "completed",
      stripePaymentIntentId: stripePaymentIntentId || null,
      stripeSubscriptionId: stripeSubscriptionId || null,
    });
    return;
  }

  const enrollmentRef = db.collection("courseEnrollments").doc();
  await enrollmentRef.set({
    userId,
    courseId,
    enrolledAt: Timestamp.now(),
    stripePaymentIntentId: stripePaymentIntentId || null,
    stripeSubscriptionId: stripeSubscriptionId || null,
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
}
