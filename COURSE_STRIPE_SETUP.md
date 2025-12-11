# Course Stripe Setup - Using Same PPB Pricing

Since you're using the same Stripe pricing table as PPB, here's the easiest setup:

## Option 1: Use Pricing Table Directly (Easiest - Already Done!)

The course page now uses the same Stripe pricing table as PPB. When someone enrolls through the pricing table, the webhook will automatically:
1. Detect it's a course payment
2. Create the enrollment
3. Give them access

**You just need to:**
1. Create your course in Firestore (see COURSE_SETUP.md)
2. The pricing table is already embedded on the course page
3. Make sure your course document has the Stripe price IDs (optional - pricing table handles it)

## Option 2: Get Price IDs from Stripe

If you want to use direct checkout (instead of pricing table):

1. Go to Stripe Dashboard → Products
2. Find your PPB product
3. Copy the Price IDs:
   - One-time payment: `price_xxxxx`
   - Payment plan: `price_yyyyy`
4. Add to your course document in Firestore:
   ```json
   {
     "stripePriceId": "price_xxxxx", // For one-time
     // OR for payment plan, you can add both
   }
   ```

## How It Works

The webhook automatically detects course enrollments by:
1. Checking if the payment matches any course's Stripe price ID
2. Creating enrollment automatically
3. Linking to user account via email

## Testing

1. Go to `/courses` → Your course
2. Scroll to pricing section
3. Complete test checkout
4. Check Firestore `courseEnrollments` collection
5. Access course content

## Important Notes

- The pricing table handles both one-time and payment plans
- Users will be enrolled automatically after payment
- Make sure your Stripe webhook is configured correctly
- The webhook needs to match payments to users (by email)

