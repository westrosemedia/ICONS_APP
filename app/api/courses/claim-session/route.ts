import { NextRequest, NextResponse } from "next/server";
import { getUserEnrollmentAdmin } from "@/lib/courseAdminStore";
import { getAuthContextFromRequest } from "@/lib/courseAuth";
import { claimCheckoutSessionForUser } from "@/lib/syncCourseEnrollment";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const context = await getAuthContextFromRequest(req);
    if (!context) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { courseId, sessionId } = await req.json();
    if (!courseId || !sessionId) {
      return NextResponse.json(
        { error: "Missing courseId or sessionId" },
        { status: 400 }
      );
    }

    const result = await claimCheckoutSessionForUser(
      context.uid,
      courseId,
      sessionId,
      context.email
    );
    const enrollment = await getUserEnrollmentAdmin(context.uid, courseId);

    return NextResponse.json({
      synced: result.synced,
      reason: result.reason,
      enrollment,
    });
  } catch (error) {
    console.error("Claim session error:", error);
    return NextResponse.json(
      { error: "Unable to claim purchase." },
      { status: 500 }
    );
  }
}
