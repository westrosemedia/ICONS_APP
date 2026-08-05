"use client";

import { useCallback, useEffect, useState } from "react";

export type CourseUser = {
  uid: string;
  email: string;
};

export function useCourseSession() {
  const [user, setUser] = useState<CourseUser | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(async () => {
    try {
      const response = await fetch("/api/courses/me", {
        credentials: "include",
        cache: "no-store",
      });
      if (!response.ok) {
        setUser(null);
        return;
      }

      const data = await response.json();
      setUser(data.user ?? null);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  return { user, loading, refresh, isLoggedIn: !!user };
}
