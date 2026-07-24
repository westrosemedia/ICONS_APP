import { normalizeFirebasePrivateKey } from "@/lib/firebasePrivateKey";

export type FirebaseAdminCredentials = {
  projectId: string;
  clientEmail: string;
  privateKey: string;
};

function parseServiceAccountJson(raw: string): FirebaseAdminCredentials | null {
  try {
    const parsed = JSON.parse(raw) as {
      project_id?: string;
      client_email?: string;
      private_key?: string;
    };

    const privateKey = normalizeFirebasePrivateKey(parsed.private_key);
    const clientEmail = parsed.client_email?.trim();
    const projectId =
      parsed.project_id?.trim() ||
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID?.trim();

    if (!privateKey || !clientEmail || !projectId) {
      return null;
    }

    return { projectId, clientEmail, privateKey };
  } catch {
    return null;
  }
}

export function getFirebaseAdminCredentials(): FirebaseAdminCredentials | null {
  const serviceAccountJson = process.env.FIREBASE_SERVICE_ACCOUNT_JSON?.trim();
  if (serviceAccountJson) {
    const fromJson = parseServiceAccountJson(serviceAccountJson);
    if (fromJson) return fromJson;
  }

  const privateKey = normalizeFirebasePrivateKey(process.env.FIREBASE_PRIVATE_KEY);
  const clientEmail = process.env.FIREBASE_CLIENT_EMAIL?.trim();
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID?.trim();

  if (!privateKey || !clientEmail || !projectId) {
    return null;
  }

  return { projectId, clientEmail, privateKey };
}
