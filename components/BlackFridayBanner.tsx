"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function BlackFridayBanner() {
  const pathname = usePathname();
  
  // Don't show banner on black-friday page itself (it has its own)
  if (pathname === "/black-friday") {
    return null;
  }

  return (
    <Link href="/black-friday" className="block bg-[#c1ff72] text-black text-center py-3 sticky top-0 z-40 hover:bg-[#a8e65a] transition-colors">
      <p className="font-bold text-sm md:text-base">
        Black Friday Offers Live Now. Ends December 1st at Midnight.
      </p>
    </Link>
  );
}

