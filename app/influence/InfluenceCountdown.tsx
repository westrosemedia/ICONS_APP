"use client";

import { useState, useEffect } from "react";

const PRICE_INCREASE_DATE = "2026-03-10T00:00:00Z"; // End of March 9, 2026 UTC

export default function InfluenceCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  useEffect(() => {
    const calculate = () => {
      const now = Date.now();
      const end = new Date(PRICE_INCREASE_DATE).getTime();
      const diff = end - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
        return;
      }

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((diff % (1000 * 60)) / 1000),
        expired: false,
      });
    };

    calculate();
    const interval = setInterval(calculate, 1000);
    return () => clearInterval(interval);
  }, []);

  if (timeLeft.expired) return null;

  return (
    <div className="rounded-2xl border-2 border-black bg-white p-6 mb-8 max-w-md mx-auto">
      <p className="text-sm text-gray-600 uppercase tracking-wide text-center mb-4">
        Presale pricing ends March 9, 2026
      </p>
      <div className="flex justify-center gap-4">
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-black tabular-nums">{timeLeft.days}</span>
          <span className="text-xs text-gray-500 uppercase mt-1">Days</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-black tabular-nums">{timeLeft.hours}</span>
          <span className="text-xs text-gray-500 uppercase mt-1">Hours</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-black tabular-nums">{timeLeft.minutes}</span>
          <span className="text-xs text-gray-500 uppercase mt-1">Min</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl font-bold text-black tabular-nums">{timeLeft.seconds}</span>
          <span className="text-xs text-gray-500 uppercase mt-1">Sec</span>
        </div>
      </div>
    </div>
  );
}
