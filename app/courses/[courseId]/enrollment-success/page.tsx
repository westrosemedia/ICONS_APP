"use client";

import { Suspense, useEffect, useState } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Course } from "@/lib/types/course";
import { CourseService } from "@/lib/courseService";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { signInWithCustomToken } from "firebase/auth";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function EnrollmentSuccessContent() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const courseId = params?.courseId as string;
  const sessionId = searchParams?.get("session_id");
  const [user, loadingAuth] = useAuthState(auth);
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [enrollmentVerified, setEnrollmentVerified] = useState(false);
  const [checkoutEmail, setCheckoutEmail] = useState<string | null>(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [activating, setActivating] = useState(false);
  const [activateError, setActivateError] = useState<string | null>(null);

  useEffect(() => {
    if (!courseId) return;

    const loadPage = async () => {
      const courseData = await CourseService.getCourse(courseId);
      setCourse(courseData);

      if (sessionId) {
        try {
          const response = await fetch(
            `/api/courses/verify-session?session_id=${encodeURIComponent(sessionId)}`
          );
          if (response.ok) {
            const data = await response.json();
            setCheckoutEmail(data.email || null);
          }
        } catch (error) {
          console.error("Unable to verify checkout session:", error);
        }
      }

      setLoading(false);
    };

    loadPage();
  }, [courseId, sessionId]);

  useEffect(() => {
    if (!courseId || !user || loadingAuth) return;

    const verifyEnrollment = async () => {
      const enrollment = await CourseService.getUserEnrollment(user.uid, courseId);
      setEnrollmentVerified(enrollment?.paymentStatus === "completed");

      if (!enrollment) {
        setTimeout(async () => {
          const retryEnrollment = await CourseService.getUserEnrollment(
            user.uid,
            courseId
          );
          setEnrollmentVerified(retryEnrollment?.paymentStatus === "completed");
        }, 2000);
      }
    };

    verifyEnrollment();
  }, [courseId, user, loadingAuth]);

  const handleActivateAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    setActivateError(null);

    if (!sessionId) {
      setActivateError("Missing checkout session. Please contact support.");
      return;
    }

    if (password.length < 6) {
      setActivateError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setActivateError("Passwords do not match.");
      return;
    }

    setActivating(true);

    try {
      const response = await fetch("/api/courses/activate-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          sessionId,
          password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to activate your account.");
      }

      if (!auth) {
        throw new Error("Authentication is not configured.");
      }

      await signInWithCustomToken(auth, data.customToken);
      setEnrollmentVerified(true);
      router.push(`/courses/${courseId}`);
    } catch (error) {
      console.error("Activate account error:", error);
      setActivateError(
        error instanceof Error
          ? error.message
          : "Unable to activate your account. Please try again."
      );
    } finally {
      setActivating(false);
    }
  };

  if (loading || loadingAuth) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">Processing enrollment...</p>
        </div>
      </div>
    );
  }

  const needsAccountSetup = !user && sessionId && checkoutEmail;

  return (
    <div className="min-h-screen bg-white">
      <section className="section-padding">
        <div className="container-elegant max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-hero text-black mb-4">Payment successful</h1>
            {needsAccountSetup ? (
              <p className="text-editorial text-gray-600 mb-8">
                Choose a password for {checkoutEmail} to access{" "}
                {course?.title || "your course"}.
              </p>
            ) : enrollmentVerified ? (
              <p className="text-editorial text-gray-600 mb-8">
                You're all set. You now have access to{" "}
                {course?.title || "the course"}.
              </p>
            ) : (
              <p className="text-editorial text-gray-600 mb-8">
                Your payment went through. We're finishing your enrollment now.
              </p>
            )}
          </motion.div>

          {needsAccountSetup ? (
            <form
              onSubmit={handleActivateAccount}
              className="max-w-md mx-auto text-left space-y-4"
            >
              {activateError && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{activateError}</p>
                </div>
              )}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={checkoutEmail}
                  readOnly
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-700"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                  minLength={6}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Confirm password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                  minLength={6}
                  required
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={activating}
              >
                {activating ? "Setting up access..." : "Access my course"}
              </Button>
            </form>
          ) : (
            <div className="space-y-4">
              <Link
                href={`/courses/${courseId}`}
                className="inline-flex items-center gap-2 px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors"
              >
                Start Learning
                <ArrowRight className="w-5 h-5" />
              </Link>
              <div>
                <Link
                  href="/courses"
                  className="text-gray-600 hover:text-black transition-colors"
                >
                  View all courses
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function EnrollmentSuccessPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      }
    >
      <EnrollmentSuccessContent />
    </Suspense>
  );
}
