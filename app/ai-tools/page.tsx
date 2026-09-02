"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Search, SlidersHorizontal, X, Sparkles, TrendingUp, Star } from "lucide-react";
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
  { value: "presentations", label: "AI Presentations" },
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
  { value: "branding", label: "AI Logo & Branding" },
  { value: "social-media", label: "AI Social Media" },
  { value: "email", label: "AI Email" },
  { value: "sales", label: "AI Sales" },
  { value: "resume", label: "AI Resume & Career" },
  { value: "translation", label: "AI Translation" },
  { value: "photo-editing", label: "AI Photo Editing" },
  { value: "background-removal", label: "AI Background Removal" },
  { value: "avatars", label: "AI Avatars" },
  { value: "video-editing", label: "AI Video Editing" },
  { value: "subtitles", label: "AI Subtitles & Captions" },
  { value: "data-analysis", label: "AI Data Analysis" },
  { value: "spreadsheets", label: "AI Spreadsheets" },
  { value: "databases", label: "AI Databases" },
  { value: "app-builders", label: "AI App Builders" },
  { value: "game-dev", label: "AI Game Development" },
  { value: "mind-maps", label: "AI Mind Maps" },
  { value: "diagrams", label: "AI Diagrams" },
  { value: "ui-ux", label: "AI UI/UX Design" },
  { value: "customer-support", label: "AI Customer Support" },
  { value: "knowledge", label: "AI Knowledge Management" },
  { value: "legal", label: "AI Legal" },
  { value: "finance", label: "AI Finance" },
  { value: "hr", label: "AI HR & Recruiting" },
  { value: "lead-gen", label: "AI Lead Generation" },
  { value: "names-domains", label: "AI Names & Domains" },
  { value: "design", label: "AI Design" },
  { value: "other", label: "Other AI Tools" },
];

const pricingOptions = ["Completely Free", "Free", "Freemium", "Paid", "Free Trial", "Open Source", "Self Hosted", "Local", "Free + Open Source", "Free API", "Community Edition"];

const sortOptions = [
  { value: "popular", label: "Most Popular" },
  { value: "featured", label: "Featured" },
  { value: "trending", label: "Trending" },
  { value: "newest", label: "Newest" },
  { value: "free-first", label: "Free First" },
  { value: "open-source-first", label: "Open Source First" },
  { value: "local-first", label: "Local AI First" },
  { value: "az", label: "A-Z" },
  { value: "za", label: "Z-A" },
];

const ITEMS_PER_PAGE = 24;

export default function DirectoryPage() {
  const [search, setSearch] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState("all");
  const [selectedPricing, setSelectedPricing] = React.useState<string[]>([]);
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);
  const [sortBy, setSortBy] = React.useState("popular");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [selectedTool, setSelectedTool] = React.useState<Tool | null>(null);
  const [mounted, setMounted] = React.useState(false);
  const [filtersOpen, setFiltersOpen] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const filtered = React.useMemo(() => {
    let result = [...tools];

    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.tags.some((tag) => tag.toLowerCase().includes(q)) ||
          t.category.toLowerCase().includes(q)
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

    if (selectedPricing.length > 0) {
      result = result.filter((t) => selectedPricing.includes(t.pricing));
    }

    if (selectedTags.length > 0) {
      result = result.filter((t) => selectedTags.some(tag => t.tags.includes(tag)));
    }

    switch (sortBy) {
      case "popular":
        result.sort((a, b) => b.popularity - a.popularity);
        break;
      case "featured":
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
      case "trending":
        result.sort((a, b) => (b.trending ? 1 : 0) - (a.trending ? 1 : 0));
        break;
      case "newest":
        result.sort((a, b) => b.addedAt.localeCompare(a.addedAt));
        break;
      case "free-first":
        result.sort((a, b) => {
          const aFree = a.freeTier || a.pricing === "Free" || a.pricing === "Completely Free" || a.pricing === "Open Source" ? 0 : 1;
          const bFree = b.freeTier || b.pricing === "Free" || b.pricing === "Completely Free" || b.pricing === "Open Source" ? 0 : 1;
          return aFree - bFree;
        });
        break;
      case "open-source-first":
        result.sort((a, b) => (b.openSource ? 1 : 0) - (a.openSource ? 1 : 0));
        break;
      case "local-first":
        result.sort((a, b) => (b.localAI ? 1 : 0) - (a.localAI ? 1 : 0));
        break;
      case "az":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "za":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    return result;
  }, [search, selectedCategory, selectedPricing, selectedTags, sortBy]);

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  React.useEffect(() => {
    setCurrentPage(1);
  }, [search, selectedCategory, selectedPricing, selectedTags, sortBy]);

  const togglePricing = (p: string) => {
    setSelectedPricing((prev) => (prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]));
  };

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) => (prev.includes(tag) ? prev.filter((x) => x !== tag) : [...prev, tag]));
  };

  const clearFilters = () => {
    setSearch("");
    setSelectedCategory("all");
    setSelectedPricing([]);
    setSelectedTags([]);
    setSortBy("popular");
  };

  const hasActiveFilters = search || selectedCategory !== "all" || selectedPricing.length > 0 || selectedTags.length > 0;

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
            5,000+ <span className="gradient-text">AI Tools</span> Directory
          </h1>
          <p className="mt-2 text-sm sm:text-base text-text-muted max-w-2xl mx-auto">
            Discover the best free and paid AI tools for writing, coding, design, video, marketing, and more.
          </p>
        </div>

        <div className="mb-6 sm:mb-8">
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search 5000+ AI tools..."
              className="pl-12 h-11 sm:h-12 text-base"
            />
            {search && (
              <button
                onClick={() => setSearch("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-text-muted hover:text-text-primary"
                aria-label="Clear search"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>

          <div className="mt-4 lg:hidden flex justify-center">
            <Button variant="outline" size="sm" onClick={() => setFiltersOpen(true)}>
              <SlidersHorizontal className="mr-2 h-4 w-4" /> Filters
              {hasActiveFilters && (
                <span className="ml-2 inline-flex h-2 w-2 rounded-full bg-accent-pink" />
              )}
            </Button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          <aside className="hidden lg:block lg:w-64 shrink-0">
            <div className="rounded-2xl border border-surface-border bg-surface p-4 lg:sticky lg:top-20">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-text-primary flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4" /> Filters
                </h2>
                {hasActiveFilters && (
                  <button onClick={clearFilters} className="text-xs text-accent-pink hover:underline">
                    Clear all
                  </button>
                )}
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-text-primary mb-2">Categories</h3>
                <div className="space-y-1 max-h-64 overflow-y-auto">
                  {categories.map((cat) => (
                    <button
                      key={cat.value}
                      onClick={() => setSelectedCategory(cat.value)}
                      className={cn(
                        "w-full text-left text-sm px-3 py-1.5 rounded-lg transition-colors",
                        selectedCategory === cat.value
                          ? "bg-gradient-to-r from-accent-violet to-accent-pink text-white"
                          : "text-text-muted hover:text-text-primary hover:bg-surface-border/40"
                      )}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h3 className="text-sm font-medium text-text-primary mb-2">Pricing</h3>
                <div className="flex flex-wrap gap-2">
                  {pricingOptions.map((p) => (
                    <button
                      key={p}
                      onClick={() => togglePricing(p)}
                      className={cn(
                        "rounded-full px-3 py-1 text-xs border transition-colors",
                        selectedPricing.includes(p)
                          ? "bg-gradient-to-r from-accent-violet to-accent-pink text-white border-transparent"
                          : "border-surface-border text-text-muted hover:text-text-primary"
                      )}
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-text-primary mb-2">Sort by</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full h-9 rounded-xl border border-surface-border bg-background px-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-violet/40"
                >
                  {sortOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </aside>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-4 px-1">
              <p className="text-xs sm:text-sm text-text-muted">
                Showing {filtered.length} {filtered.length === 1 ? "tool" : "tools"}
                {selectedCategory !== "all" && ` in ${categories.find((c) => c.value === selectedCategory)?.label}`}
              </p>
            </div>

            {paginated.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-surface-border bg-surface p-12 text-center">
                <Search className="mx-auto h-12 w-12 text-text-muted mb-4" />
                <p className="text-text-muted text-lg font-medium">No AI tools found</p>
                <p className="text-text-muted text-sm mt-1">Try another search or remove some filters.</p>
                <Button onClick={clearFilters} className="mt-4">
                  Clear filters
                </Button>
              </div>
            ) : (
              <>
                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
              </>
            )}
          </div>
        </div>
      </div>

      {filtersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setFiltersOpen(false)}
          />
          <div className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-2xl bg-surface border-t border-surface-border p-5 shadow-2xl">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold text-text-primary flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </h2>
              <button
                onClick={() => setFiltersOpen(false)}
                aria-label="Close filters"
                className="rounded-lg p-1 text-text-muted hover:text-text-primary"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {hasActiveFilters && (
              <button
                onClick={clearFilters}
                className="mb-4 text-sm text-accent-pink hover:underline"
              >
                Clear all filters
              </button>
            )}

            <div className="mb-6">
              <h3 className="text-sm font-medium text-text-primary mb-2">Categories</h3>
              <div className="space-y-1 max-h-56 overflow-y-auto">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => {
                      setSelectedCategory(cat.value);
                      setFiltersOpen(false);
                    }}
                    className={cn(
                      "w-full text-left text-sm px-3 py-2 rounded-lg transition-colors",
                      selectedCategory === cat.value
                        ? "bg-gradient-to-r from-accent-violet to-accent-pink text-white"
                        : "text-text-muted hover:text-text-primary hover:bg-surface-border/40"
                    )}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-sm font-medium text-text-primary mb-2">Pricing</h3>
              <div className="flex flex-wrap gap-2">
                {pricingOptions.map((p) => (
                  <button
                    key={p}
                    onClick={() => togglePricing(p)}
                    className={cn(
                      "rounded-full px-3 py-1 text-xs border transition-colors",
                      selectedPricing.includes(p)
                        ? "bg-gradient-to-r from-accent-violet to-accent-pink text-white border-transparent"
                        : "border-surface-border text-text-muted hover:text-text-primary"
                    )}
                  >
                    {p}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-2">
              <h3 className="text-sm font-medium text-text-primary mb-2">Sort by</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full h-10 rounded-xl border border-surface-border bg-background px-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-violet/40"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>

            <Button className="mt-6 w-full" onClick={() => setFiltersOpen(false)}>
              Show {filtered.length} results
            </Button>
          </div>
        </div>
      )}

      <ToolDialog tool={selectedTool} open={!!selectedTool} onClose={() => setSelectedTool(null)} />
    </div>
  );
}
