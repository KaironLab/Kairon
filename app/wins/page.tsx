import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/navbar";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/motion/reveal";
import { ArrowIcon } from "@/components/ui/primitives";
import { Cta } from "@/components/cta/cta";
import { Footer } from "@/components/footer/footer";
import { CLIENT_WINS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Client Wins",
  description:
    "Selected client wins from KAIRON — growth systems, performance marketing, creative, and CRO engagements and the results they produced.",
  alternates: { canonical: "/wins" },
  openGraph: {
    title: "Client Wins | KAIRON",
    description: "Selected client wins from the KAIRON studio.",
    url: "/wins",
  },
};

export default function WinsPage() {
  const wins = CLIENT_WINS.filter((w) => w.live);

  return (
    <div>
      <Navbar />
      <main id="main">
        <PageHero
          index="05"
          label="Client Wins"
          title={"Proof, not promises."}
          lede="Every engagement below is real, named, and linked. When a win isn’t public yet, it stays off this page."
        />

        <section className="py-20 sm:py-28">
          <div className="container-k">
            {wins.length === 0 ? (
              <Reveal>
                <div className="border border-dashed border-line px-8 py-20 text-center sm:py-28">
                  <p className="font-mono text-[11px] uppercase tracking-[0.24em] text-faint">
                    First wins are being written up
                  </p>
                  <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-muted">
                    We only publish results we can stand behind — name, number,
                    and link. This page updates as engagements conclude.
                  </p>
                </div>
              </Reveal>
            ) : (
              <ul>
                {wins.map((win, i) => (
                  <Reveal key={win.client + win.url} delay={i * 0.04}>
                    <li className="group border-t border-line py-10 transition-colors duration-500 last:border-b hover:bg-raised/40">
                      <a
                        href={win.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid gap-6 sm:grid-cols-[5rem_1fr_auto] sm:gap-10"
                      >
                        <span className="font-mono text-xs text-accent">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                            <h2 className="text-2xl font-semibold tracking-[-0.01em] text-ink transition-transform duration-500 group-hover:translate-x-1.5 sm:text-3xl">
                              {win.client}
                            </h2>
                            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                              {win.industry} · {win.year}
                            </span>
                          </div>
                          <p className="mt-3 text-lg font-medium text-accent">
                            {win.result}
                          </p>
                          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                            {win.detail}
                          </p>
                          <ul className="mt-5 flex flex-wrap gap-2">
                            {win.services.map((s) => (
                              <li
                                key={s}
                                className="border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-muted"
                              >
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <span className="hidden items-start gap-2 font-mono text-[10px] uppercase tracking-[0.18em] text-faint transition-colors group-hover:text-accent sm:flex">
                          {new URL(win.url).hostname.replace(/^www\./, "")}
                          <ArrowIcon className="mt-0.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                      </a>
                    </li>
                  </Reveal>
                ))}
              </ul>
            )}
          </div>
        </section>

        <Cta />
      </main>
      <Footer />
    </div>
  );
}
