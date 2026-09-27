import Link from "next/link";
import { Navbar } from "@/components/navbar/navbar";
import { Hero } from "@/components/hero/hero";
import { Statement } from "@/components/statement/statement";
import { Reveal } from "@/components/motion/reveal";
import { ArrowIcon, SectionHeading } from "@/components/ui/primitives";
import { Founders } from "@/components/founders/founders";
import { Cta } from "@/components/cta/cta";
import { Footer } from "@/components/footer/footer";
import { CAPABILITIES, LOOP_STEPS, SYSTEM_WORDS } from "@/lib/site";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main id="main">
        <Hero />
        <Statement />

        {/* ————— Loop teaser ————— */}
        <section className="border-t border-line py-28 sm:py-36">
          <div className="container-k">
            <div className="md:grid md:grid-cols-12 md:gap-10 md:items-end">
              <div className="md:col-span-7">
                <SectionHeading
                  index="02"
                  label="Approach — The Kairon Loop"
                  title="One loop, four moves, compounding."
                  lede="Not a service list — an operating rhythm. Each turn of the loop makes the next one cheaper, sharper, and more predictable."
                />
              </div>
              <div className="mt-8 md:col-span-5 md:mt-0 md:text-right">
                <Reveal delay={0.2}>
                  <Link
                    href="/approach"
                    className="group inline-flex min-h-11 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent"
                  >
                    See the full approach
                    <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Reveal>
              </div>
            </div>

            <ol className="mt-16">
              {LOOP_STEPS.slice(0, 2).map((step, i) => (
                <Reveal key={step.index} delay={i * 0.05}>
                  <li className="group grid gap-4 border-t border-line py-8 transition-colors duration-500 last:border-b hover:bg-raised/40 sm:grid-cols-[7rem_1fr] sm:gap-10">
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-xs text-accent">
                        {step.index}
                      </span>
                      <h3 className="text-2xl font-semibold tracking-[-0.02em] text-ink transition-transform duration-500 group-hover:translate-x-1.5 sm:text-3xl">
                        {step.title}
                      </h3>
                    </div>
                    <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                      {step.body}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* ————— Capabilities teaser ————— */}
        <section className="border-t border-line py-28 sm:py-36">
          <div className="container-k">
            <div className="md:grid md:grid-cols-12 md:gap-10 md:items-end">
              <div className="md:col-span-7">
                <SectionHeading
                  index="03"
                  label="Capabilities"
                  title="Five disciplines. One job."
                  lede="Nothing here is a standalone service. Every capability exists to feed the same outcome: customers acquired, conversion raised, revenue scaled."
                />
              </div>
              <div className="mt-8 md:col-span-5 md:mt-0 md:text-right">
                <Reveal delay={0.2}>
                  <Link
                    href="/capabilities"
                    className="group inline-flex min-h-11 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent"
                  >
                    All five disciplines
                    <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </Reveal>
              </div>
            </div>

            <div className="mt-16 grid gap-px border border-line bg-line sm:grid-cols-3">
              {CAPABILITIES.slice(0, 3).map((cap, i) => (
                <Reveal key={cap.index} delay={i * 0.06}>
                  <Link
                    href="/capabilities"
                    className="group flex h-full flex-col bg-bg p-8 transition-colors duration-500 hover:bg-raised"
                  >
                    <p className="font-mono text-xs text-accent">{cap.index}</p>
                    <h3 className="mt-4 text-xl font-semibold tracking-[-0.01em] text-ink">
                      {cap.name}
                    </h3>
                    <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.16em] text-faint">
                      {cap.tagline}
                    </p>
                    <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.18em] text-faint opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      Explore →
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ————— Studio strip ————— */}
        <section className="grain border-t border-line bg-raised py-24">
          <div className="container-k">
            <Reveal>
              <p className="font-mono text-[11px] uppercase leading-loose tracking-[0.24em] text-faint">
                {SYSTEM_WORDS.map((w, i) => (
                  <span key={w}>
                    {i > 0 && <span className="text-accent/60"> · </span>}
                    {w}
                  </span>
                ))}{" "}
                — run by two operators, not account managers.
              </p>
            </Reveal>
          </div>
        </section>

        <Founders />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
