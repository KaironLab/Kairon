"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { ArrowIcon } from "@/components/ui/primitives";
import { CASE_STUDIES, type CaseStudy, type CaseStudyMetric } from "@/lib/site";

/* ————— count-up metric ————— */

function CountUp({ metric, color }: { metric: CaseStudyMetric; color: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  // Server HTML carries the real value (no-JS/SEO-safe); the count-up
  // re-runs it from 0 only when the card enters the viewport.
  const target = Number(metric.count);
  // Suffix = everything after the numeric part ("231K+" -> "K+", "93%+" -> "%+",
  // "10,000+" -> "+") so animated numbers keep their unit.
  const suffix = metric.value.replace(/^[\d,.]+/, "");
  const finalText =
    metric.count === "" || Number.isNaN(target)
      ? metric.value
      : target.toLocaleString("en-US") + suffix;
  const [text, setText] = useState(finalText);

  useEffect(() => {
    if (!inView || metric.count === "" || Number.isNaN(target)) return;
    if (reduce) return;
    const t0 = performance.now();
    const dur = 900;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur);
      const eased = 1 - Math.pow(1 - p, 3);
      setText(Math.round(target * eased).toLocaleString("en-US") + suffix);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, reduce, metric.count, suffix]);

  return (
    <span ref={ref} className="block text-3xl font-semibold tracking-[-0.02em]" style={{ color }}>
      {text}
    </span>
  );
}

/* ————— scroll progress rail ————— */

function ScrollRail() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const probe = window.innerHeight * 0.4;
      let current = 0;
      for (let i = 0; i < CASE_STUDIES.length; i++) {
        const el = document.getElementById(`case-${CASE_STUDIES[i].index}`);
        if (!el) continue;
        if (el.getBoundingClientRect().top <= probe) current = i;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className="sticky top-40 hidden self-start xl:block"
    >
      <ul className="space-y-5">
        {CASE_STUDIES.map((cs, i) => (
          <li key={cs.index}>
            <a
              href={`#case-${cs.index}`}
              className={`flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] transition-colors duration-500 ${
                i === active ? "text-accent" : "text-faint hover:text-muted"
              }`}
            >
              <span
                className={`h-px transition-all duration-500 ${
                  i === active ? "w-8 bg-accent" : "w-4 bg-line"
                }`}
              />
              {cs.index}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ————— single case study ————— */

function CaseStudyArticle({ cs }: { cs: CaseStudy }) {
  return (
    <article
      id={`case-${cs.index}`}
      className="grid scroll-mt-28 gap-12 py-20 sm:py-28 lg:grid-cols-[1fr_1.2fr] lg:gap-0"
    >
      {/* LEFT — brand panel + metrics */}
      <div className="lg:pr-14">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-faint">
            Case study {cs.index}
          </p>
          <h3 className="mt-3 text-3xl font-bold tracking-[-0.02em] text-ink">
            {cs.brand}
          </h3>
        </Reveal>

        {/* brand panel — colored block with wordmark (original treatment) */}
        <Reveal delay={0.08}>
          <a
            href={cs.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 block overflow-hidden border border-line transition-colors duration-500 hover:border-faint"
          >
            <div
              className="flex aspect-[4/3] flex-col items-center justify-center gap-3 px-8 text-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              style={{ backgroundColor: cs.panel.bg }}
            >
              <span
                className="font-sans text-5xl font-extrabold tracking-[-0.03em] sm:text-6xl"
                style={{ color: cs.panel.ink }}
              >
                {cs.wordmark}
              </span>
              <span
                className="max-w-xs font-mono text-[10px] uppercase tracking-[0.24em]"
                style={{ color: cs.panel.sub }}
              >
                {cs.product}
              </span>
            </div>
            <div className="flex items-center justify-between border-t border-line bg-bg px-5 py-3">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                {new URL(cs.url).hostname.replace(/^www\./, "")}
              </span>
              <span className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted transition-colors duration-300 group-hover:text-accent">
                Visit site <ArrowIcon className="h-2.5 w-2.5" />
              </span>
            </div>
          </a>
        </Reveal>

        {/* metric grid — 2×2 on mobile, 2×2 on desktop within column */}
        <div className="mt-8 grid grid-cols-2 gap-px border border-line bg-line">
          {cs.metrics.map((m, i) => (
            <Reveal key={m.label} delay={0.1 + i * 0.05}>
              <div className="h-full bg-bg p-5 transition-colors duration-500 hover:bg-raised">
                <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-faint">
                  {m.label}
                </p>
                <div className="mt-2">
                  <CountUp metric={m} color="var(--color-accent)" />
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal delay={0.2}>
          <p className="mt-3 font-mono text-[9px] uppercase tracking-[0.18em] text-faint">
            Scale indicators — observed signals, not guaranteed results
          </p>
        </Reveal>
      </div>

      {/* vertical divider (desktop) */}
      <div aria-hidden className="hidden w-px self-stretch bg-line lg:block" />

      {/* RIGHT — story */}
      <div className="lg:pl-14">
        <Reveal>
          <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-accent">
            {cs.category}
          </p>
          <h4 className="mt-4 text-3xl font-semibold leading-[1.12] tracking-[-0.02em] text-ink sm:text-4xl">
            {cs.headline}
          </h4>
        </Reveal>

        <Reveal delay={0.08}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted">
            {cs.description}
          </p>
        </Reveal>

        {/* strategy breakdown */}
        <div className="mt-10">
          <Reveal>
            <p className="font-mono text-[10px] uppercase tracking-[0.26em] text-faint">
              The growth system
            </p>
          </Reveal>
          <ol className="mt-4">
            {cs.steps.map((step, i) => (
              <Reveal key={step.title} delay={0.06 + i * 0.05}>
                <li className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-6 last:border-b">
                  <span className="font-mono text-xs text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h5 className="font-semibold text-ink">{step.title}</h5>
                    <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted">
                      {step.body}
                    </p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* highlighted insight */}
        <Reveal delay={0.1}>
          <blockquote className="mt-10 border-l-2 border-accent pl-6">
            <p className="text-xl font-medium leading-snug tracking-[-0.01em] text-ink">
              “{cs.insight}”
            </p>
          </blockquote>
        </Reveal>
      </div>
    </article>
  );
}

/* ————— section ————— */

export function CaseStudies() {
  return (
    <section className="relative">
      <div className="container-k flex gap-10 xl:gap-16">
        <ScrollRail />
        <div className="min-w-0 flex-1">
          {CASE_STUDIES.map((cs, i) => (
            <div key={cs.index}>
              {i > 0 && <div aria-hidden className="border-t border-line" />}
              <CaseStudyArticle cs={cs} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
