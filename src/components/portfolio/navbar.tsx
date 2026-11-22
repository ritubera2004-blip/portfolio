"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, PROFILE } from "@/lib/portfolio-data";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeId, setActiveId] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll spy
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      const top = (el as HTMLElement).offsetTop - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "border-b border-[#1c1b19]/10 bg-[#f7f2e8]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* Monogram */}
        <button
          onClick={() => handleNav("#home")}
          className="group flex items-center gap-3"
          aria-label="Go to top"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c2a36b]/40 bg-[#1c1b19] font-serif text-sm font-semibold text-[#d8c194] transition-transform duration-500 group-hover:scale-105">
            RB
          </span>
          <span className="hidden font-serif text-[15px] font-medium tracking-wide text-[#1c1b19] sm:block">
            Ritu Bera
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const active = activeId === id;
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNav(link.href)}
                  className={cn(
                    "relative px-3.5 py-2 text-[13px] font-medium transition-colors duration-300",
                    active
                      ? "text-[#1c1b19]"
                      : "text-[#5a5346] hover:text-[#1c1b19]"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-x-2.5 -bottom-0.5 h-px bg-[#c2a36b]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNav("#contact")}
            className="group hidden items-center gap-2 rounded-full bg-[#1c1b19] px-5 py-2.5 text-[13px] font-medium text-[#f7f2e8] transition-all duration-300 hover:bg-[#100f0d] hover:shadow-lg hover:shadow-[#1c1b19]/20 sm:flex"
          >
            Let&apos;s Connect
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>

          {/* Mobile sheet */}
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#1c1b19]/15 text-[#1c1b19] lg:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5" />
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[320px] border-l border-[#c2a36b]/20 bg-[#100f0d] p-0 text-[#f7f2e8]"
            >
              <div className="flex items-center justify-between border-b border-[#f7f2e8]/10 px-6 py-5">
                <span className="font-serif text-lg text-[#d8c194]">Menu</span>
                <SheetClose asChild>
                  <button
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#f7f2e8]/15 text-[#f7f2e8]/80"
                    aria-label="Close menu"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </SheetClose>
              </div>
              <ul className="flex flex-col px-4 py-4">
                {NAV_LINKS.map((link, i) => (
                  <li key={link.href}>
                    <SheetClose asChild>
                      <button
                        onClick={() => handleNav(link.href)}
                        className="group flex w-full items-center justify-between rounded-xl px-4 py-3.5 text-left transition-colors hover:bg-[#f7f2e8]/5"
                      >
                        <span className="flex items-center gap-4">
                          <span className="font-serif text-xs italic text-[#c2a36b]/70">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="font-serif text-lg text-[#f7f2e8]">
                            {link.label}
                          </span>
                        </span>
                        <ArrowUpRight className="h-4 w-4 text-[#c2a36b] opacity-0 transition-opacity group-hover:opacity-100" />
                      </button>
                    </SheetClose>
                  </li>
                ))}
              </ul>
              <div className="mt-auto border-t border-[#f7f2e8]/10 px-6 py-6">
                <SheetClose asChild>
                  <button
                    onClick={() => handleNav("#contact")}
                    className="flex w-full items-center justify-center gap-2 rounded-full bg-[#c2a36b] px-5 py-3 text-sm font-semibold text-[#100f0d] transition-colors hover:bg-[#d8c194]"
                  >
                    Let&apos;s Connect
                    <ArrowUpRight className="h-4 w-4" />
                  </button>
                </SheetClose>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="mt-4 block text-center text-xs text-[#f7f2e8]/60"
                >
                  {PROFILE.email}
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>

      <AnimatePresence>
        {scrolled && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            className="h-px origin-left bg-gradient-to-r from-transparent via-[#c2a36b]/50 to-transparent"
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}
