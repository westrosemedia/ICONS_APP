"use client";

import { useEffect, useState } from "react";

type CountdownState = {
  remainingMs: number;
  isExpired: boolean;
};

function getTargetTime(): Date {
  // Create target time: 9:00 AM tomorrow in America/Edmonton
  const now = new Date();
  
  // Get current time in Edmonton
  const edmontonNowStr = now.toLocaleString("en-US", { timeZone: "America/Edmonton" });
  const edmontonNow = new Date(edmontonNowStr);
  
  // Create target date: tomorrow at 9:00 AM in Edmonton
  const targetStr = new Date(edmontonNow);
  targetStr.setDate(targetStr.getDate() + 1);
  targetStr.setHours(9, 0, 0, 0);
  
  // Convert back to UTC by parsing the Edmonton time string
  const targetDateStr = targetStr.toLocaleString("en-US", { 
    timeZone: "America/Edmonton",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });
  
  // Parse the date string and create UTC equivalent
  const [datePart, timePart] = targetDateStr.split(", ");
  const [month, day, year] = datePart.split("/");
  const [hour, minute, second] = timePart.split(":");
  
  // Create date in Edmonton timezone, then convert to UTC
  const targetInEdmonton = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`);
  
  // Calculate offset: Edmonton time - UTC time
  const utcNow = new Date();
  const edmontonNowParsed = new Date(edmontonNowStr);
  const offset = edmontonNowParsed.getTime() - utcNow.getTime();
  
  // Apply offset to get UTC time
  return new Date(targetInEdmonton.getTime() - offset);
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
