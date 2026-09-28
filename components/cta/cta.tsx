import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/primitives";
import { EMAIL_GMAIL_COMPOSE, SITE } from "@/lib/site";

const CONTRACT = [
  { k: "A working session", v: "45 minutes on your funnel, spend, and creative — not a pitch deck." },
  { k: "A teardown", v: "Where the leaks are, which levers matter, what we would test first." },
  { k: "A clear next step", v: "If we can help, you leave with a plan. If we can’t, we say so." },
] as const;

export function Cta() {
  return (
    <section
      id="contact"
      className="grain scroll-mt-24 relative overflow-hidden border-t border-line bg-raised py-28 sm:py-40"
    >
      {/* faint closing mark — bookends the hero’s typographic field */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-10 bottom-6 select-none font-sans text-[26vw] font-bold leading-none tracking-[-0.04em] text-ink/[0.03]"
      >
        K
      </span>

      <div className="container-k relative">
        <Reveal>
          <p className="eyebrow">
            <span className="text-accent">06</span>
            <span className="mx-3 inline-block h-px w-8 translate-y-[-3px] bg-line" />
            Start a Conversation
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="mt-6 max-w-4xl text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-6xl">
            Ready when
            <br />
            you are<span className="text-accent">.</span>
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
            Tell us where growth is stuck. We’ll tell you what we see, what we’d
            test first, and whether KAIRON is the right studio to build it with
            you.
          </p>
        </Reveal>

        <Reveal delay={0.22}>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Button href={EMAIL_GMAIL_COMPOSE} external>
              {SITE.email}
            </Button>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep inline-flex items-center py-3.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-ink"
            >
              Or write us directly on WhatsApp
            </a>
          </div>
        </Reveal>

        <div className="mt-20 border-t border-line pt-10">
          <ol className="grid gap-10 sm:grid-cols-3">
            {CONTRACT.map((item, i) => (
              <Reveal key={item.k} delay={i * 0.07}>
                <li>
                  <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-ink">
                    <span className="text-accent">0{i + 1}</span> {item.k}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.v}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
