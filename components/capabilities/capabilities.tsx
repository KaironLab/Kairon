import { Reveal } from "@/components/motion/reveal";
import { SectionHeading } from "@/components/ui/primitives";
import { CAPABILITIES } from "@/lib/site";

export function Capabilities() {
  return (
    <section
      id="capabilities"
      className="scroll-mt-24 border-t border-line py-28 sm:py-36"
    >
      <div className="container-k">
        <div className="md:grid md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <SectionHeading
              index="03"
              label="Capabilities"
              title="Five disciplines. One job."
              lede="Nothing here is a standalone service. Every capability exists to feed the same outcome: customers acquired, conversion raised, revenue scaled."
            />
          </div>
        </div>

        <div className="mt-16 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {CAPABILITIES.map((cap, i) => (
            <Reveal
              key={cap.index}
              delay={(i % 3) * 0.06}
              className={i === 0 ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <article
                className={
                  "group flex h-full flex-col bg-bg p-8 transition-colors duration-500 hover:bg-raised sm:p-10 " +
                  (i === 0 ? "md:flex-row md:items-end md:gap-12" : "")
                }
              >
                <div className="flex-1">
                  <p className="font-mono text-xs text-accent">{cap.index}</p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.01em] text-ink sm:text-3xl">
                    {cap.name}
                  </h3>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-faint">
                    {cap.tagline}
                  </p>
                  <p className="mt-5 max-w-lg text-sm leading-relaxed text-muted">
                    {cap.body}
                  </p>
                </div>
                <ul className="mt-8 flex flex-wrap gap-2 md:mt-0 md:max-w-52">
                  {cap.chips.map((chip) => (
                    <li
                      key={chip}
                      className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted transition-colors duration-300 group-hover:border-ink/20"
                    >
                      {chip}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
