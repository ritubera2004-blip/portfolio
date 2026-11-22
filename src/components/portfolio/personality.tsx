"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  Sparkles,
  MessagesSquare,
  Lightbulb,
  RefreshCw,
  Users,
  UserRound,
  Rocket,
  type LucideIcon,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { StaggerGroup, StaggerItem } from "./reveal";
import { PERSONALITY } from "@/lib/portfolio-data";

const ICONS: Record<string, LucideIcon> = {
  BookOpen,
  Sparkles,
  MessagesSquare,
  Lightbulb,
  RefreshCw,
  Users,
  UserRound,
  Rocket,
};

export function Personality() {
  return (
    <section className="relative bg-[#f7f2e8] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeading
          index="07"
          eyebrow="Professional Personality"
          title={
            <>
              The values that shape
              <br />
              <span className="text-gold-gradient italic">
                how I work.
              </span>
            </>
          }
          description="Not motivational quotes — the principles I actually try to operate by, every day."
        />

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
          {PERSONALITY.map((item) => {
            const Icon = ICONS[item.icon] ?? Sparkles;
            return (
              <StaggerItem key={item.title}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="group flex h-full flex-col gap-4 rounded-2xl border border-[#1c1b19]/8 bg-white/70 p-6 backdrop-blur-sm transition-colors hover:border-[#c2a36b]/40"
                >
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#1c1b19] to-[#100f0d] text-[#d8c194] transition-transform duration-500 group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="font-serif text-lg text-[#1c1b19]">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#5a5346]">
                    {item.statement}
                  </p>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
