/**
 * Fine vertical hairlines on the page's column grid, like the guides of a
 * printed page. They line up with the 7xl content container, so headings and
 * text columns sit on them. Four columns on phones, six from `md` up.
 */
export default function ColumnGuides({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 mx-auto grid w-full max-w-7xl grid-cols-4 px-5 md:grid-cols-6 md:px-6 lg:px-8 ${className}`}
    >
      {Array.from({ length: 6 }, (_, i) => (
        <span
          key={i}
          className={`border-l border-current ${i >= 4 ? "hidden md:block" : ""} ${
            i === 5 ? "md:border-r" : ""
          } ${i === 3 ? "border-r md:border-r-0" : ""}`}
        />
      ))}
    </div>
  );
}
