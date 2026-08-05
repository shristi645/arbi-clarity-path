import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { AuthLayout, Field } from "@/components/auth-layout";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "motion/react";
import { MailCheck } from "lucide-react";

export const Route = createFileRoute("/forgot-password")({
  head: () => ({
    meta: [
      { title: "Reset your password — Arbitiza" },
      { name: "description", content: "Send yourself a gentle reset link and get back to your path." },
      { property: "og:title", content: "Reset your password — Arbitiza" },
      {
        property: "og:description",
        content: "Send yourself a gentle reset link and get back to your path.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ForgotPasswordPage,
});

function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  return (
    <AuthLayout
      mood={sent ? "happy" : "concerned"}
      title={sent ? "Link sent" : "Let's get you back in"}
      subtitle={
        sent
          ? "Check your inbox — the link stays valid for an hour."
          : "It happens. Tell us your email and we'll send a reset link."
      }
      footer={
        <Link to="/login" className="font-semibold text-foreground underline-offset-4 hover:underline">
          Back to sign in
        </Link>
      }
    >
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-3 rounded-2xl bg-background/60 p-5"
          >
            <MailCheck className="size-5 shrink-0 text-sage" />
            <p className="text-sm text-muted-foreground">We sent it. Nothing else to do here.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            className="space-y-5"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <Field label="Email" type="email" placeholder="you@example.com" required />
            <Button type="submit" size="lg" className="w-full">
              Send reset link
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </AuthLayout>
  );
}
