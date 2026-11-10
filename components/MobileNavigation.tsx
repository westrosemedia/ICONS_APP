"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import PrimaryNav from "@/components/PrimaryNav";
import { PHOTO_GALLERIES_URL } from "@/lib/siteNav";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const previousPath = useRef(pathname);

  useEffect(() => {
    if (previousPath.current === pathname) return;
    previousPath.current = pathname;
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="inline-flex h-11 w-11 items-center justify-center text-black lg:hidden"
        aria-expanded={open}
        aria-controls="site-menu"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
      </button>

      {open ? (
        <div id="site-menu" className="absolute inset-x-0 top-full z-50 border-b border-black/10 bg-paper lg:hidden">
          <nav className="container-elegant flex flex-col py-6" aria-label="Mobile">
            <PrimaryNav
              onNavigate={() => setOpen(false)}
              className="flex flex-col"
              linkClassName="w-full border-b border-black/10 py-4 text-[13px] tracking-[0.18em]"
            />
            <a
              href={PHOTO_GALLERIES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-button mt-6 w-fit"
              onClick={() => setOpen(false)}
            >
              View Photo Galleries
            </a>
          </nav>
        </div>
      ) : null}
    </>
  );
}
