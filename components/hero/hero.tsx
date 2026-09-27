"use client";

import { motion, useReducedMotion } from "framer-motion";
import { SITE, SYSTEM_WORDS, TICKER_ITEMS } from "@/lib/site";
import { Button, DownArrowIcon } from "@/components/ui/primitives";

const EASE = [0.22, 1, 0.36, 1] as const;

function Ticker() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS];
  return (
    <div
      className="overflow-hidden border-y border-line bg-raised/60"
      aria-hidden="true"
    >
      <div className="animate-marquee flex w-max items-center py-3.5">
        {items.map((item, i) => (
          <span
            key={i}
            className="flex items-center font-mono text-[11px] uppercase tracking-[0.22em] text-faint"
          >
            <span className="px-6">{item}</span>
            <span className="h-1 w-1 rounded-full bg-accent/50" />
          </span>
        ))}
      </div>
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative flex min-h-svh flex-col justify-between pt-16">
      {/* ————— typographic field: the growth system, drawn in type ————— */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 select-none"
      >
        {SYSTEM_WORDS.map((word, i) => (
          <motion.span
            key={word}
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.5 + i * 0.15, ease: "easeOut" }}
            className={
              "absolute font-mono uppercase tracking-[0.3em] text-ink/[0.06] " +
              [
                "left-[4%] top-[19%] text-xs sm:text-sm",
                "right-[6%] top-[28%] text-[11px] sm:text-xs",
                "left-[12%] top-[58%] text-[11px] sm:text-xs",
                "right-[16%] top-[66%] text-xs sm:text-sm",
                "left-[38%] top-[82%] text-[11px] sm:text-xs",
              ][i]
            }
          >
            {word}
          </motion.span>
        ))}
      </div>

      {/* main text block — hard-left, top-to-bottom */}
      <div className="container-k flex flex-1 flex-col justify-center pb-16 pt-14 sm:pt-20">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="eyebrow"
        >
          <span className="text-accent">KAIRON</span>
          <span className="mx-3 inline-block h-px w-8 translate-y-[-3px] bg-line" />
          Growth &amp; Performance Studio
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 34 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease: EASE }}
          className="mt-6 max-w-5xl text-[13.5vw] font-bold leading-[0.98] tracking-[-0.035em] text-ink sm:text-7xl md:text-8xl lg:text-[7.5rem]"
        >
          Growth is a
          <br />
          system.
          <span className="text-accent"> We</span>
          <br />
          <span className="text-muted">build it.</span>
        </motion.h1>

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="mt-8 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
        >
          KAIRON builds growth engines for ambitious brands — paid acquisition,
          creative, and conversion run as one loop, so every month scales
          cheaper than the last.
        </motion.p>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.32, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/contact">Start a Conversation</Button>
          <Button href="/approach" variant="outline">
            How we grow brands
          </Button>
        </motion.div>
      </div>

      {/* bottom rail: coordinates + scroll cue, sitting on the ticker */}
      <div>
        <div className="container-k flex items-end justify-between pb-6">
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-faint"
          >
            <DownArrowIcon className="h-3.5 w-3.5 text-accent" />
            <span>{SITE.domain}</span>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="hidden items-center gap-3 font-mono text-[10px] uppercase tracking-[0.24em] text-faint sm:flex"
          >
            <span className="relative flex h-10 w-px justify-center overflow-hidden bg-line">
              <span className="animate-scroll-dot block h-2 w-px bg-accent" />
            </span>
            Scroll
          </motion.div>
        </div>
        <Ticker />
      </div>
    </section>
  );
}
