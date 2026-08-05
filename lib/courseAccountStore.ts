import { createHash, randomBytes, scryptSync, timingSafeEqual } from "crypto";
import { getAdminApp } from "@/lib/firebaseAdmin";
import { getFirestore, Timestamp } from "firebase-admin/firestore";

const COLLECTION = "courseAccounts";

export function getCourseAccountId(email: string): string {
  return createHash("sha256")
    .update(email.trim().toLowerCase())
    .digest("hex")
    .slice(0, 32);
}

function hashPassword(password: string): string {
  const salt = randomBytes(16).toString("hex");
  const hash = scryptSync(password, salt, 64).toString("hex");
  return `${salt}:${hash}`;
}

function verifyPassword(password: string, stored: string): boolean {
  const [salt, hash] = stored.split(":");
  if (!salt || !hash) return false;

  const candidate = scryptSync(password, salt, 64).toString("hex");
  try {
    return timingSafeEqual(Buffer.from(hash, "hex"), Buffer.from(candidate, "hex"));
  } catch {
    return false;
  }
}

export async function setCourseAccountPassword(
  email: string,
  password: string
): Promise<string> {
  getAdminApp();
  const db = getFirestore();
  const accountId = getCourseAccountId(email);
  const normalizedEmail = email.trim().toLowerCase();

  await db.collection(COLLECTION).doc(accountId).set(
    {
      email: normalizedEmail,
      passwordHash: hashPassword(password),
      updatedAt: Timestamp.now(),
      createdAt: Timestamp.now(),
    },
    { merge: true }
  );

  return accountId;
}

export async function verifyCourseAccountPassword(
  email: string,
  password: string
): Promise<string | null> {
  getAdminApp();
  const db = getFirestore();
  const accountId = getCourseAccountId(email);
  const doc = await db.collection(COLLECTION).doc(accountId).get();

  if (!doc.exists) return null;

  const data = doc.data();
  if (!data?.passwordHash || !verifyPassword(password, data.passwordHash)) {
    return null;
  }

  return accountId;
}

export async function courseAccountExists(email: string): Promise<boolean> {
  getAdminApp();
  const db = getFirestore();
  const accountId = getCourseAccountId(email);
  const doc = await db.collection(COLLECTION).doc(accountId).get();
  return doc.exists;
}
