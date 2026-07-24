"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lock } from "lucide-react";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { CourseService } from "@/lib/courseService";

interface AuthGuardProps {
  children: React.ReactNode;
  courseId?: string;
  fallbackUrl?: string;
  loginRedirect?: string;
}

export default function AuthGuard({
  children,
  courseId,
  fallbackUrl = "/courses",
  loginRedirect,
}: AuthGuardProps) {
  const [user, loadingAuth] = useAuthState(auth);
  const [hasAccess, setHasAccess] = useState<boolean | null>(null);

  useEffect(() => {
    if (loadingAuth) return;

    if (!user) {
      setHasAccess(false);
      return;
    }

    if (!courseId) {
      setHasAccess(true);
      return;
    }

    let cancelled = false;

    const checkAccess = async () => {
      const enrolled = await CourseService.isUserEnrolled(user.uid, courseId);
      if (!cancelled) {
        setHasAccess(enrolled);
      }
    };

    checkAccess();

    return () => {
      cancelled = true;
    };
  }, [user, loadingAuth, courseId]);

  if (loadingAuth || (user && courseId && hasAccess === null)) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    const redirectTarget =
      loginRedirect || (courseId ? `/courses/${courseId}` : fallbackUrl);

    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl w-full text-center"
        >
          <div className="w-24 h-24 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-8">
            <Lock className="w-12 h-12 text-black" />
          </div>

          <h1 className="text-hero text-black mb-6">Sign in required</h1>

          <p className="text-editorial mb-8">
            Sign in or create an account to access this content.
          </p>

          <div className="space-y-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link
                href={`/login?redirect=${encodeURIComponent(redirectTarget)}`}
              >
                Sign In
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href={fallbackUrl}>Back to Courses</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  if (courseId && hasAccess === false) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl w-full text-center"
        >
          <div className="w-24 h-24 bg-black/5 rounded-full flex items-center justify-center mx-auto mb-8">
            <Lock className="w-12 h-12 text-black" />
          </div>

          <h1 className="text-hero text-black mb-6">Purchase required</h1>

          <p className="text-editorial mb-8">
            This content is available after you enroll in the course.
          </p>

          <div className="space-y-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href={`/courses/${courseId}`}>
                View Course
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full sm:w-auto">
              <Link href={fallbackUrl}>Back to Courses</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return <>{children}</>;
}
