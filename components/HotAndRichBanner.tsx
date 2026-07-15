"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HotAndRichBanner() {
  const pathname = usePathname();

  if (
    pathname === "/hot-and-rich" ||
    pathname === "/hot&rich" ||
    pathname === "/hot%26rich"
  ) {
    return null;
  }

  return (
    <Link
      href="/hot&rich"
      className="block w-full bg-[#1C1917] px-4 py-2 text-center text-[#FAF7F2] transition-colors hover:bg-[#3D3632]"
      aria-label="View the Hot and Rich Mastermind page"
    >
      <span className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-1 text-xs uppercase tracking-[0.2em] sm:flex-row sm:gap-3">
        <span className="font-semibold text-[#C9B99A]">Hot and Rich Mastermind</span>
        <span className="hidden text-[#FAF7F2]/40 sm:inline" aria-hidden>
          |
        </span>
        <span>Starts July 21</span>
      </span>
    </Link>
  );
}
