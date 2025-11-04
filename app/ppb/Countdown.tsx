"use client";

import { useState, useEffect } from "react";

interface CountdownProps {
  endDate: string; // ISO string format
}

export default function Countdown({ endDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    expired: false,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      try {
        const now = new Date().getTime();
        const end = new Date(endDate).getTime();
        const difference = end - now;

        if (difference <= 0) {
          return {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
            expired: true,
          };
        }

        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
          expired: false,
        };
      } catch {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          expired: true,
        };
      }
    };

    // Set initial time
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  if (timeLeft.expired) {
    return null;
  }

  return (
    <div className="bg-black text-white rounded-2xl p-6 mb-6">
      <div className="text-center mb-4">
        <p className="text-sm font-semibold uppercase tracking-wide opacity-80 mb-2">
          Black Friday Offer Ends In
        </p>
      </div>
      <div className="flex justify-center gap-4 md:gap-6">
        <div className="flex flex-col items-center">
          <div className="text-3xl md:text-4xl font-bold">{timeLeft.days}</div>
          <div className="text-xs md:text-sm opacity-70 uppercase tracking-wide mt-1">Days</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl md:text-4xl font-bold">{timeLeft.hours}</div>
          <div className="text-xs md:text-sm opacity-70 uppercase tracking-wide mt-1">Hours</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl md:text-4xl font-bold">{timeLeft.minutes}</div>
          <div className="text-xs md:text-sm opacity-70 uppercase tracking-wide mt-1">Minutes</div>
        </div>
        <div className="flex flex-col items-center">
          <div className="text-3xl md:text-4xl font-bold">{timeLeft.seconds}</div>
          <div className="text-xs md:text-sm opacity-70 uppercase tracking-wide mt-1">Seconds</div>
        </div>
      </div>
    </div>
  );
}
