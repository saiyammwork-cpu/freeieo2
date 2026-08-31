"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/tools", label: "Tools" },
  { href: "/saved", label: "Saved" },
];

export function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 border-b border-surface-border bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet to-accent-pink">
              <Sparkles className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-bold text-text-primary">FREEIEO</span>
          </Link>
          <div className="flex items-center gap-1">
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
          </div>
        </div>
      </div>
    </nav>
  );
}
