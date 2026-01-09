# Complete Course Setup Guide

This guide covers all methods for setting up courses in your app.

## 🎯 Quick Start - Choose Your Method

### Method 1: Admin Interface (Recommended - Easiest)
**Best for:** Creating courses directly in the browser

1. Go to `/admin/courses` on your site
2. Click **"+ Create New Course"**
3. Fill in the form:
   - **Course ID**: URL-friendly ID (e.g., `powerful-personal-brand`)
   - **Title**: Course name
   - **Description**: Course description
   - **Total Weeks**: Number of weeks (default: 16)
   - **Stripe IDs**: Optional - leave empty to use pricing table
   - **Published**: Check to make it visible
4. Click **"Create Course"**
5. Select the course to manage weeks
6. Click **"Create All 16 Weeks"** to generate week templates
7. Click on each week to edit content

### Method 2: Setup Script
**Best for:** Command-line setup with prompts

1. Make sure you have Firebase Admin credentials in `.env.local`:
   ```
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   FIREBASE_CLIENT_EMAIL=your-service-account-email
   FIREBASE_PRIVATE_KEY=your-private-key
   ```

2. Run the setup script:
   ```bash
   npx tsx scripts/setupCourse.ts
   ```

3. Follow the prompts to:
   - Enter course details
   - Add Stripe IDs
   - Create week templates

### Method 3: Firebase Console (Manual)
**Best for:** Full control over data structure

See detailed steps in `COURSE_SETUP.md`

---

## 📋 Course Setup Checklist

### Step 1: Create Course Document
- [ ] Course ID (URL-friendly, no spaces)
- [ ] Title
- [ ] Description
- [ ] Total weeks (usually 16)
- [ ] Stripe Product ID (optional)
- [ ] Stripe Price ID (optional - leave empty for pricing table)
- [ ] Published status

### Step 2: Create Week Templates
- [ ] Create all week documents (1-16 or your total)
- [ ] Each week needs:
  - `courseId` (matches course ID)
  - `weekNumber` (1, 2, 3, etc.)
  - `title`
  - `description`
  - `videoUrl` (YouTube URL)
  - `videoId` (auto-extracted from URL)
  - `content` (HTML content)
  - `resources` (optional array)

### Step 3: Add Content to Weeks
- [ ] Upload videos to YouTube (unlisted recommended)
- [ ] Add YouTube URLs to each week
- [ ] Write HTML content for each week
- [ ] Add resources (PDFs, links, etc.) if needed

### Step 4: Configure Stripe (if not using pricing table)
- [ ] Create product in Stripe Dashboard
- [ ] Set up pricing (one-time or payment plan)
- [ ] Copy Price ID
- [ ] Add to course document

### Step 5: Test Enrollment
- [ ] Visit `/courses` page
- [ ] Click on your course
- [ ] Test enrollment flow
- [ ] Verify enrollment in Firestore
- [ ] Test week access and completion

---

## 🎬 Detailed Steps

### Creating a Course via Admin Interface

1. **Navigate to Admin**
   - Go to `/admin/courses`
   - Must be logged in

2. **Create Course**
   - Click **"+ Create New Course"**
   - Fill required fields:
     ```
     Course ID: powerful-personal-brand
     Title: Powerful Personal Brand
     Description: A 16-week intensive program...
     Total Weeks: 16
     Stripe Price ID: (optional - leave empty for pricing table)
     Published: ✓
     ```
   - Click **"Create Course"**

3. **Create Week Templates**
   - Select your course from the list
   - Click **"Create All 16 Weeks"**
   - Confirm the action
   - Week templates are created automatically

4. **Edit Week Content**
   - Click on any week to edit
   - Fill in:
     - **Title**: Week 1: Introduction to Personal Branding
     - **Description**: Brief overview of the week
     - **YouTube Video URL**: Paste your video URL
     - **Content**: HTML content (see formatting tips below)
   - Click **"Save Changes"**

### Using the Setup Script

1. **Prepare Environment**
   ```bash
   # Make sure these are in .env.local
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
   FIREBASE_CLIENT_EMAIL=your-service-account-email
   FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
   ```

2. **Run Script**
   ```bash
   npx tsx scripts/setupCourse.ts
   ```

3. **Follow Prompts**
   ```
   Course ID: powerful-personal-brand
   Course Title: Powerful Personal Brand
   Course Description: A 16-week intensive program...
   Stripe Product ID: prod_xxxxx
   Stripe Price ID: price_xxxxx
   Do you want to set up week templates now? (y/n): y
   ```

4. **Edit Weeks**
   - Go to Firebase Console → Firestore
   - Open `courseWeeks` collection
   - Edit each week with your content

---

## 📝 Content Formatting Tips

### HTML Content Examples

**Basic Structure:**
```html
<h2>Week 1 Overview</h2>
<p>This week we'll cover the fundamentals of personal branding.</p>

<h3>What You'll Learn</h3>
<ul>
  <li>Understanding your unique value</li>
  <li>Defining your brand message</li>
  <li>Creating your brand story</li>
</ul>

<h3>Action Items</h3>
<ol>
  <li>Complete the brand assessment</li>
  <li>Write your brand story draft</li>
  <li>Share in the community forum</li>
</ol>
```

**With Styling:**
```html
<div class="bg-blue-50 p-4 rounded-lg mb-4">
  <h3>💡 Pro Tip</h3>
  <p>Take your time with this exercise - it's the foundation of everything else.</p>
</div>
```

### YouTube Video URLs

**Supported Formats:**
- Full URL: `https://www.youtube.com/watch?v=VIDEO_ID`
- Short URL: `https://youtu.be/VIDEO_ID`
- Embed URL: `https://www.youtube.com/embed/VIDEO_ID`

**Video ID Extraction:**
- The system automatically extracts the video ID
- You'll see confirmation: "Video ID detected: xxxxx"

### Resources

**Adding Resources:**
```json
"resources": [
  {
    "id": "resource1",
    "title": "Week 1 Workbook",
    "url": "https://firebasestorage.googleapis.com/...",
    "type": "pdf"
  },
  {
    "id": "resource2",
    "title": "Additional Reading",
    "url": "https://example.com/article",
    "type": "link"
  }
]
```

---

## 🔧 Stripe Setup

### Option 1: Use Pricing Table (Easiest)
- Leave `stripePriceId` empty in course document
- Pricing table handles both one-time and payment plans
- Webhook automatically detects course payments

### Option 2: Direct Checkout
1. Create product in Stripe Dashboard
2. Add pricing (one-time or subscription)
3. Copy Price ID (starts with `price_`)
4. Add to course document's `stripePriceId` field

### Getting Stripe IDs

1. **Go to Stripe Dashboard**
   - Products → Create product (or use existing)

2. **Set Up Pricing**
   - **One-time**: Set amount, copy Price ID
   - **Payment Plan**: Set up subscription, copy Price ID

3. **Add to Course**
   - Update course document in Firestore
   - Or edit via admin interface

---

## 🗂️ Firestore Structure

### Collections Overview

**`courses`**
- Course metadata
- Stripe integration
- Published status

**`courseWeeks`**
- Individual week content
- Linked via `courseId`
- Sequential week numbers

**`courseEnrollments`** (auto-created)
- User enrollments
- Payment status
- Progress tracking

**`courseProgress`** (auto-created)
- User progress per course
- Current week
- Completed weeks

### Example Course Document

```json
{
  "title": "Powerful Personal Brand",
  "description": "A 16-week intensive program...",
  "totalWeeks": 16,
  "stripeProductId": "prod_xxxxx",
  "stripePriceId": "price_xxxxx",
  "published": true,
  "createdAt": "2024-01-01T00:00:00Z",
  "updatedAt": "2024-01-01T00:00:00Z"
}
```

### Example Week Document

```json
{
  "courseId": "powerful-personal-brand",
  "weekNumber": 1,
  "title": "Week 1: Introduction to Personal Branding",
  "description": "Learn the fundamentals...",
  "videoUrl": "https://www.youtube.com/watch?v=VIDEO_ID",
  "videoId": "VIDEO_ID",
  "content": "<h2>Week 1</h2><p>Content here...</p>",
  "resources": []
}
```

---

## ✅ Testing Checklist

After setting up your course:

- [ ] Course appears on `/courses` page
- [ ] Course detail page loads correctly
- [ ] Pricing section displays (or pricing table)
- [ ] Enrollment flow works
- [ ] Webhook creates enrollment
- [ ] User can access Week 1
- [ ] Week completion works
- [ ] Next week unlocks after completion
- [ ] Progress tracking works
- [ ] Videos play correctly
- [ ] Content displays properly

---

## 🐛 Troubleshooting

### Course Not Showing
- Check `published` is `true`
- Verify course document exists in Firestore
- Check browser console for errors

### Enrollment Not Working
- Verify Stripe webhook is configured
- Check webhook secret in environment variables
- Verify user email matches Firebase Auth email
- Check Firestore security rules

### Weeks Not Unlocking
- Verify `completedWeeks` array is updating
- Check sequential unlocking logic
- Ensure week numbers are correct (1-16)
- Check enrollment exists and payment status is 'completed'

### Video Not Playing
- Verify YouTube URL format
- Check video is public or unlisted (not private)
- Ensure video ID extraction worked
- Check video embed permissions

### Content Not Displaying
- Verify HTML is valid
- Check for unclosed tags
- Test HTML in a simple HTML file first
- Check browser console for errors

---

## 📚 Additional Resources

- **Admin Interface**: `/admin/courses`
- **Course Listing**: `/courses`
- **Setup Script**: `scripts/setupCourse.ts`
- **Detailed Guide**: `COURSE_SETUP.md`
- **Stripe Setup**: `COURSE_STRIPE_SETUP.md`

---

## 💡 Pro Tips

1. **Start with Templates**: Use "Create All Weeks" to generate templates, then fill in content
2. **Test Early**: Create a test course and enroll yourself to verify everything works
3. **Use Unlisted Videos**: Upload YouTube videos as unlisted for better control
4. **HTML Validation**: Test your HTML content in a simple HTML file before adding
5. **Backup Content**: Keep your content in a separate document before adding to Firestore
6. **Progressive Publishing**: Set `published: false` while building, then publish when ready

---

Need help? Check the troubleshooting section or review the code in:
- `app/admin/courses/page.tsx` - Admin interface
- `lib/courseService.ts` - Course service logic
- `app/courses/[courseId]/page.tsx` - Course display page
