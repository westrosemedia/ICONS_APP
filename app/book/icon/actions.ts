"use server";

import { createDraftBooking } from "@/lib/booking";

export async function submitIconApplication({
  intake
}: {
  intake: Record<string, any>;
}) {
  try {
    console.log("Starting ICON application submission with data:", intake);
    
    // Validate required fields
    if (!intake.fullName || !intake.email) {
      throw new Error("Missing required fields: fullName and email are required");
    }

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
- Business URL: ${intake.businessUrl || 'Not provided'}
- Current Monthly Revenue: ${intake.currentRevenue || 'Not provided'}
- Goal Monthly Revenue: ${intake.goalRevenue || 'Not provided'}
- Biggest Content Bottleneck: ${intake.bottleneck || 'Not provided'}
- Team or Solo: ${intake.teamOrSolo || 'Not provided'}
- Why This Now: ${intake.whyNow || 'Not provided'}
- Additional Notes: ${intake.notes || 'None provided'}`
      }
    });

    console.log(`ICON application successfully created with booking ID: ${bookingId}`);
    console.log(`ICON application received from ${intake.fullName} (${intake.email})`);
    
    return { ok: true, bookingId };
  } catch (error) {
    console.error("Error submitting ICON application:", error);
    return { ok: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}


