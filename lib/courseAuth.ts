import { getAuth, DecodedIdToken } from "firebase-admin/auth";
import { getAdminApp } from "@/lib/firebaseAdmin";

export type AuthContext = {
  uid: string;
  email: string | null;
};

export async function getAuthContextFromRequest(
  req: Request
): Promise<AuthContext | null> {
  const header = req.headers.get("authorization");
  if (!header?.startsWith("Bearer ")) return null;

  const token = header.slice("Bearer ".length).trim();
  if (!token) return null;

  getAdminApp();
  const decoded: DecodedIdToken = await getAuth().verifyIdToken(token);

  return {
    uid: decoded.uid,
    email: decoded.email?.trim().toLowerCase() || null,
  };
}

export async function getUserIdFromRequest(
  req: Request
): Promise<string | null> {
  const context = await getAuthContextFromRequest(req);
  return context?.uid ?? null;
}
