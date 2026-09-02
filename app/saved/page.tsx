"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Bookmark, ExternalLink } from "lucide-react";
import { tools } from "@/data/tools";
import { getSavedTools, getSavedPrompts } from "@/lib/localstorage";
import { ToolCard } from "@/components/tools/tool-card";
import { Button } from "@/components/ui/button";

export default function SavedPage() {
  const [mounted, setMounted] = React.useState(false);
  const [savedTools, setSavedTools] = React.useState<string[]>([]);
  const [savedPrompts, setSavedPrompts] = React.useState<Array<{ id: string; text: string; createdAt: string }>>([]);

  React.useEffect(() => {
    setMounted(true);
    setSavedTools(getSavedTools());
    setSavedPrompts(getSavedPrompts());
  }, []);

  if (!mounted) return null;

  const savedToolData = tools.filter((t) => savedTools.includes(t.slug));

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
          Your <span className="gradient-text">Saved</span> Tools
        </h1>
        <p className="mt-2 text-sm sm:text-base text-text-muted">
          Bookmarked tools and prompts for quick access.
        </p>

        <div className="mt-8">
          <h2 className="text-lg sm:text-xl font-semibold text-text-primary mb-4">Bookmarked Tools ({savedToolData.length})</h2>
          {savedToolData.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-surface-border bg-surface p-8 sm:p-12 text-center">
              <Bookmark className="mx-auto h-12 w-12 text-text-muted mb-4" />
              <p className="text-text-muted">No saved tools yet. Browse the directory and bookmark your favorites.</p>
            </div>
          ) : (
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {savedToolData.map((tool, idx) => (
                <motion.div
                  key={tool.slug}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                >
                  <ToolCard tool={tool} />
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {savedPrompts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-xl font-semibold text-text-primary mb-4">Saved Prompts ({savedPrompts.length})</h2>
            <div className="space-y-3">
              {savedPrompts.map((prompt) => (
                <div key={prompt.id} className="rounded-2xl border border-surface-border bg-surface p-4">
                  <pre className="whitespace-pre-wrap text-sm text-text-primary">{prompt.text}</pre>
                  <p className="mt-2 text-xs text-text-muted">
                    {new Date(prompt.createdAt).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
