"use client";

import { useEffect, useState } from "react";
import { useParams, useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { Course } from "@/lib/types/course";
import { CourseService } from "@/lib/courseService";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function EnrollmentSuccessPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const courseId = params?.courseId as string;
  const sessionId = searchParams?.get('session_id');
  const [user] = useAuthState(auth);
  const [course, setCourse] = useState<Course | null>(null);
  const [loading, setLoading] = useState(true);
  const [enrollmentVerified, setEnrollmentVerified] = useState(false);

  useEffect(() => {
    if (!courseId || !user) return;
    
    const verifyEnrollment = async () => {
      const courseData = await CourseService.getCourse(courseId);
      setCourse(courseData);
      
      // Verify enrollment exists
      if (user) {
        const enrollment = await CourseService.getUserEnrollment(user.uid, courseId);
        setEnrollmentVerified(!!enrollment);
        
        // If enrollment not found yet, wait a bit and retry (webhook might be processing)
        if (!enrollment) {
          setTimeout(async () => {
            const retryEnrollment = await CourseService.getUserEnrollment(user.uid, courseId);
            setEnrollmentVerified(!!retryEnrollment);
          }, 2000);
        }
      }
      
      setLoading(false);
    };
    
    verifyEnrollment();
  }, [courseId, user]);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">Processing enrollment...</p>
        </div>
      </div>
    );
  }

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
            <h1 className="text-hero text-black mb-4">Enrollment Successful!</h1>
            {enrollmentVerified ? (
              <p className="text-editorial text-gray-600 mb-8">
                You're all set! You now have access to {course?.title || 'the course'}.
              </p>
            ) : (
              <p className="text-editorial text-gray-600 mb-8">
                Your payment was successful! We're processing your enrollment. If you don't see access within a few minutes, please contact support.
              </p>
            )}
          </motion.div>

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
        </div>
      </section>
    </div>
  );
}

