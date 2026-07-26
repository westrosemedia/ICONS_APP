import { auth } from "@/lib/firebase";
import { Course, CourseWeek, UserCourseEnrollment } from "@/lib/types/course";

async function waitForAuthUser() {
  if (!auth) return null;
  await auth.authStateReady();
  return auth.currentUser;
}

async function getAuthHeaders(): Promise<HeadersInit> {
  const user = await waitForAuthUser();
  if (!user) return {};

  const token = await user.getIdToken();
  return { Authorization: `Bearer ${token}` };
}

function parseDates<T extends Record<string, unknown>>(data: T): T {
  const parsed = { ...data };
  for (const key of ["createdAt", "updatedAt", "enrolledAt", "completedAt", "lastAccessedAt"]) {
    const value = parsed[key];
    if (typeof value === "string") {
      parsed[key] = new Date(value) as T[Extract<keyof T, string>];
    }
  }
  return parsed;
}

export async function fetchCourseFromApi(
  courseId: string
): Promise<Course | null> {
  const response = await fetch(`/api/courses/${courseId}`, { cache: "no-store" });
  if (!response.ok) return null;
  const data = await response.json();
  return parseDates(data.course) as Course;
}

export async function fetchCoursesFromApi(): Promise<Course[]> {
  const response = await fetch("/api/courses", { cache: "no-store" });
  if (!response.ok) return [];
  const data = await response.json();
  return (data.courses || []).map((course: Course) => parseDates(course));
}

export async function fetchCourseWeeksFromApi(
  courseId: string
): Promise<CourseWeek[]> {
  const headers = await getAuthHeaders();
  const response = await fetch(`/api/courses/${courseId}/weeks`, {
    cache: "no-store",
    headers,
  });
  if (!response.ok) return [];
  const data = await response.json();
  return data.weeks || [];
}

export async function fetchCourseWeekFromApi(
  courseId: string,
  weekNumber: number
): Promise<CourseWeek | null> {
  const headers = await getAuthHeaders();
  const response = await fetch(
    `/api/courses/${courseId}/weeks/${weekNumber}`,
    { cache: "no-store", headers }
  );
  if (!response.ok) return null;
  const data = await response.json();
  return data.week || null;
}

export async function syncUserEnrollmentFromApi(
  courseId: string
): Promise<UserCourseEnrollment | null> {
  const headers = await getAuthHeaders();
  if (!("Authorization" in headers)) return null;

  const response = await fetch("/api/courses/sync-enrollment", {
    method: "POST",
    cache: "no-store",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ courseId }),
  });

  if (!response.ok) return null;

  const data = await response.json();
  return data.enrollment
    ? (parseDates(data.enrollment) as UserCourseEnrollment)
    : null;
}

export async function fetchUserEnrollmentFromApi(
  courseId: string
): Promise<UserCourseEnrollment | null> {
  const headers = await getAuthHeaders();
  if (!("Authorization" in headers)) return null;

  const response = await fetch(`/api/courses/${courseId}/enrollment`, {
    cache: "no-store",
    headers,
  });
  if (!response.ok) return null;
  const data = await response.json();
  return data.enrollment
    ? (parseDates(data.enrollment) as UserCourseEnrollment)
    : null;
}
