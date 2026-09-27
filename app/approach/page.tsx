import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/navbar";
import { PageHero } from "@/components/page-hero";
import { Loop } from "@/components/growth-framework/loop";
import { Principles } from "@/components/principles/principles";
import { Cta } from "@/components/cta/cta";
import { Footer } from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Approach — The Kairon Loop",
  description:
    "The Kairon Loop: Signal → System → Scale → Study. Our operating rhythm for compounding growth — plus the principles and engagement path behind every account.",
  alternates: { canonical: "/approach" },
  openGraph: {
    title: "Approach — The Kairon Loop | KAIRON",
    description:
      "Signal → System → Scale → Study. The operating rhythm behind every KAIRON engagement.",
    url: "/approach",
  },
};

export default function ApproachPage() {
  return (
    <div>
      <Navbar />
      <main id="main">
        <PageHero
          index="02"
          label="Approach"
          title={"One loop, four moves,\ncompounding."}
          lede="Most agencies sell channels. We run a system — a loop that turns customer research into campaigns, campaigns into proof, and proof into cheaper growth every month."
        />
        <Loop />
        <Principles />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
