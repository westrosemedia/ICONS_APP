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
      'WRM Lite Intake'
    );

    if (!listResult.success) {
      console.error("Failed to add contact to list:", listResult.error);
    }

    const emailContent = `
New WRM Lite Intake Form Submission:

Personal Information:
- Full Name: ${formData.fullName || "Not provided"}
- Email: ${formData.email || "Not provided"}
- Instagram: ${formData.instagram || "Not provided"}
- Business URL: ${formData.businessUrl || "Not provided"}

Platform Preferences:
- Top Platforms: ${formData.topPlatforms?.join(", ") || "Not provided"}
- Approval Workflow: ${formData.approvalWorkflow || "Not provided"}

Additional Notes:
${formData.notes || "None"}

---
This form was submitted from the WRM Lite booking page.
    `;

    await sendEmail({
      to: "stephanie@westrosemedia.com",
      subject: "New WRM Lite Intake Form Submission",
      text: emailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending WRM Lite intake email:", error);
    return NextResponse.json(
      { error: "Failed to send intake form" },
      { status: 500 }
    );
  }
}
