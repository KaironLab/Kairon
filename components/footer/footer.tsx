import Link from "next/link";
import { ArrowIcon, Wordmark } from "@/components/ui/primitives";
import { CAPABILITIES, EMAIL_GMAIL_COMPOSE, NAV_LINKS, SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="container-k py-16 sm:py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_auto_auto] md:gap-20">
          <div>
            <Wordmark />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              A growth and performance studio helping ambitious brands acquire
              customers, raise conversion, and scale revenue.
            </p>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
              {SITE.domain}
            </p>
          </div>

          <nav aria-label="Footer">
            <p className="eyebrow">Index</p>
            <ul className="mt-2 space-y-0">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="link-sweep inline-block py-2.5 text-sm text-muted transition-colors hover:text-ink"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="link-sweep inline-block py-2.5 text-sm text-muted transition-colors hover:text-ink"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <p className="eyebrow">Capabilities</p>
            <ul className="mt-2">
              {CAPABILITIES.map((cap) => (
                <li key={cap.index}>
                  <Link
                    href="/capabilities"
                    className="link-sweep inline-block py-1.5 text-sm text-muted transition-colors hover:text-ink"
                  >
                    {cap.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-faint">
            © {new Date().getFullYear()} KAIRON — Founded by Samiul &amp;
            Munthakim
          </p>
          <div className="flex items-center gap-8">
            <a
              href={EMAIL_GMAIL_COMPOSE}
              target="_blank"
              rel="noopener noreferrer"
              className="link-sweep inline-block py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted transition-colors hover:text-ink"
            >
              {SITE.email}
            </a>
            <a
              href="#top"
              className="group inline-block py-3 font-mono text-[10px] uppercase tracking-[0.22em] text-muted transition-colors hover:text-ink"
            >
              Back to top
              <ArrowIcon className="ml-2 inline-block transition-transform duration-300 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
