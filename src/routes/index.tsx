import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowRight,
  Sparkles,
  Compass,
  Brain,
  Wand2,
  HeartHandshake,
  LineChart,
  ShieldCheck,
  Quote,
} from "lucide-react";
import { Atmosphere } from "@/components/atmosphere";
import { Logo } from "@/components/logo";
import { Arbi } from "@/components/arbi";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/glass-card";
import { ArbiCompanion } from "@/components/arbi-companion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arbitiza — Turning Chaos into Daily Clarity" },
      {
        name: "description",
        content:
          "Arbitiza is an AI predictive execution system that turns scattered goals into a calm daily path you actually finish.",
      },
      { property: "og:title", content: "Arbitiza — Turning Chaos into Daily Clarity" },
      {
        property: "og:description",
        content:
          "An AI predictive execution system that helps you execute your goals, not just plan them.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

const FEATURES = [
  {
    icon: Brain,
    title: "Predictive execution",
    body: "Arbitiza forecasts where your week will break and quietly reshapes it before it does.",
  },
  {
    icon: Compass,
    title: "One clear path",
    body: "A single roadmap turns vague ambition into milestones you can actually stand on.",
  },
  {
    icon: Wand2,
    title: "Daily mission",
    body: "Every morning you get three things — not thirty. Chosen for momentum, not guilt.",
  },
  {
    icon: HeartHandshake,
    title: "Arbi, your companion",
    body: "A gentle AI spirit that notices your patterns and never shames a missed day.",
  },
  {
    icon: LineChart,
    title: "Momentum analytics",
    body: "Soft, honest charts that show progress as a curve rather than a scoreboard.",
  },
  {
    icon: ShieldCheck,
    title: "Calm by design",
    body: "No streak anxiety, no red badges. Pressure is replaced with clarity.",
  },
];

const STEPS = [
  { n: "01", title: "Tell Arbi the goal", body: "One conversation. No forms, no project setup." },
  { n: "02", title: "Get a predicted path", body: "Milestones, timing and realistic daily load." },
  { n: "03", title: "Execute, gently", body: "Arbitiza re-plans around your real life every day." },
];

const TESTIMONIALS = [
  {
    quote: "It's the first planner that felt like it was on my side rather than measuring me.",
    name: "Amara O.",
    role: "Design lead",
  },
  {
    quote: "I stopped rebuilding my system every Sunday. Arbitiza just keeps the path alive.",
    name: "Ravi N.",
    role: "Founder",
  },
  {
    quote: "The predictions are eerie. It moved my deadline before I knew I'd slip.",
    name: "Lena K.",
    role: "PhD researcher",
  },
];

function Landing() {
  return (
    <div className="relative min-h-screen">
      <Atmosphere />

      <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6">
        <div className="glass mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-full px-5 py-3">
          <Link to="/" className="min-w-0">
            <Logo />
          </Link>
          <div className="flex shrink-0 items-center gap-2">
            <Button asChild variant="ghost" size="sm" className="hidden sm:inline-flex">
              <Link to="/login">Sign in</Link>
            </Button>
            <Button asChild size="sm">
              <Link to="/signup">Start free</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="px-5 pb-16 pt-16 sm:px-8 sm:pt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium tracking-wide text-muted-foreground"
            >
              <Sparkles className="size-3.5" /> AI Predictive Execution System
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 text-balance text-5xl leading-[1.02] sm:text-6xl lg:text-7xl"
            >
              Turning chaos into <span className="text-gradient">daily clarity</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground"
            >
              Arbitiza doesn't help you plan more. It predicts your week, protects your energy and
              walks you through the next right step — every single day.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Button asChild variant="hero" size="xl">
                <Link to="/onboarding">
                  Begin your path <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="glass" size="xl">
                <Link to="/dashboard">See a live day</Link>
              </Button>
            </motion.div>
          </div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="glass-strong relative rounded-[2.5rem] p-7">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    Today&apos;s mission
                  </p>
                  <p className="mt-1 font-display text-2xl">Ship the onboarding flow</p>
                </div>
                <Arbi mood="happy" size={64} />
              </div>

              <div className="mt-6 space-y-3">
                {[
                  { t: "Draft the welcome sequence", d: "25 min", done: true },
                  { t: "Review yesterday's reflection", d: "8 min", done: true },
                  { t: "Deep work: pricing page", d: "50 min", done: false },
                ].map((task, i) => (
                  <motion.div
                    key={task.t}
                    initial={{ opacity: 0, x: 14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.12 }}
                    className="flex items-center gap-3 rounded-2xl bg-background/55 px-4 py-3"
                  >
                    <span
                      className={
                        task.done
                          ? "size-4 shrink-0 rounded-full bg-sage"
                          : "size-4 shrink-0 rounded-full border-2 border-primary"
                      }
                    />
                    <span className="min-w-0 flex-1 truncate text-sm">{task.t}</span>
                    <span className="shrink-0 text-xs text-muted-foreground">{task.d}</span>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-brand-gradient/0 p-0">
                <div className="glass rounded-2xl p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Prediction
                  </p>
                  <p className="mt-1.5 text-sm leading-relaxed">
                    92% chance you finish this milestone by Friday if you protect tomorrow morning.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="max-w-xl text-4xl sm:text-5xl">
            Built for execution, <span className="text-gradient">not admin</span>
          </h2>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map((f, i) => (
              <GlassCard key={f.title} delay={i * 0.06} className="p-7">
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-brand-gradient/70 text-primary-foreground">
                  <f.icon className="size-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.body}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl">How it works</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {STEPS.map((s, i) => (
              <GlassCard key={s.n} delay={i * 0.1} className="p-8">
                <span className="font-display text-5xl text-gradient">{s.n}</span>
                <h3 className="mt-5 text-xl">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-5 py-20 sm:px-8">
        <GlassCard className="mx-auto max-w-6xl p-10 sm:p-14" interactive={false}>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-4xl sm:text-5xl">
                The quiet difference after <span className="text-gradient">two weeks</span>
              </h2>
              <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
                People don&apos;t fail at goals because of ambition. They fail because the plan
                never survived contact with a real Tuesday.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {[
                { k: "3.4×", v: "more milestones completed" },
                { k: "−62%", v: "planning time each week" },
                { k: "12 min", v: "average daily commitment" },
                { k: "0", v: "guilt-based notifications" },
              ].map((b) => (
                <div key={b.k} className="rounded-2xl bg-background/55 p-5">
                  <p className="font-display text-3xl">{b.k}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{b.v}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </section>

      {/* Testimonials */}
      <section className="px-5 py-20 sm:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-4xl sm:text-5xl">Early voices</h2>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <GlassCard key={t.name} delay={i * 0.08} className="p-8">
                <Quote className="size-5 text-primary" />
                <p className="mt-4 leading-relaxed">{t.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="size-9 shrink-0 rounded-full bg-brand-gradient" />
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{t.name}</p>
                    <p className="truncate text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-5 py-20 sm:px-8">
        <GlassCard
          interactive={false}
          className="mx-auto max-w-4xl px-8 py-16 text-center sm:px-14"
        >
          <div className="flex justify-center">
            <Arbi mood="happy" size={92} />
          </div>
          <h2 className="mt-6 text-4xl sm:text-5xl">Your next 90 days can feel calm</h2>
          <p className="mx-auto mt-4 max-w-lg leading-relaxed text-muted-foreground">
            Start with one goal. Arbi will handle the rest of the thinking.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="xl">
              <Link to="/signup">
                Create your account <ArrowRight />
              </Link>
            </Button>
          </div>
        </GlassCard>
      </section>

      <footer className="px-5 pb-28 sm:px-8">
        <div className="mx-auto grid max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-4 border-t border-border/60 pt-8">
          <div className="min-w-0">
            <Logo />
            <p className="mt-2 text-sm text-muted-foreground">Turning chaos into daily clarity.</p>
          </div>
          <p className="shrink-0 text-xs text-muted-foreground">© 2026 Arbitiza</p>
        </div>
      </footer>

      <ArbiCompanion />
    </div>
  );
}
