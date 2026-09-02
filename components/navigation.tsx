"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/ai-tools", label: "AI Tools" },
  { href: "/jugad", label: "Jugad" },
  { href: "/freeieo-ai", label: "Freeieo AI" },
  { href: "/saved", label: "Saved" },
];

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <nav className="sticky top-0 z-40 border-b border-surface-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet to-accent-pink">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold text-text-primary">FREEIEO</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                  pathname === item.href
                    ? "text-text-primary"
                    : "text-text-muted hover:text-text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
            <div className="ml-2">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-surface-border bg-surface text-text-primary"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-surface-border bg-background/95 backdrop-blur-xl">
          <div className="mx-auto max-w-7xl px-4 py-3 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-xl px-3 py-3 text-base font-medium transition-colors",
                  pathname === item.href
                    ? "bg-surface text-text-primary"
                    : "text-text-muted hover:text-text-primary hover:bg-surface"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}