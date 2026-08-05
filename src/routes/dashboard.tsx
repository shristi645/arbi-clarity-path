import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Target,
  Sparkles,
  Flame,
  Coins,
  CalendarDays,
  TrendingUp,
  NotebookPen,
  Trophy,
  ListTodo,
  FileText,
  Route as RouteIcon,
  ArrowRight,
  Check,
} from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { GlassCard, CardLabel } from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { EmptyState } from "@/components/states";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Today — Arbitiza" },
      {
        name: "description",
        content: "Your daily mission, predictions, streak and momentum in one calm bento view.",
      },
      { property: "og:title", content: "Today — Arbitiza" },
      {
        property: "og:description",
        content: "Your daily mission, predictions, streak and momentum in one calm bento view.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Dashboard,
});

const MISSION = [
  { t: "Write the onboarding welcome copy", d: "25 min", done: true },
  { t: "Review yesterday's reflection", d: "8 min", done: true },
  { t: "Deep work — pricing page layout", d: "50 min", done: false },
];

const WEEK = [42, 58, 35, 76, 64, 88, 71];
const DAYS = ["M", "T", "W", "T", "F", "S", "S"];

function Dashboard() {
  const completed = MISSION.filter((m) => m.done).length;

  return (
    <AppShell>
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-8"
      >
        <p className="text-sm text-muted-foreground">Wednesday, 5 August</p>
        <h1 className="mt-1 text-4xl sm:text-5xl">
          Good evening, <span className="text-gradient">Maya</span>
        </h1>
      </motion.div>

      <div className="grid auto-rows-[minmax(0,auto)] grid-cols-1 gap-5 md:grid-cols-4">
        {/* Today's mission */}
        <GlassCard delay={0} className="md:col-span-2 md:row-span-2">
          <CardLabel icon={<Target />} title="Today's mission" />
          <p className="font-display text-2xl">Ship the onboarding flow</p>
          <p className="mt-1 text-sm text-muted-foreground">
            {completed} of {MISSION.length} complete — the last one matters most.
          </p>
          <div className="mt-6 space-y-3">
            {MISSION.map((m, i) => (
              <motion.div
                key={m.t}
                initial={{ opacity: 0, x: 12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 + i * 0.08 }}
                className="flex items-center gap-3 rounded-2xl bg-background/55 px-4 py-3.5 transition-colors hover:bg-background/80"
              >
                <span
                  className={cn(
                    "grid size-5 shrink-0 place-items-center rounded-full",
                    m.done ? "bg-sage text-primary-foreground" : "border-2 border-primary",
                  )}
                >
                  {m.done && <Check className="size-3" />}
                </span>
                <span
                  className={cn(
                    "min-w-0 flex-1 truncate text-sm",
                    m.done && "text-muted-foreground line-through",
                  )}
                >
                  {m.t}
                </span>
                <span className="shrink-0 text-xs text-muted-foreground">{m.d}</span>
              </motion.div>
            ))}
          </div>
          <Button className="mt-6 w-full" size="lg">
            Start deep work <ArrowRight />
          </Button>
        </GlassCard>

        {/* Prediction */}
        <GlassCard delay={0.05} className="md:col-span-2">
          <CardLabel icon={<Sparkles />} title="Prediction" />
          <p className="text-lg leading-relaxed">
            <span className="text-gradient font-display text-3xl">92%</span> chance you finish this
            milestone by Friday — if tomorrow morning stays protected.
          </p>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-foreground/10">
            <motion.div
              className="h-full rounded-full bg-brand-gradient"
              initial={{ width: 0 }}
              animate={{ width: "92%" }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </GlassCard>

        {/* Streak */}
        <GlassCard delay={0.1}>
          <CardLabel icon={<Flame />} title="Streak" />
          <p className="font-display text-4xl">17</p>
          <p className="mt-1 text-sm text-muted-foreground">days of gentle consistency</p>
        </GlassCard>

        {/* Coins */}
        <GlassCard delay={0.15}>
          <CardLabel icon={<Coins />} title="Clarity coins" />
          <p className="font-display text-4xl">1,240</p>
          <p className="mt-1 text-sm text-muted-foreground">+80 earned today</p>
        </GlassCard>

        {/* AI insight */}
        <GlassCard delay={0.2} className="md:col-span-2">
          <CardLabel icon={<Sparkles />} title="Arbi's insight" />
          <p className="leading-relaxed">
            Your best work lands between 9 and 11am. Three of your last four slips happened when a
            meeting crossed that window — I moved Thursday&apos;s sync to 14:00.
          </p>
        </GlassCard>

        {/* Weekly progress */}
        <GlassCard delay={0.25} className="md:col-span-2">
          <CardLabel icon={<TrendingUp />} title="Weekly momentum" />
          <div className="flex h-32 items-end gap-3">
            {WEEK.map((v, i) => (
              <div key={i} className="flex h-full min-w-0 flex-1 flex-col items-center justify-end gap-2">
                <motion.div
                  className="w-full rounded-t-xl bg-brand-gradient"
                  initial={{ height: 0 }}
                  animate={{ height: `${v}%` }}
                  transition={{ delay: 0.3 + i * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                />
                <span className="text-[10px] text-muted-foreground">{DAYS[i]}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Roadmap teaser */}
        <GlassCard delay={0.3} className="md:col-span-2">
          <CardLabel icon={<RouteIcon />} title="Roadmap" />
          <p className="font-display text-xl">Milestone 4 of 9</p>
          <p className="mt-1 text-sm text-muted-foreground">Public beta — 3 steps remaining</p>
          <div className="mt-5 flex items-center gap-2">
            {Array.from({ length: 9 }).map((_, i) => (
              <span
                key={i}
                className={cn(
                  "h-2 flex-1 rounded-full",
                  i < 3 ? "bg-sage" : i === 3 ? "bg-brand-gradient animate-pulse-ring" : "bg-foreground/10",
                )}
              />
            ))}
          </div>
          <Button asChild variant="glass" className="mt-6 w-full">
            <Link to="/roadmap">Open the path</Link>
          </Button>
        </GlassCard>

        {/* Calendar */}
        <GlassCard delay={0.35} className="md:col-span-2">
          <CardLabel icon={<CalendarDays />} title="Next up" />
          <div className="space-y-3">
            {[
              { t: "Deep work block", w: "19:30 — 20:20", c: "bg-primary" },
              { t: "Reflection with Arbi", w: "21:00 — 21:10", c: "bg-secondary" },
              { t: "Wind down", w: "22:00", c: "bg-accent" },
            ].map((e) => (
              <div key={e.t} className="flex items-center gap-3 rounded-2xl bg-background/55 px-4 py-3">
                <span className={cn("h-9 w-1.5 shrink-0 rounded-full", e.c)} />
                <span className="min-w-0 flex-1 truncate text-sm">{e.t}</span>
                <span className="shrink-0 text-xs text-muted-foreground">{e.w}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Upcoming tasks */}
        <GlassCard delay={0.4} className="md:col-span-2">
          <CardLabel icon={<ListTodo />} title="Upcoming" />
          <div className="space-y-3">
            {["Pricing copy pass", "Invite 5 beta testers", "Record 60s demo"].map((t) => (
              <div key={t} className="flex items-center gap-3 rounded-2xl bg-background/55 px-4 py-3">
                <span className="size-4 shrink-0 rounded-full border-2 border-muted-foreground/40" />
                <span className="min-w-0 flex-1 truncate text-sm">{t}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Reflection */}
        <GlassCard delay={0.45} className="md:col-span-2">
          <CardLabel icon={<NotebookPen />} title="Tonight's reflection" />
          <p className="leading-relaxed text-muted-foreground">
            &ldquo;What made today lighter than yesterday?&rdquo;
          </p>
          <Button variant="soft" className="mt-5 w-full">
            Answer in 60 seconds
          </Button>
        </GlassCard>

        {/* Achievements */}
        <GlassCard delay={0.5} className="md:col-span-2">
          <CardLabel icon={<Trophy />} title="Achievements" />
          <div className="flex flex-wrap gap-3">
            {["First milestone", "7-day calm", "Early riser", "Deep worker"].map((a) => (
              <span
                key={a}
                className="rounded-full bg-background/60 px-4 py-2 text-xs font-medium"
              >
                {a}
              </span>
            ))}
          </div>
        </GlassCard>

        {/* Recent reports — empty state */}
        <GlassCard delay={0.55} className="md:col-span-2" interactive={false}>
          <CardLabel icon={<FileText />} title="Recent reports" />
          <EmptyState
            title="No reports yet"
            description="Your first weekly report arrives Sunday evening, once Arbi has enough of your week to be useful."
            action={<Button variant="glass">Preview a sample</Button>}
          />
        </GlassCard>
      </div>
    </AppShell>
  );
}
