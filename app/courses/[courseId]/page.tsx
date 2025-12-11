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
import AuthGuard from "@/components/AuthGuard";

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

  const handleEnroll = async () => {
    if (!course?.stripePriceId || !user) {
      router.push('/login');
      return;
    }
    
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
      
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        alert('Error creating checkout session. Please try again.');
      }
    } catch (error) {
      console.error('Enrollment error:', error);
      alert('Error starting enrollment. Please try again.');
    }
  };

  const handleWeekClick = async (weekNumber: number) => {
    if (!user || !enrollment) return;
    
    // Check if week is unlocked
    const unlockedWeeks = await CourseService.getUnlockedWeeks(user.uid, courseId);
    if (!unlockedWeeks.includes(weekNumber)) {
      alert("Please complete previous weeks before accessing this week.");
      return;
    }
    
    setSelectedWeek(weekNumber);
    router.push(`/courses/${courseId}/week/${weekNumber}`);
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
            {!isEnrolled && (
              <button
                onClick={handleEnroll}
                className="px-8 py-4 bg-white text-black rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                Enroll Now
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Course Content */}
      <section className="section-padding">
        <div className="container-elegant">
          <h2 className="text-display text-black mb-8">Course Content</h2>
          <div className="space-y-4">
            {weeks.map((week, index) => {
              const isCompleted = enrollment?.completedWeeks.includes(week.weekNumber) || false;
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
                          {isCurrentWeek && !isCompleted && (
                            <span className="text-sm text-blue-600 font-semibold">Current</span>
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
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

