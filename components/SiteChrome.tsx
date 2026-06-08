"use client";

import { usePathname } from "next/navigation";
import InfluenceStartBanner from "@/components/InfluenceStartBanner";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideGlobalHeader = pathname === "/cadence";
  const hideInfluenceBanner = hideGlobalHeader || pathname === "/";

  return (
    <>
      {!hideInfluenceBanner && <InfluenceStartBanner />}
      {!hideGlobalHeader && <SiteHeader />}
      <main className="w-full">{children}</main>
      <SiteFooter />
    </>
  );
}
