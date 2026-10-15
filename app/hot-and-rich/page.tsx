import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";

const STRIPE_PUBLISHABLE_KEY =
  "pk_live_51MSOJeCcsY3WjV3Q0h4k8hC7da1piQaQSHx6ukPgWe3hkxDR4GsmfEDah7RoIkH6k9Qln3ups7flMXSS3kuAMhdL005i3wmuav";
const STRIPE_PRICING_TABLE_ID = "prctbl_1UPnW7CcsY3WjV3QeRAgTkFI";
const WILDLY_WEALTHY_LIVE_URL = "https://www.wildlywealthywomanlive.com/";

const IMAGES = {
  hero: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/car%2FS%26K_ENGAGEMENT_FINALS_47.jpg?alt=media&token=0596c414-5c23-483c-837c-54c3c79a51fd",
  story: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/car%2FS%26K_ENGAGEMENT_FINALS_29.jpg?alt=media&token=f8526ad2-3e66-4dd4-a263-b5df4189e922",
  inside: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/car%2FS%26K_ENGAGEMENT_FINALS_30.jpg?alt=media&token=aa72939d-a43c-4743-affc-05f4fd9e669d",
};

const META = {
  title: "Hot and Rich Mastermind | West Rose Media",
  description:
    "Hot and Rich starts November 15. Five spots. $6,000 CAD for four months with Stephanie, plus a ticket to Wildly Wealthy Woman Live in Banff, March 2027.",
};

export const revalidate = 0;

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  metadataBase: new URL("https://westrosemedia.com"),
  alternates: { canonical: "/hot&rich" },
  openGraph: {
    title: META.title,
    description: META.description,
    url: "https://westrosemedia.com/hot&rich",
  },
};

const ctaLinkClass =
  "inline-block bg-[#FAF7F2] text-[#1C1917] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#E8E4DD] transition-colors duration-300 rounded-none";

const forYou = [
  "You already sell something, and the people who buy it get results",
  "You’re getting views, and the sales aren’t coming from your content",
  "You’ve done the freebies, the masterclasses, the seven-day video series, and almost nobody converted",
  "You want your content to do the heavy lifting of selling, you’ve heard that’s possible, and you haven’t seen it happen yet",
  "You want someone in your corner who looks at your actual business and sees the blind spots you can’t see from inside it",
  "You’re tired, and you need a few wins to feel momentum again before you pour yourself back in",
];

const questions = [
  {
    q: "I’ve tried freebies and masterclasses and almost nobody converted. Why would this be different?",
    a: "Freebies and masterclasses convert when the content in front of them is clear about who you help and what you sell. When that part is fuzzy, people take the free thing and stay exactly where they were. We fix the clarity first, so whatever you put in front of people has something to convert.",
  },
  {
    q: "I’m burnt out on my business. Should I wait until I feel ready?",
    a: "Come as you are, tired included. The first goal is getting something to move: a post that pulls in the right people, a DM that turns into a real conversation, a sale that came from your content. Momentum is what brings the energy back.",
  },
  {
    q: "What if I’m unsure about joining another container?",
    a: "Reply to any of my emails or DM me the word MASTERMIND and ask me whatever you need to. Asking a question commits you to nothing.",
  },
];

function JoinNowButton({ className }: { className?: string }) {
  return (
    <Link href="#pricing" className={className ?? ctaLinkClass}>
      Join Now
    </Link>
  );
}

function StripePricingTable() {
  return (
    <>
      <Script async src="https://js.stripe.com/v3/pricing-table.js" strategy="afterInteractive" />
      {/* @ts-expect-error stripe-pricing-table is a custom web component */}
      <stripe-pricing-table
        pricing-table-id={STRIPE_PRICING_TABLE_ID}
        publishable-key={STRIPE_PUBLISHABLE_KEY}
      />
    </>
  );
}

export default function HotAndRichPage() {
  return (
    <div className="bg-[#FAF7F2] text-[#1C1917] min-h-screen">
      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url('${IMAGES.hero}')` }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-6 md:px-16 max-w-4xl mx-auto py-32">
          <h1 className="font-heading text-5xl md:text-7xl font-light leading-tight tracking-tight text-[#FAF7F2] mb-12">
            Hot and Rich Mastermind
          </h1>
          <div className="text-lg text-[#FAF7F2]/90 max-w-2xl mx-auto mb-12 space-y-5 text-left">
            <p>
              Not to freak you out, but women usually find my account right before they do
              something REALLY big.
            </p>
            <p>
              I posted that sentence and it brought me 6,022 new followers on Instagram and 10,000
              on TikTok. If you just found me, I&apos;d bet you&apos;re one of those women.
            </p>
            <p>Every problem in your business comes down to two things: clarity and views.</p>
            <p>
              If you&apos;re here, you probably have the views already. You&apos;re posting every
              day, the numbers are climbing, and the sales still aren&apos;t coming from it. The
              missing half is clarity: knowing exactly what to say so the people watching decide to
              buy.
            </p>
            <p>Hot and Rich starts November 15. There are five spots.</p>
          </div>
          <JoinNowButton />
        </div>
      </section>

      <section
        className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto"
        aria-labelledby="drain-heading"
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <h2
            id="drain-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-10 text-center"
          >
            You&apos;re putting everything into your business and getting almost nothing back
          </h2>
          <p className="text-lg text-[#3D3632]">
            You spend three full days a week on content. Filming, editing, tracking your data,
            rewriting hooks, filming again. Two reels a day, most of them talking to camera, because
            your data says that&apos;s where the saves and shares come from.
          </p>
          <p className="text-lg text-[#3D3632]">
            On paper, it&apos;s working. Tens of thousands of views a month. Keyword DMs coming in.
            A handful of those turn into sales conversations.
          </p>
          <p className="text-lg text-[#3D3632]">
            Then the conversations go nowhere. When you look at where your last few clients came
            from, it was referrals and people who already knew you. Your content didn&apos;t close
            them.
          </p>
          <p className="text-lg text-[#3D3632]">
            You like your content. You say the taboo thing, you share your story, you show up. Your
            funnel looks solid. That&apos;s what makes it so maddening, because you can&apos;t find
            where people are getting lost, so you can&apos;t fix it.
          </p>
          <p className="text-lg text-[#3D3632]">
            It turns into a loop. What am I doing wrong? Is it the hook? The length? The CTA? You
            end up picking apart work you actually believe in, and that wears you down in a way that
            has nothing to do with the hours.
          </p>
          <p className="text-lg text-[#3D3632]">
            Somewhere in there, your relationship with your business gets murky. It starts to feel
            like a drain. You&apos;re someone who keeps going until things go, and lately
            you&apos;ve been wondering how much longer you can keep doing this.
          </p>
          <p className="text-lg text-[#1C1917] font-medium">
            I built Hot and Rich for exactly this point in a business.
          </p>
        </div>
      </section>

      <section
        className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto border-t border-[#C9B99A]/30"
        aria-labelledby="for-you-heading"
      >
        <div className="max-w-2xl mx-auto">
          <h2
            id="for-you-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-10 text-center"
          >
            This is for you if
          </h2>
          <ul className="space-y-6 text-lg">
            {forYou.map((item) => (
              <li key={item} className="flex gap-4 items-start">
                <span className="text-[#C9B99A] mt-1 shrink-0">-</span>
                <span className="text-[#3D3632]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section
        className="relative bg-cover bg-no-repeat md:bg-fixed"
        style={{
          backgroundImage: `url('${IMAGES.story}')`,
          backgroundPosition: "center 33%",
        }}
        aria-labelledby="breaking-heading"
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2
              id="breaking-heading"
              className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#FAF7F2] mb-10 text-center"
            >
              Where it&apos;s breaking
            </h2>
            <p className="text-lg text-[#FAF7F2]/90">
              Views get people to watch. Clarity gets them to buy. When you have the first without
              the second, people enjoy your videos, save them, maybe follow you, and leave without
              ever deciding you&apos;re the person to hire.
            </p>
            <p className="text-lg text-[#FAF7F2]/90">
              It usually shows up in small places. The offer gets explained at the end of a
              two-minute video most people never finish. The sales page is beautiful and nobody can
              tell what they&apos;re buying. The hook pulls in viewers who were never going to be
              clients.
            </p>
            <p className="text-lg text-[#FAF7F2]/90">
              None of those feel like big problems on their own. Together, they&apos;re the leak.
            </p>
            <p className="text-lg text-[#FAF7F2]/90">
              Hot and Rich finds yours. With five people in the room, I have time to look at your
              business specifically: your content, your numbers, your offer, and where the people
              watching you are dropping off.
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto"
        aria-labelledby="burned-heading"
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <h2
            id="burned-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-10 text-center"
          >
            If you&apos;ve been burned by a coach before
          </h2>
          <p className="text-lg text-[#3D3632]">Bad coaching happens to good people.</p>
          <p className="text-lg text-[#3D3632]">
            Maybe you paid for a container that promised one thing and delivered something much
            smaller. Maybe you learned a strategy built by someone with fifteen years and eight
            figures behind them, and it was the wrong strategy for where you are. Good strategy,
            wrong time.
          </p>
          <p className="text-lg text-[#3D3632]">
            I&apos;ve been there too. I&apos;ve paid a coach around $2,000 USD a month and walked
            away with far less than I was promised.
          </p>
          <p className="text-lg text-[#3D3632]">
            Hot and Rich is $6,000 CAD for four months. That works out to $1,500 a month, with me
            running the exact strategy on my own account in real time, and only five people in the
            room so you get my full attention.
          </p>
          <p className="text-lg text-[#1C1917] font-medium">
            You&apos;re right to want proof before you make a bigger move. Here&apos;s mine.
          </p>
        </div>
      </section>

      <section
        id="results"
        className="relative bg-cover bg-center bg-no-repeat md:bg-fixed scroll-mt-24"
        style={{ backgroundImage: `url('${IMAGES.inside}')` }}
        aria-labelledby="results-heading"
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto">
          <h2
            id="results-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#FAF7F2] mb-16 text-center"
          >
            Where it stands, four months later
          </h2>
          <div className="max-w-2xl mx-auto space-y-6 text-lg text-[#FAF7F2]/90">
            <p>On June 15, the new account had zero followers.</p>
            <p>
              Today it has 30,200 followers on Instagram, with 2.3 million views in the last 30
              days.
            </p>
            <p>
              On TikTok, I&apos;m at 17,800 followers and 1.3 million views in the last 30 days.
            </p>
            <p className="font-heading text-2xl font-light text-[#FAF7F2] text-center pt-4">
              Four months. That&apos;s exactly how long Hot and Rich runs.
            </p>
          </div>
        </div>
      </section>

      <section
        className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto"
        aria-labelledby="questions-heading"
      >
        <div className="max-w-2xl mx-auto">
          <h2
            id="questions-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-12 text-center"
          >
            Questions you might be sitting with
          </h2>
          <div className="space-y-12">
            {questions.map((item) => (
              <div key={item.q}>
                <h3 className="font-heading text-2xl md:text-3xl font-light leading-snug text-[#1C1917] mb-4">
                  {item.q}
                </h3>
                <p className="text-lg text-[#3D3632]">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto scroll-mt-24 border-t border-[#C9B99A]/30"
        aria-labelledby="pricing-heading"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2
            id="pricing-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#1C1917] mb-10"
          >
            The price
          </h2>
          <div className="space-y-4 text-lg text-[#3D3632] mb-10">
            <p>$6,000 CAD for four months.</p>
            <p>Five spots. The new round starts November 15.</p>
            <p>
              Includes your ticket to{" "}
              <a
                href={WILDLY_WEALTHY_LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-[#1C1917]"
              >
                Wildly Wealthy Woman Live
              </a>
              , Banff, March 2027.
            </p>
          </div>
          <StripePricingTable />
        </div>
      </section>

      <section id="final-cta" className="bg-[#1C1917] text-[#FAF7F2]" aria-labelledby="final-cta-heading">
        <div className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto text-center">
          <h2
            id="final-cta-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#FAF7F2] mb-6"
          >
            If you&apos;ve been waiting for a sign
          </h2>
          <p className="text-lg text-[#FAF7F2]/90 max-w-2xl mx-auto mb-4">
            You have the offer, the client results and the views. What&apos;s missing is clarity on
            what to say so the people watching you buy, and someone in your corner who can see what
            you can&apos;t.
          </p>
          <p className="text-lg text-[#FAF7F2]/90 max-w-2xl mx-auto mb-4">
            Five spots. Four months with me in the room, then a seat in Banff at Wildly Wealthy
            Woman Live.
          </p>
          <p className="text-lg text-[#FAF7F2]/90 max-w-2xl mx-auto mb-10">We start November 15.</p>
          <JoinNowButton />
        </div>
      </section>

      <div
        className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#FAF7F2] border-t border-[#C9B99A]/30 md:hidden"
        aria-label="Mobile call to action"
      >
        <JoinNowButton className="block w-full py-4 text-center rounded-none bg-[#1C1917] text-[#FAF7F2] text-sm tracking-widest uppercase font-medium hover:bg-[#3D3632] transition-colors duration-300" />
      </div>
      <div className="h-20 md:hidden" aria-hidden />
    </div>
  );
}
