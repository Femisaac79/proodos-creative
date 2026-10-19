// Static (non-animated, no CSS vars) copy of the logo mark for next/og,
// which can't resolve CSS custom properties.
export default function OgMark({
  size,
  halo,
  arrow = "#8fbe42",
}: {
  size: number;
  halo: string;
  arrow?: string;
}) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100">
      <circle
        cx="50"
        cy="50"
        r="34"
        fill="none"
        stroke="#0172a5"
        strokeWidth="13"
        strokeDasharray="175 38.6"
        transform="rotate(-12 50 50)"
      />
      <g transform="rotate(45 50 50)">
        <line x1="50" y1="76" x2="50" y2="38" stroke={halo} strokeWidth="21" />
        <polygon points="50,6 27,44 73,44" fill={halo} />
        <line x1="50" y1="74" x2="50" y2="36" stroke={arrow} strokeWidth="11" />
        <polygon points="50,12 32,41 68,41" fill={arrow} />
      </g>
    </svg>
  );
}
