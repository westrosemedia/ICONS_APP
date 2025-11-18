"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ConversionTracker() {
  const pathname = usePathname();

  useEffect(() => {
    // Track button clicks (Enroll Now buttons)
    const trackButtonClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const button = target.closest("button");
      
      if (button && button.textContent?.toLowerCase().includes("enroll")) {
        if (typeof window !== "undefined" && (window as any).clarity) {
          (window as any).clarity("set", "enroll_button_clicked", pathname);
        }
        if (typeof window !== "undefined" && (window as any).va) {
          (window as any).va("event", "Enroll Button Click", {
            path: pathname,
            buttonText: button.textContent,
          });
        }
      }
    };

    // Track Stripe pricing table interactions
    const trackStripeInteraction = () => {
      const stripeTable = document.querySelector("stripe-pricing-table");
      if (stripeTable) {
        stripeTable.addEventListener("click", () => {
          if (typeof window !== "undefined" && (window as any).clarity) {
            (window as any).clarity("set", "stripe_table_interaction", pathname);
          }
          if (typeof window !== "undefined" && (window as any).va) {
            (window as any).va("event", "Stripe Table Interaction", {
              path: pathname,
            });
          }
        });
      }
    };

    // Track when user reaches investment section
    const trackInvestmentSection = () => {
      const investmentSection = document.getElementById("investment");
      if (investmentSection) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                if (typeof window !== "undefined" && (window as any).clarity) {
                  (window as any).clarity("set", "reached_investment_section", pathname);
                }
                if (typeof window !== "undefined" && (window as any).va) {
                  (window as any).va("event", "Reached Investment Section", {
                    path: pathname,
                  });
                }
                observer.disconnect();
              }
            });
          },
          { threshold: 0.5 }
        );
        observer.observe(investmentSection);
      }
    };

    document.addEventListener("click", trackButtonClick);
    trackStripeInteraction();
    trackInvestmentSection();

    return () => {
      document.removeEventListener("click", trackButtonClick);
    };
  }, [pathname]);

  return null;
}

