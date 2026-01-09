"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Course, CourseWeek, UserCourseEnrollment } from "@/lib/types/course";
import { CourseService } from "@/lib/courseService";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft, ArrowRight, Lock } from "lucide-react";
import AuthGuard from "@/components/AuthGuard";

// Extract YouTube video ID from URL
function getYouTubeVideoId(url: string): string | null {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}

export default function CourseWeekPage() {
  const params = useParams();
  const router = useRouter();
  const courseId = params?.courseId as string;
  const weekNumber = parseInt(params?.weekNumber as string);
  const [user, loadingAuth] = useAuthState(auth);
  const [course, setCourse] = useState<Course | null>(null);
  const [week, setWeek] = useState<CourseWeek | null>(null);
  const [enrollment, setEnrollment] = useState<UserCourseEnrollment | null>(null);
  const [loading, setLoading] = useState(true);
  const [isCompleting, setIsCompleting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!courseId || !weekNumber || !user) return;
    
    const fetchData = async () => {
      const [courseData, weekData, enrollmentData] = await Promise.all([
        CourseService.getCourse(courseId),
        CourseService.getWeek(courseId, weekNumber),
        CourseService.getUserEnrollment(user.uid, courseId),
      ]);
      
      setCourse(courseData);
      setWeek(weekData);
      setEnrollment(enrollmentData);
      
      if (enrollmentData) {
        setIsCompleted(enrollmentData.completedWeeks.includes(weekNumber));
      }
      
      // Check if week is unlocked
      if (enrollmentData) {
        const unlockedWeeks = await CourseService.getUnlockedWeeks(user.uid, courseId);
        if (!unlockedWeeks.includes(weekNumber)) {
          router.push(`/courses/${courseId}`);
          return;
        }
      }
      
      setLoading(false);
    };
    
    fetchData();
  }, [courseId, weekNumber, user, router]);

  const handleCompleteWeek = async () => {
    if (!user || !enrollment || isCompleting) return;
    
    setIsCompleting(true);
    try {
      await CourseService.completeWeek(user.uid, courseId, weekNumber);
      setIsCompleted(true);
      
      // Refresh enrollment
      const updatedEnrollment = await CourseService.getUserEnrollment(user.uid, courseId);
      setEnrollment(updatedEnrollment);
      
      // Refresh next week unlock status
      const nextWeekNum = getNextWeek();
      if (nextWeekNum) {
        const unlockedWeeks = await CourseService.getUnlockedWeeks(user.uid, courseId);
        setNextWeekUnlocked(unlockedWeeks.includes(nextWeekNum));
      }
      
      // Show success message - using a more user-friendly approach
      // The UI will update automatically via state changes
    } catch (error: any) {
      console.error("Error completing week:", error);
      // Error is already shown via the button state
    } finally {
      setIsCompleting(false);
    }
  };

  const [nextWeekUnlocked, setNextWeekUnlocked] = useState(false);

  useEffect(() => {
    if (!user || !enrollment || !course) return;
    
    const checkNextWeek = async () => {
      const nextWeekNum = weekNumber < course.totalWeeks ? weekNumber + 1 : null;
      if (nextWeekNum) {
        const unlockedWeeks = await CourseService.getUnlockedWeeks(user.uid, courseId);
        setNextWeekUnlocked(unlockedWeeks.includes(nextWeekNum));
      }
    };
    
    checkNextWeek();
  }, [user, enrollment, course, weekNumber, courseId]);

  const getNextWeek = () => {
    if (!course || !week) return null;
    return weekNumber < course.totalWeeks ? weekNumber + 1 : null;
  };

  const getPrevWeek = () => {
    return weekNumber > 1 ? weekNumber - 1 : null;
  };

  if (loading || loadingAuth) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">Loading week content...</p>
        </div>
      </div>
    );
  }

  if (!week || !course) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Week not found</h1>
          <Link href={`/courses/${courseId}`} className="text-accent hover:underline">
            Back to course
          </Link>
        </div>
      </div>
    );
  }

  if (!enrollment) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center max-w-md">
          <Lock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">Enrollment Required</h1>
          <p className="text-gray-600 mb-6">
            You need to enroll in this course to access the content.
          </p>
          <Link
            href={`/courses/${courseId}`}
            className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            View Course & Enroll
          </Link>
        </div>
      </div>
    );
  }

  const videoId = week.videoId || getYouTubeVideoId(week.videoUrl);
  const nextWeek = getNextWeek();
  const prevWeek = getPrevWeek();

  return (
    <AuthGuard>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <section className="section-padding bg-black text-white">
          <div className="container-elegant">
            <Link
              href={`/courses/${courseId}`}
              className="text-white/70 hover:text-white mb-6 inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Course
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-hero text-white mb-4">
                Week {weekNumber}: {week.title}
              </h1>
              <p className="text-editorial text-white/90 max-w-3xl">
                {week.description}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Video Player */}
        <section className="section-padding bg-gray-50">
          <div className="container-elegant max-w-4xl">
            {videoId ? (
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-2xl"
                  src={`https://www.youtube.com/embed/${videoId}`}
                  title={week.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div className="bg-gray-200 rounded-2xl p-20 text-center">
                <p className="text-gray-600">Video URL not configured</p>
              </div>
            )}
          </div>
        </section>

        {/* Content */}
        <section className="section-padding">
          <div className="container-elegant max-w-4xl">
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: week.content }}
            />
          </div>
        </section>

        {/* Resources */}
        {week.resources && week.resources.length > 0 && (
          <section className="section-padding bg-gray-50">
            <div className="container-elegant max-w-4xl">
              <h2 className="text-2xl font-bold text-black mb-6">Resources</h2>
              <div className="space-y-3">
                {week.resources.map((resource) => (
                  <a
                    key={resource.id}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-white border border-gray-200 rounded-lg hover:border-gray-300 transition-colors"
                  >
                    <span className="font-semibold text-black">{resource.title}</span>
                    <span className="text-gray-500 ml-2">({resource.type.toUpperCase()})</span>
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Navigation & Complete Button */}
        <section className="section-padding">
          <div className="container-elegant max-w-4xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                {prevWeek && (
                  <Link
                    href={`/courses/${courseId}/week/${prevWeek}`}
                    className="inline-flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Previous Week
                  </Link>
                )}
              </div>
              
              <div className="flex items-center gap-4">
                {isCompleted ? (
                  <div className="flex items-center gap-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-semibold">Completed</span>
                  </div>
                ) : (
                  <button
                    onClick={handleCompleteWeek}
                    disabled={isCompleting}
                    className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isCompleting ? "Completing..." : "Mark as Complete"}
                  </button>
                )}
                
                {nextWeek && (
                  nextWeekUnlocked ? (
                    <Link
                      href={`/courses/${courseId}/week/${nextWeek}`}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      Next Week
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <button
                      disabled
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gray-300 text-gray-500 rounded-lg cursor-not-allowed"
                      title="Complete this week to unlock the next week"
                    >
                      Next Week
                      <Lock className="w-4 h-4" />
                    </button>
                  )
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </AuthGuard>
  );
}

