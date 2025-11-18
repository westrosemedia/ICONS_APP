"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollDepthTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Track scroll depth milestones
    const milestones = [25, 50, 75, 90, 100];
    const trackedMilestones = new Set<number>();
    
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const scrollPercentage = Math.round(
        ((scrollTop + windowHeight) / documentHeight) * 100
      );

      milestones.forEach((milestone) => {
        if (
          scrollPercentage >= milestone &&
          !trackedMilestones.has(milestone)
        ) {
          trackedMilestones.add(milestone);
          
          // Track in Clarity
          if (typeof window !== "undefined" && (window as any).clarity) {
            (window as any).clarity("set", `scroll_depth_${milestone}`, pathname);
          }

          // Track in Vercel Analytics (if available)
          if (typeof window !== "undefined" && (window as any).va) {
            (window as any).va("event", "Scroll Depth", {
              depth: `${milestone}%`,
              path: pathname,
            });
          }

          // Console log for debugging
          console.log(`Scroll depth: ${milestone}% on ${pathname}`);
        }
      });
    };

    // Track exit intent
    const handleExitIntent = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        if (typeof window !== "undefined" && (window as any).clarity) {
          (window as any).clarity("set", "exit_intent", pathname);
        }
        if (typeof window !== "undefined" && (window as any).va) {
          (window as any).va("event", "Exit Intent", { path: pathname });
        }
      }
    };

    // Track time on page
    const startTime = Date.now();
    const trackTimeOnPage = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      
      if (typeof window !== "undefined" && (window as any).clarity) {
        (window as any).clarity("set", "time_on_page", timeSpent);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("mouseleave", handleExitIntent);
    
    // Track time on page when user leaves
    window.addEventListener("beforeunload", trackTimeOnPage);
    window.addEventListener("pagehide", trackTimeOnPage);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseleave", handleExitIntent);
      window.removeEventListener("beforeunload", trackTimeOnPage);
      window.removeEventListener("pagehide", trackTimeOnPage);
    };
  }, [pathname]);

  return null;
}

