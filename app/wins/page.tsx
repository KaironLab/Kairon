import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/navbar";
import { Reveal } from "@/components/motion/reveal";
import { ArrowIcon } from "@/components/ui/primitives";
import { CaseStudies } from "@/components/wins/case-studies";
import { SITE } from "@/lib/site";
import { Cta } from "@/components/cta/cta";
import { Footer } from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Client Wins",
  description:
    "Brands we've scaled — real campaigns, real growth systems. Positioning, creative, paid acquisition, and conversion optimization across DTC ecommerce.",
  alternates: { canonical: "/wins" },
  openGraph: {
    title: "Client Wins | KAIRON",
    description:
      "Brands we've scaled — real campaigns, real growth systems across DTC ecommerce.",
    url: "/wins",
  },
};

export default function WinsPage() {
  return (
    <div>
      <Navbar />
      <main id="main">
        {/* ————— section intro ————— */}
        <section className="border-b border-line pb-16 pt-28 sm:pb-20 sm:pt-36">
          <div className="container-k">
            <Reveal>
              <p className="eyebrow">
                <span className="text-accent">05</span>
                <span className="mx-3 inline-block h-px w-8 translate-y-[-3px] bg-line" />
                Client Wins
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="mt-6 max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.03em] text-ink sm:text-7xl">
                Brands we&rsquo;ve scaled<span className="text-accent">.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
                Real brands. Real campaigns. Real growth. From positioning and
                creative to paid acquisition and conversion optimization, we
                build systems designed to scale.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <p className="mt-4 max-w-2xl font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                Figures below are observed scale indicators from public on-site
                signals — not guaranteed results.
              </p>
            </Reveal>
          </div>
        </section>

        <CaseStudies />

        {/* ————— closing CTA ————— */}
        <section className="grain border-t border-line bg-raised py-28 sm:py-36">
          <div className="container-k">
            <Reveal>
              <p className="eyebrow">
                <span className="text-accent">→</span>
                <span className="mx-3 inline-block h-px w-8 translate-y-[-3px] bg-line" />
                Your brand could be next
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-6xl">
                Ready to build something worth scaling<span className="text-accent">?</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
                We combine positioning, creative, paid acquisition, websites and
                conversion optimization into one growth system.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href={`mailto:${SITE.email}?subject=Growth%20conversation`}
                  className="group inline-flex min-h-11 items-center justify-center gap-2.5 bg-accent px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-bg transition-colors duration-300 hover:bg-ink"
                >
                  Start a conversation
                  <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
                <a
                  href="/approach"
                  className="group inline-flex min-h-11 items-center justify-center gap-2.5 border border-line px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] text-ink transition-colors duration-300 hover:border-accent hover:text-accent"
                >
                  View our approach
                  <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
