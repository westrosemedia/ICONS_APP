"use client";

import { useState } from "react";
import Link from "next/link";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

interface RestoreCourseAccessProps {
  courseId: string;
  loginUrl: string;
  isLoggedIn: boolean;
  userEmail?: string | null;
}

export default function RestoreCourseAccess({
  courseId,
  loginUrl,
  isLoggedIn,
  userEmail,
}: RestoreCourseAccessProps) {
  const router = useRouter();
  const [sessionId, setSessionId] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const getAuthHeaders = async () => {
    await auth?.authStateReady();
    const user = auth?.currentUser;
    if (!user) return null;

    const token = await user.getIdToken();
    return {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };
  };

  const reloadCourse = () => {
    router.refresh();
    window.location.reload();
  };

  const restoreAccess = async () => {
    setLoading(true);
    setError(null);
    setMessage(null);

    try {
      const headers = await getAuthHeaders();
      if (!headers) {
        setError("Sign in first, then restore your access.");
        return;
      }

      const response = await fetch("/api/courses/sync-enrollment", {
        method: "POST",
        headers,
        body: JSON.stringify({ courseId }),
      });

      const data = await response.json();

      if (data.enrollment?.paymentStatus === "completed") {
        setMessage("Access restored. Loading your course...");
        reloadCourse();
        return;
      }

      if (sessionId.trim()) {
        const claimResponse = await fetch("/api/courses/claim-session", {
          method: "POST",
          headers,
          body: JSON.stringify({
            courseId,
            sessionId: sessionId.trim(),
          }),
        });
        const claimData = await claimResponse.json();

        if (claimData.enrollment?.paymentStatus === "completed") {
          setMessage("Purchase linked. Loading your course...");
          reloadCourse();
          return;
        }

        setError(
          claimData.reason === "email_mismatch"
            ? "That purchase belongs to a different email. Sign in with the email you used at checkout."
            : "We could not link that purchase. Check the session ID or contact support."
        );
        return;
      }

      setError(
        data.reason === "no_paid_session"
          ? "No purchase found for this account yet. Sign in with your checkout email, or paste your Stripe session ID below."
          : "We could not restore access yet. Try your checkout session ID below."
      );
    } catch (err) {
      console.error("Restore access error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-6 border-t border-gray-200 space-y-4">
      <div className="rounded-xl border border-gray-200 bg-white p-6 text-left">
        <h3 className="text-lg font-semibold text-black mb-2">
          Already paid? Restore access
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          You should not need to buy again. Sign in with the same email you used
          at checkout, then restore your access here.
        </p>

        {!isLoggedIn ? (
          <Link
            href={loginUrl}
            className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Sign in to restore access
          </Link>
        ) : (
          <div className="space-y-4">
            {userEmail && (
              <p className="text-sm text-gray-600">
                Signed in as <span className="font-medium">{userEmail}</span>
              </p>
            )}
            <button
              type="button"
              onClick={restoreAccess}
              disabled={loading}
              className="inline-flex items-center justify-center px-8 py-3 bg-black text-white rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50"
            >
              {loading ? "Restoring..." : "Restore my access"}
            </button>
            <div>
              <label
                htmlFor="session-id"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Have a checkout session ID? Paste it here
              </label>
              <input
                id="session-id"
                type="text"
                value={sessionId}
                onChange={(e) => setSessionId(e.target.value)}
                placeholder="cs_live_..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm"
              />
              <p className="mt-2 text-xs text-gray-500">
                Find this in your Stripe receipt URL as{" "}
                <code className="text-gray-700">session_id=...</code>
              </p>
            </div>
          </div>
        )}

        {message && (
          <p className="mt-4 text-sm text-green-700">{message}</p>
        )}
        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
      </div>
    </div>
  );
}
