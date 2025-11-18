# Analytics & Heat Map Setup Guide

This guide will help you set up Microsoft Clarity for heat maps, session recordings, and user behavior tracking on your site.

## What You'll Get

✅ **Heat Maps** - See where users click, scroll, and move their mouse  
✅ **Session Recordings** - Watch real user sessions to understand behavior  
✅ **Scroll Depth Tracking** - See how far users scroll before leaving  
✅ **Exit Intent Tracking** - Know when users are about to leave  
✅ **Conversion Tracking** - Track button clicks and Stripe interactions  
✅ **Time on Page** - See how long users spend on each page  

## Setup Steps

### 1. Create a Microsoft Clarity Account

1. Go to [https://clarity.microsoft.com/](https://clarity.microsoft.com/)
2. Sign in with your Microsoft account (or create one)
3. Click "Add new project"
4. Enter your website URL: `https://westrosemedia.com`
5. Name your project: "West Rose Media"
6. Copy your **Project ID** (looks like: `abc123xyz`)

### 2. Add Your Clarity Project ID

Add this to your `.env.local` file:

```bash
NEXT_PUBLIC_CLARITY_ID=your-project-id-here
```

**Important:** Replace `your-project-id-here` with your actual Clarity Project ID.

### 3. Deploy Your Changes

The analytics components are already added to your site. Once you add the environment variable and deploy, Clarity will start tracking:

- Heat maps showing where users click and scroll
- Session recordings of user interactions
- Scroll depth (25%, 50%, 75%, 90%, 100%)
- Exit intent (when mouse leaves the page)
- Button clicks (especially "Enroll Now" buttons)
- Stripe pricing table interactions
- Time spent on each page

## What Gets Tracked

### Automatic Tracking

- **Scroll Depth**: Tracks when users reach 25%, 50%, 75%, 90%, and 100% scroll depth
- **Exit Intent**: Detects when users move their mouse to leave the page
- **Time on Page**: Records how long users spend on each page
- **Button Clicks**: Tracks clicks on "Enroll Now" buttons
- **Investment Section**: Tracks when users scroll to the investment/pricing section
- **Stripe Interactions**: Tracks clicks on the Stripe pricing table

### Custom Events

All events are tagged with the page path, so you can see:
- Which pages have the highest engagement
- Where users drop off
- What percentage reach the investment section
- How many click the enroll buttons

## Viewing Your Data

1. Go to [https://clarity.microsoft.com/](https://clarity.microsoft.com/)
2. Select your project
3. Navigate to:
   - **Heatmaps** - See click maps, scroll maps, and interaction maps
   - **Recordings** - Watch individual user sessions
   - **Insights** - View aggregated data and trends
   - **Dashboard** - See overview metrics

## Privacy & GDPR Compliance

Microsoft Clarity is GDPR compliant and respects user privacy. It:
- Anonymizes IP addresses
- Allows users to opt out
- Doesn't collect personal information
- Complies with privacy regulations

## Troubleshooting

### Not seeing data?

1. **Check your Project ID**: Make sure `NEXT_PUBLIC_CLARITY_ID` is set correctly in `.env.local`
2. **Wait a few minutes**: It can take 5-10 minutes for data to appear
3. **Check browser console**: Look for any errors related to Clarity
4. **Verify deployment**: Make sure your changes are deployed to production

### Want to test locally?

1. Add `NEXT_PUBLIC_CLARITY_ID` to your `.env.local` file
2. Restart your dev server
3. Visit your local site and interact with it
4. Check Clarity dashboard after a few minutes

## Additional Analytics

You also have:
- **Vercel Analytics** - Already set up for page views and performance
- **Vercel Speed Insights** - Tracks Core Web Vitals

All analytics work together to give you a complete picture of user behavior!

