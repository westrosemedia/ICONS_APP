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
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white p-4 z-50 shadow-lg border-t border-gray-800">
      <div className="container-elegant max-w-6xl mx-auto flex items-center justify-between gap-4 flex-wrap">
        <div className="flex items-center gap-4 flex-1 min-w-[250px]">
          <div className="flex-shrink-0">
            <Play className="w-8 h-8" />
          </div>
          <div>
            <h3 className="font-bold text-lg">Listen to ICONS Podcast</h3>
            <p className="text-sm text-white/80">New episodes every week</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="/podcast"
            className="px-4 py-2 bg-white text-black rounded-lg hover:bg-gray-100 transition-colors font-medium text-sm"
          >
            Listen Now
          </Link>
          <button
            onClick={handleDismiss}
            className="p-2 hover:bg-gray-800 rounded-lg transition-colors"
            aria-label="Close banner"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}

