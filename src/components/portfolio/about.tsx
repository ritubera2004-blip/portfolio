"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";
import { ABOUT_PILLARS, PROFILE } from "@/lib/portfolio-data";

export function About() {
  return (
    <section id="about" className="relative bg-[#f7f2e8] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          {/* Left: heading + statement */}
          <div className="lg:col-span-5">
            <SectionHeading
              index="01"
              eyebrow="About"
              title={
                <>
                  An ambitious marketer
                  <br />
                  <span className="text-gold-gradient italic">
                    in the making.
                  </span>
                </>
              }
            />

            <Reveal delay={0.15} className="mt-8">
              <p className="text-base leading-relaxed text-[#3d382f]">
                {PROFILE.intro}
              </p>
            </Reveal>

            <Reveal delay={0.25} className="mt-8">
              <figure className="relative overflow-hidden rounded-2xl border border-[#c2a36b]/25 bg-white/60 p-6 backdrop-blur-sm">
                <span className="absolute left-4 top-2 font-display text-6xl text-[#c2a36b]/20">
                  &ldquo;
                </span>
                <blockquote className="relative pl-6 font-serif text-lg italic leading-relaxed text-[#1c1b19]">
                  {PROFILE.statement}
                </blockquote>
                <figcaption className="mt-4 pl-6 text-[11px] uppercase tracking-[0.25em] text-[#a07f4a]">
                  — Ritu Bera
                </figcaption>
              </figure>
            </Reveal>
          </div>

          {/* Right: pillars grid */}
          <div className="lg:col-span-7">
            <StaggerGroup className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {ABOUT_PILLARS.map((pillar, i) => (
                <StaggerItem key={pillar.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="group h-full rounded-2xl border border-[#1c1b19]/8 bg-white/70 p-6 backdrop-blur-sm transition-colors hover:border-[#c2a36b]/40"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="font-serif text-xs italic text-[#a07f4a]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-[#a07f4a]/40 transition-all duration-300 group-hover:text-[#a07f4a] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                    <h3 className="font-serif text-xl text-[#1c1b19]">
                      {pillar.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#5a5346]">
                      {pillar.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
