# Email Notification Setup

## Overview
The app now sends email notifications when someone books a package. You'll receive detailed booking information, and customers will get confirmation emails.

## Email Service Configuration

### Option 1: Gmail (Recommended for testing)
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate a password for "Mail"
3. Add these environment variables to your `.env.local`:

```bash
# Email Configuration
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
ADMIN_EMAIL=your-admin-email@gmail.com
```

### Option 2: SendGrid (Recommended for production)
1. Create a SendGrid account
2. Generate an API key
3. Update `lib/email.ts` to use SendGrid instead of Gmail:

```typescript
// Replace the createTransporter function with:
const createTransporter = () => {
  return nodemailer.createTransporter({
    host: "smtp.sendgrid.net",
    port: 587,
    auth: {
      user: "apikey",
      pass: process.env.SENDGRID_API_KEY,
    },
  });
};
```

4. Add to your `.env.local`:
```bash
SENDGRID_API_KEY=your-sendgrid-api-key
EMAIL_USER=your-verified-sender@yourdomain.com
ADMIN_EMAIL=your-admin-email@yourdomain.com
```

### Option 3: Other SMTP Services
You can use any SMTP service by updating the `createTransporter` function in `lib/email.ts`.

## Environment Variables Required

Add these to your `.env.local` file:

```bash
# Email Configuration
EMAIL_USER=your-email@domain.com
EMAIL_PASS=your-email-password-or-app-password
ADMIN_EMAIL=your-admin-email@domain.com

# Existing Stripe and Firebase config...
STRIPE_SECRET_KEY=sk_...
STRIPE_WEBHOOK_SECRET=whsec_...
# ... other existing variables
```

## How It Works

1. **Customer books a package** → Draft booking created in Firestore
2. **Customer completes payment** → Stripe webhook triggered
3. **Webhook processes payment** → Booking status updated to "confirmed"
4. **Email notifications sent**:
   - **Admin email**: Detailed booking information with customer details, package info, pricing, and intake data
   - **Customer email**: Confirmation message with next steps

## Email Templates

### Admin Notification Email Includes:
- Customer contact information
- Package details and pricing
- Complete intake form data
- Stripe payment information
- Booking ID and timestamps

### Customer Confirmation Email Includes:
- Booking confirmation message
- Next steps in the process
- Contact information for questions

## Testing

1. Set up your email configuration
2. Make a test booking through the app
3. Complete the payment process
4. Check your email for the notification
5. Verify the customer receives their confirmation

## Troubleshooting

- **No emails received**: Check your email configuration and app logs
- **Gmail issues**: Make sure you're using an App Password, not your regular password
- **SendGrid issues**: Verify your sender email is authenticated in SendGrid
- **Webhook issues**: Check that your Stripe webhook endpoint is correctly configured

## Security Notes

- Never commit email passwords to version control
- Use App Passwords for Gmail instead of your main password
- Consider using environment-specific email services for production
- Monitor email sending limits and quotas

## Customization

You can customize the email templates by editing the HTML in `lib/email.ts`:
- `generateAdminEmailHTML()` - Admin notification template
- `generateCustomerEmailHTML()` - Customer confirmation template

The templates use inline CSS for maximum email client compatibility.


