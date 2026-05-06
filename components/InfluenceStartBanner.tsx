"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const INFLUENCE_START_DATE = "2026-06-01T00:00:00-06:00";

type CountdownState = {
  days: number;
  hours: number;
  minutes: number;
  expired: boolean;
};

function calculateCountdown(): CountdownState {
  const remainingMs = new Date(INFLUENCE_START_DATE).getTime() - Date.now();

  if (remainingMs <= 0) {
    return { days: 0, hours: 0, minutes: 0, expired: true };
  }

  const totalMinutes = Math.floor(remainingMs / (1000 * 60));
  const days = Math.floor(totalMinutes / (60 * 24));
  const hours = Math.floor((totalMinutes % (60 * 24)) / 60);
  const minutes = totalMinutes % 60;

  return { days, hours, minutes, expired: false };
}

export default function InfluenceStartBanner() {
  const pathname = usePathname();
  const [countdown, setCountdown] = useState<CountdownState>(calculateCountdown);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 60 * 1000);

    return () => clearInterval(interval);
  }, []);

  if (pathname === "/influence") return null;

  return (
    <Link
      href="/influence"
      className="block w-full bg-[#1C1917] px-4 py-2 text-center text-[#FAF7F2] transition-colors hover:bg-[#3D3632]"
      aria-label="View the Influence program page"
    >
      <span className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-1 text-xs uppercase tracking-[0.2em] sm:flex-row sm:gap-3">
        <span className="font-semibold text-[#C9B99A]">Influence begins June 1</span>
        <span className="hidden text-[#FAF7F2]/40 sm:inline" aria-hidden>
          |
        </span>
        <span aria-live="polite">
          {countdown.expired
            ? "Enrollment is open now"
            : `${countdown.days}d ${countdown.hours}h ${countdown.minutes}m to go`}
        </span>
        <span className="font-semibold text-[#C9B99A]">See the program</span>
      </span>
    </Link>
  );
}
