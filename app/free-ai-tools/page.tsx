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
  { value: "marketing", label: "AI Marketing" },
  { value: "seo", label: "AI SEO" },
  { value: "education", label: "AI Education" },
  { value: "research", label: "AI Research" },
  { value: "documents", label: "AI PDF & Documents" },
  { value: "business", label: "AI Business" },
  { value: "automation", label: "AI Automation" },
  { value: "chatbots", label: "AI Chatbot Builders" },
  { value: "website-builders", label: "AI Website Builders" },
  { value: "social-media", label: "AI Social Media" },
  { value: "email", label: "AI Email" },
  { value: "sales", label: "AI Sales" },
  { value: "resume", label: "AI Resume & Career" },
  { value: "translation", label: "AI Translation" },
  { value: "photo-editing", label: "AI Photo Editing" },
  { value: "background-removal", label: "AI Background Removal" },
  { value: "avatars", label: "AI Avatars" },
  { value: "video-editing", label: "AI Video Editing" },
  { value: "data-analysis", label: "AI Data Analysis" },
  { value: "app-builders", label: "AI App Builders" },
  { value: "game-dev", label: "AI Game Development" },
  { value: "ui-ux", label: "AI UI/UX Design" },
  { value: "customer-support", label: "AI Customer Support" },
  { value: "knowledge", label: "AI Knowledge Management" },
  { value: "legal", label: "AI Legal" },
  { value: "finance", label: "AI Finance" },
  { value: "hr", label: "AI HR & Recruiting" },
  { value: "lead-gen", label: "AI Lead Generation" },
  { value: "design", label: "AI Design" },
  { value: "other", label: "Other AI Tools" },
];

const ITEMS_PER_PAGE = 24;

export default function FreeAIToolsPage() {
  const [search, setSearch] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedTool, setSelectedTool] = React.useState<Tool | null>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const freeTools = React.useMemo(() => {
    return tools.filter(t => t.freeTier || t.pricing === "Free" || t.pricing === "Completely Free" || t.pricing === "Open Source" || t.pricing === "Freemium" || t.pricing === "Self Hosted" || t.pricing === "Local" || t.pricing === "Free + Open Source" || t.pricing === "Free API" || t.pricing === "Community Edition");
  }, []);

  const filtered = React.useMemo(() => {
    let result = [...freeTools];

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
          t.subcategories?.includes(selectedCategory)
      );
    }

    result.sort((a, b) => b.popularity - a.popularity);
    return result;
  }, [search, selectedCategory, freeTools]);

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
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-text-primary">
            5,000+ <span className="gradient-text">Free AI Tools</span>
          </h1>
          <p className="mt-2 text-text-muted max-w-2xl mx-auto">
            Discover AI tools you can use for free, including free forever, free-tier and open-source AI software.
          </p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search free AI tools..."
              className="pl-12 h-12 text-base"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-text-muted hover:text-text-primary"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {categories.filter(c => c.value !== "all").slice(0, 15).map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedCategory(cat.value)}
              className={cn(
                "rounded-xl px-4 py-2 text-sm font-medium transition-all",
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
