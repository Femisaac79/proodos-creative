// Re-mounts on every navigation, so each page fades in as you arrive.
// Opacity only: a transform here would become the containing block for
// GSAP's fixed-position pin on /work and break it.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
