# West Rose Media - Premium Editorial Site Deployment Guide

## 🚀 Zero-Downtime Domain Cutover Strategy

### Pre-Deployment Checklist

#### 1. Environment Variables Setup
Create `.env.local` with all required variables:

```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
NEXT_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef123456

# Stripe Configuration
STRIPE_SECRET_KEY=sk_live_your_stripe_secret_key
STRIPE_WEBHOOK_SECRET=whsec_your_webhook_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_your_stripe_publishable_key

# Stripe Price IDs (Create these in Stripe Dashboard)
STRIPE_PRICE_SPOTLIGHT_ONE_TIME=price_your_spotlight_price_id
STRIPE_PRICE_LITE_SUBSCRIPTION_MONTHLY_2400=price_your_lite_subscription_price_id
STRIPE_PRICE_IMMERSION_BASE_ONE_TIME=price_your_immersion_base_price_id
STRIPE_PRICE_IMMERSION_PARTICIPANT_ADDON_1000=price_your_participant_addon_price_id
STRIPE_PRICE_ICON_ONE_TIME=price_your_icon_price_id

# Calendar Integration
NEXT_PUBLIC_CAL_CALGARY=https://cal.com/your_calgary_calendar
NEXT_PUBLIC_CAL_VANCOUVER=https://cal.com/your_vancouver_calendar
NEXT_PUBLIC_CAL_TORONTO=https://cal.com/your_toronto_calendar

# App Configuration
NEXT_PUBLIC_BASE_URL=https://westrosemedia.com
```

#### 2. Stripe Products & Prices Setup
Create these products in your Stripe Dashboard:

1. **Spotlight Package**
   - One-time payment: $1,200 CAD
   - Price ID: `STRIPE_PRICE_SPOTLIGHT_ONE_TIME`

2. **WRM Lite Package**
   - Monthly subscription: $2,400 CAD
   - Price ID: `STRIPE_PRICE_LITE_SUBSCRIPTION_MONTHLY_2400`

3. **Immersion Package**
   - Base price: $6,000 CAD
   - Participant add-on: $1,000 CAD per person
   - Price IDs: `STRIPE_PRICE_IMMERSION_BASE_ONE_TIME`, `STRIPE_PRICE_IMMERSION_PARTICIPANT_ADDON_1000`

4. **ICON Package**
   - Monthly: $5,000+ CAD
   - Price ID: `STRIPE_PRICE_ICON_ONE_TIME`

#### 3. Firebase Setup
1. Enable Authentication (Email/Password)
2. Set up Firestore database
3. Configure Firebase Storage for images
4. Set up Firebase Cloud Messaging for notifications

#### 4. Sprout Studio Integration
1. Get Sprout Studio embed code or API credentials
2. Update `/app/book/page.tsx` with actual integration
3. Test booking flow end-to-end

### Deployment Steps

#### Option 1: Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy to preview
vercel

# Deploy to production
vercel --prod

# Set environment variables in Vercel dashboard
# Configure custom domain in Vercel settings
```

#### Option 2: Netlify
```bash
# Build the project
npm run build

# Deploy to Netlify
# Set environment variables in Netlify dashboard
# Configure custom domain in Netlify settings
```

#### Option 3: Self-Hosted
```bash
# Build the project
npm run build

# Start production server
npm start

# Use PM2 for process management
pm2 start npm --name "west-rose-media" -- start
```

### Domain Cutover Strategy

#### Phase 1: Staging Deployment
1. Deploy to staging subdomain (e.g., `staging.westrosemedia.com`)
2. Test all functionality thoroughly
3. Verify Stripe webhooks are working
4. Test Firebase authentication
5. Validate all forms and booking flows

#### Phase 2: DNS Preparation
1. Set TTL to 300 seconds (5 minutes) 24 hours before cutover
2. Prepare DNS records:
   ```
   A record: @ -> [your-server-ip]
   CNAME: www -> westrosemedia.com
   ```

#### Phase 3: Zero-Downtime Cutover
1. **Deploy to production** with new domain
2. **Update DNS records** to point to new server
3. **Monitor** for any issues
4. **Keep old site running** as backup for 24 hours

#### Phase 4: Post-Cutover
1. Verify all functionality works
2. Test payment processing
3. Check email notifications
4. Monitor error logs
5. Update any hardcoded URLs

### Performance Optimization

#### 1. Image Optimization
- All images are optimized with Next.js Image component
- Use WebP format when possible
- Implement lazy loading for below-the-fold images

#### 2. Font Loading
- Fonts are loaded with `display: swap` for better performance
- Preload critical fonts in `layout.tsx`

#### 3. Code Splitting
- Automatic code splitting with Next.js
- Dynamic imports for heavy components
- Lazy load non-critical components

#### 4. Caching Strategy
```javascript
// next.config.js
module.exports = {
  images: {
    domains: ['firebasestorage.googleapis.com'],
    formats: ['image/webp', 'image/avif'],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};
```

### Monitoring & Analytics

#### 1. Performance Monitoring
- Built-in performance monitor (Ctrl+Shift+P in development)
- Core Web Vitals tracking
- Real User Monitoring (RUM)

#### 2. Error Tracking
- Implement Sentry or similar for error tracking
- Monitor Stripe webhook failures
- Track Firebase authentication errors

#### 3. Analytics
- Google Analytics 4
- Track conversion funnels
- Monitor quiz completion rates

### Security Checklist

- [ ] HTTPS enabled
- [ ] Environment variables secured
- [ ] Stripe webhook signature verification
- [ ] Firebase security rules configured
- [ ] Rate limiting implemented
- [ ] CORS properly configured
- [ ] Content Security Policy (CSP) headers

### Backup Strategy

1. **Database Backup**: Daily Firestore exports
2. **Code Backup**: Git repository with tags for releases
3. **Media Backup**: Firebase Storage with versioning
4. **Configuration Backup**: Environment variables documented

### Rollback Plan

If issues occur during cutover:

1. **Immediate**: Revert DNS to old server
2. **Short-term**: Fix issues on new server
3. **Long-term**: Implement proper monitoring

### Post-Launch Tasks

1. **SEO Setup**
   - Submit sitemap to Google Search Console
   - Set up Google Analytics
   - Configure meta tags and Open Graph

2. **Performance Monitoring**
   - Set up uptime monitoring
   - Configure performance alerts
   - Monitor Core Web Vitals

3. **Content Updates**
   - Replace placeholder images with real content
   - Update video URLs to production
   - Test all external links

### Support & Maintenance

1. **Regular Updates**
   - Keep dependencies updated
   - Monitor security advisories
   - Regular performance audits

2. **Content Management**
   - Update package information
   - Manage testimonials
   - Update pricing as needed

3. **Technical Support**
   - Monitor error logs
   - Respond to user issues
   - Maintain backup systems

---

## 🎯 Success Metrics

- **Performance**: < 2s page load time
- **Uptime**: 99.9% availability
- **Conversion**: Track quiz completion and booking rates
- **User Experience**: Monitor Core Web Vitals scores

## 📞 Emergency Contacts

- **Technical Lead**: [Your contact]
- **Domain Provider**: [Provider contact]
- **Hosting Provider**: [Provider contact]
- **Stripe Support**: support@stripe.com
- **Firebase Support**: [Firebase support contact]

---

*Last updated: [Current Date]*
*Next review: [Weekly]*
