"use client";

import { motion } from "framer-motion";
import { Briefcase, Building2, ArrowRight } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";
import { CAREER } from "@/lib/portfolio-data";

export function CareerInterests() {
  return (
    <section
      id="career"
      className="grain relative overflow-hidden bg-[#100f0d] py-24 text-[#f7f2e8] sm:py-32"
    >
      <div className="pointer-events-none absolute -right-32 bottom-1/4 h-[420px] w-[420px] rounded-full bg-[#c2a36b]/8 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeading
          dark
          index="06"
          eyebrow="Career Interests"
          title={
            <>
              Where I&apos;m headed
              <br />
              <span className="text-gold-gradient italic">next.</span>
            </>
          }
          description="These represent direction and ambition — not previous employment. The roles and industries I'm working toward."
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Target roles */}
          <div className="lg:col-span-5">
            <Reveal>
              <h3 className="flex items-center gap-3 font-serif text-xl text-[#d8c194]">
                <Briefcase className="h-5 w-5" />
                Target Roles
              </h3>
            </Reveal>
            <div className="mt-6 flex flex-col gap-3">
              {CAREER.roles.map((role, i) => (
                <Reveal key={role.title} delay={i * 0.1}>
                  <motion.div
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.3 }}
                    className="group rounded-2xl border border-[#f7f2e8]/10 bg-[#1a1916]/70 p-5 backdrop-blur-sm transition-colors hover:border-[#c2a36b]/40"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-serif text-lg text-[#f7f2e8]">
                        {role.title}
                      </h4>
                      <ArrowRight className="h-4 w-4 text-[#c2a36b] opacity-50 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[#bdb3a0]">
                      {role.description}
                    </p>
                  </motion.div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Target industries */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <h3 className="flex items-center gap-3 font-serif text-xl text-[#d8c194]">
                <Building2 className="h-5 w-5" />
                Target Industries
              </h3>
            </Reveal>
            <StaggerGroup className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2" stagger={0.08}>
              {CAREER.industries.map((ind) => (
                <StaggerItem key={ind.title}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.3 }}
                    className="group h-full rounded-2xl border border-[#f7f2e8]/10 bg-[#1a1916]/70 p-5 backdrop-blur-sm transition-colors hover:border-[#c2a36b]/40"
                  >
                    <span className="h-1 w-8 bg-[#c2a36b] transition-all duration-300 group-hover:w-12" />
                    <h4 className="mt-4 font-serif text-base text-[#f7f2e8]">
                      {ind.title}
                    </h4>
                    <p className="mt-2 text-xs leading-relaxed text-[#bdb3a0]">
                      {ind.description}
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
