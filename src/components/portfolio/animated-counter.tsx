"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  className?: string;
  format?: boolean;
};

const easeOutExpo = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

/**
 * Animated numerical counter that triggers on scroll into view.
 * Uses a manual IntersectionObserver + requestAnimationFrame for reliability.
 */
export function AnimatedCounter({
  value,
  prefix = "",
  suffix = "",
  duration = 1800,
  className,
  format = true,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState("0");
  const startedRef = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const run = () => {
      if (startedRef.current) return;
      startedRef.current = true;

      const start = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const eased = easeOutExpo(progress);
        const current = Math.round(value * eased);
        setDisplay(format ? current.toLocaleString("en-IN") : String(current));
        if (progress < 1) {
          requestAnimationFrame(tick);
        } else {
          setDisplay(format ? value.toLocaleString("en-IN") : String(value));
        }
      };
      requestAnimationFrame(tick);
    };

    // If already in view on mount, start immediately.
    const rect = node.getBoundingClientRect();
    const inViewNow =
      rect.top < window.innerHeight && rect.bottom > 0;
    if (inViewNow) {
      run();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            run();
            observer.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [value, duration, format]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
