"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { primaryNav } from "@/lib/siteNav";

function isCurrent(pathname: string, href: string) {
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function PrimaryNav({
  onNavigate,
  className = "",
  linkClassName = "",
}: {
  onNavigate?: () => void;
  className?: string;
  linkClassName?: string;
}) {
  const pathname = usePathname() || "/";

  return (
    <ul className={className}>
      {primaryNav.map((item) => {
        const current = isCurrent(pathname, item.href);
        return (
          <li key={item.href}>
            <Link
              href={item.href}
              aria-current={current ? "page" : undefined}
              onClick={onNavigate}
              className={`nav-link inline-flex items-center ${linkClassName} ${
                current ? "text-black" : "text-black/60 hover:text-black"
              }`}
            >
              <span className={current ? "border-b border-accent pb-px" : undefined}>{item.label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
