"use client";

import { usePathname } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AgencyHeader from "@/components/agency/AgencyHeader";
import AgencyFooter from "@/components/agency/AgencyFooter";
import { isRedesignedPath } from "@/lib/agency";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/";
  const isHotAndViral =
    pathname === "/hot-and-viral" || pathname.startsWith("/hot-and-viral/");

  if (isHotAndViral) {
    return (
      <div className={pathname === "/hot-and-viral" ? "pb-28 md:pb-0" : undefined}>
        <SiteHeader />
        <main className="w-full">{children}</main>
        <SiteFooter />
      </div>
    );
  }

  return (
    <>
      <AgencyHeader />
      <main className={isRedesignedPath(pathname) ? "wrm w-full" : "w-full"}>{children}</main>
      <AgencyFooter />
    </>
  );
}
