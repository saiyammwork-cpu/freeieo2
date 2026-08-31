"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { Copy, Check, ArrowRight } from "lucide-react";
import { tools } from "@/data/tools";
import { useToast } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { QuickLaunch } from "@/components/ui/quick-launch";

function PromptWriterContent() {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const [toolSlug, setToolSlug] = React.useState(searchParams.get("tool") || "");
  const [query, setQuery] = React.useState(searchParams.get("query") || "");
  const [copied, setCopied] = React.useState(false);
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [messages, setMessages] = React.useState<Array<{ role: "user" | "assistant"; content: string }>>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  const filteredTools = tools.filter((t) => {
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
    return selectedCategory === "All" || t.category === categoryMap[selectedCategory];
  });

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

  const lastAssistantMessage = [...messages].reverse().find((m) => m.role === "assistant");

  const sendPrompt = async () => {
    if (!query.trim() || isLoading) return;

    const userMessage = { role: "user" as const, content: query.trim() };
    const assistantMessageId = crypto.randomUUID();
    
    setMessages((prev) => [...prev, userMessage, { role: "assistant", content: "" }]);
    const currentQuery = query;
    setQuery("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/prompt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [],
          toolSlug,
          query: currentQuery,
        }),
      });

      if (!response.ok) throw new Error("Failed to generate prompt");

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let fullText = "";

      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          const text = decoder.decode(value, { stream: true });
          fullText += text;
          setMessages((prev) =>
            prev.map((m) => (m.role === "assistant" && m.content === "" ? { ...m, content: fullText } : m))
          );
        }
      }
    } catch (error) {
      console.error("Prompt error:", error);
      setMessages((prev) =>
        prev.map((m) =>
          m.role === "assistant" && m.content === ""
            ? { ...m, content: "Sorry, something went wrong. Please try again." }
            : m
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    toast({ title: "Copied to clipboard", description: "Prompt copied successfully" });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-4xl font-bold text-text-primary">
          Prompt <span className="gradient-text">Writer</span>
        </h1>
        <p className="mt-2 text-text-muted">
          Pick a tool, describe what you want, and get an optimized, copy-paste-ready prompt.
        </p>

        <div className="mt-8 space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-text-primary">Target tool / category</label>
            <select
              value={toolSlug}
              onChange={(e) => setToolSlug(e.target.value)}
              className="h-10 w-full rounded-xl border border-surface-border bg-background px-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-accent-violet/40"
            >
              <option value="">Select a tool...</option>
              {tools.map((t) => (
                <option key={t.slug} value={t.slug}>
                  {t.name} ({t.category})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-text-primary">Describe your idea</label>
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. I want to create a pitch deck for a sustainable fashion brand..."
              className="h-12"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendPrompt();
                }
              }}
            />
          </div>

          <Button
            onClick={sendPrompt}
            disabled={isLoading || !query.trim()}
            className="w-full"
          >
            {isLoading ? (
              <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent mr-2" />
            ) : (
              <ArrowRight className="mr-2 h-4 w-4" />
            )}
            Generate optimized prompt
          </Button>
        </div>

        {lastAssistantMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 rounded-2xl border border-surface-border bg-surface p-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-text-primary">Your optimized prompt</h3>
              <Button variant="ghost" size="sm" onClick={() => copyToClipboard(lastAssistantMessage.content)}>
                {copied ? <><Check className="mr-1 h-3 w-3" /> Copied</> : <><Copy className="mr-1 h-3 w-3" /> Copy</>}
              </Button>
            </div>
            <pre className="whitespace-pre-wrap text-sm text-text-primary">{lastAssistantMessage.content}</pre>
          </motion.div>
        )}

        <QuickLaunch onNavigate={(path) => window.location.href = path} />
      </div>
    </div>
  );
}

export default function PromptWriterPage() {
  return (
    <Suspense fallback={<div className="flex min-h-screen items-center justify-center text-text-muted">Loading...</div>}>
      <PromptWriterContent />
    </Suspense>
  );
}
