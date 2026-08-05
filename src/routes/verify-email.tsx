import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useRef, useState } from "react";
import { AuthLayout } from "@/components/auth-layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/verify-email")({
  head: () => ({
    meta: [
      { title: "Verify your email — Arbitiza" },
      { name: "description", content: "Enter the six digit code we sent to confirm your email." },
      { property: "og:title", content: "Verify your email — Arbitiza" },
      {
        property: "og:description",
        content: "Enter the six digit code we sent to confirm your email.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: VerifyEmailPage,
});

function VerifyEmailPage() {
  const navigate = useNavigate();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  const set = (i: number, v: string) => {
    const char = v.replace(/\D/g, "").slice(-1);
    setCode((prev) => prev.map((c, idx) => (idx === i ? char : c)));
    if (char && i < 5) refs.current[i + 1]?.focus();
  };

  return (
    <AuthLayout
      mood="thinking"
      title="Check your inbox"
      subtitle="We sent a six digit code. Paste it in and your path opens."
      footer={
        <Link to="/login" className="font-semibold text-foreground underline-offset-4 hover:underline">
          Use a different email
        </Link>
      }
    >
      <form
        className="space-y-6"
        onSubmit={(e) => {
          e.preventDefault();
          navigate({ to: "/onboarding" });
        }}
      >
        <div className="flex justify-between gap-2">
          {code.map((c, i) => (
            <input
              key={i}
              ref={(el) => {
                refs.current[i] = el;
              }}
              value={c}
              onChange={(e) => set(i, e.target.value)}
              inputMode="numeric"
              aria-label={`Digit ${i + 1}`}
              className="h-14 w-full min-w-0 rounded-2xl border border-border/70 bg-background/60 text-center font-display text-xl outline-none transition-all duration-300 focus:border-primary focus:ring-4 focus:ring-primary/20"
            />
          ))}
        </div>
        <Button type="submit" size="lg" className="w-full">
          Verify and continue <ArrowRight />
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          Didn&apos;t arrive? We&apos;ll resend in 30s.
        </p>
      </form>
    </AuthLayout>
  );
}
