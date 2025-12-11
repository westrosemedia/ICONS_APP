"use client";

import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { Course, CourseWeek } from "@/lib/types/course";
import { CourseService } from "@/lib/courseService";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function AdminCoursesPage() {
  const [user, loading] = useAuthState(auth);
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [weeks, setWeeks] = useState<CourseWeek[]>([]);
  const [editingWeek, setEditingWeek] = useState<CourseWeek | null>(null);

  useEffect(() => {
    if (user) {
      loadCourses();
    }
  }, [user]);

  const loadCourses = async () => {
    const allCourses = await CourseService.getAllCourses();
    setCourses(allCourses);
  };

  const loadWeeks = async (courseId: string) => {
    const courseWeeks = await CourseService.getCourseWeeks(courseId);
    setWeeks(courseWeeks);
    setSelectedCourse(courseId);
  };

  const createWeekTemplate = async (courseId: string, weekNumber: number) => {
    try {
      const weekRef = await addDoc(collection(db, "courseWeeks"), {
        courseId,
        weekNumber,
        title: `Week ${weekNumber}: [Your Title]`,
        description: "[Your description]",
        videoUrl: "",
        videoId: "",
        content: `<h2>Week ${weekNumber}</h2><p>Add your content here...</p>`,
        resources: [],
      });
      alert(`Week ${weekNumber} template created!`);
      if (courseId === selectedCourse) {
        loadWeeks(courseId);
      }
    } catch (error) {
      console.error("Error creating week:", error);
      alert("Error creating week template");
    }
  };

  const createAllWeeks = async (courseId: string) => {
    if (!confirm("Create all 16 week templates?")) return;
    
    for (let i = 1; i <= 16; i++) {
      await createWeekTemplate(courseId, i);
    }
    alert("All week templates created!");
    loadWeeks(courseId);
  };

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Admin Access Required</h1>
          <p className="text-gray-600">Please log in to access this page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Course Admin</h1>

        {/* Courses List */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-xl font-bold mb-4">Courses</h2>
          {courses.length === 0 ? (
            <p className="text-gray-600">No courses found. Create one in Firestore first.</p>
          ) : (
            <div className="space-y-2">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="flex items-center justify-between p-3 border rounded hover:bg-gray-50 cursor-pointer"
                  onClick={() => loadWeeks(course.id)}
                >
                  <div>
                    <h3 className="font-semibold">{course.title}</h3>
                    <p className="text-sm text-gray-600">{course.totalWeeks} weeks</p>
                  </div>
                  {selectedCourse === course.id && (
                    <span className="text-blue-600">✓ Selected</span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Weeks Management */}
        {selectedCourse && (
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold">Course Weeks</h2>
              <button
                onClick={() => createAllWeeks(selectedCourse)}
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
              >
                Create All 16 Weeks
              </button>
            </div>
            
            {weeks.length === 0 ? (
              <div>
                <p className="text-gray-600 mb-4">No weeks created yet.</p>
                <button
                  onClick={() => createAllWeeks(selectedCourse)}
                  className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
                >
                  Create Week Templates
                </button>
              </div>
            ) : (
              <div className="space-y-2">
                {weeks.map((week) => (
                  <div
                    key={week.id}
                    className="p-3 border rounded hover:bg-gray-50 cursor-pointer"
                    onClick={() => {
                      const weekData = {
                        ...week,
                        content: week.content || "",
                      };
                      setEditingWeek(weekData);
                    }}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-semibold">
                          Week {week.weekNumber}: {week.title}
                        </h3>
                        <p className="text-sm text-gray-600">{week.description}</p>
                        {week.videoUrl && (
                          <p className="text-xs text-blue-600 mt-1">
                            Video: {week.videoUrl.substring(0, 50)}...
                          </p>
                        )}
                      </div>
                      <span className="text-gray-400">→</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Edit Week Modal */}
        {editingWeek && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">
                  Edit Week {editingWeek.weekNumber}
                </h2>
                <button
                  onClick={() => setEditingWeek(null)}
                  className="text-gray-400 hover:text-black"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">Title</label>
                  <input
                    type="text"
                    value={editingWeek.title}
                    onChange={(e) =>
                      setEditingWeek({ ...editingWeek, title: e.target.value })
                    }
                    className="w-full border rounded p-2"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">Description</label>
                  <textarea
                    value={editingWeek.description}
                    onChange={(e) =>
                      setEditingWeek({ ...editingWeek, description: e.target.value })
                    }
                    className="w-full border rounded p-2"
                    rows={3}
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">YouTube Video URL</label>
                  <input
                    type="text"
                    value={editingWeek.videoUrl}
                    onChange={(e) => {
                      const url = e.target.value;
                      const videoId = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)?.[1] || "";
                      setEditingWeek({
                        ...editingWeek,
                        videoUrl: url,
                        videoId: videoId,
                      });
                    }}
                    className="w-full border rounded p-2"
                    placeholder="https://www.youtube.com/watch?v=..."
                  />
                  {editingWeek.videoId && (
                    <p className="text-sm text-green-600 mt-1">
                      Video ID detected: {editingWeek.videoId}
                    </p>
                  )}
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">Content (HTML)</label>
                  <textarea
                    value={editingWeek.content}
                    onChange={(e) =>
                      setEditingWeek({ ...editingWeek, content: e.target.value })
                    }
                    className="w-full border rounded p-2 font-mono text-sm"
                    rows={10}
                  />
                </div>
                
                <div className="flex gap-4">
                  <button
                    onClick={async () => {
                      try {
                        const weekRef = doc(db, "courseWeeks", editingWeek.id);
                        await updateDoc(weekRef, {
                          title: editingWeek.title,
                          description: editingWeek.description,
                          videoUrl: editingWeek.videoUrl,
                          videoId: editingWeek.videoId,
                          content: editingWeek.content,
                        });
                        alert("Week updated!");
                        setEditingWeek(null);
                        loadWeeks(selectedCourse);
                      } catch (error) {
                        console.error("Error updating week:", error);
                        alert("Error updating week");
                      }
                    }}
                    className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
                  >
                    Save Changes
                  </button>
                  <button
                    onClick={() => setEditingWeek(null)}
                    className="px-6 py-2 border rounded hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

