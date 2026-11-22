"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  TrendingUp,
  Package,
  Tag,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import { Reveal, StaggerGroup, StaggerItem } from "./reveal";
import { AnimatedCounter } from "./animated-counter";
import { asset } from "@/lib/asset";
import { SILVAT as PROJECT } from "@/lib/portfolio-data";

function SilvatImage({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-[#2a1f1a] via-[#1a1410] to-[#0c0b0a] ${className}`}
    >
      {!errored && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className={`h-full w-full object-cover transition-all duration-[1.2s] ${
            loaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
        />
      )}
      {errored && (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-5xl text-[#c2a36b]/30">
            SILVAT
          </span>
        </div>
      )}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#100f0d]/60 via-transparent to-transparent" />
    </div>
  );
}

export function Silvat() {
  const metricIcons = [Package, TrendingUp, Tag];

  return (
    <section
      id="projects"
      className="relative bg-[#f7f2e8] py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        {/* Header */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeading
              index="03"
              eyebrow="Featured Project · Case Study"
              title={
                <>
                  SILVAT —{" "}
                  <span className="text-gold-gradient italic">
                    from unbranded
                  </span>
                  <br />
                  to branded.
                </>
              }
              description={PROJECT.category}
            />
          </div>
          <Reveal delay={0.2} className="lg:col-span-5 lg:pt-4">
            <p className="text-sm leading-relaxed text-[#3d382f]">
              {PROJECT.concept}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full border border-[#c2a36b]/40 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#a07f4a]">
                Product · {PROJECT.product}
              </span>
              <span className="rounded-full border border-[#1c1b19]/15 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-[#5a5346]">
                Entrepreneurship
              </span>
            </div>
          </Reveal>
        </div>

        {/* Visual + metrics */}
        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-12">
          {/* Hero image */}
          <Reveal className="lg:col-span-5">
            <SilvatImage
              src={asset("/silvat/hero-saree.png")}
              alt="SILVAT premium saree presentation"
              className="aspect-[4/5] w-full rounded-2xl"
            />
          </Reveal>

          {/* Metrics + wordmark */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <div className="relative flex h-full flex-col justify-between rounded-2xl border border-[#c2a36b]/25 bg-[#100f0d] p-6 text-[#f7f2e8] sm:p-8">
                <div className="grain absolute inset-0 rounded-2xl" />
                {/* Brand mark */}
                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex flex-col gap-3">
                    <span className="eyebrow text-[#d8c194]/70">
                      Brand Identity
                    </span>
                    {/* Real SILVAT brand logo */}
                    <img
                      src={asset("/silvat/silvat-logo.jpg")}
                      alt="SILVAT brand logo"
                      loading="lazy"
                      className="h-24 w-auto max-w-full rounded-md bg-[#1a1916] object-contain sm:h-28"
                    />
                    <p className="font-serif text-sm italic text-[#f7f2e8]/60">
                      {PROJECT.tagline}
                    </p>
                  </div>
                  <Sparkles className="h-6 w-6 shrink-0 text-[#d8c194]/60" />
                </div>

                {/* Metrics */}
                <div className="relative mt-8 grid grid-cols-3 gap-4 border-t border-[#f7f2e8]/10 pt-8">
                  {PROJECT.metrics.map((m, i) => {
                    const Icon = metricIcons[i];
                    return (
                      <div key={m.label} className="flex flex-col gap-2">
                        <Icon className="h-5 w-5 text-[#d8c194]/70" />
                        <p className="font-display text-3xl text-[#f7f2e8] sm:text-4xl">
                          <AnimatedCounter
                            value={m.value}
                            prefix={m.prefix}
                            suffix={m.suffix}
                          />
                        </p>
                        <p className="text-[10px] uppercase leading-tight tracking-[0.16em] text-[#bdb3a0]">
                          {m.label}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <p className="relative mt-6 text-[11px] leading-relaxed text-[#f7f2e8]/45">
                  {PROJECT.revenueNote}
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Objectives + product image */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="h-full rounded-2xl border border-[#1c1b19]/10 bg-white/70 p-6 backdrop-blur-sm sm:p-8">
              <h3 className="font-serif text-2xl text-[#1c1b19]">
                Business Objectives
              </h3>
              <ul className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {PROJECT.objectives.map((o) => (
                  <li
                    key={o}
                    className="flex items-start gap-3 text-sm leading-relaxed text-[#3d382f]"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#a07f4a]" />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-5">
            <SilvatImage
              src={asset("/silvat/silvat-bags.jpg")}
              alt="SILVAT branded shopping bags and product packaging"
              className="aspect-[16/10] w-full rounded-2xl"
            />
          </Reveal>
        </div>

        {/* Activities */}
        <div className="mt-16">
          <Reveal>
            <h3 className="font-display text-3xl text-[#1c1b19]">
              Project Activities &amp; Responsibilities
            </h3>
            <p className="mt-2 max-w-2xl text-sm text-[#5a5346]">
              The work behind taking SILVAT from idea to sold — described as
              activities, without invented results.
            </p>
          </Reveal>

          <StaggerGroup className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PROJECT.activities.map((a, i) => (
              <StaggerItem key={a.title}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  className="group h-full rounded-2xl border border-[#1c1b19]/8 bg-white/70 p-5 backdrop-blur-sm transition-colors hover:border-[#c2a36b]/40"
                >
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-display text-2xl text-[#c2a36b]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <ArrowUpRight className="h-4 w-4 text-[#a07f4a]/30 transition-all group-hover:text-[#a07f4a] group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                  <h4 className="font-serif text-base leading-snug text-[#1c1b19]">
                    {a.title}
                  </h4>
                  <p className="mt-2 text-xs leading-relaxed text-[#5a5346]">
                    {a.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>

        {/* Product presentation + learnings */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <SilvatImage
              src={asset("/silvat/product-presentation.png")}
              alt="SILVAT folded saree product presentation"
              className="aspect-[16/11] w-full rounded-2xl"
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="h-full rounded-2xl border border-[#1c1b19]/10 bg-gradient-to-br from-[#efe7d6] to-[#f7f2e8] p-6 sm:p-8">
              <span className="eyebrow text-[#a07f4a]">Key Learnings</span>
              <h3 className="mt-3 font-display text-2xl text-[#1c1b19]">
                What SILVAT taught me
              </h3>
              <ul className="mt-6 flex flex-col gap-4">
                {PROJECT.learnings.map((l, i) => (
                  <li
                    key={l}
                    className="flex items-start gap-4 border-l-2 border-[#c2a36b]/40 pl-4"
                  >
                    <span className="font-serif text-sm italic text-[#a07f4a]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-base leading-relaxed text-[#1c1b19]">
                      {l}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
