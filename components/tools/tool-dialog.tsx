"use client";

import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, X } from "lucide-react";
import type { Tool } from "@/data/tools";

export function ToolDialog({ tool, open, onClose }: { tool: Tool | null; open: boolean; onClose: () => void }) {
  if (!tool) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl" onClose={onClose}>
        <DialogHeader>
          <div className="flex items-center gap-2 flex-wrap">
            <DialogTitle>{tool.name}</DialogTitle>
            <Badge variant="outline" className="capitalize text-xs">
              {tool.category}
            </Badge>
            <Badge variant="gradient" className="text-xs">
              {tool.pricing}
            </Badge>
          </div>
          <p className="text-sm text-text-muted">{tool.description}</p>
        </DialogHeader>
        <div className="mt-4 space-y-4">
          <div className="rounded-xl bg-background p-4 border border-surface-border">
            <p className="text-xs font-medium uppercase tracking-wider text-text-muted mb-1">Free tier limits</p>
            <p className="text-sm text-accent-cyan">{tool.freeTierNote}</p>
            {tool.bestFor && <p className="text-xs text-text-muted mt-1 italic">{tool.bestFor}</p>}
          </div>

          <div>
            <p className="mb-3 text-sm font-medium uppercase tracking-wider text-text-muted">Step-by-step process</p>
            {tool.steps && tool.steps.length > 0 ? (
              <ol className="space-y-3">
                {tool.steps.map((step, idx) => (
                  <li key={idx} className="flex gap-3 text-sm text-text-primary">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-violet to-accent-pink text-xs font-bold text-white">
                      {idx + 1}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
            ) : (
              <p className="text-sm text-text-muted">No step-by-step process available yet.</p>
            )}
          </div>

          <div className="flex items-center gap-2 pt-2">
            <a href={tool.url} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="default" className="w-full">
                Visit website <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
