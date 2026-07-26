import { NextRequest, NextResponse } from "next/server";
import { getPublishedCourseAdmin } from "@/lib/courseAdminStore";

export const dynamic = "force-dynamic";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ courseId: string }> }
) {
  try {
    const { courseId } = await params;
    const course = await getPublishedCourseAdmin(courseId);

    if (!course) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 });
    }

    return NextResponse.json({ course });
  } catch (error) {
    console.error("Get course error:", error);
    return NextResponse.json({ error: "Unable to load course." }, { status: 500 });
  }
}
