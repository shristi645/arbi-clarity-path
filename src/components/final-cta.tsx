import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, HeartHandshake } from "lucide-react";
import { Arbi } from "@/components/arbi";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="relative px-5 pb-8 pt-20 sm:px-8 sm:pt-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="glass-strong relative mx-auto max-w-5xl overflow-hidden rounded-[2.25rem] px-8 py-16 text-center sm:px-12 sm:py-20"
      >
        {/* atmospheric gradient blobs */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-20 -top-24 h-72 w-72 rounded-full bg-primary/28 blur-[110px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 top-1/3 h-72 w-72 rounded-full bg-secondary/30 blur-[120px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-[-8rem] left-1/3 h-72 w-72 rounded-full bg-accent/20 blur-[130px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/50 via-secondary/40 to-transparent"
        />

        <div className="relative">
          {/* eyebrow badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="mb-7 flex justify-center"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/50 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground backdrop-blur-xl">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              Begin today
            </span>
          </motion.div>

          {/* Arbi */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 flex justify-center"
          >
            <Arbi mood="happy" size={96} />
          </motion.div>

          {/* headline */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-3xl text-balance font-display text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl"
          >
            Ready to turn chaos into{" "}
            <span className="text-gradient">clarity?</span>
          </motion.h2>

          {/* subheading */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.26 }}
            className="mx-auto mt-5 max-w-xl text-balance text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            One decision today can change your next <span className="font-medium text-foreground/85">365 days</span>.
          </motion.p>

          {/* primary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <Button asChild variant="hero" size="xl" className="shadow-glow">
              <Link to="/signup">
                Begin Your Journey <ArrowRight className="h-4.5 w-4.5" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/login">
                <HeartHandshake className="h-4.5 w-4.5" />
                I already have a path
              </Link>
            </Button>
          </motion.div>

          {/* trust micro-copy */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mt-6 text-xs text-muted-foreground sm:text-sm"
          >
            Free to start · No credit card · Cancel anytime · Your path, always yours
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
