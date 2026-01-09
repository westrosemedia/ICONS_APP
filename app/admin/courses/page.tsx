"use client";

import { useState, useEffect } from "react";
import { Course, CourseWeek } from "@/lib/types/course";
import { CourseService } from "@/lib/courseService";
import { collection, addDoc, updateDoc, doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export default function AdminCoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<string>("");
  const [weeks, setWeeks] = useState<CourseWeek[]>([]);
  const [editingWeek, setEditingWeek] = useState<CourseWeek | null>(null);
  const [showCreateCourse, setShowCreateCourse] = useState(false);
  const [isCreatingCourse, setIsCreatingCourse] = useState(false);
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
    
    // Debug Firebase connection
    console.log("Firebase db check:", db);
    console.log("Firebase config check:", {
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? "Set" : "Missing",
    });
  }, []);

  const loadCourses = async () => {
    try {
      const allCourses = await CourseService.getAllCourses();
      setCourses(allCourses);
      console.log("Courses loaded:", allCourses.length);
    } catch (error) {
      console.error("Error loading courses:", error);
    }
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
    console.log("createCourse called", { newCourse, db });
    console.log("Firebase project ID:", process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID);
    
    if (!newCourse.id || !newCourse.title || !newCourse.description) {
      alert("Please fill in all required fields (ID, Title, Description)");
      return;
    }

    if (!db) {
      alert("Database not initialized. Please refresh the page.\n\nCheck browser console (F12) for Firebase config details.");
      console.error("db is null");
      console.error("Firebase config:", {
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY ? "Set" : "Missing",
      });
      return;
    }

    // Test Firebase connection first
    try {
      console.log("Testing Firebase connection...");
      const testRef = doc(db, "_test", "connection");
      await setDoc(testRef, { test: true }, { merge: true });
      console.log("Firebase connection test successful");
    } catch (testError: any) {
      console.error("Firebase connection test failed:", testError);
      alert(`Firebase connection failed: ${testError?.code || testError?.message}\n\nThis usually means:\n1. Firestore rules are blocking writes\n2. Firebase config is incorrect\n3. Network/CORS issue\n\nCheck console (F12) for details.`);
      return;
    }

    setIsCreatingCourse(true);
    
    try {
      console.log("Creating course with data:", newCourse);
      const courseRef = doc(db, "courses", newCourse.id);
      
      // Add timeout to prevent infinite hanging
      const timeoutPromise = new Promise((_, reject) => 
        setTimeout(() => reject(new Error("Operation timed out after 10 seconds. Check Firestore rules and network connection.")), 10000)
      );
      
      const setDocPromise = setDoc(courseRef, {
        title: newCourse.title,
        description: newCourse.description,
        totalWeeks: newCourse.totalWeeks,
        stripeProductId: newCourse.stripeProductId || null,
        stripePriceId: newCourse.stripePriceId || null,
        published: newCourse.published,
        createdAt: Timestamp.now(),
        updatedAt: Timestamp.now(),
      }, { merge: false }); // merge: false ensures we create new document

      await Promise.race([setDocPromise, timeoutPromise]);

      console.log("Course created successfully!");
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
      await loadCourses();
    } catch (error: any) {
      console.error("Error creating course:", error);
      console.error("Error code:", error?.code);
      console.error("Error details:", error);
      
      let errorMessage = "Unknown error";
      if (error?.code === "permission-denied") {
        errorMessage = "Permission denied. Firestore security rules are blocking this operation.\n\nUpdate your Firestore rules:\nmatch /courses/{courseId} {\n  allow write: if true;\n}";
      } else if (error?.code === "unavailable") {
        errorMessage = "Firestore is unavailable. Check your internet connection and Firebase project status.";
      } else if (error?.message) {
        errorMessage = error.message;
      } else if (error?.code) {
        errorMessage = `Firebase error: ${error.code}`;
      }
      
      alert(`Error creating course: ${errorMessage}\n\nCheck the browser console (F12) for more details.`);
    } finally {
      setIsCreatingCourse(false);
    }
  };

  // Auth check removed - page is accessible without login for course setup

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
                    type="button"
                    onClick={createCourse}
                    disabled={isCreatingCourse}
                    className="px-6 py-2 bg-black text-white rounded hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isCreatingCourse ? "Creating..." : "Create Course"}
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowCreateCourse(false)}
                    disabled={isCreatingCourse}
                    className="px-6 py-2 border rounded hover:bg-gray-50 disabled:opacity-50"
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

