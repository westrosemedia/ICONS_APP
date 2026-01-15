"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type CountdownState = {
  remainingMs: number;
  isExpired: boolean;
};

function getTargetTime(): Date {
  const now = new Date();
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Edmonton",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = formatter.formatToParts(now);
  const getPart = (type: string) => parts.find((part) => part.type === type)?.value || "0";

  const year = parseInt(getPart("year"));
  const month = parseInt(getPart("month")) - 1;
  const day = parseInt(getPart("day"));

  let target = new Date(Date.UTC(year, month, day + 1, 16, 0, 0, 0));
  const testParts = formatter.formatToParts(target);
  let testHour = parseInt(testParts.find((part) => part.type === "hour")?.value || "0");

  if (testHour !== 9) {
    target = new Date(Date.UTC(year, month, day + 1, 15, 0, 0, 0));
    const verifyParts = formatter.formatToParts(target);
    testHour = parseInt(verifyParts.find((part) => part.type === "hour")?.value || "0");

    if (testHour !== 9) {
      target = new Date(Date.UTC(year, month, day + 1, 17, 0, 0, 0));
    }
  }

  return target;
}

function calculateCountdown(): CountdownState {
  const now = new Date();
  const target = getTargetTime();
  const remainingMs = target.getTime() - now.getTime();

  return {
    remainingMs: Math.max(0, remainingMs),
    isExpired: remainingMs <= 0,
  };
}

function formatTime(ms: number): string {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export default function OfferCountdownBanner() {
  const [countdown, setCountdown] = useState<CountdownState>(calculateCountdown);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="sticky top-0 z-50 w-full bg-black text-white">
      <div className="container-elegant py-2 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
        <div className="flex items-center gap-3 text-xs md:text-sm uppercase tracking-[0.25em] text-white/70">
          <span className="font-semibold">Offer drop</span>
          <span className="hidden md:inline text-white/40">•</span>
          <span className="text-white/90">Ends at 9:00 AM MT</span>
        </div>
        <div className="flex items-center justify-between md:justify-end gap-4">
          <span className="font-mono text-base md:text-lg font-bold">
            {formatTime(countdown.remainingMs)}
          </span>
          {countdown.isExpired ? (
            <span className="text-xs md:text-sm uppercase tracking-[0.25em] text-white/60">
              Offer expired
            </span>
          ) : (
            <Link
              href="/offer-drop"
              className="text-xs md:text-sm font-semibold uppercase tracking-[0.25em] bg-white text-black px-3 py-1 rounded-full hover:bg-white/90 transition-colors"
            >
              View offers
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
