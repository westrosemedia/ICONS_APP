"use server";

import { redirect } from "next/navigation";

export async function createPPBCheckout(intake: {
  fullName: string;
  businessName: string;
  instagram: string;
  pronouns: string;
  phone: string;
  email: string;
  mailingAddress: string;
  howDidYouHear: string;
  city: string;
  bigLaunch: string;
  incomeGoal: string;
}) {
  // For now, redirect directly to the Stripe payment link
  // In the future, you could store the intake data and then redirect
  redirect("https://buy.stripe.com/cNi00ifNm5uZd1V00B87K0O");
}
