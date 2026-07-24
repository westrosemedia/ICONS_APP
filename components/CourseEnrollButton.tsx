"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";

interface CourseEnrollButtonProps {
  courseId: string;
  priceId: string;
  label?: string;
  className?: string;
  loginRedirect?: string;
}

export default function CourseEnrollButton({
  courseId,
  priceId,
  label = "Get Instant Access",
  className = "px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed",
  loginRedirect,
}: CourseEnrollButtonProps) {
  const router = useRouter();
  const [user, loadingAuth] = useAuthState(auth);
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const redirectPath = loginRedirect || `/courses/${courseId}`;

  const handleEnroll = async () => {
    if (loadingAuth) return;

    if (!user) {
      router.push(
        `/login?redirect=${encodeURIComponent(redirectPath)}&mode=signup`
      );
      return;
    }

    setIsEnrolling(true);
    setError(null);

    try {
      const response = await fetch("/api/courses/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          priceId,
          courseId,
          userId: user.uid,
          customerEmail: user.email,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({
          error: "Failed to create checkout session",
        }));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("No checkout URL received");
      }
    } catch (err) {
      console.error("Enrollment error:", err);
      setError(
        err instanceof Error
          ? err.message
          : "Error starting checkout. Please try again."
      );
    } finally {
      setIsEnrolling(false);
    }
  };

  return (
    <div className="text-center">
      {error && (
        <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-red-600 text-sm">{error}</p>
        </div>
      )}
      <button
        onClick={handleEnroll}
        disabled={isEnrolling || loadingAuth}
        className={className}
      >
        {isEnrolling ? "Redirecting to checkout..." : label}
      </button>
    </div>
  );
}
