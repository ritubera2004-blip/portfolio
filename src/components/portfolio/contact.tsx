"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  MapPin,
  ArrowRight,
  CheckCircle2,
  Loader2,
} from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "./section-heading";
import { Reveal } from "./reveal";
import { PROFILE } from "@/lib/portfolio-data";

type Status = "idle" | "loading" | "success";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (status === "loading") return;

    setStatus("loading");
    try {
      // FormSubmit: free, no-signup form service that delivers submissions
      // to ritubera.work23@gmail.com. Works on fully static hosting.
      // First-ever submission triggers a one-time activation email.
      const res = await fetch(
        "https://formsubmit.co/ajax/ritubera.work23@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            subject: form.subject,
            message: form.message,
            _subject: `Portfolio contact: ${form.subject}`,
            _template: "table",
            _captcha: "false",
          }),
        }
      );
      const data = await res.json().catch(() => ({}));

      if (!res.ok || data.success === "false") {
        throw new Error(
          data.message ?? "Submission failed. Please try again or email directly."
        );
      }

      setStatus("success");
      toast.success("Message sent successfully.", {
        description: "Thank you — I'll get back to you shortly.",
      });
      setForm({ name: "", email: "", subject: "", message: "" });

      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      setStatus("idle");
      toast.error("Couldn't send your message.", {
        description:
          err instanceof Error ? err.message : "Please try again or email directly.",
      });
    }
  };

  const inputBase =
    "w-full rounded-xl border border-[#1c1b19]/15 bg-white/70 px-4 py-3 text-sm text-[#1c1b19] placeholder:text-[#9a9182] outline-none transition-colors focus:border-[#c2a36b] focus:ring-2 focus:ring-[#c2a36b]/20 backdrop-blur-sm";

  return (
    <section
      id="contact"
      className="grain relative overflow-hidden bg-[#100f0d] py-24 text-[#f7f2e8] sm:py-32"
    >
      <div className="pointer-events-none absolute -left-32 top-1/3 h-[460px] w-[460px] rounded-full bg-[#c2a36b]/10 blur-[150px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-[#a07f4a]/8 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <SectionHeading
          dark
          index="08"
          eyebrow="Contact"
          title={
            <>
              Let&apos;s create something
              <br />
              <span className="text-gold-gradient italic">meaningful.</span>
            </>
          }
          description="I'm open to connecting with professionals, exploring opportunities and learning from people who are passionate about business, marketing and brand building."
        />

        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16">
          {/* Left: direct contact */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="flex flex-col gap-4">
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="group flex items-center gap-4 rounded-2xl border border-[#f7f2e8]/10 bg-[#1a1916]/70 p-5 backdrop-blur-sm transition-colors hover:border-[#c2a36b]/40"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#c2a36b]/30 bg-[#c2a36b]/5 text-[#d8c194] transition-colors group-hover:bg-[#c2a36b] group-hover:text-[#100f0d]">
                    <Mail className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#bdb3a0]/60">
                      Email
                    </p>
                    <p className="font-serif text-base text-[#f7f2e8]">
                      {PROFILE.email}
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#c2a36b] transition-transform group-hover:translate-x-1" />
                </a>

                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-2xl border border-[#f7f2e8]/10 bg-[#1a1916]/70 p-5 backdrop-blur-sm transition-colors hover:border-[#c2a36b]/40"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#c2a36b]/30 bg-[#c2a36b]/5 text-[#d8c194] transition-colors group-hover:bg-[#c2a36b] group-hover:text-[#100f0d]">
                    <Linkedin className="h-5 w-5" />
                  </span>
                  <div className="flex-1">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#bdb3a0]/60">
                      LinkedIn
                    </p>
                    <p className="font-serif text-base text-[#f7f2e8]">
                      ritu-bera
                    </p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[#c2a36b] transition-transform group-hover:translate-x-1" />
                </a>

                <div className="flex items-center gap-4 rounded-2xl border border-[#f7f2e8]/10 bg-[#1a1916]/70 p-5 backdrop-blur-sm">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#c2a36b]/30 bg-[#c2a36b]/5 text-[#d8c194]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-[#bdb3a0]/60">
                      Based in
                    </p>
                    <p className="font-serif text-base text-[#f7f2e8]">
                      {PROFILE.location} · Open to remote
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form
                onSubmit={handleSubmit}
                className="rounded-3xl border border-[#f7f2e8]/10 bg-[#1a1916]/70 p-6 backdrop-blur-sm sm:p-8"
              >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="name"
                      className="text-[11px] uppercase tracking-[0.2em] text-[#bdb3a0]/80"
                    >
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      autoComplete="name"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      placeholder="Your name"
                      className="w-full rounded-xl border border-[#f7f2e8]/15 bg-[#0c0b0a]/50 px-4 py-3 text-sm text-[#f7f2e8] placeholder:text-[#f7f2e8]/30 outline-none transition-colors focus:border-[#c2a36b] focus:ring-2 focus:ring-[#c2a36b]/20"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="email"
                      className="text-[11px] uppercase tracking-[0.2em] text-[#bdb3a0]/80"
                    >
                      Email Address
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#f7f2e8]/15 bg-[#0c0b0a]/50 px-4 py-3 text-sm text-[#f7f2e8] placeholder:text-[#f7f2e8]/30 outline-none transition-colors focus:border-[#c2a36b] focus:ring-2 focus:ring-[#c2a36b]/20"
                    />
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-2">
                  <label
                    htmlFor="subject"
                    className="text-[11px] uppercase tracking-[0.2em] text-[#bdb3a0]/80"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => update("subject", e.target.value)}
                    placeholder="What would you like to discuss?"
                    className="w-full rounded-xl border border-[#f7f2e8]/15 bg-[#0c0b0a]/50 px-4 py-3 text-sm text-[#f7f2e8] placeholder:text-[#f7f2e8]/30 outline-none transition-colors focus:border-[#c2a36b] focus:ring-2 focus:ring-[#c2a36b]/20"
                  />
                </div>

                <div className="mt-5 flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="text-[11px] uppercase tracking-[0.2em] text-[#bdb3a0]/80"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    placeholder="Tell me a little about the opportunity, idea or question..."
                    className="w-full resize-none rounded-xl border border-[#f7f2e8]/15 bg-[#0c0b0a]/50 px-4 py-3 text-sm text-[#f7f2e8] placeholder:text-[#f7f2e8]/30 outline-none transition-colors focus:border-[#c2a36b] focus:ring-2 focus:ring-[#c2a36b]/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status !== "idle"}
                  className="group mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-[#c2a36b] px-6 py-3.5 text-sm font-semibold text-[#100f0d] transition-all duration-300 hover:bg-[#d8c194] disabled:opacity-70 disabled:hover:bg-[#c2a36b]"
                >
                  {status === "loading" && (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <CheckCircle2 className="h-4 w-4" />
                      Message Sent
                    </>
                  )}
                  {status === "idle" && (
                    <>
                      Send Message
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                <p className="mt-4 text-center text-[11px] text-[#f7f2e8]/40">
                  Your message is sent securely via FormSubmit and delivered
                  directly to {PROFILE.email}.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
