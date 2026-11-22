"use client";

import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Linkedin,
  Mail,
  FolderOpen,
  Download,
} from "lucide-react";
import { PROFILE } from "@/lib/portfolio-data";
import { asset } from "@/lib/asset";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = (el as HTMLElement).offsetTop - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="grain relative flex min-h-screen items-center overflow-hidden bg-[#100f0d] text-[#f7f2e8]"
    >
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[480px] w-[480px] rounded-full bg-[#c2a36b]/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[420px] w-[420px] rounded-full bg-[#a07f4a]/8 blur-[120px]" />

      {/* Vertical side meta */}
      <div className="absolute left-5 top-1/2 hidden -translate-y-1/2 -rotate-90 origin-left items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[#f7f2e8]/40 lg:flex">
        <span className="h-px w-10 bg-[#c2a36b]/40" />
        Portfolio — {new Date().getFullYear()}
      </div>
      <div className="absolute right-5 top-1/2 hidden -translate-y-1/2 rotate-90 origin-right items-center gap-3 text-[11px] uppercase tracking-[0.3em] text-[#f7f2e8]/40 lg:flex">
        LPU · MBA 2026—2028
        <span className="h-px w-10 bg-[#c2a36b]/40" />
      </div>

      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 pt-28 pb-24 sm:px-10 lg:grid-cols-12 lg:gap-8 lg:px-16">
        {/* Left: copy */}
        <div className="lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-10 bg-[#c2a36b]" />
            <span className="eyebrow text-[#d8c194]">
              {PROFILE.positioning}
            </span>
          </motion.div>

          <h1 className="font-display text-[2.6rem] leading-[1.05] tracking-tight sm:text-6xl lg:text-[4.6rem]">
            {PROFILE.heroHeadline.map((line, i) => (
              <motion.span
                key={line}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 + i * 0.18, ease }}
                className="block"
              >
                {i === 1 ? (
                  <span className="text-gold-gradient italic">{line}</span>
                ) : (
                  line
                )}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease }}
            className="mt-7 max-w-xl text-base leading-relaxed text-[#bdb3a0] sm:text-lg"
          >
            {PROFILE.heroSupporting}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.85, ease }}
            className="mt-5 max-w-xl text-sm leading-relaxed text-[#f7f2e8]/60"
          >
            {PROFILE.name} · {PROFILE.title}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1, ease }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollTo("#projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-[#c2a36b] px-6 py-3.5 text-sm font-semibold text-[#100f0d] transition-all duration-300 hover:bg-[#d8c194] hover:shadow-lg hover:shadow-[#c2a36b]/20"
            >
              Explore My Work
              <FolderOpen className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
            <a
              href={asset("/ritu-bera-resume.pdf")}
              download
              className="group inline-flex items-center gap-2 rounded-full border border-[#f7f2e8]/20 px-6 py-3.5 text-sm font-medium text-[#f7f2e8] transition-all duration-300 hover:border-[#c2a36b]/60 hover:bg-[#f7f2e8]/5"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <div className="flex items-center gap-2">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f7f2e8]/20 text-[#f7f2e8] transition-all duration-300 hover:border-[#c2a36b]/60 hover:bg-[#c2a36b] hover:text-[#100f0d]"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <button
                onClick={() => scrollTo("#contact")}
                aria-label="Contact me"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f7f2e8]/20 text-[#f7f2e8] transition-all duration-300 hover:border-[#c2a36b]/60 hover:bg-[#c2a36b] hover:text-[#100f0d]"
              >
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Right: monogram portrait card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease }}
          className="lg:col-span-5"
        >
          <div className="relative mx-auto max-w-sm">
            {/* Frame */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2px] border border-[#c2a36b]/25 bg-gradient-to-b from-[#1a1916] to-[#0c0b0a]">
              <div className="grain absolute inset-0" />
              {/* Corner ticks */}
              <span className="absolute left-4 top-4 h-6 w-6 border-l border-t border-[#c2a36b]/50" />
              <span className="absolute right-4 top-4 h-6 w-6 border-r border-t border-[#c2a36b]/50" />
              <span className="absolute bottom-4 left-4 h-6 w-6 border-b border-l border-[#c2a36b]/50" />
              <span className="absolute bottom-4 right-4 h-6 w-6 border-b border-r border-[#c2a36b]/50" />

              {/* Professional portrait */}
              <img
                src={asset("/ritu-portrait.jpg")}
                alt="Ritu Bera — professional portrait"
                className="absolute inset-0 h-full w-full object-cover object-top"
              />
              {/* Soft gradient for legibility */}
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0c0b0a]/85 via-[#0c0b0a]/30 to-transparent" />

              {/* Name overlay */}
              <div className="absolute inset-x-0 bottom-12 px-6">
                <span className="eyebrow text-[#d8c194]">Ritu Bera</span>
                <p className="mt-1.5 font-serif text-lg italic text-[#f7f2e8]">
                  Marketing · Brand · Strategy
                </p>
              </div>

              {/* Bottom strip */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-[#c2a36b]/15 bg-[#0c0b0a]/60 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-[#f7f2e8]/40 backdrop-blur-sm">
                <span>Est. 2026</span>
                <span>Ritu Bera · MBA</span>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.1, ease }}
              className="absolute -right-4 top-8 hidden rounded-xl border border-[#c2a36b]/30 bg-[#1a1916]/90 px-4 py-3 backdrop-blur-md sm:block"
            >
              <p className="font-serif text-2xl text-[#d8c194]">₹30K</p>
              <p className="text-[10px] uppercase tracking-[0.2em] text-[#f7f2e8]/50">
                SILVAT Revenue
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => scrollTo("#about")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[#f7f2e8]/50 transition-colors hover:text-[#c2a36b] sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.button>
    </section>
  );
}
