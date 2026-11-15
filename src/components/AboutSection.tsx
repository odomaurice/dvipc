"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  EyeIcon,
  Mortarboard01Icon,
  SecurityCheckIcon,
  Target02Icon,
} from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";

// Brief 1.4 and the positioning summary: two interconnected pillars, with
// education given the same weight as consulting.
const PILLARS = [
  {
    icon: SecurityCheckIcon,
    title: "IP Consulting & Protection",
    body: "Helping businesses, innovators, creators, and institutions protect and leverage intellectual property: registration, protection, management, advisory, and commercialization.",
    fill: "bg-brand-navy text-white",
    iconFill: "bg-brand text-white",
    text: "text-white/90",
  },
  {
    icon: Mortarboard01Icon,
    title: "IP Education & Empowerment",
    body: "Making intellectual property knowledge accessible to grassroots communities through DVIPC Academy, IP Explorer Club, IP Adventure, training, and awareness.",
    fill: "bg-brand text-white",
    iconFill: "bg-white text-brand",
    text: "text-white/90",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    transition: { duration: 0.65, delay, ease },
  });

  return (
    <section
      id="about"
      data-nav-tone="light"
      data-nav-bg="var(--canvas)"
      className="relative py-24 text-ink md:py-32"
    >
      <div ref={ref} className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[5fr_7fr] lg:gap-16">
          <div>
            <SectionCaption {...reveal(0)}>
              About DVIPC
            </SectionCaption>
            <motion.h2
              {...reveal(0.1)}
              className="mt-6 heading-xl"
            >
              More than a <em className="text-brand">registration agency</em>
            </motion.h2>
          </div>

          <div className="space-y-6 text-lg leading-8 text-soft lg:pt-14">
            <motion.p {...reveal(0.15)}>
              DanVick Intellectual Property Consult (DVIPC) is a Nigeria-based
              intellectual property consulting and advisory firm. We help
              innovators, creators, businesses, institutions, and communities
              identify, protect, manage, and commercialize their intellectual
              assets.
            </motion.p>
            <motion.p {...reveal(0.22)}>
              Alongside that work, our educational arm,{" "}
              <strong className="font-semibold text-ink">DVIPC Academy</strong>,
              takes IP knowledge to the grassroots, because intellectual
              property is not only for lawyers, large corporations, or
              established innovators. Everyone who creates, innovates, brands,
              or produces original work can benefit from understanding it.
            </motion.p>
          </div>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {PILLARS.map((p, i) => (
            <motion.article
              key={p.title}
              {...reveal(0.25 + i * 0.1)}
              className={`relative overflow-hidden p-8 sm:p-10 ${p.fill}`}
            >
              <span
                aria-hidden
                className="slash pointer-events-none absolute -right-6 -bottom-8 h-44 w-32 bg-white/8"
              />
              <span
                className={`relative grid h-14 w-14 place-items-center ${p.iconFill}`}
              >
                <HugeiconsIcon icon={p.icon} size={28} strokeWidth={1.8} />
              </span>
              <p className="relative mt-8 text-xs font-semibold tracking-[0.2em] text-white/80 uppercase">
                Pillar {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="relative mt-2 heading-md">
                {p.title}
              </h3>
              <p className={`relative mt-4 max-w-lg text-base leading-7 ${p.text}`}>
                {p.body}
              </p>
            </motion.article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <motion.div
            {...reveal(0.4)}
            className="bg-brand-blush p-8 sm:p-10"
          >
            <div className="flex items-center gap-3 text-brand">
              <HugeiconsIcon icon={Target02Icon} size={22} strokeWidth={2} />
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase">
                Our mission
              </h3>
            </div>
            <p className="mt-5 text-lg leading-8 text-ink">
              To empower innovators, creators, businesses, institutions, and
              communities through accessible intellectual property solutions
              that protect innovation, preserve creativity, and unlock economic
              value.
            </p>
          </motion.div>
          <motion.div
            {...reveal(0.48)}
            className="bg-surface-2 p-8 sm:p-10"
          >
            <div className="flex items-center gap-3 text-brand">
              <HugeiconsIcon icon={EyeIcon} size={22} strokeWidth={2} />
              <h3 className="text-xs font-semibold tracking-[0.2em] uppercase">
                Our vision
              </h3>
            </div>
            <p className="mt-5 text-lg leading-8 text-ink">
              To become Africa&apos;s leading intellectual property consulting
              and capacity-building firm, fostering a culture where innovation
              and creativity are recognized, protected, and commercialized for
              sustainable development.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
