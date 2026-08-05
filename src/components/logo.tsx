import { cn } from "@/lib/utils";

/** Simplified Arbitiza mark: a flowing path rising through a soft orb. */
export function LogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" fill="none" className={cn("h-9 w-9", className)} aria-hidden>
      <defs>
        <linearGradient id="arb-orb" x1="4" y1="4" x2="44" y2="44">
          <stop offset="0%" stopColor="oklch(0.80 0.062 248)" />
          <stop offset="55%" stopColor="oklch(0.805 0.058 305)" />
          <stop offset="100%" stopColor="oklch(0.878 0.056 52)" />
        </linearGradient>
        <linearGradient id="arb-path" x1="12" y1="42" x2="36" y2="8">
          <stop offset="0%" stopColor="oklch(1 0 0 / 0.95)" />
          <stop offset="100%" stopColor="oklch(1 0 0 / 0.55)" />
        </linearGradient>
      </defs>
      <circle cx="24" cy="24" r="19" fill="url(#arb-orb)" opacity="0.95" />
      <path
        d="M13 39c7-2 9-7 7-12s0-11 8-14"
        stroke="url(#arb-path)"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="29.5" cy="12" r="3.4" fill="oklch(1 0 0 / 0.95)" />
    </svg>
  );
}

export function Logo({ className, compact }: { className?: string; compact?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark />
      {!compact && (
        <span className="font-display text-xl font-semibold tracking-tight">Arbitiza</span>
      )}
    </span>
  );
}
