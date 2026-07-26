import { getStripe } from "@/lib/stripe";
import { createCourseEnrollmentAdmin } from "@/lib/firebaseAdmin";
import {
  getPublishedCourseAdmin,
  getUserEnrollmentAdmin,
} from "@/lib/courseAdminStore";
import { getAdminApp } from "@/lib/firebaseAdmin";

async function findPaidSessionForEmail(
  email: string,
  courseId: string
) {
  const stripe = getStripe();
  const sessions = await stripe.checkout.sessions.list({
    limit: 100,
    status: "complete",
  });

  return sessions.data.find((session) => {
    const sessionEmail = (
      session.customer_details?.email ||
      session.customer_email ||
      ""
    )
      .trim()
      .toLowerCase();

    return (
      session.payment_status === "paid" &&
      sessionEmail === email &&
      session.metadata?.courseId === courseId
    );
  });
}

export async function syncCourseEnrollmentForUser(
  userId: string,
  courseId: string,
  email?: string | null
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

  const normalizedEmail = email?.trim().toLowerCase();
  if (!normalizedEmail) {
    return { synced: false, reason: "missing_email" };
  }

  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const isAdmin = adminEmail && normalizedEmail === adminEmail;

  const paidSession = isAdmin
    ? null
    : await findPaidSessionForEmail(normalizedEmail, courseId);

  if (!paidSession && !isAdmin) {
    return { synced: false, reason: "no_paid_session" };
  }

  await createCourseEnrollmentAdmin(
    userId,
    courseId,
    typeof paidSession?.payment_intent === "string"
      ? paidSession.payment_intent
      : "admin-grant",
    typeof paidSession?.subscription === "string"
      ? paidSession.subscription
      : null
  );

  return { synced: true };
}

export async function claimCheckoutSessionForUser(
  userId: string,
  courseId: string,
  sessionId: string,
  email?: string | null
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

  const stripe = getStripe();
  const session = await stripe.checkout.sessions.retrieve(sessionId);

  if (session.payment_status !== "paid") {
    return { synced: false, reason: "payment_not_completed" };
  }

  if (session.metadata?.courseId && session.metadata.courseId !== courseId) {
    return { synced: false, reason: "wrong_course" };
  }

  const sessionEmail = (
    session.customer_details?.email ||
    session.customer_email ||
    ""
  )
    .trim()
    .toLowerCase();

  const normalizedEmail = email?.trim().toLowerCase();
  if (!normalizedEmail || sessionEmail !== normalizedEmail) {
    return { synced: false, reason: "email_mismatch" };
  }

  await createCourseEnrollmentAdmin(
    userId,
    courseId,
    typeof session.payment_intent === "string" ? session.payment_intent : null,
    typeof session.subscription === "string" ? session.subscription : null
  );

  return { synced: true };
}
