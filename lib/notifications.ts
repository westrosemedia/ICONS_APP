import { getMessaging, getToken, onMessage } from "firebase/messaging";
import { app } from "./firebase";

// Initialize Firebase Cloud Messaging
const messaging = getMessaging(app);

// VAPID key for web push notifications
const vapidKey = process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY;

export interface NotificationPayload {
  title: string;
  body: string;
  icon?: string;
  badge?: string;
  tag?: string;
  data?: Record<string, any>;
}

export class NotificationService {
  private static instance: NotificationService;
  private isInitialized = false;

  static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService();
    }
    return NotificationService.instance;
  }

  async initialize(): Promise<boolean> {
    if (this.isInitialized) return true;

    try {
      // Check if browser supports notifications
      if (!('Notification' in window)) {
        console.log('This browser does not support notifications');
        return false;
      }

      // Request permission
      const permission = await Notification.requestPermission();
      if (permission !== 'granted') {
        console.log('Notification permission denied');
        return false;
      }

      // Get FCM token
      if (vapidKey) {
        const token = await getToken(messaging, { vapidKey });
        console.log('FCM Token:', token);
        
        // Store token in localStorage for now (in production, send to your server)
        localStorage.setItem('fcmToken', token);
      }

      // Handle foreground messages
      onMessage(messaging, (payload) => {
        console.log('Message received:', payload);
        this.showNotification({
          title: payload.notification?.title || 'New Message',
          body: payload.notification?.body || '',
          icon: payload.notification?.icon,
          data: payload.data
        });
      });

      this.isInitialized = true;
      return true;
    } catch (error) {
      console.error('Failed to initialize notifications:', error);
      return false;
    }
  }

  async showNotification(payload: NotificationPayload): Promise<void> {
    if (!this.isInitialized) {
      await this.initialize();
    }

    if (Notification.permission === 'granted') {
      const notification = new Notification(payload.title, {
        body: payload.body,
        icon: payload.icon || '/logo.png',
        badge: payload.badge || '/logo.png',
        tag: payload.tag,
        data: payload.data
      });

      // Auto-close after 5 seconds
      setTimeout(() => {
        notification.close();
      }, 5000);

      // Handle click
      notification.onclick = (event) => {
        event.preventDefault();
        notification.close();
        
        // Navigate to specific page based on data
        if (payload.data?.url) {
          window.location.href = payload.data.url;
        }
      };
    }
  }

  async getToken(): Promise<string | null> {
    try {
      if (vapidKey) {
        return await getToken(messaging, { vapidKey });
      }
      return null;
    } catch (error) {
      console.error('Failed to get FCM token:', error);
      return null;
    }
  }

  async updateToken(): Promise<string | null> {
    try {
      if (vapidKey) {
        const token = await getToken(messaging, { vapidKey });
        localStorage.setItem('fcmToken', token);
        return token;
      }
      return null;
    } catch (error) {
      console.error('Failed to update FCM token:', error);
      return null;
    }
  }
}

// Notification triggers for different events
export const notificationTriggers = {
  // Content related
  newContent: (userName: string) => ({
    title: 'New Content Ready',
    body: `${userName}, your new photos and videos are ready to view!`,
    data: { url: '/media-library' }
  }),

  // Story Vault related
  voiceNoteTranscribed: (userName: string) => ({
    title: 'Voice Note Transcribed',
    body: `${userName}, your voice note has been transcribed and is ready for review.`,
    data: { url: '/story-vault' }
  }),

  // Community related
  newCommunityMessage: (userName: string) => ({
    title: 'New ICON Society Message',
    body: `${userName}, there's a new message in the ICON Society community.`,
    data: { url: '/community' }
  }),

  // Booking related
  bookingConfirmed: (userName: string, packageName: string) => ({
    title: 'Booking Confirmed',
    body: `${userName}, your ${packageName} booking has been confirmed!`,
    data: { url: '/dashboard' }
  }),

  // Reminder notifications
  contentReminder: (userName: string) => ({
    title: 'Content Reminder',
    body: `${userName}, don't forget to check your latest content in the gallery.`,
    data: { url: '/media-library' }
  }),

  communityReminder: (userName: string) => ({
    title: 'Community Check-in',
    body: `${userName}, the ICON Society community is waiting for your insights.`,
    data: { url: '/community' }
  })
};

export default NotificationService.getInstance(); 