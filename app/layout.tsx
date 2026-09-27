import type { Metadata, Viewport } from "next";
import { Archivo, JetBrains_Mono } from "next/font/google";
import { SITE } from "@/lib/site";
import { AnchorScroll } from "@/components/motion/anchor-scroll";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "KAIRON",
    template: "%s — KAIRON",
  },
  description: SITE.description,
  keywords: [
    "growth agency",
    "performance marketing",
    "Meta ads agency",
    "paid acquisition",
    "creative strategy",
    "CRO",
    "conversion rate optimization",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: SITE.url,
    siteName: "KAIRON",
    title: "KAIRON — Growth & Performance Marketing Agency",
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "KAIRON — Growth & Performance Marketing Agency",
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0d0d0b",
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": `${SITE.url}/#organization`,
      name: SITE.name,
      url: SITE.url,
      email: SITE.email,
      description: SITE.description,
      areaServed: "Worldwide",
      founder: SITE.founders.map((name) => ({
        "@type": "Person",
        name,
        jobTitle: "Co-Founder",
      })),
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.name,
      publisher: { "@id": `${SITE.url}/#organization` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${archivo.variable} ${jbmono.variable}`}>
      <body>
        <AnchorScroll />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-accent focus:px-4 focus:py-2 focus:font-mono focus:text-xs focus:uppercase focus:tracking-widest focus:text-bg"
        >
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
