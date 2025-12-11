"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import analytics components only after user interaction
const ClarityAnalytics = dynamic(() => import("@/components/ClarityAnalytics"), { ssr: false });
const ScrollDepthTracker = dynamic(() => import("@/components/ScrollDepthTracker"), { ssr: false });
const ConversionTracker = dynamic(() => import("@/components/ConversionTracker"), { ssr: false });

export default function DeferredAnalytics() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    // Load analytics after first user interaction (scroll, click, touch)
    const loadAnalytics = () => {
      setShouldLoad(true);
      // Remove listeners after loading
      window.removeEventListener("scroll", loadAnalytics, { passive: true });
      window.removeEventListener("click", loadAnalytics);
      window.removeEventListener("touchstart", loadAnalytics, { passive: true });
    };

    // Wait for page to be interactive, then listen for user interaction
    if (document.readyState === "complete") {
      // Small delay to ensure page is fully loaded
      setTimeout(() => {
        window.addEventListener("scroll", loadAnalytics, { passive: true, once: true });
        window.addEventListener("click", loadAnalytics, { once: true });
        window.addEventListener("touchstart", loadAnalytics, { passive: true, once: true });
      }, 1000);
    } else {
      window.addEventListener("load", () => {
        setTimeout(() => {
          window.addEventListener("scroll", loadAnalytics, { passive: true, once: true });
          window.addEventListener("click", loadAnalytics, { once: true });
          window.addEventListener("touchstart", loadAnalytics, { passive: true, once: true });
        }, 1000);
      });
    }

    // Fallback: load after 3 seconds if no interaction
    const fallbackTimer = setTimeout(() => {
      setShouldLoad(true);
    }, 3000);

    return () => {
      clearTimeout(fallbackTimer);
      window.removeEventListener("scroll", loadAnalytics);
      window.removeEventListener("click", loadAnalytics);
      window.removeEventListener("touchstart", loadAnalytics);
    };
  }, []);

  if (!shouldLoad) return null;

  return (
    <>
      <ClarityAnalytics />
      <ScrollDepthTracker />
      <ConversionTracker />
    </>
  );
}

