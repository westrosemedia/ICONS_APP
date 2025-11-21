export default function MastermindStructuredData() {
  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Movement Makers Mastermind + Retreat",
    "description": "6-month luxury mastermind combining emotional mastery (Tapping with Jackie McDonald) + magnetic marketing (Content with Stephanie Rose) for female entrepreneurs in Canada. Includes luxury retreat in Kelowna, British Columbia.",
    "startDate": "2025-03-06",
    "endDate": "2025-09-06",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": [
      {
        "@type": "Place",
        "name": "Kelowna, British Columbia, Canada",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kelowna",
          "addressRegion": "British Columbia",
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
    "offers": {
      "@type": "Offer",
      "price": "12000",
      "priceCurrency": "CAD",
      "availability": "https://schema.org/InStock",
      "url": "https://westrosemedia.com/mastermind",
      "validFrom": "2025-01-01"
    },
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
    "name": "Movement Makers Mastermind",
    "description": "6-month intensive mastermind program combining emotional mastery through tapping and magnetic marketing through strategic content creation for female entrepreneurs.",
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
        "name": "Movement Makers Mastermind",
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

