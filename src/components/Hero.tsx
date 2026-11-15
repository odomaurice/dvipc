"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { motion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight01Icon,
  PauseIcon,
  PlayIcon,
} from "@hugeicons/core-free-icons";
import ColumnGuides from "@/components/ColumnGuides";
import { SITE } from "@/lib/site";

// Brief 4.3, word for word; each headline is only split where the accent
// italic starts. `rights` lights up the matching rows of the index.
const SLIDES = [
  {
    tab: "Innovation",
    lead: "Protect Your Ideas",
    accent: "Before Someone Else Does.",
    sub: "From patents and trademarks to copyrights and strategic IP advisory, we help innovators, creators, startups, and businesses secure and maximize the value of their intellectual assets.",
    cta: "Protect My Innovation",
    rights: ["patents", "trademarks", "copyright"],
  },
  {
    tab: "Brands",
    lead: "Build a Brand",
    accent: "That Belongs to You.",
    sub: "Your name, logo, slogan, and identity deserve legal protection. We guide businesses through trademark searches, registration, and brand protection strategies.",
    cta: "Register Your Trademark",
    rights: ["trademarks"],
  },
  {
    tab: "Business value",
    lead: "Turn Intellectual Assets Into",
    accent: "Business Advantages.",
    sub: "We help businesses identify, protect, manage, and commercialize intellectual property to support growth, investment readiness, and long-term competitiveness.",
    cta: "Book a Consultation",
    rights: ["patents", "trademarks", "copyright", "designs", "secrets"],
  },
];

// The IP areas the brief names as DVIPC's expertise (2.2 A to E).
const RIGHTS = [
  { id: "patents", label: "Patents" },
  { id: "trademarks", label: "Trademarks" },
  { id: "copyright", label: "Copyright" },
  { id: "designs", label: "Industrial designs" },
  { id: "secrets", label: "Trade secrets" },
];

const ROTATE_EVERY = 8000;
const ease = [0.22, 1, 0.36, 1] as const;

const subscribeToMotionPref = (notify: () => void) => {
  const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
  mq.addEventListener("change", notify);
  return () => mq.removeEventListener("change", notify);
};

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [stopped, setStopped] = useState(false);
  const [held, setHeld] = useState(false);
  const reduced = useSyncExternalStore(
    subscribeToMotionPref,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => true,
  );
  const rotating = !reduced && !stopped && !held;

  useEffect(() => {
    if (!rotating) return;
    const id = window.setTimeout(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      ROTATE_EVERY,
    );
    return () => window.clearTimeout(id);
  }, [rotating, index]);

  const slide = SLIDES[index];

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  });

  return (
    <section
      data-nav-tone="dark"
      data-nav-bg="var(--color-brand-navy)"
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-brand-navy text-white"
    >
      <ColumnGuides className="-z-10 text-white/[0.07]" />
      {/* The slash through "DV", at architectural scale. */}
      <motion.span
        aria-hidden
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.2, ease }}
        className="slash absolute top-0 -right-56 -z-10 hidden h-full w-[20rem] bg-brand lg:block"
      />

      <div
        role="region"
        aria-roledescription="carousel"
        aria-label="What DVIPC does"
        onMouseEnter={() => setHeld(true)}
        onMouseLeave={() => setHeld(false)}
        onFocusCapture={() => setHeld(true)}
        onBlurCapture={() => setHeld(false)}
        className="mx-auto flex w-full max-w-7xl flex-1 flex-col px-5 pt-36 md:px-6 md:pt-44 lg:px-8"
      >
        <h1 className="sr-only">
          {SITE.name} ({SITE.short})
        </h1>

        <div className="grid flex-1 items-center gap-16 lg:grid-cols-[8fr_4fr] lg:gap-10">
          <div>
            <motion.p
              {...reveal(0.1)}
              className="flex items-center gap-4 text-[0.7rem] font-semibold tracking-[0.24em] text-brand-rose uppercase"
            >
              <span aria-hidden className="h-px w-12 bg-brand-rose/60" />
              {SITE.tagline}
            </motion.p>

            {/* All slides share one grid cell, so the block is as tall as the
                longest slide and nothing below it moves on rotation. */}
            <motion.div {...reveal(0.25)} className="mt-10 grid">
              {SLIDES.map((s, i) => {
                const active = i === index;
                return (
                  <div
                    key={s.tab}
                    role="group"
                    aria-roledescription="slide"
                    aria-label={`${i + 1} of ${SLIDES.length}`}
                    aria-hidden={!active}
                    inert={!active}
                    // Out first, then in: the outgoing slide is gone before
                    // the next one appears, so the two never overlap.
                    className={`[grid-area:1/1] transition-[opacity,transform] ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      active
                        ? "translate-y-0 opacity-100 delay-300 duration-700"
                        : "pointer-events-none translate-y-4 opacity-0 duration-300"
                    }`}
                  >
                    <h2 className="font-serif text-[3.1rem] leading-[0.98] font-medium tracking-[-0.02em] sm:text-7xl lg:text-[6.4rem]">
                      {s.lead}{" "}
                      <em className="text-brand-rose">{s.accent}</em>
                    </h2>
                    <p className="mt-8 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
                      {s.sub}
                    </p>
                    <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
                      <Link
                        href="/contact"
                        className="btn bg-brand text-white hover:bg-white hover:text-brand-navy"
                      >
                        {s.cta}
                        <HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
                      </Link>
                      <Link
                        href="/academy"
                        className="group inline-flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.16em] text-white uppercase"
                      >
                        <span className="border-b border-white/40 pb-1 transition-colors group-hover:border-white">
                          Explore DVIPC Academy
                        </span>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <motion.div {...reveal(0.45)} className="relative lg:pl-6">
            <p className="text-[0.7rem] font-semibold tracking-[0.24em] text-white/70 uppercase">
              What we help you protect
            </p>
            <ol className="mt-6">
              {RIGHTS.map((r, i) => {
                const on = slide.rights.includes(r.id);
                return (
                  <li
                    key={r.id}
                    className="flex items-baseline gap-5 border-t border-white/15 py-4 last:border-b"
                  >
                    <span
                      className={`w-6 font-serif text-base italic transition-colors duration-700 ${
                        on ? "text-brand-rose" : "text-white/35"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-serif text-3xl font-medium transition-colors duration-700 sm:text-[2.1rem] ${
                        on ? "text-white" : "text-white/35"
                      }`}
                    >
                      {r.label}
                    </span>
                  </li>
                );
              })}
            </ol>
          </motion.div>
        </div>

        {/* Slide controls: one column per slide, each with its own timer. */}
        <motion.div
          {...reveal(0.6)}
          className="mt-16 flex items-stretch border-t border-white/15 lg:mt-20"
        >
          <div role="group" aria-label="Choose a slide" className="grid flex-1 grid-cols-3">
            {SLIDES.map((s, i) => {
              const active = i === index;
              return (
                <button
                  key={s.tab}
                  type="button"
                  aria-current={active ? "true" : undefined}
                  aria-label={`Slide ${i + 1}: ${s.tab}`}
                  onClick={() => setIndex(i)}
                  className="group relative cursor-pointer py-6 pr-4 text-left"
                >
                  <span aria-hidden className="absolute -top-px left-0 h-px w-full overflow-hidden">
                    <span
                      key={active && rotating ? `run-${index}` : `still-${i}-${active}`}
                      style={
                        active && rotating
                          ? { animation: `progress ${ROTATE_EVERY}ms linear forwards` }
                          : undefined
                      }
                      className={`block h-full w-full origin-left bg-brand-rose ${
                        active ? (rotating ? "" : "scale-x-100") : "scale-x-0"
                      }`}
                    />
                  </span>
                  <span
                    className={`font-serif text-lg italic transition-colors ${
                      active ? "text-brand-rose" : "text-white/40 group-hover:text-white/70"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`ml-3 hidden text-[0.72rem] font-semibold tracking-[0.18em] uppercase transition-colors sm:inline ${
                      active ? "text-white" : "text-white/50 group-hover:text-white/80"
                    }`}
                  >
                    {s.tab}
                  </span>
                </button>
              );
            })}
          </div>
          {!reduced && (
            <button
              type="button"
              onClick={() => setStopped((v) => !v)}
              aria-label={stopped ? "Start rotating slides" : "Stop rotating slides"}
              className="grid w-14 cursor-pointer place-items-center text-white/60 transition hover:text-white"
            >
              <HugeiconsIcon icon={stopped ? PlayIcon : PauseIcon} size={16} strokeWidth={2} />
            </button>
          )}
        </motion.div>
      </div>
    </section>
  );
}
