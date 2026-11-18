"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";
import type { Service } from "@/lib/services";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * A set of services as WAI-ARIA tabs: vertical on desktop, a sideways row on
 * phones (all four arrow keys move). Used by every service page with its own
 * data from src/lib/services.ts.
 */
export default function ServiceTabs({
  id,
  services,
  caption,
  title,
  accent,
  intro,
  note,
  tone = "light",
}: {
  id: string;
  services: Service[];
  caption: string;
  title: string;
  accent?: string;
  intro?: string;
  /** A closing line under the panels, such as a scope caveat. */
  note?: string;
  tone?: "navy" | "light";
}) {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const dark = tone === "navy";

  const onKeyDown = (event: KeyboardEvent) => {
    const forward = event.key === "ArrowDown" || event.key === "ArrowRight";
    const back = event.key === "ArrowUp" || event.key === "ArrowLeft";
    if (!forward && !back) return;
    event.preventDefault();
    const next = (index + (forward ? 1 : -1) + services.length) % services.length;
    setIndex(next);
    tabs.current[next]?.focus();
  };

  const s = services[index];

  return (
    <section
      id={id}
      data-nav-tone={dark ? "dark" : "light"}
      data-nav-bg={dark ? "var(--color-brand-navy)" : "var(--canvas)"}
      className={`relative isolate py-24 md:py-32 ${dark ? "bg-brand-navy text-white" : "text-ink"}`}
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[6fr_6fr] lg:items-end lg:gap-16">
          <div>
            <SectionCaption tone={dark ? "dark" : "light"}>{caption}</SectionCaption>
            <h2 className="mt-6 heading-xl">
              {title}
              {accent && (
                <>
                  {" "}
                  <em className={dark ? "text-brand-rose" : "text-brand"}>{accent}</em>
                </>
              )}
            </h2>
          </div>
          {intro && (
            <p className={`text-lg leading-8 ${dark ? "text-white/85" : "text-soft"}`}>{intro}</p>
          )}
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-16">
          <div
            role="tablist"
            aria-label={caption}
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 [scrollbar-width:none] lg:mx-0 lg:flex-col lg:gap-0 lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {services.map((t, i) => {
              const selected = i === index;
              return (
                <button
                  key={t.id}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`${id}-tab-${t.id}`}
                  aria-selected={selected}
                  aria-controls={`${id}-panel-${t.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setIndex(i)}
                  className={`flex shrink-0 cursor-pointer items-baseline gap-4 px-5 py-4 text-left transition-colors duration-300 lg:border-t lg:px-4 lg:py-5 ${
                    dark ? "lg:border-white/15" : "lg:border-ink/15"
                  } ${
                    selected
                      ? dark
                        ? "bg-white text-brand-navy"
                        : "bg-brand-navy text-white"
                      : dark
                        ? "text-white/70 hover:bg-white/6 hover:text-white"
                        : "text-ink/70 hover:bg-brand-blush hover:text-ink"
                  }`}
                >
                  <span
                    className={`font-serif text-base italic ${
                      selected ? (dark ? "text-brand" : "text-brand-rose") : dark ? "text-brand-rose" : "text-brand"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-serif text-xl font-medium whitespace-nowrap lg:text-[1.45rem] lg:leading-tight lg:whitespace-normal">
                    <span className="lg:hidden">{t.short}</span>
                    <span className="hidden lg:inline">{t.title}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={s.id}
              id={`${id}-panel-${s.id}`}
              role="tabpanel"
              aria-labelledby={`${id}-tab-${s.id}`}
              initial={reduced ? { opacity: 0 } : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, x: -16 }}
              transition={{ duration: 0.35, ease }}
            >
              <h3 className="heading-md">{s.title}</h3>
              {s.strap && s.strap !== s.intro && (
                <p className={`mt-3 font-serif text-xl italic ${dark ? "text-brand-rose" : "text-brand"}`}>
                  {s.strap}
                </p>
              )}
              <p className={`mt-5 max-w-2xl text-base leading-8 ${dark ? "text-white/85" : "text-soft"}`}>
                {s.intro}
              </p>

              <p className={`mt-10 text-[0.7rem] font-semibold tracking-[0.24em] uppercase ${dark ? "text-white/70" : "text-soft"}`}>
                Services include
              </p>
              <ul className="mt-4 grid gap-x-10 sm:grid-cols-2">
                {s.items.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={reduced ? false : { opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.03 * i, ease }}
                    className={`flex gap-3 border-t py-3 text-[0.95rem] leading-7 ${
                      dark ? "border-white/15 text-white/90" : "border-ink/15 text-ink/85"
                    }`}
                  >
                    <span aria-hidden className={`slash mt-2 h-3 w-2.5 shrink-0 ${dark ? "bg-brand-rose" : "bg-brand"}`} />
                    {item}
                  </motion.li>
                ))}
              </ul>

              <Link
                href={`/register?service=${encodeURIComponent(s.short)}`}
                className={`btn mt-10 ${
                  dark ? "bg-brand text-white hover:bg-white hover:text-brand-navy" : "bg-brand text-white hover:bg-brand-navy"
                }`}
              >
                {s.cta}
                <HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        {note && (
          <p className={`mt-14 max-w-3xl border-l-2 border-brand pl-5 text-sm leading-7 ${dark ? "text-white/80" : "text-soft"}`}>
            {note}
          </p>
        )}
      </div>
    </section>
  );
}
