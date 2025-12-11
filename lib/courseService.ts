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

// Ensure db is available
if (!db) {
  console.error('Firestore db not initialized');
}
import { Course, CourseWeek, UserCourseEnrollment, CourseProgress } from './types/course';

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
      const q = query(
        collection(db, COURSES_COLLECTION),
        where('published', '==', true)
      );
      const snapshot = await getDocs(q);
      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate(),
        updatedAt: doc.data().updatedAt?.toDate(),
      })) as Course[];
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
      const docRef = doc(db, COURSES_COLLECTION, courseId);
      const docSnap = await getDoc(docRef);
      if (!docSnap.exists()) return null;
      
      return {
        id: docSnap.id,
        ...docSnap.data(),
        createdAt: docSnap.data().createdAt?.toDate(),
        updatedAt: docSnap.data().updatedAt?.toDate(),
      } as Course;
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
      const q = query(
        collection(db, WEEKS_COLLECTION),
        where('courseId', '==', courseId)
      );
      const snapshot = await getDocs(q);
      const weeks = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as CourseWeek[];
      
      // Sort by week number
      return weeks.sort((a, b) => a.weekNumber - b.weekNumber);
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
      const q = query(
        collection(db, WEEKS_COLLECTION),
        where('courseId', '==', courseId),
        where('weekNumber', '==', weekNumber)
      );
      const snapshot = await getDocs(q);
      if (snapshot.empty) return null;
      
      return {
        id: snapshot.docs[0].id,
        ...snapshot.docs[0].data(),
      } as CourseWeek;
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
      const q = query(
        collection(db, ENROLLMENTS_COLLECTION),
        where('userId', '==', userId),
        where('courseId', '==', courseId),
        where('paymentStatus', '==', 'completed')
      );
      const snapshot = await getDocs(q);
      return !snapshot.empty;
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
      const q = query(
        collection(db, ENROLLMENTS_COLLECTION),
        where('userId', '==', userId),
        where('courseId', '==', courseId)
      );
      const snapshot = await getDocs(q);
      if (snapshot.empty) return null;
      
      const enrollment = snapshot.docs[0].data();
      return {
        id: snapshot.docs[0].id,
        ...enrollment,
        enrolledAt: enrollment.enrolledAt?.toDate(),
        completedAt: enrollment.completedAt?.toDate(),
      } as UserCourseEnrollment;
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
      
      // Don't allow skipping weeks - must complete sequentially
      if (weekNumber !== enrollment.currentWeek + 1) {
        throw new Error('Must complete weeks sequentially');
      }
      
      const completedWeeks = [...enrollment.completedWeeks, weekNumber];
      const course = await this.getCourse(courseId);
      if (!course) throw new Error('Course not found');
      
      const progress = Math.round((completedWeeks.length / course.totalWeeks) * 100);
      const currentWeek = weekNumber;
      
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
      if (!enrollment) return [];
      
      // Week 1 is always unlocked, then sequential unlocking
      const unlockedWeeks: number[] = [1];
      for (let i = 1; i <= enrollment.currentWeek; i++) {
        unlockedWeeks.push(i + 1);
      }
      
      return unlockedWeeks;
    } catch (error) {
      console.error('Error getting unlocked weeks:', error);
      return [];
    }
  }
}

