# Setting Up Courses on westrosemedia.com

## 🎯 Quick Start - Access Admin Interface

### Step 1: Access the Admin Page
1. Go to **https://westrosemedia.com/admin/courses**
2. **Log in** with your Firebase Auth account (must be authenticated)
3. You'll see the Course Admin dashboard

### Step 2: Create Your First Course
1. Click **"+ Create New Course"** button
2. Fill in the form:
   - **Course ID**: `powerful-personal-brand` (URL-friendly, no spaces)
   - **Title**: Powerful Personal Brand
   - **Description**: Your course description
   - **Total Weeks**: 16 (or your number)
   - **Stripe Product ID**: (optional - leave empty)
   - **Stripe Price ID**: (optional - leave empty to use pricing table)
   - **Published**: ✓ Check this to make it visible
3. Click **"Create Course"**

### Step 3: Create Week Templates
1. **Select your course** from the list (click on it)
2. Click **"Create All 16 Weeks"** button
3. Confirm the action
4. Week templates are created automatically

### Step 4: Edit Week Content
1. **Click on any week** in the list to edit it
2. Fill in:
   - **Title**: Week 1: Introduction to Personal Branding
   - **Description**: Brief overview
   - **YouTube Video URL**: Paste your video URL
   - **Content**: HTML content (see formatting tips below)
3. Click **"Save Changes"**
4. Repeat for all weeks

---

## 📝 Content Formatting Guide

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
  <p>Take your time with this exercise - it's the foundation.</p>
</div>
```

### YouTube Video URLs

**Supported Formats:**
- Full URL: `https://www.youtube.com/watch?v=VIDEO_ID`
- Short URL: `https://youtu.be/VIDEO_ID`

**Note:** The video ID is automatically extracted when you paste the URL.

---

## 🔧 Stripe Setup (Optional)

### Option 1: Use Pricing Table (Recommended)
- **Leave `stripePriceId` empty** in the course form
- The pricing table on the course page handles payments
- Webhook automatically detects course payments and creates enrollments

### Option 2: Direct Checkout
1. Go to [Stripe Dashboard](https://dashboard.stripe.com)
2. Create a product for your course
3. Add pricing (one-time or subscription)
4. Copy the **Price ID** (starts with `price_`)
5. Add it to the course's `stripePriceId` field in the admin interface

---

## ✅ Testing Your Course

After setting up your course:

1. **Visit the course page:**
   - Go to `https://westrosemedia.com/courses`
   - Click on your course

2. **Test enrollment:**
   - Click "Enroll Now" or use the pricing table
   - Complete a test payment
   - Verify enrollment was created

3. **Test course access:**
   - Log in with your test account
   - Access Week 1
   - Complete a week
   - Verify next week unlocks

---

## 🐛 Troubleshooting

### Can't Access Admin Page
- **Make sure you're logged in** - The page requires authentication
- Check that you're visiting: `https://westrosemedia.com/admin/courses`
- Clear browser cache if needed

### Course Not Showing on /courses Page
- Check that `published` is set to `true` in the course
- Verify the course document exists in Firestore
- Check browser console for errors

### Enrollment Not Working
- Verify Stripe webhook is configured in Vercel environment variables
- Check webhook secret is set: `STRIPE_WEBHOOK_SECRET`
- Verify user email matches Firebase Auth email
- Check Firestore security rules allow enrollment creation

### Weeks Not Unlocking
- Verify `completedWeeks` array is updating in Firestore
- Check sequential unlocking logic
- Ensure week numbers are correct (1-16)
- Verify enrollment exists and payment status is 'completed'

---

## 🔐 Security Notes

- **Admin access**: Only authenticated users can access `/admin/courses`
- **Firestore rules**: Make sure your Firestore rules allow:
  - Read access to published courses for all users
  - Write access to courses only for admins
  - Read/write access to enrollments for authenticated users

### Example Firestore Rules:
```javascript
match /courses/{courseId} {
  allow read: if resource.data.published == true;
  allow write: if request.auth != null; // Add admin check if needed
}

match /courseEnrollments/{enrollmentId} {
  allow read: if request.auth != null && resource.data.userId == request.auth.uid;
  allow create: if request.auth != null && request.resource.data.userId == request.auth.uid;
}
```

---

## 📚 Additional Resources

- **Admin Interface**: `https://westrosemedia.com/admin/courses`
- **Course Listing**: `https://westrosemedia.com/courses`
- **Detailed Setup Guide**: See `COURSE_SETUP_GUIDE.md`
- **Stripe Setup**: See `COURSE_STRIPE_SETUP.md`

---

## 💡 Pro Tips

1. **Start with Templates**: Use "Create All Weeks" to generate templates, then fill in content
2. **Test Early**: Create a test course and enroll yourself to verify everything works
3. **Use Unlisted Videos**: Upload YouTube videos as unlisted for better control
4. **HTML Validation**: Test your HTML content in a simple HTML file before adding
5. **Progressive Publishing**: Set `published: false` while building, then publish when ready
6. **Backup Content**: Keep your content in a separate document before adding to Firestore

---

## 🚀 Quick Checklist

- [ ] Access `/admin/courses` page
- [ ] Create course with all required fields
- [ ] Generate week templates
- [ ] Add YouTube video URLs to each week
- [ ] Write HTML content for each week
- [ ] Set course to published
- [ ] Test enrollment flow
- [ ] Verify week access and completion
- [ ] Test progress tracking

---

**Ready to set up your course!** 🎓

If you run into any issues, check the troubleshooting section or verify your Firestore security rules are configured correctly.
