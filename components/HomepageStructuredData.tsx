import { homePageFaqItems } from "@/data/homePageFaq";

export default function HomepageStructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: homePageFaqItems.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
          },
        })),
      },
      {
        "@type": "Person",
        name: "Stephanie Rose",
        jobTitle: "Founder, Creative Director",
        worksFor: {
          "@type": "Organization",
          name: "West Rose Media",
          url: "https://westrosemedia.com",
        },
        address: {
          "@type": "PostalAddress",
          addressLocality: "Calgary",
          addressRegion: "Alberta",
          addressCountry: "CA",
        },
        url: "https://westrosemedia.com/about",
      },
      {
        "@type": "Service",
        name: "Spotlight brand photography",
        description:
          "One-time brand photography and vertical video for founders. Creative direction and execution built around your brand.",
        provider: { "@type": "Organization", name: "West Rose Media", url: "https://westrosemedia.com" },
        areaServed: ["Calgary, Canada", "Vancouver, Canada", "Toronto, Canada"],
        offers: {
          "@type": "Offer",
          price: "1921",
          priceCurrency: "CAD",
          url: "https://westrosemedia.sproutstudio.com/bookings",
        },
      },
      {
        "@type": "Service",
        name: "Immersion event coverage",
        description:
          "Event and mastermind photography and video coverage for coaches, consultants, and organizers.",
        provider: { "@type": "Organization", name: "West Rose Media", url: "https://westrosemedia.com" },
        areaServed: ["Canada"],
        offers: {
          "@type": "Offer",
          price: "6000",
          priceCurrency: "CAD",
          url: "https://westrosemedia.com/book/immersion",
        },
      },
      {
        "@type": "Service",
        name: "ICON Brand Partnership",
        description:
          "Monthly retainer for full content operations including strategy, photography, video, editing, and publishing.",
        provider: { "@type": "Organization", name: "West Rose Media", url: "https://westrosemedia.com" },
        areaServed: ["Canada", "United States"],
        offers: {
          "@type": "Offer",
          price: "5000",
          priceCurrency: "CAD",
          url: "https://westrosemedia.com/apply",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}
