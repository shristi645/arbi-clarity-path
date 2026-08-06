import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, FileCheck, Scale, ShieldCheck, Clock, MessageCircleHeart, Sparkles } from "lucide-react";
import { Atmosphere } from "@/components/atmosphere";
import { Logo } from "@/components/logo";
import { GlassCard, CardLabel } from "@/components/glass-card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service — Arbitiza" },
      {
        name: "description",
        content:
          "Arbitiza Terms of Service. A calm agreement that describes how you and Arbitiza work together.",
      },
      { property: "og:title", content: "Terms of Service — Arbitiza" },
      {
        property: "og:description",
        content:
          "Arbitiza Terms of Service. A calm agreement that describes how you and Arbitiza work together.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Arbitiza" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: TermsPage,
});

const SECTIONS = [
  {
    label: "Your agreement with us",
    icon: FileCheck,
    title: "1. Acceptance of Terms",
    body: "By creating an Arbitiza account and using the Arbitiza service, website, mobile applications, and related products (collectively, the \"Service\"), you are entering into a binding agreement with Arbitiza. These Terms of Service govern your access to and use of the Service. If you do not agree to these Terms, please do not use the Service. You may use the Service only if you are of legal age to form a binding contract and are not a person barred from receiving services under the laws of your applicable jurisdiction.",
  },
  {
    label: "How we work together",
    icon: Scale,
    title: "2. Your Account and Responsibilities",
    body: "You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to provide accurate, current, and complete information when creating your account and to promptly update such information. You may not share your account credentials or allow others to use your account. Arbitiza cannot and will not be liable for any loss or damage arising from your failure to comply with the above requirements.",
  },
  {
    label: "Your data & privacy",
    icon: ShieldCheck,
    title: "3. Privacy and Your Content",
    body: "Your goals, plans, daily entries, and other content you upload or share with the Service remain yours. By using the Service, you grant Arbitiza a limited, non-exclusive license to process, store, and display your content solely for the purpose of operating, improving, and personalizing the Service for you. For a complete explanation of how we collect, use, and protect your information, please review our Privacy Policy, which is incorporated into these Terms by reference.",
  },
  {
    label: "Fair & calm usage",
    icon: Clock,
    title: "4. Acceptable Use",
    body: "Arbitiza is built to help you do your best work. You agree not to misuse the Service, including but not limited to: attempting to access non-public areas, probing vulnerability, reverse-engineering, copying, distributing, or reselling any part of the Service without explicit written permission; interfering with the proper functioning of the Service; or using the Service for any unlawful, harmful, or infringing purpose. We reserve the right to suspend or terminate accounts that violate this Agreement.",
  },
  {
    label: "Subscriptions & billing",
    icon: Sparkles,
    title: "5. Subscriptions, Payments, and Cancellation",
    body: "Some features of the Service may be offered on a subscription basis. By selecting a subscription plan, you agree to pay the applicable fees. All fees are non-refundable unless required by law. Subscriptions automatically renew unless cancelled at least 24 hours before the end of the current billing period. You may cancel or manage your subscription at any time from your account settings. Taxes are calculated based on your billing address and applicable local laws.",
  },
  {
    label: "Arbi's role",
    icon: MessageCircleHeart,
    title: "6. AI Companion Disclaimers",
    body: "Arbi, the AI companion within Arbitiza, provides predictions, suggestions, and emotional support based on patterns in your data. Arbi is a planning and reflective tool, not a substitute for professional medical, legal, financial, or psychological advice. The predictions and plans generated are estimates only and may not always reflect reality. Always use your own judgment when acting on any suggestions provided by the Service.",
  },
];

function TermsPage() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen px-5 py-8 sm:px-8">
      <Atmosphere />

      <div className="mx-auto w-full max-w-4xl">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex items-center justify-between"
        >
          <Button
          variant="outline"
          size="sm"
          onClick={() => navigate({ to: "/signup", replace: true })}
          className="gap-2 rounded-2xl border-border/70 bg-background/60 backdrop-blur-xl transition-all duration-300 hover:border-primary hover:bg-background/80 hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </Button>
          <Logo />
          <div className="w-[84px]" />
        </motion.div>

        {/* hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground backdrop-blur-xl">
            <FileCheck className="h-3.5 w-3.5 text-primary" />
            Legal
          </div>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Terms of <span className="text-gradient">Service</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            A calm agreement between you and Arbitiza. Last updated{" "}
            <span className="font-medium text-foreground/80">August 6, 2026</span>.
          </p>
        </motion.div>

        {/* intro card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlassCard className="mb-8" delay={0.1} interactive={false}>
            <CardLabel title="Summary" icon={<Sparkles className="h-4 w-4 text-primary" />} />
            <p className="text-balance text-sm leading-relaxed text-muted-foreground sm:text-base">
              Arbitiza is built on trust. These Terms exist to make clear how the Service works,
              what you can expect from us, and what we ask of you in return. Everything here
              is written to be fair — legalese-free where it must be, human everywhere it can be.
              <span className="mt-3 block">
                If anything is unclear or you want to talk about any of this, Arbi is always one message away.
              </span>
            </p>
          </GlassCard>
        </motion.div>

        {/* sections */}
        <div className="space-y-5">
          {SECTIONS.map((s, i) => (
          <GlassCard key={s.title} delay={0.15 + i * 0.06} interactive={false}>
            <CardLabel title={s.label} icon={<s.icon className="h-4 w-4 text-primary" />} />
            <h2 className="mb-3 font-display text-xl font-semibold tracking-tight text-foreground">
              {s.title}
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-[15px]">
              {s.body}
            </p>
          </GlassCard>
          ))}
        </div>

        {/* contact footer */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 mb-12"
        >
          <GlassCard interactive={false} className="relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/40 via-secondary/30 to-transparent" />
            <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <CardLabel title="Questions?" icon={<MessageCircleHeart className="h-4 w-4 text-primary" />} />
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  Reach out any time
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Arbi and the team read every message.
                </p>
              </div>
              <Button
                onClick={() => navigate({ to: "/signup", replace: true })}
                className="gap-2 rounded-2xl shadow-glow"
              >
                Return to Sign Up
                <ArrowLeft className="h-4 w-4 rotate-180" />
              </Button>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
