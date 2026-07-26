import { NextRequest, NextResponse } from "next/server";
import {
  getCourseWeekAdmin,
  getPublishedCourseAdmin,
  isUserEnrolledAdmin,
} from "@/lib/courseAdminStore";
import { getUserIdFromRequest } from "@/lib/courseAuth";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ courseId: string; weekNumber: string }> }
) {
  try {
    const { courseId, weekNumber } = await params;
    const weekNum = Number(weekNumber);

    if (!Number.isFinite(weekNum)) {
      return NextResponse.json({ error: "Invalid lesson number" }, { status: 400 });
    }

    const course = await getPublishedCourseAdmin(courseId);
    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    const userId = await getUserIdFromRequest(req);
    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const enrolled = await isUserEnrolledAdmin(userId, courseId);
    if (!enrolled) {
      return NextResponse.json({ error: "Not enrolled" }, { status: 403 });
    }

    const week = await getCourseWeekAdmin(courseId, weekNum);
    if (!week) {
      return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
    }

    return NextResponse.json({ week });
  } catch (error) {
    console.error("Get course week error:", error);
    return NextResponse.json({ error: "Unable to load lesson." }, { status: 500 });
  }
}
