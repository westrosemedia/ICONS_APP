"use client";

import { usePathname } from "next/navigation";
import HotAndRichBanner from "@/components/HotAndRichBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideGlobalHeader = pathname === "/cadence";
  const hidePromoBanner = hideGlobalHeader || pathname === "/";

  return (
    <>
      {!hidePromoBanner && <HotAndRichBanner />}
      {!hideGlobalHeader && <SiteHeader />}
      <main className="w-full">{children}</main>
      <SiteFooter />
    </>
  );
}
