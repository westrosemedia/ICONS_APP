"use client";

import React, { Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/lib/firebase";
import { GROW_LIKE_YOU_MEAN_IT } from "@/lib/courses/grow-like-you-mean-it";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/courses";
  const initialMode = searchParams.get("mode") === "signup" ? "signup" : "login";

  const [mode, setMode] = useState<"login" | "signup">(initialMode);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    setMode(initialMode);
  }, [initialMode]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      if (!auth) {
        throw new Error("Authentication is not configured.");
      }

      if (mode === "signup") {
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        await signInWithEmailAndPassword(auth, email, password);
      }

      router.push(redirect);
    } catch (err) {
      console.error("Auth error:", err);
      const message =
        err instanceof Error ? err.message : "Unable to sign in. Please try again.";

      if (message.includes("auth/configuration-not-found")) {
        setError("config-not-found");
      } else {
        setError(message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md w-full mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-hero text-black mb-2">
            {mode === "signup" ? "Create your account" : "Welcome back"}
          </h1>
          <p className="text-editorial text-gray-600 mb-12">
            {mode === "signup"
              ? "Create an account to purchase and access your course."
              : "Sign in to access your courses and content."}
          </p>

          {error && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-left space-y-3">
              {error === "config-not-found" ? (
                <>
                  <p className="text-red-700 text-sm font-medium">
                    Email sign-in is not turned on in Firebase yet.
                  </p>
                  <p className="text-red-600 text-sm">
                    If you already paid, you do not need to buy again. Finish
                    setup from your checkout link instead:
                  </p>
                  <Link
                    href={`${GROW_LIKE_YOU_MEAN_IT.coursePath}/enrollment-success?session_id=cs_live_b1L0kKAXrntaltCaE1oq3cqub752fSX4rItO8VvVQaDeuHTZAdC4SSHcHY`}
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
                  >
                    Finish my course setup
                  </Link>
                  <p className="text-red-600 text-xs">
                    To enable login here: Firebase Console → Authentication →
                    Sign-in method → Email/Password → Enable.
                  </p>
                </>
              ) : (
                <p className="text-red-600 text-sm">{error}</p>
              )}
            </div>
          )}

          <div className="mb-6 rounded-lg border border-gray-200 bg-gray-50 p-4 text-left">
            <p className="text-sm text-gray-700 font-medium mb-2">
              Already paid for Grow Like You Mean It?
            </p>
            <Link
              href={`${GROW_LIKE_YOU_MEAN_IT.coursePath}/enrollment-success?session_id=cs_live_b1L0kKAXrntaltCaE1oq3cqub752fSX4rItO8VvVQaDeuHTZAdC4SSHcHY`}
              className="text-sm text-black underline underline-offset-4 hover:text-gray-700"
            >
              Finish setup without signing in again
            </Link>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                  placeholder="Enter your email"
                  required
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
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent transition-colors"
                  placeholder="Enter your password"
                  minLength={6}
                  required
                />
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Please wait..."
                : mode === "signup"
                  ? "Create Account"
                  : "Sign In"}
            </Button>
          </form>

          <button
            type="button"
            onClick={() =>
              setMode((current) => (current === "login" ? "signup" : "login"))
            }
            className="mt-6 text-sm text-gray-600 hover:text-black transition-colors"
          >
            {mode === "signup"
              ? "Already have an account? Sign in"
              : "Need an account? Create one"}
          </button>

          <div className="mt-8 text-center">
            <Link
              href="/"
              className="text-gray-600 hover:text-black transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <p className="text-gray-600">Loading...</p>
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}
