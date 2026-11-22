"use client";

import { Linkedin, Mail, ArrowUp } from "lucide-react";
import { PROFILE, NAV_LINKS } from "@/lib/portfolio-data";

export function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = (el as HTMLElement).offsetTop - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="mt-auto border-t border-[#c2a36b]/20 bg-[#0c0b0a] text-[#f7f2e8]">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#c2a36b]/40 bg-[#1c1b19] font-serif text-sm font-semibold text-[#d8c194]">
                RB
              </span>
              <div>
                <p className="font-serif text-xl text-[#f7f2e8]">
                  {PROFILE.name}
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-[#bdb3a0]/70">
                  MBA · Marketing Major · Operations Minor
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#f7f2e8]/55">
              Building brands, understanding people and creating business
              impact — one considered decision at a time.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#d8c194]/70">
              Navigate
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-[#f7f2e8]/60 transition-colors hover:text-[#d8c194]"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <p className="text-[11px] uppercase tracking-[0.2em] text-[#d8c194]/70">
              Connect
            </p>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center gap-2 text-sm text-[#f7f2e8]/60 transition-colors hover:text-[#d8c194]"
              >
                <Mail className="h-4 w-4 text-[#c2a36b]" />
                {PROFILE.email}
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[#f7f2e8]/60 transition-colors hover:text-[#d8c194]"
              >
                <Linkedin className="h-4 w-4 text-[#c2a36b]" />
                LinkedIn Profile
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[#f7f2e8]/8 pt-6 sm:flex-row">
          <p className="text-[11px] text-[#f7f2e8]/45">
            © {year} Ritu Bera. All rights reserved. · Crafted with intent.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-[#f7f2e8]/60 transition-colors hover:text-[#d8c194]"
          >
            Back to Top
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[#c2a36b]/30 text-[#d8c194] transition-transform group-hover:-translate-y-0.5">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
