"use server";

import { createDraftBooking } from "@/lib/booking";

export async function submitIconApplication({
  intake
}: {
  intake: Record<string, any>;
}) {
  try {
    // Create a draft booking with the application data
    const bookingId = await createDraftBooking({
      packageId: "icon",
      customer: {
        name: intake.fullName,
        email: intake.email,
        phone: "", // Not collected in this form
        company: "", // Not collected in this form
        instagram: "", // Not collected in this form
        tiktok: "", // Not collected in this form
        website: intake.businessUrl
      },
      details: {
        goals: `Current Revenue: ${intake.currentRevenue}\nGoal Revenue: ${intake.goalRevenue}\nWhy Now: ${intake.whyNow}`,
        brandStyle: intake.niche,
        deliverablesFocus: "both" as const,
        requestedDate: "",
        accessibilityNeeds: "",
        notes: `ICON Application Details:
- Business URL: ${intake.businessUrl}
- Niche: ${intake.niche}
- Current Monthly Revenue: ${intake.currentRevenue}
- Goal Monthly Revenue: ${intake.goalRevenue}
- Biggest Content Bottleneck: ${intake.bottleneck}
- Team or Solo: ${intake.teamOrSolo}
- Why This Now: ${intake.whyNow}
- Additional Notes: ${intake.notes || 'None provided'}`,
        acceptsTerms: true,
        city: "", // Not specified in ICON applications
        preferredNeighborhood: "",
        teamSize: intake.teamOrSolo === "solo" ? 1 : 0 // Estimate based on team/solo
      }
    });

    // For ICON applications, we don't redirect to checkout
    // Instead, we just store the application for review
    console.log(`ICON application received from ${intake.fullName} (${intake.email})`);
    
    return { ok: true, bookingId };
  } catch (error) {
    console.error("Error submitting ICON application:", error);
    throw error;
  }
}


