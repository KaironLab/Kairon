import { Reveal } from "@/components/motion/reveal";

export function PageHero({
  index,
  label,
  title,
  lede,
}: {
  index: string;
  label: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="border-b border-line pb-16 pt-40 sm:pb-20 sm:pt-48">
      <div className="container-k">
        <Reveal>
          <p className="eyebrow">
            <span className="text-accent">{index}</span>
            <span className="mx-3 inline-block h-px w-8 translate-y-[-3px] bg-line" />
            {label}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-4xl whitespace-pre-line text-3xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl sm:tracking-[-0.025em] md:text-6xl lg:text-7xl">
            {title}
          </h1>
        </Reveal>
        {lede ? (
          <Reveal delay={0.16}>
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
              {lede}
            </p>
          </Reveal>
        ) : null}
      </div>
    </section>
  );
}
