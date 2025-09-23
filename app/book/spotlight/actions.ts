"use server";

import { createBookingAndCheckout } from "@/lib/booking";

export async function createBookingAndCheckout(data: {
  pkg: "spotlight";
  intake: {
    fullName: string;
    email: string;
    instagram: string;
    city: "calgary" | "vancouver" | "toronto" | "other";
    brandVibe: string;
    usageGoals: string;
  };
  calendarCity?: string;
}) {
  return await createBookingAndCheckout(data);
}


