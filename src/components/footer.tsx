import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Logo } from "@/components/logo";
import { Sparkles, ArrowUpRight, Heart } from "lucide-react";

type FooterLink = { label: string; to?: string; soon?: boolean };

const PRODUCT: FooterLink[] = [
  { label: "AI Planner" },
  { label: "Smart Roadmap" },
  { label: "Daily Checklists" },
  { label: "Predictive Reports" },
  { label: "Progress Dashboard" },
  { label: "Voice Assistant", soon: true },
];

const RESOURCES: FooterLink[] = [
  { label: "About Arbitiza" },
  { label: "How It Works" },
  { label: "FAQs" },
  { label: "Blog", soon: true },
  { label: "Release Notes", soon: true },
];

const SUPPORT: FooterLink[] = [
  { label: "Contact Us" },
  { label: "Report a Bug" },
  { label: "Feature Requests" },
  { label: "Feedback" },
  { label: "Help Center" },
];

const LEGAL: FooterLink[] = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/terms" },
  { label: "Cookie Policy" },
  { label: "AI Disclaimer" },
];

function FooterSection({
  title,
  links,
  delay,
}: {
  title: string;
  links: FooterLink[];
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        {title}
      </h4>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            {l.to ? (
              <Link
                to={l.to}
                className="group inline-flex w-full items-center gap-1 text-sm text-foreground/85 outline-none transition-colors duration-300 hover:text-primary focus-visible:text-primary"
              >
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  {l.label}
                </span>
                {l.soon && (
                  <span className="ml-2 rounded-full border border-lavender/60 bg-lavender/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-secondary-foreground/85">
                    Soon
                  </span>
                )}
              </Link>
            ) : (
              <span className="group inline-flex w-full items-center gap-1 cursor-not-allowed text-sm text-foreground/55 transition-colors duration-300">
                <span>{l.label}</span>
                {l.soon && (
                  <span className="ml-2 rounded-full border border-lavender/60 bg-lavender/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-secondary-foreground/85">
                    Soon
                  </span>
                )}
              </span>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Footer() {
  return (
    <footer className="relative px-5 pb-20 pt-24 sm:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className="glass-strong relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] px-7 py-12 sm:px-10 sm:py-14"
      >
        {/* soft gradient halo */}
        <div className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-[110px]" />
        <div
          className="pointer-events-none absolute -right-16 -bottom-24 h-80 w-80 rounded-full bg-secondary/25 blur-[120px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/45 via-secondary/35 to-transparent"
          aria-hidden
        />

        <div className="relative grid gap-12 lg:grid-cols-[1.3fr_0.85fr_0.85fr_0.85fr_0.85fr] md:grid-cols-[1.3fr_1fr_1fr] sm:grid-cols-2">
          {/* 1. Arbitiza */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.02, ease: [0.22, 1, 0.36, 1] }}
            className="sm:col-span-2 md:col-span-1"
          >
            <Logo />
            <p className="mt-4 font-display text-xl font-semibold tracking-tight text-foreground/95">
              Turning Chaos Into <span className="text-gradient">Daily Clarity</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Arbitiza is an AI predictive execution system that turns scattered goals into a calm
              daily path. It plans around your real life, not the other way around.
            </p>
            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/45 px-4 py-2 text-xs font-medium text-muted-foreground backdrop-blur-md">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              A gentler way to finish what matters.
            </div>
          </motion.div>

          <FooterSection title="Product" links={PRODUCT} delay={0.06} />
          <FooterSection title="Resources" links={RESOURCES} delay={0.1} />
          <FooterSection title="Support" links={SUPPORT} delay={0.14} />
          <FooterSection title="Legal" links={LEGAL} delay={0.18} />
        </div>

        {/* Divider + bottom bar */}
        <div className="relative mt-14">
          <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-border/80 to-transparent" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start justify-between gap-4 pt-6 sm:flex-row sm:items-center"
          >
            <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
              © 2026 Arbitiza. Built with{" "}
              <Heart className="mx-0.5 inline h-3 w-3 align-middle text-rose" />{" "}
              for dreamers, builders and creators.
            </p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-muted-foreground sm:text-sm">
              <Link
                to="/privacy"
                className="transition-colors duration-300 hover:text-primary hover:underline underline-offset-4"
              >
                Privacy
              </Link>
              <Link
                to="/terms"
                className="transition-colors duration-300 hover:text-primary hover:underline underline-offset-4"
              >
                Terms
              </Link>
              <span className="inline-flex items-center gap-1 text-muted-foreground/85">
                <span>Made with care ·</span>
                <span className="font-medium text-foreground/75">v1.0</span>
              </span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  );
}
