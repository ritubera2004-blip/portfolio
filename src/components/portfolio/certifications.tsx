"use client";

import { motion } from "framer-motion";
import { Award, ExternalLink, ShieldCheck } from "lucide-react";
import { SectionHeading } from "./section-heading";
import { StaggerGroup, StaggerItem } from "./reveal";
import { CERTIFICATIONS } from "@/lib/portfolio-data";

export function Certifications() {
  return (
    <section id="certifications" className="relative bg-[#f7f2e8] py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeading
          index="05"
          eyebrow="Certifications"
          title={
            <>
              Verified, continuous
              <br />
              <span className="text-gold-gradient italic">
                professional learning.
              </span>
            </>
          }
          description="LinkedIn Learning certificates reflecting focused, self-directed development alongside my MBA coursework."
        />

        <StaggerGroup className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {CERTIFICATIONS.map((cert) => (
            <StaggerItem key={cert.url}>
              <motion.a
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
                className="group flex h-full flex-col rounded-2xl border border-[#1c1b19]/10 bg-white/70 p-7 backdrop-blur-sm transition-colors hover:border-[#c2a36b]/50"
              >
                <div className="flex items-start justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1c1b19] to-[#100f0d] text-[#d8c194]">
                    <Award className="h-6 w-6" />
                  </span>
                  <span className="rounded-full border border-[#c2a36b]/40 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[#a07f4a]">
                    {cert.label}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-2xl leading-tight text-[#1c1b19]">
                  {cert.title}
                </h3>
                <p className="mt-2 flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-[#a07f4a]">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  {cert.issuer}
                </p>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-[#5a5346]">
                  {cert.description}
                </p>

                <div className="mt-6 flex items-center gap-2 border-t border-[#1c1b19]/8 pt-5 text-sm font-medium text-[#1c1b19]">
                  View Certificate
                  <ExternalLink className="h-4 w-4 text-[#a07f4a] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
                </div>
              </motion.a>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
