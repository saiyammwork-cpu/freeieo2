"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { tools } from "@/data/tools";
import { ToolCard } from "@/components/tools/tool-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ToolDialog } from "@/components/tools/tool-dialog";

const categories = [
  "All",
  "Slides",
  "Images",
  "Video",
  "Voice/Audio",
  "Writing",
  "Coding",
  "Design",
  "Music",
  "Avatars/Talking Head",
  "Productivity",
];

export default function ToolsPage() {
  const [search, setSearch] = React.useState("");
  const [activeCategory, setActiveCategory] = React.useState("All");
  const [selectedTool, setSelectedTool] = React.useState<string | null>(null);

  const filtered = tools.filter((tool) => {
    const matchesSearch =
      tool.name.toLowerCase().includes(search.toLowerCase()) ||
      tool.description.toLowerCase().includes(search.toLowerCase());
    const categoryMap: Record<string, string> = {
      "All": "",
      "Slides": "slides",
      "Images": "images",
      "Video": "video",
      "Voice/Audio": "voice",
      "Writing": "writing",
      "Coding": "coding",
      "Design": "design",
      "Music": "music",
      "Avatars/Talking Head": "avatars",
      "Productivity": "productivity",
    };
    const matchesCategory =
      activeCategory === "All" || tool.category === categoryMap[activeCategory];
    return matchesSearch && matchesCategory;
  });

  const selectedToolData = selectedTool ? tools.find((t) => t.slug === selectedTool) : null;

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-text-primary">
            Free AI <span className="gradient-text">Tools Directory</span>
          </h1>
          <p className="mt-2 text-text-muted">
            Browse {tools.length} free and freemium AI tools curated for creators.
          </p>
        </div>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
            <Input
              placeholder="Search tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-xl px-4 py-2 text-sm font-medium transition-all ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-accent-violet to-accent-pink text-white"
                  : "border border-surface-border bg-surface text-text-muted hover:text-text-primary"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tool, idx) => (
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

        {filtered.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-text-muted">No tools match your search.</p>
          </div>
        )}
      </div>

      <ToolDialog
        tool={selectedToolData ?? null}
        open={!!selectedToolData}
        onClose={() => setSelectedTool(null)}
      />
    </div>
  );
}
