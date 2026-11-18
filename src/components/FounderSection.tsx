"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Award01Icon,
  Certificate01Icon,
  Globe02Icon,
  Idea01Icon,
} from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";

// Brief 4.9 and 5.1. Only the confirmed credentials, engagements and
// initiatives: the approved biography (gap 38) and memberships (gap 39) are
// still open, so there is no narrative bio here yet.
const QUALIFICATIONS = [
  "Master of Intellectual Property",
  "Master of Sports and Entertainment Law",
  "Master of Peace and Conflict Resolution",
  "WIPO Academy alumnus",
];

const EXPERTISE = [
  "IP policy development",
  "Trade negotiation",
  "IP education and capacity building",
  "IP research and publications",
  "IP awareness advocacy",
];

const ENGAGEMENTS = [
  "African Continental Free Trade Area (AfCFTA)",
  "International, bilateral and regional trade negotiations",
  "IP policy and regulatory development",
  "Stakeholder engagement",
  "Innovation and knowledge economy development",
  "Research and legal analysis",
];

const FOUNDED = [
  "DVIPC Academy",
  "IP Adventure",
  "IP Explorer Club",
  "DVIPC Practice Lab™",
  "DVIPC IP Spotting Framework™",
  "Young Lawyers' IP Hub",
];

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * `asPage` makes this the top of the /founder page: the name becomes the h1
 * and the section clears the fixed header.
 */
export default function FounderSection({ asPage = false }: { asPage?: boolean }) {
  const Heading = asPage ? motion.h1 : motion.h2;
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.1 });

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    transition: { duration: 0.65, delay, ease },
  });

  return (
    <section
      id="founder"
      data-nav-tone="dark"
      data-nav-bg="var(--color-brand-navy)"
      className={`relative isolate overflow-hidden bg-brand-navy text-white ${
        asPage ? "pt-40 pb-24 md:pt-48 md:pb-32" : "py-24 md:py-32"
      }`}
    >
      <div
        ref={ref}
        className="mx-auto grid w-full max-w-7xl gap-14 px-5 md:px-6 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:px-8"
      >
        <motion.div
          {...reveal(0.1)}
          className="relative mx-auto w-full max-w-md lg:sticky lg:top-28 lg:self-start"
        >
          <span
            aria-hidden
            className="slash absolute -top-6 -left-6 h-48 w-36 bg-brand"
          />
          <Image
            src="/brand/founder.webp"
            alt="Barr. Onyekachi Eriobu-Aniede, Lead Consultant and Founder of DVIPC"
            width={896}
            height={1120}
            sizes="(min-width: 640px) 448px, calc(100vw - 40px)"
            className="relative h-auto w-full"
          />
        </motion.div>

        <div>
          <SectionCaption tone="dark" {...reveal(0)}>
            Founder &amp; leadership
          </SectionCaption>
          <Heading {...reveal(0.1)} className="mt-6 heading-xl">
            Barr. Onyekachi Eriobu-Aniede
          </Heading>
          <motion.p
            {...reveal(0.15)}
            className="mt-3 text-lg font-semibold text-brand-rose"
          >
            Lead Consultant &amp; Founder
          </motion.p>
          <motion.p
            {...reveal(0.2)}
            className="mt-5 text-base leading-7 text-white/90"
          >
            Intellectual Property Professional, Policy Strategist, Trade
            Negotiator, Legal Practitioner, Educator and Author, with over 15
            years post-call experience.
          </motion.p>

          <div className="mt-12 grid gap-10 sm:grid-cols-2">
            <motion.div {...reveal(0.25)}>
              <h3 className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-white/90 uppercase">
                <HugeiconsIcon icon={Certificate01Icon} size={18} strokeWidth={2} className="text-brand-rose" />
                Qualifications
              </h3>
              <ul className="mt-4 space-y-3">
                {QUALIFICATIONS.map((q) => (
                  <li key={q} className="flex gap-3 text-[0.95rem] leading-7 text-white/90">
                    <span aria-hidden className="slash mt-2 h-3 w-2.5 shrink-0 bg-brand-rose" />
                    {q}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div {...reveal(0.3)}>
              <h3 className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-white/90 uppercase">
                <HugeiconsIcon icon={Award01Icon} size={18} strokeWidth={2} className="text-brand-rose" />
                Expertise
              </h3>
              <ul className="mt-4 space-y-3">
                {EXPERTISE.map((e) => (
                  <li key={e} className="flex gap-3 text-[0.95rem] leading-7 text-white/90">
                    <span aria-hidden className="slash mt-2 h-3 w-2.5 shrink-0 bg-brand-rose" />
                    {e}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div {...reveal(0.35)} className="mt-12">
            <h3 className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-white/90 uppercase">
              <HugeiconsIcon icon={Globe02Icon} size={18} strokeWidth={2} className="text-brand-rose" />
              Policy and trade engagements
            </h3>
            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
              {ENGAGEMENTS.map((e) => (
                <li key={e} className="text-[0.95rem] text-white/90 after:ml-3 after:text-brand-rose after:content-['/'] last:after:content-none">
                  {e}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div {...reveal(0.4)} className="mt-12 bg-brand p-7 sm:p-8">
            <h3 className="flex items-center gap-3 text-xs font-semibold tracking-[0.2em] text-white uppercase">
              <HugeiconsIcon icon={Idea01Icon} size={18} strokeWidth={2} />
              Initiatives founded
            </h3>
            <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {FOUNDED.map((f) => (
                <li key={f} className="font-serif text-xl font-medium text-white">
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
