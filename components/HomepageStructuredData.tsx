export default function HomepageStructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What does West Rose Media do?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "West Rose Media produces brand photography and video for established founders and entrepreneurs across Canada. Services include one-time Spotlight shoots, full event and mastermind coverage through the Immersion package, and the ICON Brand Partnership for ongoing monthly content operations. Stephanie Rose leads strategy and creative direction for every client.",
            },
          },
          {
            "@type": "Question",
            name: "Where does West Rose Media work?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "West Rose Media is based in Calgary, Alberta and works with founders across North America. Regular shoot calendars run in Calgary, Vancouver, and Toronto. Other cities are available by quote. ICON Brand Partnership clients work remotely on strategy and planning, with in-person content captured during scheduled travel dates and intentional shoot days in key cities.",
            },
          },
          {
            "@type": "Question",
            name: "How much does a brand photography shoot cost?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Spotlight package starts at $1,921 CAD and includes photos and vertical video content. Event and mastermind coverage through the Immersion package starts at $6,000 CAD. The ICON Brand Partnership starts at $5,000 CAD per month.",
            },
          },
          {
            "@type": "Question",
            name: "How quickly do I receive my content?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Spotlight photos are delivered within one week. Video is delivered within ten days.",
            },
          },
          {
            "@type": "Question",
            name: "Is West Rose Media accepting new clients?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Spotlight and Immersion bookings are available now. One ICON Brand Partnership spot remains for 2026, starting in September. A deposit holds the spot. Applications for the 2027 waitlist are also open at westrosemedia.com.",
            },
          },
          {
            "@type": "Question",
            name: "What is the ICON Brand Partnership?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The ICON Brand Partnership is a monthly retainer where West Rose Media handles the full content operation for a founder's brand. It includes strategy, creative direction, photography, video, editing, and publishing. West Rose Media partners with a maximum of four ICON clients at a time.",
            },
          },
          {
            "@type": "Question",
            name: "Who is Stephanie Rose?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Stephanie Rose is the founder of West Rose Media, a premium brand content studio based in Calgary, Alberta. She leads strategy and creative direction for every client and works alongside a team of professional photographers and videographers. West Rose Media specializes in personal brand content for founders, coaches, and digital product creators across Canada.",
            },
          },
        ],
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
