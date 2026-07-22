/**
 * The Proodos mark: a blue ring, broken where a green arrow launches
 * through it toward the upper right.
 *
 * The ring orbits slowly for as long as the page is open; the arrow
 * breathes along its own axis. The arrow wears a halo (--mark-halo,
 * matching whatever surface it sits on) so the ring visibly passes
 * *behind* it — same cut the print logo has.
 */
export default function LogoMark({
  className,
  animated = true,
}: {
  className?: string;
  animated?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g className={animated ? "mark-orbit" : undefined}>
        <circle
          cx="50"
          cy="50"
          r="34"
          fill="none"
          stroke="var(--blue)"
          strokeWidth="13"
          strokeDasharray="175 38.6"
          transform="rotate(-12 50 50)"
        />
      </g>
      <g transform="rotate(45 50 50)">
        <g className={animated ? "mark-launch" : undefined}>
          {/* halo — matches the surface behind it */}
          <line
            x1="50"
            y1="76"
            x2="50"
            y2="38"
            stroke="var(--mark-halo, var(--paper))"
            strokeWidth="21"
          />
          <polygon
            points="50,6 27,44 73,44"
            fill="var(--mark-halo, var(--paper))"
          />
          {/* arrow — var(--mark-arrow) so it can flip to white on green */}
          <line
            x1="50"
            y1="74"
            x2="50"
            y2="36"
            stroke="var(--mark-arrow, var(--green))"
            strokeWidth="11"
          />
          <polygon
            points="50,12 32,41 68,41"
            fill="var(--mark-arrow, var(--green))"
          />
        </g>
      </g>
    </svg>
  );
}
