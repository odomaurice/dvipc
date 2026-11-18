"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Menu01Icon,
  Cancel01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";
import Logo from "@/components/Logo";
import { MAIN, isActive } from "@/lib/nav";
import { SITE } from "@/lib/site";

const PROBE_Y = 48;
type Nav = { tone: "light" | "dark"; bg: string };
// Every page opens on a navy band (the home hero or a PageHero).
const DEFAULT_NAV: Nav = { tone: "dark", bg: "var(--color-brand-navy)" };
const FALLBACK_NAV: Nav = { tone: "light", bg: "var(--canvas)" };

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [nav, setNav] = useState<Nav>(DEFAULT_NAV);
  const onDark = nav.tone === "dark";

  // The header lives in the root layout and survives navigation, so it
  // re-probes whenever the page changes, not only on scroll.
  useEffect(() => {
    let ticking = false;

    const compute = () => {
      ticking = false;
      let next = FALLBACK_NAV;
      document.querySelectorAll<HTMLElement>("[data-nav-tone]").forEach((section) => {
        const r = section.getBoundingClientRect();
        if (r.top <= PROBE_Y && r.bottom > PROBE_Y) {
          next = {
            tone: section.dataset.navTone === "dark" ? "dark" : "light",
            bg: section.dataset.navBg ?? "transparent",
          };
        }
      });
      setNav(next);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(compute);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return (
    <>
      {/* A full-width bar on the page grid. Its fill is the ground beneath
          it, so it reads as part of each section rather than a box on top. */}
      <header
        style={{
          backgroundColor: `color-mix(in oklab, ${nav.bg} 92%, transparent)`,
        }}
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur-xl transition-colors duration-300 ${
          onDark
            ? "shadow-[inset_0_-1px_0_rgb(255_255_255/0.1)]"
            : "shadow-[inset_0_-1px_0_rgb(1_4_39/0.08)]"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-6 lg:px-8">
          <Link
            href="/"
            aria-label={`${SITE.name} (${SITE.short}) home`}
            className="flex items-center"
          >
            <Logo tone={onDark ? "dark" : "light"} height={40} priority />
          </Link>

          <nav aria-label="Main" className="hidden items-center lg:flex">
            {MAIN.map((item) => {
              const active = isActive(pathname, item);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative px-3 py-2 text-[0.72rem] font-semibold tracking-[0.18em] uppercase transition-colors duration-300 ${
                    onDark
                      ? active
                        ? "text-white"
                        : "text-white/70 hover:text-white"
                      : active
                        ? "text-brand"
                        : "text-ink/65 hover:text-brand"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span
                      aria-hidden
                      className={`absolute inset-x-3 -bottom-0.5 h-px ${
                        onDark ? "bg-brand-rose" : "bg-brand"
                      }`}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/register"
              className={`btn hidden px-5! py-3.5! sm:inline-flex ${
                onDark
                  ? "bg-brand text-white hover:bg-white hover:text-brand-navy"
                  : "bg-brand text-brand-fg hover:bg-brand-navy"
              }`}
            >
              Register
              <HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
              className={`grid h-12 w-12 cursor-pointer place-items-center transition-colors duration-300 lg:hidden ${
                onDark
                  ? "bg-white/10 text-white hover:bg-white/20"
                  : "bg-ink/5 text-ink hover:bg-ink/10"
              }`}
            >
              <HugeiconsIcon
                icon={open ? Cancel01Icon : Menu01Icon}
                size={20}
                strokeWidth={1.8}
              />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 origin-top bg-brand-navy p-5 lg:hidden"
          >
            <nav aria-label="Main" className="flex flex-col">
              {MAIN.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive(pathname, item) ? "page" : undefined}
                  className="flex items-center gap-5 border-b border-white/10 px-2 py-4 font-serif text-2xl font-medium text-white transition-colors hover:text-brand-rose aria-[current=page]:text-brand-rose"
                >
                  <span className="w-6 font-serif text-base text-brand-rose italic">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {item.label}
                </Link>
              ))}
              <Link
                href="/register"
                onClick={() => setOpen(false)}
                className="btn mt-5 bg-brand text-brand-fg hover:bg-white hover:text-brand-navy"
              >
                Register with DVIPC
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
