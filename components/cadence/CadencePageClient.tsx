"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Check,
  X,
  Menu,
  Palette,
  FolderOpen,
  Music2,
  CalendarDays,
  Users,
  Share2,
} from "lucide-react";
import { CadenceLogo } from "@/components/cadence/CadenceLogo";
import { CADENCE_APP, CADENCE_STRIPE, CADENCE_IMAGES } from "@/lib/cadence";

const CHARCOAL = "#171717";

const PLATFORMS: { slug: string; label: string }[] = [
  { slug: "facebook", label: "Facebook" },
  { slug: "instagram", label: "Instagram" },
  { slug: "threads", label: "Threads" },
  { slug: "linkedin", label: "LinkedIn" },
  { slug: "tiktok", label: "TikTok" },
  { slug: "pinterest", label: "Pinterest" },
  { slug: "youtube", label: "YouTube" },
  { slug: "googlemaps", label: "Google Business" },
  { slug: "reddit", label: "Reddit" },
  { slug: "telegram", label: "Telegram" },
  { slug: "bluesky", label: "Bluesky" },
  { slug: "tumblr", label: "Tumblr" },
  { slug: "mastodon", label: "Mastodon" },
];

const FEATURES = [
  {
    icon: Share2,
    title: "Schedule Across 13 Platforms",
    body: "Plan and publish to every platform your brand lives on from a single dashboard. No switching tabs, no separate logins.",
  },
  {
    icon: Palette,
    title: "Canva Integration",
    body: "Design in Canva, schedule in Cadence. Your content goes from creation to calendar without a single download or upload.",
  },
  {
    icon: FolderOpen,
    title: "Dropbox Integration",
    body: "Connect your Dropbox and pull media files directly into Cadence. Your entire content library, ready when you are.",
  },
  {
    icon: Music2,
    title: "Native TikTok Publishing",
    body: "Browse trending TikTok sounds inside Cadence and schedule posts direct to TikTok, including Trial Reels. No workarounds, no manual uploads.",
  },
  {
    icon: CalendarDays,
    title: "Content Calendar",
    body: "See everything in one view. Plan ahead, move things around, and make sure your schedule always reflects your priorities.",
  },
  {
    icon: Users,
    title: "Team Access",
    body: "Add team members so your social media manager, content coordinator, or VA can work inside Cadence without needing your logins.",
  },
];

const FOR_LIST = [
  "You are running a real business and content keeps falling through the cracks",
  "You are on multiple platforms and managing them separately is costing you hours",
  "Your brand presence needs to match the level of work you are doing behind the scenes",
  "You have a team and need one shared space to manage content without chaos",
  "You want to schedule once and stay visible all week without thinking about it",
  "You work with a social media manager and need a proper tool for them to work in",
];

const NOT_FOR_LIST = [
  "You are just starting out and posting twice a month is working fine",
  "You want a tool that holds your hand through content strategy (that is what West Rose Media is for)",
  "You need something free (Cadence is built for professionals, not hobbyists)",
];

const PRICING = [
  {
    id: "entrepreneur",
    label: "Entrepreneur",
    popular: false,
    monthlyUsd: 29,
    annualUsd: 290,
    saveUsd: 58,
    monthlyUrl: CADENCE_STRIPE.entrepreneur.monthly,
    annualUrl: CADENCE_STRIPE.entrepreneur.annual,
    for: "Solo business owners and creators managing their own presence.",
    includes: [
      "1 user",
      "4 social profiles",
      "All 13 supported platforms",
      "Canva + Dropbox integration",
      "Native TikTok publishing and Trial Reels",
      "West Rose Media Telegram community",
    ],
  },
  {
    id: "founder",
    label: "Founder",
    popular: true,
    monthlyUsd: 45,
    annualUsd: 450,
    saveUsd: 90,
    monthlyUrl: CADENCE_STRIPE.founder.monthly,
    annualUrl: CADENCE_STRIPE.founder.annual,
    for: "Growing businesses managing multiple accounts or working with a small team.",
    includes: [
      "2 users",
      "10 social accounts",
      "All 13 supported platforms",
      "Canva + Dropbox integration",
      "Native TikTok publishing and Trial Reels",
      "West Rose Media Telegram community",
    ],
  },
  {
    id: "promoter",
    label: "Promoter",
    popular: false,
    monthlyUsd: 99,
    annualUsd: 990,
    saveUsd: 198,
    monthlyUrl: CADENCE_STRIPE.promoter.monthly,
    annualUrl: CADENCE_STRIPE.promoter.annual,
    for: "Agencies and teams managing content across multiple brands at scale.",
    includes: [
      "5 users",
      "50 social accounts",
      "All 13 supported platforms",
      "Canva + Dropbox integration",
      "Native TikTok publishing and Trial Reels",
      "West Rose Media Telegram community",
    ],
  },
];

const FAQ_ITEMS = [
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

function PlatformIcon({ slug, label }: { slug: string; label: string }) {
  const src = `https://cdn.simpleicons.org/${slug}/${CHARCOAL.replace("#", "")}`;
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-gray-200 bg-white p-3 shadow-sm">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={src} alt="" width={32} height={32} className="h-8 w-8 object-contain" loading="lazy" />
      </div>
      <span className="max-w-[5.5rem] text-[11px] font-medium leading-tight text-gray-600 sm:text-xs">{label}</span>
    </div>
  );
}

export default function CadencePageClient() {
  const [annual, setAnnual] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState<number | null>(0);

  return (
    <div className="bg-white text-[#171717]">
      {/* Sticky Cadence nav */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur-sm">
        <div className="container-elegant flex items-center justify-between gap-3 py-2.5 md:gap-4 md:py-4">
          <CadenceLogo variant="dark" href="#top" compact />
          <button
            type="button"
            className="rounded-md p-1.5 text-[#171717] md:hidden"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Menu className="h-5 w-5" strokeWidth={2} />
          </button>
          <div className="hidden items-center gap-3 md:flex">
            <Button asChild variant="outline" size="default" className="border-gray-300">
              <a href={CADENCE_APP.login} target="_blank" rel="noopener noreferrer">
                Log In
              </a>
            </Button>
            <Button asChild size="default">
              <a href="#pricing">Choose a plan</a>
            </Button>
          </div>
        </div>
        {mobileOpen ? (
          <div className="border-t border-gray-100 bg-white px-3 pb-2 pt-1 md:hidden">
            <nav className="flex flex-col gap-1.5">
              <a
                href={CADENCE_APP.login}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-gray-200 py-2 text-center text-sm font-medium text-[#171717]"
                onClick={() => setMobileOpen(false)}
              >
                Log In
              </a>
              <a
                href="#pricing"
                className="rounded-md bg-black py-2 text-center text-sm font-medium text-white"
                onClick={() => setMobileOpen(false)}
              >
                Choose a plan
              </a>
              <Link
                href="/"
                className="py-1.5 text-center text-xs text-gray-600"
                onClick={() => setMobileOpen(false)}
              >
                West Rose Media home
              </Link>
            </nav>
          </div>
        ) : null}
      </header>

      <div id="top" />

      {/* Hero */}
      <section className="relative w-full overflow-hidden">
        <div className="relative h-[min(85vh,700px)] min-h-[520px] w-full md:h-[650px]">
          <Image
            src={CADENCE_IMAGES.hero}
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#171717]/55" aria-hidden />
          <div className="absolute inset-0 flex flex-col justify-center px-4 py-16 sm:px-8">
            <div className="container-elegant mx-auto max-w-4xl text-left">
              <div className="mb-8">
                <CadenceLogo variant="light" href="#top" className="max-w-xs" priority />
              </div>
              <h1 className="font-heading text-3xl font-semibold leading-[1.1] text-[#f5f0e8] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
                Your content should be as consistent as your work ethic.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#f5f0e8]/95 sm:text-lg">
                Cadence is a professional social media scheduling platform built for business owners who are done letting inconsistency quietly undermine everything they have built. Schedule across 13 platforms. Stay visible. Show up with the same level of intention every single week.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button asChild size="lg" className="bg-[#f5f0e8] text-[#171717] hover:bg-white">
                  <a href={CADENCE_APP.register} target="_blank" rel="noopener noreferrer">
                    Get Started
                  </a>
                </Button>
              </div>
              <p className="mt-6 text-sm text-[#f5f0e8]/85">
                Already have an account?{" "}
                <a
                  href={CADENCE_APP.login}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-white"
                >
                  Log in here
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section-padding bg-white" data-aos="fade-up">
        <div className="container-elegant mx-auto max-w-3xl">
          <div className="space-y-6 text-lg leading-relaxed text-gray-700">
            <p>You have built something real. The clients are coming in, the work is strong, the results are there. And your content is still an afterthought.</p>
            <p>
              You care about showing up. The hard part is staying consistent across every platform you are supposed to be on while you run an actual business. Most tools are built for social media managers who live in dashboards all day, or for beginners who post three times a week and call it a strategy.
            </p>
            <p>Neither of those is you.</p>
            <p>You need one place to plan, schedule, and publish everything, across every platform, without building your week around it. That is what Cadence is.</p>
          </div>
        </div>
      </section>

      {/* WRM connection */}
      <section className="section-padding bg-gray-50" data-aos="fade-up">
        <div className="container-elegant">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-14">
            <div className="relative aspect-[4/3] w-full overflow-hidden lg:aspect-auto lg:min-h-[420px]">
              <Image
                src={CADENCE_IMAGES.about}
                alt="West Rose Media brand photography"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div>
              <h2 className="font-heading text-3xl font-semibold leading-tight text-[#171717] sm:text-4xl">
                Built by a brand studio. Designed for founders who take their brand seriously.
              </h2>
              <div className="mt-8 space-y-5 text-lg leading-relaxed text-gray-700">
                <p>
                  West Rose Media works with established founders to make sure their brand finally matches what they have built. Every shoot, every strategy session, every piece of content we create is built around one idea: your brand presence should communicate your level before you say a word.
                </p>
                <p>
                  Cadence is the tool that keeps that presence consistent between shoots and between seasons. It is what we use and what we recommend to every business owner who is serious about showing up with intention, not just occasionally.
                </p>
                <p>If your brand is a priority, your content schedule should be too.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="section-padding bg-white" data-aos="fade-up">
        <div className="container-elegant">
          <h2 className="font-heading text-center text-3xl font-semibold sm:text-4xl">One dashboard. Every platform you actually use.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-relaxed text-gray-700">
            Stop logging in and out just to stay consistent. Cadence connects to 13 platforms so you can plan and schedule everything from one place.
          </p>
          <div className="mt-12 grid grid-cols-3 gap-6 sm:grid-cols-4 md:grid-cols-5 lg:gap-10">
            {PLATFORMS.map((p) => (
              <PlatformIcon key={p.slug} slug={p.slug} label={p.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-gray-50" data-aos="fade-up">
        <div className="container-elegant">
          <h2 className="font-heading text-center text-3xl font-semibold sm:text-4xl">
            Everything you need to post smarter and show up consistently.
          </h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f) => (
              <div key={f.title} className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
                <f.icon className="h-8 w-8 text-[#171717]" strokeWidth={1.5} aria-hidden />
                <h3 className="mt-4 font-heading text-xl font-semibold">{f.title}</h3>
                <p className="mt-3 text-gray-700 leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className="section-padding bg-white" data-aos="fade-up">
        <div className="container-elegant mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl">Cadence is for you if...</h2>
          <ul className="mt-8 space-y-4">
            {FOR_LIST.map((line) => (
              <li key={line} className="flex gap-3 text-lg text-gray-800">
                <Check className="mt-0.5 h-6 w-6 shrink-0 text-[#171717]" strokeWidth={2} aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
          <h3 className="mt-14 font-heading text-2xl font-semibold">Cadence is not for you if...</h3>
          <ul className="mt-6 space-y-4">
            {NOT_FOR_LIST.map((line) => (
              <li key={line} className="flex gap-3 text-lg text-gray-600">
                <X className="mt-0.5 h-6 w-6 shrink-0 text-gray-400" strokeWidth={2} aria-hidden />
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Bonus */}
      <section className="section-padding bg-[#171717] text-[#f5f0e8]" data-aos="fade-up">
        <div className="container-elegant mx-auto max-w-3xl rounded-2xl border border-white/15 bg-black/20 px-8 py-10 sm:px-12 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f5f0e8]/70">Included with every plan</p>
          <h2 className="mt-4 font-heading text-2xl font-semibold sm:text-3xl">
            Every Cadence plan includes access to the West Rose Media Telegram community.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-[#f5f0e8]/90">
            <p>
              When you join Cadence, you get added to the private West Rose Media Telegram channel. This is where Stephanie Rose and the WRM team share real-time tips, content insights, platform updates, and strategy notes. No courses, no curriculum. Just the things we are paying attention to and what we are seeing work for the brands we work with.
            </p>
            <p>This is not a Facebook group. It is a direct line to the team behind West Rose Media.</p>
            <p className="text-sm text-[#f5f0e8]/65">Your invite link is sent in your welcome email after purchase.</p>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-white" data-aos="fade-up" id="pricing">
        <div className="container-elegant">
          <h2 className="font-heading text-center text-3xl font-semibold sm:text-4xl">Choose your plan.</h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-relaxed text-gray-700">
            All plans include access to all 13 platforms, Canva and Dropbox integration, native TikTok publishing, and the West Rose Media Telegram community. Save two months when you pay annually.
          </p>

          <div className="mx-auto mt-10 flex justify-center">
            <div className="inline-flex rounded-full border border-gray-200 bg-gray-50 p-1">
              <button
                type="button"
                onClick={() => setAnnual(false)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-colors duration-300 ${
                  !annual ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-black"
                }`}
              >
                Monthly
              </button>
              <button
                type="button"
                onClick={() => setAnnual(true)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-colors duration-300 ${
                  annual ? "bg-white text-black shadow-sm" : "text-gray-600 hover:text-black"
                }`}
              >
                Annual
              </button>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3 lg:items-stretch">
            {PRICING.map((tier) => {
              const price = annual ? tier.annualUsd : tier.monthlyUsd;
              const period = annual ? "/year" : "/month";
              const href = annual ? tier.annualUrl : tier.monthlyUrl;
              return (
                <div
                  key={tier.id}
                  className={`relative flex flex-col rounded-2xl border bg-white p-8 shadow-sm ${
                    tier.popular ? "border-[#171717] shadow-lg ring-2 ring-[#171717]/10 lg:-mt-2 lg:scale-[1.02]" : "border-gray-200"
                  }`}
                >
                  {tier.popular ? (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#171717] px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white">
                      Most Popular
                    </span>
                  ) : null}
                  <h3 className="font-heading text-2xl font-semibold">{tier.label}</h3>
                  <div className="mt-4 flex flex-wrap items-baseline gap-2">
                    <span className="text-4xl font-semibold tracking-tight">
                      ${price} USD{period}
                    </span>
                    {annual ? (
                      <span className="rounded-full bg-gray-100 px-2 py-0.5 text-xs font-semibold text-gray-800">
                        Save ${tier.saveUsd}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-4 text-gray-700">{tier.for}</p>
                  <ul className="mt-6 flex-1 space-y-3 text-gray-800">
                    {tier.includes.map((item) => (
                      <li key={item} className="flex gap-2">
                        <Check className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild className="mt-8 w-full" size="lg">
                    <a href={href} target="_blank" rel="noopener noreferrer">
                      Get Started
                    </a>
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Consistency */}
      <section className="section-padding bg-gray-50" data-aos="fade-up">
        <div className="container-elegant mx-auto max-w-3xl">
          <h2 className="font-heading text-3xl font-semibold leading-tight sm:text-4xl">
            Showing up consistently changes how people perceive you.
          </h2>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-gray-700">
            <p>
              When your content is inconsistent, the people who could be your next clients or collaborators cannot get a read on you. They land on your profile, see sporadic posts, and quietly move on. They do not reach out because your presence does not signal that you are operating at a level they want to engage with.
            </p>
            <p>
              Consistency is not about posting more. It is about removing the gap between how serious you are about your business and how serious your content presence looks. When those two things finally match, the right people start noticing, and they stop hesitating.
            </p>
            <p>Cadence is the tool that closes that gap. It handles the scheduling so you can stay focused on the work.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white" data-aos="fade-up">
        <div className="container-elegant mx-auto max-w-3xl">
          <h2 className="font-heading text-center text-3xl font-semibold">FAQ</h2>
          <dl className="mt-10 border-t border-gray-200">
            {FAQ_ITEMS.map((item, i) => {
              const open = faqOpen === i;
              return (
                <div key={item.q} className="border-b border-gray-200">
                  <dt>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between gap-4 py-5 text-left font-heading text-lg font-semibold text-[#171717] hover:text-gray-800"
                      onClick={() => setFaqOpen(open ? null : i)}
                      aria-expanded={open}
                    >
                      {item.q}
                      <span className="text-xl text-gray-400">{open ? "−" : "+"}</span>
                    </button>
                  </dt>
                  {open ? (
                    <dd className="pb-5 text-gray-700 leading-relaxed">
                      {item.a}
                    </dd>
                  ) : null}
                </div>
              );
            })}
          </dl>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-[#171717] text-[#f5f0e8]" data-aos="fade-up">
        <div className="container-elegant mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold sm:text-4xl">Your brand presence should work as hard as you do.</h2>
          <p className="mt-6 text-lg leading-relaxed text-[#f5f0e8]/90">
            Cadence gives you the platform to make that happen. One dashboard, 13 platforms, and a team that actually cares about the level your brand shows up at.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
            <Button asChild variant="outline" className="border-[#f5f0e8] text-[#f5f0e8] hover:bg-[#f5f0e8] hover:text-[#171717]">
              <a href={CADENCE_STRIPE.entrepreneur.monthly} target="_blank" rel="noopener noreferrer">
                Entrepreneur, $29 USD/month
              </a>
            </Button>
            <Button asChild variant="outline" className="border-[#f5f0e8] text-[#f5f0e8] hover:bg-[#f5f0e8] hover:text-[#171717]">
              <a href={CADENCE_STRIPE.founder.monthly} target="_blank" rel="noopener noreferrer">
                Founder, $45 USD/month
              </a>
            </Button>
            <Button asChild variant="outline" className="border-[#f5f0e8] text-[#f5f0e8] hover:bg-[#f5f0e8] hover:text-[#171717]">
              <a href={CADENCE_STRIPE.promoter.monthly} target="_blank" rel="noopener noreferrer">
                Promoter, $99 USD/month
              </a>
            </Button>
          </div>
          <p className="mt-8 text-sm text-[#f5f0e8]/75">
            Prefer to pay annually and save? Select your plan and choose annual billing at checkout.
          </p>
          <p className="mt-4 text-sm">
            Already have an account?{" "}
            <a href={CADENCE_APP.login} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 hover:text-white">
              Log in here
            </a>
          </p>
        </div>
      </section>

      <div className="border-t border-gray-200 bg-white py-6 text-center text-sm text-gray-500">
        <Link href="/" className="hover:text-black">
          West Rose Media
        </Link>
      </div>
    </div>
  );
}
