"use client";

import { useState } from "react";
import { homeBody } from "@/components/home/homeStyles";
import { homePageFaqItems } from "@/data/homePageFaq";

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="mt-10">
      {homePageFaqItems.map((item, index) => {
        const open = openIndex === index;
        return (
          <div key={item.question} data-home-reveal data-home-reveal-delay={100 + index * 100} className="border-b border-[#404042]/15">
            <button
              type="button"
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? null : index)}
            >
              <span className="font-[family-name:var(--font-wrm-display)] text-[24px] leading-snug text-[#020405]">
                {item.question}
              </span>
              <span
                aria-hidden="true"
                className={`inline-flex h-6 w-6 shrink-0 items-center justify-center text-[#020405] transition-transform duration-300 ease-out ${
                  open ? "rotate-45" : ""
                }`}
              >
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 1.5v13M1.5 8h13" />
                </svg>
              </span>
            </button>
            <div className={`grid transition-[grid-template-rows] duration-300 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
              <div className="overflow-hidden">
                <p className={`${homeBody} max-w-2xl pb-5 leading-relaxed text-[#404042]`}>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
