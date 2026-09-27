"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { NAV_LINKS } from "@/lib/site";
import { cn } from "@/lib/utils";
import { Wordmark } from "@/components/ui/primitives";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  // lock page scroll while the menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Persistent bar — never slides away, so the logo is always visible. */}
      <header
        id="top"
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={cn(
            "border-b bg-bg/85 backdrop-blur-md transition-colors duration-500",
            scrolled || open ? "border-line" : "border-transparent",
          )}
        >
          <div className="container-k flex h-16 items-center justify-between gap-3">
            <Link href="/" aria-label="KAIRON — home" className="min-h-11 py-2">
              <Wordmark />
            </Link>

            <nav
              aria-label="Primary"
              className="hidden items-center gap-8 lg:flex"
            >
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="link-sweep py-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted transition-colors hover:text-ink"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-1">
              <Link
                href="/contact"
                className="group inline-flex min-h-11 items-center gap-2 bg-accent px-4 py-2.5 font-mono text-[11px] uppercase tracking-[0.18em] text-bg transition-colors duration-300 hover:bg-ink sm:px-5"
              >
                <span className="hidden sm:inline">Start a Conversation</span>
                <span className="sm:hidden">Contact</span>
                <span
                  aria-hidden
                  className="h-1.5 w-1.5 rounded-full bg-bg/70 transition-transform duration-300 group-hover:scale-125"
                />
              </Link>

              {/* mobile menu toggle — below lg only */}
              <button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-label={open ? "Close menu" : "Open menu"}
                className="relative flex min-h-11 min-w-11 flex-col items-center justify-center gap-1.5 lg:hidden"
              >
                <span
                  className={
                    "h-px w-5 bg-ink transition-transform duration-300 " +
                    (open ? "translate-y-[3.5px] rotate-45" : "")
                  }
                />
                <span
                  className={
                    "h-px w-5 bg-ink transition-transform duration-300 " +
                    (open ? "-translate-y-[3.5px] -rotate-45" : "")
                  }
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* mobile overlay menu — sibling of the header so the header's
          transform can't collapse its fixed-position box */}
      {open && (
        <div className="fixed inset-0 top-16 z-40 overflow-y-auto border-t border-line bg-bg lg:hidden">
          <nav aria-label="Mobile" className="container-k flex flex-col pb-10 pt-8">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-14 items-center justify-between border-b border-line py-5 text-2xl font-semibold tracking-[-0.01em] text-ink"
              >
                {link.label}
                <span className="font-mono text-xs text-faint">
                  0{i + 1}
                </span>
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-10 inline-flex min-h-11 items-center justify-center gap-2 bg-accent px-6 py-3.5 font-mono text-[11px] uppercase tracking-[0.18em] text-bg"
            >
              Start a Conversation
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
