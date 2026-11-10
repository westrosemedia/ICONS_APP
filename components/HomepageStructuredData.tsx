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
        jobTitle: "Founder and Creative Director",
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
        name: "ICON Brand Partnership",
        description:
          "Monthly brand partnership for accomplished women founders where West Rose Media runs strategy, creative direction, photography, video, social content, and launch assets as one in-house team. From $5,000 CAD per month, six or twelve month commitment, by application.",
        provider: { "@type": "Organization", name: "West Rose Media", url: "https://westrosemedia.com" },
        areaServed: ["Calgary, Alberta, Canada", "Vancouver, British Columbia, Canada", "Toronto, Ontario, Canada", "Canada"],
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
