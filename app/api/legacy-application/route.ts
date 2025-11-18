import { NextRequest, NextResponse } from "next/server";
import { sendEmail, addContactToList } from "@/lib/email";

// Make this route dynamic to avoid build-time execution
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();

    // Validate required fields
    const requiredFields = [
      "fullName",
      "businessName",
      "currentRevenue",
      "desiredRevenue",
      "visibilityBlock",
      "contentChange",
      "whyStephanie",
      "investmentReady",
      "email",
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    // Add contact to Resend list with Legacy Application tag
    const [firstName, ...lastNameParts] = (formData.fullName || '').split(' ');
    const lastName = lastNameParts.join(' ');
    
    const listResult = await addContactToList(
      formData.email, 
      firstName, 
      lastName, 
      'Legacy Application'
    );

    if (!listResult.success) {
      console.error("Failed to add contact to list:", listResult.error);
    }

    // Send notification email
    const emailContent = `
New ICON Legacy Experience Application:

Personal Information:
- Full Name: ${formData.fullName}
- Business Name: ${formData.businessName}
- Email: ${formData.email}

Business Details:
- Current Monthly Revenue: ${formData.currentRevenue}
- Desired Monthly Revenue for 2026: ${formData.desiredRevenue}

Application Questions:
- Biggest Visibility Block: ${formData.visibilityBlock}
- What They Want to Change: ${formData.contentChange}
- Why They Want to Work with Stephanie: ${formData.whyStephanie}
- Prepared to Invest $60,000: ${formData.investmentReady}

---
This application was submitted from the Black Friday page.
    `;

    await sendEmail({
      to: "admin@westrosemedia.com",
      subject: "New ICON Legacy Experience Application",
      text: emailContent,
    });

    return NextResponse.json(
      { success: true, message: "Application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Legacy application error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

