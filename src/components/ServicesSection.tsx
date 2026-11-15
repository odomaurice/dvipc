"use client";

import Link from "next/link";
import { useRef, useState, type KeyboardEvent } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Agreement01Icon,
  ArrowRight01Icon,
  BulbIcon,
  CopyrightIcon,
  DrawingCompassIcon,
  Globe02Icon,
  Layers01Icon,
  LockKeyIcon,
  TeacherIcon,
  TradeMarkIcon,
} from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";

// The four primary service tabs of brief 4.5, in its order. Every service
// listed is one the brief records as discussed (2.2 A, B, C and F); each CTA
// is the matching label from the CTA framework in 4.11.
const SERVICES = [
  {
    id: "patents",
    icon: BulbIcon,
    label: "Patent Filing & Prosecution",
    short: "Patents",
    lead: "Protection for inventions, from disclosure to an ongoing portfolio.",
    services: [
      "Patentability assessment",
      "Invention disclosure support",
      "Patent filing",
      "Patent prosecution",
      "Patent advisory and innovation protection",
      "Patent portfolio management",
    ],
    extraTitle: null,
    extra: [],
    clients: "Inventors, researchers, innovators, startups, technology enterprises, universities and research institutions, and innovation hubs.",
    cta: "Protect My Invention",
  },
  {
    id: "trademarks",
    icon: TradeMarkIcon,
    label: "Trademark Registration & Brand Protection",
    short: "Trademarks",
    lead: "Your name, logo, slogan, and identity deserve legal protection.",
    services: [
      "Trademark availability searches",
      "Trademark classification",
      "Registration guidance, filing and application preparation",
      "Trademark opposition-related support",
      "Trademark monitoring and management",
      "Trademark portfolio management",
      "Brand protection advisory",
    ],
    extraTitle: null,
    extra: [],
    clients: "Startups, SMEs, entrepreneurs, business owners, brand owners, corporations, creators and innovators.",
    cta: "Register My Trademark",
  },
  {
    id: "copyright",
    icon: CopyrightIcon,
    label: "Copyright Registration & Creative Rights",
    short: "Copyright",
    lead: "Ownership and protection for original creative work.",
    services: [
      "Copyright registration support",
      "Copyright advisory",
      "Copyright protection",
      "Copyright ownership guidance",
      "Creative rights management",
    ],
    extraTitle: "Works such as",
    extra: [
      "Books and literary works",
      "Educational materials",
      "Artistic creations",
      "Software",
      "Digital content",
      "Publications",
    ],
    clients: "Authors, publishers, educators, content creators, artists, digital creators, and businesses producing original content.",
    cta: "Protect My Work",
  },
  {
    id: "portfolio",
    icon: Layers01Icon,
    label: "IP Portfolio Management & Advisory",
    short: "Portfolio & advisory",
    lead: "Intellectual property managed as a business asset.",
    services: [
      "IP portfolio reviews",
      "IP audits",
      "IP strategy development",
      "IP management",
      "Commercialization planning and licensing support",
      "Innovation management and strategic advisory",
    ],
    extraTitle: null,
    extra: [],
    // No target clients are listed for this service; these are the brief 3.1
    // audiences whose stated need is IP management, strategy or commercialization.
    clients: "Entrepreneurs, business owners, startups and SMEs looking for IP management, strategy and commercialization.",
    cta: "Book an Advisory Session",
  },
];

// Brief 2.2 D, E, G, H and I. Industrial designs and trade secrets are
// recorded as areas of expertise; the services around them are only
// "implied", so they are worded as expertise, not as offers. Policy and trade
// work is the founder's institutional experience and is kept apart from the
// commercial services, as the brief asks.
const MORE = [
  {
    icon: DrawingCompassIcon,
    title: "Industrial designs",
    body: "Part of our IP expertise, alongside patents, trademarks, and copyright.",
  },
  {
    icon: LockKeyIcon,
    title: "Trade secrets",
    body: "An area of our expertise and training: confidential business information, proprietary processes, and commercial know-how.",
  },
  {
    icon: Agreement01Icon,
    title: "Commercialization & licensing",
    body: "Commercialization planning, licensing strategies, technology transfer, IP valuation support, and innovation-to-market strategies.",
  },
  {
    icon: TeacherIcon,
    title: "Institutional capacity building",
    body: "IP workshops, institutional and customized training, awareness campaigns, and innovation management training.",
  },
  {
    icon: Globe02Icon,
    title: "Research, policy & trade",
    body: "Expertise in IP policy development, legal and policy research, and trade-related intellectual property within regional and continental trade frameworks.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function ServicesSection() {
  const [index, setIndex] = useState(0);
  const reduced = useReducedMotion();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    transition: { duration: 0.65, delay, ease },
  });

  // Vertical on large screens, a row on phones: both arrow pairs move.
  const onKeyDown = (event: KeyboardEvent) => {
    const forward = event.key === "ArrowDown" || event.key === "ArrowRight";
    const back = event.key === "ArrowUp" || event.key === "ArrowLeft";
    if (!forward && !back) return;
    event.preventDefault();
    const next = (index + (forward ? 1 : -1) + SERVICES.length) % SERVICES.length;
    setIndex(next);
    tabs.current[next]?.focus();
  };

  const s = SERVICES[index];

  return (
    <section
      id="services"
      data-nav-tone="dark"
      data-nav-bg="var(--color-brand-navy)"
      className="relative isolate overflow-hidden bg-brand-navy py-24 text-white md:py-32"
    >
      <div ref={ref} className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <SectionCaption tone="dark" {...reveal(0)}>
          IP services
        </SectionCaption>
        <motion.h2
          {...reveal(0.1)}
          className="mt-6 max-w-4xl heading-xl"
        >
          Four core services,{" "}
          <em className="text-brand-rose">one adviser</em>
        </motion.h2>

        <div className="mt-14 grid gap-10 lg:grid-cols-[4fr_8fr] lg:gap-16">
          <motion.div
            {...reveal(0.2)}
            role="tablist"
            aria-label="IP services"
            aria-orientation="vertical"
            onKeyDown={onKeyDown}
            className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 scrollbar-none lg:mx-0 lg:flex-col lg:overflow-visible lg:px-0 [&::-webkit-scrollbar]:hidden"
          >
            {SERVICES.map((t, i) => {
              const selected = i === index;
              return (
                <button
                  key={t.id}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  type="button"
                  role="tab"
                  id={`service-tab-${t.id}`}
                  aria-selected={selected}
                  aria-controls={`service-panel-${t.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setIndex(i)}
                  className={`flex shrink-0 cursor-pointer items-center gap-4 px-5 py-4 text-left transition-all duration-300 lg:px-6 lg:py-5 ${
                    selected
                      ? "bg-white text-brand-navy"
                      : "text-white/70 hover:bg-white/6 hover:text-white"
                  }`}
                >
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center ${
                      selected ? "bg-brand text-white" : "text-brand-rose"
                    }`}
                  >
                    <HugeiconsIcon icon={t.icon} size={22} strokeWidth={1.9} />
                  </span>
                  <span className="font-serif text-xl font-medium whitespace-nowrap lg:text-[1.45rem] lg:leading-tight lg:whitespace-normal">
                    <span className="lg:hidden">{t.short}</span>
                    <span className="hidden lg:inline">{t.label}</span>
                  </span>
                </button>
              );
            })}
          </motion.div>

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={s.id}
              id={`service-panel-${s.id}`}
              role="tabpanel"
              aria-labelledby={`service-tab-${s.id}`}
              initial={reduced ? { opacity: 0 } : { opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, x: -16 }}
              transition={{ duration: 0.35, ease }}
            >
              <h3 className="heading-md lg:hidden">
                {s.label}
              </h3>
              <p className="mt-3 max-w-xl text-xl leading-8 text-brand-rose lg:mt-0">
                {s.lead}
              </p>

              <ul className="mt-8 grid gap-x-8 gap-y-3 sm:grid-cols-2">
                {s.services.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={reduced ? false : { opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.05 * i, ease }}
                    className="flex gap-3 text-base leading-7 text-white/90"
                  >
                    <span
                      aria-hidden
                      className="slash mt-2 h-3 w-2.5 shrink-0 bg-brand-rose"
                    />
                    {item}
                  </motion.li>
                ))}
              </ul>

              {s.extra.length > 0 && (
                <div className="mt-8">
                  <p className="text-xs font-semibold tracking-[0.2em] text-white/80 uppercase">
                    {s.extraTitle}
                  </p>
                  <ul className="mt-3 flex flex-wrap gap-x-3 gap-y-2">
                    {s.extra.map((w) => (
                      <li
                        key={w}
                        className="text-[0.95rem] text-white/90 after:ml-3 after:text-brand-rose after:content-['/'] last:after:content-none"
                      >
                        {w}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-10 border-l-2 border-brand pl-6">
                <p className="text-xs font-semibold tracking-[0.2em] text-white/80 uppercase">
                  Who it&apos;s for
                </p>
                <p className="mt-2 text-base leading-7 text-white/90">
                  {s.clients}
                </p>
              </div>

              <Link
                href="/contact"
                className="btn mt-10 bg-brand text-white hover:bg-white hover:text-brand-navy"
              >
                {s.cta}
                <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-24">
          <motion.h3
            {...reveal(0.3)}
            className="heading-md"
          >
            Further areas of expertise
          </motion.h3>
          <ul className="mt-10 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
            {MORE.map((m, i) => (
              <motion.li
                key={m.title}
                {...reveal(0.35 + i * 0.05)}
                className="border-t border-white/20 pt-6"
              >
                <span className="block text-brand-rose">
                  <HugeiconsIcon icon={m.icon} size={22} strokeWidth={1.9} />
                </span>
                <h4 className="mt-4 font-serif text-2xl leading-tight font-medium">{m.title}</h4>
                <p className="mt-2 text-sm leading-6 text-white/90">{m.body}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
