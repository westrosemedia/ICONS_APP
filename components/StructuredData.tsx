export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Stephanie Rose",
    "alternateName": "Stephanie Rose West Rose Media",
    "jobTitle": "Luxury Brand Photographer & Social Media Strategist",
    "description": "Calgary's premier luxury brand photographer and social media strategist specializing in personal branding for entrepreneurs across Canada",
    "url": "https://westrosemedia.com",
    "image": "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_040.jpg?alt=media&token=74762637-c9c9-4191-8e9b-359b293c0cc7",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Calgary",
      "addressRegion": "Alberta",
      "addressCountry": "CA"
    },
    "sameAs": [
      "https://www.instagram.com/westrosemedia/",
      "https://www.linkedin.com/in/stephanie-rose-7b007a22b/",
      "https://tiktok.com/@westrosemedia",
      "https://www.youtube.com/@westrosemedia"
    ],
    "knowsAbout": [
      "Brand Photography",
      "Social Media Strategy", 
      "Content Creation",
      "Personal Branding",
      "Business Photography",
      "Luxury Lifestyle Photography",
      "Entrepreneur Coaching",
      "Mastermind Facilitation"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Brand Photographer",
      "occupationLocation": {
        "@type": "City",
        "name": "Calgary, Alberta, Canada"
      }
    }
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "West Rose Media",
    "alternateName": ["West Rose Media Photography"],
    "url": "https://westrosemedia.com",
    "description": "Luxury personal branding, content creation, and mastermind retreats for entrepreneurs in Canada. Professional brand photography and social media strategy.",
    "foundingDate": "2020",
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
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.instagram.com/westrosemedia/",
      "https://www.linkedin.com/in/stephanie-rose-7b007a22b/",
      "https://tiktok.com/@westrosemedia",
      "https://www.youtube.com/@westrosemedia"
    ],
    "serviceArea": [
      {
        "@type": "Country",
        "name": "Canada"
      },
      {
        "@type": "State",
        "name": "Alberta"
      },
      {
        "@type": "State", 
        "name": "British Columbia"
      },
      {
        "@type": "State",
        "name": "Ontario"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Luxury Personal Branding Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Movement Makers Mastermind + Retreat",
            "description": "6-month mastermind combining emotional mastery and magnetic marketing for entrepreneurs",
            "provider": {
              "@type": "Organization",
              "name": "West Rose Media"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Luxury Personal Brand Photography",
            "description": "Professional photography and content creation for entrepreneurs and business owners",
            "provider": {
              "@type": "Organization", 
              "name": "West Rose Media"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Social Media Strategy & Content Creation",
            "description": "Strategic social media content and marketing for business growth",
            "provider": {
              "@type": "Organization",
              "name": "West Rose Media"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ICON Society Membership",
            "description": "Private community for rising entrepreneurs with weekly support and masterclasses",
            "provider": {
              "@type": "Organization",
              "name": "West Rose Media"
            }
          }
        }
      ]
    }
  };

  const mastermindSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Movement Makers Mastermind + Retreat",
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
          __html: JSON.stringify(personSchema),
        }}
      />
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
