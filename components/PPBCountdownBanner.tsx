"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Calendar } from "lucide-react";

export default function PPBCountdownBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // PPB starts January 1, 2026
  const targetDate = new Date("2026-01-01T00:00:00").getTime();

  useEffect(() => {
    // Show banner after 3 seconds, only if user hasn't dismissed it
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem("ppbBannerDismissed");
      if (!dismissed) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        // Countdown finished
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("ppbBannerDismissed", "true");
    // Reset after 7 days
    setTimeout(() => {
      localStorage.removeItem("ppbBannerDismissed");
    }, 7 * 24 * 60 * 60 * 1000);
  };

  // Don't show if countdown has passed
  const now = new Date().getTime();
  if (now >= targetDate) {
    return null;
  }

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm text-white z-50 shadow-lg border-t border-white/10 transform transition-transform duration-300 ease-out">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3">
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <div className="flex-shrink-0">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-bold text-sm sm:text-base truncate">Powerful Personal Brand Starts Soon</h3>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-white/80">
                <span className="hidden sm:inline">Enrollment closes in:</span>
                <span className="inline sm:hidden">Enroll in:</span>
                <span className="font-semibold text-white">
                  {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              href="/ppb#stripe-pricing"
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors font-medium text-xs sm:text-sm whitespace-nowrap"
            >
              Enroll Now
            </Link>
            <button
              onClick={handleDismiss}
              className="p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
              aria-label="Close banner"
            >
              <X className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

