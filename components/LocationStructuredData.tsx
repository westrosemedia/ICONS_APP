interface LocationStructuredDataProps {
  city: string;
  province: string;
  url: string;
}

export default function LocationStructuredData({ city, province, url }: LocationStructuredDataProps) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "West Rose Media",
    "image": "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_040.jpg?alt=media&token=74762637-c9c9-4191-8e9b-359b293c0cc7",
    "@id": url,
    "url": url,
    "telephone": "",
    "priceRange": "$$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": province,
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressLocality": city,
      "addressRegion": province
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "17:00"
    },
    "sameAs": [
      "https://www.instagram.com/westrosemedia/",
      "https://www.linkedin.com/in/stephanie-rose-7b007a22b/",
      "https://tiktok.com/@westrosemedia",
      "https://www.youtube.com/@westrosemedia"
    ],
    "areaServed": {
      "@type": "City",
      "name": city,
      "containedIn": {
        "@type": "State",
        "name": province
      }
    }
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Luxury Personal Branding Photography",
    "name": `Luxury Brand Photography in ${city}, ${province}`,
    "description": `Professional brand photography and content creation for entrepreneurs and business owners in ${city}, ${province}. Services include personal branding sessions, headshots, content days, and social media visuals.`,
    "provider": {
      "@type": "Organization",
      "name": "West Rose Media",
      "url": "https://westrosemedia.com"
    },
    "areaServed": {
      "@type": "City",
      "name": city,
      "containedIn": {
        "@type": "State",
        "name": province
      }
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": url,
      "serviceType": "Online"
    }
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
        "name": city,
        "item": url
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
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

