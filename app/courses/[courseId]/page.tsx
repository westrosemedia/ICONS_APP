"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Script from "next/script";
import { Course, CourseWeek, UserCourseEnrollment } from "@/lib/types/course";
import { CourseService } from "@/lib/courseService";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { motion } from "framer-motion";
import { Lock, CheckCircle, Play, ArrowRight } from "lucide-react";

export default function CourseDetailPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params?.courseId as string;
  const [user, loadingAuth] = useAuthState(auth);
  const [course, setCourse] = useState<Course | null>(null);
  const [weeks, setWeeks] = useState<CourseWeek[]>([]);
  const [enrollment, setEnrollment] = useState<UserCourseEnrollment | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);

  useEffect(() => {
    if (!courseId) return;
    
    const fetchData = async () => {
      const [courseData, weeksData] = await Promise.all([
        CourseService.getCourse(courseId),
        CourseService.getCourseWeeks(courseId),
      ]);
      
      setCourse(courseData);
      setWeeks(weeksData);
      
      if (user) {
        const enrollmentData = await CourseService.getUserEnrollment(user.uid, courseId);
        setEnrollment(enrollmentData);
        
        // Set selected week to current week or first week
        if (enrollmentData) {
          setSelectedWeek(enrollmentData.currentWeek === 0 ? 1 : enrollmentData.currentWeek + 1);
        } else {
          setSelectedWeek(1);
        }
      }
      
      setLoading(false);
    };
    
    fetchData();
  }, [courseId, user]);

  const [isEnrolling, setIsEnrolling] = useState(false);
  const [enrollError, setEnrollError] = useState<string | null>(null);

  const handleEnroll = async () => {
    if (!course?.stripePriceId || !user) {
      router.push('/login');
      return;
    }
    
    setIsEnrolling(true);
    setEnrollError(null);
    
    try {
      const response = await fetch('/api/courses/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId: course.stripePriceId,
          courseId: courseId,
          userId: user.uid,
        }),
      });
      
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Failed to create checkout session' }));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error('No checkout URL received');
      }
    } catch (error) {
      console.error('Enrollment error:', error);
      setEnrollError(error instanceof Error ? error.message : 'Error starting enrollment. Please try again.');
    } finally {
      setIsEnrolling(false);
    }
  };

  const [weekError, setWeekError] = useState<string | null>(null);

  const handleWeekClick = async (weekNumber: number) => {
    if (!user || !enrollment) {
      router.push('/login');
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
              <h2 className="text-display text-black mb-4 text-center">Enroll Now</h2>
              <p className="text-editorial text-gray-600 mb-8 text-center max-w-2xl mx-auto">
                Choose the payment option that works best for you. Start your journey to building a standout brand today.
              </p>
              
              <div className="max-w-2xl mx-auto">
                {course.stripePriceId ? (
                  // Direct checkout button if stripePriceId is set
                  <div className="text-center">
                    {enrollError && (
                      <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
                        <p className="text-red-600 text-sm">{enrollError}</p>
                      </div>
                    )}
                    <button
                      onClick={handleEnroll}
                      disabled={isEnrolling}
                      className="px-8 py-4 bg-black text-white rounded-xl font-semibold hover:bg-gray-800 transition-colors text-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isEnrolling ? 'Processing...' : 'Enroll Now'}
                    </button>
                  </div>
                ) : (
                  // Stripe pricing table
                  <>
                    <Script
                      src="https://js.stripe.com/v3/pricing-table.js"
                      strategy="lazyOnload"
                    />
                    <stripe-pricing-table 
                      pricing-table-id="prctbl_1SAyLHCcsY3WjV3QddOoZFES"
                      publishable-key={process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "pk_live_51MSOJeCcsY3WjV3Q0h4k8hC7da1piQaQSHx6ukPgWe3hkxDR4GsmfEDah7RoIkH6k9Qln3ups7flMXSS3kuAMhdL005i3wmuav"}
                    />
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Course Content */}
      <section className="section-padding">
        <div className="container-elegant">
          <h2 className="text-display text-black mb-8">Course Content</h2>
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
                // Week 1 is always unlocked if enrolled, then sequential unlocking
                const isUnlocked = !enrollment 
                  ? false 
                  : week.weekNumber === 1 || enrollment.completedWeeks.includes(week.weekNumber - 1);
                const isCurrentWeek = enrollment?.currentWeek === week.weekNumber - 1;

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
                            Week {week.weekNumber}: {week.title}
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

