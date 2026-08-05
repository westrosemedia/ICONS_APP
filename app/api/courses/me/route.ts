import { NextRequest, NextResponse } from "next/server";
import { getAuthContextFromRequest } from "@/lib/courseAuth";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const context = await getAuthContextFromRequest(req);

  if (!context) {
    return NextResponse.json({ user: null });
  }

  return NextResponse.json({
    user: {
      uid: context.uid,
      email: context.email,
    },
  });
}
