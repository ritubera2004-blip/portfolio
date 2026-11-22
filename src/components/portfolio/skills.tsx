"use client";

import { motion } from "framer-motion";
import {
  MessageSquare,
  Users,
  Presentation,
  Target,
  Gem,
  Heart,
  TrendingUp,
  Compass,
  Handshake,
  Table,
  MonitorPlay,
  Palette,
  BarChart3,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";
import { PROFESSIONAL_SKILLS, TOOLS } from "@/lib/portfolio-data";

const ICONS: Record<string, LucideIcon> = {
  MessageSquare,
  Users,
  Presentation,
  Target,
  Gem,
  Heart,
  TrendingUp,
  Compass,
  Handshake,
  Table,
  MonitorPlay,
  Palette,
  BarChart3,
};

export function Skills() {
  return (
    <section
      id="skills"
      className="grain relative overflow-hidden bg-[#100f0d] py-24 text-[#f7f2e8] sm:py-32"
    >
      <div className="pointer-events-none absolute -left-32 top-1/4 h-[420px] w-[420px] rounded-full bg-[#c2a36b]/8 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeading
          dark
          index="04"
          eyebrow="Skills & Competencies"
          title={
            <>
              The capabilities I&apos;m
              <br />
              <span className="text-gold-gradient italic">
                sharpening every day.
              </span>
            </>
          }
          description="A blend of business thinking, communication craft and the practical tools that make strategy executable."
        />

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Professional skills */}
          <div className="lg:col-span-7">
            <Reveal>
              <h3 className="font-serif text-xl text-[#d8c194]">
                Professional Skills
              </h3>
            </Reveal>
            <StaggerGroup className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {PROFESSIONAL_SKILLS.map((skill) => {
                const Icon = ICONS[skill.icon] ?? Target;
                return (
                  <StaggerItem key={skill.name}>
                    <motion.div
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.3 }}
                      className="group flex h-full flex-col gap-3 rounded-xl border border-[#f7f2e8]/10 bg-[#1a1916]/70 p-4 backdrop-blur-sm transition-colors hover:border-[#c2a36b]/40"
                    >
                      <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#c2a36b]/25 bg-[#c2a36b]/5 text-[#d8c194] transition-colors group-hover:bg-[#c2a36b] group-hover:text-[#100f0d]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-medium text-[#f7f2e8]">
                        {skill.name}
                      </span>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>

          {/* Tools */}
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <h3 className="font-serif text-xl text-[#d8c194]">
                Tools &amp; Applications
              </h3>
            </Reveal>
            <StaggerGroup className="mt-6 flex flex-col gap-3" stagger={0.08}>
              {TOOLS.map((tool) => {
                const Icon = ICONS[tool.icon] ?? Table;
                return (
                  <StaggerItem key={tool.name}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.3 }}
                      className="group flex items-center gap-4 rounded-xl border border-[#f7f2e8]/10 bg-[#1a1916]/70 p-4 backdrop-blur-sm transition-colors hover:border-[#c2a36b]/40"
                    >
                      <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-[#c2a36b]/25 bg-[#c2a36b]/5 text-[#d8c194]">
                        <Icon className="h-5 w-5" />
                      </span>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-[#f7f2e8]">
                          {tool.name}
                        </p>
                        <p className="text-[11px] uppercase tracking-[0.16em] text-[#bdb3a0]/60">
                          Practical proficiency
                        </p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
