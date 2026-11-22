"use client";

import { Reveal } from "./reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  index?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  dark?: boolean;
  className?: string;
};

/**
 * Consistent premium section heading: index + eyebrow, serif title, optional description.
 */
export function SectionHeading({
  eyebrow,
  index,
  title,
  description,
  align = "left",
  dark = false,
  className,
}: SectionHeadingProps) {
  return (
    <Reveal
      className={cn(
        "flex flex-col gap-5",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center gap-4",
          align === "center" && "justify-center"
        )}
      >
        {index && (
          <span
            className={cn(
              "font-serif text-sm italic",
              dark ? "text-[#d8c194]/80" : "text-[#a07f4a]"
            )}
          >
            {index}
          </span>
        )}
        {eyebrow && (
          <span
            className={cn(
              "eyebrow",
              dark ? "text-[#d8c194]" : "text-[#a07f4a]"
            )}
          >
            {eyebrow}
          </span>
        )}
        <span
          className={cn(
            "h-px w-12",
            dark ? "bg-[#d8c194]/40" : "bg-[#a07f4a]/40"
          )}
        />
      </div>

      <h2
        className={cn(
          "font-display text-4xl leading-[1.08] tracking-tight sm:text-5xl lg:text-[3.4rem]",
          dark ? "text-[#f7f2e8]" : "text-[#1c1b19]"
        )}
      >
        {title}
      </h2>

      {description && (
        <p
          className={cn(
            "max-w-2xl text-base leading-relaxed sm:text-lg",
            align === "center" && "mx-auto",
            dark ? "text-[#bdb3a0]" : "text-[#5a5346]"
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
