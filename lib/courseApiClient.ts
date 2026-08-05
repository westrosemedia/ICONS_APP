import { Course, CourseWeek, UserCourseEnrollment } from "@/lib/types/course";

function parseDates<T extends Record<string, unknown>>(data: T): T {
  const parsed = { ...data };
  for (const key of [
    "createdAt",
    "updatedAt",
    "enrolledAt",
    "completedAt",
    "lastAccessedAt",
  ]) {
    const value = parsed[key];
    if (typeof value === "string") {
      parsed[key] = new Date(value) as T[Extract<keyof T, string>];
    }
  }
  return parsed;
}

const authFetch = (url: string, init?: RequestInit) =>
  fetch(url, {
    ...init,
    credentials: "include",
    cache: "no-store",
  });

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
  const response = await authFetch(`/api/courses/${courseId}/weeks`);
  if (!response.ok) return [];
  const data = await response.json();
  return data.weeks || [];
}

export async function fetchCourseWeekFromApi(
  courseId: string,
  weekNumber: number
): Promise<CourseWeek | null> {
  const response = await authFetch(
    `/api/courses/${courseId}/weeks/${weekNumber}`
  );
  if (!response.ok) return null;
  const data = await response.json();
  return data.week || null;
}

export async function syncUserEnrollmentFromApi(
  courseId: string
): Promise<UserCourseEnrollment | null> {
  const response = await authFetch("/api/courses/sync-enrollment", {
    method: "POST",
    headers: {
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
  const response = await authFetch(`/api/courses/${courseId}/enrollment`);
  if (response.status === 401) return null;
  if (!response.ok) return null;
  const data = await response.json();
  return data.enrollment
    ? (parseDates(data.enrollment) as UserCourseEnrollment)
    : null;
}
