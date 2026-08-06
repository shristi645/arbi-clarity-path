import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft, ShieldCheck, Lock, Eye, Database, Heart, Sparkles, UserCircle } from "lucide-react";
import { Atmosphere } from "@/components/atmosphere";
import { Logo } from "@/components/logo";
import { GlassCard, CardLabel } from "@/components/glass-card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Arbitiza" },
      {
        name: "description",
        content:
          "Arbitiza Privacy Policy. We respect your data. Learn what we collect, why we collect it, and how you control it.",
      },
      { property: "og:title", content: "Privacy Policy — Arbitiza" },
      {
        property: "og:description",
        content:
          "Arbitiza Privacy Policy. We respect your data. Learn what we collect, why we collect it, and how you control it.",
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Arbitiza" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPage,
});

const SECTIONS = [
  {
    label: "Our promise",
    icon: Heart,
    title: "1. Commitment to Your Privacy",
    body: "Arbitiza exists to help you achieve what matters. Your goals, your daily path, and the quiet details of your life are yours. We collect only what we need to make the Service work for you, never to sell your data, never to profile you for advertisers, and never to surprise you with uses you wouldn't expect. If a choice is about your privacy, we will ask you before we change how things work.",
  },
  {
    label: "What we collect",
    icon: Database,
    title: "2. Information We Collect",
    body: "We collect information in three categories: (a) Information you give us — your name, email address, password, and any goals, tasks, notes, or preferences you write in the Service. (b) Information automatically collected — standard server logs (IP address, browser type), device identifiers, and usage data (pages visited, features used, timestamps). (c) Information from third parties — if you sign up via a social or identity provider, we receive only the profile information you explicitly grant. We do not purchase lists or user data from brokers.",
  },
  {
    label: "Why we use it",
    icon: Sparkles,
    title: "3. How We Use Information",
    body: "We use your information only to provide, personalize, protect, and improve Arbitiza. Specifically: to create and maintain your account, run predictions and plan your daily path, power Arbi's conversational responses (processed only for that purpose), send you essential service communications (e.g., security alerts, billing receipts), debug issues and improve model quality on anonymized and aggregated data, and comply with our legal obligations. We do not use your personal content for advertising or share it with advertisers.",
  },
  {
    label: "Sharing & trust",
    icon: Eye,
    title: "4. Sharing and Disclosure",
    body: "We share information only in the following limited cases: with your explicit consent, with trusted sub-processors (cloud infrastructure, payment processing, email delivery) bound by strict data protection agreements, to comply with valid legal requirements (we will notify you where permitted), in connection with a merger or similar transaction (with written notice and a reasonable opportunity to export your data before transfer), or when we reasonably believe disclosure is necessary to prevent harm. No Arbitiza employee reads your personal content except at your request, for security purposes, or under the limited conditions above.",
  },
  {
    label: "Your control",
    icon: UserCircle,
    title: "5. Your Rights and Choices",
    body: "You have the right to access, correct, export, and delete the personal information we hold about you. You can manage most of these directly from your Account Settings at any time — including downloading a complete copy of your data or initiating permanent account deletion. You may opt out of non-essential emails using the unsubscribe link in any message. If you live in a jurisdiction with applicable data protection law (GDPR, CCPA/CPRA, etc.), those rights apply to you. Questions, requests, or appeals may be directed to our support.",
  },
  {
    label: "Security",
    icon: Lock,
    title: "6. Security and Retention",
    body: "We use industry-standard security measures to protect your information: TLS 1.3+ encryption in transit, AES-256 encryption at rest for stored content, regular security audits, and strict internal access controls. No system is perfectly secure, but we design Arbitiza to keep your data safe and we will promptly notify you and the relevant authorities of any material breach as required by law. We retain your information only as long as your account is active or as needed to provide the Service; deleted content is permanently removed from active systems within a reasonable window, except where longer retention is required by law.",
  },
  {
    label: "Children & minors",
    icon: ShieldCheck,
    title: "7. Children's Privacy",
    body: "Arbitiza is not directed to children under the age of 13 (or the applicable age of digital consent in your jurisdiction). We do not knowingly collect personal information from children. If we become aware that we have collected personal information from a child, we will take reasonable steps to delete it. If you believe a child has provided us with personal information, please contact us.",
  },
];

function PrivacyPage() {
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
            <ShieldCheck className="h-3.5 w-3.5 text-primary" />
            Trust & safety
          </div>
          <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
            Privacy <span className="text-gradient">Policy</span>
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Your goals, your path, your data. Written in plain language so you always know where you stand.
            Last updated <span className="font-medium text-foreground/80">August 6, 2026</span>.
          </p>
        </motion.div>

        {/* intro card */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <GlassCard className="mb-8" delay={0.1} interactive={false}>
            <CardLabel title="In one sentence" icon={<Heart className="h-4 w-4 text-primary" />} />
            <p className="text-balance text-sm leading-relaxed text-muted-foreground sm:text-base">
              We store only what the service needs to function. We never sell your data. You can export
              or delete everything from settings at any time. That's the promise, and these are the details.
              <span className="mt-3 block">
                If you want Arbi to walk through any of this, just open a conversation in-app and say so.
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
                <CardLabel title="Data requests?" icon={<UserCircle className="h-4 w-4 text-primary" />} />
                <h3 className="font-display text-lg font-semibold tracking-tight">
                  Ask, export, or delete
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  Most actions are one click in Settings. We reply to support requests within 72 hours.
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
