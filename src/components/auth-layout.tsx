import type { ReactNode } from "react";
import { Link, useNavigate } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import { Atmosphere } from "@/components/atmosphere";
import { Logo } from "@/components/logo";
import { Arbi, type ArbiMood } from "@/components/arbi";
import { Button } from "@/components/ui/button";

export function AuthLayout({
  title,
  subtitle,
  children,
  footer,
  mood = "idle",
  showBackToHome = false,
}: {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer?: ReactNode;
  mood?: ArbiMood;
  showBackToHome?: boolean;
}) {
  const navigate = useNavigate();
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center px-5 py-14">
      <Atmosphere />
      <div className="mb-8 flex w-full max-w-md items-center justify-between">
        {showBackToHome ? (
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate({ to: "/" })}
              className="gap-1.5 rounded-2xl border-border/70 bg-background/60 text-xs font-medium backdrop-blur-xl transition-all duration-300 hover:border-primary hover:bg-background/85 hover:text-foreground sm:text-sm"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Back to Home</span>
              <span className="sm:hidden">Home</span>
            </Button>
          </motion.div>
        ) : (
          <div aria-hidden className="w-[88px]" />
        )}
        <Link to="/">
          <Logo />
        </Link>
        <div aria-hidden className="w-[88px]" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="glass-strong w-full max-w-md rounded-[2rem] p-8 sm:p-10"
      >
        <div className="flex items-start gap-4">
          <Arbi mood={mood} size={58} />
          <div className="min-w-0">
            <h1 className="text-2xl">{title}</h1>
            <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{subtitle}</p>
          </div>
        </div>
        <div className="mt-8">{children}</div>
      </motion.div>
      {footer && <div className="mt-6 text-sm text-muted-foreground">{footer}</div>}
    </div>
  );
}

export function Field({
  label,
  ...props
}: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </span>
      <input
        {...props}
        className="h-12 w-full rounded-2xl border border-border/70 bg-background/60 px-4 text-sm outline-none transition-all duration-300 placeholder:text-muted-foreground/70 focus:border-primary focus:ring-4 focus:ring-primary/20"
      />
    </label>
  );
}
