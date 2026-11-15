"use client";

import type { ReactNode } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type Props = Omit<HTMLMotionProps<"p">, "children"> & {
  tone?: "light" | "dark";
  /** A folio number. Used only by the homepage teasers. */
  index?: number;
  align?: "left" | "center";
  children: ReactNode;
};

/**
 * The eyebrow every section opens with, set like an editorial folio: the
 * section number in the serif italic, a hairline, then an uppercase label.
 */
export default function SectionCaption({
  tone = "light",
  index,
  align = "left",
  className = "",
  children,
  ...rest
}: Props) {
  const onDark = tone === "dark";

  return (
    <motion.p
      {...rest}
      className={`flex items-center gap-4 text-[0.7rem] font-semibold tracking-[0.24em] uppercase ${
        align === "center" ? "justify-center" : ""
      } ${onDark ? "text-white/85" : "text-soft"} ${className}`}
    >
      {index !== undefined && (
        <>
          <span
            className={`font-serif text-2xl font-medium tracking-normal normal-case italic ${
              onDark ? "text-brand-rose" : "text-brand"
            }`}
          >
            {String(index).padStart(2, "0")}
          </span>
          <span
            aria-hidden
            className={`h-px w-12 ${onDark ? "bg-white/30" : "bg-ink/25"}`}
          />
        </>
      )}
      {children}
    </motion.p>
  );
}
