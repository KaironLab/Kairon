import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { ArrowIcon } from "@/components/ui/primitives";

export function Founders({
  withPhoto = true,
}: {
  /** Set false to render the text-only variant (no founders photo). */
  withPhoto?: boolean;
}) {
  return (
    <section id="about" className="relative overflow-hidden py-28 sm:py-36">
      {/* acid grid backdrop — echoes the founders art direction */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-line"
      />
      <div className="container-k">
        <div
          className={
            withPhoto
              ? "grid items-center gap-14 lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)] lg:gap-20"
              : ""
          }
        >
          {/* photo */}
          {withPhoto && (
            <Reveal className="order-1">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 [background-image:linear-gradient(var(--color-line)_1px,transparent_1px),linear-gradient(90deg,var(--color-line)_1px,transparent_1px)] [background-size:3.5rem_3.5rem]"
                />
                <Image
                  src="/images/founders-cutout.webp"
                  alt="Samiul and Munthakim, founders of KAIRON"
                  width={960}
                  height={960}
                  sizes="(max-width: 1024px) 90vw, 40vw"
                  className="h-auto w-full"
                  priority={false}
                />
                <p className="absolute -bottom-4 right-4 border border-line bg-raised px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  Built by operators
                </p>
              </div>
            </Reveal>
          )}

          {/* text block */}
          <div className={withPhoto ? "order-2" : ""}>
            <Reveal>
              <p className="eyebrow">
                <span className="text-accent">[</span> The Operators{" "}
                <span className="text-accent">]</span>
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl">
                Two founders.
                <br />
                <span className="text-muted">Zero hand-offs.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
                KAIRON is deliberately small. Samiul and Munthakim stay on every
                account — the people who plan your growth system are the people
                inside it, every week.
              </p>
            </Reveal>
            <Reveal delay={0.22}>
              <div className="mt-8 flex flex-wrap gap-x-10 gap-y-6">
                {[
                  { name: "Samiul", focus: "Paid acquisition & growth systems" },
                  { name: "Munthakim", focus: "Creative strategy & conversion" },
                ].map((f) => (
                  <div key={f.name}>
                    <p className="font-medium text-ink">{f.name}</p>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                      {f.focus}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.28}>
              <Link
                href="/studio"
                className="group mt-10 inline-flex min-h-11 items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-accent"
              >
                Inside the studio
                <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
