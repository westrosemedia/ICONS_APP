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
        fullName: intake.fullName,
        email: intake.email,
        phone: "" // Not collected in this form
      },
      details: {
        intake: intake,
        preferences: {},
        notes: `ICON Application Details:
- Business URL: ${intake.businessUrl}
- Niche: ${intake.niche}
- Current Monthly Revenue: ${intake.currentRevenue}
- Goal Monthly Revenue: ${intake.goalRevenue}
- Biggest Content Bottleneck: ${intake.bottleneck}
- Team or Solo: ${intake.teamOrSolo}
- Why This Now: ${intake.whyNow}
- Additional Notes: ${intake.notes || 'None provided'}`
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


