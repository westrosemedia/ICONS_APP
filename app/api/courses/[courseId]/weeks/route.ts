import { NextRequest, NextResponse } from "next/server";
import {
  getCourseWeeksAdmin,
  getPublishedCourseAdmin,
  isUserEnrolledAdmin,
} from "@/lib/courseAdminStore";
import { getUserIdFromRequest } from "@/lib/courseAuth";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ courseId: string }> }
) {
  try {
    const { courseId } = await params;
    const course = await getPublishedCourseAdmin(courseId);

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    const userId = await getUserIdFromRequest(req);
    if (!userId) {
      return NextResponse.json({ weeks: [] });
    }

    const enrolled = await isUserEnrolledAdmin(userId, courseId);
    if (!enrolled) {
      return NextResponse.json({ weeks: [] });
    }

    const weeks = await getCourseWeeksAdmin(courseId);
    return NextResponse.json({ weeks });
  } catch (error) {
    console.error("Get course weeks error:", error);
    return NextResponse.json({ error: "Unable to load lessons." }, { status: 500 });
  }
}
