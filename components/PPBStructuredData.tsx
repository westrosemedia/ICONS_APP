export default function PPBStructuredData() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Will this actually help me get real opportunities like stages, podcasts, and partnerships?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Powerful Personal Brand teaches you how to pitch yourself, tell your story clearly, speak without rambling, and show up with the presence people want on their platforms. Clients book conferences, interviews, and collaborations because their brand finally communicates their level."
        }
      },
      {
        "@type": "Question",
        "name": "I have invested before and did not get results. How is this different?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most programs just give information. Powerful Personal Brand gives you information plus coaching, feedback, practice, repetition, message refinement, and pitch development. You do not sit and learn. You build skills and get support as you rise."
        }
      },
      {
        "@type": "Question",
        "name": "Will this help me make more money?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Clear messaging and confident presence increase conversions. When people understand you, they trust you faster. Clients inside this program have filled events, landed their biggest clients ever, and hit their strongest months because their brand finally matched their expertise."
        }
      },
      {
        "@type": "Question",
        "name": "Why choose the full year instead of sixteen weeks?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Sixteen weeks gives you the transformation. The full year gives you mastery. If you want long term support, consistent refinement, stronger delivery, and a visibility strategy that keeps growing with you, the year is where you build staying power."
        }
      },
      {
        "@type": "Question",
        "name": "How much access do I get to Stephanie inside Powerful Personal Brand?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "You get two group coaching calls every month where Stephanie answers your questions directly and gives feedback on your specific brand, messaging, and visibility strategy. These calls are designed to help you refine your ideas, fix blind spots fast, and get clarity on what will actually move your business forward. If you want more hands on support, deeper strategy, or private coaching, you can inquire about the mastermind or one to one coaching."
        }
      }
    ]
  };

  const courseSchema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": "Powerful Personal Brand",
    "description": "A sixteen week group coaching and brand overhaul program for ambitious women and nonbinary leaders who are ready to move beyond business owner and step fully into industry authority. Build a clear, powerful brand identity and a marketing system you can actually stick to.",
    "provider": {
      "@type": "Organization",
      "name": "West Rose Media",
      "url": "https://westrosemedia.com"
    },
    "instructor": {
      "@type": "Person",
      "name": "Stephanie Rose"
    },
    "courseCode": "PPB",
    "educationalCredentialAwarded": "Certificate of Completion",
    "timeRequired": "P16W",
    "offers": [
      {
        "@type": "Offer",
        "name": "The 16 Week Intensive",
        "price": "2500",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-11-20"
      },
      {
        "@type": "Offer",
        "name": "The Full Year Experience",
        "price": "3500",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "validFrom": "2025-11-20"
      }
    ],
    "keywords": "personal branding, brand strategy, business coaching, entrepreneur coaching, brand identity, marketing strategy, visibility coaching"
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
        "name": "Powerful Personal Brand",
        "item": "https://westrosemedia.com/ppb"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
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

