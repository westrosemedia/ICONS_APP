import { NextRequest, NextResponse } from "next/server";
import { sendEmail, addContactToList } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();

    // Validate input
    if (!name || !email) {
      return NextResponse.json(
        { error: "Name and email are required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Add contact to Resend list with Black Friday tag
    const [firstName, ...lastNameParts] = (name || '').split(' ');
    const lastName = lastNameParts.join(' ');
    
    const listResult = await addContactToList(
      email, 
      firstName, 
      lastName, 
      'Black Friday'
    );

    if (!listResult.success) {
      console.error("Failed to add contact to list:", listResult.error);
    }

    // Send notification email
    const emailContent = `
New Black Friday Waitlist Signup:

- Name: ${name}
- Email: ${email}
- Timestamp: ${new Date().toLocaleString()}

---
This signup was submitted from the Black Friday waitlist page.
    `;

    await sendEmail({
      to: "admin@westrosemedia.com",
      subject: "New Black Friday Waitlist Signup",
      text: emailContent,
    });

    return NextResponse.json(
      { success: true, message: "Successfully joined waitlist" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Waitlist signup error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}


