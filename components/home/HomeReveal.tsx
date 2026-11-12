"use client";

import { useEffect, useRef, type ReactNode } from "react";

export default function HomeReveal({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const items = [...root.querySelectorAll<HTMLElement>("[data-home-reveal]")];
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      items.forEach((item) => item.setAttribute("data-home-revealed", ""));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const item = entry.target as HTMLElement;
          const delay = item.dataset.homeRevealDelay ?? "0";
          item.style.transition = "opacity 700ms ease-out, transform 700ms ease-out";
          item.style.transitionDelay = `${delay}ms`;
          requestAnimationFrame(() => item.setAttribute("data-home-revealed", ""));
          observer.unobserve(item);
        });
      },
      { threshold: 0.2 },
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
