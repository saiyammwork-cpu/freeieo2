import * as React from "react";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    const variants = {
      default:
        "bg-gradient-to-r from-accent-violet to-accent-pink text-white hover:opacity-90 shadow-lg shadow-accent-violet/20",
      outline: "border border-surface-border bg-transparent hover:bg-surface text-text-primary",
      ghost: "hover:bg-surface text-text-muted hover:text-text-primary",
    };
    const sizes = {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-lg px-3 text-sm",
      lg: "h-11 rounded-xl px-8 text-base",
    };

    return (
      <button
        className={cn(
          "inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.02] active:scale-[0.98]",
          variants[variant],
          sizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
