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
    
    const fetchData = async () => {
      const courseData = await CourseService.getCourse(courseId);
      setCourse(courseData);

      if (user) {
        const enrollmentData = await CourseService.getUserEnrollment(
          user.uid,
          courseId
        );
        setEnrollment(enrollmentData);

        if (enrollmentData?.paymentStatus === "completed") {
          const [weeksData, unlocked] = await Promise.all([
            CourseService.getCourseWeeks(courseId),
            CourseService.getUnlockedWeeks(user.uid, courseId),
          ]);
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
      } else {
        setWeeks([]);
        setUnlockedWeeks([]);
      }

      setLoading(false);
    };
    
    fetchData();
  }, [courseId, user]);

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

  if (loading || loadingAuth) {
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
          <div className="container-elegant">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-display text-black mb-4 text-center">
                {user ? "Get access to this course" : "Enroll Now"}
              </h2>
              <p className="text-editorial text-gray-600 mb-8 text-center max-w-2xl mx-auto">
                {user
                  ? "If you already paid, use Restore access below. You do not need to purchase again."
                  : course.selfPaced
                    ? "One-time payment. Instant access to all lessons. Work through them at your own pace."
                    : "Choose the payment option that works best for you. Start your journey to building a powerful personal brand today."}
              </p>

              <RestoreCourseAccess
                courseId={courseId}
                loginUrl={loginUrl}
                isLoggedIn={!!user}
                userEmail={user?.email}
              />

              {!user && (
              <div className="max-w-2xl mx-auto mt-8">
                {course.stripePriceId ? (
                  <div className="text-center space-y-6">
                    {priceLabel && (
                      <p className="text-3xl font-bold text-black mb-6">{priceLabel}</p>
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
                  <p className="text-center text-gray-600">
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

