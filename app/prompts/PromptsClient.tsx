"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Search,
  X,
  Copy,
  Check,
  Wand2,
  Layers,
  ArrowRight,
  Tag,
} from "lucide-react";
import { prompts, type Prompt } from "@/data/prompts";
import { promptCategories } from "@/data/prompt-categories";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { useToast } from "@/components/ui/toast";

const ITEMS_PER_PAGE = 9;

function difficultyColor(d: Prompt["difficulty"]) {
  switch (d) {
    case "Easy":
      return "text-emerald-500 border-emerald-500/30 bg-emerald-500/10";
    case "Medium":
      return "text-amber-500 border-amber-500/30 bg-amber-500/10";
    case "Advanced":
      return "text-rose-500 border-rose-500/30 bg-rose-500/10";
  }
}

function PromptCard({
  prompt,
  onOpen,
}: {
  prompt: Prompt;
  onOpen: (p: Prompt) => void;
}) {
  return (
    <motion.button
      onClick={() => onOpen(prompt)}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="group relative flex h-full flex-col rounded-2xl border border-surface-border bg-surface p-5 text-left transition-all hover:border-accent-violet/40 hover:shadow-xl hover:shadow-accent-violet/10"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-violet/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="mb-3 flex items-start justify-between gap-2">
        <Badge variant="outline" className="capitalize">
          {prompt.category.replace("-", " ")}
        </Badge>
        <span
          className={cn(
            "rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide",
            difficultyColor(prompt.difficulty)
          )}
        >
          {prompt.difficulty}
        </span>
      </div>

      <h3 className="text-lg font-semibold text-text-primary group-hover:gradient-text">
        {prompt.title}
      </h3>
      <p className="mt-1 text-xs font-medium uppercase tracking-wide text-accent-cyan">
        {prompt.style}
      </p>
      <p className="mt-3 line-clamp-3 text-sm text-text-muted">
        {prompt.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {prompt.tags.slice(0, 4).map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center rounded-md bg-surface-border/40 px-2 py-0.5 text-[11px] text-text-muted"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-between border-t border-surface-border pt-4 text-xs">
        <span className="inline-flex items-center gap-1.5 text-text-muted">
          <Wand2 className="h-3.5 w-3.5" />
          Best on {prompt.tool}
        </span>
        <span className="inline-flex items-center gap-1 font-medium text-accent-pink group-hover:underline">
          View prompt <ArrowRight className="h-3.5 w-3.5" />
        </span>
      </div>
    </motion.button>
  );
}

function PromptDialog({
  prompt,
  open,
  onClose,
}: {
  prompt: Prompt | null;
  open: boolean;
  onClose: () => void;
}) {
  const { toast } = useToast();
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    setCopied(false);
  }, [prompt?.id, open]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const handleCopy = async () => {
    if (!prompt) return;
    try {
      await navigator.clipboard.writeText(prompt.preview);
      setCopied(true);
      toast({
        title: "Prompt copied",
        description: `${prompt.title} copied to clipboard.`,
      });
      setTimeout(() => setCopied(false), 1800);
    } catch {
      toast({
        title: "Copy failed",
        description: "Press Ctrl+C / Cmd+C to copy instead.",
        variant: "destructive",
      });
    }
  };

  return (
    <AnimatePresence>
      {open && prompt && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
          <motion.div
            className="relative z-10 flex max-h-[90vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-2xl"
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
          >
            <div className="flex items-start justify-between gap-4 border-b border-surface-border p-5">
              <div className="min-w-0">
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <Badge variant="outline" className="capitalize">
                    {prompt.category.replace("-", " ")}
                  </Badge>
                  <span
                    className={cn(
                      "rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide",
                      difficultyColor(prompt.difficulty)
                    )}
                  >
                    {prompt.difficulty}
                  </span>
                  <Badge>{prompt.tool}</Badge>
                </div>
                <h2 className="text-xl font-bold text-text-primary">
                  {prompt.title}
                </h2>
                <p className="mt-1 text-xs uppercase tracking-wide text-accent-cyan">
                  {prompt.style}
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label="Close"
                className="rounded-lg p-1.5 text-text-muted hover:bg-surface-border/40 hover:text-text-primary"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-5">
              <p className="text-sm text-text-muted">{prompt.description}</p>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {prompt.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md bg-surface-border/40 px-2 py-0.5 text-xs text-text-muted"
                  >
                    <Tag className="mr-1 h-3 w-3" /> {tag}
                  </span>
                ))}
              </div>

              <h3 className="mt-6 text-sm font-semibold text-text-primary">
                Copy-paste prompt
              </h3>
              <div className="relative mt-2 rounded-xl border border-surface-border bg-background p-4">
                <pre className="max-h-72 overflow-y-auto whitespace-pre-wrap text-sm leading-relaxed text-text-primary">
                  {prompt.preview}
                </pre>
                <button
                  onClick={handleCopy}
                  className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-lg border border-surface-border bg-surface px-2.5 py-1.5 text-xs font-medium text-text-primary hover:border-accent-violet/50"
                >
                  {copied ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      Copied
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      Copy
                    </>
                  )}
                </button>
              </div>

              <div className="mt-4 rounded-xl border border-accent-violet/20 bg-accent-violet/5 p-4 text-sm text-text-muted">
                <strong className="text-text-primary">How to use:</strong>{" "}
                Paste this into {prompt.tool === "Any" ? "any AI builder" : prompt.tool} and
                tweak the colors, copy, and sections to match your brand.
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 border-t border-surface-border p-4">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              <Button onClick={handleCopy}>
                {copied ? (
                  <>
                    <Check className="mr-2 h-4 w-4" /> Copied
                  </>
                ) : (
                  <>
                    <Copy className="mr-2 h-4 w-4" /> Copy prompt
                  </>
                )}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function PromptsClient() {
  const [search, setSearch] = React.useState("");
  const [selectedCategory, setSelectedCategory] = React.useState<string>("all");
  const [page, setPage] = React.useState(1);
  const [selected, setSelected] = React.useState<Prompt | null>(null);
  const [mounted, setMounted] = React.useState(false);
  const { toast } = useToast();

  React.useEffect(() => setMounted(true), []);

  const filtered = React.useMemo(() => {
    let r = [...prompts];
    if (selectedCategory !== "all") {
      r = r.filter((p) => p.category === selectedCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      r = r.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q)) ||
          p.style.toLowerCase().includes(q)
      );
    }
    return r;
  }, [search, selectedCategory]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / ITEMS_PER_PAGE));
  const paginated = filtered.slice((page - 1) * ITEMS_PER_PAGE, page * ITEMS_PER_PAGE);

  React.useEffect(() => {
    setPage(1);
  }, [search, selectedCategory]);

  if (!mounted) {
    return (
      <div className="min-h-screen bg-background">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <Skeleton className="mx-auto h-10 w-72" />
          <Skeleton className="mx-auto mt-4 h-4 w-96" />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
              <Skeleton key={i} className="h-56 w-full rounded-2xl" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-cyan/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-5xl px-4 pt-16 pb-8 text-center sm:pt-24 sm:pb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-4 py-1.5 text-xs sm:text-sm text-text-muted">
            <Sparkles className="h-4 w-4 text-accent-cyan" />
            100% Free · Copy-paste ready
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary">
            Free <span className="gradient-text">Website Prompts</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-text-muted max-w-2xl mx-auto px-2">
            Battle-tested prompts for{" "}
            <strong className="text-text-primary">v0, Cursor, Bolt, Lovable</strong> and
            more. Build beautiful landing pages, dashboards, portfolios and full apps — in
            minutes.
          </p>

          <div className="mt-8 flex justify-center">
            <div className="relative w-full max-w-xl">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
              <Input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search prompts (e.g. landing, dashboard, dark)..."
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
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-6">
        <div className="flex flex-wrap items-center justify-center gap-2">
          {promptCategories.map((cat) => {
            const active = selectedCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => {
                  setSelectedCategory(cat.value);
                  toast({
                    title: `Filtered: ${cat.label}`,
                    description: `Showing ${cat.value === "all" ? "all" : cat.label.toLowerCase()} prompts.`,
                  });
                }}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-xs sm:text-sm transition-all",
                  active
                    ? "border-transparent bg-gradient-to-r from-accent-violet to-accent-pink text-white shadow-md shadow-accent-violet/20"
                    : "border-surface-border bg-surface text-text-muted hover:border-accent-violet/40 hover:text-text-primary"
                )}
              >
                {cat.label}
              </button>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="mb-4 flex items-center justify-between px-1">
          <p className="text-xs sm:text-sm text-text-muted">
            Showing <strong className="text-text-primary">{filtered.length}</strong>{" "}
            prompt{filtered.length === 1 ? "" : "s"}
            {selectedCategory !== "all" &&
              ` · ${promptCategories.find((c) => c.value === selectedCategory)?.label}`}
          </p>
          <p className="hidden text-xs text-text-muted sm:flex items-center gap-1.5">
            <Layers className="h-3.5 w-3.5" />
            Page {page} of {totalPages}
          </p>
        </div>

        {paginated.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-surface-border bg-surface p-12 text-center">
            <Search className="mx-auto h-12 w-12 text-text-muted mb-4" />
            <p className="text-text-primary text-lg font-medium">No prompts found</p>
            <p className="text-text-muted text-sm mt-1">
              Try a different search or pick another category.
            </p>
            <Button
              className="mt-4"
              onClick={() => {
                setSearch("");
                setSelectedCategory("all");
              }}
            >
              Reset filters
            </Button>
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {paginated.map((p) => (
              <PromptCard key={p.id} prompt={p} onOpen={setSelected} />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <div className="mt-8 flex items-center justify-center gap-2">
            <Button
              variant="outline"
              size="sm"
              disabled={page === 1}
              onClick={() => setPage((p) => p - 1)}
            >
              Previous
            </Button>
            <span className="text-sm text-text-muted">
              Page {page} of {totalPages}
            </span>
            <Button
              variant="outline"
              size="sm"
              disabled={page === totalPages}
              onClick={() => setPage((p) => p + 1)}
            >
              Next
            </Button>
          </div>
        )}
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-16">
        <div className="rounded-2xl border border-accent-violet/30 bg-gradient-to-br from-accent-violet/5 to-accent-cyan/5 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-3">
            <Wand2 className="h-5 w-5 text-accent-violet" />
            <h2 className="text-xl font-bold text-text-primary">How to use these prompts</h2>
          </div>
          <ol className="space-y-2 text-sm text-text-muted list-decimal pl-5">
            <li>
              Click any prompt card to open the full copy-paste prompt.
            </li>
            <li>
              Hit <strong className="text-text-primary">Copy</strong> and paste it into v0,
              Cursor, Bolt, Lovable, or any AI builder you like.
            </li>
            <li>
              Tweak colors, copy, and sections to match your brand — the prompts are
              starting points, not final designs.
            </li>
          </ol>
        </div>
      </section>

      <PromptDialog
        prompt={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </div>
  );
}