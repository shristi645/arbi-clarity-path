import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthLayout, Field } from "@/components/auth-layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/signup")({
  head: () => ({
    meta: [
      { title: "Create your account — Arbitiza" },
      {
        name: "description",
        content: "Start free with Arbitiza and turn one big goal into a calm daily path.",
      },
      { property: "og:title", content: "Create your account — Arbitiza" },
      {
        property: "og:description",
        content: "Start free with Arbitiza and turn one big goal into a calm daily path.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SignupPage,
});

function SignupPage() {
  const navigate = useNavigate();
  return (
    <AuthLayout
      mood="happy"
      title="Let's begin"
      subtitle="One goal is enough to start. Arbi takes it from there."
      showBackToHome
      footer={
        <>
          Already with us?{" "}
          <Link to="/login" className="font-semibold text-foreground underline-offset-4 hover:underline">
            Sign in
          </Link>
        </>
      }
    >
      <form
        className="space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          navigate({ to: "/verify-email" });
        }}
      >
        <Field label="Name" placeholder="Your name" required />
        <Field label="Email" type="email" placeholder="you@example.com" required />
        <Field label="Password" type="password" placeholder="At least 8 characters" required />
        <Button type="submit" size="lg" className="w-full">
          Create account <ArrowRight />
        </Button>
        <p className="text-center text-xs leading-relaxed text-muted-foreground">
          By continuing you agree to our{" "}
          <Link
            to="/terms"
            className="font-medium text-foreground underline-offset-4 outline-none transition-colors duration-200 hover:text-primary hover:underline focus-visible:text-primary focus-visible:underline"
          >
            Terms of Service
          </Link>{" "}
          and{" "}
          <Link
            to="/privacy"
            className="font-medium text-foreground underline-offset-4 outline-none transition-colors duration-200 hover:text-primary hover:underline focus-visible:text-primary focus-visible:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </form>
    </AuthLayout>
  );
}
