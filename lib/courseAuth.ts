import { getAuth, DecodedIdToken } from "firebase-admin/auth";
import { getAdminApp } from "@/lib/firebaseAdmin";
import {
  CourseSession,
  getCourseSessionFromRequest,
} from "@/lib/courseSession";

export type AuthContext = {
  uid: string;
  email: string | null;
  source: "course" | "firebase";
};

export async function getAuthContextFromRequest(
  req: Request
): Promise<AuthContext | null> {
  const courseSession = getCourseSessionFromRequest(req);
  if (courseSession) {
    return {
      uid: courseSession.uid,
      email: courseSession.email,
      source: "course",
    };
  }

  const header = req.headers.get("authorization");
  if (!header?.startsWith("Bearer ")) return null;

  const token = header.slice("Bearer ".length).trim();
  if (!token) return null;

  try {
    getAdminApp();
    const decoded: DecodedIdToken = await getAuth().verifyIdToken(token);

    return {
      uid: decoded.uid,
      email: decoded.email?.trim().toLowerCase() || null,
      source: "firebase",
    };
  } catch {
    return null;
  }
}

export async function getUserIdFromRequest(
  req: Request
): Promise<string | null> {
  const context = await getAuthContextFromRequest(req);
  return context?.uid ?? null;
}

export function getCourseSessionClient(): CourseSession | null {
  if (typeof document === "undefined") return null;
  return null;
}
