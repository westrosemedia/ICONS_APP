import { 
  collection, 
  doc, 
  getDoc, 
  getDocs, 
  setDoc, 
  updateDoc, 
  query, 
  where,
  Timestamp 
} from 'firebase/firestore';
import { db } from './firebase';
import { auth } from './firebase';

// Ensure db is available
if (!db) {
  console.error('Firestore db not initialized');
}
import { Course, CourseWeek, UserCourseEnrollment, CourseProgress } from './types/course';
import {
  fetchCourseFromApi,
  fetchCoursesFromApi,
  fetchCourseWeekFromApi,
  fetchCourseWeeksFromApi,
  fetchUserEnrollmentFromApi,
} from './courseApiClient';

const COURSES_COLLECTION = 'courses';
const WEEKS_COLLECTION = 'courseWeeks';
const ENROLLMENTS_COLLECTION = 'courseEnrollments';
const PROGRESS_COLLECTION = 'courseProgress';

export class CourseService {
  /**
   * Get all published courses
   */
  static async getAllCourses(): Promise<Course[]> {
    try {
      return await fetchCoursesFromApi();
    } catch (error) {
      console.error('Error fetching courses:', error);
      return [];
    }
  }

  /**
   * Get a single course by ID
   */
  static async getCourse(courseId: string): Promise<Course | null> {
    try {
      return await fetchCourseFromApi(courseId);
    } catch (error) {
      console.error('Error fetching course:', error);
      return null;
    }
  }

  /**
   * Get all weeks for a course
   */
  static async getCourseWeeks(courseId: string): Promise<CourseWeek[]> {
    try {
      return await fetchCourseWeeksFromApi(courseId);
    } catch (error) {
      console.error('Error fetching course weeks:', error);
      return [];
    }
  }

  /**
   * Get a specific week
   */
  static async getWeek(courseId: string, weekNumber: number): Promise<CourseWeek | null> {
    try {
      return await fetchCourseWeekFromApi(courseId, weekNumber);
    } catch (error) {
      console.error('Error fetching week:', error);
      return null;
    }
  }

  /**
   * Check if user is enrolled in a course
   */
  static async isUserEnrolled(userId: string, courseId: string): Promise<boolean> {
    try {
      const enrollment = await this.getUserEnrollment(userId, courseId);
      return enrollment?.paymentStatus === 'completed';
    } catch (error) {
      console.error('Error checking enrollment:', error);
      return false;
    }
  }

  /**
   * Get user's enrollment for a course
   */
  static async getUserEnrollment(userId: string, courseId: string): Promise<UserCourseEnrollment | null> {
    try {
      if (auth?.currentUser?.uid !== userId) {
        return null;
      }
      return await fetchUserEnrollmentFromApi(courseId);
    } catch (error) {
      console.error('Error fetching enrollment:', error);
      return null;
    }
  }

  /**
   * Get user's progress for a course
   */
  static async getUserProgress(userId: string, courseId: string): Promise<CourseProgress | null> {
    try {
      const docRef = doc(db, PROGRESS_COLLECTION, `${userId}_${courseId}`);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) return null;
      
      const data = docSnap.data();
      return {
        ...data,
        lastAccessedAt: data.lastAccessedAt?.toDate(),
      } as CourseProgress;
    } catch (error) {
      console.error('Error fetching progress:', error);
      return null;
    }
  }

  /**
   * Create enrollment after successful Stripe payment
   */
  static async createEnrollment(
    userId: string,
    courseId: string,
    stripePaymentIntentId?: string,
    stripeSubscriptionId?: string
  ): Promise<string> {
    try {
      const enrollmentRef = doc(collection(db, ENROLLMENTS_COLLECTION));
      const enrollment: Omit<UserCourseEnrollment, 'id'> = {
        userId,
        courseId,
        enrolledAt: new Date(),
        stripePaymentIntentId,
        stripeSubscriptionId,
        paymentStatus: 'completed',
        currentWeek: 0,
        completedWeeks: [],
        progress: 0,
      };
      
      await setDoc(enrollmentRef, {
        ...enrollment,
        enrolledAt: Timestamp.fromDate(enrollment.enrolledAt),
      });
      
      // Initialize progress
      await this.updateProgress(userId, courseId, 0, []);
      
      return enrollmentRef.id;
    } catch (error) {
      console.error('Error creating enrollment:', error);
      throw error;
    }
  }

  /**
   * Mark a week as completed
   */
  static async completeWeek(
    userId: string,
    courseId: string,
    weekNumber: number
  ): Promise<void> {
    try {
      const enrollment = await this.getUserEnrollment(userId, courseId);
      if (!enrollment) throw new Error('User not enrolled');

      const course = await this.getCourse(courseId);
      if (!course) throw new Error('Course not found');

      if (
        !course.selfPaced &&
        weekNumber !== enrollment.currentWeek + 1
      ) {
        throw new Error('Must complete weeks sequentially');
      }

      if (enrollment.completedWeeks.includes(weekNumber)) {
        return;
      }
      
      const completedWeeks = [...enrollment.completedWeeks, weekNumber].sort(
        (a, b) => a - b
      );
      const progress = Math.round((completedWeeks.length / course.totalWeeks) * 100);
      const currentWeek = course.selfPaced
        ? Math.max(enrollment.currentWeek, weekNumber)
        : weekNumber;
      
      // Update enrollment
      const enrollmentRef = doc(db, ENROLLMENTS_COLLECTION, enrollment.id);
      await updateDoc(enrollmentRef, {
        currentWeek,
        completedWeeks,
        progress,
        completedAt: progress === 100 ? Timestamp.now() : null,
      });
      
      // Update progress
      await this.updateProgress(userId, courseId, currentWeek, completedWeeks);
    } catch (error) {
      console.error('Error completing week:', error);
      throw error;
    }
  }

  /**
   * Update user progress
   */
  private static async updateProgress(
    userId: string,
    courseId: string,
    currentWeek: number,
    completedWeeks: number[]
  ): Promise<void> {
    try {
      const course = await this.getCourse(courseId);
      if (!course) return;
      
      const progress = Math.round((completedWeeks.length / course.totalWeeks) * 100);
      const progressRef = doc(db, PROGRESS_COLLECTION, `${userId}_${courseId}`);
      
      await setDoc(progressRef, {
        userId,
        courseId,
        currentWeek,
        completedWeeks,
        progress,
        lastAccessedAt: Timestamp.now(),
      }, { merge: true });
    } catch (error) {
      console.error('Error updating progress:', error);
    }
  }

  /**
   * Get which weeks are unlocked for a user
   */
  static async getUnlockedWeeks(userId: string, courseId: string): Promise<number[]> {
    try {
      const enrollment = await this.getUserEnrollment(userId, courseId);
      if (!enrollment || enrollment.paymentStatus !== 'completed') return [];

      const course = await this.getCourse(courseId);
      if (!course) return [];

      if (course.selfPaced) {
        return Array.from({ length: course.totalWeeks }, (_, index) => index + 1);
      }
      
      // Week 1 is always unlocked, then sequential unlocking based on completed weeks
      const unlockedWeeks: number[] = [1];
      
      if (enrollment.currentWeek > 0) {
        for (let i = 1; i <= enrollment.currentWeek; i++) {
          unlockedWeeks.push(i + 1);
        }
      }
      
      return unlockedWeeks;
    } catch (error) {
      console.error('Error getting unlocked weeks:', error);
      return [];
    }
  }
}

