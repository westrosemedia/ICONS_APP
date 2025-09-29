export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "West Rose Media",
    "alternateName": "ICONS by West Rose Media",
    "url": "https://westrosemedia.com",
    "logo": "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/icons%20logo%20.png?alt=media",
    "description": "Luxury personal branding, content creation, and mastermind retreats for female entrepreneurs in Canada",
    "founder": {
      "@type": "Person",
      "name": "Stephanie Rose"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Calgary",
      "addressRegion": "Alberta",
      "addressCountry": "CA"
    },
    "sameAs": [
      "https://instagram.com/westrosemedia",
      "https://linkedin.com/company/west-rose-media"
    ],
    "serviceArea": {
      "@type": "Country",
      "name": "Canada"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Luxury Personal Branding Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Content & Tapping Mastermind + Retreat",
            "description": "6-month mastermind combining emotional mastery and magnetic marketing for female entrepreneurs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Luxury Personal Brand Photography",
            "description": "Professional photography and content creation for female entrepreneurs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Marketing",
            "description": "Strategic social media content and marketing for business growth"
          }
        }
      ]
    }
  };

  const mastermindSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Content & Tapping Mastermind + Retreat",
    "description": "6-month luxury mastermind combining emotional mastery (Tapping) + magnetic marketing (Content) for female entrepreneurs in Canada",
    "startDate": "2024-03-06",
    "endDate": "2024-03-09",
    "location": {
      "@type": "Place",
      "name": "Kelowna, British Columbia, Canada",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kelowna",
        "addressRegion": "British Columbia",
        "addressCountry": "CA"
      }
    },
    "organizer": {
      "@type": "Organization",
      "name": "West Rose Media",
      "url": "https://westrosemedia.com"
    },
    "offers": {
      "@type": "Offer",
      "price": "12000",
      "priceCurrency": "CAD",
      "availability": "https://schema.org/InStock"
    },
    "audience": {
      "@type": "Audience",
      "audienceType": "Female Entrepreneurs"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mastermindSchema),
        }}
      />
    </>
  );
}
