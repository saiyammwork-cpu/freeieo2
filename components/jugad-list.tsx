"use client";

import { useEffect, useState, useCallback } from "react";
import type { Jugad } from "@/lib/jugad-types";
import { Sparkles, User } from "lucide-react";

function formatDate(iso: string): string {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString(undefined, {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return iso;
  }
}

export function JugadList({ refreshSignal = 0 }: { refreshSignal?: number }) {
  const [items, setItems] = useState<Jugad[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    try {
      const res = await fetch("/api/jugads", { cache: "no-store" });
      const data = await res.json().catch(() => ({}));
      setItems(Array.isArray(data.items) ? data.items : []);
      setError(null);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Failed to load jugads");
    }
  }, []);

  useEffect(() => {
    load();
  }, [load, refreshSignal]);

  if (items === null) {
    return (
      <div className="grid gap-4 md:grid-cols-2">
        {Array.from({ length: 2 }).map((_, i) => (
          <div
            key={i}
            className="rounded-2xl border border-surface-border bg-surface p-6 animate-pulse"
          >
            <div className="h-4 w-1/3 bg-surface-border/60 rounded mb-3" />
            <div className="h-3 w-full bg-surface-border/60 rounded mb-2" />
            <div className="h-3 w-2/3 bg-surface-border/60 rounded" />
          </div>
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-red-500/30 bg-red-500/10 p-6 text-sm text-red-400">
        {error}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-surface-border bg-surface/40 p-8 text-center">
        <Sparkles className="mx-auto h-8 w-8 text-accent-violet mb-2" />
        <h3 className="font-semibold text-text-primary">No jugads yet</h3>
        <p className="text-sm text-text-muted mt-1">
          Be the first to share a smart workaround using the button above.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((j) => (
        <div
          key={j.id}
          className="rounded-2xl border border-surface-border bg-surface p-6 transition-all hover:border-accent-violet/30"
        >
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-gradient-to-r from-accent-violet to-accent-pink px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white">
              {j.toolName}
            </span>
            {j.category && (
              <span className="rounded-full border border-surface-border px-2 py-0.5 text-[10px] text-text-muted">
                {j.category}
              </span>
            )}
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">
            {j.jugadTitle}
          </h3>
          <p className="text-sm text-text-muted leading-relaxed mb-3">
            {j.description}
          </p>
          {j.steps.length > 0 && (
            <ol className="list-decimal list-inside space-y-1 text-sm text-text-muted mb-3">
              {j.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ol>
          )}
          <div className="flex items-center justify-between text-xs text-text-muted">
            <span className="inline-flex items-center gap-1">
              <User className="h-3 w-3" />
              {j.submittedBy || "Anonymous"}
            </span>
            <span>{formatDate(j.createdAt)}</span>
          </div>
        </div>
      ))}
    </div>
  );
}