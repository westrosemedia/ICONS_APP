"use server";

import { sendIconApplicationEmail, addContactToList } from "@/lib/email";

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

    // Add contact to email list
    const [firstName, ...lastNameParts] = intake.fullName.split(' ');
    const lastName = lastNameParts.join(' ');
    
    const listResult = await addContactToList(
      intake.email, 
      firstName, 
      lastName, 
      'ICON Application'
    );

    if (!listResult.success) {
      console.error("Failed to add contact to list:", listResult.error);
    }

    // Send email notification via Resend
    const emailResult = await sendIconApplicationEmail({
      fullName: intake.fullName,
      email: intake.email,
      businessUrl: intake.businessUrl,
      currentRevenue: intake.currentRevenue,
      goalRevenue: intake.goalRevenue,
      bottleneck: intake.bottleneck,
      teamOrSolo: intake.teamOrSolo,
      whyNow: intake.whyNow,
      notes: intake.notes
    });

    if (!emailResult.success) {
      console.error("Failed to send email notification:", emailResult.error);
      // Still return success to user, but log the email error
    }

    console.log(`ICON application received from ${intake.fullName} (${intake.email})`);
    
    // Simulate a brief delay to show the loading state
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { ok: true, message: "Application submitted successfully" };
  } catch (error) {
    console.error("Error submitting ICON application:", error);
    return { ok: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}


