import Link from "next/link";
import Script from "next/script";
import { Metadata } from "next";

const STRIPE_LINK = "https://buy.stripe.com/28E9ASgRq8Hb4vp14F87K15";

const FIREBASE_IMAGES = {
  hero: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_6978.jpg?alt=media&token=6d0700c6-d2d3-45a7-b050-1b9d00782e64",
  whoThisIsFor: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_7161.jpg?alt=media&token=c52a1b11-e17e-4a08-9218-74a9a13f73b5",
  insideInfluence: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_7053.jpg?alt=media&token=dfb289d5-19ea-4068-8029-ca1829e3053c",
  proof: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_7090.jpg?alt=media&token=88d1e7aa-3ece-44b8-b5a7-8d8b392aecb3",
};

export const metadata: Metadata = {
  title: "Influence Program | Visibility and Authority with Stephanie Rose",
  description: "Influence is a three month identity and story program for founders and leaders ready to turn their evolution into their most powerful brand asset.",
  metadataBase: new URL("https://westrosemedia.com"),
  alternates: { canonical: "/influence" },
  openGraph: {
    title: "Influence Program | Visibility and Authority with Stephanie Rose",
    description: "Influence is a three month identity and story program for founders and leaders ready to turn their evolution into their most powerful brand asset.",
    url: "https://westrosemedia.com/influence",
  },
};

export default function InfluencePage() {
  return (
    <div className="bg-[#FAF7F2] text-[#1C1917] min-h-screen">

      <section className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat md:bg-fixed" style={{ backgroundImage: `url('${FIREBASE_IMAGES.hero}')` }}>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-6 md:px-16 max-w-4xl mx-auto py-32">
          <p className="text-xs md:text-sm tracking-[0.35em] uppercase text-[#C9B99A] mb-8">A three-month room for founders ready to stop editing their story out.</p>
          <h1 className="font-heading text-5xl md:text-7xl font-light leading-tight tracking-tight text-[#FAF7F2] mb-12">The story you keep editing out of your bio is the one that books stages.</h1>
          <div className="text-lg text-[#FAF7F2]/90 max-w-2xl mx-auto mb-12 space-y-5 text-left">
            <p>The past few years rebuilt you. Maybe you came out. Maybe you walked away from a marriage, a partnership, a career, a religion that fit a smaller version of you. Maybe you survived something you have not yet put into words. Maybe you quietly became someone your old brand no longer reflects.</p>
            <p>You are not the founder you were two years ago. When someone asks about your background, you flatten it into something palatable. The polite version. The version that does not require a follow-up question.</p>
            <p>That version is the reason your brand still feels two years behind who you actually are. It is the reason the rooms you want to be in keep moving without you. It is the reason your premium pricing is not converting and the stages are not booking.</p>
            <p>There is a version of your story that gets you on stages. That lands you on podcasts. That makes high-level clients choose you before you finish your sentence. That becomes the foundation of a book, a movement, a body of work that outlasts any single offer.</p>
            <p>She already exists. You have not found the words for her yet.</p>
            <p>INFLUENCE is the room where you find them.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#pricing" className="inline-block bg-[#FAF7F2] text-[#1C1917] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#E8E4DD] transition-colors duration-300 rounded-none">Claim Your Spot</Link>
            <Link href="#who-this-is-for" className="inline-block border border-[#FAF7F2] text-[#FAF7F2] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#FAF7F2] hover:text-[#1C1917] transition-colors duration-300 rounded-none">See If This Is You</Link>
          </div>
          <p className="text-[#C9B99A] font-heading text-xl font-light mt-8">Begins June 1, 2026. Founding pricing while the first group forms.</p>
        </div>
      </section>

      <section className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto" aria-labelledby="enemy-heading">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 id="enemy-heading" className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-10 text-center">The polite version of your story is the most expensive thing you own.</h2>
          <p className="text-lg text-[#3D3632]">Every founder I work with has an edited-out version of her own story. The chapters she leaves off the about page. The sentences she swallows on a podcast. The truth she walks around at every networking event because the polite version is easier to deliver.</p>
          <p className="text-lg text-[#3D3632]">The polite version costs you the keynote. It costs you the book deal. It costs you the client who would have signed at twice the rate if she had heard the real one.</p>
          <p className="text-lg text-[#3D3632]">The market does not reward the founder who hides. It rewards the one who decides what she stands for and broadcasts it. INFLUENCE is the room where you decide.</p>
        </div>
      </section>

      <section id="who-this-is-for" className="relative bg-cover bg-no-repeat md:bg-fixed scroll-mt-24" style={{ backgroundImage: `url('${FIREBASE_IMAGES.whoThisIsFor}')`, backgroundPosition: "center 33%" }} aria-labelledby="who-heading">
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto">
          <h2 id="who-heading" className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#FAF7F2] mb-12 text-center">This is for you if</h2>
          <div className="max-w-2xl mx-auto">
            <ul className="space-y-6">
              <li className="flex gap-4 items-start"><span className="text-[#C9B99A] mt-1 shrink-0">•</span><span className="text-[#FAF7F2]/90">You have been through something real. A coming out, a divorce, a reinvention, a loss. You know it is part of your story and you have been telling the polite version for so long it almost feels true.</span></li>
              <li className="flex gap-4 items-start"><span className="text-[#C9B99A] mt-1 shrink-0">•</span><span className="text-[#FAF7F2]/90">You want to get on stages and podcasts. When someone asks about your background, you freeze, hedge, or flatten it into something palatable.</span></li>
              <li className="flex gap-4 items-start"><span className="text-[#C9B99A] mt-1 shrink-0">•</span><span className="text-[#FAF7F2]/90">You are building toward a book, a keynote, a thought leadership platform. You need a story that can hold the weight of all three.</span></li>
              <li className="flex gap-4 items-start"><span className="text-[#C9B99A] mt-1 shrink-0">•</span><span className="text-[#FAF7F2]/90">The brand presence you have right now is two years behind who you actually are. You want to step into the next version publicly with precision, not chaos.</span></li>
              <li className="flex gap-4 items-start"><span className="text-[#C9B99A] mt-1 shrink-0">•</span><span className="text-[#FAF7F2]/90">You are stepping into the kind of authority that makes premium clients, collaborators, and opportunities come to you. You are not chasing influence. You are building a body of work.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section id="the-shift" className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto" aria-labelledby="shift-heading">
        <h2 id="shift-heading" className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-16 text-center">What changes in three months</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-light text-[#1C1917] mb-6">Right now</h3>
            <ul className="space-y-5 text-[#3D3632]">
              <li className="flex gap-4 items-start"><span className="text-[#C9B99A] shrink-0 mt-1">•</span><span>You know your story is powerful and you cannot find the version of it that lands.</span></li>
              <li className="flex gap-4 items-start"><span className="text-[#C9B99A] shrink-0 mt-1">•</span><span>You shrink when someone asks about your background. The polite version comes out before you have decided to use it.</span></li>
              <li className="flex gap-4 items-start"><span className="text-[#C9B99A] shrink-0 mt-1">•</span><span>You are holding back the most interesting parts of yourself because you are not sure the world is ready. You are not sure you are.</span></li>
              <li className="flex gap-4 items-start"><span className="text-[#C9B99A] shrink-0 mt-1">•</span><span>You are playing a smaller public role than the one you are privately ready for.</span></li>
              <li className="flex gap-4 items-start"><span className="text-[#C9B99A] shrink-0 mt-1">•</span><span>You want to write a book, pitch a stage, land a podcast. The story is not cohesive enough yet to build from.</span></li>
            </ul>
          </div>
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-light text-[#1C1917] mb-6">After INFLUENCE</h3>
            <ul className="space-y-5 text-[#3D3632]">
              <li className="flex gap-4 items-start"><span className="text-[#C9B99A] shrink-0 mt-1">•</span><span>You have a founder story that is sharp, specific, and built to open doors. Stages, podcasts, book deals, premium clients.</span></li>
              <li className="flex gap-4 items-start"><span className="text-[#C9B99A] shrink-0 mt-1">•</span><span>You know exactly what to share, what to hold back, and how to frame the hard parts so they build trust instead of leaving you exposed.</span></li>
              <li className="flex gap-4 items-start"><span className="text-[#C9B99A] shrink-0 mt-1">•</span><span>You speak about your evolution with authority. The apology is gone.</span></li>
              <li className="flex gap-4 items-start"><span className="text-[#C9B99A] shrink-0 mt-1">•</span><span>You walk into rooms, onto stages, onto mics, into pitches knowing your story is your strongest credential.</span></li>
              <li className="flex gap-4 items-start"><span className="text-[#C9B99A] shrink-0 mt-1">•</span><span>The version of you that has been waiting quietly in the background is the one running the brand.</span></li>
            </ul>
          </div>
        </div>
      </section>

      <section id="what-you-get" className="relative bg-cover bg-center bg-no-repeat md:bg-fixed" style={{ backgroundImage: `url('${FIREBASE_IMAGES.insideInfluence}')` }} aria-labelledby="deliverables-heading">
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto">
          <h2 id="deliverables-heading" className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#FAF7F2] mb-12 text-center">Inside Influence</h2>
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-lg text-[#FAF7F2]/90">This is not a content course. There are no templates for Instagram captions here.</p>
            <p className="text-lg text-[#FAF7F2]/90">This is a room for founders ready to do the deeper work. Excavating the story underneath the brand. Finding the version of it that is true, powerful, and built to last. Learning to speak it with the kind of authority that changes the room you walk into.</p>
            <p className="text-lg text-[#FAF7F2]/90">I used my own coming out and the story of burning my entire life down to get on some of the biggest stages I have ever stood on. To build a brand that attracts clients who would follow me anywhere. To begin writing a book that has a spine to write on. That is what a founder story can do when it is built with intention.</p>
            <p className="text-[#FAF7F2] font-heading text-2xl font-light italic pt-2">That is what we do here.</p>
            <h3 className="text-xs tracking-widest uppercase text-[#C9B99A] pt-6">What is included</h3>
            <ul className="space-y-6 pt-4 text-lg">
              <li className="flex gap-4 items-start"><span className="text-[#C9B99A] mt-1 shrink-0">•</span><span className="text-[#FAF7F2]/90"><strong className="font-medium text-[#FAF7F2]">Live calls across three months.</strong> Strategic working sessions where we excavate, refine, and pressure-test your story in real time.</span></li>
              <li className="flex gap-4 items-start"><span className="text-[#C9B99A] mt-1 shrink-0">•</span><span className="text-[#FAF7F2]/90"><strong className="font-medium text-[#FAF7F2]">Group support between calls.</strong> Bring your drafts, your pitches, your speaker bios, your about pages, your moments of doubt. You will not figure this out alone.</span></li>
              <li className="flex gap-4 items-start"><span className="text-[#C9B99A] mt-1 shrink-0">•</span><span className="text-[#FAF7F2]/90"><strong className="font-medium text-[#FAF7F2]">A structured story mapping process.</strong> We locate the moments that matter, decide what earns its place in your public narrative, and build a founder story that is both true and strategic.</span></li>
              <li className="flex gap-4 items-start"><span className="text-[#C9B99A] mt-1 shrink-0">•</span><span className="text-[#FAF7F2]/90"><strong className="font-medium text-[#FAF7F2]">Live hot seat refinement.</strong> Your language gets sharper every week. We work on how you introduce yourself, how you pitch a stage, how you open a keynote, how you answer &quot;so what do you do&quot; in a way that makes people lean in.</span></li>
              <li className="flex gap-4 items-start"><span className="text-[#C9B99A] mt-1 shrink-0">•</span><span className="text-[#FAF7F2]/90"><strong className="font-medium text-[#FAF7F2]">Visibility reps.</strong> You will practice speaking your story, pitching your narrative, and stepping into the public role you are building inside a supported room before you take it into the world.</span></li>
              <li className="flex gap-4 items-start"><span className="text-[#C9B99A] mt-1 shrink-0">•</span><span className="text-[#FAF7F2]/90"><strong className="font-medium text-[#FAF7F2]">A small, intentional room.</strong> Everyone in the room is navigating real transformation. You are not hiding in the background here.</span></li>
            </ul>
            <p className="text-[#FAF7F2]/70 text-base pt-2">Calls are recorded. Group support remains open for the full three months.</p>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto" aria-labelledby="how-heading">
        <h2 id="how-heading" className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-12 text-center">How it works</h2>
        <div className="max-w-2xl mx-auto space-y-8">
          <p className="text-lg text-[#3D3632] text-center">Three months. One small group. One clear through-line. Led by Stephanie Rose.</p>
          <ul className="space-y-8 pt-4">
            <li className="flex flex-col gap-3 md:flex-row md:gap-6 md:items-start"><span className="text-[#C9B99A] font-heading text-2xl font-light shrink-0 md:w-36">Month 1 — Excavate</span><span className="text-[#3D3632] text-lg">Story excavation and identity mapping. We locate what has shifted, name it precisely, and find the through-line of your evolution that is true, powerful, and built to open doors.</span></li>
            <li className="flex flex-col gap-3 md:flex-row md:gap-6 md:items-start"><span className="text-[#C9B99A] font-heading text-2xl font-light shrink-0 md:w-36">Month 2 — Architect</span><span className="text-[#3D3632] text-lg">Narrative architecture and language refinement. We build the actual story. The one you tell on a stage, in a podcast intro, in a book proposal, in a pitch. We pressure-test it until it is airtight.</span></li>
            <li className="flex flex-col gap-3 md:flex-row md:gap-6 md:items-start"><span className="text-[#C9B99A] font-heading text-2xl font-light shrink-0 md:w-36">Month 3 — Step Into It</span><span className="text-[#3D3632] text-lg">Public positioning and presence. You begin stepping into the rooms you have been circling. You pitch the stage. You record the intro. You own the story publicly. Your return is deliberate, powerful, and entirely yours.</span></li>
          </ul>
        </div>
      </section>

      <section className="relative bg-cover bg-center bg-no-repeat md:bg-fixed" style={{ backgroundImage: `url('${FIREBASE_IMAGES.proof}')` }}>
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 py-24 md:py-32 px-6 md:px-12 max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#FAF7F2] mb-10">Who is leading this room</h2>
          <div className="space-y-6 text-[#FAF7F2]/85 leading-relaxed text-lg">
            <p>Stephanie Rose is the founder and creative director of West Rose Media. She is the one who came out publicly. She is the one who burned her life down. She is the one who built something better on the back of that decision.</p>
            <p>The story is the reason she stands on the stages she does. It is the reason clients choose her before she finishes a sentence. It is the spine of the book she is writing now.</p>
            <p className="text-[#FAF7F2] font-heading text-2xl font-light italic pt-4">INFLUENCE is the room where she teaches founders to do the same with their own.</p>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto scroll-mt-24" aria-labelledby="pricing-heading">
        <div className="text-center max-w-2xl mx-auto">
          <h2 id="pricing-heading" className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-4">Join INFLUENCE</h2>
          <p className="text-[#C9B99A] font-heading text-xl font-light mb-8">Begins June 1, 2026.</p>
          <p className="text-lg text-[#3D3632] mb-10">Founding pricing while the first group forms. When the round fills, enrollment closes. The June 1 start is fixed.</p>
          <div className="border border-[#C9B99A]/40 bg-white/60 p-6 md:p-8 text-left mb-10">
            <h3 className="text-xs tracking-widest uppercase text-[#9C8E82] mb-5 text-center">Pricing</h3>
            <ul className="space-y-3 text-[#3D3632] text-lg">
              <li className="flex gap-3"><span className="text-[#C9B99A]">•</span><span>One payment of $3,200 CAD.</span></li>
              <li className="flex gap-3"><span className="text-[#C9B99A]">•</span><span>Three payments of $1,100 CAD paid monthly.</span></li>
              <li className="flex gap-3"><span className="text-[#C9B99A]">•</span><span>Six payments of $550 CAD paid monthly.</span></li>
            </ul>
          </div>
          <div className="space-y-4 text-[#3D3632] text-lg mb-10">
            <h3 className="text-xs tracking-widest uppercase text-[#9C8E82]">What you get when you join</h3>
            <p>The program begins June 1, 2026. That is when access opens. Before then, onboarding materials and preliminary story work will arrive so you do not walk into the first call cold. By the time the program begins, you will already have started.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link href={STRIPE_LINK} className="inline-block bg-[#1C1917] text-[#FAF7F2] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#3D3632] transition-colors duration-300 rounded-none">Claim My Seat</Link>
            <Link href="#payment-options" className="inline-block border border-[#1C1917] text-[#1C1917] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#1C1917] hover:text-[#FAF7F2] transition-colors duration-300 rounded-none">Choose Payment Plan</Link>
          </div>
          <div id="payment-options" className="scroll-mt-24">
            <Script async src="https://js.stripe.com/v3/pricing-table.js" strategy="afterInteractive" />
            {/* @ts-expect-error stripe-pricing-table is a custom web component */}
            <stripe-pricing-table pricing-table-id="prctbl_1T84PcCcsY3WjV3QWIBe5vOW" publishable-key="pk_live_51MSOJeCcsY3WjV3Q0h4k8hC7da1piQaQSHx6ukPgWe3hkxDR4GsmfEDah7RoIkH6k9Qln3ups7flMXSS3kuAMhdL005i3wmuav"></stripe-pricing-table>
          </div>
          <p className="text-sm text-[#9C8E82] mt-8">When this round fills, the next opens at standard pricing.</p>
        </div>
      </section>

      <section id="faq" className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto" aria-labelledby="faq-heading">
        <div className="max-w-2xl mx-auto">
          <h2 id="faq-heading" className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-12 text-center">Frequently asked questions</h2>
          <ul className="space-y-4 list-none p-0 m-0">
            {[
              { q: "What if I am not sure I am ready?", a: "Readiness is the thing this program builds. If you have a story and you know it is bigger than the polite version you have been telling, that is enough. We build the readiness inside the room, on the calls, in the reps." },
              { q: "Is this about becoming an influencer?", a: "No. This is about becoming visible in a way that aligns with your integrity and your leadership. Authority, not algorithm." },
              { q: "What if I am going through something personal right now?", a: "That is often exactly why this program works. Big life shifts create the most powerful stories. We make sure you share yours in a way that strengthens you, not in a way that bleeds in public." },
              { q: "How much time does this require?", a: "Each live call runs 60 minutes. Group support between calls. Story and language work between sessions. The goal is integration, not overwhelm." },
              { q: "Will this help me speak on stages or grow my presence?", a: "Yes, specifically. We build the story that gets you booked, the language that lands in a pitch, and the presence that makes a room remember you. Stages, podcasts, book platforms, thought leadership. INFLUENCE is the foundation all of it sits on." },
              { q: "What if I am scared of judgment?", a: "Everyone in the room understands that fear. Courage grows through repetition and support. By month three, the fear is still there and you have learned to walk past it." },
              { q: "What happens if the round fills before I decide?", a: "Enrollment closes. The next round opens at standard pricing. There is no waitlist for founding pricing." },
              { q: "Is there a payment plan?", a: "Three monthly payments of $1,100 CAD or six monthly payments of $550 CAD. Both end before the program does. If you need a different structure, email admin@westrosemedia.com." },
            ].map(({ q, a }) => (
              <li key={q}>
                <details className="group border border-[#C9B99A]/30 bg-[#FAF7F2] overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 py-4 px-5 cursor-pointer list-none font-medium text-[#1C1917] hover:bg-[#F5F2ED] transition-colors [&::-webkit-details-marker]:hidden [&::marker]:hidden">
                    {q}
                    <span className="shrink-0 text-[#9C8E82] group-open:rotate-180 transition-transform" aria-hidden>▼</span>
                  </summary>
                  <div className="px-5 pb-4 pt-3 text-[#3D3632] border-t border-[#C9B99A]/20">{a}</div>
                </details>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="final-cta" className="bg-[#1C1917] text-[#FAF7F2]" aria-labelledby="final-cta-heading">
        <div className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto text-center">
          <h2 id="final-cta-heading" className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#FAF7F2] mb-6">Your life is already shifting. Now your voice needs to catch up.</h2>
          <p className="text-lg text-[#FAF7F2]/90 max-w-xl mx-auto mb-4">You are not waiting for permission. You are waiting for the language. INFLUENCE is the room where you build it.</p>
          <p className="text-[#C9B99A] font-heading text-xl font-light mb-10">Begins June 1, 2026. Founding pricing while the first group forms.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#pricing" className="inline-block bg-[#FAF7F2] text-[#1C1917] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#E8E4DD] transition-colors duration-300 rounded-none">I&apos;m Ready. Secure My Spot.</Link>
            <Link href="#pricing" className="inline-block border border-[#FAF7F2] text-[#FAF7F2] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#FAF7F2] hover:text-[#1C1917] transition-colors duration-300 rounded-none">Claim Your Spot</Link>
          </div>
          <p className="text-sm text-[#FAF7F2]/60 mt-4">Founding pricing ends when the first round fills.</p>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#FAF7F2] border-t border-[#C9B99A]/30 md:hidden" aria-label="Mobile call to action">
        <Link href="#pricing" className="block w-full py-4 text-center rounded-none bg-[#1C1917] text-[#FAF7F2] text-sm tracking-widest uppercase font-medium hover:bg-[#3D3632] transition-colors duration-300">Claim My Seat</Link>
      </div>
      <div className="h-20 md:hidden" aria-hidden />

    </div>
  );
}
