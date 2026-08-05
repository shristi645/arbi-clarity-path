import type { ReactNode } from "react";
import { useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import {
  LayoutGrid,
  Route as RouteIcon,
  CalendarDays,
  BarChart3,
  Settings,
  Menu,
  X,
} from "lucide-react";
import { Logo } from "@/components/logo";
import { Atmosphere } from "@/components/atmosphere";
import { ArbiCompanion } from "@/components/arbi-companion";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/dashboard", label: "Today", icon: LayoutGrid },
  { to: "/roadmap", label: "Roadmap", icon: RouteIcon },
  { to: "/calendar", label: "Calendar", icon: CalendarDays },
  { to: "/insights", label: "Insights", icon: BarChart3 },
  { to: "/settings", label: "Settings", icon: Settings },
] as const;

function NavList({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="flex flex-col gap-1.5">
      {NAV.map(({ to, label, icon: Icon }) => {
        const active = pathname === to;
        return (
          <Link
            key={to}
            to={to}
            onClick={onNavigate}
            className={cn(
              "group relative flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300",
              active ? "text-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {active && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 rounded-2xl bg-brand-gradient opacity-45"
                transition={{ type: "spring", stiffness: 320, damping: 30 }}
              />
            )}
            <Icon className="relative size-4.5 shrink-0" />
            <span className="relative truncate">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}

export function AppShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative min-h-screen">
      <Atmosphere />

      {/* Desktop sidebar */}
      <motion.aside
        initial={{ x: -24, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="glass fixed inset-y-4 left-4 z-40 hidden w-64 flex-col rounded-3xl p-5 lg:flex"
      >
        <Link to="/" className="px-2">
          <Logo />
        </Link>
        <div className="mt-8 flex-1">
          <NavList />
        </div>
        <div className="rounded-2xl bg-background/50 p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            Momentum
          </p>
          <p className="mt-1 font-display text-2xl font-semibold">78%</p>
          <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-foreground/10">
            <motion.div
              className="h-full rounded-full bg-brand-gradient"
              initial={{ width: 0 }}
              animate={{ width: "78%" }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
        </div>
      </motion.aside>

      {/* Mobile top bar */}
      <header className="glass sticky top-0 z-40 grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-none border-x-0 border-t-0 px-5 py-3 lg:hidden">
        <Link to="/" className="min-w-0">
          <Logo />
        </Link>
        <button
          onClick={() => setOpen(true)}
          aria-label="Open menu"
          className="shrink-0 cursor-pointer rounded-full p-2 transition-colors hover:bg-foreground/5"
        >
          <Menu className="size-5" />
        </button>
      </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-foreground/20 backdrop-blur-sm lg:hidden"
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
              className="glass-strong fixed inset-y-0 right-0 z-50 w-72 p-6 lg:hidden"
            >
              <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
                <Logo />
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close menu"
                  className="shrink-0 cursor-pointer rounded-full p-2 hover:bg-foreground/5"
                >
                  <X className="size-5" />
                </button>
              </div>
              <div className="mt-8">
                <NavList onNavigate={() => setOpen(false)} />
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <main className="px-5 pb-24 pt-6 sm:px-8 lg:ml-72 lg:pt-10">
        <div className="mx-auto w-full max-w-6xl">{children}</div>
      </main>

      <ArbiCompanion />
    </div>
  );
}
