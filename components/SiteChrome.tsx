"use client";

import { usePathname } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const hideGlobalHeader = pathname === "/cadence";

  return (
    <>
      {!hideGlobalHeader && <SiteHeader />}
      <main className="w-full">{children}</main>
      <SiteFooter />
    </>
  );
}
