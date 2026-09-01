"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp, Bookmark, BookmarkCheck } from "lucide-react";
import { tools } from "@/data/tools";
import { saveTool, unsaveTool, getSavedTools } from "@/lib/localstorage";
import { useToast } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import type { Tool } from "@/data/tools";

export function ToolCard({ tool }: { tool: Tool }) {
  const { toast } = useToast();
  const [savedTools, setSavedTools] = React.useState<string[]>([]);
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    setSavedTools(getSavedTools());
  }, []);

  const isSaved = savedTools.includes(tool.slug);

  const toggleSave = () => {
    if (isSaved) {
      unsaveTool(tool.slug);
      setSavedTools((prev) => prev.filter((s) => s !== tool.slug));
      toast({ title: "Removed from saved", description: `"${tool.name}" removed from your bookmarks` });
    } else {
      saveTool(tool.slug);
      setSavedTools((prev) => [...prev, tool.slug]);
      toast({ title: "Saved", description: `"${tool.name}" added to your bookmarks` });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-surface-border bg-surface p-5 transition-all hover:border-accent-violet/30"
    >
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap">
            <h3 className="font-semibold text-text-primary">{tool.name}</h3>
            <Badge variant="outline" className="capitalize text-xs">
              {tool.category}
            </Badge>
            <Badge variant="gradient" className="text-xs">
              {tool.pricing}
            </Badge>
          </div>
          <p className="mt-1 text-sm text-text-muted">{tool.description}</p>
          <p className="mt-1 text-xs text-accent-cyan">{tool.freeTierNote}</p>
          <p className="mt-1 text-xs text-text-muted italic">{tool.bestFor}</p>
          <div className="mt-2 flex flex-wrap gap-1">
            {tool.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="rounded-lg bg-surface-border/60 px-2 py-0.5 text-xs text-text-muted">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" onClick={toggleSave}>
            {isSaved ? (
              <BookmarkCheck className="h-4 w-4 text-accent-violet" />
            ) : (
              <Bookmark className="h-4 w-4" />
            )}
          </Button>
          <a href={tool.url} target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              Open <ExternalLink className="ml-1 h-3 w-3" />
            </Button>
          </a>
        </div>
      </div>

      {tool.steps && tool.steps.length > 0 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 flex items-center gap-1 text-sm font-medium text-accent-violet hover:text-accent-pink transition-colors"
        >
          {expanded ? (
            <><ChevronUp className="h-4 w-4" /> Hide process</>
          ) : (
            <><ChevronDown className="h-4 w-4" /> View process</>
          )}
        </button>
      )}

      {expanded && tool.steps && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-4"
        >
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-text-muted">Step-by-step process</p>
          <ol className="space-y-3">
            {tool.steps.map((step, idx) => (
              <li key={idx} className="flex gap-3 text-sm text-text-primary">
                <span className={cn(
                  "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white",
                  "bg-gradient-to-br from-accent-violet to-accent-pink"
                )}>
                  {idx + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </motion.div>
      )}
    </motion.div>
  );
}
