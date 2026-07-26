import { NextRequest, NextResponse } from "next/server";
import { getUserEnrollmentAdmin } from "@/lib/courseAdminStore";
import { getUserIdFromRequest } from "@/lib/courseAuth";

export const dynamic = "force-dynamic";

export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ courseId: string }> }
) {
  try {
    const { courseId } = await params;
    const userId = await getUserIdFromRequest(req);

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const enrollment = await getUserEnrollmentAdmin(userId, courseId);
    return NextResponse.json({ enrollment });
  } catch (error) {
    console.error("Get enrollment error:", error);
    return NextResponse.json(
      { error: "Unable to load enrollment." },
      { status: 500 }
    );
  }
}
