import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import InfluenceCountdown from "./InfluenceCountdown";

const STRIPE_LINK =
  "https://buy.stripe.com/28E9ASgRq8Hb4vp14F87K15";

const FIREBASE_IMAGES = {
  hero: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Selects_040.jpg?alt=media&token=74762637-c9c9-4191-8e9b-359b293c0cc7",
  section1: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR5983.jpg?alt=media",
  section2: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_075.jpg?alt=media&token=ae30650a-5ad9-43ed-8723-a237d5b551a4",
  section3: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6695.jpg?alt=media&token=bdc5c5e0-b699-41af-acaf-18962769071b",
  section4: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KR_SR_089.jpg?alt=media&token=589133f6-da89-4bcf-8e4a-0d322795b6fb",
  section5: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR7086.jpg?alt=media&token=6bf7e2b2-0eab-46cf-bc95-8a1729102797",
  section6: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_0428.jpg?alt=media&token=ea7f180f-5440-4344-85b8-97ea13bf6662",
};

export const metadata: Metadata = {
  title: "Influence Program | Visibility and Authority with Stephanie Rose",
  description:
    "Influence is a three month visibility and authority program for people navigating life transitions who are ready to be seen, speak boldly, and lead with clarity.",
  metadataBase: new URL("https://westrosemedia.com"),
  alternates: { canonical: "/influence" },
  openGraph: {
    title: "Influence Program | Visibility and Authority with Stephanie Rose",
    description:
      "Influence is a three month visibility and authority program for people navigating life transitions who are ready to be seen, speak boldly, and lead with clarity.",
    url: "https://westrosemedia.com/influence",
  },
};

export default function InfluencePage() {
  return (
    <div className="bg-[#FAF7F2] text-[#1C1917] min-h-screen">
      {/* Hero */}
      <section className="relative py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto scroll-mt-24">
        <div className="text-center">
          <h1 className="font-heading text-5xl md:text-7xl font-light leading-tight tracking-tight text-[#1C1917] mb-6">
            Influence
          </h1>
          <div className="relative w-full max-w-4xl mx-auto aspect-[16/10] rounded-2xl overflow-hidden mb-10">
            <Image
              src={FIREBASE_IMAGES.hero}
              alt="Influence program"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 1024px"
            />
          </div>
          <div className="text-lg text-[#3D3632] max-w-2xl mx-auto mb-10 space-y-3 text-left">
            <p>You are allergic to the old way you were doing life.</p>
            <p>The past few years stretched you, broke you open, forced you to grow. You are not interested in going back.</p>
            <p>But showing up again after a big shift can feel delicate. You want to tell the story right. You want the new version of you to land strong, not desperate. Strategic, not chaotic.</p>
            <p>Right now there is a gap between who you have become and how publicly you are showing up.</p>
            <p>Influence exists to close that gap.</p>
            <p>This is a three month room for people navigating reinvention who want to re-enter the online space with clarity, authority, and control over their narrative.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={STRIPE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1C1917] text-[#FAF7F2] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#3D3632] transition-colors duration-300 rounded-none"
            >
              Claim Your Spot
            </a>
            <Link
              href="#who-this-is-for"
              className="inline-block border border-[#1C1917] text-[#1C1917] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#1C1917] hover:text-[#FAF7F2] transition-colors duration-300 rounded-none bg-transparent"
            >
              See If This Is You
            </Link>
          </div>
        </div>
      </section>

      <div className="w-16 h-px bg-[#C9B99A] mx-auto my-16" />

      {/* Testimonials */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto">
        <p className="text-xs tracking-widest uppercase text-[#9C8E82] text-center mb-16">
          What people say about being in Stephanie's world
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <blockquote className="border-l-2 border-[#C9B99A] pl-8 py-4">
            <p className="font-heading text-xl md:text-2xl font-light italic text-[#1C1917] leading-relaxed">
              "The way Stephanie captured parts of me and my brand that I didn't even know how to express is powerful. I think I'm ruined for choosing any other branding expert for the rest of my life."
            </p>
            <footer className="text-xs tracking-widest uppercase text-[#9C8E82] mt-6">— Cheryl</footer>
          </blockquote>

          <blockquote className="border-l-2 border-[#C9B99A] pl-8 py-4">
            <p className="font-heading text-xl md:text-2xl font-light italic text-[#1C1917] leading-relaxed">
              "Working with Stephanie was one of the most empowering and transformative experiences I've ever had. She doesn't just photograph you — she sees you."
            </p>
            <footer className="text-xs tracking-widest uppercase text-[#9C8E82] mt-6">— Abby</footer>
          </blockquote>

          <blockquote className="border-l-2 border-[#C9B99A] pl-8 py-4">
            <p className="font-heading text-xl md:text-2xl font-light italic text-[#1C1917] leading-relaxed">
              "Grounded, raw, honest, and she brings an undeniable fire to every space she leads. If you're serious about building an iconic brand, you'd be missing out not to have her in your corner."
            </p>
            <footer className="text-xs tracking-widest uppercase text-[#9C8E82] mt-6">— GiGi</footer>
          </blockquote>

          <blockquote className="border-l-2 border-[#C9B99A] pl-8 py-4">
            <p className="font-heading text-xl md:text-2xl font-light italic text-[#1C1917] leading-relaxed">
              "You will learn so much from her no matter what you do with her. One thing I didn't expect is the confidence I built from working with her and other women in her group led coaching — really wonderful experience."
            </p>
            <footer className="text-xs tracking-widest uppercase text-[#9C8E82] mt-6">— Charlene</footer>
          </blockquote>

          <blockquote className="border-l-2 border-[#C9B99A] pl-8 py-4 md:col-span-2 md:max-w-xl">
            <p className="font-heading text-xl md:text-2xl font-light italic text-[#1C1917] leading-relaxed">
              "Working with Stephanie is empowering, comfortable, and life changing. Not only is she wildly skillful — she's a wonderful person to work with."
            </p>
            <footer className="text-xs tracking-widest uppercase text-[#9C8E82] mt-6">— Megan</footer>
          </blockquote>
        </div>
      </section>

      <div className="relative w-full max-w-4xl mx-auto aspect-[3/2] rounded-2xl overflow-hidden mx-6 md:mx-12 mb-16">
        <Image
          src={FIREBASE_IMAGES.section1}
          alt=""
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 1024px"
        />
      </div>

      <div className="w-16 h-px bg-[#C9B99A] mx-auto my-16" />

      {/* Who this is for */}
      <section
        id="who-this-is-for"
        className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto scroll-mt-24"
        aria-labelledby="who-heading"
      >
        <div>
          <h2 id="who-heading" className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-8 text-center">
            This is for you if
          </h2>
          <div className="relative w-full max-w-3xl mx-auto aspect-[16/10] rounded-2xl overflow-hidden mb-10">
            <Image
              src={FIREBASE_IMAGES.section4}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-3 text-lg text-[#3D3632] list-disc pl-6">
              <li>You have changed in a real way and your brand has not caught up.</li>
              <li>You are ready to share more of your story but you want to do it strategically, not emotionally dumping online.</li>
              <li>You want your return to feel intentional and powerful.</li>
              <li>You are not chasing influence. You are stepping into leadership.</li>
              <li>You want guidance on shaping the narrative so when you re-enter, it lands.</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="w-16 h-px bg-[#C9B99A] mx-auto my-16" />

      {/* The shift (before/after) */}
      <section
        id="the-shift"
        className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto"
        aria-labelledby="shift-heading"
      >
        <div>
          <h2 id="shift-heading" className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-12 text-center">
            What changes in three months
          </h2>
          <div className="relative w-full max-w-3xl mx-auto aspect-[2/1] rounded-2xl overflow-hidden mb-10">
            <Image
              src={FIREBASE_IMAGES.section3}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-4xl mx-auto">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-light text-[#1C1917] mb-4">Right now</h3>
              <ul className="space-y-2 text-[#3D3632] list-none">
                <li className="flex gap-2"><span className="text-[#C9B99A] shrink-0">→</span> Overthinking every post.</li>
                <li className="flex gap-2"><span className="text-[#C9B99A] shrink-0">→</span> Second guessing your voice.</li>
                <li className="flex gap-2"><span className="text-[#C9B99A] shrink-0">→</span> Waiting to feel ready.</li>
                <li className="flex gap-2"><span className="text-[#C9B99A] shrink-0">→</span> Holding back your real story.</li>
                <li className="flex gap-2"><span className="text-[#C9B99A] shrink-0">→</span> Playing small while privately wanting more.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-light text-[#1C1917] mb-4">After Influence</h3>
              <ul className="space-y-2 text-[#3D3632] list-none">
                <li className="flex gap-2"><span className="text-[#C9B99A] shrink-0">→</span> You understand your story and how to share it with strength.</li>
                <li className="flex gap-2"><span className="text-[#C9B99A] shrink-0">→</span> You speak without apology.</li>
                <li className="flex gap-2"><span className="text-[#C9B99A] shrink-0">→</span> You post without spiraling.</li>
                <li className="flex gap-2"><span className="text-[#C9B99A] shrink-0">→</span> You own your evolution publicly.</li>
                <li className="flex gap-2"><span className="text-[#C9B99A] shrink-0">→</span> You walk into rooms knowing you belong there.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <div className="w-16 h-px bg-[#C9B99A] mx-auto my-16" />

      {/* What you get / Inside Influence */}
      <section
        id="what-you-get"
        className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto"
        aria-labelledby="deliverables-heading"
      >
        <div>
          <h2 id="deliverables-heading" className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-8 text-center">
            Inside Influence
          </h2>
          <div className="relative w-full max-w-3xl mx-auto aspect-[16/10] rounded-2xl overflow-hidden mb-10">
            <Image
              src={FIREBASE_IMAGES.section2}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg text-[#3D3632]">
              This is a controlled, strategic space for people who are done experimenting publicly and ready to execute their next era properly.
            </p>
            <p className="text-lg text-[#3D3632]">
              We map your story. We refine your voice. We practice visibility. And we build the version of your presence that reflects who you are now.
            </p>
            <p className="text-lg text-[#3D3632] font-medium text-[#1C1917]">
              Here is exactly what that looks like:
            </p>
            <ul className="space-y-4 text-lg text-[#3D3632] list-disc pl-6">
              <li>One live call per week for three months. These are focused, strategic working sessions where we refine messaging, positioning, and visibility execution in real time.</li>
              <li>Slack support twice per week for the full three months. You can bring questions, drafts, voice notes, and moments of doubt. You will not spiral alone.</li>
              <li>A structured story mapping process so you know what to share, what to hold, and how to frame your evolution with strength.</li>
              <li>Live hot seat refinement so your language becomes clear, confident, and aligned with the level you are stepping into.</li>
              <li>Visibility reps. You will practice speaking, posting, and positioning inside a supported environment before taking it bigger.</li>
              <li>A group capped at twenty people so you are not hiding in the background.</li>
            </ul>
            <p className="text-lg text-[#3D3632] mt-6">
              Calls are recorded. Slack access remains open for the full duration of the program.
            </p>
          </div>
        </div>
      </section>

      <div className="w-16 h-px bg-[#C9B99A] mx-auto my-16" />

      {/* How it works */}
      <section
        id="how-it-works"
        className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto"
        aria-labelledby="how-heading"
      >
        <div>
          <h2 id="how-heading" className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-12 text-center">
            How it works
          </h2>
          <div className="relative w-full max-w-3xl mx-auto aspect-[2/1] rounded-2xl overflow-hidden mb-10">
            <Image
              src={FIREBASE_IMAGES.section5}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
          <div className="max-w-2xl mx-auto space-y-8">
            <p className="text-lg text-[#3D3632] text-center">
              Three months. One small group. One clear through-line.
            </p>
            <p className="text-lg text-[#3D3632] text-center">
              Led by Stephanie Rose, creative director and visibility strategist who works with leaders stepping into their next era.
            </p>
            <ul className="space-y-6 mt-8">
              <li className="flex gap-4">
                <span className="text-[#C9B99A] font-heading text-xl shrink-0">Month 1</span>
                <span className="text-[#3D3632]">Story mapping and identity excavation. We locate what has shifted, name it with precision, and build the foundation of your new narrative.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#C9B99A] font-heading text-xl shrink-0">Month 2</span>
                <span className="text-[#3D3632]">Voice refinement and visibility practice. You begin showing up — in the room, in the work, in the world — with language that actually sounds like who you are now.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#C9B99A] font-heading text-xl shrink-0">Month 3</span>
                <span className="text-[#3D3632]">Public positioning and presence building. You step into the spaces you have been circling. Your return is deliberate, powerful, and entirely yours.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="w-16 h-px bg-[#C9B99A] mx-auto my-16" />

      {/* Pricing */}
      <section
        id="pricing"
        className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto"
        aria-labelledby="pricing-heading"
      >
        <div className="text-center">
          <h2 id="pricing-heading" className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-8">
            Presale Access
          </h2>
          <p className="text-lg text-[#3D3632] max-w-2xl mx-auto mb-8">
            Influence is currently open at presale pricing while the first group forms.
          </p>
          <InfluenceCountdown />
          <div className="bg-[#1C1917] text-[#FAF7F2] rounded-none p-12 md:p-16 max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center justify-center">
              <div>
                <p className="text-xs tracking-widest uppercase text-[#9C8E82] mb-1">
                  Presale
                </p>
                <p className="font-heading text-6xl font-light text-[#FAF7F2]">$1,800 CAD</p>
                <p className="text-sm text-[#9C8E82] mt-2 tracking-wide">
                  You save $1,400 CAD by moving now.
                </p>
              </div>
              <div className="hidden sm:block h-12 w-px bg-[#3D3632]" aria-hidden />
              <div>
                <p className="text-xs tracking-widest uppercase text-[#9C8E82] mb-1">
                  Regular
                </p>
                <p className="text-[#9C8E82] line-through text-2xl">$3,200 CAD</p>
              </div>
            </div>
          </div>
          <p className="text-[#3D3632] max-w-2xl mx-auto mt-8">
            Presale is for the people who move before everything feels perfect.
            You are buying access at the founding rate.
            Price increases when this round fills or when it opens publicly.
          </p>
          <p className="text-[#3D3632] max-w-2xl mx-auto mt-3">
            Group size is capped at twenty people. When seats fill, enrollment closes.
          </p>
          <div className="mt-8">
            <a
              href={STRIPE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#1C1917] text-[#FAF7F2] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#3D3632] transition-colors duration-300 rounded-none"
            >
              Join Influence Now
            </a>
          </div>
          <p className="text-sm text-[#9C8E82] mt-4">
            Immediate access to onboarding details after payment.
          </p>
        </div>
      </section>

      <div className="w-16 h-px bg-[#C9B99A] mx-auto my-16" />

      {/* FAQ */}
      <section
        id="faq"
        className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-2xl mx-auto">
          <h2 id="faq-heading" className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-12 text-center">
            Frequently asked questions
          </h2>
          <ul className="space-y-4 list-none p-0 m-0">
            <li>
              <details className="group rounded-xl border border-[#C9B99A]/30 bg-[#FAF7F2] overflow-hidden">
                <summary className="flex items-center justify-between gap-4 py-4 px-5 cursor-pointer list-none font-medium text-[#1C1917] hover:bg-[#F5F2ED] transition-colors [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  What if I am not sure I am ready?
                  <span className="shrink-0 text-[#9C8E82] group-open:rotate-180 transition-transform" aria-hidden>
                    ▼
                  </span>
                </summary>
                <div className="px-5 pb-4 pt-0 text-[#3D3632] border-t border-[#C9B99A]/20">
                  You are not supposed to feel fully ready. This program exists for the space between knowing you want more and believing you can handle it.
                </div>
              </details>
            </li>
            <li>
              <details className="group rounded-xl border border-[#C9B99A]/30 bg-[#FAF7F2] overflow-hidden">
                <summary className="flex items-center justify-between gap-4 py-4 px-5 cursor-pointer list-none font-medium text-[#1C1917] hover:bg-[#F5F2ED] transition-colors [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  Is this about becoming an influencer?
                  <span className="shrink-0 text-[#9C8E82] group-open:rotate-180 transition-transform" aria-hidden>
                    ▼
                  </span>
                </summary>
                <div className="px-5 pb-4 pt-0 text-[#3D3632] border-t border-[#C9B99A]/20">
                  No. This is about becoming visible in a way that aligns with your integrity and your leadership.
                </div>
              </details>
            </li>
            <li>
              <details className="group rounded-xl border border-[#C9B99A]/30 bg-[#FAF7F2] overflow-hidden">
                <summary className="flex items-center justify-between gap-4 py-4 px-5 cursor-pointer list-none font-medium text-[#1C1917] hover:bg-[#F5F2ED] transition-colors [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  What if I am going through something personal right now?
                  <span className="shrink-0 text-[#9C8E82] group-open:rotate-180 transition-transform" aria-hidden>
                    ▼
                  </span>
                </summary>
                <div className="px-5 pb-4 pt-0 text-[#3D3632] border-t border-[#C9B99A]/20">
                  That is often exactly why this program works. Big life shifts create powerful stories. We make sure you share them in a way that strengthens you.
                </div>
              </details>
            </li>
            <li>
              <details className="group rounded-xl border border-[#C9B99A]/30 bg-[#FAF7F2] overflow-hidden">
                <summary className="flex items-center justify-between gap-4 py-4 px-5 cursor-pointer list-none font-medium text-[#1C1917] hover:bg-[#F5F2ED] transition-colors [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  How much time does this require each week?
                  <span className="shrink-0 text-[#9C8E82] group-open:rotate-180 transition-transform" aria-hidden>
                    ▼
                  </span>
                </summary>
                <div className="px-5 pb-4 pt-0 text-[#3D3632] border-t border-[#C9B99A]/20">
                  One weekly live call plus small visibility reps between sessions. The goal is integration, not overwhelm.
                </div>
              </details>
            </li>
            <li>
              <details className="group rounded-xl border border-[#C9B99A]/30 bg-[#FAF7F2] overflow-hidden">
                <summary className="flex items-center justify-between gap-4 py-4 px-5 cursor-pointer list-none font-medium text-[#1C1917] hover:bg-[#F5F2ED] transition-colors [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  Will this help me speak on stages or grow my presence?
                  <span className="shrink-0 text-[#9C8E82] group-open:rotate-180 transition-transform" aria-hidden>
                    ▼
                  </span>
                </summary>
                <div className="px-5 pb-4 pt-0 text-[#3D3632] border-t border-[#C9B99A]/20">
                  Yes. We focus on clarity, authority, and confident communication so you can walk into bigger rooms prepared.
                </div>
              </details>
            </li>
            <li>
              <details className="group rounded-xl border border-[#C9B99A]/30 bg-[#FAF7F2] overflow-hidden">
                <summary className="flex items-center justify-between gap-4 py-4 px-5 cursor-pointer list-none font-medium text-[#1C1917] hover:bg-[#F5F2ED] transition-colors [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                  What if I am scared of judgment?
                  <span className="shrink-0 text-[#9C8E82] group-open:rotate-180 transition-transform" aria-hidden>
                    ▼
                  </span>
                </summary>
                <div className="px-5 pb-4 pt-0 text-[#3D3632] border-t border-[#C9B99A]/20">
                  Everyone in the room will understand that fear. Courage grows through repetition and support.
                </div>
              </details>
            </li>
          </ul>
        </div>
      </section>

      {/* Final CTA block */}
      <section
        id="final-cta"
        className="bg-[#1C1917] text-[#FAF7F2]"
        aria-labelledby="final-cta-heading"
      >
        <div className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto text-center">
          <h2 id="final-cta-heading" className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#FAF7F2] mb-4">
            Your life is already shifting.
          </h2>
          <p className="text-lg text-[#FAF7F2]/90 max-w-xl mx-auto mb-4">
            Now your voice needs to catch up.
          </p>
          <p className="text-lg text-[#FAF7F2]/90 max-w-xl mx-auto mb-8">
            If you feel the pull, that is your signal.
          </p>
          <a
            href={STRIPE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#FAF7F2] text-[#1C1917] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#E8E4DD] transition-colors duration-300 rounded-none"
          >
            I'm Ready. Secure My Spot.
          </a>
          <p className="text-sm text-[#FAF7F2]/80 mt-4">
            Presale pricing ends when this round fills.
          </p>
        </div>
      </section>

      {/* Sticky CTA on mobile */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#FAF7F2] border-t border-[#C9B99A]/30 md:hidden"
        aria-label="Mobile call to action"
      >
        <a
          href={STRIPE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 text-center rounded-none bg-[#1C1917] text-[#FAF7F2] text-sm tracking-widest uppercase font-medium hover:bg-[#3D3632] transition-colors duration-300"
        >
          Claim Your Spot
        </a>
      </div>

      {/* Spacer so content is not hidden behind sticky CTA on mobile */}
      <div className="h-20 md:hidden" aria-hidden />
    </div>
  );
}
