"use client";
import { useEffect, useState } from "react";
import { msUntilEnd, formatRemaining } from "@/lib/birthdayWeek";

export default function Countdown() {
  const [ms, setMs] = useState(msUntilEnd());

  useEffect(() => {
    const id = setInterval(() => setMs(msUntilEnd()), 1000);
    return () => clearInterval(id);
  }, []);

  const { days, hours, minutes, seconds } = formatRemaining(ms);
  const ended = ms <= 0;

  return (
    <div className="w-full">
      {ended ? (
        <div className="text-center text-sm md:text-base text-white/90 bg-gray-900 rounded-xl px-4 py-3">
          Birthday Week has ended. If you missed an offer, contact us and we will advise on next steps.
        </div>
      ) : (
        <div className="grid grid-cols-4 gap-3 text-center">
          {[
            { label: "days", value: days },
            { label: "hours", value: hours },
            { label: "minutes", value: minutes },
            { label: "seconds", value: seconds },
          ].map((b) => (
            <div key={b.label} className="bg-black text-white rounded-2xl py-4">
              <div className="text-3xl font-semibold tracking-tight">{String(b.value).padStart(2, "0")}</div>
              <div className="text-xs uppercase opacity-80">{b.label}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
