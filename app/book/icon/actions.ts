"use server";

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

    // For now, just log the application data and return success
    // We'll add email functionality back once we debug the issue
    const applicationData = {
      packageId: "icon",
      customer: {
        fullName: intake.fullName,
        email: intake.email,
        phone: "" // Not collected in this form
      },
      details: {
        intake: intake,
        preferences: {},
        notes: `ICON Application Details:
- Business URL: ${intake.businessUrl || 'Not provided'}
- Current Monthly Revenue: ${intake.currentRevenue || 'Not provided'}
- Goal Monthly Revenue: ${intake.goalRevenue || 'Not provided'}
- Biggest Content Bottleneck: ${intake.bottleneck || 'Not provided'}
- Team or Solo: ${intake.teamOrSolo || 'Not provided'}
- Why This Now: ${intake.whyNow || 'Not provided'}
- Additional Notes: ${intake.notes || 'None provided'}`
      },
      timestamp: new Date().toISOString()
    };

    // Log the complete application data
    console.log("ICON Application Data:", JSON.stringify(applicationData, null, 2));
    console.log(`ICON application received from ${intake.fullName} (${intake.email})`);
    
    // Simulate a brief delay to show the loading state
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return { ok: true, message: "Application submitted successfully" };
  } catch (error) {
    console.error("Error submitting ICON application:", error);
    return { ok: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}


