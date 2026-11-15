"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";
import { SITE } from "@/lib/site";

const ease = [0.22, 1, 0.36, 1] as const;

export default function CtaSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 22 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 },
    transition: { duration: 0.65, delay, ease },
  });

  return (
    <section
      data-nav-tone="dark"
      data-nav-bg="var(--color-brand-maroon)"
      className="relative isolate overflow-hidden bg-brand-maroon py-24 text-white md:py-28"
    >
      {/* The logo's slash, oversized and cut off by the edges. */}
      <span
        aria-hidden
        className="slash absolute -top-10 -right-24 -z-10 h-[130%] w-96 bg-brand-maroon-dark"
      />

      <div
        ref={ref}
        className="mx-auto w-full max-w-5xl px-5 text-center md:px-6 lg:px-8"
      >
        <SectionCaption tone="dark" align="center" {...reveal(0)}>
          {SITE.tagline}
        </SectionCaption>
        <motion.h2
          {...reveal(0.1)}
          className="mx-auto mt-8 max-w-4xl heading-xl"
        >
          Protect what you create. <em className="text-brand-rose">Learn how IP works.</em>
        </motion.h2>
        <motion.p
          {...reveal(0.2)}
          className="mx-auto mt-6 max-w-xl text-lg leading-8 text-white/90"
        >
          Connect with DVIPC for a consultation, for training, or to partner
          with us.
        </motion.p>

        <motion.div
          {...reveal(0.3)}
          className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <Link
            href="/contact"
            className="btn bg-white text-brand hover:bg-brand-navy hover:text-white"
          >
            Book an IP Consultation
            <HugeiconsIcon icon={ArrowRight01Icon} size={18} strokeWidth={2} />
          </Link>
          <Link
            href="/academy"
            className="group btn bg-white/10 text-white hover:bg-white/20"
          >
            Explore DVIPC Academy
            <HugeiconsIcon
              icon={ArrowRight01Icon}
              size={18}
              strokeWidth={2}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
