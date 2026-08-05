import type { ReactNode } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

/** Glass bento tile with fade-in + hover lift. */
export function GlassCard({
  children,
  className,
  delay = 0,
  interactive = true,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  interactive?: boolean;
  as?: "div" | "section" | "article";
}) {
  const Comp = motion[as];
  return (
    <Comp
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "glass relative overflow-hidden rounded-3xl p-6",
        interactive && "lift",
        className,
      )}
    >
      {children}
    </Comp>
  );
}

export function CardLabel({ icon, title }: { icon?: ReactNode; title: string }) {
  return (
    <div className="mb-4 flex min-w-0 items-center gap-2 text-muted-foreground">
      {icon && <span className="shrink-0 [&_svg]:size-4">{icon}</span>}
      <span className="truncate text-xs font-semibold uppercase tracking-[0.14em]">{title}</span>
    </div>
  );
}
