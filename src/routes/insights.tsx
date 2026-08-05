import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Sparkles, TrendingUp, Clock, Gauge } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { GlassCard, CardLabel } from "@/components/glass-card";
import { ArbiLoader } from "@/components/states";
import { useEffect, useState } from "react";

export const Route = createFileRoute("/insights")({
  head: () => ({
    meta: [
      { title: "Insights — Arbitiza" },
      {
        name: "description",
        content: "Soft, honest analytics on your momentum, focus windows and completion patterns.",
      },
      { property: "og:title", content: "Insights — Arbitiza" },
      {
        property: "og:description",
        content: "Soft, honest analytics on your momentum, focus windows and completion patterns.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: InsightsPage,
});

const CURVE = [18, 30, 26, 44, 52, 48, 66, 74, 70, 86, 92];

function InsightsPage() {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setReady(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const points = CURVE.map((v, i) => `${(i / (CURVE.length - 1)) * 100},${100 - v}`).join(" ");

  return (
    <AppShell>
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl">
          Your <span className="text-gradient">momentum</span>
        </h1>
        <p className="mt-2 text-muted-foreground">Eleven weeks of quiet, compounding progress.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-4">
        <GlassCard className="md:col-span-4" interactive={false}>
          <CardLabel icon={<TrendingUp />} title="Completion curve" />
          {ready ? (
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="h-56 w-full">
              <defs>
                <linearGradient id="curve" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="oklch(0.795 0.062 248)" />
                  <stop offset="60%" stopColor="oklch(0.805 0.058 305)" />
                  <stop offset="100%" stopColor="oklch(0.878 0.056 52)" />
                </linearGradient>
              </defs>
              <motion.polyline
                points={points}
                fill="none"
                stroke="url(#curve)"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
              />
            </svg>
          ) : (
            <ArbiLoader label="Arbi is reading your patterns…" />
          )}
        </GlassCard>

        {[
          { icon: <Gauge />, label: "Follow-through", v: "78%", n: "up 12 pts this month" },
          { icon: <Clock />, label: "Peak window", v: "9–11am", n: "your most reliable focus" },
          { icon: <Sparkles />, label: "Predicted finish", v: "26 Sep", n: "two days ahead" },
          { icon: <TrendingUp />, label: "Avg daily load", v: "42 min", n: "sustainable pace" },
        ].map((s, i) => (
          <GlassCard key={s.label} delay={i * 0.06} className="md:col-span-1">
            <CardLabel icon={s.icon} title={s.label} />
            <p className="font-display text-3xl">{s.v}</p>
            <p className="mt-1 text-sm text-muted-foreground">{s.n}</p>
          </GlassCard>
        ))}
      </div>
    </AppShell>
  );
}
