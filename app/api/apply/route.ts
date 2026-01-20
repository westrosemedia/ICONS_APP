import { NextRequest, NextResponse } from "next/server";
import { sendEmail } from "@/lib/email";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.json();

    const requiredFields = [
      "fullName",
      "businessName",
      "website",
      "instagram",
      "tiktok",
      "city",
      "monthlyRevenue",
      "primaryGoal",
      "bottleneck",
      "longTerm",
      "email"
    ];

    for (const field of requiredFields) {
      if (!formData[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        );
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const submittedAt = new Date().toLocaleString();

    const emailText = `
New ICON Brand Partnership Application

Full name: ${formData.fullName}
Business name: ${formData.businessName}
Website: ${formData.website}
Instagram handle: ${formData.instagram}
TikTok handle: ${formData.tiktok}
City: ${formData.city}
Monthly revenue range: ${formData.monthlyRevenue}
12 month business goal: ${formData.primaryGoal}
Biggest content bottleneck: ${formData.bottleneck}
Long term partnership confirmation: ${formData.longTerm}

Applicant email: ${formData.email}
Submitted: ${submittedAt}
    `;

    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 620px; margin: 0 auto;">
        <h2 style="color: #111; border-bottom: 2px solid #111; padding-bottom: 8px;">
          New ICON Brand Partnership Application
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr><td style="padding: 6px 0;"><strong>Full name:</strong></td><td style="padding: 6px 0;">${formData.fullName}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>Business name:</strong></td><td style="padding: 6px 0;">${formData.businessName}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>Website:</strong></td><td style="padding: 6px 0;">${formData.website}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>Instagram handle:</strong></td><td style="padding: 6px 0;">${formData.instagram}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>TikTok handle:</strong></td><td style="padding: 6px 0;">${formData.tiktok}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>City:</strong></td><td style="padding: 6px 0;">${formData.city}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>Monthly revenue range:</strong></td><td style="padding: 6px 0;">${formData.monthlyRevenue}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>12 month business goal:</strong></td><td style="padding: 6px 0;">${formData.primaryGoal}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>Biggest content bottleneck:</strong></td><td style="padding: 6px 0;">${formData.bottleneck}</td></tr>
          <tr><td style="padding: 6px 0;"><strong>Long term partnership confirmation:</strong></td><td style="padding: 6px 0;">${formData.longTerm}</td></tr>
        </table>
        <p style="margin-top: 16px;"><strong>Applicant email:</strong> ${formData.email}</p>
        <p style="color: #666; font-size: 12px; margin-top: 12px;">Submitted: ${submittedAt}</p>
      </div>
    `;

    const sendResult = await sendEmail({
      to: "admin@westrosemedia.com",
      subject: "New ICON Brand Partnership Application",
      text: emailText,
      html: emailHtml,
      replyTo: formData.email
    });

    if (!sendResult.success) {
      console.error("Apply form email failed:", sendResult.error);
      return NextResponse.json(
        { error: "Failed to send application email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Application submitted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Apply form submission error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
