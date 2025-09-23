# Firestore Seed Scripts

This directory contains scripts to populate your Firestore database with initial data.

## seedPackages.ts

Populates the `packages` collection with the four main package types for the booking system.

### What it creates:

1. **Spotlight Package** - One-time payment with city-specific availability
2. **WRM Lite Package** - Monthly subscription at 2400 CAD
3. **Immersion Package** - Event coverage with participant add-ons
4. **ICON Package** - Premium package with ICON Society membership

### How to run:

```bash
# Make sure you have your .env.local file set up with Firebase credentials
npm run seed
```

### Prerequisites:

1. **Environment variables** must be set in `.env.local`:
   ```bash
   NEXT_PUBLIC_FIREBASE_API_KEY=your_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
   
   # Calendar URLs (optional but recommended)
   NEXT_PUBLIC_CAL_CALGARY=https://cal.com/embed/calgary
   NEXT_PUBLIC_CAL_VANCOUVER=https://cal.com/embed/vancouver
   NEXT_PUBLIC_CAL_TORONTO=https://cal.com/embed/toronto
   ```

2. **Firebase project** must be initialized and accessible

### What happens:

- Creates 4 package documents in Firestore
- Sets base prices (0 for packages that need Stripe price IDs)
- Configures city calendars for Spotlight package
- Sets up participant pricing for Immersion package
- Marks all packages as active

### After running:

1. **Set real prices** in Stripe dashboard
2. **Update basePrice** fields in Firestore with actual Stripe price IDs
3. **Test the booking flow** at `/packages`

### Manual alternative:

If you prefer not to run the script, you can manually create these documents in your Firestore console using the same structure.
