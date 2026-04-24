import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    // eslint-disable-next-line no-console
    console.log("[help-feedback]", body);
  } catch {
    // eslint-disable-next-line no-console
    console.log("[help-feedback] invalid JSON");
  }
  return NextResponse.json({ ok: true });
}
