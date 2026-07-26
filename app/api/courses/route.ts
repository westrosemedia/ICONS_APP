import { NextResponse } from "next/server";
import { getPublishedCoursesAdmin } from "@/lib/courseAdminStore";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const courses = await getPublishedCoursesAdmin();
    return NextResponse.json({ courses });
  } catch (error) {
    console.error("List courses error:", error);
    return NextResponse.json({ error: "Unable to load courses." }, { status: 500 });
  }
}
