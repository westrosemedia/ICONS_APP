import { NextRequest, NextResponse } from "next/server";
import { sendEmail, addContactToList } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();

    // Add contact to email list
    const [firstName, ...lastNameParts] = (formData.fullName || '').split(' ');
    const lastName = lastNameParts.join(' ');
    
    const listResult = await addContactToList(
      formData.email, 
      firstName, 
      lastName, 
      'Immersion Intake'
    );

    if (!listResult.success) {
      console.error("Failed to add contact to list:", listResult.error);
    }

    const emailContent = `
New Immersion Intake Form Submission:

Personal Information:
- Full Name: ${formData.fullName || "Not provided"}
- Business Name: ${formData.businessName || "Not provided"}
- Instagram Handle: ${formData.instagramHandle || "Not provided"}
- Pronouns: ${formData.pronouns || "Not provided"}
- Phone Number: ${formData.phoneNumber || "Not provided"}
- Email: ${formData.email || "Not provided"}

Business Information:
- How did you hear about us: ${formData.howDidYouHear || "Not provided"}
- City: ${formData.city || "Not provided"}

Event Information:
- Event Type: ${formData.eventType || "Not provided"}
- Event Name: ${formData.eventName || "Not provided"}
- Event Dates: ${formData.eventDates || "Not provided"}
- Number of Guests: ${formData.numberOfGuests || "Not provided"}
- Event Location: ${formData.eventLocation || "Not provided"}
- Event Schedule: ${formData.eventSchedule || "Not provided"}
- Key Moments: ${formData.keyMoments || "Not provided"}

Participant Content:
- Participant Quantity: ${formData.participantQuantity || "0"}
- Participant Billing Acknowledged: ${formData.acknowledgeParticipantBilling ? "Yes" : "No"}

Additional Notes:
- ${formData.notes || "None"}

---
This form was submitted from the Immersion booking page.
    `;

    await sendEmail({
      to: "stephanie@westrosemedia.com",
      subject: "New Immersion Intake Form Submission",
      text: emailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending Immersion intake email:", error);
    return NextResponse.json(
      { error: "Failed to send intake form" },
      { status: 500 }
    );
  }
}
