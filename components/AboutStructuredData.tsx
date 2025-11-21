export default function AboutStructuredData() {
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
        "name": "About",
        "item": "https://westrosemedia.com/about"
      }
    ]
  };

  const profilePageSchema = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Stephanie Rose",
      "jobTitle": "Luxury Brand Photographer & Social Media Strategist",
      "description": "Calgary's premier luxury brand photographer and social media strategist. Founder of West Rose Media, helping entrepreneurs across Canada create iconic brands through strategic photography and content creation.",
      "url": "https://westrosemedia.com/about",
      "image": "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_040.jpg?alt=media&token=74762637-c9c9-4191-8e9b-359b293c0cc7",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Calgary",
        "addressRegion": "Alberta",
        "addressCountry": "CA"
      },
      "sameAs": [
        "https://www.instagram.com/westrosemedia/",
        "https://www.linkedin.com/in/stephanie-rose-7b007a22b/",
        "https://tiktok.com/@westrosemedia",
        "https://www.youtube.com/@westrosemedia",
        "https://open.spotify.com/show/4jQBGWzfyyYizEThs3BAeR?si=cc9eaa447dd7486a"
      ],
      "knowsAbout": [
        "Brand Photography",
        "Social Media Strategy",
        "Content Creation",
        "Personal Branding",
        "Business Photography",
        "Luxury Lifestyle Photography",
        "Entrepreneur Coaching",
        "Mastermind Facilitation",
        "Podcast Hosting"
      ]
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profilePageSchema),
        }}
      />
    </>
  );
}

