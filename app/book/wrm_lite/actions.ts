"use server";

import { createDraftBooking } from "@/lib/booking";

export async function createBookingAndCheckout({
  pkg,
  intake
}: {
  pkg: string;
  intake: Record<string, any>;
}) {
  try {
    // Create a draft booking with the intake data
    const bookingId = await createDraftBooking({
      packageId: pkg,
      customer: {
        name: intake.fullName,
        email: intake.email,
        phone: "", // Not collected in this form
        company: intake.businessUrl,
        instagram: intake.instagram,
        tiktok: "", // Not collected in this form
        website: intake.businessUrl
      },
      details: {
        goals: intake.notes || "",
        brandStyle: intake.niche,
        deliverablesFocus: "both" as const,
        requestedDate: "",
        accessibilityNeeds: "",
        notes: `Niche: ${intake.niche}\nRevenue Range: ${intake.revenueRange}\nTop Platforms: ${intake.topPlatforms.join(", ")}\nApproval Workflow: ${intake.approvalWorkflow}\nBilling Email: ${intake.billingEmail}`,
        acceptsTerms: true,
        city: "Calgary", // Default for WRM Lite
        preferredNeighborhood: "",
        teamSize: 1
      }
    });

    // Create checkout session
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pkg: "lite", // Map wrm_lite to lite for the API
        values: intake
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to create checkout session");
    }

    const data = await response.json();
    return { url: data.url };
  } catch (error) {
    console.error("Error creating booking and checkout:", error);
    throw error;
  }
}


