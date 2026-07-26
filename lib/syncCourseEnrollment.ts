import { getAuth } from "firebase-admin/auth";
import { getStripe } from "@/lib/stripe";
import {
  createCourseEnrollmentAdmin,
} from "@/lib/firebaseAdmin";
import {
  getPublishedCourseAdmin,
  getUserEnrollmentAdmin,
} from "@/lib/courseAdminStore";
import { getAdminApp } from "@/lib/firebaseAdmin";

export async function syncCourseEnrollmentForUser(
  userId: string,
  courseId: string
): Promise<{ synced: boolean; reason?: string }> {
  getAdminApp();

  const course = await getPublishedCourseAdmin(courseId);
  if (!course) {
    return { synced: false, reason: "course_not_found" };
  }

  const existing = await getUserEnrollmentAdmin(userId, courseId);
  if (existing?.paymentStatus === "completed") {
    return { synced: true };
  }

  const userRecord = await getAuth().getUser(userId);
  const email = userRecord.email?.trim().toLowerCase();
  if (!email) {
    return { synced: false, reason: "missing_email" };
  }

  const stripe = getStripe();
  const sessions = await stripe.checkout.sessions.list({
    limit: 100,
    status: "complete",
  });

  const paidSession = sessions.data.find((session) => {
    const sessionEmail = (
      session.customer_details?.email ||
      session.customer_email ||
      ""
    )
      .trim()
      .toLowerCase();

    const sessionCourseId = session.metadata?.courseId;
    return (
      session.payment_status === "paid" &&
      sessionEmail === email &&
      sessionCourseId === courseId
    );
  });

  if (!paidSession) {
    return { synced: false, reason: "no_paid_session" };
  }

  const enrolledUserId = userId;

  await createCourseEnrollmentAdmin(
    enrolledUserId,
    courseId,
    typeof paidSession.payment_intent === "string"
      ? paidSession.payment_intent
      : null,
    typeof paidSession.subscription === "string"
      ? paidSession.subscription
      : null
  );

  return { synced: true };
}
