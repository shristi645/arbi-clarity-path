import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export type ArbiMood = "idle" | "thinking" | "happy" | "concerned";

/** Arbi — a tiny floating AI spirit. Pearl body, mist glow, lavender aura. */
export function Arbi({
  mood = "idle",
  size = 72,
  className,
}: {
  mood?: ArbiMood;
  size?: number;
  className?: string;
}) {
  const bob =
    mood === "happy"
      ? { y: [0, -14, 0], scale: [1, 1.05, 1] }
      : mood === "concerned"
        ? { y: [0, -3, 0] }
        : { y: [0, -7, 0] };

  return (
    <motion.div
      className={cn("relative shrink-0 select-none", className)}
      style={{ width: size, height: size }}
      animate={bob}
      transition={{
        duration: mood === "happy" ? 0.9 : 4.2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* aura */}
      <motion.span
        className="absolute inset-0 rounded-full bg-secondary/50 blur-xl"
        animate={{ opacity: mood === "concerned" ? [0.3, 0.4, 0.3] : [0.5, 0.85, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      />
      <svg viewBox="0 0 100 100" className="relative h-full w-full" aria-hidden>
        <defs>
          <radialGradient id="arbi-body" cx="38%" cy="30%">
            <stop offset="0%" stopColor="oklch(1 0 0)" />
            <stop offset="60%" stopColor="oklch(0.972 0.008 280)" />
            <stop offset="100%" stopColor="oklch(0.895 0.036 265)" />
          </radialGradient>
          <linearGradient id="arbi-rim" x1="0" y1="0" x2="100" y2="100">
            <stop offset="0%" stopColor="oklch(0.795 0.062 248)" />
            <stop offset="60%" stopColor="oklch(0.805 0.058 305)" />
            <stop offset="100%" stopColor="oklch(0.878 0.056 52)" />
          </linearGradient>
        </defs>
        <ellipse cx="50" cy="88" rx="20" ry="4" fill="oklch(0.70 0.05 275 / 0.18)" />
        <circle cx="50" cy="48" r="33" fill="url(#arbi-rim)" opacity="0.55" />
        <circle cx="50" cy="48" r="30" fill="url(#arbi-body)" />
        <path
          d="M28 40c6-11 20-16 33-12"
          stroke="oklch(1 0 0 / 0.9)"
          strokeWidth="4"
          strokeLinecap="round"
          fill="none"
        />
        {/* eyes */}
        <motion.g
          animate={{ scaleY: mood === "concerned" ? 0.75 : [1, 1, 0.1, 1] }}
          style={{ transformOrigin: "50px 48px" }}
          transition={{
            duration: 4,
            times: [0, 0.9, 0.94, 1],
            repeat: Infinity,
            repeatDelay: 1.5,
          }}
        >
          <ellipse cx="40" cy="48" rx="3.6" ry="4.6" fill="oklch(0.34 0.035 272)" />
          <ellipse cx="60" cy="48" rx="3.6" ry="4.6" fill="oklch(0.34 0.035 272)" />
        </motion.g>
        {/* cheeks */}
        <circle cx="33" cy="57" r="4.5" fill="oklch(0.878 0.056 52 / 0.7)" />
        <circle cx="67" cy="57" r="4.5" fill="oklch(0.878 0.056 52 / 0.7)" />
        {/* mouth */}
        {mood === "concerned" ? (
          <path
            d="M44 63q6-4 12 0"
            stroke="oklch(0.45 0.04 272)"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />
        ) : (
          <path
            d={mood === "happy" ? "M42 60q8 9 16 0" : "M44 60q6 5 12 0"}
            stroke="oklch(0.45 0.04 272)"
            strokeWidth="2.4"
            strokeLinecap="round"
            fill="none"
          />
        )}
      </svg>

      {/* orbiting particles */}
      {(mood === "thinking" || mood === "happy") && (
        <motion.div
          className="absolute inset-0"
          animate={{ rotate: 360 }}
          transition={{ duration: mood === "thinking" ? 5 : 2.4, repeat: Infinity, ease: "linear" }}
        >
          {[0, 120, 240].map((deg) => (
            <span
              key={deg}
              className="absolute left-1/2 top-1/2 h-1.5 w-1.5 rounded-full bg-primary"
              style={{ transform: `rotate(${deg}deg) translateY(-${size * 0.52}px)` }}
            />
          ))}
        </motion.div>
      )}
      {mood === "happy" && (
        <motion.span
          className="absolute -right-1 -top-1 text-xs"
          animate={{ scale: [0.6, 1.1, 0.6], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.2, repeat: Infinity }}
        >
          ✦
        </motion.span>
      )}
    </motion.div>
  );
}
