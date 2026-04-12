const faqItems = [
  {
    q: "What platforms does Cadence support?",
    a: "Cadence connects to Facebook, Instagram, Threads, LinkedIn, TikTok, Pinterest, YouTube, Google My Business, Reddit, Telegram, Bluesky, Tumblr, and Mastodon.",
  },
  {
    q: "Does Cadence work with Canva and Dropbox?",
    a: "Yes. Cadence integrates directly with both Canva and Dropbox so you can pull in designs and media files without downloading and re-uploading anything.",
  },
  {
    q: "Can I actually post to TikTok, including sounds and Trial Reels?",
    a: "Yes. Cadence supports native TikTok publishing, including browsing and selecting trending TikTok sounds directly inside the platform and publishing Trial Reels without manual uploads.",
  },
  {
    q: "What is the West Rose Media Telegram community?",
    a: "It is a private channel where the West Rose Media team shares content tips, platform updates, and strategy insights. Every Cadence subscriber gets access as part of their plan. Your invite link will be sent in your welcome email after purchase.",
  },
  {
    q: "Can I manage multiple brands or clients in one account?",
    a: "Yes. The Founder plan supports up to 10 social accounts across 2 users. The Promoter plan supports up to 50 social accounts across 5 users, making it the right fit for agencies managing multiple brands.",
  },
  {
    q: "What happens when I pay annually?",
    a: "You are billed once per year and save the equivalent of two months compared to monthly billing. You can cancel before your renewal date and will not be charged again.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Yes. You can change your plan at any time. Changes take effect at your next billing cycle.",
  },
  {
    q: "Is this connected to West Rose Media's photography and video services?",
    a: "Cadence is a standalone tool. You do not need to be a West Rose Media client to subscribe. If you are an existing WRM client, Cadence is the natural way to keep your content schedule consistent between sessions.",
  },
  {
    q: "Who do I contact if I need help?",
    a: "Reach out to the West Rose Media team at admin@westrosemedia.com and we will get you sorted.",
  },
];

export default function CadenceStructuredData() {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Cadence by West Rose Media",
    description:
      "Professional social media scheduling across 13 platforms. Built for business owners who need their content presence to match their work ethic.",
    brand: {
      "@type": "Brand",
      name: "West Rose Media",
    },
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "29",
      highPrice: "99",
      offerCount: "3",
      availability: "https://schema.org/InStock",
      url: "https://westrosemedia.com/cadence",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Cadence by West Rose Media",
    url: "https://westrosemedia.com/cadence",
    description: productJsonLd.description,
    isPartOf: {
      "@type": "WebSite",
      name: "West Rose Media",
      url: "https://westrosemedia.com",
    },
    potentialAction: {
      "@type": "ViewAction",
      name: "Choose a plan",
      target: "https://westrosemedia.com/cadence#pricing",
    },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }} />
    </>
  );
}
