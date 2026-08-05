import { cn } from "@/lib/utils";

const SPARKLES = [
  { top: "12%", left: "18%", d: 0 },
  { top: "24%", left: "72%", d: 1.2 },
  { top: "48%", left: "36%", d: 2.4 },
  { top: "62%", left: "84%", d: 0.6 },
  { top: "78%", left: "22%", d: 1.8 },
  { top: "34%", left: "54%", d: 3.1 },
  { top: "86%", left: "62%", d: 2.1 },
  { top: "8%", left: "44%", d: 3.6 },
];

/** Ambient page atmosphere: blurred pastel blobs, sparkles and grain. */
export function Atmosphere({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none fixed inset-0 -z-10 overflow-hidden grain", className)}
    >
      <div className="animate-drift absolute -left-32 -top-40 h-[38rem] w-[38rem] rounded-full bg-primary/35 blur-[120px]" />
      <div
        className="animate-drift absolute -right-40 top-24 h-[34rem] w-[34rem] rounded-full bg-secondary/35 blur-[130px]"
        style={{ animationDelay: "-8s" }}
      />
      <div
        className="animate-drift absolute bottom-[-14rem] left-1/3 h-[32rem] w-[32rem] rounded-full bg-accent/30 blur-[130px]"
        style={{ animationDelay: "-16s" }}
      />
      {SPARKLES.map((s, i) => (
        <span
          key={i}
          className="animate-twinkle absolute h-1.5 w-1.5 rounded-full bg-foreground/40"
          style={{ top: s.top, left: s.left, animationDelay: `${s.d}s` }}
        />
      ))}
    </div>
  );
}
