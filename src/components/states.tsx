import type { ReactNode } from "react";
import { Arbi } from "@/components/arbi";
import { cn } from "@/lib/utils";

export function EmptyState({
  title,
  description,
  action,
  className,
  mood = "idle",
}: {
  title: string;
  description: string;
  action?: ReactNode;
  className?: string;
  mood?: "idle" | "thinking" | "happy" | "concerned";
}) {
  return (
    <div className={cn("flex flex-col items-center px-6 py-10 text-center", className)}>
      <Arbi mood={mood} size={84} />
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-1.5 max-w-sm text-sm leading-relaxed text-muted-foreground">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}

export function SkeletonBlock({ className }: { className?: string }) {
  return <div className={cn("animate-pulse rounded-2xl bg-foreground/[0.06]", className)} />;
}

export function ArbiLoader({ label = "Arbi is thinking…" }: { label?: string }) {
  return (
    <div className="flex flex-col items-center gap-3 py-10">
      <Arbi mood="thinking" size={76} />
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
}
