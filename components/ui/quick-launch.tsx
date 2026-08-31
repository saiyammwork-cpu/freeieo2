"use client";

import * as React from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function QuickLaunch({ onNavigate }: { onNavigate: (path: string) => void }) {
  const [query, setQuery] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    onNavigate(`/chat?q=${encodeURIComponent(query)}`);
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <div className="relative flex items-end gap-2 rounded-2xl border border-surface-border bg-surface p-2">
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask FREEIEO anything..."
          className="flex-1 bg-transparent border-none focus:ring-0"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />
        <Button type="submit" size="sm" disabled={!query.trim()} className="shrink-0 rounded-xl">
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </form>
  );
}
