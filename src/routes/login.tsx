import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { AuthLayout, Field } from "@/components/auth-layout";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Sign in — Arbitiza" },
      { name: "description", content: "Sign in to Arbitiza and pick your path back up." },
      { property: "og:title", content: "Sign in — Arbitiza" },
      { property: "og:description", content: "Sign in to Arbitiza and pick your path back up." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  return (
    <AuthLayout
      title="Welcome back"
      subtitle="Your path stayed exactly where you left it."
      showBackToHome
      footer={
        <>
          New here?{" "}
          <Link to="/signup" className="font-semibold text-foreground underline-offset-4 hover:underline">
            Create an account
          </Link>
        </>
      }
    >
      <form
        className="space-y-5"
        onSubmit={(e) => {
          e.preventDefault();
          navigate({ to: "/dashboard" });
        }}
      >
        <Field label="Email" type="email" placeholder="you@example.com" required />
        <Field label="Password" type="password" placeholder="••••••••" required />
        <div className="flex justify-end">
          <Link
            to="/forgot-password"
            className="text-xs text-muted-foreground underline-offset-4 hover:underline"
          >
            Forgot password?
          </Link>
        </div>
        <Button type="submit" size="lg" className="w-full">
          Continue <ArrowRight />
        </Button>
      </form>
    </AuthLayout>
  );
}
