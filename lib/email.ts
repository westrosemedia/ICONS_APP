import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Add contact to Resend audience
export async function addContactToList(email: string, firstName?: string, lastName?: string, source?: string) {
  try {
    const { data, error } = await resend.contacts.create({
      email: email,
      firstName: firstName || '',
      lastName: lastName || '',
      audienceId: process.env.RESEND_AUDIENCE_ID || 'default', // You'll need to create an audience in Resend
      unsubscribed: false,
    });

    if (error) {
      console.error('Resend contact creation error:', error);
      return { success: false, error: error.message };
    }

    console.log('Contact added to Resend list:', data);
    return { success: true, data };
  } catch (error) {
    console.error('Error adding contact to Resend list:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

export async function sendIconApplicationEmail(applicationData: {
  fullName: string;
  email: string;
  businessUrl: string;
  currentRevenue: string;
  goalRevenue: string;
  bottleneck: string;
  teamOrSolo: string;
  whyNow: string;
  notes?: string;
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'ICONS App <noreply@westrosemedia.com>',
      to: ['stephanie@westrosemedia.com'],
      subject: `New ICON Brand Partnership Application - ${applicationData.fullName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px;">
            New ICON Brand Partnership Application
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #000; margin-top: 0;">Contact Information</h3>
            <p><strong>Name:</strong> ${applicationData.fullName}</p>
            <p><strong>Email:</strong> ${applicationData.email}</p>
            <p><strong>Business URL:</strong> ${applicationData.businessUrl || 'Not provided'}</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #000; margin-top: 0;">Business Details</h3>
            <p><strong>Current Monthly Revenue:</strong> ${applicationData.currentRevenue || 'Not provided'}</p>
            <p><strong>Goal Monthly Revenue:</strong> ${applicationData.goalRevenue || 'Not provided'}</p>
            <p><strong>Team or Solo:</strong> ${applicationData.teamOrSolo || 'Not provided'}</p>
          </div>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #000; margin-top: 0;">Application Details</h3>
            <p><strong>Biggest Content Bottleneck:</strong></p>
            <p style="background: white; padding: 10px; border-radius: 4px; margin: 10px 0;">
              ${applicationData.bottleneck || 'Not provided'}
            </p>
            
            <p><strong>Why This Now:</strong></p>
            <p style="background: white; padding: 10px; border-radius: 4px; margin: 10px 0;">
              ${applicationData.whyNow || 'Not provided'}
            </p>
            
            ${applicationData.notes ? `
              <p><strong>Additional Notes:</strong></p>
              <p style="background: white; padding: 10px; border-radius: 4px; margin: 10px 0;">
                ${applicationData.notes}
              </p>
            ` : ''}
          </div>
          
          <div style="background: #000; color: white; padding: 15px; border-radius: 8px; margin: 20px 0; text-align: center;">
            <p style="margin: 0; font-weight: bold;">ICON Brand Partnership Application</p>
            <p style="margin: 5px 0 0 0; font-size: 14px;">Submitted: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: error.message };
    }

    console.log('ICON application email sent successfully via Resend:', data);
    return { success: true };
  } catch (error) {
    console.error('Error sending ICON application email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}

// Generic email sending function
export async function sendEmail({
  to,
  subject,
  text,
  html
}: {
  to: string | string[];
  subject: string;
  text?: string;
  html?: string;
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'ICONS App <noreply@westrosemedia.com>',
      to: Array.isArray(to) ? to : [to],
      subject,
      text,
      html
    });

    if (error) {
      console.error('Resend error:', error);
      return { success: false, error: error.message };
    }

    console.log('Email sent successfully via Resend:', data);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}