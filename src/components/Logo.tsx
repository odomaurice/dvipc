import Image from "next/image";

/**
 * The DVIPC logo, cut out of the delivered artwork onto a transparent ground.
 *
 * - `variant="mark"` is the bulb and letters without the tagline, for the
 *   header, where the tagline would be too small to read.
 * - `variant="full"` is the whole lockup, tagline included.
 *
 * On dark grounds both swap to an all-white version: the navy "IPC" would
 * vanish on the navy bands, and maroon on navy is too low in contrast.
 */
const ART = {
  mark: { w: 480, h: 209, light: "/brand/dvipc-mark.webp", dark: "/brand/dvipc-mark-white.webp" },
  full: { w: 488, h: 254, light: "/brand/dvipc-logo.webp", dark: "/brand/dvipc-logo-white.webp" },
};

export default function Logo({
  variant = "mark",
  tone = "light",
  height,
  priority = false,
  className = "",
}: {
  variant?: "mark" | "full";
  tone?: "light" | "dark";
  /** Rendered height in px; the width follows the artwork's ratio. */
  height: number;
  priority?: boolean;
  className?: string;
}) {
  const art = ART[variant];
  const width = Math.round((height * art.w) / art.h);
  const shared = { width, height, priority };

  // Both versions are rendered and cross-faded, so the header does not flash
  // while a new file loads when it changes tone.
  return (
    <span
      className={`relative inline-block shrink-0 ${className}`}
      style={{ width, height }}
    >
      <Image
        {...shared}
        alt=""
        src={art.light}
        className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${
          tone === "dark" ? "opacity-0" : "opacity-100"
        }`}
      />
      <Image
        {...shared}
        alt=""
        priority={false}
        src={art.dark}
        className={`absolute inset-0 h-full w-full transition-opacity duration-300 ${
          tone === "dark" ? "opacity-100" : "opacity-0"
        }`}
      />
    </span>
  );
}
