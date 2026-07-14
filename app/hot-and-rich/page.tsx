import Link from "next/link";
import type { Metadata } from "next";

// ─── Edit copy here when ready ───────────────────────────────────────────────

const PAYMENT_LINK = ""; // Stripe or checkout URL

const IMAGES = {
  hero: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_6978.jpg?alt=media&token=6d0700c6-d2d3-45a7-b050-1b9d00782e64",
  whoThisIsFor: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_7161.jpg?alt=media&token=c52a1b11-e17e-4a08-9218-74a9a13f73b5",
  inside: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_7053.jpg?alt=media&token=dfb289d5-19ea-4068-8029-ca1829e3053c",
  proof: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_7090.jpg?alt=media&token=88d1e7aa-3ece-44b8-b5a7-8d8b392aecb3",
};

const COPY = {
  meta: {
    title: "Hot & Rich | West Rose Media",
    description: "Sales page description — update before launch.",
  },
  hero: {
    eyebrow: "West Rose Media presents",
    headline: "Hot & Rich",
    subheadline: "Subheadline goes here.",
    paragraphs: ["Opening paragraph goes here.", "Second paragraph goes here."],
    primaryCta: { label: "Primary CTA", href: "#pricing" },
    secondaryCta: { label: "Secondary CTA", href: "#who-this-is-for" },
    subtext: "Supporting line under CTAs (dates, price, etc.).",
  },
  problem: {
    heading: "Problem section heading",
    paragraphs: ["Paragraph one.", "Paragraph two.", "Paragraph three."],
  },
  whoThisIsFor: {
    heading: "This is for you if",
    bullets: ["Bullet one.", "Bullet two.", "Bullet three."],
  },
  shift: {
    heading: "What changes",
    before: {
      label: "Right now",
      bullets: ["Before bullet one.", "Before bullet two."],
    },
    after: {
      label: "After",
      bullets: ["After bullet one.", "After bullet two."],
    },
  },
  inside: {
    heading: "What's inside",
    paragraphs: ["Intro paragraph.", "Supporting paragraph."],
    pullQuote: "Optional pull quote.",
    includesLabel: "What is included",
    includes: [
      { title: "Item one", body: "Description." },
      { title: "Item two", body: "Description." },
    ],
    footnote: "Optional footnote.",
  },
  howItWorks: {
    heading: "How it works",
    intro: "Short intro line.",
    steps: [
      { label: "Step 1", body: "Step description." },
      { label: "Step 2", body: "Step description." },
      { label: "Step 3", body: "Step description." },
    ],
  },
  authority: {
    heading: "Who is leading this",
    paragraphs: ["Bio paragraph one.", "Bio paragraph two."],
    pullQuote: "Optional closing line.",
  },
  pricing: {
    heading: "Join",
    subtext: "Pricing subtext (cohorts, dates, etc.).",
    intro: "Pricing intro paragraph.",
    options: ["Pricing option one.", "Pricing option two."],
    joinHeading: "What you get when you join",
    joinBody: "Onboarding / enrollment details.",
    primaryCta: "Primary CTA",
    secondaryCta: "Secondary CTA",
    footnote: "Urgency or enrollment note.",
  },
  faq: [
    { q: "Question one?", a: "Answer one." },
    { q: "Question two?", a: "Answer two." },
  ],
  finalCta: {
    heading: "Final CTA heading",
    body: "Closing paragraph.",
    subtext: "Supporting line.",
    primaryCta: "Primary CTA",
    secondaryCta: "Secondary CTA",
    footnote: "Optional footnote.",
  },
  mobileCta: "Mobile CTA label",
};

// ─── Page ────────────────────────────────────────────────────────────────────

export const revalidate = 0;

export const metadata: Metadata = {
  title: COPY.meta.title,
  description: COPY.meta.description,
  metadataBase: new URL("https://westrosemedia.com"),
  alternates: { canonical: "/hot&rich" },
  openGraph: {
    title: COPY.meta.title,
    description: COPY.meta.description,
    url: "https://westrosemedia.com/hot&rich",
  },
};

function BulletList({
  items,
  light = false,
}: {
  items: string[];
  light?: boolean;
}) {
  const textClass = light ? "text-[#FAF7F2]/90" : "text-[#3D3632]";
  return (
    <ul className="space-y-6">
      {items.map((item) => (
        <li key={item} className="flex gap-4 items-start">
          <span className="text-[#C9B99A] mt-1 shrink-0">•</span>
          <span className={textClass}>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function HotAndRichPage() {
  const pricingHref = PAYMENT_LINK || "#pricing";

  return (
    <div className="bg-[#FAF7F2] text-[#1C1917] min-h-screen">
      {/* Hero */}
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url('${IMAGES.hero}')` }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-6 md:px-16 max-w-4xl mx-auto py-32">
          <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-[#C9B99A] mb-8">
            {COPY.hero.eyebrow}
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-light leading-tight tracking-tight text-[#FAF7F2] mb-12">
            {COPY.hero.headline}
          </h1>
          {COPY.hero.subheadline ? (
            <p className="font-heading text-2xl md:text-4xl font-light leading-snug text-[#FAF7F2]/95 mb-10">
              {COPY.hero.subheadline}
            </p>
          ) : null}
          <div className="text-lg text-[#FAF7F2]/90 max-w-2xl mx-auto mb-12 space-y-5 text-left">
            {COPY.hero.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={COPY.hero.primaryCta.href}
              className="inline-block bg-[#FAF7F2] text-[#1C1917] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#E8E4DD] transition-colors duration-300 rounded-none"
            >
              {COPY.hero.primaryCta.label}
            </Link>
            <Link
              href={COPY.hero.secondaryCta.href}
              className="inline-block border border-[#FAF7F2] text-[#FAF7F2] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#FAF7F2] hover:text-[#1C1917] transition-colors duration-300 rounded-none"
            >
              {COPY.hero.secondaryCta.label}
            </Link>
          </div>
          {COPY.hero.subtext ? (
            <p className="text-[#C9B99A] font-heading text-xl font-light mt-8">
              {COPY.hero.subtext}
            </p>
          ) : null}
        </div>
      </section>

      {/* Problem */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto" aria-labelledby="problem-heading">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2
            id="problem-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-10 text-center"
          >
            {COPY.problem.heading}
          </h2>
          {COPY.problem.paragraphs.map((p) => (
            <p key={p} className="text-lg text-[#3D3632]">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Who this is for */}
      <section
        id="who-this-is-for"
        className="relative bg-cover bg-no-repeat md:bg-fixed scroll-mt-24"
        style={{
          backgroundImage: `url('${IMAGES.whoThisIsFor}')`,
          backgroundPosition: "center 33%",
        }}
        aria-labelledby="who-heading"
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto">
          <h2
            id="who-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#FAF7F2] mb-12 text-center"
          >
            {COPY.whoThisIsFor.heading}
          </h2>
          <div className="max-w-2xl mx-auto">
            <BulletList items={COPY.whoThisIsFor.bullets} light />
          </div>
        </div>
      </section>

      {/* Before / after */}
      <section
        id="the-shift"
        className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto"
        aria-labelledby="shift-heading"
      >
        <h2
          id="shift-heading"
          className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-16 text-center"
        >
          {COPY.shift.heading}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-light text-[#1C1917] mb-6">
              {COPY.shift.before.label}
            </h3>
            <BulletList items={COPY.shift.before.bullets} />
          </div>
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-light text-[#1C1917] mb-6">
              {COPY.shift.after.label}
            </h3>
            <BulletList items={COPY.shift.after.bullets} />
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section
        id="what-you-get"
        className="relative bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url('${IMAGES.inside}')` }}
        aria-labelledby="inside-heading"
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto">
          <h2
            id="inside-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#FAF7F2] mb-12 text-center"
          >
            {COPY.inside.heading}
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {COPY.inside.paragraphs.map((p) => (
              <p key={p} className="text-lg text-[#FAF7F2]/90">
                {p}
              </p>
            ))}
            {COPY.inside.pullQuote ? (
              <p className="text-[#FAF7F2] font-heading text-2xl font-light italic pt-2">
                {COPY.inside.pullQuote}
              </p>
            ) : null}
            <h3 className="text-xs tracking-widest uppercase text-[#C9B99A] pt-6">
              {COPY.inside.includesLabel}
            </h3>
            <ul className="space-y-6 pt-4 text-lg">
              {COPY.inside.includes.map(({ title, body }) => (
                <li key={title} className="flex gap-4 items-start">
                  <span className="text-[#C9B99A] mt-1 shrink-0">•</span>
                  <span className="text-[#FAF7F2]/90">
                    <strong className="font-medium text-[#FAF7F2]">{title}</strong> {body}
                  </span>
                </li>
              ))}
            </ul>
            {COPY.inside.footnote ? (
              <p className="text-[#FAF7F2]/70 text-base pt-2">{COPY.inside.footnote}</p>
            ) : null}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section
        id="how-it-works"
        className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto scroll-mt-24"
        aria-labelledby="how-heading"
      >
        <h2
          id="how-heading"
          className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-12 text-center"
        >
          {COPY.howItWorks.heading}
        </h2>
        <div className="max-w-2xl mx-auto space-y-8">
          <p className="text-lg text-[#3D3632] text-center">{COPY.howItWorks.intro}</p>
          <ul className="space-y-8 pt-4">
            {COPY.howItWorks.steps.map(({ label, body }) => (
              <li
                key={label}
                className="flex flex-col gap-3 md:flex-row md:gap-6 md:items-start"
              >
                <span className="text-[#C9B99A] font-heading text-2xl font-light shrink-0 md:w-36">
                  {label}
                </span>
                <span className="text-[#3D3632] text-lg">{body}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Authority / proof */}
      <section
        className="relative bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url('${IMAGES.proof}')` }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 py-24 md:py-32 px-6 md:px-12 max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#FAF7F2] mb-10">
            {COPY.authority.heading}
          </h2>
          <div className="space-y-6 text-[#FAF7F2]/85 leading-relaxed text-lg">
            {COPY.authority.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
            {COPY.authority.pullQuote ? (
              <p className="text-[#FAF7F2] font-heading text-2xl font-light italic pt-4">
                {COPY.authority.pullQuote}
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        id="pricing"
        className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto scroll-mt-24"
        aria-labelledby="pricing-heading"
      >
        <div className="text-center max-w-2xl mx-auto">
          <h2
            id="pricing-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-4"
          >
            {COPY.pricing.heading}
          </h2>
          {COPY.pricing.subtext ? (
            <p className="text-[#C9B99A] font-heading text-xl font-light mb-8">
              {COPY.pricing.subtext}
            </p>
          ) : null}
          <p className="text-lg text-[#3D3632] mb-10">{COPY.pricing.intro}</p>
          <div className="border border-[#C9B99A]/40 bg-white/60 p-6 md:p-8 text-left mb-10">
            <h3 className="text-xs tracking-widest uppercase text-[#9C8E82] mb-5 text-center">
              Pricing
            </h3>
            <ul className="space-y-3 text-[#3D3632] text-lg">
              {COPY.pricing.options.map((option) => (
                <li key={option} className="flex gap-3">
                  <span className="text-[#C9B99A]">•</span>
                  <span>{option}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4 text-[#3D3632] text-lg mb-10">
            <h3 className="text-xs tracking-widest uppercase text-[#9C8E82]">
              {COPY.pricing.joinHeading}
            </h3>
            <p>{COPY.pricing.joinBody}</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            {PAYMENT_LINK ? (
              <a
                href={PAYMENT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#1C1917] text-[#FAF7F2] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#3D3632] transition-colors duration-300 rounded-none"
              >
                {COPY.pricing.primaryCta}
              </a>
            ) : (
              <Link
                href="#pricing"
                className="inline-block bg-[#1C1917] text-[#FAF7F2] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#3D3632] transition-colors duration-300 rounded-none"
              >
                {COPY.pricing.primaryCta}
              </Link>
            )}
            <Link
              href="#payment-options"
              className="inline-block border border-[#1C1917] text-[#1C1917] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#1C1917] hover:text-[#FAF7F2] transition-colors duration-300 rounded-none"
            >
              {COPY.pricing.secondaryCta}
            </Link>
          </div>
          <div id="payment-options" className="scroll-mt-24">
            {/* Add Stripe pricing table or checkout embed here when ready */}
          </div>
          {COPY.pricing.footnote ? (
            <p className="text-sm text-[#9C8E82] mt-8">{COPY.pricing.footnote}</p>
          ) : null}
        </div>
      </section>

      {/* FAQ */}
      <section
        id="faq"
        className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-2xl mx-auto">
          <h2
            id="faq-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-12 text-center"
          >
            Frequently asked questions
          </h2>
          <ul className="space-y-4 list-none p-0 m-0">
            {COPY.faq.map(({ q, a }) => (
              <li key={q}>
                <details className="group border border-[#C9B99A]/30 bg-[#FAF7F2] overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 py-4 px-5 cursor-pointer list-none font-medium text-[#1C1917] hover:bg-[#F5F2ED] transition-colors [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                    {q}
                    <span
                      className="shrink-0 text-[#9C8E82] group-open:rotate-180 transition-transform"
                      aria-hidden
                    >
                      ▼
                    </span>
                  </summary>
                  <div className="px-5 pb-4 pt-3 text-[#3D3632] border-t border-[#C9B99A]/20">
                    {a}
                  </div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section id="final-cta" className="bg-[#1C1917] text-[#FAF7F2]" aria-labelledby="final-cta-heading">
        <div className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto text-center">
          <h2
            id="final-cta-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#FAF7F2] mb-6"
          >
            {COPY.finalCta.heading}
          </h2>
          <p className="text-lg text-[#FAF7F2]/90 max-w-xl mx-auto mb-4">{COPY.finalCta.body}</p>
          {COPY.finalCta.subtext ? (
            <p className="text-[#C9B99A] font-heading text-xl font-light mb-10">
              {COPY.finalCta.subtext}
            </p>
          ) : null}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href={pricingHref}
              className="inline-block bg-[#FAF7F2] text-[#1C1917] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#E8E4DD] transition-colors duration-300 rounded-none"
            >
              {COPY.finalCta.primaryCta}
            </Link>
            <Link
              href={pricingHref}
              className="inline-block border border-[#FAF7F2] text-[#FAF7F2] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#FAF7F2] hover:text-[#1C1917] transition-colors duration-300 rounded-none"
            >
              {COPY.finalCta.secondaryCta}
            </Link>
          </div>
          {COPY.finalCta.footnote ? (
            <p className="text-sm text-[#FAF7F2]/60 mt-4">{COPY.finalCta.footnote}</p>
          ) : null}
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#FAF7F2] border-t border-[#C9B99A]/30 md:hidden"
        aria-label="Mobile call to action"
      >
        <Link
          href={pricingHref}
          className="block w-full py-4 text-center rounded-none bg-[#1C1917] text-[#FAF7F2] text-sm tracking-widest uppercase font-medium hover:bg-[#3D3632] transition-colors duration-300"
        >
          {COPY.mobileCta}
        </Link>
      </div>
      <div className="h-20 md:hidden" aria-hidden />
    </div>
  );
}
