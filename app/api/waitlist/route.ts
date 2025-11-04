import { NextRequest, NextResponse } from "next/server";

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

    // Here you would typically:
    // 1. Save to database (Firebase, Supabase, etc.)
    // 2. Send to email service (SendGrid, Mailchimp, etc.)
    // 3. Add to CRM (HubSpot, etc.)
    
    // For now, we'll just log it and return success
    // You can integrate with your preferred service
    console.log("Waitlist signup:", { name, email, timestamp: new Date().toISOString() });

    // TODO: Integrate with your email service or database
    // Example: await addToMailchimp(email, name);
    // Example: await saveToFirebase({ name, email, source: 'black-friday-waitlist' });

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


