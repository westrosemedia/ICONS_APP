"use client";

import Image from "next/image";
import { useEffect, useState, type ReactNode } from "react";
import AccessForm from "@/components/hot-and-viral/AccessForm";
import StripePricingTable from "@/components/hot-and-viral/StripePricingTable";
import {
  COACH_IMAGE,
  HERO_IMAGE,
  cammyMore,
  cammyShots,
  coachStats,
  copy,
  copycatPairs,
  countdownTarget,
  getPageState,
  memberResults,
  splitRemaining,
  winShots,
  type HotAndViralImage,
  type PageState,
} from "@/lib/hotAndViral";

type HotAndViralPageProps = {
  preview: PageState | null;
  initialNowMs: number;
};

const scrollTarget = "scroll-mt-80";
const band = "py-16 md:py-[7.25rem]";
const h2 =
  "font-heading text-[2.15rem] leading-[0.98] tracking-[-0.035em] sm:text-[2.7rem] md:text-[3.25rem]";
const lede = "max-w-[36rem] text-[17px] leading-[1.7] text-neutral-600";
const eyebrow = "text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500";

const pill =
  "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[15px] font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2";
const pillDark = `${pill} bg-black text-white hover:bg-neutral-800 focus-visible:ring-black`;
const pillLight = `${pill} bg-white text-black hover:bg-neutral-100 focus-visible:ring-white focus-visible:ring-offset-black`;

const GOOGLE_REVIEWS_SHARE_URL = "https://share.google/O5Gl6uzN8JRq35a59";

const FEATURED_WIN_SRCS = [
  "/hot-and-viral/views-4-9-million.jpg",
  "/hot-and-viral/video-views-417k.jpg",
  "/hot-and-viral/record-200k.jpg",
  "/hot-and-viral/dashboard-62k.jpg",
];

function useTrustedNow(initialNowMs: number) {
  const [nowMs, setNowMs] = useState(initialNowMs);

  useEffect(() => {
    let anchorServer = initialNowMs;
    let anchorPerf = performance.now();
    let cancelled = false;

    async function sync() {
      const start = performance.now();
      try {
        const response = await fetch("/api/hot-and-viral/time", { cache: "no-store" });
        const end = performance.now();
        if (!response.ok || cancelled) return;
        const data = (await response.json()) as { nowMs?: number };
        if (typeof data.nowMs !== "number") return;
        anchorServer = data.nowMs + (end - start) / 2;
        anchorPerf = end;
        setNowMs(anchorServer);
      } catch {
        // Keep the server clock already in hand.
      }
    }

    void sync();
    const refresh = window.setInterval(() => void sync(), 30000);
    const tick = window.setInterval(() => {
      setNowMs(anchorServer + (performance.now() - anchorPerf));
    }, 250);

    return () => {
      cancelled = true;
      window.clearInterval(refresh);
      window.clearInterval(tick);
    };
  }, [initialNowMs]);

  return nowMs;
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function CountdownDigits({
  nowMs,
  state,
  align = "center",
}: {
  nowMs: number;
  state: Exclude<PageState, "closed">;
  align?: "center" | "start";
}) {
  const target = countdownTarget(state) ?? nowMs;
  const parts = splitRemaining(target - nowMs);
  const label = state === "before" ? copy.countdown.before : copy.countdown.open;
  const units = [
    ["Days", parts.days],
    ["Hours", parts.hours],
    ["Minutes", parts.minutes],
    ["Seconds", parts.seconds],
  ] as const;

  return (
    <div
      className={`flex gap-2 sm:gap-4 lg:gap-6 ${align === "start" ? "justify-center lg:justify-start" : "justify-center"}`}
      role="timer"
      aria-label={`${label} ${parts.days} days ${parts.hours} hours ${parts.minutes} minutes ${parts.seconds} seconds. ${copy.countdown.line}`}
    >
      {units.map(([unit, value]) => (
        <div key={unit} className="min-w-[4.4rem] text-center sm:min-w-[5.4rem] lg:min-w-[6.75rem]">
          <div className="font-heading text-[3.5rem] leading-none tabular-nums tracking-[-0.04em] text-[#f41cdc] sm:text-[4.75rem] lg:text-[6.25rem]">
            {pad(value)}
          </div>
          <div className="mt-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/70 sm:text-[11px]">{unit}</div>
        </div>
      ))}
    </div>
  );
}

function CountdownBanner({
  nowMs,
  state,
  sticky = false,
}: {
  nowMs: number;
  state: Exclude<PageState, "closed">;
  sticky?: boolean;
}) {
  const label = state === "before" ? copy.countdown.before : copy.countdown.open;

  return (
    <div className={`${sticky ? "sticky top-[73px] z-30" : ""} bg-black text-white`}>
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-4 sm:py-5 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-8 lg:py-6">
        <div className="flex w-full flex-col items-center gap-2 lg:w-auto lg:items-start">
          <p className="text-center text-lg font-semibold tracking-wide text-white sm:text-xl lg:text-left">{label}</p>
          <CountdownDigits nowMs={nowMs} state={state} align="start" />
        </div>
        <p className="max-w-md text-center text-[15px] font-normal leading-relaxed text-white sm:text-base lg:max-w-lg lg:text-left">
          {copy.countdown.line}
        </p>
      </div>
    </div>
  );
}

function StateButton({
  state,
  tone = "dark",
  className = "",
  children,
}: {
  state: Exclude<PageState, "closed">;
  tone?: "dark" | "light";
  className?: string;
  children?: string;
}) {
  const href = state === "before" ? "#first-access" : "#pricing";
  const label = children ?? (state === "before" ? copy.hero.buttonBefore : copy.hero.buttonOpen);
  return (
    <a href={href} className={`${tone === "light" ? pillLight : pillDark} ${className}`}>
      {label}
    </a>
  );
}

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-snug text-neutral-800">
          <span
            aria-hidden="true"
            className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-black text-white"
          >
            <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M3.5 8.2 6.4 11l6.1-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function FramedShot({
  image,
  label,
  onOpen,
  className = "w-[210px]",
}: {
  image: HotAndViralImage;
  label?: string;
  onOpen: (image: HotAndViralImage) => void;
  className?: string;
}) {
  return (
    <button type="button" onClick={() => onOpen(image)} className={`block max-w-full text-left ${className}`}>
      {label ? (
        <span className="mb-3 block text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
          {label}
        </span>
      ) : null}
      <span className="block overflow-hidden rounded-[1.35rem] bg-neutral-100 shadow-[0_18px_44px_-28px_rgba(0,0,0,0.65)] ring-1 ring-black/10">
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          quality={68}
          sizes="240px"
          className="h-auto w-full"
        />
      </span>
    </button>
  );
}

function FramedPlate({
  image,
  onOpen,
}: {
  image: HotAndViralImage;
  onOpen: (image: HotAndViralImage) => void;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(image)}
      className="block w-full overflow-hidden rounded-2xl bg-neutral-50 text-left shadow-[0_16px_40px_-30px_rgba(0,0,0,0.55)] ring-1 ring-black/10"
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        quality={68}
        sizes="(max-width: 768px) 100vw, 360px"
        className="h-auto w-full"
      />
    </button>
  );
}

function ShotLightbox({ image, onClose }: { image: HotAndViralImage; onClose: () => void }) {
  return (
    <button
      type="button"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
      onClick={onClose}
      aria-label="Close screenshot"
    >
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        quality={75}
        className="max-h-[90vh] w-auto max-w-full object-contain"
      />
    </button>
  );
}

function PricingCards({ state }: { state: Exclude<PageState, "closed"> }) {
  const before = state === "before";

  return (
    <div className="grid items-stretch gap-5 md:grid-cols-2">
      <article className="order-2 flex flex-col rounded-[1.6rem] bg-white p-7 shadow-[0_18px_50px_-36px_rgba(0,0,0,0.45)] ring-1 ring-black/10 md:order-1 md:p-9">
        <h3 className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-neutral-500">Monthly</h3>
        <p className="mt-6 text-base text-neutral-400 line-through">{copy.pricing.monthly.regular}</p>
        <p className="mt-1 font-heading text-[4.5rem] leading-none tracking-[-0.04em] text-[#f41cdc]">
          {copy.pricing.monthly.sale}
        </p>
        <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
          {copy.pricing.monthly.cadence}
        </p>
        <p className="mt-5 text-[15px] leading-relaxed text-neutral-700">{copy.pricing.monthly.lock}</p>
        <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-neutral-500">
          {copy.pricing.monthly.gst}
        </p>
        <div className="mt-auto pt-8">
          {before ? (
            <StateButton state="before" className="w-full" />
          ) : (
            <a href="#checkout" className={`${pillDark} w-full`}>
              {copy.pricing.monthly.button}
            </a>
          )}
        </div>
      </article>

      <article className="order-1 flex flex-col rounded-[1.6rem] bg-black p-7 text-white md:order-2 md:p-9">
        <p>
          <span className="inline-flex rounded-full bg-[#f41cdc] px-2.5 py-1 text-[11px] font-semibold leading-none text-white">
            {copy.pricing.yearly.badge}
          </span>
        </p>
        <h3 className="mt-3 font-sans text-sm font-semibold uppercase tracking-[0.16em] text-white/80">Pay in full</h3>
        <p className="mt-6 text-base text-white/40 line-through">{copy.pricing.yearly.regular}</p>
        <p className="mt-1 font-heading text-[4.5rem] leading-none tracking-[-0.04em] text-[#f41cdc]">{copy.pricing.yearly.sale}</p>
        <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/55">{copy.pricing.yearly.cadence}</p>
        <p className="mt-5 text-[15px] leading-relaxed text-white/85">{copy.pricing.yearly.note}</p>
        <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.16em] text-white/55">{copy.pricing.yearly.gst}</p>
        <div className="mt-auto pt-8">
          {before ? (
            <StateButton state="before" tone="light" className="w-full" />
          ) : (
            <a href="#checkout" className={`${pillLight} w-full`}>
              {copy.pricing.yearly.button}
            </a>
          )}
        </div>
      </article>
    </div>
  );
}

function ResultCase({
  id,
  kicker,
  before,
  after,
  body,
  frames,
  plates,
  onOpen,
  titleAs = "h3",
  titleId,
}: {
  id?: string;
  kicker: string;
  before: string;
  after: string;
  body: ReactNode;
  frames: { image: HotAndViralImage; label?: string }[];
  plates?: HotAndViralImage[];
  onOpen: (image: HotAndViralImage) => void;
  titleAs?: "h2" | "h3";
  titleId?: string;
}) {
  const Title = titleAs;
  return (
    <article id={id} className={id ? scrollTarget : undefined}>
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <div className="min-w-0 max-w-xl">
          <p className={eyebrow}>{kicker}</p>
          <Title
            id={titleId}
            className="mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 font-heading text-[2.5rem] leading-none tracking-[-0.035em] sm:text-5xl lg:text-[3.35rem]"
          >
            <span>{before}</span>
            <span className="text-[#f41cdc]" aria-hidden="true">
              →
            </span>
            <span className="text-[#f41cdc]">{after}</span>
          </Title>
          <div className="mt-6 max-w-[36rem] space-y-4 text-[17px] leading-[1.7] text-neutral-600">{body}</div>
        </div>
        {frames.length > 0 ? (
          <div className="flex flex-col items-center gap-8 lg:items-end">
            <div className="flex flex-wrap items-start justify-center gap-6 lg:justify-end">
              {frames.map((frame) => (
                <FramedShot key={frame.image.src} image={frame.image} label={frame.label} onOpen={onOpen} />
              ))}
            </div>
            {plates && plates.length === 1 ? (
              <div className="w-full max-w-[28rem]">
                <FramedPlate image={plates[0]} onOpen={onOpen} />
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
      {plates && plates.length > 1 ? (
        <div className="mt-10 grid max-w-3xl gap-5 sm:grid-cols-2">
          {plates.map((plate) => (
            <FramedPlate key={plate.src} image={plate} onOpen={onOpen} />
          ))}
        </div>
      ) : null}
    </article>
  );
}

export default function HotAndViralPage({ preview, initialNowMs }: HotAndViralPageProps) {
  const nowMs = useTrustedNow(initialNowMs);
  const state = preview ?? getPageState(nowMs);
  const [activeShot, setActiveShot] = useState<HotAndViralImage | null>(null);
  const featuredWins = FEATURED_WIN_SRCS.map((src) => winShots.find((shot) => shot.src === src)).filter(
    (shot): shot is HotAndViralImage => Boolean(shot),
  );
  const cammySummary = cammyMore.find((shot) => shot.src.endsWith("cammy-90-days.jpg")) ?? null;

  useEffect(() => {
    if (!activeShot) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveShot(null);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [activeShot]);

  if (state === "closed") {
    return (
      <div className="overflow-x-clip bg-white text-black" data-state="closed">
        {preview ? <PreviewNote state="closed" /> : null}
        <section className="container-elegant py-24 md:py-32">
          <div className="max-w-xl">
            <h1 className={`${h2} text-black`}>{copy.closed.heading}</h1>
            <p className={`${lede} mt-6`}>{copy.closed.body}</p>
            <div className="mt-10">
              <AccessForm list="next_round" button={copy.closed.button} success={copy.closed.success} />
            </div>
            <GoogleReviewsLink className="mt-10" />
          </div>
        </section>
        {activeShot ? <ShotLightbox image={activeShot} onClose={() => setActiveShot(null)} /> : null}
      </div>
    );
  }

  const cammyFrames = [
    cammyShots.before ? { image: cammyShots.before, label: "Before" } : null,
    cammyShots.after ? { image: cammyShots.after, label: "After" } : null,
  ].filter((frame): frame is { image: HotAndViralImage; label: string } => Boolean(frame));

  return (
    <div className="overflow-x-clip bg-white text-black" data-state={state}>
      {preview ? <PreviewNote state={state} /> : null}
      <CountdownBanner nowMs={nowMs} state={state} sticky />

      <section className="bg-white">
        <div className="container-elegant grid items-start gap-10 py-10 md:py-14 lg:grid-cols-[minmax(0,1.12fr)_minmax(280px,0.88fr)] lg:gap-14 lg:py-16">
          <div className="min-w-0">
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-700">
              <span className="h-1.5 w-1.5 rounded-full bg-[#f41cdc]" aria-hidden="true" />
              {copy.hero.eyebrow}
            </p>
            <h1 className="max-w-[20em] font-heading text-[2.05rem] leading-[1.08] tracking-[-0.03em] text-black sm:text-[2.4rem] lg:text-[2.65rem]">
              {copy.hero.headline}
            </h1>
            <div className="mt-6 max-w-[38rem] space-y-5 text-[17px] leading-[1.75] text-neutral-700">
              {copy.hero.paragraphs.map((paragraph) => (
                <p key={paragraph.text} className={paragraph.bold ? "font-bold text-black" : undefined}>
                  {paragraph.text}
                </p>
              ))}
              <p>{copy.hero.window}</p>
            </div>
            <div className="mt-8">
              <StateButton state={state}>{copy.hero.button}</StateButton>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[400px] lg:mx-0 lg:max-w-[440px] lg:justify-self-end">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-[#eceae6] shadow-[0_24px_60px_-36px_rgba(0,0,0,0.55)] ring-1 ring-black/10">
              <Image
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                fill
                priority
                sizes="(max-width: 1024px) 90vw, 440px"
                className="object-cover object-[74%_24%]"
              />
            </div>
            <a
              href="#cammy"
              className="relative z-10 -mt-10 mr-auto block w-[13.5rem] rounded-2xl bg-white p-4 shadow-[0_18px_50px_-24px_rgba(0,0,0,0.45)] ring-1 ring-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black sm:p-5"
            >
              <p className={eyebrow}>{copy.cammy.label}</p>
              <p className="mt-2 font-heading text-[1.65rem] leading-[1.05] tracking-[-0.03em] text-black">
                <span className="block">{copy.cammy.beforeStat}</span>
                <span className="mt-1 block text-[#f41cdc]">
                  <span aria-hidden="true">→ </span>
                  {copy.cammy.afterStat}
                </span>
              </p>
            </a>
          </div>
        </div>
      </section>

      <section className={`${band} bg-black text-white`} aria-labelledby="problem-heading">
        <div className="container-elegant">
          <h2 id="problem-heading" className={`${h2} max-w-[16em] text-white`}>
            {copy.problem.heading}
          </h2>
          <div className="mt-6 max-w-[40rem] space-y-5 text-[17px] leading-[1.75] text-white/80">
            {copy.problem.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={`${band} bg-[#f3f0ea]`} aria-labelledby="ai-heading">
        <div className="container-elegant">
          <div className="max-w-3xl">
            <h2 id="ai-heading" className={`${h2} max-w-[16em]`}>
              {copy.ai.heading}
            </h2>
            <div className={`${lede} mt-6 space-y-5`}>
              {copy.ai.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={`${band} bg-white`} aria-labelledby="copycat-heading">
        <div className="container-elegant">
          <p className={`${eyebrow} mb-5`}>{copy.copycats.eyebrow}</p>
          <h2 id="copycat-heading" className={`${h2} max-w-[16em]`}>
            {copy.copycats.heading}
          </h2>
          {copycatPairs.some((pair) => pair.mine || pair.theirs) ? (
            <div className="mt-12 space-y-10">
              {copycatPairs.map((pair, index) =>
                pair.mine || pair.theirs ? (
                  <div key={index}>
                    <div className="flex flex-wrap items-start gap-6 sm:gap-8">
                      {pair.mine ? <FramedShot image={pair.mine} label="Mine" onOpen={setActiveShot} /> : null}
                      {pair.theirs ? <FramedShot image={pair.theirs} label="Theirs" onOpen={setActiveShot} /> : null}
                    </div>
                    {pair.note ? (
                      <div className="mt-8">
                        <FramedShot image={pair.note} onOpen={setActiveShot} className="w-[240px]" />
                      </div>
                    ) : null}
                  </div>
                ) : null
              )}
            </div>
          ) : null}
          <div className={`${lede} mt-12 space-y-5`}>
            {copy.copycats.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      <section className={`${band} bg-[#f3f0ea]`} aria-labelledby="cammy-stat">
        <div className="container-elegant">
          <ResultCase
            id="cammy"
            titleAs="h2"
            titleId="cammy-stat"
            kicker={copy.cammy.label}
            before={copy.cammy.beforeStat}
            after={copy.cammy.afterStat}
            body={
              <>
                {copy.cammy.story.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </>
            }
            frames={cammyFrames}
            plates={cammySummary ? [cammySummary] : []}
            onOpen={setActiveShot}
          />
        </div>
      </section>

      {memberResults.length > 0 || featuredWins.length > 0 ? (
        <section className={`${band} bg-white`} aria-labelledby="members-heading">
          <div className="container-elegant">
            {memberResults.length > 0 ? (
              <>
                <h2 id="members-heading" className={`${h2} max-w-[14em]`}>
                  {copy.membersHeading}
                </h2>
                <div className="mt-12 space-y-16 md:mt-16 md:space-y-20">
                  {memberResults.map((member) => {
                    const frames = [
                      member.before ? { image: member.before, label: "Before" } : null,
                      member.after ? { image: member.after, label: "After" } : null,
                    ].filter((frame): frame is { image: HotAndViralImage; label: string } => Boolean(frame));
                    const plates = [member.summary, member.profile].filter(
                      (plate): plate is HotAndViralImage => Boolean(plate),
                    );
                    return (
                      <ResultCase
                        key={member.name}
                        kicker={`${member.name} · ${member.role}`}
                        before={member.beforeStat}
                        after={member.afterStat}
                        body={
                          <>
                            <p>{member.sentences[0]}</p>
                            <p>{member.sentences[1]}</p>
                          </>
                        }
                        frames={frames}
                        plates={plates}
                        onOpen={setActiveShot}
                      />
                    );
                  })}
                </div>
              </>
            ) : (
              <h2 id="members-heading" className={h2}>
                {copy.winsHeading}
              </h2>
            )}
            {featuredWins.length > 0 ? (
              <div className={memberResults.length > 0 ? "mt-16 md:mt-24" : "mt-10"}>
                {memberResults.length > 0 ? (
                  <h3 className="font-heading text-[1.7rem] leading-none tracking-[-0.03em] md:text-[2.1rem]">
                    {copy.winsHeading}
                  </h3>
                ) : null}
                <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {featuredWins.map((shot) => (
                    <FramedPlate key={shot.src} image={shot} onOpen={setActiveShot} />
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className={`${band} border-t border-black/5 bg-white`} aria-labelledby="coach-heading">
        <div className="container-elegant grid items-start gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1.14fr)] lg:gap-16">
          <div className="order-2 lg:order-1">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[420px] overflow-hidden rounded-[1.75rem] bg-[#eceae6] shadow-[0_24px_60px_-36px_rgba(0,0,0,0.5)] ring-1 ring-black/10 lg:mx-0">
              <Image
                src={COACH_IMAGE.src}
                alt={COACH_IMAGE.alt}
                fill
                sizes="(max-width: 1024px) 90vw, 420px"
                className="object-cover object-[center_8%]"
              />
            </div>
          </div>
          <div className="order-1 min-w-0 lg:order-2">
            <p className={`${eyebrow} mb-5`}>{copy.coach.eyebrow}</p>
            <h2 id="coach-heading" className={`${h2} max-w-[12em]`}>
              {copy.coach.heading}
            </h2>
            <div className={`${lede} mt-6 space-y-5`}>
              <p>On June 15, 2026, Meta deleted my account after a mass-reporting campaign. Seven years of content, gone overnight.</p>
              <p>
                I started again with zero followers and grew to {coachStats.instagramFollowers} on Instagram and{" "}
                {coachStats.tiktokFollowers} on TikTok, with {coachStats.viewsStat}.
              </p>
              <p>
                I&apos;m a photographer and videographer, and I&apos;ve spent years building brands for women who are
                excellent at what they do.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={`${band} bg-[#f3f0ea]`} aria-labelledby="inside-heading">
        <div className="container-elegant">
          <div className="max-w-3xl">
            <h2 id="inside-heading" className={`${h2} max-w-[16em]`}>
              {copy.inside.heading}
            </h2>
            <div className={`${lede} mt-6 space-y-5`}>
              {copy.inside.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <ol className="mt-10">
              {copy.inside.items.map((item, index) => (
                <li
                  key={item}
                  className="grid grid-cols-[2.5rem_1fr] gap-3 border-t border-black/10 py-6 first:border-t-0"
                >
                  <span className="pt-1 font-sans text-sm font-semibold tabular-nums text-[#f41cdc]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="max-w-xl text-[17px] leading-relaxed text-neutral-800">{item}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={`${band} bg-white`}>
        <div className="container-elegant grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <h2 id="who-heading" className={h2}>
              {copy.who.heading}
            </h2>
            <p className="mt-6 text-[17px] text-neutral-800">{copy.who.intro}</p>
            <div className="mt-6">
              <CheckList items={copy.who.points} />
            </div>
          </div>
          <div>
            <h2 id="only-way-heading" className={h2}>
              {copy.onlyWay.heading}
            </h2>
            <p className={`${lede} mt-6`}>{copy.onlyWay.body}</p>
          </div>
        </div>
      </section>

      <section id="pricing" className={`${scrollTarget} ${band} bg-[#f3f0ea]`} aria-labelledby="pricing-heading">
        <div className="container-elegant">
          <h2 id="pricing-heading" className={`${h2} max-w-[16em]`}>
            {copy.pricing.heading}
          </h2>
          <div className={`${lede} mt-6 space-y-5`}>
            {copy.pricing.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          {state === "before" ? <p className={`${lede} mt-4`}>{copy.pricing.beforeNote}</p> : null}
          <div className="mt-10">
            <PricingCards state={state} />
          </div>
          <p className="mt-8 text-[15px] leading-relaxed text-neutral-700">{copy.pricing.cancel}</p>
          {state === "open" ? (
            <div className="mt-12 rounded-[1.75rem] bg-white p-3 ring-1 ring-black/10 md:p-6">
              <StripePricingTable />
            </div>
          ) : null}
        </div>
      </section>

      {state === "before" ? (
        <section id="first-access" className={`${scrollTarget} scroll-mb-28 ${band} bg-white`}>
          <div className="container-elegant">
            <div className="max-w-xl">
              <h2 className={h2}>{copy.firstAccess.heading}</h2>
              <p className={`${lede} mt-6`}>{copy.firstAccess.body}</p>
              <div className="mt-10">
                <AccessForm list="waitlist" button={copy.firstAccess.button} success={copy.firstAccess.success} />
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className={`${band} border-t border-black/5 bg-white`} aria-labelledby="faq-heading">
        <div className="container-elegant">
          <div className="max-w-3xl">
            <h2 id="faq-heading" className={h2}>
              FAQ
            </h2>
            <div className="mt-8 divide-y divide-black/10 border-y border-black/10">
              {copy.faq.map((item) => (
                <details key={item.q} className="group py-5">
                  <summary className="cursor-pointer list-none text-[17px] font-medium text-black [&::-webkit-details-marker]:hidden">
                    <span className="flex items-start justify-between gap-6">
                      {item.q}
                      <span aria-hidden="true" className="text-neutral-400 group-open:hidden">
                        +
                      </span>
                      <span aria-hidden="true" className="hidden text-neutral-400 group-open:inline">
                        –
                      </span>
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-[16px] leading-relaxed text-neutral-600">{item.a}</p>
                </details>
              ))}
            </div>
            <GoogleReviewsLink className="mt-8" />
          </div>
        </div>
      </section>

      <section className="bg-black py-20 text-white md:py-[7.25rem]" aria-labelledby="final-heading">
        <div className="container-elegant">
          <div className="mx-auto max-w-3xl text-center">
            <h2 id="final-heading" className={`${h2} text-white`}>
              {copy.final.heading}
            </h2>
            <div className="mx-auto mt-6 max-w-xl space-y-5 text-[17px] leading-relaxed text-white/80">
              {copy.final.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mx-auto mt-10 max-w-3xl">
              <p className="text-lg font-semibold text-white sm:text-xl">
                {state === "before" ? copy.countdown.before : copy.countdown.open}
              </p>
              <div className="mt-3">
                <CountdownDigits nowMs={nowMs} state={state} />
              </div>
              <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white sm:text-base">{copy.countdown.line}</p>
            </div>
            <div className="mt-8">
              <StateButton state={state} tone="light" />
            </div>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-black/10 bg-white/95 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur md:hidden">
        <StateButton state={state} className="w-full">
          {state === "before" ? copy.sticky.before : copy.sticky.open}
        </StateButton>
      </div>

      {activeShot ? <ShotLightbox image={activeShot} onClose={() => setActiveShot(null)} /> : null}
    </div>
  );
}

function GoogleReviewsLink({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <p className="max-w-md text-[16px] leading-relaxed text-neutral-700">
        The reviews are on the West Rose Media Google listing.
      </p>
      <p className="mt-4">
        <a
          href={GOOGLE_REVIEWS_SHARE_URL}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-neutral-500 underline decoration-neutral-300 underline-offset-4 transition-colors hover:text-neutral-800"
        >
          Read the Google reviews
        </a>
      </p>
    </div>
  );
}

function PreviewNote({ state }: { state: PageState }) {
  const label = state === "before" ? "before doors open" : state === "open" ? "doors open" : "doors closed";
  return (
    <p className="bg-neutral-100 px-4 py-2 text-center text-xs tracking-wide text-neutral-600">
      Preview: {label}. Remove the preview from the address to follow Calgary time.
    </p>
  );
}
