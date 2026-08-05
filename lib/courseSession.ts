import { createHmac, timingSafeEqual } from "crypto";

const COOKIE_NAME = "course_session";
const MAX_AGE_SECONDS = 60 * 60 * 24 * 30;

export type CourseSession = {
  uid: string;
  email: string;
  exp: number;
};

function getSessionSecret(): string {
  const secret =
    process.env.COURSE_SESSION_SECRET ||
    process.env.STRIPE_WEBHOOK_SECRET ||
    process.env.STRIPE_SECRET_KEY;

  if (!secret) {
    throw new Error("Course session secret is not configured.");
  }

  return secret;
}

function sign(value: string): string {
  return createHmac("sha256", getSessionSecret()).update(value).digest("base64url");
}

export function createCourseSessionToken(
  uid: string,
  email: string
): { token: string; maxAge: number } {
  const exp = Math.floor(Date.now() / 1000) + MAX_AGE_SECONDS;
  const payload = Buffer.from(
    JSON.stringify({ uid, email: email.trim().toLowerCase(), exp }),
    "utf8"
  ).toString("base64url");
  const signature = sign(payload);

  return {
    token: `${payload}.${signature}`,
    maxAge: MAX_AGE_SECONDS,
  };
}

export function parseCourseSessionToken(token: string): CourseSession | null {
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return null;

  const expected = sign(payload);
  try {
    if (
      expected.length !== signature.length ||
      !timingSafeEqual(Buffer.from(expected), Buffer.from(signature))
    ) {
      return null;
    }
  } catch {
    return null;
  }

  try {
    const session = JSON.parse(
      Buffer.from(payload, "base64url").toString("utf8")
    ) as CourseSession;

    if (!session.uid || !session.email || !session.exp) return null;
    if (session.exp < Math.floor(Date.now() / 1000)) return null;

    return session;
  } catch {
    return null;
  }
}

export function getCourseSessionCookieName(): string {
  return COOKIE_NAME;
}

export function buildCourseSessionCookie(token: string, maxAge: number): string {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  return `${COOKIE_NAME}=${token}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${maxAge}${secure}`;
}

export function clearCourseSessionCookie(): string {
  const secure = process.env.NODE_ENV === "production" ? "; Secure" : "";
  return `${COOKIE_NAME}=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0${secure}`;
}

export function getCourseSessionFromRequest(req: Request): CourseSession | null {
  const cookieHeader = req.headers.get("cookie");
  if (!cookieHeader) return null;

  const cookies = Object.fromEntries(
    cookieHeader.split(";").map((part) => {
      const [key, ...rest] = part.trim().split("=");
      return [key, rest.join("=")];
    })
  );

  const token = cookies[COOKIE_NAME];
  if (!token) return null;

  return parseCourseSessionToken(token);
}
