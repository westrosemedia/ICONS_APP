import Link from "next/link";
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
          <div
            className="w-full max-w-4xl mx-auto h-[700px] md:h-[900px] rounded-2xl bg-cover bg-center bg-no-repeat mb-10"
            style={{ backgroundImage: `url('${FIREBASE_IMAGES.hero}')` }}
            role="img"
            aria-label="Influence program"
          />
          <div className="text-lg text-[#3D3632] max-w-2xl mx-auto mb-10 space-y-3 text-left">
            <p>You are allergic to the old way you were doing life.</p>
            <p>The past few years stretched you, broke you open, forced you to grow. Maybe you came out. Maybe you burned your marriage, your career, your identity to the ground and built something new from the ash. Maybe you just quietly became someone your old brand no longer reflects.</p>
            <p>You are not interested in going back. But you are also not sure how to talk about it yet.</p>
            <p>There is a version of your story that gets you on stages. That lands you on podcasts. That makes high-level clients choose you before you finish your sentence. That becomes the foundation of a book, a movement, a body of work that outlasts any single offer.</p>
            <p>That version exists. You just have not found the words for it yet.</p>
            <p>Influence exists to find them.</p>
            <p>This is a three month room for founders, leaders, and entrepreneurs navigating a major identity shift who are ready to turn their story into the most powerful asset their brand has ever had.</p>
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

      <div
        className="w-full max-w-4xl mx-auto h-[500px] md:h-[600px] rounded-2xl bg-cover bg-center bg-no-repeat mx-6 md:mx-12 mb-16"
        style={{ backgroundImage: `url('${FIREBASE_IMAGES.section1}')` }}
        role="img"
        aria-label=""
      />

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
          <div
            className="w-full max-w-3xl mx-auto h-[500px] md:h-[600px] rounded-2xl bg-cover bg-center bg-no-repeat mb-10"
            style={{ backgroundImage: `url('${FIREBASE_IMAGES.section4}')` }}
            role="img"
            aria-label=""
          />
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-5 mt-8">
              <li className="flex gap-4 items-start">
                <span className="text-[#C9B99A] mt-1">—</span>
                <span className="text-[#3D3632]">You have been through something real — a coming out, a divorce, a reinvention, a loss — and you know it is part of your story but you do not know how to tell it without it feeling like oversharing or trauma dumping.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-[#C9B99A] mt-1">—</span>
                <span className="text-[#3D3632]">You want to get on stages and podcasts but when someone asks about your story, you freeze or flatten it.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-[#C9B99A] mt-1">—</span>
                <span className="text-[#3D3632]">You are building toward a book, a keynote, a thought leadership platform — and you need a story that can hold the weight of that.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-[#C9B99A] mt-1">—</span>
                <span className="text-[#3D3632]">You have changed in a real way and the old version of your brand no longer fits. You need to step into the new one publicly and you want to do it with precision, not chaos.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-[#C9B99A] mt-1">—</span>
                <span className="text-[#3D3632]">You are not chasing influence. You are stepping into the kind of authority that makes premium clients, collaborators, and opportunities come to you.</span>
              </li>
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
          <div
            className="w-full max-w-3xl mx-auto h-[500px] md:h-[600px] rounded-2xl bg-cover bg-center bg-no-repeat mb-10"
            style={{ backgroundImage: `url('${FIREBASE_IMAGES.section3}')` }}
            role="img"
            aria-label=""
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-4xl mx-auto">
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-light text-[#1C1917] mb-4">Right now</h3>
              <ul className="space-y-4 text-[#3D3632]">
                <li className="flex gap-4 items-start"><span className="text-[#C9B99A] shrink-0">—</span><span>You know your story is powerful but you cannot find the version of it that lands.</span></li>
                <li className="flex gap-4 items-start"><span className="text-[#C9B99A] shrink-0">—</span><span>You shrink when someone asks about your background or your journey.</span></li>
                <li className="flex gap-4 items-start"><span className="text-[#C9B99A] shrink-0">—</span><span>You are holding back the most interesting parts of yourself because you are not sure the world is ready — or that you are.</span></li>
                <li className="flex gap-4 items-start"><span className="text-[#C9B99A] shrink-0">—</span><span>You are playing a smaller public role than the one you are privately ready for.</span></li>
                <li className="flex gap-4 items-start"><span className="text-[#C9B99A] shrink-0">—</span><span>You want to write a book, pitch a stage, land a podcast — but your story does not feel cohesive enough yet to build from.</span></li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-2xl md:text-3xl font-light text-[#1C1917] mb-4">After Influence</h3>
              <ul className="space-y-4 text-[#3D3632]">
                <li className="flex gap-4 items-start"><span className="text-[#C9B99A] shrink-0">—</span><span>You have a founder story that is sharp, specific, and built to open doors — stages, podcasts, book deals, premium clients.</span></li>
                <li className="flex gap-4 items-start"><span className="text-[#C9B99A] shrink-0">—</span><span>You know exactly what to share, what to hold, and how to frame the hard parts so they build trust instead of bleeding in public.</span></li>
                <li className="flex gap-4 items-start"><span className="text-[#C9B99A] shrink-0">—</span><span>You speak about your evolution with authority, not apology.</span></li>
                <li className="flex gap-4 items-start"><span className="text-[#C9B99A] shrink-0">—</span><span>You walk into rooms — on stages, on mics, in pitches — knowing your story is your strongest credential.</span></li>
                <li className="flex gap-4 items-start"><span className="text-[#C9B99A] shrink-0">—</span><span>The version of you that has been waiting quietly in the background is now the one running the brand.</span></li>
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
          <div
            className="w-full max-w-3xl mx-auto h-[500px] md:h-[600px] rounded-2xl bg-cover bg-center bg-no-repeat mb-10"
            style={{ backgroundImage: `url('${FIREBASE_IMAGES.section2}')` }}
            role="img"
            aria-label=""
          />
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg text-[#3D3632]">
              This is not a content course. There are no templates for Instagram captions here.
            </p>
            <p className="text-lg text-[#3D3632]">
              This is a room for people who are ready to do the deeper work — excavating the story underneath the brand, finding the version of it that is true and powerful and built to last, and learning to speak it with the kind of authority that changes rooms.
            </p>
            <p className="text-lg text-[#3D3632]">
              Stephanie Rose used her own coming out — and the story of burning her entire life down and rebuilding it — to get on some of the biggest stages she has ever stood on, to build a brand that attracts clients who would follow her anywhere, and to begin writing her book. That is what a founder story can do when it is built with intention.
            </p>
            <p className="text-lg text-[#3D3632] font-medium text-[#1C1917]">
              That is what we do here.
            </p>
            <ul className="space-y-6 mt-10 text-lg text-[#3D3632]">
              <li className="flex gap-4 items-start">
                <span className="text-[#C9B99A] mt-1 shrink-0">—</span>
                <span><strong className="font-medium text-[#1C1917]">One live call per week for three months.</strong> Strategic working sessions where we excavate, refine, and pressure-test your story and your positioning in real time.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-[#C9B99A] mt-1 shrink-0">—</span>
                <span><strong className="font-medium text-[#1C1917]">Slack support twice per week.</strong> Bring your drafts, your pitches, your speaker bios, your about pages, your moments of doubt. You will not figure this out alone.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-[#C9B99A] mt-1 shrink-0">—</span>
                <span><strong className="font-medium text-[#1C1917]">A structured story mapping process.</strong> We locate the moments that matter, decide what earns its place in your public narrative, and build a founder story that is both true and strategic.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-[#C9B99A] mt-1 shrink-0">—</span>
                <span><strong className="font-medium text-[#1C1917]">Live hot seat refinement.</strong> Your language gets sharper every week. We work on how you introduce yourself, how you pitch a stage, how you open a keynote, how you answer the question "so what do you do" in a way that makes people lean in.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-[#C9B99A] mt-1 shrink-0">—</span>
                <span><strong className="font-medium text-[#1C1917]">Visibility reps.</strong> You will practice speaking your story, pitching your narrative, and stepping into the public role you are building — inside a supported room before you take it into the world.</span>
              </li>
              <li className="flex gap-4 items-start">
                <span className="text-[#C9B99A] mt-1 shrink-0">—</span>
                <span><strong className="font-medium text-[#1C1917]">A group capped at twenty people.</strong> This is intentional and intimate. Everyone in the room is navigating real transformation. You are not hiding in the background here.</span>
              </li>
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
          <div
            className="w-full max-w-3xl mx-auto h-[500px] md:h-[600px] rounded-2xl bg-cover bg-center bg-no-repeat mb-10"
            style={{ backgroundImage: `url('${FIREBASE_IMAGES.section5}')` }}
            role="img"
            aria-label=""
          />
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
                <span className="text-[#3D3632]">Story excavation and identity mapping. We locate what has shifted, name it precisely, and find the through-line of your evolution that is true, powerful, and built to open doors.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#C9B99A] font-heading text-xl shrink-0">Month 2</span>
                <span className="text-[#3D3632]">Narrative architecture and language refinement. We build the actual story — the one you tell on a stage, in a podcast intro, in a book proposal, in a pitch. We pressure-test it until it is airtight.</span>
              </li>
              <li className="flex gap-4">
                <span className="text-[#C9B99A] font-heading text-xl shrink-0">Month 3</span>
                <span className="text-[#3D3632]">Public positioning and presence. You begin stepping into the rooms you have been circling. You pitch the stage. You record the intro. You own the story publicly. Your return is deliberate, powerful, and entirely yours.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="w-16 h-px bg-[#C9B99A] mx-auto my-16" />

      {/* Proof of concept */}
      <section className="py-24 bg-[#1C1917] text-[#FAF7F2]">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase text-[#9C8E82] mb-8">This works. Here is the proof.</p>
          <h2 className="font-heading text-3xl md:text-5xl font-light leading-snug mb-10">
            Stephanie came out publicly.<br />She burned her life down.<br />Then she built something better.
          </h2>
          <div className="space-y-6 text-[#E8E0D5] leading-relaxed text-lg">
            <p>Not in a vague, inspirational way. In a specific, strategic, terrifying way — and she used every part of it to build one of the most trusted brands in her space.</p>
            <p>That story got her on stages she had no business being on. It made clients choose her over people with bigger platforms and longer track records. It became the foundation of a book she is writing now.</p>
            <p>The story was not the liability. It was the asset. The only question was how to tell it.</p>
            <p className="text-[#FAF7F2] font-heading text-2xl font-light italic pt-4">That is what Influence teaches you to do with yours.</p>
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
                  Readiness is a myth this program dismantles. If you have a story and you know it is bigger than what you have been saying publicly, that is enough. We build the readiness from inside the room.
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
                  Yes — specifically. We build the story that gets you booked, the language that lands in a pitch, and the presence that makes a room remember you. Stages, podcasts, book platforms, thought leadership — this is the foundation all of it sits on.
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
