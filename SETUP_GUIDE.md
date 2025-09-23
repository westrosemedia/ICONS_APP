# West Rose Media - Setup Guide

## 🚀 Phase 1: Environment Setup (30 minutes)

### 1.1 Set up Firebase Project
1. Go to https://console.firebase.google.com
2. Create a new project called "west-rose-media"
3. Enable these services:
   - **Authentication** → Email/Password
   - **Firestore Database** → Production mode
   - **Storage** → Default settings
4. Copy your config values from Project Settings

### 1.2 Set up Stripe Account
1. Go to https://dashboard.stripe.com
2. Create these products:
   - **Spotlight**: $1,200 CAD one-time
   - **WRM Lite**: $2,400 CAD monthly subscription
   - **Immersion**: $6,000 CAD one-time
   - **ICON**: $5,000+ CAD monthly
3. Copy the price IDs for each product

### 1.3 Create Environment File
Create `.env.local` in your project root with these variables:

```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef123456

# Stripe Configuration
STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key_here
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret_here
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_stripe_publishable_key_here

# Stripe Price IDs
STRIPE_PRICE_SPOTLIGHT_ONE_TIME=price_your_spotlight_price_id_here
STRIPE_PRICE_LITE_SUBSCRIPTION_MONTHLY_2400=price_your_lite_subscription_price_id_here
STRIPE_PRICE_IMMERSION_BASE_ONE_TIME=price_your_immersion_base_price_id_here
STRIPE_PRICE_IMMERSION_PARTICIPANT_ADDON_1000=price_your_participant_addon_price_id_here
STRIPE_PRICE_ICON_ONE_TIME=price_your_icon_price_id_here

# Calendar Integration
NEXT_PUBLIC_CAL_CALGARY=https://cal.com/your_calgary_calendar
NEXT_PUBLIC_CAL_VANCOUVER=https://cal.com/your_vancouver_calendar
NEXT_PUBLIC_CAL_TORONTO=https://cal.com/your_toronto_calendar

# App Configuration
NEXT_PUBLIC_BASE_URL=https://westrosemedia.com
```

## 🧪 Phase 2: Local Testing (15 minutes)

### 2.1 Test the Build
```bash
# In your project directory
npm run build
npm start
```

### 2.2 Test Key Features
1. **Homepage**: Check design and animations
2. **Quiz**: Take the quiz and verify results
3. **Packages**: View package cards
4. **Booking**: Check booking page layout

## 🌐 Phase 3: Deployment Options

### Option A: Vercel (Recommended - Easiest)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
# Add custom domain in Vercel settings
```

### Option B: Netlify
```bash
# Build the project
npm run build

# Deploy to Netlify
# Set environment variables in Netlify dashboard
# Add custom domain in Netlify settings
```

### Option C: Self-Hosted
```bash
# Build the project
npm run build

# Start production server
npm start

# Use PM2 for process management
pm2 start npm --name "west-rose-media" -- start
```

## 🔧 Phase 4: Content Updates (1 hour)

### 4.1 Replace Placeholder Content
1. **Images**: Replace placeholder images with real photography
2. **Videos**: Update video URLs to production Firebase Storage
3. **Testimonials**: Add real client testimonials
4. **Contact Info**: Update all contact information

### 4.2 Configure Sprout Studio
1. Get Sprout Studio embed code or API credentials
2. Update `/app/book/page.tsx` with actual integration
3. Test booking flow end-to-end

## 🎯 Phase 5: Domain Setup (30 minutes)

### 5.1 DNS Configuration
```
A record: @ -> [your-server-ip]
CNAME: www -> westrosemedia.com
```

### 5.2 SSL Certificate
- Vercel/Netlify: Automatic SSL
- Self-hosted: Use Let's Encrypt or Cloudflare

## 📊 Phase 6: Monitoring Setup (15 minutes)

### 6.1 Analytics
- Google Analytics 4
- Google Search Console
- Core Web Vitals monitoring

### 6.2 Error Tracking
- Sentry or similar service
- Monitor Stripe webhook failures
- Track Firebase authentication errors

## ✅ Phase 7: Go Live Checklist

- [ ] Environment variables configured
- [ ] Firebase project set up
- [ ] Stripe products created
- [ ] Build successful
- [ ] Domain configured
- [ ] SSL certificate active
- [ ] Analytics tracking
- [ ] Error monitoring
- [ ] Content updated
- [ ] Booking system working
- [ ] Payment processing tested

## 🆘 Troubleshooting

### Build Issues
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### Environment Issues
- Check all environment variables are set
- Verify Firebase config is correct
- Ensure Stripe keys are valid

### Performance Issues
- Check image optimization
- Verify font loading
- Monitor Core Web Vitals

## 📞 Support

If you run into issues:
1. Check the console for errors
2. Verify environment variables
3. Test individual components
4. Check Firebase/Stripe dashboards

---

**Estimated Total Time: 2-3 hours**
**Difficulty: Intermediate**
**Status: Ready to deploy**
