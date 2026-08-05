import { NextRequest, NextResponse } from "next/server";
import { verifyCourseAccountPassword } from "@/lib/courseAccountStore";
import {
  buildCourseSessionCookie,
  createCourseSessionToken,
} from "@/lib/courseSession";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required." },
        { status: 400 }
      );
    }

    const accountId = await verifyCourseAccountPassword(email, password);
    if (!accountId) {
      return NextResponse.json(
        { error: "Invalid email or password." },
        { status: 401 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();
    const { token, maxAge } = createCourseSessionToken(accountId, normalizedEmail);
    const response = NextResponse.json({
      uid: accountId,
      email: normalizedEmail,
    });
    response.headers.set("Set-Cookie", buildCourseSessionCookie(token, maxAge));

    return response;
  } catch (error) {
    console.error("Course login error:", error);
    return NextResponse.json(
      { error: "Unable to sign in. Please try again." },
      { status: 500 }
    );
  }
}
