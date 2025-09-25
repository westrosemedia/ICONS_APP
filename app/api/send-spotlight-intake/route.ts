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
      'Spotlight Intake'
    );

    if (!listResult.success) {
      console.error("Failed to add contact to list:", listResult.error);
    }

    const emailContent = `
New Spotlight Intake Form Submission:

Personal Information:
- Full Name: ${formData.fullName || "Not provided"}
- Email: ${formData.email || "Not provided"}
- Instagram: ${formData.instagram || "Not provided"}

Location & Preferences:
- City: ${formData.city || "Not provided"}
- Brand Vibe: ${formData.brandVibe || "Not provided"}
- Usage Goals: ${formData.usageGoals || "Not provided"}

---
This form was submitted from the Spotlight booking page.
    `;

    await sendEmail({
      to: "stephanie@westrosemedia.com",
      subject: "New Spotlight Intake Form Submission",
      text: emailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending Spotlight intake email:", error);
    return NextResponse.json(
      { error: "Failed to send intake form" },
      { status: 500 }
    );
  }
}
