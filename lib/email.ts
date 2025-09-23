import nodemailer from "nodemailer";
import { Booking } from "@/types/booking";
import { Package } from "@/types/package";

// Create transporter - you'll need to configure this with your email service
const createTransporter = () => {
  // For Gmail, you'll need an App Password
  // For other services, adjust accordingly
  return nodemailer.createTransporter({
    service: "gmail", // or your preferred email service
    auth: {
      user: process.env.EMAIL_USER, // your email
      pass: process.env.EMAIL_PASS, // your app password or email password
    },
  });
};

export interface BookingNotificationData {
  booking: Booking;
  package: Package;
  customerEmail?: string;
}

export async function sendBookingNotification(data: BookingNotificationData): Promise<void> {
  try {
    const transporter = createTransporter();
    
    // Email to you (the app manager)
    const adminEmail = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER, // fallback to your email if ADMIN_EMAIL not set
      subject: `New Booking: ${data.package.name} - ${data.booking.customer.fullName}`,
      html: generateAdminEmailHTML(data),
    };

    await transporter.sendMail(adminEmail);

    // Email to customer (optional - if you want to send confirmation)
    if (data.customerEmail) {
      const customerEmail = {
        from: process.env.EMAIL_USER,
        to: data.customerEmail,
        subject: `Booking Confirmed: ${data.package.name}`,
        html: generateCustomerEmailHTML(data),
      };

      await transporter.sendMail(customerEmail);
    }

    console.log("Booking notification emails sent successfully");
  } catch (error) {
    console.error("Error sending booking notification:", error);
    // Don't throw error to avoid breaking the booking flow
    // You might want to log this to a service like Sentry
  }
}

function generateAdminEmailHTML(data: BookingNotificationData): string {
  const { booking, package: pkg } = data;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Booking Notification</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #000; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .booking-details { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #ff3131; }
        .field { margin: 10px 0; }
        .label { font-weight: bold; color: #666; }
        .value { margin-left: 10px; }
        .pricing { background: #fff; padding: 15px; border: 1px solid #ddd; margin: 10px 0; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Booking Received</h1>
          <p>${pkg.name} Package</p>
        </div>
        
        <div class="content">
          <div class="booking-details">
            <h2>Booking Information</h2>
            <div class="field">
              <span class="label">Customer:</span>
              <span class="value">${booking.customer.fullName}</span>
            </div>
            <div class="field">
              <span class="label">Email:</span>
              <span class="value">${booking.customer.email}</span>
            </div>
            <div class="field">
              <span class="label">Phone:</span>
              <span class="value">${booking.customer.phone || 'Not provided'}</span>
            </div>
            <div class="field">
              <span class="label">Booking ID:</span>
              <span class="value">${booking.id}</span>
            </div>
            <div class="field">
              <span class="label">Status:</span>
              <span class="value">${booking.status}</span>
            </div>
            <div class="field">
              <span class="label">Created:</span>
              <span class="value">${booking.timestamps.createdAt.toLocaleDateString()}</span>
            </div>
          </div>

          <div class="booking-details">
            <h2>Package Details</h2>
            <div class="field">
              <span class="label">Package:</span>
              <span class="value">${pkg.name}</span>
            </div>
            <div class="field">
              <span class="label">Type:</span>
              <span class="value">${pkg.type}</span>
            </div>
            <div class="field">
              <span class="label">Description:</span>
              <span class="value">${pkg.description}</span>
            </div>
          </div>

          <div class="pricing">
            <h3>Pricing</h3>
            <div class="field">
              <span class="label">Base Price:</span>
              <span class="value">$${(booking.pricing.basePrice / 100).toFixed(2)} ${booking.pricing.currency}</span>
            </div>
            <div class="field">
              <span class="label">Total Price:</span>
              <span class="value">$${(booking.pricing.totalPrice / 100).toFixed(2)} ${booking.pricing.currency}</span>
            </div>
          </div>

          ${booking.details.intake ? `
          <div class="booking-details">
            <h2>Intake Details</h2>
            ${Object.entries(booking.details.intake).map(([key, value]) => `
              <div class="field">
                <span class="label">${key}:</span>
                <span class="value">${Array.isArray(value) ? value.join(', ') : value}</span>
              </div>
            `).join('')}
          </div>
          ` : ''}

          ${booking.stripe.sessionId ? `
          <div class="booking-details">
            <h2>Payment Information</h2>
            <div class="field">
              <span class="label">Stripe Session ID:</span>
              <span class="value">${booking.stripe.sessionId}</span>
            </div>
          </div>
          ` : ''}
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateCustomerEmailHTML(data: BookingNotificationData): string {
  const { booking, package: pkg } = data;
  
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Booking Confirmation</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #000; color: white; padding: 20px; text-align: center; }
        .content { padding: 20px; background: #f9f9f9; }
        .confirmation { background: white; padding: 15px; margin: 10px 0; border-left: 4px solid #ff3131; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Booking Confirmed</h1>
          <p>Thank you for choosing ${pkg.name}</p>
        </div>
        
        <div class="content">
          <div class="confirmation">
            <h2>Your booking has been confirmed!</h2>
            <p>Hi ${booking.customer.fullName},</p>
            <p>Thank you for booking the ${pkg.name} package. We're excited to work with you!</p>
            
            <h3>Next Steps:</h3>
            <ul>
              <li>We'll review your intake details</li>
              <li>You'll receive a calendar invite for your session</li>
              <li>Any additional details will be shared via email</li>
            </ul>
            
            <p>If you have any questions, please don't hesitate to reach out.</p>
            
            <p>Best regards,<br>The ICONS Team</p>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}


