import { createFileRoute } from "@tanstack/react-router";
import { User, Bell, Palette, MessageCircleHeart } from "lucide-react";
import { AppShell } from "@/components/app-shell";
import { GlassCard, CardLabel } from "@/components/glass-card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/settings")({
  head: () => ({
    meta: [
      { title: "Settings — Arbitiza" },
      {
        name: "description",
        content: "Tune Arbi's tone, your focus windows and how gently Arbitiza nudges you.",
      },
      { property: "og:title", content: "Settings — Arbitiza" },
      {
        property: "og:description",
        content: "Tune Arbi's tone, your focus windows and how gently Arbitiza nudges you.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SettingsPage,
});

function Row({ label, hint, defaultOn = false }: { label: string; hint: string; defaultOn?: boolean }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 rounded-2xl bg-background/55 px-4 py-3.5">
      <div className="min-w-0">
        <p className="truncate text-sm font-medium">{label}</p>
        <p className="truncate text-xs text-muted-foreground">{hint}</p>
      </div>
      <Switch defaultChecked={defaultOn} className="shrink-0" />
    </div>
  );
}

function SettingsPage() {
  return (
    <AppShell>
      <div className="mb-8">
        <h1 className="text-4xl sm:text-5xl">Settings</h1>
        <p className="mt-2 text-muted-foreground">Small dials. Big difference in how this feels.</p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <GlassCard>
          <CardLabel icon={<User />} title="Profile" />
          <div className="flex items-center gap-4">
            <span className="size-14 shrink-0 rounded-full bg-brand-gradient" />
            <div className="min-w-0">
              <p className="truncate font-display text-lg">Maya Fernandes</p>
              <p className="truncate text-sm text-muted-foreground">maya@example.com</p>
            </div>
          </div>
          <Button variant="glass" className="mt-6 w-full">
            Edit profile
          </Button>
        </GlassCard>

        <GlassCard delay={0.05}>
          <CardLabel icon={<MessageCircleHeart />} title="Arbi's tone" />
          <div className="flex flex-wrap gap-2">
            {["Warm and gentle", "Short and direct", "Reflective", "Quietly cheering"].map(
              (t, i) => (
                <button
                  key={t}
                  className={
                    i === 0
                      ? "cursor-pointer rounded-full bg-brand-gradient px-4 py-2 text-xs font-medium text-primary-foreground"
                      : "cursor-pointer rounded-full bg-background/60 px-4 py-2 text-xs font-medium transition-colors hover:bg-background/85"
                  }
                >
                  {t}
                </button>
              ),
            )}
          </div>
        </GlassCard>

        <GlassCard delay={0.1}>
          <CardLabel icon={<Bell />} title="Nudges" />
          <div className="space-y-3">
            <Row label="Morning mission" hint="A single message at your peak window" defaultOn />
            <Row label="Evening reflection" hint="One question, 60 seconds" defaultOn />
            <Row label="Streak reminders" hint="Off by default — never guilt" />
          </div>
        </GlassCard>

        <GlassCard delay={0.15}>
          <CardLabel icon={<Palette />} title="Atmosphere" />
          <div className="space-y-3">
            <Row label="Ambient motion" hint="Drifting blobs and sparkles" defaultOn />
            <Row label="Arbi companion" hint="Floating spirit in the corner" defaultOn />
            <Row label="Reduced density" hint="Even more breathing room" />
          </div>
        </GlassCard>
      </div>
    </AppShell>
  );
}
