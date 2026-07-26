import { getAuth } from "firebase-admin/auth";
import { getAdminApp } from "@/lib/firebaseAdmin";

export async function getUserIdFromRequest(
  req: Request
): Promise<string | null> {
  const header = req.headers.get("authorization");
  if (!header?.startsWith("Bearer ")) return null;

  const token = header.slice("Bearer ".length).trim();
  if (!token) return null;

  getAdminApp();
  const decoded = await getAuth().verifyIdToken(token);
  return decoded.uid;
}
