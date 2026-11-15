import ColumnGuides from "./ColumnGuides";

/**
 * The single page-wide ground: white, with faint column guides. Sections
 * render transparent on top of it, or paint their own plain ground.
 */
export default function PageBackdrop() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 bg-canvas">
      <ColumnGuides className="text-ink/[0.06]" />
    </div>
  );
}
