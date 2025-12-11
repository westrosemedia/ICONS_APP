// Course types for Firestore

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnailUrl?: string;
  totalWeeks: number;
  stripeProductId?: string; // Stripe product ID for enrollment
  stripePriceId?: string; // Stripe price ID (one-time or payment plan)
  createdAt: Date;
  updatedAt: Date;
  published: boolean;
}

export interface CourseWeek {
  id: string;
  courseId: string;
  weekNumber: number; // 1-16
  title: string;
  description: string;
  videoUrl: string; // YouTube URL
  videoId?: string; // Extracted YouTube video ID
  content: string; // HTML/text content for the week
  resources?: CourseResource[]; // Optional downloadable resources
  unlocked: boolean; // Whether this week is unlocked (calculated based on progress)
}

export interface CourseResource {
  id: string;
  title: string;
  url: string;
  type: 'pdf' | 'link' | 'other';
}

export interface UserCourseEnrollment {
  id: string;
  userId: string;
  courseId: string;
  enrolledAt: Date;
  stripePaymentIntentId?: string;
  stripeSubscriptionId?: string; // If payment plan
  paymentStatus: 'pending' | 'completed' | 'failed';
  currentWeek: number; // Last completed week (0 = not started)
  completedWeeks: number[]; // Array of completed week numbers
  progress: number; // Percentage 0-100
  completedAt?: Date;
}

export interface CourseProgress {
  userId: string;
  courseId: string;
  currentWeek: number;
  completedWeeks: number[];
  progress: number;
  lastAccessedAt: Date;
}

