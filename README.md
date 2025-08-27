# ICONS_APP

A full-stack Next.js 14 application for branding clients and admins to manage content, contracts, payments, and voice notes.

## Branding & UI
- Brand fonts: Inter, Montserrat (see `tailwind.config.ts` and `globals.css`)
- Brand colors: Blue (primary), Orange (secondary), Green (accent)
- Responsive, accessible UI with TailwindCSS
- Custom favicon and meta tags in `app/layout.tsx`
- Placeholder logo in layout header

## Tech Stack
- Next.js 14 (App Router, TypeScript)
- TailwindCSS
- Firebase v9 (modular)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   - Copy `.env.local` and fill in your Firebase and Stripe project values. All keys must start with `NEXT_PUBLIC_` for Next.js compatibility.

   ```env
   NEXT_PUBLIC_FIREBASE_API_KEY=xxxx
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=xxxx
NEXT_PUBLIC_FIREBASE_PROJECT_ID=xxxx
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=xxxx
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=xxxx
NEXT_PUBLIC_FIREBASE_APP_ID=xxxx
STRIPE_SECRET_KEY=xxxx
NEXT_PUBLIC_BASE_URL=http://localhost:3004
   ```

3. **Run the development server:**
   ```bash
   
  npm run dev
   ```

## Firebase Setup
- Create a Firebase project and enable Auth, Firestore, and Storage.
- Add your web app and copy the config to `.env.local`.
- Set up Firestore rules for security.

## Stripe Setup
- Create a Stripe account and get your secret key.
- Add `STRIPE_SECRET_KEY` to `.env.local`.
- (Optional) Set up Stripe webhooks for payment confirmation.

## Deployment (Vercel)
- Push your code to GitHub.
- Import the repo in [Vercel](https://vercel.com/).
- Set all environment variables in Vercel dashboard.
- Deploy!

## SEO & Robots
- Add your sitemap and robots.txt in `/public`:
  - `/public/robots.txt` (placeholder)
  - `/public/sitemap.xml` (placeholder)

## Accessibility & Polish
- All forms and buttons are accessible and labeled.
- Auth checks on all protected routes.
- Error boundaries in layout/components.
- Loading and error states on all forms.
- Lazy-load large images/videos where possible.

## Final Checklist
- [x] Brand fonts/colors in Tailwind
- [x] Favicon, meta tags, app title
- [x] Responsive, accessible UI
- [x] Firebase env vars via `.env.local`
- [x] Stripe integration via env vars
- [x] Error boundaries and loading states
- [x] Ready for Vercel deployment

## Firebase Integration
- Uses the [modular v9 SDK](https://firebase.google.com/docs/web/modular-upgrade).
- All config values are loaded from `.env.local`.
- Exports `app`, `auth`, `db`, and `storage` from `lib/firebase.ts`.

## TailwindCSS
- Configured in `tailwind.config.ts`.
- Primary color is set to Tailwind's default blue (`blue.500`).

## Project Structure
```
app/
  page.tsx
  layout.tsx
  globals.css
lib/
  firebase.ts
components/
  (UI components)
.env.local
```

---

**No demo/blog content included. This app is for client management, voice notes, contracts, payments, and admin tools only.** 