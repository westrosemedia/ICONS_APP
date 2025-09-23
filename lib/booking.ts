import { 
  collection, 
  doc, 
  setDoc, 
  getDoc, 
  getDocs, 
  query, 
  where, 
  serverTimestamp,
  updateDoc,
  orderBy 
} from "firebase/firestore";
import { db } from "./firebase";
import { Package } from "@/types/package";
import { Booking, Customer, BookingDetails, Pricing } from "@/types/booking";

// Package operations
export async function getPackage(packageId: string): Promise<Package | null> {
  try {
    if (!db) {
      console.error("Firebase not initialized");
      return null;
    }
    
    const docRef = doc(db, "packages", packageId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Package;
    }
    return null;
  } catch (error) {
    console.error("Error getting package:", error);
    return null;
  }
}

export async function getAllPackages(): Promise<Package[]> {
  try {
    if (!db) {
      console.error("Firebase not initialized");
      return [];
    }
    
    const q = query(collection(db, "packages"), where("active", "==", true));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Package[];
  } catch (error) {
    console.error("Error getting packages:", error);
    return [];
  }
}

// Booking operations
export async function createDraftBooking(bookingData: {
  packageId: string;
  customer: Customer;
  details: BookingDetails;
  pricing?: Partial<Pricing>;
}): Promise<string> {
  try {
    if (!db) {
      console.error("Firebase not initialized");
      throw new Error("Database not available");
    }
    
    const bookingRef = doc(collection(db, "bookings"));
    const booking: Omit<Booking, "id"> = {
      packageId: bookingData.packageId,
      status: "draft",
      customer: bookingData.customer,
      details: bookingData.details,
      pricing: {
        basePrice: 0,
        totalPrice: 0,
        currency: "CAD",
        ...bookingData.pricing
      },
      stripe: {},
      timestamps: {
        createdAt: new Date(),
        updatedAt: new Date()
      }
    };
    
    await setDoc(bookingRef, booking);
    return bookingRef.id;
  } catch (error) {
    console.error("Error creating draft booking:", error);
    throw new Error("Failed to create booking");
  }
}

export async function updateBookingStatus(
  bookingId: string, 
  status: Booking["status"]
): Promise<void> {
  try {
    const bookingRef = doc(db, "bookings", bookingId);
    await updateDoc(bookingRef, {
      status,
      "timestamps.updatedAt": serverTimestamp()
    });
  } catch (error) {
    console.error("Error updating booking status:", error);
    throw new Error("Failed to update booking status");
  }
}

export async function getBooking(bookingId: string): Promise<Booking | null> {
  try {
    const docRef = doc(db, "bookings", bookingId);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() } as Booking;
    }
    return null;
  } catch (error) {
    console.error("Error getting booking:", error);
    return null;
  }
}

export async function getAllBookings(): Promise<Booking[]> {
  try {
    const q = query(collection(db, "bookings"), orderBy("timestamps.createdAt", "desc"));
    const querySnapshot = await getDocs(q);
    
    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    })) as Booking[];
  } catch (error) {
    console.error("Error getting bookings:", error);
    return [];
  }
}

export async function updateBookingStripeData(
  bookingId: string,
  stripeData: Partial<Booking["stripe"]>
): Promise<void> {
  try {
    const bookingRef = doc(db, "bookings", bookingId);
    await updateDoc(bookingRef, {
      stripe: stripeData,
      "timestamps.updatedAt": serverTimestamp()
    });
  } catch (error) {
    console.error("Error updating booking stripe data:", error);
    throw new Error("Failed to update booking stripe data");
  }
}

// Pricing calculations
export function calculatePricing(basePrice: number, addOns: any[] = []): Pricing {
  const addOnTotal = addOns.reduce((sum, addon) => sum + (addon.price || 0), 0);
  const totalPrice = basePrice + addOnTotal;
  
  return {
    basePrice,
    addOns: addOns.map(addon => ({
      name: addon.name || 'Add-on',
      price: addon.price || 0
    })),
    totalPrice,
    currency: "CAD"
  };
}

export async function createBookingAndCheckout(data: {
  pkg: string;
  intake: any;
  calendarCity?: string;
}): Promise<{ url: string }> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}/api/checkout`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        pkg: data.pkg,
        intake: data.intake,
        values: {
          participants: data.intake.participantQuantity || 0,
          calendarCity: data.calendarCity
        }
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Checkout failed');
    }

    const result = await response.json();
    return { url: result.url };
  } catch (error) {
    console.error("Error creating booking and checkout:", error);
    throw error;
  }
}