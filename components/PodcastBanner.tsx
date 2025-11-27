"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Play } from "lucide-react";

export default function PodcastBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show banner after 3 seconds, only if user hasn't dismissed it
    const timer = setTimeout(() => {
      const dismissed = localStorage.getItem("podcastBannerDismissed");
      if (!dismissed) {
        setIsVisible(true);
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem("podcastBannerDismissed", "true");
    // Reset after 7 days
    setTimeout(() => {
      localStorage.removeItem("podcastBannerDismissed");
    }, 7 * 24 * 60 * 60 * 1000);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-sm text-white z-50 shadow-lg border-t border-white/10 transform transition-transform duration-300 ease-out">
      <div className="max-w-6xl mx-auto px-3 sm:px-4 py-2.5 sm:py-3">
        <div className="flex items-center justify-between gap-2 sm:gap-3">
          <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
            <div className="flex-shrink-0">
              <Play className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="font-bold text-sm sm:text-base truncate">Listen to ICONS Podcast</h3>
              <p className="text-xs sm:text-sm text-white/70 hidden sm:block">New episodes every week</p>
            </div>
          </div>
          <div className="flex items-center gap-2 flex-shrink-0">
            <Link
              href="/podcast"
              className="px-3 sm:px-4 py-1.5 sm:py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors font-medium text-xs sm:text-sm whitespace-nowrap"
            >
              Listen
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

