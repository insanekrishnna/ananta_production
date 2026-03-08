import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-semibold transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-indigo-hover shadow-cta rounded-pill hover:scale-[1.02]",
        demo: "bg-demo text-primary-foreground rounded-pill hover:scale-[1.02]",
        ghost: "bg-transparent text-text-nav border border-input rounded-pill hover:bg-secondary",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-pill",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground rounded-pill",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-pill",
        link: "text-primary underline-offset-4 hover:underline",
        "hero-primary": "bg-primary text-primary-foreground rounded-pill shadow-cta hover:bg-indigo-hover hover:scale-[1.02] text-[15px]",
        "hero-ghost": "bg-transparent text-text-nav border border-input rounded-pill hover:bg-secondary text-[15px]",
      },
      size: {
        default: "h-10 px-6 py-2 text-[15px]",
        sm: "h-9 px-4 text-sm",
        lg: "h-12 px-7 text-[15px]",
        xl: "h-14 px-9 text-[15px]",
        icon: "h-10 w-10",
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
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
