export default function PackagesStructuredData() {
  const provider = {
    "@type": "Organization",
    name: "West Rose Media",
    url: "https://westrosemedia.com",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@type": "Service",
          name: "Spotlight brand photography",
          description:
            "One-time brand photography and vertical video for founders in Calgary, Vancouver, and Toronto.",
          provider,
          areaServed: ["Calgary, Alberta, Canada", "Vancouver, British Columbia, Canada", "Toronto, Ontario, Canada"],
          offers: {
            "@type": "Offer",
            price: "1921",
            priceCurrency: "CAD",
            url: "https://westrosemedia.sproutstudio.com/bookings",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@type": "Service",
          name: "Immersion event coverage",
          description: "Event and mastermind photography and video coverage for organizers and coaches.",
          provider,
          areaServed: [{ "@type": "Country", name: "Canada" }],
          offers: {
            "@type": "Offer",
            price: "6000",
            priceCurrency: "CAD",
            url: "https://westrosemedia.com/book/immersion",
          },
        },
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@type": "Service",
          name: "ICON Brand Partnership",
          description:
            "Monthly retainer: strategy, creative direction, photography, video, editing, and publishing.",
          provider,
          areaServed: [{ "@type": "Country", name: "Canada" }, { "@type": "Country", name: "United States" }],
          offers: {
            "@type": "Offer",
            price: "5000",
            priceCurrency: "CAD",
            url: "https://westrosemedia.com/apply",
          },
        },
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://westrosemedia.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Packages",
        item: "https://westrosemedia.com/packages",
      },
    ],
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
