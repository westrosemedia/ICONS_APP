# ICONS App - Deployment Guide

## 🚀 Production Deployment

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Firebase project configured
- Domain name (optional but recommended)

### 1. Environment Setup

Create `.env.production` file:
```bash
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
NEXT_PUBLIC_FIREBASE_VAPID_KEY=your_vapid_key

# Stripe Configuration
STRIPE_SECRET_KEY=your_stripe_secret_key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_publishable_key

# App Configuration
NEXT_PUBLIC_APP_URL=https://your-domain.com
NEXT_PUBLIC_APP_NAME=ICONS by West Rose Media
```

### 2. Build and Test

```bash
# Install dependencies
npm install

# Run tests
npm test

# Build for production
npm run build

# Test production build locally
npm start
```

### 3. Deployment Options

#### Option A: Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

#### Option B: Netlify
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Set environment variables in Netlify dashboard

#### Option C: Custom Server
1. Build the app: `npm run build`
2. Start the server: `npm start`
3. Use PM2 or similar for process management

### 4. Domain Configuration

#### SSL Certificate
- Enable HTTPS (required for PWA)
- Configure SSL certificate (Let's Encrypt recommended)

#### DNS Settings
```
A     @     your-server-ip
CNAME www   your-domain.com
```

### 5. Firebase Configuration

#### Storage Rules
```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read: if true;  // Public read access for images
      allow write: if request.auth != null;  // Authenticated users only
    }
  }
}
```

#### Firestore Rules
```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    match /storyVault/{userId}/{noteId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

### 6. Performance Optimization

#### Image Optimization
- Use WebP format for images
- Implement lazy loading
- Use appropriate image sizes

#### Bundle Optimization
- Enable gzip compression
- Use CDN for static assets
- Implement caching strategies

### 7. Monitoring and Analytics

#### Error Tracking
- Set up Sentry for error monitoring
- Configure error reporting in ErrorBoundary component

#### Performance Monitoring
- Use Google Analytics
- Monitor Core Web Vitals
- Set up uptime monitoring

### 8. Security Checklist

- [ ] HTTPS enabled
- [ ] Security headers configured
- [ ] Firebase rules set up
- [ ] Environment variables secured
- [ ] CORS configured properly
- [ ] Input validation implemented
- [ ] Rate limiting configured

### 9. PWA Configuration

#### Manifest
- App icons in correct sizes
- Theme colors configured
- Display mode set to standalone

#### Service Worker
- Offline functionality working
- Cache strategies implemented
- Push notifications configured

### 10. Testing Checklist

#### Functionality
- [ ] Quiz flow works correctly
- [ ] User registration/login
- [ ] Feature gating based on packages
- [ ] Push notifications
- [ ] PWA installation
- [ ] Offline functionality

#### Performance
- [ ] Lighthouse score > 90
- [ ] First Contentful Paint < 2s
- [ ] Largest Contentful Paint < 4s
- [ ] Cumulative Layout Shift < 0.1

#### Accessibility
- [ ] WCAG 2.1 AA compliance
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Color contrast ratios

### 11. Post-Deployment

#### Monitoring
- Set up uptime monitoring
- Configure error alerts
- Monitor performance metrics

#### Maintenance
- Regular dependency updates
- Security patches
- Performance optimization
- User feedback collection

### 12. Troubleshooting

#### Common Issues
1. **Build fails**: Check environment variables
2. **Images not loading**: Verify Firebase Storage rules
3. **PWA not installing**: Check HTTPS and manifest
4. **Push notifications not working**: Verify VAPID key

#### Debug Commands
```bash
# Check build
npm run build

# Run tests
npm test

# Analyze bundle
ANALYZE=true npm run build

# Check performance
npm run lighthouse
```

### 13. Rollback Plan

1. Keep previous deployment version
2. Monitor new deployment for 24 hours
3. Have rollback procedure ready
4. Test rollback process regularly

---

## 🎯 Success Metrics

- **Performance**: Lighthouse score > 90
- **Uptime**: 99.9% availability
- **User Experience**: < 3s load time
- **Accessibility**: WCAG 2.1 AA compliance
- **Security**: No critical vulnerabilities

---

**Ready for launch! 🚀** 