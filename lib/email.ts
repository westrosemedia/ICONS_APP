import nodemailer from 'nodemailer';

// Email configuration
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

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
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || 'stephanie@westrosemedia.com',
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
    };

    await transporter.sendMail(mailOptions);
    console.log('ICON application email sent successfully');
    return { success: true };
  } catch (error) {
    console.error('Error sending ICON application email:', error);
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
  }
}