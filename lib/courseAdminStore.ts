import { getAdminApp } from "@/lib/firebaseAdmin";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import { Course, CourseWeek, UserCourseEnrollment } from "@/lib/types/course";

function toDate(value: unknown): Date | undefined {
  if (value instanceof Timestamp) return value.toDate();
  if (value instanceof Date) return value;
  return undefined;
}

function serializeCourse(id: string, data: FirebaseFirestore.DocumentData): Course {
  return {
    id,
    title: data.title,
    description: data.description,
    thumbnailUrl: data.thumbnailUrl,
    totalWeeks: data.totalWeeks,
    stripeProductId: data.stripeProductId,
    stripePriceId: data.stripePriceId,
    selfPaced: data.selfPaced,
    priceAmount: data.priceAmount,
    priceCurrency: data.priceCurrency,
    published: data.published,
    createdAt: toDate(data.createdAt) || new Date(),
    updatedAt: toDate(data.updatedAt) || new Date(),
  };
}

function serializeWeek(id: string, data: FirebaseFirestore.DocumentData): CourseWeek {
  return {
    id,
    courseId: data.courseId,
    weekNumber: data.weekNumber,
    title: data.title,
    description: data.description,
    videoUrl: data.videoUrl,
    videoId: data.videoId,
    content: data.content,
    resources: data.resources,
    unlocked: data.unlocked,
  };
}

function serializeEnrollment(
  id: string,
  data: FirebaseFirestore.DocumentData
): UserCourseEnrollment {
  return {
    id,
    userId: data.userId,
    courseId: data.courseId,
    enrolledAt: toDate(data.enrolledAt) || new Date(),
    stripePaymentIntentId: data.stripePaymentIntentId,
    stripeSubscriptionId: data.stripeSubscriptionId,
    paymentStatus: data.paymentStatus,
    currentWeek: data.currentWeek,
    completedWeeks: data.completedWeeks || [],
    progress: data.progress || 0,
    completedAt: toDate(data.completedAt),
  };
}

export async function getPublishedCourseAdmin(
  courseId: string
): Promise<Course | null> {
  getAdminApp();
  const snap = await getFirestore().collection("courses").doc(courseId).get();
  if (!snap.exists) return null;

  const data = snap.data()!;
  if (!data.published) return null;

  return serializeCourse(snap.id, data);
}

export async function getPublishedCoursesAdmin(): Promise<Course[]> {
  getAdminApp();
  const snapshot = await getFirestore()
    .collection("courses")
    .where("published", "==", true)
    .get();

  return snapshot.docs.map((doc) => serializeCourse(doc.id, doc.data()));
}

export async function getCourseWeeksAdmin(
  courseId: string
): Promise<CourseWeek[]> {
  getAdminApp();
  const snapshot = await getFirestore()
    .collection("courseWeeks")
    .where("courseId", "==", courseId)
    .get();

  return snapshot.docs
    .map((doc) => serializeWeek(doc.id, doc.data()))
    .sort((a, b) => a.weekNumber - b.weekNumber);
}

export async function getCourseWeekAdmin(
  courseId: string,
  weekNumber: number
): Promise<CourseWeek | null> {
  getAdminApp();
  const snapshot = await getFirestore()
    .collection("courseWeeks")
    .where("courseId", "==", courseId)
    .where("weekNumber", "==", weekNumber)
    .limit(1)
    .get();

  if (snapshot.empty) return null;

  const doc = snapshot.docs[0];
  return serializeWeek(doc.id, doc.data());
}

export async function getUserEnrollmentAdmin(
  userId: string,
  courseId: string
): Promise<UserCourseEnrollment | null> {
  getAdminApp();
  const snapshot = await getFirestore()
    .collection("courseEnrollments")
    .where("userId", "==", userId)
    .where("courseId", "==", courseId)
    .limit(1)
    .get();

  if (snapshot.empty) return null;

  const doc = snapshot.docs[0];
  return serializeEnrollment(doc.id, doc.data());
}

export async function isUserEnrolledAdmin(
  userId: string,
  courseId: string
): Promise<boolean> {
  const enrollment = await getUserEnrollmentAdmin(userId, courseId);
  return enrollment?.paymentStatus === "completed";
}
