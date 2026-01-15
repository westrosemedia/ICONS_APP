"use client";

import { useEffect, useState } from "react";

type CountdownState = {
  remainingMs: number;
  isExpired: boolean;
};

function getEdmontonTime(): Date {
  // Get current time in Edmonton (America/Edmonton timezone)
  const now = new Date();
  const edmontonTime = new Date(now.toLocaleString("en-US", { timeZone: "America/Edmonton" }));
  
  // Calculate offset between UTC and Edmonton time
  const utcTime = new Date(now.toLocaleString("en-US", { timeZone: "UTC" }));
  const offset = edmontonTime.getTime() - utcTime.getTime();
  
  // Apply offset to current UTC time
  return new Date(now.getTime() + offset);
}

function getTargetTime(): Date {
  const edmontonNow = getEdmontonTime();
  const target = new Date(edmontonNow);
  
  // Set to 9:00 AM tomorrow
  target.setDate(target.getDate() + 1);
  target.setHours(9, 0, 0, 0);
  
  return target;
}

function calculateCountdown(): CountdownState {
  const now = getEdmontonTime();
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

export default function CountdownBar() {
  const [countdown, setCountdown] = useState<CountdownState>(calculateCountdown);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (countdown.isExpired) {
    return (
      <div className="fixed top-0 left-0 right-0 bg-black text-white py-3 px-4 text-center z-50 md:relative md:bg-red-600">
        <p className="text-sm md:text-base font-bold">OFFER EXPIRED</p>
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 right-0 bg-black text-white py-3 px-4 text-center z-50 md:relative">
      <p className="text-xs md:text-sm uppercase tracking-wider mb-1">Limited Time Offer</p>
      <p className="text-lg md:text-2xl font-bold font-mono">
        {formatTime(countdown.remainingMs)}
      </p>
      <p className="text-xs md:text-sm mt-1 opacity-80">Ends tomorrow at 9:00 AM MT</p>
    </div>
  );
}
