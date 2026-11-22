"use client";

import { motion } from "framer-motion";
import { GraduationCap, BookOpen } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { EDUCATION } from "@/lib/portfolio-data";

export function Education() {
  return (
    <section
      id="education"
      className="grain relative overflow-hidden bg-[#100f0d] py-24 text-[#f7f2e8] sm:py-32"
    >
      <div className="pointer-events-none absolute -right-32 top-1/3 h-[420px] w-[420px] rounded-full bg-[#c2a36b]/8 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeading
          dark
          index="02"
          eyebrow="Education"
          title={
            <>
              A foundation built on
              <br />
              <span className="text-gold-gradient italic">
                strategy &amp; storytelling.
              </span>
            </>
          }
          description="Two distinct chapters — one teaching me how business and brands work, the other teaching me how to read, write and communicate with intent."
        />

        <div className="relative mt-16">
          {/* Timeline spine */}
          <div className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-[#c2a36b]/50 via-[#c2a36b]/20 to-transparent sm:left-1/2 sm:-translate-x-1/2" />

          <div className="flex flex-col gap-14">
            {EDUCATION.map((edu, i) => {
              const Icon = i === 0 ? GraduationCap : BookOpen;
              const right = i % 2 === 1;
              return (
                <Reveal key={edu.degree} delay={i * 0.1}>
                  <div
                    className={`relative flex items-center gap-6 sm:gap-10 ${
                      right ? "sm:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Node */}
                    <div className="absolute left-4 z-10 -translate-x-1/2 sm:left-1/2">
                      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#c2a36b]/50 bg-[#1a1916] text-[#d8c194]">
                        <Icon className="h-4 w-4" />
                      </span>
                    </div>

                    {/* Spacer for alternating layout on desktop */}
                    <div className="hidden sm:block sm:w-1/2" />

                    {/* Card */}
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                      className={`ml-12 w-full rounded-2xl border border-[#f7f2e8]/10 bg-[#1a1916]/80 p-6 backdrop-blur-sm transition-colors hover:border-[#c2a36b]/40 sm:ml-0 sm:w-1/2 ${
                        right ? "sm:mr-0 sm:ml-auto sm:text-left" : "sm:mr-auto"
                      }`}
                    >
                      <span className="font-serif text-sm italic text-[#d8c194]">
                        {edu.period}
                      </span>
                      <h3 className="mt-2 font-display text-2xl leading-tight text-[#f7f2e8]">
                        {edu.degree}
                      </h3>
                      <p className="mt-1 text-sm text-[#bdb3a0]">
                        {edu.institution}
                      </p>
                      <p className="mt-3 text-xs uppercase tracking-[0.18em] text-[#c2a36b]">
                        {edu.detail}
                      </p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {edu.focus.map((f) => (
                          <span
                            key={f}
                            className="rounded-full border border-[#f7f2e8]/12 bg-[#f7f2e8]/5 px-3 py-1 text-[11px] text-[#bdb3a0]"
                          >
                            {f}
                          </span>
                        ))}
                      </div>
                      <p className="mt-5 text-sm leading-relaxed text-[#f7f2e8]/55">
                        {edu.note}
                      </p>
                    </motion.div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
