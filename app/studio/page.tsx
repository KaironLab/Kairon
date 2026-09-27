import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/navbar";
import { PageHero } from "@/components/page-hero";
import { Principles } from "@/components/principles/principles";
import { Founders } from "@/components/founders/founders";
import { Cta } from "@/components/cta/cta";
import { Footer } from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "KAIRON is a deliberately small studio. Founders Samiul & Munthakim stay on every account — meet the operators and the principles we work by.",
  alternates: { canonical: "/studio" },
  openGraph: {
    title: "Studio | KAIRON",
    description:
      "Two founders, zero hand-offs. The operators and principles behind KAIRON.",
    url: "/studio",
  },
};

export default function StudioPage() {
  return (
    <div>
      <Navbar />
      <main id="main">
        <PageHero
          index="04"
          label="The Studio"
          title={"Two founders.\nZero hand-offs."}
          lede="KAIRON is deliberately small. No account managers, no bait-and-switch — the people who plan your growth system are the people inside it."
        />
        <Founders />
        <Principles />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
