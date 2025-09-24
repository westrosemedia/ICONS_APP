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
        phone: intake.phoneNumber,
        company: intake.businessName,
        instagram: intake.instagramHandle,
        tiktok: "", // Not collected in this form
        website: "" // Not collected in this form
      },
      details: {
        goals: intake.bigLaunch || "",
        brandStyle: "",
        deliverablesFocus: "both" as const,
        requestedDate: intake.eventDates,
        accessibilityNeeds: "",
        notes: `Personal Information:
- Full Name: ${intake.fullName}
- Business Name: ${intake.businessName}
- Instagram Handle: ${intake.instagramHandle}
- Pronouns: ${intake.pronouns}
- Phone: ${intake.phoneNumber}
- Email: ${intake.email}

Business Information:
- How did you hear about us: ${intake.howDidYouHear}
- City: ${intake.city}

Event Information:
- Event Type: ${intake.eventType}
- Event Name: ${intake.eventName}
- Event Dates: ${intake.eventDates}
- Number of Guests: ${intake.numberOfGuests}
- Event Location: ${intake.eventLocation}
- Event Schedule: ${intake.eventSchedule}
- Key Moments: ${intake.keyMoments}
- Participant Content Quantity: ${intake.participantQuantity}
- Participant Billing Acknowledged: ${intake.acknowledgeParticipantBilling}
- Additional Notes: ${intake.notes || "None"}`,
        acceptsTerms: true,
        city: intake.city,
        preferredNeighborhood: intake.eventLocation,
        teamSize: Number(intake.numberOfGuests) || 0
      }
    });

    // Create checkout session
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/api/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pkg: "immersion",
        values: {
          ...intake,
          participants: intake.participantQuantity // Map to the expected field name
        }
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


