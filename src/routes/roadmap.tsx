import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Lock, Check, Sparkles } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { GlassCard } from "@/components/glass-card";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/roadmap")({
  head: () => ({
    meta: [
      { title: "Your roadmap — Arbitiza" },
      {
        name: "description",
        content: "A vertical path of milestones: completed, current and gently locked ahead.",
      },
      { property: "og:title", content: "Your roadmap — Arbitiza" },
      {
        property: "og:description",
        content: "A vertical path of milestones: completed, current and gently locked ahead.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RoadmapPage,
});

type State = "done" | "current" | "locked";

const NODES: { title: string; note: string; state: State }[] = [
  { title: "Define the one goal", note: "Completed 12 July", state: "done" },
  { title: "Shape the first build", note: "Completed 21 July", state: "done" },
  { title: "Private alpha", note: "Completed 30 July", state: "done" },
  { title: "Public beta", note: "3 steps remaining", state: "current" },
  { title: "First 100 users", note: "Unlocks after beta", state: "locked" },
  { title: "Feedback loop", note: "Unlocks later", state: "locked" },
  { title: "Pricing & launch", note: "Unlocks later", state: "locked" },
  { title: "Growth rhythm", note: "Unlocks later", state: "locked" },
  { title: "Sustainable pace", note: "The real finish line", state: "locked" },
];

function RoadmapPage() {
  return (
    <AppShell>
      <div className="mb-10">
        <h1 className="text-4xl sm:text-5xl">
          Your <span className="text-gradient">path</span>
        </h1>
        <p className="mt-2 text-muted-foreground">
          Nine milestones. You only ever need to see the next one.
        </p>
      </div>

      <div className="relative mx-auto max-w-2xl pb-10">
        {NODES.map((n, i) => {
          const left = i % 2 === 0;
          return (
            <div key={n.title} className="relative">
              {i < NODES.length - 1 && (
                <svg
                  className="pointer-events-none absolute left-0 top-[5.5rem] hidden h-16 w-full sm:block"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  fill="none"
                  aria-hidden
                >
                  <path
                    d={
                      left
                        ? "M4.8 0C4.8 62 95.2 38 95.2 100"
                        : "M95.2 0C95.2 62 4.8 38 4.8 100"
                    }

                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray="1 9" vectorEffect="non-scaling-stroke"
                    className={n.state === "locked" ? "text-foreground/15" : "text-primary/60"}
                  />
                </svg>
              )}

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className={cn(
                  "relative mb-14 flex items-center gap-5",
                  left ? "sm:pr-24" : "sm:flex-row-reverse sm:pl-24 sm:text-right",
                )}
              >
                <div
                  className={cn(
                    "grid size-16 shrink-0 place-items-center rounded-full text-primary-foreground",
                    n.state === "done" && "bg-sage shadow-soft",
                    n.state === "current" && "bg-brand-gradient animate-pulse-ring shadow-glow",
                    n.state === "locked" && "bg-foreground/8 text-muted-foreground",
                  )}
                >
                  {n.state === "done" ? (
                    <Check className="size-6" />
                  ) : n.state === "current" ? (
                    <Sparkles className="size-6" />
                  ) : (
                    <Lock className="size-5" />
                  )}
                </div>

                <GlassCard
                  delay={0}
                  interactive={n.state !== "locked"}
                  className={cn("min-w-0 flex-1 p-5", n.state === "locked" && "opacity-60")}
                >
                  <p className="truncate font-display text-lg">{n.title}</p>
                  <p className="mt-1 truncate text-sm text-muted-foreground">{n.note}</p>
                </GlassCard>
              </motion.div>
            </div>
          );
        })}
      </div>
    </AppShell>
  );
}
