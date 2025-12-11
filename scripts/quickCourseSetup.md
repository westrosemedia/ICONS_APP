# Quick Course Setup Guide

## Option 1: Use Firebase Console (Easiest)

### Step 1: Create Course Document

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Select your project
3. Go to **Firestore Database**
4. Click **Start collection** (if new) or go to `courses` collection
5. Click **Add document**
6. **Document ID:** `powerful-personal-brand` (or your choice)
7. Add these fields:

| Field | Type | Value |
|-------|------|-------|
| `title` | string | Powerful Personal Brand |
| `description` | string | A 16-week intensive program... |
| `totalWeeks` | number | 16 |
| `stripeProductId` | string | prod_xxxxx (from Stripe) |
| `stripePriceId` | string | price_xxxxx (from Stripe) |
| `published` | boolean | true |
| `createdAt` | timestamp | [Click to set current time] |
| `updatedAt` | timestamp | [Click to set current time] |

### Step 2: Create Week Documents

1. Go to `courseWeeks` collection
2. Click **Add document** 16 times (one for each week)
3. For each week, use this template:

**Document ID:** (auto-generate is fine)

**Fields:**
```json
{
  "courseId": "powerful-personal-brand",
  "weekNumber": 1,
  "title": "Week 1: Introduction to Personal Branding",
  "description": "Learn the fundamentals...",
  "videoUrl": "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  "videoId": "YOUR_VIDEO_ID",
  "content": "<h2>Week 1</h2><p>Your content here...</p>",
  "resources": []
}
```

**Repeat for weeks 2-16**, updating:
- `weekNumber` (1-16)
- `title`
- `description`
- `videoUrl` (your YouTube URL)
- `videoId` (extract from URL - the part after `v=`)
- `content` (your HTML content)

### Step 3: Get Your Stripe IDs

1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Products → Create product (or use existing)
3. Add pricing:
   - **One-time:** Set amount
   - **Payment plan:** Set up subscription
4. Copy the **Price ID** (starts with `price_`)
5. Add to your course document

## Option 2: Use the Setup Script

1. Make sure you have Firebase Admin credentials set up
2. Run: `npx tsx scripts/setupCourse.ts`
3. Follow the prompts
4. Edit the week templates in Firebase Console

## Quick Tips

### YouTube Video Setup
1. Upload video to YouTube
2. Set to **Unlisted** (not private)
3. Copy the URL: `https://www.youtube.com/watch?v=VIDEO_ID`
4. Extract the `VIDEO_ID` part
5. Add both to your week document

### Content Formatting
You can use HTML in the `content` field:
```html
<h2>Week Title</h2>
<p>Paragraph text</p>
<ul>
  <li>Bullet point 1</li>
  <li>Bullet point 2</li>
</ul>
<h3>Subheading</h3>
<p>More content...</p>
```

### Testing
1. Go to `/courses` on your site
2. You should see your course
3. Click "Enroll Now"
4. Complete test checkout
5. Access Week 1 content

## Need Help?

If you get stuck:
1. Check `COURSE_SETUP.md` for detailed info
2. Make sure Firestore rules allow reading courses
3. Verify Stripe webhook is configured
4. Check browser console for errors

