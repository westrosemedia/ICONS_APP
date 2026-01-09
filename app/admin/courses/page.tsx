"use client";

import { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase";
import { Course, CourseWeek } from "@/lib/types/course";
import { CourseService } from "@/lib/courseService";
import { collection, addDoc, updateDoc, doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function AdminCoursesPage() {
  const [user, loading] = useAuthState(auth);
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [weeks, setWeeks] = useState<CourseWeek[]>([]);
  const [editingWeek, setEditingWeek] = useState<CourseWeek | null>(null);
  const [showCreateCourse, setShowCreateCourse] = useState(false);
  const [newCourse, setNewCourse] = useState({
    id: "",
    title: "",
    description: "",
    totalWeeks: 16,
    stripeProductId: "",
    stripePriceId: "",
    published: true,
  });

  useEffect(() => {
    // Load courses regardless of auth status for now
    loadCourses();
  }, []);

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
    if (!db) {
      alert("Database not initialized. Please refresh the page.");
      return;
    }
    // Note: Auth check removed - add back if needed: if (!user) { alert("Please log in"); return; }
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

  const createCourse = async () => {
    if (!newCourse.id || !newCourse.title || !newCourse.description) {
      alert("Please fill in all required fields (ID, Title, Description)");
      return;
    }

    if (!db) {
      alert("Database not initialized. Please refresh the page.");
      return;
    }

    try {
      const courseRef = doc(db, "courses", newCourse.id);
      await setDoc(courseRef, {
        title: newCourse.title,
        description: newCourse.description,
        totalWeeks: newCourse.totalWeeks,
        stripeProductId: newCourse.stripeProductId || null,
        stripePriceId: newCourse.stripePriceId || null,
        published: newCourse.published,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      }, { merge: false }); // merge: false ensures we create new document

      alert("Course created successfully!");
      setShowCreateCourse(false);
      setNewCourse({
        id: "",
        title: "",
        description: "",
        totalWeeks: 16,
        stripeProductId: "",
        stripePriceId: "",
        published: true,
      });
      loadCourses();
    } catch (error) {
      console.error("Error creating course:", error);
      alert("Error creating course. Make sure the course ID is unique and you have permission.");
    }
  };

  // Note: Auth check removed for now - you can add it back when login is implemented
  // For now, allow access to set up courses
  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  // Optional: Uncomment to require authentication
  // if (!user) {
  //   return (
  //     <div className="min-h-screen bg-white flex items-center justify-center">
  //       <div className="text-center">
  //         <h1 className="text-2xl font-bold mb-4">Admin Access Required</h1>
  //         <p className="text-gray-600">Please log in to access this page.</p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Course Admin</h1>

        {/* Courses List */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Courses</h2>
            <button
              onClick={() => setShowCreateCourse(true)}
              className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
            >
              + Create New Course
            </button>
          </div>
          {courses.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-gray-600 mb-4">No courses found.</p>
              <button
                onClick={() => setShowCreateCourse(true)}
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
              >
                Create Your First Course
              </button>
            </div>
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

        {/* Create Course Modal */}
        {showCreateCourse && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold">Create New Course</h2>
                <button
                  onClick={() => setShowCreateCourse(false)}
                  className="text-gray-400 hover:text-black"
                >
                  ✕
                </button>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block font-semibold mb-2">Course ID *</label>
                  <input
                    type="text"
                    value={newCourse.id}
                    onChange={(e) => setNewCourse({ ...newCourse, id: e.target.value })}
                    className="w-full border rounded p-2"
                    placeholder="powerful-personal-brand"
                  />
                  <p className="text-xs text-gray-500 mt-1">URL-friendly ID (no spaces, use hyphens)</p>
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">Course Title *</label>
                  <input
                    type="text"
                    value={newCourse.title}
                    onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                    className="w-full border rounded p-2"
                    placeholder="Powerful Personal Brand"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">Description *</label>
                  <textarea
                    value={newCourse.description}
                    onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
                    className="w-full border rounded p-2"
                    rows={4}
                    placeholder="A 16-week intensive program to transform your brand..."
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">Total Weeks</label>
                  <input
                    type="number"
                    value={newCourse.totalWeeks}
                    onChange={(e) => setNewCourse({ ...newCourse, totalWeeks: parseInt(e.target.value) || 16 })}
                    className="w-full border rounded p-2"
                    min="1"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">Stripe Product ID (optional)</label>
                  <input
                    type="text"
                    value={newCourse.stripeProductId}
                    onChange={(e) => setNewCourse({ ...newCourse, stripeProductId: e.target.value })}
                    className="w-full border rounded p-2"
                    placeholder="prod_xxxxx"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">Stripe Price ID (optional)</label>
                  <input
                    type="text"
                    value={newCourse.stripePriceId}
                    onChange={(e) => setNewCourse({ ...newCourse, stripePriceId: e.target.value })}
                    className="w-full border rounded p-2"
                    placeholder="price_xxxxx"
                  />
                  <p className="text-xs text-gray-500 mt-1">Leave empty to use pricing table</p>
                </div>
                
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="published"
                    checked={newCourse.published}
                    onChange={(e) => setNewCourse({ ...newCourse, published: e.target.checked })}
                    className="w-4 h-4"
                  />
                  <label htmlFor="published" className="font-semibold">Published (visible to users)</label>
                </div>
                
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={createCourse}
                    className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800"
                  >
                    Create Course
                  </button>
                  <button
                    onClick={() => setShowCreateCourse(false)}
                    className="px-6 py-2 border rounded hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

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
                      if (!db) {
                        alert("Database not initialized. Please refresh the page.");
                        return;
                      }
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

