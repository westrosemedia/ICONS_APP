"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { workWithUsItems } from "@/lib/workWithUsLinks";

export default function WorkWithUsNav() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) close();
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        className="btn btn-sm inline-flex items-center gap-1"
        aria-expanded={open}
        aria-haspopup="true"
        aria-controls="work-with-us-menu"
        id="work-with-us-trigger"
        onClick={() => setOpen((v) => !v)}
      >
        Work with Us
        <ChevronDown
          className={`h-4 w-4 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
          aria-hidden
        />
      </button>
      {open ? (
        <div
          id="work-with-us-menu"
          role="menu"
          aria-labelledby="work-with-us-trigger"
          className="absolute right-0 top-full mt-2 w-64 rounded-lg border border-gray-200 bg-white py-1 shadow-lg z-50"
        >
          {workWithUsItems.map((item) =>
            item.external ? (
              <a
                key={item.href}
                role="menuitem"
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-black"
                onClick={close}
              >
                {item.label}
              </a>
            ) : (
              <Link
                key={item.href}
                role="menuitem"
                href={item.href}
                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-black"
                onClick={close}
              >
                {item.label}
              </Link>
            ),
          )}
        </div>
      ) : null}
    </div>
  );
}
