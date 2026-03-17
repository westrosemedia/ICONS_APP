export default function MastermindStructuredData() {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Manifesting & Marketing Mastermind",
    "description": "6-month luxury mastermind combining marketing strategy that converts + manifestation that moves money. Stephanie Rose and Jackie McDonald. Includes luxury retreat in the Canadian Rockies, October 2026.",
    "startDate": "2026-04-01",
    "endDate": "2026-10-31",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": [
      {
        "@type": "Place",
        "name": "Canadian Rockies, Alberta, Canada",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Calgary",
          "addressRegion": "Alberta",
          "addressCountry": "CA"
        }
      },
      {
        "@type": "VirtualLocation",
        "name": "Online Mastermind Sessions",
        "url": "https://westrosemedia.com/mastermind"
      }
    ],
    "organizer": {
      "@type": "Organization",
      "name": "West Rose Media",
      "url": "https://westrosemedia.com"
    },
    "performer": [
      {
        "@type": "Person",
        "name": "Stephanie Rose",
        "jobTitle": "Brand Strategist & Content Creator"
      },
      {
        "@type": "Person",
        "name": "Jackie McDonald",
        "jobTitle": "Tapping & Emotional Mastery Coach"
      }
    ],
    "offers": [
      {
        "@type": "Offer",
        "name": "Mastermind only",
        "price": "12000",
        "priceCurrency": "CAD",
        "availability": "https://schema.org/InStock",
        "url": "https://westrosemedia.com/mastermind"
      },
      {
        "@type": "Offer",
        "name": "Mastermind + Luxury Retreat",
        "price": "20000",
        "priceCurrency": "CAD",
        "availability": "https://schema.org/InStock",
        "url": "https://westrosemedia.com/mastermind"
      }
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": "Female Entrepreneurs",
      "geographicArea": {
        "@type": "Country",
        "name": "Canada"
      }
    },
    "keywords": "mastermind retreat, business coaching, entrepreneur mastermind, luxury retreat, tapping therapy, content creation, brand strategy"
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Manifesting & Marketing Mastermind",
    "description": "6-month intensive mastermind program combining marketing strategy that converts and manifestation that moves money. Stephanie Rose and Jackie McDonald.",
    "provider": {
      "@type": "Organization",
      "name": "West Rose Media",
      "url": "https://westrosemedia.com"
    },
    "instructor": [
      {
        "@type": "Person",
        "name": "Stephanie Rose"
      },
      {
        "@type": "Person",
        "name": "Jackie McDonald"
      }
    ],
    "timeRequired": "P6M",
    "educationalCredentialAwarded": "Certificate of Completion",
    "keywords": "mastermind, business coaching, entrepreneur program, brand strategy, content creation, tapping therapy"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://westrosemedia.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Manifesting & Marketing Mastermind",
        "item": "https://westrosemedia.com/mastermind"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(eventSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}

