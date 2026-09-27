"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/primitives";
import { ENGAGEMENT_STEPS, PRINCIPLES } from "@/lib/site";

const EASE = [0.22, 1, 0.36, 1] as const;

function AccordionRow({
  item,
  open,
  onToggle,
}: {
  item: (typeof PRINCIPLES)[number];
  open: boolean;
  onToggle: () => void;
}) {
  const reduce = useReducedMotion();

  return (
    <div className="border-t border-line last:border-b">
      <button
        onClick={onToggle}
        aria-expanded={open}
        className="group flex w-full items-center gap-6 py-7 text-left"
      >
        <span className="font-mono text-xs text-faint transition-colors group-hover:text-accent">
          {item.index}
        </span>
        <span className="flex-1 text-lg font-medium text-ink sm:text-xl">
          {item.title}
        </span>
        <span
          aria-hidden
          className="relative flex h-8 w-8 shrink-0 items-center justify-center border border-line"
        >
          <span className="absolute h-px w-3 bg-muted" />
          <span
            className={
              "absolute h-3 w-px bg-muted transition-transform duration-300 " +
              (open ? "scale-y-0" : "scale-y-100")
            }
          />
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={reduce ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduce ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden"
          >
            <p className="max-w-2xl pb-7 pl-10 text-sm leading-relaxed text-muted sm:pl-12">
              {item.body}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Principles() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section
      id="studio"
      className="scroll-mt-24 border-t border-line py-28 sm:py-36"
    >
      <div className="container-k">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <div>
            <SectionHeading
              index="04"
              label="The Studio — Why Kairon"
              title="How we think."
              lede="Five principles that decide every engagement. They are not slogans; they are constraints we hold ourselves to."
            />
            <div className="mt-12">
              {PRINCIPLES.map((item, i) => (
                <AccordionRow
                  key={item.index}
                  item={item}
                  open={open === i}
                  onToggle={() => setOpen(open === i ? -1 : i)}
                />
              ))}
            </div>
          </div>

          <div className="lg:pt-[7.5rem]">
            <Reveal>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-faint">
                <span className="text-accent">→</span> Working with us
              </h3>
            </Reveal>
            <ol className="mt-8 space-y-0">
              {ENGAGEMENT_STEPS.map((step, i) => (
                <Reveal key={step.index} delay={i * 0.05}>
                  <li className="grid grid-cols-[3rem_1fr] gap-5 border-t border-line py-6 last:border-b">
                    <span className="font-mono text-xs text-accent">
                      {step.index}
                    </span>
                    <div>
                      <p className="font-medium text-ink">{step.title}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">
                        {step.body}
                      </p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
