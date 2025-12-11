"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Course } from "@/lib/types/course";
import { CourseService } from "@/lib/courseService";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { motion } from "framer-motion";

export default function CoursesPage() {
  const [user] = useAuthState(auth);
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const allCourses = await CourseService.getAllCourses();
      setCourses(allCourses);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-black mx-auto mb-4"></div>
          <p className="text-gray-600">Loading courses...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="section-padding bg-black text-white">
        <div className="container-elegant text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-hero text-white mb-6">My Courses</h1>
            <p className="text-editorial text-white/90 max-w-2xl mx-auto">
              Transform your brand with our comprehensive course offerings
            </p>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="section-padding">
        <div className="container-elegant">
          {courses.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-editorial text-gray-600">No courses available yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  {course.thumbnailUrl && (
                    <div className="relative w-full h-48">
                      <Image
                        src={course.thumbnailUrl}
                        alt={course.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-black mb-3">{course.title}</h3>
                    <p className="text-editorial text-gray-600 mb-4 line-clamp-3">
                      {course.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {course.totalWeeks} weeks
                      </span>
                      <Link
                        href={`/courses/${course.id}`}
                        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                      >
                        {user ? "View Course" : "Learn More"}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

