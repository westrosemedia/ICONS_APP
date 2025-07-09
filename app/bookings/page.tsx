"use client";

import React, { useEffect, useState } from "react";
import { auth, db } from "../../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import CitySelector from "../../components/booking/CitySelector";
import BookingForm from "../../components/booking/BookingForm";
import { cities, getAvailableTimeSlots } from "../../lib/calendar";

export default function BookingsPage() {
  const [user, setUser] = useState<any>(null);
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [slots, setSlots] = useState<string[]>([]);
  const [email, setEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      if (!u) {
        router.replace("/login");
        return;
      }
      setUser(u);
      setEmail(u.email || "");
    });
    return () => unsub();
  }, [router]);

  // Update slots when city or date changes
  useEffect(() => {
    if (city && date) {
      setSlots(getAvailableTimeSlots(city, date));
    } else {
      setSlots([]);
    }
  }, [city, date]);

  const handleBook = async (form: any) => {
    if (!user) return;
    const bookingId = Date.now().toString();
    await setDoc(doc(db, `bookings/${city}/${user.uid}/${bookingId}`), {
      ...form,
      city,
      uid: user.uid,
      createdAt: new Date().toISOString(),
    });
  };

  return (
    <main className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-lg mx-auto px-4">
        <h1 className="text-2xl font-bold text-primary mb-6 text-center">Book a Session</h1>
        <CitySelector cities={cities} value={city} onChange={setCity} />
        {city && (
          <BookingForm
            city={city}
            email={email}
            availableSlots={slots}
            onBook={handleBook}
          />
        )}
      </div>
    </main>
  );
} 