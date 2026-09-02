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
    <>
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
                aria-controls="mobile-nav-card"
                onClick={() => setOpen((v) => !v)}
                className="inline-flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-xl border border-surface-border bg-surface text-text-primary active:scale-95 transition-transform"
              >
                <span
                  className={cn(
                    "block h-[2px] w-5 rounded-full bg-current transition-all duration-300",
                    open && "translate-y-[7px] rotate-45"
                  )}
                />
                <span
                  className={cn(
                    "block h-[2px] w-5 rounded-full bg-current transition-all duration-300",
                    open && "opacity-0"
                  )}
                />
                <span
                  className={cn(
                    "block h-[2px] w-5 rounded-full bg-current transition-all duration-300",
                    open && "-translate-y-[7px] -rotate-45"
                  )}
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {open && (
        <div className="md:hidden fixed inset-0 z-30" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <div
            id="mobile-nav-card"
            className="absolute right-3 top-[68px] w-[calc(100vw-1.5rem)] max-w-xs rounded-2xl border border-surface-border bg-surface shadow-2xl shadow-black/30 overflow-hidden"
          >
            <nav className="flex flex-col py-2">
              {navItems.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between px-5 py-4 text-base font-medium transition-colors border-b border-surface-border/40 last:border-b-0",
                      active
                        ? "bg-gradient-to-r from-accent-violet/15 to-accent-pink/15 text-text-primary"
                        : "text-text-muted hover:bg-surface-border/40 hover:text-text-primary"
                    )}
                  >
                    <span>{item.label}</span>
                    {active && (
                      <span className="h-2 w-2 rounded-full bg-gradient-to-br from-accent-violet to-accent-pink" />
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}