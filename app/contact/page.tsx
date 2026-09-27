import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/navbar";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/primitives";
import { Footer } from "@/components/footer/footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Start a Conversation",
  description:
    "Tell KAIRON where growth is stuck. A 45-minute working session, a teardown of your funnel and creative, and a clear next step — whether we work together or not.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Start a Conversation | KAIRON",
    description:
      "A 45-minute working session, a teardown, and a clear next step.",
    url: "/contact",
  },
};

const CONTRACT = [
  {
    k: "A working session",
    v: "45 minutes on your funnel, spend, and creative — not a pitch deck.",
  },
  {
    k: "A teardown",
    v: "Where the leaks are, which levers matter, what we would test first.",
  },
  {
    k: "A clear next step",
    v: "If we can help, you leave with a plan. If we can’t, we say so.",
  },
] as const;

const INCLUDE = [
  "Your store or site URL",
  "Monthly ad spend range",
  "What growth is currently stuck on",
] as const;

export default function ContactPage() {
  const mailto = `mailto:${SITE.email}?subject=Growth%20conversation`;

  return (
    <div>
      <Navbar />
      <main id="main">
        <PageHero
          index="06"
          label="Start a Conversation"
          title={"Ready when\nyou are."}
          lede="Tell us where growth is stuck. We’ll tell you what we see, what we’d test first, and whether KAIRON is the right studio to build it with you."
        />

        <section className="py-20 sm:py-28">
          <div className="container-k grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <Reveal>
                <Button href={mailto} external className="text-sm">
                  {SITE.email}
                </Button>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-6 max-w-md text-sm leading-relaxed text-muted">
                  One email is enough — no forms, no funnels. We reply within two
                  business days.
                </p>
              </Reveal>

              <div className="mt-16 border-t border-line pt-10">
                <ol className="space-y-10">
                  {CONTRACT.map((item, i) => (
                    <Reveal key={item.k} delay={i * 0.07}>
                      <li>
                        <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink">
                          <span className="text-accent">0{i + 1}</span> {item.k}
                        </p>
                        <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                          {item.v}
                        </p>
                      </li>
                    </Reveal>
                  ))}
                </ol>
              </div>
            </div>

            <div className="lg:pt-2">
              <Reveal>
                <div className="border border-line bg-raised p-8 sm:p-10">
                  <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-faint">
                    <span className="text-accent">→</span> Make the first email
                    useful
                  </p>
                  <ul className="mt-6">
                    {INCLUDE.map((item, i) => (
                      <li
                        key={item}
                        className="flex items-baseline gap-4 border-t border-line py-4 text-sm text-muted first:border-t-0 first:pt-0"
                      >
                        <span className="font-mono text-xs text-accent">
                          0{i + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 text-sm leading-relaxed text-faint">
                    That’s all we need to come to the session with a point of
                    view — and it filters out anyone looking for a vendor, not a
                    partner.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
