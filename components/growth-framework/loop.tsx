import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/primitives";
import { LOOP_STEPS } from "@/lib/site";

export function Loop() {
  return (
    <section id="loop" className="scroll-mt-24 border-t border-line py-28 sm:py-36">
      <div className="container-k">
        <SectionHeading
          index="02"
          label="Approach — The Kairon Loop"
          title="One loop, four moves, compounding."
          lede="Not a service list — an operating rhythm. Each turn of the loop makes the next one cheaper, sharper, and more predictable."
        />

        <ol className="mt-20 space-y-0">
          {LOOP_STEPS.map((step, i) => (
            <Reveal key={step.index} delay={i * 0.05}>
              <li className="group grid gap-6 border-t border-line py-10 transition-colors duration-500 last:border-b hover:bg-raised/40 sm:grid-cols-[7rem_1fr] sm:gap-10 sm:py-12 md:grid-cols-[10rem_1fr_22rem]">
                <div className="flex items-start gap-4">
                  <span className="font-mono text-xs text-accent">
                    {step.index}
                  </span>
                  <h3 className="text-3xl font-semibold tracking-[-0.02em] text-ink transition-transform duration-500 group-hover:translate-x-1.5 sm:text-4xl">
                    {step.title}
                  </h3>
                </div>
                <p className="max-w-2xl text-base leading-relaxed text-muted">
                  {step.body}
                </p>
                <p className="self-end font-mono text-[10px] uppercase leading-relaxed tracking-[0.22em] text-faint md:text-right">
                  {step.meta}
                </p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
