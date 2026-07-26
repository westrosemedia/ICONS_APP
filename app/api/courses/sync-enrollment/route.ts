import { NextRequest, NextResponse } from "next/server";
import { getUserEnrollmentAdmin } from "@/lib/courseAdminStore";
import { getUserIdFromRequest } from "@/lib/courseAuth";
import { syncCourseEnrollmentForUser } from "@/lib/syncCourseEnrollment";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const userId = await getUserIdFromRequest(req);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { courseId } = await req.json();
    if (!courseId) {
      return NextResponse.json({ error: "Missing courseId" }, { status: 400 });
    }

    const result = await syncCourseEnrollmentForUser(userId, courseId);
    const enrollment = await getUserEnrollmentAdmin(userId, courseId);

    return NextResponse.json({
      synced: result.synced,
      reason: result.reason,
      enrollment,
    });
  } catch (error) {
    console.error("Sync enrollment error:", error);
    return NextResponse.json(
      { error: "Unable to sync enrollment." },
      { status: 500 }
    );
  }
}
