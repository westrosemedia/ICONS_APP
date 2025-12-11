# Course Setup Guide

This guide will help you set up your 16-week course in Firebase.

## Step 1: Create Course in Firestore

Go to Firebase Console → Firestore Database and create a new document in the `courses` collection:

**Document ID:** (auto-generated or custom like `powerful-personal-brand`)

**Fields:**
```json
{
  "title": "Powerful Personal Brand",
  "description": "A 16-week intensive program to transform your brand and visibility",
  "totalWeeks": 16,
  "stripeProductId": "prod_xxxxx", // Your Stripe product ID
  "stripePriceId": "price_xxxxx", // Your Stripe price ID (one-time or payment plan)
  "published": true,
  "createdAt": [Firestore Timestamp],
  "updatedAt": [Firestore Timestamp]
}
```

## Step 2: Create Course Weeks

Create documents in the `courseWeeks` collection. You'll need 16 documents (one per week).

**Collection:** `courseWeeks`

**Document Structure (repeat for weeks 1-16):**

```json
{
  "courseId": "powerful-personal-brand", // Match your course ID
  "weekNumber": 1, // 1-16
  "title": "Week 1: Introduction to Personal Branding",
  "description": "Learn the fundamentals of personal branding",
  "videoUrl": "https://www.youtube.com/watch?v=YOUR_VIDEO_ID",
  "videoId": "YOUR_VIDEO_ID", // Extract from YouTube URL
  "content": "<p>Your HTML content for this week goes here...</p>",
  "resources": [] // Optional array of resources
}
```

**For each week:**
1. Upload your video to YouTube (unlisted is recommended)
2. Copy the YouTube URL
3. Extract the video ID (the part after `v=` in the URL)
4. Write your content in HTML format
5. Create the Firestore document

## Step 3: Set Up Stripe Product

1. Go to Stripe Dashboard → Products
2. Create a new product for your course
3. Add pricing:
   - **One-time payment:** Set a one-time price
   - **Payment plan:** Set up a subscription with payment plan
4. Copy the Price ID (starts with `price_`)
5. Add it to your course document in Firestore

## Step 4: Test Enrollment Flow

1. Go to `/courses` on your site
2. Click on your course
3. Click "Enroll Now"
4. Complete test checkout
5. Verify enrollment in Firestore (`courseEnrollments` collection)
6. Access course content

## Step 5: Content Formatting Tips

### Video URLs
- Use full YouTube URLs: `https://www.youtube.com/watch?v=VIDEO_ID`
- Or use short URLs: `https://youtu.be/VIDEO_ID`
- The system will extract the video ID automatically

### Content HTML
You can use HTML in the `content` field:
```html
<h2>Week 1 Overview</h2>
<p>This week we'll cover...</p>
<ul>
  <li>Topic 1</li>
  <li>Topic 2</li>
</ul>
```

### Resources (Optional)
```json
"resources": [
  {
    "id": "resource1",
    "title": "Week 1 Workbook",
    "url": "https://firebasestorage.googleapis.com/...",
    "type": "pdf"
  }
]
```

## Firestore Collections Structure

### `courses`
- Course metadata
- Stripe integration info

### `courseWeeks`
- Individual week content
- Linked to course via `courseId`

### `courseEnrollments`
- User enrollments (created automatically)
- Payment status
- Progress tracking

### `courseProgress`
- User progress per course
- Current week
- Completed weeks array

## Security Rules

Make sure your Firestore rules allow:
- Read access to published courses for all users
- Write access to enrollments/progress only for authenticated users
- Read access to user's own enrollment/progress

Example rules:
```javascript
match /courses/{courseId} {
  allow read: if resource.data.published == true;
  allow write: if request.auth != null && request.auth.token.admin == true;
}

match /courseEnrollments/{enrollmentId} {
  allow read: if request.auth != null && resource.data.userId == request.auth.uid;
  allow create: if request.auth != null && request.resource.data.userId == request.auth.uid;
}

match /courseProgress/{progressId} {
  allow read, write: if request.auth != null && resource.data.userId == request.auth.uid;
}
```

## Troubleshooting

**Enrollment not working:**
- Check Stripe webhook is configured
- Verify webhook secret in environment variables
- Check Firestore rules allow enrollment creation

**Weeks not unlocking:**
- Verify `completedWeeks` array is updating
- Check sequential unlocking logic
- Ensure week numbers are correct (1-16)

**Video not playing:**
- Verify YouTube URL format
- Check video is public or unlisted (not private)
- Ensure video ID extraction is working

