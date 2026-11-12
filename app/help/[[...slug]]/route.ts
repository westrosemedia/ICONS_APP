import { NextResponse } from "next/server";

function gone() {
  return new NextResponse("Gone", {
    status: 410,
    headers: {
      "content-type": "text/plain; charset=utf-8",
      "X-Robots-Tag": "noindex",
    },
  });
}

export const GET = gone;
export const POST = gone;
export const PUT = gone;
export const PATCH = gone;
export const DELETE = gone;
export const OPTIONS = gone;

export function HEAD() {
  return new NextResponse(null, {
    status: 410,
    headers: { "X-Robots-Tag": "noindex" },
  });
}
