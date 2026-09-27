import type { Metadata } from "next";
import { Navbar } from "@/components/navbar/navbar";
import { PageHero } from "@/components/page-hero";
import { Capabilities } from "@/components/capabilities/capabilities";
import { Cta } from "@/components/cta/cta";
import { Footer } from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Performance marketing, creative, conversion, strategy, retention — five disciplines, one job: customers acquired, conversion raised, revenue scaled.",
  alternates: { canonical: "/capabilities" },
  openGraph: {
    title: "Capabilities | KAIRON",
    description:
      "Five growth disciplines — performance marketing, creative, conversion, strategy, retention — run as one system.",
    url: "/capabilities",
  },
};

export default function CapabilitiesPage() {
  return (
    <div>
      <Navbar />
      <main id="main">
        <PageHero
          index="03"
          label="Capabilities"
          title={"Five disciplines.\nOne job."}
          lede="Meta ads, creative, CRO, research, retention — none of them are the point on their own. Each one is a system that feeds the same outcome: growth that compounds."
        />
        <Capabilities />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
