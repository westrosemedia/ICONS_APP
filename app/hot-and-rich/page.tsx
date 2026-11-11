import Link from "next/link";
import Script from "next/script";
import type { Metadata } from "next";
import InstagramReel from "@/components/InstagramReel";
import PaletteBand from "@/components/agency/PaletteBand";

const STRIPE_PUBLISHABLE_KEY =
  "pk_live_51MSOJeCcsY3WjV3Q0h4k8hC7da1piQaQSHx6ukPgWe3hkxDR4GsmfEDah7RoIkH6k9Qln3ups7flMXSS3kuAMhdL005i3wmuav";
const STRIPE_PRICING_TABLE_ID = "prctbl_1UPnW7CcsY3WjV3QeRAgTkFI";
const WILDLY_WEALTHY_LIVE_URL = "https://www.wildlywealthywomanlive.com/";
const INSTAGRAM_URL = "https://www.instagram.com/westrosemedia/";


const IMAGES = {
  hero: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/car%2FS%26K_ENGAGEMENT_FINALS_47.jpg?alt=media&token=0596c414-5c23-483c-837c-54c3c79a51fd",
  story: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/car%2FS%26K_ENGAGEMENT_FINALS_29.jpg?alt=media&token=f8526ad2-3e66-4dd4-a263-b5df4189e922",
  inside: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/car%2FS%26K_ENGAGEMENT_FINALS_30.jpg?alt=media&token=aa72939d-a43c-4743-affc-05f4fd9e669d",
};

const META = {
  title: "Hot and Rich Mastermind | West Rose Media",
  description:
    "Hot and Rich opens in January. $6,000 CAD for four months. Every member gets a ticket to Wildly Wealthy Woman Live in Banff, March 2027.",
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
  "inline-block bg-[#F4F4F4] text-[#020405] px-10 py-4 text-sm tracking-widest uppercase font-medium hover:bg-[#CCCCCE] transition-colors duration-300 rounded-none";

const included = [
  "Biweekly live calls with me",
  "Text support inside the group, three days a week",
  "The exact strategy I'm running on my own account right now",
  "A room small enough that I know your business inside and out",
];

const questions = [
  {
    q: "Do I need a big following first?",
    a: "You can start wherever you are. I signed my first client on the new account at 1,000 followers.",
  },
  {
    q: "I've tried freebies and masterclasses and almost nobody converted. Why would this be different?",
    a: "Freebies and masterclasses convert when the content in front of them is clear about who you help and what you sell. When that part is fuzzy, people take the free thing and stay exactly where they were. We sharpen the message first, so whatever you put in front of people has something to convert.",
  },
  {
    q: "What if I'm unsure about joining another container?",
    a: "DM me on Instagram and ask me whatever you need to. Asking a question commits you to nothing.",
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
    <div className="bg-[#020405] text-[#F4F4F4] min-h-screen">
      <div className="sticky top-[73px] z-30">
        <PaletteBand href="#pricing" blue="Opens in January." camel="$6,000 CAD for four months." />
      </div>

      <section
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url('${IMAGES.hero}')` }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 text-center px-6 md:px-16 max-w-4xl mx-auto py-32">
          <h1 className="font-heading text-5xl md:text-7xl font-light leading-tight tracking-tight text-[#F4F4F4] mb-12">
            Hot and Rich Mastermind
          </h1>
          <div className="text-lg text-[#F4F4F4]/90 max-w-2xl mx-auto mb-12 space-y-5 text-left">
            <p>
              Women find my account right before they get big. Usually it&apos;s in their fuck this
              moment.
            </p>
            <p>
              You already have the clients and the results to prove you&apos;re good at what you do.
              You&apos;ve paid people to help you get found online, you did everything they told
              you, and you&apos;re still watching women with half your skill pass you on Instagram.
            </p>
            <p>
              That&apos;s when you find me. It&apos;s the same moment I hit, right before I built
              the account I have now.
            </p>
            <p>
              Hot and Rich opens in January.
            </p>
          </div>
          <JoinNowButton />
        </div>
      </section>

      <section
        className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto"
        aria-labelledby="moment-heading"
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <h2
            id="moment-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#F4F4F4] mb-10 text-center"
          >
            My fuck this moment
          </h2>
          <p className="text-lg text-[#CCCCCE]">
            I paid a marketing coach $20,000 to fix my Instagram.
          </p>
          <p className="text-lg text-[#CCCCCE]">
            Her advice was to post more and yap more. When I asked what to post to make sales, she
            couldn&apos;t tell me, even though that was her whole marketing pitch for the program.
          </p>
          <p className="text-lg text-[#CCCCCE]">
            I did it anyway. I&apos;d paid for it, and I assumed she knew something I didn&apos;t. I
            watched the big accounts and copied what they were doing. I wanted to be like them more
            than I wanted to be me.
          </p>
          <p className="text-lg text-[#CCCCCE]">
            For years my account sat under 7k. My business was good. It was never amazing, and I
            couldn&apos;t figure out why all that posting wasn&apos;t turning into more.
          </p>
          <p className="text-lg text-[#CCCCCE]">
            Then on June 15 I lost the account completely in a mass-reporting campaign. Seven years
            of posts, gone overnight.
          </p>
          <p className="text-lg text-[#F4F4F4] font-medium">
            That night I started a new account and made one decision. I was done listening to
            everyone else.
          </p>
        </div>
      </section>

      <section
        className="relative bg-cover bg-no-repeat md:bg-fixed"
        style={{
          backgroundImage: `url('${IMAGES.story}')`,
          backgroundPosition: "center 33%",
        }}
        aria-labelledby="quit-listening-heading"
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2
              id="quit-listening-heading"
              className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#F4F4F4] mb-10 text-center"
            >
              What happened when I quit listening
            </h2>
            <p className="text-lg text-[#F4F4F4]/90">
              On the new account, I said exactly what I thought, and I said it fast. Every post was
              about what actually matters to the women I want to work with, including the things
              people don&apos;t love hearing.
            </p>
            <p className="text-lg text-[#F4F4F4]/90">
              The sharper I got, the faster I grew. I turned my message into a butcher knife.
            </p>
            <p className="text-lg text-[#F4F4F4]/90">
              I signed my first client on that account at 1,000 followers. One post brought in
              6,022 new followers. Today I&apos;m at 34,200 followers on Instagram with 2.7 million
              views in the last 30 days, and 19,000 followers on TikTok with 1.1 million views in
              the last 30 days. All of it since June 15.
            </p>
            <p className="text-lg text-[#F4F4F4]/90">
              My business grew right along with the followers.
            </p>
            <p className="font-heading text-2xl font-light text-[#F4F4F4] pt-4">
              This is the moment I took my power back:
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 px-6 md:px-12 max-w-3xl mx-auto" aria-label="Instagram reel">
        <InstagramReel />
        <p className="text-lg text-[#CCCCCE] max-w-2xl mx-auto mt-10">
          I took it back from the $20K coach who told me to post more, from the haters who
          cancelled me for being gay, and from every voice that told me how this was supposed to be
          done.
        </p>
      </section>

      <section
        className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto border-t border-[#CCCCCE]/30"
        aria-labelledby="advice-heading"
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <h2
            id="advice-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#F4F4F4] mb-10 text-center"
          >
            Why the advice you paid for kept you invisible
          </h2>
          <p className="text-lg text-[#CCCCCE]">
            If you did the yap challenge and it didn&apos;t work, I can tell you why.
          </p>
          <p className="text-lg text-[#CCCCCE]">
            Messy action is the number one way people break their algorithm. Every post without a
            clear design behind it is one more random thing thrown at Instagram, and every random
            thing makes it harder for your audience to know what you stand for. The more you throw,
            the more of them you lose.
          </p>
          <p className="text-lg text-[#CCCCCE]">
            The women who blow up stack content that makes them the authority in their space. Each
            post sharpens the same message, so when someone finds them, one video is enough to know
            exactly who she is and why they should buy from her.
          </p>
          <p className="text-lg text-[#CCCCCE]">
            A message that sharp signs clients at 1,000 followers. I&apos;ve done it, and you can
            skip the wait for 50K.
          </p>
          <p className="text-lg text-[#F4F4F4] font-medium">
            If your coach told you to take messy action, she doesn&apos;t know social media. You did
            exactly what you paid someone to tell you to do. Bad coaching happens to good people.
          </p>
        </div>
      </section>

      <section
        className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto"
        aria-labelledby="proof-heading"
      >
        <div className="max-w-2xl mx-auto">
          <h2
            id="proof-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#F4F4F4] mb-12 text-center"
          >
            Proof from my clients
          </h2>
          <div className="space-y-6 text-lg text-[#CCCCCE] mb-12">
            <p>
              When one of my Hot and Rich members came to me, she was posting four times a day and
              getting 9 views per post. Every post lost her followers. Her membership had held the
              same 3 clients for years.
            </p>
            <p>
              Now she posts once a day and gets 60,000 views. She just sold 4 new people into her
              membership.
            </p>
            <p>Here&apos;s what she sent me:</p>
          </div>
          <blockquote className="mb-12 text-center">
            <p className="font-heading text-2xl md:text-3xl font-light leading-snug text-[#F4F4F4] mb-6">
              &quot;You&apos;ve challenged me, stretched me, made me laugh, made me scream, and made
              me question myself (in the BEST way). Thank you for never letting me settle for
              beautifully boring crappy content and hooks. You&apos;ve pushed me to remove the
              crutch ChatGPT has been for the last several years and to truly step into this season
              of growth.&quot;
            </p>
            <footer className="text-sm tracking-widest uppercase text-[#9C8E82]">
              Hot and Rich Mastermind member
            </footer>
          </blockquote>
          <blockquote className="mb-12 text-center">
            <p className="font-heading text-2xl md:text-3xl font-light leading-snug text-[#F4F4F4] mb-6">
              &quot;Every single time I work with Stephanie, I make more money.&quot;
            </p>
            <footer className="text-sm tracking-widest uppercase text-[#9C8E82]">
              Cheryl, online coach
            </footer>
          </blockquote>
          <p className="text-lg text-[#CCCCCE]">
            Another client started with a brand-new account at zero followers. She&apos;s now
            sitting on consistent $10K months.
          </p>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center bg-no-repeat md:bg-fixed"
        style={{ backgroundImage: `url('${IMAGES.inside}')` }}
        aria-labelledby="inside-heading"
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto">
          <div className="max-w-2xl mx-auto space-y-6">
            <h2
              id="inside-heading"
              className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#F4F4F4] mb-10 text-center"
            >
              What happens inside Hot and Rich
            </h2>
            <p className="text-lg text-[#F4F4F4]/90">
              You bring me your messy thought, the idea you know is good and can&apos;t quite say
              yet. I turn it into a samurai sword that cuts through the BS and gets you clients.
            </p>
            <p className="text-lg text-[#F4F4F4]/90">
              Then we do it again, every two weeks for four months, on your actual content and your
              actual offer, until every post you make is stacking your authority.
            </p>
            <p className="text-lg text-[#F4F4F4]/90">
              The right person gets you out of your own way. In this room, that&apos;s my job.
            </p>
            <h3 className="text-xs tracking-widest uppercase text-[#916545] pt-6">
              What&apos;s included
            </h3>
            <ul className="space-y-6 pt-2 text-lg">
              {included.map((item) => (
                <li key={item} className="flex gap-4 items-start">
                  <span className="text-[#916545] mt-1 shrink-0">-</span>
                  <span className="text-[#F4F4F4]/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto"
        aria-labelledby="best-problem-heading"
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <h2
            id="best-problem-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#F4F4F4] mb-10 text-center"
          >
            The best problem you&apos;ll have
          </h2>
          <p className="text-lg text-[#CCCCCE]">
            When your content starts working, your DMs change. People start asking whether you have
            room for them 1:1.
          </p>
          <p className="text-lg text-[#CCCCCE]">
            That&apos;s what&apos;s happening to my clients right now. People are beating down their
            door to work with them directly. It&apos;s the best problem you&apos;ll ever have.
          </p>
        </div>
      </section>

      <section
        className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto border-t border-[#CCCCCE]/30"
        aria-labelledby="for-you-heading"
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <h2
            id="for-you-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#F4F4F4] mb-10 text-center"
          >
            This is for you if
          </h2>
          <p className="text-lg text-[#CCCCCE]">
            You already sell something, and your clients get results. The part you can&apos;t crack
            is getting found online. You&apos;ve paid people, posted every day, done the challenges,
            and you still feel invisible to the women who should be buying from you.
          </p>
          <p className="text-lg text-[#F4F4F4] font-medium">
            You&apos;re exactly who I built this for.
          </p>
        </div>
      </section>

      <section
        className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto"
        aria-labelledby="coach-heading"
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <h2
            id="coach-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#F4F4F4] mb-10 text-center"
          >
            About that $20K coach
          </h2>
          <p className="text-lg text-[#CCCCCE]">
            I paid $20,000 to be told to post more. We&apos;re not doing that here.
          </p>
          <p className="text-lg text-[#CCCCCE]">
            Hot and Rich is $6,000 CAD for four months. That&apos;s $1,500 a month, with me running
            the same strategy on my own account in real time, in a room small enough that you get
            my full attention.
          </p>
        </div>
      </section>

      <section
        className="bg-[#020405] text-[#F4F4F4] py-24 md:py-32 px-6 md:px-12"
        aria-labelledby="only-way-heading"
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <h2
            id="only-way-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug mb-10 text-center"
          >
            Hot and Rich opens in January
          </h2>
          <p className="text-lg text-[#F4F4F4]/90">
            Private 1:1 coaching is full. Hot and Rich is a separate program, and it opens in January.
            ICON Brand Partnership is open. Manifesting & Marketing is a different mastermind, and
            it also opens in January.
          </p>
          <p className="text-lg text-[#F4F4F4]/90">
            I&apos;m expanding, and I can&apos;t promise this access will be here forever.
          </p>
        </div>
      </section>

      <section
        className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto"
        aria-labelledby="ticket-heading"
      >
        <div className="max-w-2xl mx-auto space-y-6">
          <h2
            id="ticket-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#F4F4F4] mb-10 text-center"
          >
            Your ticket to Wildly Wealthy Woman Live is included
          </h2>
          <p className="text-lg text-[#CCCCCE]">
            Every Hot and Rich member gets a ticket to Wildly Wealthy Woman Live at the Banff
            Springs Hotel in March 2027. I&apos;m co-hosting it with Jackie McDonald and Melissa of
            The Retreat Alchemist. It&apos;s a gathering for mothers, daughters, sisters, friends
            and chosen family, with sessions on money, health, motherhood, visibility, grief and
            legacy, and fireside conversations in the mountains in winter.
          </p>
          <p className="text-lg text-[#CCCCCE]">
            You&apos;ll spend four months sharpening your message with me, then walk into Banff and
            meet me in person.
          </p>
          <p className="text-lg text-[#CCCCCE]">
            Details:{" "}
            <a
              href={WILDLY_WEALTHY_LIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[#F4F4F4]"
            >
              wildlywealthywomanlive.com
            </a>
          </p>
        </div>
      </section>

      <section
        className="py-24 md:py-32 px-6 md:px-12 max-w-4xl mx-auto border-t border-[#CCCCCE]/30"
        aria-labelledby="questions-heading"
      >
        <div className="max-w-2xl mx-auto">
          <h2
            id="questions-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#F4F4F4] mb-12 text-center"
          >
            Questions you might be sitting with
          </h2>
          <div className="space-y-12">
            {questions.map((item) => (
              <div key={item.q}>
                <h3 className="font-heading text-2xl md:text-3xl font-light leading-snug text-[#F4F4F4] mb-4">
                  {item.q}
                </h3>
                <p className="text-lg text-[#CCCCCE]">
                  {item.q.startsWith("What if") ? (
                    <>
                      DM me on{" "}
                      <a
                        href={INSTAGRAM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline underline-offset-4 hover:text-[#F4F4F4]"
                      >
                        Instagram
                      </a>{" "}
                      and ask me whatever you need to. Asking a question commits you to nothing.
                    </>
                  ) : (
                    item.a
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto scroll-mt-36 border-t border-[#CCCCCE]/30"
        aria-labelledby="pricing-heading"
      >
        <div className="text-center max-w-3xl mx-auto">
          <h2
            id="pricing-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#F4F4F4] mb-10"
          >
            The price
          </h2>
          <div className="space-y-4 text-lg text-[#CCCCCE] mb-10">
            <p>$6,000 CAD for four months.</p>
            <p>Opens in January.</p>
            <p>
              Includes your ticket to{" "}
              <a
                href={WILDLY_WEALTHY_LIVE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-[#F4F4F4]"
              >
                Wildly Wealthy Woman Live
              </a>
              , Banff, March 2027.
            </p>
          </div>
          <StripePricingTable />
        </div>
      </section>

      <section id="final-cta" className="bg-[#020405] text-[#F4F4F4]" aria-labelledby="final-cta-heading">
        <div className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto text-center">
          <h2
            id="final-cta-heading"
            className="font-heading text-3xl md:text-5xl font-light leading-snug text-[#F4F4F4] mb-6"
          >
            This is your moment to take your power back
          </h2>
          <p className="text-lg text-[#F4F4F4]/90 max-w-2xl mx-auto mb-4">
            My first post on the new account was the moment I took mine back. This can be yours.
          </p>
          <p className="text-lg text-[#F4F4F4]/90 max-w-2xl mx-auto mb-4">
            Bring me your business and the message you haven&apos;t been able to say yet. I&apos;ll
            help you sharpen it until the right people can&apos;t scroll past you.
          </p>
          <p className="text-lg text-[#F4F4F4]/90 max-w-2xl mx-auto mb-10">
            Opens in January. $6,000 CAD for four months.
          </p>
          <JoinNowButton />
        </div>
      </section>

      <div
        className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[#020405] border-t border-[#CCCCCE]/20 md:hidden"
        aria-label="Mobile call to action"
      >
        <JoinNowButton className="block w-full py-4 text-center rounded-none bg-[#F4F4F4] text-[#020405] text-sm tracking-widest uppercase font-medium hover:bg-[#CCCCCE] transition-colors duration-300" />
      </div>
      <div className="h-20 md:hidden" aria-hidden />
    </div>
  );
}
