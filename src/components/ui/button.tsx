import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium cursor-pointer transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/60 disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-brand-gradient text-primary-foreground shadow-soft hover:-translate-y-0.5 hover:shadow-glow",
        hero: "bg-brand-gradient text-primary-foreground shadow-float hover:-translate-y-0.5 hover:shadow-glow",
        soft: "bg-primary/25 text-primary-foreground hover:bg-primary/40",
        glass: "glass text-foreground hover:-translate-y-0.5 hover:shadow-glow",
        destructive: "bg-destructive/80 text-destructive-foreground hover:bg-destructive",
        outline:
          "border border-border/80 bg-background/40 backdrop-blur-md hover:bg-background/70 hover:-translate-y-0.5",
        secondary: "bg-secondary/45 text-secondary-foreground hover:bg-secondary/65",
        ghost: "hover:bg-foreground/5",
        link: "text-primary-foreground underline-offset-4 hover:underline rounded-md",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-13 px-8 text-base",
        xl: "h-14 px-10 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
