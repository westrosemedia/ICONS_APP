import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import MastermindStructuredData from "@/components/MastermindStructuredData";
import MastermindPhotoSlider from "@/components/MastermindPhotoSlider";

const APPLY_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLScB4fKptatWBrh-aH1SADOLSFTMk3zbbMnpJniWWEBlDT006Q/viewform";

const IMAGES = {
  hero: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6951.jpg?alt=media&token=9100f358-a2f9-4848-b995-2eee1ff3b285",
  inside:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_4770.jpg?alt=media&token=9c8bee25-050a-408c-8e20-75f0d708c44a",
  coaching:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6981.jpg?alt=media&token=9d18b961-5a37-4d16-9056-598f854480eb",
  tapping:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR8772.jpg?alt=media&token=ec7967fe-a5bb-4911-b537-5ae53ac3d342",
  room: "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR8802.jpg?alt=media&token=4d2ceab7-b80b-4d87-bc7e-e074f4893700",
  retreat:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6965.jpg?alt=media&token=9f791e83-44d3-4022-bb61-8f3bd5a1def0",
  proof:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR7086.jpg?alt=media&token=6bf7e2b2-0eab-46cf-bc95-8a1729102797",
  leaders:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_4881.jpg?alt=media&token=a6ae922b-060a-43f9-9fd5-5b10c9820b24",
  investment:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FKAY_2038.jpg?alt=media&token=028a8f85-1b69-4c31-ad30-d053c1020eb8",
  close:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/_VWR6644.jpg?alt=media&token=78c2fc79-1d50-427a-9acd-2acc82681c8c",
  accent:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/KAY_1477.jpg?alt=media&token=21dde3a0-12b1-454a-b4b4-1ab41f6d279c",
  video:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%20Reel%202_1.mp4?alt=media&token=e093c1dc-3441-4573-9f81-ce7dfa29efce",
  nicoleVideo:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FAug_Mastermind_Nicole.mp4?alt=media&token=55dc8779-a17f-4492-bb47-f6cb2732c042",
  podcast37:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FPodcast_37.mp4?alt=media&token=8e35660a-d5f3-4d40-bb8c-1dd891e43dc4",
  podcast36:
    "https://firebasestorage.googleapis.com/v0/b/iconsapp-fa44c.firebasestorage.app/o/Mastermind%2FPodcast_36.mp4?alt=media&token=5a4bcf61-b081-49ea-b91a-88e9a2e6fcec",
};

const META = {
  title: "Manifesting & Marketing Mastermind | West Rose Media",
  description:
    "Marketing strategy that converts. Manifestation that actually moves money. Six months. One room. Stephanie and Jackie. September 2026 through February 2027, with a retreat in Kananaskis.",
};

export const revalidate = 0;

export const metadata: Metadata = {
  title: META.title,
  description: META.description,
  keywords:
    "mastermind retreat Canada, luxury business coaching, female entrepreneurs mastermind, manifesting marketing mastermind, tapping therapy business, Kananaskis retreat, Canadian Rockies retreat, Manifesting & Marketing Mastermind, Stephanie Rose, Jackie McDonald",
  authors: [{ name: "Stephanie Rose", url: "https://westrosemedia.com" }],
  creator: "Stephanie Rose",
  publisher: "West Rose Media",
  metadataBase: new URL("https://westrosemedia.com"),
  alternates: { canonical: "/mastermind" },
  openGraph: {
    title: META.title,
    description: META.description,
    url: "https://westrosemedia.com/mastermind",
    siteName: "West Rose Media",
    type: "website",
    locale: "en_CA",
    images: [
      {
        url: IMAGES.hero,
        width: 1200,
        height: 630,
        alt: "Manifesting & Marketing Mastermind",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: META.title,
    description: META.description,
    creator: "@westrosemedia",
    images: [IMAGES.hero],
  },
  robots: { index: true, follow: true },
};

const ctaPrimary =
  "inline-block bg-[#c1ff72] text-black px-10 py-4 text-xs md:text-sm tracking-[0.22em] uppercase font-medium hover:bg-white transition-colors duration-300";

const ctaOnLime =
  "inline-block bg-black text-[#c1ff72] px-10 py-4 text-xs md:text-sm tracking-[0.22em] uppercase font-medium hover:bg-white hover:text-black transition-colors duration-300";

const eyebrow =
  "text-[11px] md:text-xs tracking-[0.35em] uppercase text-[#c1ff72]";

const display =
  "font-heading font-light tracking-tight leading-[1.05]";

const tickerPrimary = [
  "Marketing that converts",
  "Manifestation that moves money",
  "Six months",
  "One room",
  "Stephanie + Jackie",
  "Kananaskis February 2027",
];

const tickerSecondary = [
  "Weekly coaching",
  "The Story Stack",
  "Cadence",
  "Personal tapping",
  "The Room",
  "Apply now",
];

const whatYouGet = [
  {
    title: "Weekly Coaching Calls",
    body: "Every Wednesday for six months. Stephanie runs strategy. Offers, messaging, launches. Jackie runs energetics. Identity work, nervous system work, the version of you who can hold what you're building.",
    image: IMAGES.coaching,
    alt: "Weekly coaching calls",
  },
  {
    title: "The Story Stack",
    body: "Stephanie's five-story content framework. You are not creating from scratch. You are running the rotation.",
    image: IMAGES.inside,
    alt: "The Story Stack content framework",
  },
  {
    title: "Cadence",
    body: "Full access to Stephanie's content platform. Calendar, captioning, analytics, the Story Stack built in as a tagging system. Content stops being the bottleneck.",
    image: IMAGES.room,
    alt: "Cadence content platform",
  },
  {
    title: "Personal Tapping Sessions",
    body: "One-on-one nervous system work with Jackie.",
    image: IMAGES.tapping,
    alt: "Personal tapping sessions with Jackie",
  },
  {
    title: "The Room",
    body: "Five women. Hand-picked. Building at your level. The people in your phone for the next decade.",
    image: IMAGES.proof,
    alt: "The mastermind room",
  },
];

const results = [
  {
    name: "Nicole",
    body: "Nicole started an entirely new business on top of the one she already had: The Well Supported Woman. She's since hosted two massively successful in-person events, the first with about 20 women in the room, and built a real audience around it.",
  },
  {
    name: "Erin",
    body: "Erin came in running a brick-and-mortar. She built an online business so the brick-and-mortar wasn't the only thing carrying her, and she's now launching a membership that's giving her time freedom and letting her travel with her son.",
  },
  {
    name: "Cammy",
    body: "Cammy spent two years on Instagram stuck under 200 followers and 200 views a post. She's since hit her first million-view video and had 50 people show up to her very first masterclass.",
  },
];

const roomVideos = [
  {
    label: "Nicole · In her words",
    srcKey: "nicoleVideo" as const,
    ariaLabel: "Nicole mastermind testimonial",
  },
  {
    label: "Podcast · Episode 37",
    srcKey: "podcast37" as const,
    ariaLabel: "Mastermind podcast episode 37",
  },
  {
    label: "Podcast · Episode 36",
    srcKey: "podcast36" as const,
    ariaLabel: "Mastermind podcast episode 36",
  },
];

function Marquee({
  items,
  tone = "dark",
}: {
  items: string[];
  tone?: "dark" | "lime";
}) {
  const wrap =
    tone === "lime"
      ? "bg-[#c1ff72] text-black"
      : "bg-black text-white border-y border-white/10";
  const sep = tone === "lime" ? "text-black/40" : "text-[#c1ff72]";

  return (
    <div className={`relative z-20 overflow-hidden ${wrap}`} aria-hidden>
      <div className="flex w-max animate-marquee whitespace-nowrap py-4 md:py-5">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center">
            {items.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="mx-6 md:mx-10 text-[11px] md:text-xs tracking-[0.28em] uppercase"
              >
                {item}
                <span className={`ml-6 md:ml-10 ${sep}`} aria-hidden>
                  –
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function FramedImage({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden border border-white/20 ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes={sizes}
        priority={priority}
      />
    </div>
  );
}

export default function MastermindPage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* HERO — kept */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={IMAGES.hero}
            alt="Manifesting & Marketing Mastermind"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center py-32">
          <h1
            className={`${display} text-5xl md:text-7xl lg:text-8xl mb-8`}
          >
            This is your year.
            <br />
            <span className="italic text-[#c1ff72]">
              And you already know it.
            </span>
          </h1>
          <p className="text-lg md:text-xl mb-6 text-white/90 max-w-2xl mx-auto leading-relaxed">
            Marketing strategy that converts. Manifestation that actually moves
            money. Six months. One room. Stephanie and Jackie in your corner the
            entire time.
          </p>
          <p className={`${eyebrow} mb-4 text-white/70`}>
            September 2026 through February 2027. Retreat in Kananaskis.
          </p>
          <p className="text-sm md:text-base text-[#c1ff72] mb-10 max-w-xl mx-auto leading-relaxed">
            Sign up August 14–17 and get a bonus photoshoot.
          </p>
          <Link
            href={APPLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={ctaPrimary}
          >
            Apply for the Manifesting &amp; Marketing Mastermind
          </Link>
        </div>
      </section>

      <Marquee items={tickerPrimary} tone="lime" />

      {/* WHAT IT LOOKS LIKE FROM INSIDE — Shelby-style asymmetry */}
      <section
        className="relative py-24 md:py-36 px-6 md:px-10"
        aria-labelledby="inside-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-end mb-16 md:mb-24">
            <div className="lg:col-span-5 relative">
              <FramedImage
                src={IMAGES.inside}
                alt="Inside the Manifesting & Marketing Mastermind"
                className="h-[420px] md:h-[560px] w-full lg:w-[92%]"
              />
              <div className="hidden md:block absolute -bottom-10 -right-4 lg:right-[-10%] w-40 h-52 lg:w-48 lg:h-64 border border-[#c1ff72]/50 z-10 overflow-hidden">
                <Image
                  src={IMAGES.accent}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="200px"
                />
              </div>
            </div>
            <div className="lg:col-span-7 lg:pl-10 xl:pl-16 pt-8 lg:pt-0">
              <p className={`${eyebrow} mb-6`}>From inside the room</p>
              <h2
                id="inside-heading"
                className={`${display} text-4xl md:text-6xl lg:text-7xl mb-10 max-w-xl`}
              >
                What it looks like{" "}
                <span className="italic text-[#c1ff72]">from inside</span>
              </h2>
              <div className="max-w-xl space-y-6 text-[17px] md:text-lg text-white/80 leading-relaxed">
                <p>
                  Wednesday comes around and you already know exactly what
                  you&apos;re posting, because you decided it weeks ago, not
                  that morning. The content is already made. You take your kid
                  to practice and don&apos;t think about Instagram once.
                </p>
                <p>
                  You get on a call with a handful of women building at the
                  level you&apos;re trying to reach, not the level you already
                  left behind. Someone asks the question you&apos;ve been
                  sitting with for six months. Someone else already solved it.
                </p>
                <p>
                  Life still happens. A launch flops, a kid gets sick, you
                  disappear for a week. You come back and nothing fell apart,
                  because you&apos;re not doing this alone anymore.
                </p>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 border-t border-white/10 pt-14 md:pt-20">
            <div className="lg:col-span-4">
              <p className={`${eyebrow} mb-4`}>Who this is for</p>
              <p
                className={`${display} text-3xl md:text-4xl text-white/95 leading-snug`}
              >
                You have a real offer. You&apos;re tired of watching women with
                less talent out-earn you.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-6 text-[17px] md:text-lg text-white/80 leading-relaxed max-w-3xl lg:ml-auto">
              <p>
                You&apos;ve bought the course, hired the coach, got the
                framework, and you&apos;re still sitting on content you never
                posted, because information was never the missing piece.
              </p>
              <p>
                Most women stay stuck for one of two reasons. They don&apos;t
                have a system, just ideas they&apos;re reinventing from scratch
                every week. Or their messaging is off, they&apos;re talking at
                their audience instead of turning followers into people who
                finish their sentences and beg to work with them. Fix both, and
                every post stops being a guessing game and every sale stops
                feeling like convincing someone.
              </p>
              <p className="text-[#c1ff72] text-xl md:text-2xl font-heading italic font-light pt-2">
                Six months. Strategy and energetics, running at the same time,
                on the same business. Yours.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={tickerSecondary} />

      {/* WHAT YOU GET */}
      <section
        className="py-24 md:py-36 px-6 md:px-10"
        aria-labelledby="what-you-get-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
            <div>
              <p className={`${eyebrow} mb-5`}>Included</p>
              <h2
                id="what-you-get-heading"
                className={`${display} text-5xl md:text-7xl`}
              >
                What you{" "}
                <span className="italic text-[#c1ff72]">get</span>
              </h2>
            </div>
            <p className="text-white/55 text-sm tracking-[0.2em] uppercase md:max-w-xs md:text-right">
              Strategy. Energetics. The room.
            </p>
          </div>

          <div className="space-y-24 md:space-y-32">
            {whatYouGet.map((item, index) => {
              const flip = index % 2 === 1;
              return (
                <div
                  key={item.title}
                  className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center"
                >
                  <div
                    className={`lg:col-span-6 ${
                      flip ? "lg:order-2 lg:col-start-7" : ""
                    }`}
                  >
                    <FramedImage
                      src={item.image}
                      alt={item.alt}
                      className={`h-[340px] md:h-[480px] w-full ${
                        flip ? "lg:ml-auto lg:w-[90%]" : "lg:w-[90%]"
                      }`}
                    />
                  </div>
                  <div
                    className={`lg:col-span-5 ${
                      flip
                        ? "lg:order-1 lg:col-start-1 lg:pr-6"
                        : "lg:col-start-8"
                    }`}
                  >
                    <p className={`${eyebrow} mb-4`}>
                      0{index + 1}
                    </p>
                    <h3
                      className={`${display} text-3xl md:text-5xl mb-6`}
                    >
                      {item.title}
                    </h3>
                    <p className="text-lg text-white/75 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <MastermindPhotoSlider />

      {/* THE RETREAT — full bleed editorial */}
      <section
        className="relative min-h-[90vh] flex items-end overflow-hidden"
        aria-labelledby="retreat-heading"
      >
        <Image
          src={IMAGES.retreat}
          alt="Kananaskis retreat for the Manifesting & Marketing Mastermind"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30" />
        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className={`${eyebrow} mb-5`}>The retreat</p>
            <h2
              id="retreat-heading"
              className={`${display} text-5xl md:text-7xl mb-8`}
            >
              Kananaskis,{" "}
              <span className="italic text-[#c1ff72]">February 2027</span>
            </h2>
            <div className="space-y-5 text-lg text-white/85 leading-relaxed">
              <p>
                Two nights in a private log cabin between Calgary and the
                Rockies. Forest and mountain views from every window. A
                fireplace. A table big enough for all of us.
              </p>
              <p>
                Content creation, mastermind sessions, and activities including
                a day at Kananaskis Nordic Spa and a day in Banff.
              </p>
              <p>
                This is not a bonus tacked onto the mastermind. It is where the
                women you have been building with for six months become the
                women you build with for the rest of your life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Marquee items={tickerPrimary} tone="lime" />

      {/* WHAT'S POSSIBLE */}
      <section
        className="py-24 md:py-36 px-6 md:px-10"
        aria-labelledby="results-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16 md:mb-24 md:ml-auto md:text-right">
            <p className={`${eyebrow} mb-5`}>Proof</p>
            <h2
              id="results-heading"
              className={`${display} text-4xl md:text-6xl lg:text-7xl`}
            >
              What&apos;s possible{" "}
              <span className="italic text-[#c1ff72]">inside the room</span>
            </h2>
          </div>

          <div className="space-y-0 border-t border-white/10">
            {results.map((result) => (
              <div
                key={result.name}
                className="grid md:grid-cols-12 gap-6 md:gap-10 py-10 md:py-14 border-b border-white/10"
              >
                <h3
                  className={`${display} md:col-span-3 text-3xl md:text-4xl text-[#c1ff72] italic`}
                >
                  {result.name}
                </h3>
                <p className="md:col-span-9 text-lg text-white/80 leading-relaxed max-w-3xl">
                  {result.body}
                </p>
              </div>
            ))}
          </div>

          <p
            className={`${display} text-3xl md:text-5xl lg:text-6xl mt-16 md:mt-24 max-w-4xl`}
          >
            One client crossed{" "}
            <span className="italic text-[#c1ff72]">
              three and a half million dollars
            </span>{" "}
            last year.
          </p>
        </div>
      </section>

      {/* FROM THE ROOM — testimonials */}
      <section
        className="py-24 md:py-36 px-6 md:px-10 border-t border-white/10"
        aria-labelledby="from-the-room-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 md:mb-20">
            <p className={`${eyebrow} mb-5`}>From the room</p>
            <h2
              id="from-the-room-heading"
              className={`${display} text-4xl md:text-6xl lg:text-7xl max-w-3xl`}
            >
              Hear it{" "}
              <span className="italic text-[#c1ff72]">from them</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-8">
            {roomVideos.map((item) => (
              <div key={item.label}>
                <p className={`${eyebrow} mb-4`}>{item.label}</p>
                <div className="relative overflow-hidden border border-white/20 bg-black">
                  <video
                    className="w-full h-auto aspect-video object-cover"
                    src={IMAGES[item.srcKey]}
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={item.ariaLabel}
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STEPHANIE + JACKIE */}
      <section
        className="relative py-24 md:py-36 px-6 md:px-10 bg-[#0a0a0a]"
        aria-labelledby="leaders-heading"
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 relative">
            <FramedImage
              src={IMAGES.leaders}
              alt="Stephanie Rose and Jackie McDonald"
              className="h-[420px] md:h-[600px] w-full"
            />
            <div className="absolute -bottom-5 left-6 md:left-10 bg-[#c1ff72] text-black px-5 py-3 text-[11px] tracking-[0.25em] uppercase font-medium">
              Stephanie + Jackie
            </div>
          </div>
          <div className="lg:col-span-6 lg:col-start-7 space-y-7 pt-8 lg:pt-0">
            <p className={eyebrow}>Who&apos;s leading this room</p>
            <h2
              id="leaders-heading"
              className={`${display} text-4xl md:text-6xl`}
            >
              Marketing that converts.{" "}
              <span className="italic text-[#c1ff72]">
                Manifestation that moves money.
              </span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              Stephanie is a photographer, content creation specialist and
              marketing strategist. She spent years in the coaching industry
              watching it get sold as magic, and got burned badly enough by it
              herself that she built her own rule: she never sells a strategy
              until she&apos;s proven it works on six to ten real clients first.
              That&apos;s the whole premise of the mastermind. Not theory. Not a
              framework she read about. A system she&apos;s already run.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              Jackie created the Wildly Wealthy Woman meditation and built
              Tapping School from an 800-square-foot house as a single mom. Her
              work isn&apos;t about needing her forever. She teaches the tool,
              not dependency on her. Nervous system work, identity work, and the
              version of you who can actually hold what you&apos;re building.
            </p>
            <p className="text-[#c1ff72] font-heading italic text-xl md:text-2xl font-light">
              At the same time, in the same room.
            </p>
          </div>
        </div>
      </section>

      {/* THE INVESTMENT */}
      <section
        id="investment"
        className="py-24 md:py-36 px-6 md:px-10 scroll-mt-24"
        aria-labelledby="investment-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 mb-16">
            <div className="lg:col-span-5">
              <p className={`${eyebrow} mb-5`}>Investment</p>
              <h2
                id="investment-heading"
                className={`${display} text-5xl md:text-7xl mb-8`}
              >
                The{" "}
                <span className="italic text-[#c1ff72]">investment</span>
              </h2>
              <FramedImage
                src={IMAGES.investment}
                alt="Mastermind investment"
                className="h-72 md:h-96 w-full hidden lg:block"
              />
            </div>
            <div className="lg:col-span-7 space-y-8 lg:pt-16">
              <div className="border-t border-white/15 pt-8">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 mb-4">
                  <h3 className={`${display} text-3xl md:text-4xl`}>
                    Mastermind Only
                  </h3>
                  <p className="text-[#c1ff72] text-2xl md:text-3xl font-heading font-light">
                    $12,000 CAD
                  </p>
                </div>
                <p className="text-white/70 leading-relaxed max-w-xl">
                  Six months of weekly coaching, personal tapping sessions, full
                  access to Cadence and the Story Stack, and a room full of
                  women who are actually doing it.
                </p>
              </div>
              <div className="border-t border-white/15 pt-8">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-3 mb-4">
                  <h3 className={`${display} text-3xl md:text-4xl`}>
                    Mastermind + Luxury Retreat
                  </h3>
                  <p className="text-[#c1ff72] text-2xl md:text-3xl font-heading font-light">
                    $20,000 CAD
                  </p>
                </div>
                <p className="text-white/70 leading-relaxed max-w-xl">
                  Everything above, plus your spot in Kananaskis this February.
                  First women to join get priority rooms.
                </p>
              </div>
              <p className="font-heading italic text-xl md:text-2xl text-white/90 pt-4 font-light">
                The women who join do not ask whether they can afford to. They
                ask whether they can afford not to.
              </p>
              <Link
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={ctaPrimary}
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSE */}
      <section
        id="apply"
        className="relative overflow-hidden scroll-mt-24"
        aria-labelledby="close-heading"
      >
        <div className="bg-[#c1ff72] text-black py-24 md:py-32 px-6 md:px-10">
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <p className="text-[11px] tracking-[0.35em] uppercase text-black/60">
              Close
            </p>
            <h2
              id="close-heading"
              className={`${display} text-4xl md:text-6xl lg:text-7xl text-black`}
            >
              You already know this is{" "}
              <span className="italic">your year.</span>
            </h2>
            <p className="text-xl md:text-2xl text-black/80 max-w-2xl mx-auto leading-relaxed">
              The question is whether you build it alone, or in the room.
            </p>
            <p className="text-lg text-black/70 max-w-xl mx-auto">
              Choose the room. Choose the team. Choose to build the movement.
            </p>
            <Link
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={ctaOnLime}
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="relative w-full bg-black overflow-hidden">
        <video
          className="w-full h-auto object-cover min-h-[50vh] max-h-[80vh]"
          src={IMAGES.video}
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute inset-0 bg-black/35 pointer-events-none" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">
          <p className={`${eyebrow} mb-4`}>Behind the scenes</p>
          <h2 className={`${display} text-3xl md:text-5xl text-white`}>
            See the{" "}
            <span className="italic text-[#c1ff72]">Mastermind</span>{" "}
            Experience
          </h2>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div
        className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black/95 border-t border-[#c1ff72]/30 md:hidden backdrop-blur-sm"
        aria-label="Mobile call to action"
      >
        <Link
          href={APPLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full py-4 text-center bg-[#c1ff72] text-black text-xs tracking-[0.22em] uppercase font-medium"
        >
          Apply Now
        </Link>
      </div>
      <div className="h-20 md:hidden" aria-hidden />

      <MastermindStructuredData />
    </div>
  );
}
