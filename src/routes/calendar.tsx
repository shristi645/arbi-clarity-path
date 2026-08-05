import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { CalendarDays, Plus } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { GlassCard, CardLabel } from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/states";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/calendar")({
  head: () => ({
    meta: [
      { title: "Calendar — Arbitiza" },
      {
        name: "description",
        content: "A soft weekly view where Arbitiza protects your focus windows automatically.",
      },
      { property: "og:title", content: "Calendar — Arbitiza" },
      {
        property: "og:description",
        content: "A soft weekly view where Arbitiza protects your focus windows automatically.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CalendarPage,
});

const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const BLOCKS: Record<string, { t: string; time: string; tone: string }[]> = {
  Mon: [{ t: "Deep work", time: "09:00", tone: "bg-primary/45" }],
  Tue: [
    { t: "Deep work", time: "09:00", tone: "bg-primary/45" },
    { t: "Review", time: "16:00", tone: "bg-secondary/45" },
  ],
  Wed: [
    { t: "Deep work", time: "09:00", tone: "bg-primary/45" },
    { t: "Reflection", time: "21:00", tone: "bg-accent/50" },
  ],
  Thu: [{ t: "Team sync", time: "14:00", tone: "bg-secondary/45" }],
  Fri: [{ t: "Milestone review", time: "11:00", tone: "bg-sage/50" }],
  Sat: [],
  Sun: [{ t: "Weekly report", time: "19:00", tone: "bg-accent/50" }],
};

function CalendarPage() {
  return (
    <AppShell>
      <div className="mb-8 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="min-w-0">
          <h1 className="text-4xl sm:text-5xl">This week</h1>
          <p className="mt-2 text-muted-foreground">Arbi already reserved your focus windows.</p>
        </div>
        <Button className="shrink-0">
          <Plus /> Add block
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {DAYS.map((d, i) => (
          <GlassCard key={d} delay={i * 0.05} className="min-h-44">
            <CardLabel icon={<CalendarDays />} title={d} />
            {BLOCKS[d]?.length ? (
              <div className="space-y-2.5">
                {BLOCKS[d]!.map((b) => (
                  <motion.div
                    key={b.t}
                    whileHover={{ y: -2 }}
                    className={cn("rounded-2xl px-4 py-3", b.tone)}
                  >
                    <p className="truncate text-sm font-medium">{b.t}</p>
                    <p className="text-xs text-foreground/70">{b.time}</p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="rounded-2xl bg-background/50 px-4 py-6 text-center text-xs text-muted-foreground">
                Kept clear on purpose
              </p>
            )}
          </GlassCard>
        ))}

        <GlassCard delay={0.4} interactive={false} className="sm:col-span-2 lg:col-span-1">
          <EmptyState
            title="Nothing else planned"
            description="That's a good sign. Arbi will suggest a block if a milestone starts drifting."
          />
        </GlassCard>
      </div>
    </AppShell>
  );
}
