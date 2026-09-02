"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { tools } from "@/data/tools";
import { ToolCard } from "@/components/tools/tool-card";
import { ToolDialog } from "@/components/tools/tool-dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import type { Tool } from "@/data/tools";

const categories = [
  { value: "all", label: "All Tools" },
  { value: "chat", label: "AI Chat & Assistants" },
  { value: "coding", label: "AI Coding" },
  { value: "images", label: "AI Image Generation" },
  { value: "video", label: "AI Video" },
  { value: "voice", label: "AI Voice & Audio" },
  { value: "music", label: "AI Music" },
  { value: "writing", label: "AI Writing" },
  { value: "productivity", label: "AI Productivity" },
  { value: "automation", label: "AI Automation" },
  { value: "chatbots", label: "AI Chatbot Builders" },
  { value: "website-builders", label: "AI Website Builders" },
  { value: "app-builders", label: "AI App Builders" },
  { value: "research", label: "AI Research" },
  { value: "education", label: "AI Education" },
  { value: "data-analysis", label: "AI Data Analysis" },
  { value: "documents", label: "AI PDF & Documents" },
  { value: "other", label: "Other AI Tools" },
];

const ITEMS_PER_PAGE = 24;

export default function LocalAIPage() {
  const [search, setSearch] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedTool, setSelectedTool] = React.useState<Tool | null>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const localTools = React.useMemo(() => {
    return tools.filter(t => t.localAI || t.selfHosted || t.pricing === "Local" || t.pricing === "Self Hosted");
  }, []);

  const filtered = React.useMemo(() => {
    let result = [...localTools];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q))
      );
    }

    if (selectedCategory !== "all") {
      result = result.filter(
        (t) =>
          t.category === selectedCategory ||
          t.categories?.includes(selectedCategory) ||
          (t as unknown as { subcategories?: string[] }).subcategories?.includes(selectedCategory)
      );
    }

    result.sort((a, b) => b.popularity - a.popularity);
    return result;
  }, [search, selectedCategory, localTools]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategory]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <Skeleton className="h-10 w-96 mx-auto mb-8" />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 12 }).map((_, i) => (
              <Skeleton key={i} className="h-48 w-full" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:py-12">
        <div className="text-center mb-8 sm:mb-10 px-2">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary">
            Best <span className="gradient-text">Local AI</span> Tools
          </h1>
          <p className="mt-2 text-sm sm:text-base text-text-muted max-w-2xl mx-auto">
            AI software that runs locally on your computer. No cloud required. Private, fast, and offline-capable.
          </p>
        </div>

        <div className="mb-6 sm:mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search local AI tools..."
              className="pl-12 h-11 sm:h-12 text-base"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                aria-label="Clear search"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-text-muted hover:text-text-primary"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6 sm:mb-8 justify-center">
          {categories.filter(c => c.value !== "all").slice(0, 15).map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={cn(
                "rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-medium transition-all",
                selectedCategory === cat.value
                  ? "bg-gradient-to-r from-accent-violet to-accent-pink text-white"
                  : "border border-surface-border bg-surface text-text-muted hover:text-text-primary"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {paginated.map((tool, idx) => (
            <motion.div
              key={tool.slug}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.03 }}
            >
              <ToolCard tool={tool} />
            </motion.div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              Previous
            </Button>
            <span className="text-sm text-text-muted">
              Page {currentPage} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next
            </Button>
          </div>
        )}
      </div>

      <ToolDialog tool={selectedTool} open={!!selectedTool} onClose={() => setSelectedTool(null)} />
    </div>
  );
}
