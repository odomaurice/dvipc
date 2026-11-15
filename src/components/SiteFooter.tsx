"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowUp01Icon,
  Call02Icon,
  Clock01Icon,
  Location05Icon,
  Mail01Icon,
  WhatsappIcon,
} from "@hugeicons/core-free-icons";
import Logo from "@/components/Logo";
import { FOOTER } from "@/lib/nav";
import { CONTACT, SITE, hasDirectContact } from "@/lib/site";

const BUILD_YEAR = new Date().getFullYear();
const subscribeToNothing = () => () => {};

const heading = "text-xs font-semibold tracking-[0.2em] text-brand-rose uppercase";
const link = "text-[0.95rem] text-white/90 transition-colors hover:text-white";
const icon = "mt-0.5 shrink-0 text-brand-rose";

export default function SiteFooter() {
  const year = useSyncExternalStore(
    subscribeToNothing,
    () => new Date().getFullYear(),
    () => BUILD_YEAR,
  );

  return (
    <footer
      id="contact"
      data-nav-tone="dark"
      data-nav-bg="var(--color-brand-navy)"
      className="relative isolate overflow-hidden bg-brand-navy pt-20 text-white md:pt-24"
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_0.8fr_1.2fr]">
          <div className="max-w-sm">
            <Link
              href="/"
              aria-label={`${SITE.name} (${SITE.short}) home`}
              className="inline-flex"
            >
              <Logo variant="full" tone="dark" height={84} />
            </Link>
            <p className="mt-6 text-[0.95rem] leading-7 text-white/90">
              {SITE.tagline}
            </p>
            {CONTACT.socials.length > 0 && (
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {CONTACT.socials.map((social) => (
                  <li key={social.label}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex bg-white/10 px-4 py-2 text-sm text-white transition hover:bg-brand"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {FOOTER.map((group) => (
            <div key={group.title}>
              <h2 className={heading}>{group.title}</h2>
              <ul className="mt-5 space-y-3">
                {group.links.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={link}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className={heading}>Contact</h2>
            <ul className="mt-5 space-y-4 text-[0.95rem] text-white/90">
              <li className="flex items-start gap-3">
                <HugeiconsIcon icon={Location05Icon} size={18} strokeWidth={1.8} className={icon} />
                <span className="leading-7">{CONTACT.address ?? SITE.location}</span>
              </li>
              {CONTACT.email && (
                <li>
                  <a href={`mailto:${CONTACT.email}`} className={`${link} flex items-start gap-3`}>
                    <HugeiconsIcon icon={Mail01Icon} size={18} strokeWidth={1.8} className={icon} />
                    {CONTACT.email}
                  </a>
                </li>
              )}
              {CONTACT.phone && (
                <li>
                  <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className={`${link} flex items-start gap-3`}>
                    <HugeiconsIcon icon={Call02Icon} size={18} strokeWidth={1.8} className={icon} />
                    {CONTACT.phone}
                  </a>
                </li>
              )}
              {CONTACT.whatsapp && (
                <li>
                  <a
                    href={`https://wa.me/${CONTACT.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${link} flex items-start gap-3`}
                  >
                    <HugeiconsIcon icon={WhatsappIcon} size={18} strokeWidth={1.8} className={icon} />
                    WhatsApp
                  </a>
                </li>
              )}
              {CONTACT.hours.map((slot) => (
                <li key={slot.days} className="flex items-start gap-3">
                  <HugeiconsIcon icon={Clock01Icon} size={18} strokeWidth={1.8} className={icon} />
                  <span>
                    <span className="block font-semibold text-white">{slot.days}</span>
                    <span className="mt-0.5 block">{slot.time}</span>
                  </span>
                </li>
              ))}
            </ul>
            {!hasDirectContact && (
              // A marked gap, not an invented address: see src/lib/site.ts.
              <p className="mt-6 border-l-2 border-brand pl-4 text-sm leading-6 text-white/90">
                Our phone, email and office details are being confirmed and
                will appear here shortly.
              </p>
            )}
          </div>

        </div>

        <div className="mt-16 flex flex-col items-center gap-5 border-t border-white/15 pt-8 sm:flex-row sm:justify-between">
          <p className="text-sm text-white/90" suppressHydrationWarning>
            © {year} {SITE.name}. {SITE.academy} is our educational arm.
          </p>
          <a
            href="#"
            aria-label="Back to top"
            className="grid h-10 w-10 place-items-center bg-white/10 text-white transition hover:bg-white/20"
          >
            <HugeiconsIcon icon={ArrowUp01Icon} size={16} strokeWidth={2} />
          </a>
        </div>
      </div>

      {/* The abbreviation, set huge and cut off by the page edge. */}
      <p
        aria-hidden
        className="pointer-events-none mt-6 text-center font-serif text-[30vw] leading-[0.75] font-medium italic tracking-tighter whitespace-nowrap text-white/6 select-none"
      >
        DVIPC
      </p>
    </footer>
  );
}
