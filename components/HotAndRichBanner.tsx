"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HotAndRichBanner() {
  const pathname = usePathname();

  if (pathname === "/influence") {
    return null;
  }

  return (
    <Link
      href="/influence"
      className="block w-full bg-[#1C1917] px-4 py-2 text-center text-[#FAF7F2] transition-colors hover:bg-[#3D3632]"
      aria-label="View the INFLUENCE program page"
    >
      <span className="mx-auto flex max-w-6xl items-center justify-center text-xs uppercase tracking-[0.2em]">
        <span className="font-semibold text-[#C9B99A]">
          INFLUENCE starting Aug 28
        </span>
      </span>
    </Link>
  );
}
