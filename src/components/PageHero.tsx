import Link from "next/link";
import type { ReactNode } from "react";
import ColumnGuides from "@/components/ColumnGuides";

type Crumb = { label: string; href?: string };

/**
 * The navy band every inner page opens with: breadcrumb, eyebrow, the page's
 * h1 (with an optional accent in the serif italic) and a lead line taken
 * from the brief's "key message" for that page (4.1).
 */
export default function PageHero({
  crumbs,
  eyebrow,
  title,
  accent,
  lead,
  children,
}: {
  crumbs: Crumb[];
  eyebrow: string;
  title: string;
  accent?: string;
  lead: string;
  children?: ReactNode;
}) {
  return (
    <section
      data-nav-tone="dark"
      data-nav-bg="var(--color-brand-navy)"
      className="relative isolate overflow-hidden bg-brand-navy pt-40 pb-20 text-white md:pt-48 md:pb-28"
    >
      <ColumnGuides className="-z-10 text-white/[0.07]" />
      <span
        aria-hidden
        className="slash absolute top-0 -right-56 -z-10 hidden h-full w-[20rem] bg-brand lg:block"
      />

      <div className="mx-auto w-full max-w-7xl px-5 md:px-6 lg:px-8">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.7rem] font-semibold tracking-[0.2em] uppercase">
            {[{ label: "Home", href: "/" }, ...crumbs].map((c, i, all) => {
              const last = i === all.length - 1;
              return (
                <li key={c.label} className="flex items-center gap-3">
                  {c.href && !last ? (
                    <Link href={c.href} className="text-white/60 transition-colors hover:text-white">
                      {c.label}
                    </Link>
                  ) : (
                    <span aria-current={last ? "page" : undefined} className="text-brand-rose">
                      {c.label}
                    </span>
                  )}
                  {!last && <span aria-hidden className="text-white/30">/</span>}
                </li>
              );
            })}
          </ol>
        </nav>

        <p className="mt-14 flex items-center gap-4 text-[0.7rem] font-semibold tracking-[0.24em] text-white/80 uppercase">
          <span aria-hidden className="h-px w-12 bg-white/40" />
          {eyebrow}
        </p>
        <h1 className="mt-6 max-w-5xl font-serif text-[3rem] leading-[1] font-medium tracking-[-0.02em] sm:text-7xl lg:text-[5.75rem]">
          {title}
          {accent && (
            <>
              {" "}
              <em className="text-brand-rose">{accent}</em>
            </>
          )}
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-8 text-white/80">{lead}</p>
        {children && <div className="mt-10">{children}</div>}
      </div>
    </section>
  );
}
