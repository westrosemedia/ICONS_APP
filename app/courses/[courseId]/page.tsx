"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Course, CourseWeek, UserCourseEnrollment } from "@/lib/types/course";
import { CourseService } from "@/lib/courseService";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { motion } from "framer-motion";
import { Lock, CheckCircle, Play, ArrowRight } from "lucide-react";
import CourseEnrollButton from "@/components/CourseEnrollButton";
import RestoreCourseAccess from "@/components/RestoreCourseAccess";
import { formatCoursePrice } from "@/lib/courses/grow-like-you-mean-it";

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params?.courseId as string;
  const [user, loadingAuth] = useAuthState(auth);
  const [course, setCourse] = useState<Course | null>(null);
  const [weeks, setWeeks] = useState<CourseWeek[]>([]);
  const [enrollment, setEnrollment] = useState<UserCourseEnrollment | null>(null);
  const [unlockedWeeks, setUnlockedWeeks] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);

  useEffect(() => {
    if (!courseId) return;

    let cancelled = false;

    const fetchCourse = async () => {
      const courseData = await CourseService.getCourse(courseId);
      if (cancelled) return;
      setCourse(courseData);
      setLoading(false);
    };

    fetchCourse();

    return () => {
      cancelled = true;
    };
  }, [courseId]);

  useEffect(() => {
    if (!courseId || loadingAuth) return;

    let cancelled = false;

    const fetchEnrollment = async () => {
      if (!user) {
        setEnrollment(null);
        setWeeks([]);
        setUnlockedWeeks([]);
        setSelectedWeek(1);
        return;
      }

      const enrollmentData = await CourseService.getUserEnrollment(
        user.uid,
        courseId
      );
      if (cancelled) return;

      setEnrollment(enrollmentData);

      if (enrollmentData?.paymentStatus === "completed") {
        const [weeksData, unlocked] = await Promise.all([
          CourseService.getCourseWeeks(courseId),
          CourseService.getUnlockedWeeks(user.uid, courseId),
        ]);
        if (cancelled) return;
        setWeeks(weeksData);
        setUnlockedWeeks(unlocked);
        setSelectedWeek(
          enrollmentData.currentWeek === 0
            ? 1
            : enrollmentData.currentWeek + 1
        );
      } else {
        setWeeks([]);
        setUnlockedWeeks([]);
        setSelectedWeek(1);
      }
    };

    fetchEnrollment();

    return () => {
      cancelled = true;
    };
  }, [courseId, user, loadingAuth]);

  const [weekError, setWeekError] = useState<string | null>(null);

  const handleWeekClick = async (weekNumber: number) => {
    if (!user || !enrollment) {
      router.push(`/login?redirect=${encodeURIComponent(`/courses/${courseId}`)}`);
      return;
    }
    
    setWeekError(null);
    
    // Check if week is unlocked
    try {
      const unlockedWeeks = await CourseService.getUnlockedWeeks(user.uid, courseId);
      if (!unlockedWeeks.includes(weekNumber)) {
        setWeekError(`Please complete previous weeks before accessing Week ${weekNumber}.`);
        // Auto-hide error after 5 seconds
        setTimeout(() => setWeekError(null), 5000);
        return;
      }
      
      setSelectedWeek(weekNumber);
      router.push(`/courses/${courseId}/week/${weekNumber}`);
    } catch (error) {
      setWeekError('Error checking week access. Please try again.');
      setTimeout(() => setWeekError(null), 5000);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">Loading course...</p>
        </div>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <Link href="/courses" className="text-accent hover:underline">
            Back to courses
          </Link>
        </div>
      </div>
    );
  }

  const isEnrolled = enrollment?.paymentStatus === 'completed';
  const progress = enrollment?.progress || 0;
  const unitLabel = course.selfPaced ? "Lesson" : "Week";
  const loginUrl = `/login?redirect=${encodeURIComponent(`/courses/${courseId}`)}`;
  const priceLabel =
    course.priceAmount && course.priceCurrency
      ? formatCoursePrice(course.priceAmount, course.priceCurrency)
      : null;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-elegant">
          <Link href="/courses" className="text-white/70 hover:text-white mb-6 inline-block">
            ← Back to Courses
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-hero text-white mb-6">{course.title}</h1>
            <p className="text-editorial text-white/90 max-w-3xl mb-8">
              {course.description}
            </p>
            {isEnrolled && (
              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-white/70">Progress</span>
                  <span className="text-sm font-semibold">{progress}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div
                    className="bg-white h-2 rounded-full transition-all"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            )}
            {!isEnrolled && !user && (
              <Link
                href={loginUrl}
                className="inline-block text-sm text-white/80 hover:text-white underline underline-offset-4 transition-colors"
              >
                Already purchased? Sign in to access your course
              </Link>
            )}
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      {!isEnrolled && (
        <section id="course-pricing" className="section-padding bg-gray-50">
          <div className="container-elegant max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="rounded-2xl border-2 border-black bg-white p-8 text-center shadow-sm">
                <h2 className="text-display text-black mb-3">
                  Already purchased?
                </h2>
                <p className="text-editorial text-gray-600 mb-6">
                  Sign in to restore your access. You do not need to buy again.
                </p>
                {!user ? (
                  <Link
                    href={loginUrl}
                    className="inline-flex items-center justify-center px-10 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors text-base"
                  >
                    Sign in
                  </Link>
                ) : (
                  <p className="text-sm text-gray-600 mb-4">
                    Signed in as {user.email}
                  </p>
                )}
              </div>

              <RestoreCourseAccess
                courseId={courseId}
                loginUrl={loginUrl}
                isLoggedIn={!!user}
                userEmail={user?.email}
              />

              {!user && (
                <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
                  <h3 className="text-2xl font-semibold text-black mb-3">
                    New here?
                  </h3>
                  <p className="text-editorial text-gray-600 mb-6">
                    One-time payment. Instant access to all 8 lessons.
                  </p>
                  {course.stripePriceId ? (
                    <div className="space-y-4">
                      {priceLabel && (
                        <p className="text-3xl font-bold text-black">{priceLabel}</p>
                      )}
                      <CourseEnrollButton
                        courseId={courseId}
                        priceId={course.stripePriceId}
                        label={
                          priceLabel
                            ? `Get Access for ${priceLabel}`
                            : "Enroll Now"
                        }
                      />
                    </div>
                  ) : (
                    <p className="text-gray-600">
                      Enrollment is not available yet. Please check back soon.
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </section>
      )}

      {/* Course Content */}
      <section className="section-padding">
        <div className="container-elegant">
          <h2 className="text-display text-black mb-8">
            {course.selfPaced ? "Course Lessons" : "Course Content"}
          </h2>
          {weekError && (
            <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-yellow-800 text-sm">{weekError}</p>
            </div>
          )}
          <div className="space-y-4">
            {weeks.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">Course content is being prepared. Check back soon!</p>
              </div>
            ) : (
              weeks.map((week, index) => {
                const isCompleted = enrollment?.completedWeeks.includes(week.weekNumber) || false;
                const isUnlocked = unlockedWeeks.includes(week.weekNumber);

              return (
                <motion.div
                  key={week.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`border rounded-2xl p-6 ${
                    isUnlocked
                      ? 'border-gray-200 hover:border-gray-300 cursor-pointer'
                      : 'border-gray-100 opacity-60'
                  }`}
                  onClick={() => isUnlocked && handleWeekClick(week.weekNumber)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                        isCompleted
                          ? 'bg-green-500 text-white'
                          : isUnlocked
                          ? 'bg-black text-white'
                          : 'bg-gray-200 text-gray-400'
                      }`}>
                        {isCompleted ? (
                          <CheckCircle className="w-6 h-6" />
                        ) : isUnlocked ? (
                          <Play className="w-6 h-6" />
                        ) : (
                          <Lock className="w-6 h-6" />
                        )}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-xl font-bold text-black">
                            {unitLabel} {week.weekNumber}: {week.title}
                          </h3>
                          {isCompleted && (
                            <span className="text-sm text-green-600 font-semibold">Completed</span>
                          )}
                        </div>
                        <p className="text-editorial text-gray-600">{week.description}</p>
                      </div>
                    </div>
                    {isUnlocked && (
                      <ArrowRight className="w-5 h-5 text-gray-400 flex-shrink-0" />
                    )}
                  </div>
                </motion.div>
              );
            })
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

