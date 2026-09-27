import { Reveal } from "@/components/motion/reveal";
import { SYSTEM_WORDS } from "@/lib/site";

const PROBLEMS = [
  {
    k: "Spending more, returning the same",
    v: "Budgets scale, efficiency doesn’t. Acquisition gets more expensive every month, and nobody can say which lever moved.",
  },
  {
    k: "Creative on autopilot",
    v: "The same three ads running for months while the audience decides — daily — which idea deserves the spend.",
  },
  {
    k: "Clicks without a path",
    v: "Paid traffic lands on pages built to describe, not to convert. Every visitor pays the same; each converts differently.",
  },
  {
    k: "Channels as silos",
    v: "Agency, creative, and funnel work handed to three different teams — all optimizing their own metric, none owning growth.",
  },
] as const;

export function Statement() {
  return (
    <section className="grain relative overflow-hidden py-28 sm:py-36">
      <div className="container-k">
        <Reveal>
          <p className="max-w-4xl text-2xl font-medium leading-snug tracking-[-0.01em] text-ink sm:text-4xl sm:leading-[1.25]">
            Most brands don’t have a traffic problem. They have a{" "}
            <span className="text-accent">system problem</span> — acquisition,
            creative, and conversion running as separate parts instead of one
            engine.
          </p>
        </Reveal>

        <div className="mt-20 grid gap-px overflow-hidden border border-line bg-line sm:grid-cols-2">
          {PROBLEMS.map((p, i) => (
            <Reveal key={p.k} delay={i * 0.06} className="h-full">
              <div className="flex h-full flex-col gap-3 bg-bg p-8 sm:p-10">
                <p className="font-medium text-ink">{p.k}</p>
                <p className="text-sm leading-relaxed text-muted">{p.v}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-16 font-mono text-[11px] uppercase leading-loose tracking-[0.24em] text-faint">
            The fix is structural —{" "}
            {SYSTEM_WORDS.map((w, i) => (
              <span key={w}>
                {i > 0 && <span className="text-accent/60"> · </span>}
                <span className="text-muted">{w}</span>
              </span>
            ))}{" "}
            — as one loop.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
