"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

declare global {
  interface Window {
    AOS?: {
      init: (options?: Record<string, unknown>) => void;
      refresh: () => void;
    };
  }
}

const AOS_SRC = "https://unpkg.com/aos@2.3.4/dist/aos.js";

export default function AosInit() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined" || !window.AOS) return;
    window.AOS.refresh();
  }, [pathname]);

  return (
    <Script
      src={AOS_SRC}
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window === "undefined" || !window.AOS) return;
        window.AOS.init({
          duration: 800,
          easing: "ease-out-cubic",
          once: true,
          offset: 64,
          disable:
            typeof window !== "undefined" &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches,
        });
      }}
    />
  );
}
