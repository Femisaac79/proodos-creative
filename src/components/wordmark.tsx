import LogoMark from "./logo-mark";

/** "Pr(o)odos" — the first o is the animated mark, as in the logo. */
export default function Wordmark({ className }: { className?: string }) {
  return (
    <span className={`wordmark ${className ?? ""}`}>
      Pr
      <LogoMark className="wordmark-mark" />
      <span className="sr-only">o</span>odos
    </span>
  );
}
