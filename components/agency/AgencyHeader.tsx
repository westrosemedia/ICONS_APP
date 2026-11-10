"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { agencyNav, PHOTO_GALLERIES_URL } from "@/lib/agency";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

const linkClass =
  "text-[11px] font-medium uppercase tracking-[0.18em] text-[#171515] transition-colors hover:text-[#A66A55]";

export default function AgencyHeader() {
  const pathname = usePathname() || "/";
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-[#171515]/15 bg-[#E9E1D7]">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-6 px-5 py-4 sm:px-8 lg:px-14">
        <Link
          href="/"
          className="font-[family-name:var(--font-wrm-display)] text-[1.7rem] leading-none tracking-[-0.03em] text-[#171515]"
        >
          West Rose Media
        </Link>

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Primary">
          {agencyNav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={linkClass}
                  aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
                >
                  {item.label}
                </Link>
                <div className="invisible absolute left-0 top-full z-50 min-w-[17.5rem] border border-[#171515]/15 bg-[#E9E1D7] py-2 opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-5 py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-[#171515] hover:text-[#A66A55]"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={linkClass}
                aria-current={isCurrent(pathname, item.href) ? "page" : undefined}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <button
          type="button"
          className="inline-flex items-center gap-2 text-[11px] font-medium uppercase tracking-[0.2em] text-[#171515] xl:hidden"
          aria-expanded={open}
          aria-controls="agency-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open ? (
        <div
          id="agency-menu"
          className="fixed inset-0 top-[65px] z-40 overflow-y-auto bg-[#E9E1D7] xl:hidden"
        >
          <nav className="flex flex-col px-6 py-8" aria-label="Mobile">
            {agencyNav.map((item) => (
              <div key={item.href} className="border-b border-[#171515]/15">
                <Link
                  href={item.href}
                  className="block py-4 font-[family-name:var(--font-wrm-display)] text-4xl tracking-[-0.03em] text-[#171515]"
                >
                  {item.label}
                </Link>
                {item.children ? (
                  <div className="flex flex-col pb-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="py-2 text-[12px] font-medium uppercase tracking-[0.18em] text-[#A66A55]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
            <div className="mt-8 flex flex-col gap-4 text-[12px] uppercase tracking-[0.18em]">
              <Link href="/login" className="text-[#171515]">
                Sign in
              </Link>
              <a href={PHOTO_GALLERIES_URL} target="_blank" rel="noopener noreferrer">
                Photo galleries
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
