import Link from "next/link";
import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/reveal";

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn("h-3 w-3", className)}
    >
      <path
        d="M3 13L13 3M13 3H6M13 3V10"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function DownArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className={cn("h-3 w-3", className)}
    >
      <path
        d="M8 3v10M8 13l-4-4M8 13l4-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function SectionHeading({
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
    <div>
      <Reveal>
        <p className="eyebrow">
          <span className="text-accent">{index}</span>
          <span className="mx-3 inline-block h-px w-8 translate-y-[-3px] bg-line" />
          {label}
        </p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-ink sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {lede ? (
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
            {lede}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}

export function Button({
  href,
  children,
  variant = "solid",
  external = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  external?: boolean;
  className?: string;
}) {
  const base = cn(
    "group inline-flex min-h-11 items-center gap-2.5 px-6 py-3 font-mono text-[11px] uppercase tracking-[0.18em] transition-colors duration-300",
    variant === "solid"
      ? "bg-accent text-bg hover:bg-ink"
      : "border border-line text-ink hover:border-accent hover:text-accent",
    className,
  );

  if (external) {
    return (
      <a href={href} className={base}>
        {children}
        <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    );
  }

  // Internal navigation routes through the client router (real page links).
  return (
    <Link href={href} className={base}>
      {children}
      <ArrowIcon className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-0.5", className)}>
      {/* Logo mark — acid-bordered box with a heavy acid K; the word follows
          immediately so the lockup reads KAIRON. (per brand logo). */}
      <span
        aria-hidden
        className="flex h-7 w-7 shrink-0 items-center justify-center border-2 border-accent bg-bg font-sans text-xl font-black leading-none text-accent"
      >
        K
      </span>
      <span className="font-sans text-xl font-extrabold leading-none tracking-[0.01em] text-ink">
        AIRON<span className="text-accent">.</span>
      </span>
    </span>
  );
}
