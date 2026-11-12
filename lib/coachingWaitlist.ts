export const COACHING_WAITLIST_COLLECTION = "private_coaching_waitlist";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateCoachingEmail(
  email: unknown
): { ok: true; email: string } | { ok: false; error: string } {
  const value = typeof email === "string" ? email.trim().toLowerCase() : "";
  if (!value || value.length > 254 || /[\u0000-\u001F]/.test(value) || !EMAIL_PATTERN.test(value)) {
    return { ok: false, error: "Enter a valid email address." };
  }
  return { ok: true, email: value };
}
