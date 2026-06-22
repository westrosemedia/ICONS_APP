"use client";

import { useEffect } from "react";

const CACHE_VERSION = "influence-cohorts-2026-06-08";

async function clearStaleClientStorage() {
  if ("caches" in window) {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames.map((cacheName) => caches.delete(cacheName)));
  }

  if ("serviceWorker" in navigator) {
    const registrations = await navigator.serviceWorker.getRegistrations();
    await Promise.all(registrations.map((registration) => registration.unregister()));
  }
}

export default function StaleCacheCleanup() {
  useEffect(() => {
    const storedVersion = window.localStorage.getItem("wrm-cache-version");
    if (storedVersion === CACHE_VERSION) return;

    void clearStaleClientStorage().then(() => {
      window.localStorage.setItem("wrm-cache-version", CACHE_VERSION);

      if (storedVersion) {
        window.location.reload();
      }
    });
  }, []);

  return null;
}
