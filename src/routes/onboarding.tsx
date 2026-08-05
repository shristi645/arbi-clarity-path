import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Atmosphere } from "@/components/atmosphere";
import { Logo } from "@/components/logo";
import { Arbi } from "@/components/arbi";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { title: "Set up your path — Arbitiza" },
      {
        name: "description",
        content: "A short, conversational setup so Arbi can predict a realistic path for you.",
      },
      { property: "og:title", content: "Set up your path — Arbitiza" },
      {
        property: "og:description",
        content: "A short, conversational setup so Arbi can predict a realistic path for you.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: OnboardingPage,
});

const STEPS = [
  {
    q: "What are you trying to become?",
    hint: "Pick the one that pulls hardest right now.",
    options: ["Ship my product", "Get seriously fit", "Learn a hard skill", "Rebuild my routine"],
  },
  {
    q: "How much time can you honestly give?",
    hint: "Be generous with yourself. Arbi plans around real life.",
    options: ["15 min a day", "30 min a day", "1 hour a day", "It varies a lot"],
  },
  {
    q: "When does your focus actually show up?",
    hint: "We'll protect that window before anything else.",
    options: ["Early morning", "Late morning", "Afternoon", "Night"],
  },
  {
    q: "How should Arbi speak to you?",
    hint: "You can change this any time.",
    options: ["Warm and gentle", "Short and direct", "Curious and reflective", "Quietly cheering"],
  },
];

function OnboardingPage() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const current = STEPS[step];
  const progress = ((step + (answers[step] ? 1 : 0)) / STEPS.length) * 100;

  const choose = (opt: string) => {
    setAnswers((prev) => {
      const next = [...prev];
      next[step] = opt;
      return next;
    });
  };

  const next = () => {
    if (step < STEPS.length - 1) setStep(step + 1);
    else navigate({ to: "/dashboard" });
  };

  return (
    <div className="relative flex min-h-screen flex-col px-5 py-8 sm:px-8">
      <Atmosphere />
      <Logo className="self-start" />

      <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col justify-center py-10">
        {/* progress */}
        <div className="mb-10">
          <div className="mb-3 flex items-center justify-between text-xs text-muted-foreground">
            <span>
              Step {step + 1} of {STEPS.length}
            </span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-1.5 overflow-hidden rounded-full bg-foreground/10">
            <motion.div
              className="h-full rounded-full bg-brand-gradient"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -24 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="glass-strong rounded-[2rem] p-8 sm:p-12"
          >
            <div className="flex items-start gap-4">
              <Arbi mood={answers[step] ? "happy" : "thinking"} size={64} />
              <div className="min-w-0">
                <h1 className="text-balance text-3xl sm:text-4xl">{current.q}</h1>
                <p className="mt-2 text-sm text-muted-foreground">{current.hint}</p>
              </div>
            </div>

            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {current.options.map((opt) => {
                const active = answers[step] === opt;
                return (
                  <motion.button
                    key={opt}
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => choose(opt)}
                    className={cn(
                      "flex cursor-pointer items-center justify-between gap-3 rounded-2xl px-5 py-4 text-left text-sm font-medium transition-colors duration-300",
                      active
                        ? "bg-brand-gradient text-primary-foreground shadow-glow"
                        : "bg-background/60 hover:bg-background/80",
                    )}
                  >
                    <span className="min-w-0">{opt}</span>
                    {active && <Check className="size-4 shrink-0" />}
                  </motion.button>
                );
              })}
            </div>

            <div className="mt-10 flex items-center justify-between gap-3">
              <Button
                variant="ghost"
                onClick={() => setStep((s) => Math.max(0, s - 1))}
                disabled={step === 0}
              >
                <ArrowLeft /> Back
              </Button>
              <Button size="lg" onClick={next} disabled={!answers[step]}>
                {step === STEPS.length - 1 ? "Build my path" : "Continue"} <ArrowRight />
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
