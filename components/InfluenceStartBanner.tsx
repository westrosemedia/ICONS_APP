"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function InfluenceStartBanner() {
  const pathname = usePathname();

  if (pathname === "/influence") return null;

  return (
    <Link
      href="/influence"
      className="block w-full bg-[#1C1917] px-4 py-2 text-center text-[#FAF7F2] transition-colors hover:bg-[#3D3632]"
      aria-label="View the Influence program page"
    >
      <span className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-1 text-xs uppercase tracking-[0.2em] sm:flex-row sm:gap-3">
        <span className="font-semibold text-[#C9B99A]">Influence: 3 cohorts</span>
        <span className="hidden text-[#FAF7F2]/40 sm:inline" aria-hidden>
          |
        </span>
        <span>May 2026, August 2026, or January 2027</span>
        <span className="font-semibold text-[#C9B99A]">Choose your start date</span>
      </span>
    </Link>
  );
}
