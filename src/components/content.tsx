import Link from "next/link";
import type { ReactNode } from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight01Icon } from "@hugeicons/core-free-icons";
import SectionCaption from "@/components/SectionCaption";

/**
 * Small building blocks for the inner pages, so every page is laid out the
 * same way: a section with a caption and serif headline, ruled lists, and a
 * row of calls to action.
 */

const TONES = {
  light: { cls: "text-ink", bg: "var(--canvas)", nav: "light" },
  blush: { cls: "bg-brand-blush text-ink", bg: "var(--color-brand-blush)", nav: "light" },
  navy: { cls: "bg-brand-navy text-white", bg: "var(--color-brand-navy)", nav: "dark" },
  maroon: { cls: "bg-brand-maroon text-white", bg: "var(--color-brand-maroon)", nav: "dark" },
} as const;

export type Tone = keyof typeof TONES;
const dark = (t: Tone) => t === "navy" || t === "maroon";

export function PageSection({
  id,
  tone = "light",
  caption,
  title,
  accent,
  intro,
  children,
}: {
  id?: string;
  tone?: Tone;
  caption: string;
  title: string;
  accent?: string;
  intro?: ReactNode;
  children?: ReactNode;
}) {
  const t = TONES[tone];
  const onDark = dark(tone);
  return (
    <section
      id={id}
      data-nav-tone={t.nav}
      data-nav-bg={t.bg}
      className={`relative isolate py-24 md:py-32 ${t.cls}`}
    >
      <div className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[6fr_6fr] lg:items-end lg:gap-16">
          <div>
            <SectionCaption tone={onDark ? "dark" : "light"}>{caption}</SectionCaption>
            <h2 className="mt-6 heading-xl">
              {title}
              {accent && (
                <>
                  {" "}
                  <em className={onDark ? "text-brand-rose" : "text-brand"}>{accent}</em>
                </>
              )}
            </h2>
          </div>
          {intro && (
            <div className={`text-lg leading-8 ${onDark ? "text-white/85" : "text-soft"}`}>
              {intro}
            </div>
          )}
        </div>
        {children && <div className="mt-16">{children}</div>}
      </div>
    </section>
  );
}

/** A list separated by hairline rules, in one to three columns. */
export function RuledList({
  items,
  tone = "light",
  columns = 2,
}: {
  items: { title: string; body?: string; href?: string }[];
  tone?: Tone;
  columns?: 1 | 2 | 3;
}) {
  const onDark = dark(tone);
  const cols = columns === 3 ? "sm:grid-cols-2 lg:grid-cols-3" : columns === 2 ? "sm:grid-cols-2" : "";
  return (
    <ul className={`grid gap-x-10 ${cols}`}>
      {items.map((item, i) => {
        const inner = (
          <>
            <span className={`font-serif text-lg italic ${onDark ? "text-brand-rose" : "text-brand"}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex-1">
              <span className="block font-serif text-2xl leading-tight font-medium">
                {item.title}
              </span>
              {item.body && (
                <span className={`mt-2 block text-[0.95rem] leading-7 ${onDark ? "text-white/80" : "text-soft"}`}>
                  {item.body}
                </span>
              )}
            </span>
            {item.href && (
              <HugeiconsIcon
                icon={ArrowRight01Icon}
                size={18}
                strokeWidth={2}
                className={`mt-1.5 shrink-0 transition-transform group-hover:translate-x-1 ${
                  onDark ? "text-brand-rose" : "text-brand"
                }`}
              />
            )}
          </>
        );
        const row = `flex items-start gap-5 border-t py-6 ${onDark ? "border-white/20" : "border-ink/15"}`;
        return (
          <li key={item.title}>
            {item.href ? (
              <Link href={item.href} className={`group ${row} transition-colors ${onDark ? "hover:text-brand-rose" : "hover:text-brand"}`}>
                {inner}
              </Link>
            ) : (
              <div className={row}>{inner}</div>
            )}
          </li>
        );
      })}
    </ul>
  );
}

/** Inline list separated by slashes, for short items such as audiences. */
export function SlashList({ items, tone = "light" }: { items: string[]; tone?: Tone }) {
  const onDark = dark(tone);
  return (
    <ul className="flex flex-wrap gap-x-3 gap-y-2">
      {items.map((s) => (
        <li
          key={s}
          className={`text-[0.95rem] after:ml-3 after:content-['/'] last:after:content-none ${
            onDark ? "text-white/90 after:text-brand-rose" : "text-ink/80 after:text-brand"
          }`}
        >
          {s}
        </li>
      ))}
    </ul>
  );
}

/** A small uppercase label above a block. */
export function Label({ children, tone = "light" }: { children: ReactNode; tone?: Tone }) {
  return (
    <h3
      className={`text-[0.7rem] font-semibold tracking-[0.24em] uppercase ${
        dark(tone) ? "text-white/80" : "text-soft"
      }`}
    >
      {children}
    </h3>
  );
}

type Action = { label: string; href: string };

export function Actions({
  primary,
  secondary,
  tone = "light",
}: {
  primary: Action;
  secondary?: Action;
  tone?: Tone;
}) {
  const onDark = dark(tone);
  return (
    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
      <Link
        href={primary.href}
        className={`btn ${
          onDark
            ? "bg-white text-brand-navy hover:bg-brand-blush"
            : "bg-brand text-white hover:bg-brand-navy"
        }`}
      >
        {primary.label}
        <HugeiconsIcon icon={ArrowRight01Icon} size={16} strokeWidth={2} />
      </Link>
      {secondary && (
        <Link
          href={secondary.href}
          className={`group inline-flex items-center gap-3 text-[0.78rem] font-semibold tracking-[0.16em] uppercase ${
            onDark ? "text-white" : "text-ink"
          }`}
        >
          <span
            className={`border-b pb-1 transition-colors ${
              onDark ? "border-white/40 group-hover:border-white" : "border-ink/30 group-hover:border-brand group-hover:text-brand"
            }`}
          >
            {secondary.label}
          </span>
        </Link>
      )}
    </div>
  );
}
