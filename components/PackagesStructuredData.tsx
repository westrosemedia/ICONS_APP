export default function PackagesStructuredData() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Luxury Personal Branding Photography",
    "name": "West Rose Media Photography Packages",
    "description": "Professional brand photography and content creation packages for entrepreneurs and business owners. Services include personal branding sessions, headshots, content days, social media visuals, and ongoing brand partnership.",
    "provider": {
      "@type": "Organization",
      "name": "West Rose Media",
      "url": "https://westrosemedia.com"
    },
    "areaServed": [
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
      "name": "Photography Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Spotlight Package",
            "description": "One-time brand photography session"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "WRM Lite Package",
            "description": "Monthly subscription for ongoing content creation"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Immersion Package",
            "description": "Event coverage with participant add-ons"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "ICON Package",
            "description": "Premium package with ICON Society membership"
          }
        }
      ]
    },
    "keywords": "brand photography, personal branding, business photography, headshots, content creation, social media photography, Calgary photographer, Toronto photographer, Vancouver photographer"
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
        "name": "Packages",
        "item": "https://westrosemedia.com/packages"
      }
    ]
  };

  return (
    <>
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

