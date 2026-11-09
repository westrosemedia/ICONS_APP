"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
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

const scrollTarget = "scroll-mt-44";

const sectionTitle =
  "font-heading text-[1.875rem] leading-[1.15] tracking-tight text-balance sm:text-4xl md:text-[2.5rem]";

const shotFrame =
  "block overflow-hidden rounded-2xl border border-gray-200 bg-white p-1.5 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.7)]";

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

function CountdownDigits({ nowMs, state }: { nowMs: number; state: Exclude<PageState, "closed"> }) {
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
      className="flex justify-center gap-2.5 sm:gap-4"
      role="timer"
      aria-label={`${label} ${parts.days} days ${parts.hours} hours ${parts.minutes} minutes ${parts.seconds} seconds`}
    >
      {units.map(([unit, value]) => (
        <div key={unit} className="min-w-[2.6rem] text-center sm:min-w-[3rem]">
          <div className="font-heading text-[1.65rem] leading-none tabular-nums sm:text-[1.85rem]">{pad(value)}</div>
          <div className="mt-1 text-[9px] uppercase tracking-[0.16em] text-white/65">{unit}</div>
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
  return (
    <div
      className={`${
        sticky ? "sticky top-[73px] z-30" : "rounded-xl border border-white/15"
      } bg-black text-white`}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-1 px-4 py-2 sm:flex-row sm:justify-center sm:gap-6 sm:py-2.5">
        <p className="text-center text-[13px] leading-tight tracking-wide sm:text-sm">
          {state === "before" ? copy.countdown.before : copy.countdown.open}
        </p>
        <CountdownDigits nowMs={nowMs} state={state} />
        {state === "open" ? (
          <p className="text-center text-[13px] leading-tight tracking-wide sm:text-sm">{copy.countdown.openSuffix}</p>
        ) : null}
      </div>
    </div>
  );
}

function StateButton({
  state,
  className,
  children,
}: {
  state: Exclude<PageState, "closed">;
  className?: string;
  children?: string;
}) {
  const href = state === "before" ? "#first-access" : "#pricing";
  const label = children ?? (state === "before" ? copy.hero.buttonBefore : copy.hero.buttonOpen);
  return (
    <a href={href} className={className ?? "btn"}>
      {label}
    </a>
  );
}

function ProofStill({
  image,
  label,
  onOpen,
}: {
  image: HotAndViralImage;
  label?: string;
  onOpen: (image: HotAndViralImage) => void;
}) {
  const wide = image.width / image.height > 1.15;

  return (
    <button
      type="button"
      onClick={() => onOpen(image)}
      className={`mx-auto block w-full text-left ${wide ? "max-w-xl" : "max-w-[340px]"}`}
    >
      <figure>
        <span className={shotFrame}>
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            quality={70}
            sizes="(max-width: 768px) 340px, 340px"
            className="h-auto w-full rounded-xl"
          />
        </span>
        {label ? <figcaption className="mt-3 text-center text-caption">{label}</figcaption> : null}
      </figure>
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
    <div className="grid items-stretch gap-6 md:grid-cols-2">
      <article className="order-2 flex flex-col rounded-xl border border-gray-200 bg-white p-8 md:order-1 md:p-10">
        <h3 className="font-heading text-3xl">Monthly</h3>
        <p className="mt-6 text-lg text-gray-400 line-through">{copy.pricing.monthly.regular}</p>
        <p className="mt-2 font-heading text-6xl leading-none">{copy.pricing.monthly.sale}</p>
        <p className="mt-2 text-sm uppercase tracking-[0.18em] text-gray-500">{copy.pricing.monthly.cadence}</p>
        <p className="mt-6 text-editorial">{copy.pricing.monthly.lock}</p>
        <p className="mt-2 text-sm uppercase tracking-[0.18em] text-gray-500">{copy.pricing.monthly.gst}</p>
        <div className="mt-auto pt-8">
          {before ? (
            <>
              <p className="mb-4 text-editorial">{copy.pricing.beforeNote}</p>
              <StateButton state="before" className="btn w-full" />
            </>
          ) : (
            <a href="#checkout" className="btn w-full">
              {copy.pricing.monthly.button}
            </a>
          )}
        </div>
      </article>

      <article className="order-1 flex flex-col rounded-xl bg-black p-8 text-white md:order-2 md:p-10">
        <p className="text-caption text-white/70">{copy.pricing.yearly.badge}</p>
        <h3 className="mt-3 font-heading text-3xl text-white">Pay in full</h3>
        <p className="mt-6 text-lg text-white/45 line-through">{copy.pricing.yearly.regular}</p>
        <p className="mt-2 font-heading text-6xl leading-none text-white">{copy.pricing.yearly.sale}</p>
        <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/60">{copy.pricing.yearly.cadence}</p>
        <p className="mt-6 text-lg leading-relaxed text-white/90">{copy.pricing.yearly.note}</p>
        <p className="mt-2 text-sm uppercase tracking-[0.18em] text-white/60">{copy.pricing.yearly.gst}</p>
        <div className="mt-auto pt-8">
          {before ? (
            <>
              <p className="mb-4 text-lg leading-relaxed text-white/90">{copy.pricing.beforeNote}</p>
              <StateButton state="before" className="btn w-full bg-white text-black hover:bg-gray-100 hover:text-black" />
            </>
          ) : (
            <a
              href="#checkout"
              className="btn w-full bg-white text-black hover:bg-gray-100 hover:text-black"
            >
              {copy.pricing.yearly.button}
            </a>
          )}
        </div>
      </article>
    </div>
  );
}

export default function HotAndViralPage({ preview, initialNowMs }: HotAndViralPageProps) {
  const nowMs = useTrustedNow(initialNowMs);
  const state = preview ?? getPageState(nowMs);
  const [activeShot, setActiveShot] = useState<HotAndViralImage | null>(null);

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
        <section className="container-elegant max-w-xl py-24 md:py-32">
          <h1 className={`${sectionTitle} text-black`}>{copy.closed.heading}</h1>
          <p className="text-editorial mt-6 text-gray-700">{copy.closed.body}</p>
          <div className="mt-10">
            <AccessForm list="next_round" button={copy.closed.button} success={copy.closed.success} />
          </div>
        </section>
        {activeShot ? <ShotLightbox image={activeShot} onClose={() => setActiveShot(null)} /> : null}
      </div>
    );
  }

  return (
    <div className="overflow-x-clip bg-white text-black" data-state={state}>
      {preview ? <PreviewNote state={state} /> : null}
      <CountdownBanner nowMs={nowMs} state={state} sticky />

      <section className="container-elegant grid items-start gap-10 py-8 md:grid-cols-2 md:gap-14 md:py-12">
        <div className="min-w-0">
          <p className="text-caption mb-4">{copy.hero.eyebrow}</p>
          <h1 className={`${sectionTitle} text-black`}>{copy.hero.headline}</h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-gray-700 md:text-lg">{copy.hero.subheadline}</p>
          <ul className="mt-6 space-y-3">
            {copy.hero.checklist.map((item) => (
              <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-gray-800">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <StateButton state={state} />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-600">{copy.hero.underButton}</p>
          </div>
        </div>
        <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-2xl md:justify-self-end">
          <Image
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            fill
            priority
            sizes="(max-width: 768px) 90vw, 440px"
            className="object-cover object-[72%_center]"
          />
        </div>
      </section>

      <section className="border-t border-gray-200 py-16 md:py-24" aria-labelledby="problem-heading">
        <div className="container-elegant">
          <h2 id="problem-heading" className={`${sectionTitle} max-w-3xl`}>
            {copy.problem.heading}
          </h2>
          <p className="text-editorial mt-6 max-w-2xl text-gray-700">{copy.problem.body}</p>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {copy.problem.cards.map((card) => (
              <article key={card.title} className="rounded-xl border border-gray-200 p-8">
                <h3 className="font-heading text-3xl">{card.title}</h3>
                <p className="mt-4 text-base leading-relaxed text-gray-700">{card.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-14 max-w-2xl">
            <h3 className="font-heading text-3xl md:text-[2.5rem]">{copy.problem.triedHeading}</h3>
            <p className="text-editorial mt-6 text-gray-700">{copy.problem.triedBody}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f2] py-16 md:py-24" aria-labelledby="ai-heading">
        <div className="container-elegant max-w-3xl">
          <p className="text-caption mb-5">{copy.ai.eyebrow}</p>
          <h2 id="ai-heading" className={sectionTitle}>
            {copy.ai.heading}
          </h2>
          <p className="text-editorial mt-6 text-gray-700">{copy.ai.body}</p>
        </div>
      </section>

      <section className="py-16 md:py-24" aria-labelledby="copycat-heading">
        <div className="container-elegant">
          <p className="text-caption mb-5">{copy.copycats.eyebrow}</p>
          <h2 id="copycat-heading" className={`${sectionTitle} max-w-4xl`}>
            {copy.copycats.heading}
          </h2>
          {copycatPairs.some((pair) => pair.mine || pair.theirs) ? (
            <div className="mt-12 space-y-10">
              {copycatPairs.map((pair, index) =>
                pair.mine || pair.theirs ? (
                  <div key={index}>
                    <div className="flex flex-col items-center justify-center gap-8 sm:flex-row sm:items-start">
                      {pair.mine ? <ProofStill image={pair.mine} label="Mine" onOpen={setActiveShot} /> : null}
                      {pair.theirs ? <ProofStill image={pair.theirs} label="Theirs" onOpen={setActiveShot} /> : null}
                    </div>
                    {pair.note ? (
                      <div className="mt-8 flex justify-center">
                        <ProofStill image={pair.note} onOpen={setActiveShot} />
                      </div>
                    ) : null}
                  </div>
                ) : null
              )}
            </div>
          ) : null}
          <p className="text-editorial mx-auto mt-12 max-w-2xl text-center text-gray-700">{copy.copycats.body}</p>
        </div>
      </section>

      <section className="border-t border-gray-200 py-16 md:py-24" aria-labelledby="cammy-stat">
        <div className="container-elegant">
          <p className="text-caption mb-6">{copy.cammy.label}</p>
          <h2 id="cammy-stat" className="font-heading text-4xl leading-none tracking-tight sm:text-5xl md:text-6xl">
            <span className="block md:inline">{copy.cammy.beforeStat}</span>
            <span className="my-3 block text-gray-400 md:mx-6 md:my-0 md:inline-block" aria-hidden="true">
              →
            </span>
            <span className="block md:inline">{copy.cammy.afterStat}</span>
          </h2>
          <p className="text-editorial mt-10 max-w-2xl text-gray-700">{copy.cammy.story}</p>
          {cammyShots.before || cammyShots.after ? (
            <div className="mt-10 flex flex-col items-center justify-center gap-8 sm:flex-row sm:items-start">
              {cammyShots.before ? (
                <ProofStill image={cammyShots.before} label="Before" onOpen={setActiveShot} />
              ) : null}
              {cammyShots.after ? (
                <ProofStill image={cammyShots.after} label="After" onOpen={setActiveShot} />
              ) : null}
            </div>
          ) : null}
          {cammyMore.length > 0 ? (
            <div className="mt-8 flex flex-wrap items-start justify-center gap-8">
              {cammyMore.map((shot) => (
                <ProofStill key={shot.src} image={shot} onOpen={setActiveShot} />
              ))}
            </div>
          ) : null}
        </div>
      </section>

      {memberResults.length > 0 || winShots.length > 0 ? (
        <section className="border-t border-gray-200 py-16 md:py-24" aria-labelledby="members-heading">
          <div className="container-elegant">
            <h2 id="members-heading" className={sectionTitle}>
              {memberResults.length > 0 ? copy.membersHeading : copy.winsHeading}
            </h2>
            {memberResults.length > 0 ? (
              <div className="mt-16 space-y-20">
                {memberResults.map((member) => (
                  <article key={member.name}>
                    <p className="text-caption">
                      {member.name} · {member.role}
                    </p>
                    <p className="mt-4 flex max-w-full flex-wrap items-baseline gap-x-3 gap-y-2 font-heading text-3xl leading-[1.05] md:gap-x-4 md:text-5xl">
                      <span>{member.beforeStat}</span>
                      <span className="text-gray-400" aria-hidden="true">
                        →
                      </span>
                      <span>{member.afterStat}</span>
                    </p>
                    <div className="mt-6 max-w-2xl space-y-4 text-base leading-relaxed text-gray-700">
                      <p>{member.sentences[0]}</p>
                      <p>{member.sentences[1]}</p>
                    </div>
                    <div className="mt-10 flex flex-col items-center justify-center gap-8 sm:flex-row sm:items-start">
                      {member.before ? (
                        <ProofStill image={member.before} label="Before" onOpen={setActiveShot} />
                      ) : null}
                      {member.after ? (
                        <ProofStill image={member.after} label="After" onOpen={setActiveShot} />
                      ) : null}
                    </div>
                    {member.summary || member.profile ? (
                      <div className="mt-8 flex flex-wrap items-start justify-center gap-8">
                        {member.summary ? <ProofStill image={member.summary} onOpen={setActiveShot} /> : null}
                        {member.profile ? <ProofStill image={member.profile} onOpen={setActiveShot} /> : null}
                      </div>
                    ) : null}
                  </article>
                ))}
              </div>
            ) : null}
            {winShots.length > 0 ? (
              <div className={`${memberResults.length > 0 ? "mt-16" : "mt-12"} mx-auto max-w-5xl columns-1 gap-6 sm:columns-2 lg:columns-3`}>
                {winShots.map((shot) => (
                  <button
                    key={shot.src}
                    type="button"
                    onClick={() => setActiveShot(shot)}
                    className="mb-6 block w-full break-inside-avoid"
                  >
                    <span className={shotFrame}>
                      <Image
                        src={shot.src}
                        alt={shot.alt}
                        width={shot.width}
                        height={shot.height}
                        quality={60}
                        sizes="(max-width: 768px) 340px, 320px"
                        className="h-auto w-full rounded-xl"
                      />
                    </span>
                  </button>
                ))}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      <section className="border-t border-gray-200 py-16 md:py-24" aria-labelledby="coach-heading">
        <div className="container-elegant grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div className="min-w-0">
            <p className="text-caption mb-5">{copy.coach.eyebrow}</p>
            <h2 id="coach-heading" className={sectionTitle}>
              {copy.coach.heading}
            </h2>
            <div className="text-editorial mt-6 space-y-5 text-gray-700">
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
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[440px] overflow-hidden rounded-2xl md:justify-self-end">
            <Image
              src={COACH_IMAGE.src}
              alt={COACH_IMAGE.alt}
              fill
              sizes="(max-width: 768px) 90vw, 440px"
              className="object-cover object-[center_40%]"
            />
          </div>
        </div>
      </section>

      <section className="bg-[#f7f5f2] py-16 md:py-24" aria-labelledby="inside-heading">
        <div className="container-elegant max-w-3xl">
          <h2 id="inside-heading" className={sectionTitle}>
            {copy.inside.heading}
          </h2>
          <ol className="mt-12 space-y-10">
            {copy.inside.steps.map((step, index) => (
              <li key={step.title} className="grid grid-cols-[auto_1fr] gap-5">
                <span className="font-heading text-3xl text-gray-400">{index + 1}</span>
                <div>
                  <h3 className="font-heading text-3xl">{step.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-gray-700">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-24" aria-labelledby="who-heading">
        <div className="container-elegant max-w-3xl">
          <h2 id="who-heading" className={sectionTitle}>
            {copy.who.heading}
          </h2>
          <p className="mt-8 text-lg">{copy.who.intro}</p>
          <ul className="mt-6 space-y-4">
            {copy.who.points.map((point) => (
              <li key={point} className="flex gap-3 text-base leading-relaxed text-gray-800">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-black" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-gray-200 py-16 md:py-24" aria-labelledby="only-way-heading">
        <div className="container-elegant max-w-3xl">
          <h2 id="only-way-heading" className={sectionTitle}>
            {copy.onlyWay.heading}
          </h2>
          <p className="text-editorial mt-6 text-gray-700">{copy.onlyWay.body}</p>
        </div>
      </section>

      <section id="pricing" className={`${scrollTarget} border-t border-gray-200 py-16 md:py-24`} aria-labelledby="pricing-heading">
        <div className="container-elegant">
          <h2 id="pricing-heading" className={`${sectionTitle} max-w-3xl`}>
            {copy.pricing.heading}
          </h2>
          <div className="mt-10">
            <CountdownBanner nowMs={nowMs} state={state} />
          </div>
          <div className="mt-10">
            <PricingCards state={state} />
          </div>
          <p className="mt-8 text-base leading-relaxed text-gray-700">{copy.pricing.cancel}</p>
          {state === "open" ? <StripePricingTable /> : null}
        </div>
      </section>

      {state === "before" ? (
        <section id="first-access" className={`${scrollTarget} scroll-mb-28 border-t border-gray-200 py-16 md:py-24`}>
          <div className="container-elegant max-w-xl">
            <h2 className={sectionTitle}>{copy.firstAccess.heading}</h2>
            <p className="text-editorial mt-6 text-gray-700">{copy.firstAccess.body}</p>
            <div className="mt-10">
              <AccessForm
                list="waitlist"
                button={copy.firstAccess.button}
                success={copy.firstAccess.success}
              />
            </div>
          </div>
        </section>
      ) : null}

      <section className="border-t border-gray-200 py-16 md:py-24" aria-labelledby="faq-heading">
        <div className="container-elegant max-w-3xl">
          <h2 id="faq-heading" className={sectionTitle}>
            FAQ
          </h2>
          <div className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
            {copy.faq.map((item) => (
              <details key={item.q} className="group py-5">
                <summary className="cursor-pointer list-none pr-8 text-lg font-medium [&::-webkit-details-marker]:hidden">
                  <span className="flex items-start justify-between gap-6">
                    {item.q}
                    <span aria-hidden="true" className="text-gray-400 group-open:hidden">
                      +
                    </span>
                    <span aria-hidden="true" className="hidden text-gray-400 group-open:inline">
                      –
                    </span>
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-20 text-white md:py-28" aria-labelledby="final-heading">
        <div className="container-elegant max-w-3xl text-center">
          <h2 id="final-heading" className={`${sectionTitle} text-white`}>
            {copy.final.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/80">{copy.final.body}</p>
          <div className="mt-10">
            <CountdownBanner nowMs={nowMs} state={state} />
          </div>
          <div className="mt-10">
            <StateButton
              state={state}
              className="btn bg-white text-black hover:bg-gray-100 hover:text-black"
            />
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-black p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
        <StateButton
          state={state}
          className="btn w-full bg-white text-black hover:bg-gray-100 hover:text-black"
        >
          {state === "before" ? copy.sticky.before : copy.sticky.open}
        </StateButton>
      </div>

      {activeShot ? <ShotLightbox image={activeShot} onClose={() => setActiveShot(null)} /> : null}
    </div>
  );
}

function PreviewNote({ state }: { state: PageState }) {
  const label =
    state === "before" ? "before doors open" : state === "open" ? "doors open" : "doors closed";
  return (
    <p className="bg-gray-100 px-4 py-2 text-center text-xs tracking-wide text-gray-600">
      Preview: {label}. Remove the preview from the address to follow Calgary time.
    </p>
  );
}
