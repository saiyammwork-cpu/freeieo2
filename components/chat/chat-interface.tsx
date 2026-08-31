"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles, Bookmark, BookmarkCheck, ExternalLink, ChevronDown, ChevronUp, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { tools } from "@/data/tools";
import { saveTool, unsaveTool, getSavedTools } from "@/lib/localstorage";
import { useToast } from "@/components/ui/toast";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function parseToolRecommendations(text: string) {
  const lines = text.split("\n");
  const recommendations: Array<{ name: string; why: string; slug: string; steps?: string[] }> = [];
  let current: typeof recommendations[0] | null = null;
  let inSteps = false;
  const stepRegex = /^\d+\./;

  for (const line of lines) {
    const toolMatch = line.match(/^#{1,3}\s*(.+?):\s*(.+)$/) || line.match(/^\*\*(.+?)\*\*:\s*(.+)$/);
    if (toolMatch) {
      if (current) recommendations.push(current);
      current = { name: toolMatch[1].trim(), why: toolMatch[2].trim(), slug: toolMatch[1].trim().toLowerCase().replace(/\s+/g, "-") };
      inSteps = false;
      continue;
    }
    if (current && (line.includes("Steps:") || line.includes("**Steps:**"))) {
      inSteps = true;
      current.steps = [];
      continue;
    }
    if (current && inSteps && stepRegex.test(line.trim())) {
      current.steps?.push(line.trim().replace(/^\d+\.\s*/, ""));
    }
  }
  if (current) recommendations.push(current);
  return recommendations;
}

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

export function ChatInterface({ initialQuery = "" }: { initialQuery?: string }) {
  const { toast } = useToast();
  const [savedTools, setSavedTools] = React.useState<string[]>([]);
  const [copiedId, setCopiedId] = React.useState<string | null>(null);
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLTextAreaElement>(null);

  const [messages, setMessages] = React.useState<Message[]>([]);
  const [input, setInput] = React.useState(initialQuery);
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    setSavedTools(getSavedTools());
  }, []);

  React.useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement === document.body) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const sendMessage = async (content: string) => {
    if (!content.trim() || isLoading) return;

    const userMessage: Message = {
      id: crypto.randomUUID(),
      role: "user",
      content: content.trim(),
    };

    const assistantMessageId = crypto.randomUUID();
    const assistantMessage: Message = {
      id: assistantMessageId,
      role: "assistant",
      content: "",
    };

    setMessages((prev) => [...prev, userMessage, assistantMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({ role: m.role, content: m.content })),
          systemPrompt: `You are FREEIEO, an AI agent built by Saiyam Jain (@saiyam.io) that helps people create anything using only free or freemium AI tools.

Rules:
1. Only recommend tools from the provided TOOLS list — never invent a tool or a URL.
2. For every request, recommend 2–3 tools max, ranked best-first, and explain in one line why each is the pick for this specific request.
3. Always give a concrete, numbered step-by-step process to go from zero to the finished result using the top pick.
4. Be explicit about free-tier limits (watermarks, export caps, credit limits) so the user isn't surprised.
5. If the user's request would clearly need a paid tool to get a usable result, say so honestly, then give the best free-tier workaround anyway.
6. If asked to write a prompt, write one tailored to the specific tool the user is using — concise, copy-paste ready, no fluff.
7. Tone: sharp, encouraging, zero fluff. You talk like a founder who's tested every tool personally.
8. Never say you can't help — if nothing fits exactly, get as close as possible with what's free.`,
        }),
      });

      if (!response.ok) throw new Error("Failed to send message");

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
            prev.map((m) => (m.id === assistantMessageId ? { ...m, content: fullText } : m))
          );
        }
      }
    } catch (error) {
      console.error("Chat error:", error);
      setMessages((prev) =>
        prev.map((m) =>
          m.id === assistantMessageId
            ? { ...m, content: "Sorry, something went wrong. Please try again." }
            : m
        )
      );
    } finally {
      setIsLoading(false);
    }
  };

  const toggleSave = (slug: string) => {
    const isSaved = savedTools.includes(slug);
    if (isSaved) {
      unsaveTool(slug);
      setSavedTools((prev) => prev.filter((s) => s !== slug));
      toast({ title: "Removed from saved", description: `"${slug}" removed from your bookmarks` });
    } else {
      saveTool(slug);
      setSavedTools((prev) => [...prev, slug]);
      toast({ title: "Saved", description: `"${slug}" added to your bookmarks` });
    }
  };

  const copyToClipboard = async (text: string, id: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedId(id);
    toast({ title: "Copied to clipboard", description: "Prompt copied successfully" });
    setTimeout(() => setCopiedId(null), 2000);
  };

  const findToolBySlug = (slug: string) => tools.find((t) => t.slug === slug || t.name.toLowerCase().includes(slug));

  const toolChips = ["Generate slides for free", "Free AI voiceover", "Free logo design", "Write me a prompt for Midjourney"];

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col">
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <div className="mx-auto max-w-3xl space-y-6">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center pt-20 text-center">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-violet to-accent-pink">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight text-text-primary">
                What do you want to{" "}
                <span className="gradient-text">create</span>?
              </h1>
              <p className="mt-2 max-w-md text-text-muted">
                I&apos;ll find the best free AI tools and walk you through exactly how to use them.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {toolChips.map((chip) => (
                  <button
                    key={chip}
                    onClick={() => setInput(chip)}
                    className="rounded-xl border border-surface-border bg-surface px-4 py-2 text-sm text-text-muted transition-all hover:border-accent-violet/50 hover:text-text-primary hover:scale-105"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          )}

          <AnimatePresence>
            {messages.map((message) => {
              if (message.role === "user") {
                return (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex justify-end"
                  >
                    <div className="max-w-[80%] rounded-2xl bg-surface px-4 py-3 text-sm text-text-primary border border-surface-border">
                      {message.content}
                    </div>
                  </motion.div>
                );
              }

              const recommendations = parseToolRecommendations(message.content);

              return (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-accent-violet to-accent-pink">
                    <span className="text-xs font-bold text-white">F</span>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div className="prose prose-invert max-w-none">
                      <p className="text-sm leading-relaxed text-text-primary whitespace-pre-wrap">
                        {message.content}
                      </p>
                    </div>

                    {recommendations.length > 0 && (
                      <div className="space-y-3">
                        {recommendations.map((rec, idx) => {
                          const tool = findToolBySlug(rec.slug);
                          const isSaved = savedTools.includes(rec.slug);
                          return (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: idx * 0.1 }}
                              className="rounded-2xl border border-surface-border bg-surface p-5"
                            >
                              <div className="flex items-start justify-between">
                                <div className="flex-1">
                                  <div className="flex items-center gap-2">
                                    <h3 className="font-semibold text-text-primary">{rec.name}</h3>
                                    <Badge variant="gradient" className="text-xs">Top Pick</Badge>
                                  </div>
                                  <p className="mt-1 text-sm text-text-muted">{rec.why}</p>
                                  {tool && (
                                    <p className="mt-1 text-xs text-accent-cyan">{tool.freeTierNote}</p>
                                  )}
                                </div>
                                <div className="flex items-center gap-2">
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => toggleSave(rec.slug)}
                                  >
                                    {isSaved ? (
                                      <BookmarkCheck className="h-4 w-4 text-accent-violet" />
                                    ) : (
                                      <Bookmark className="h-4 w-4" />
                                    )}
                                  </Button>
                                  {tool && (
                                    <a href={tool.url} target="_blank" rel="noopener noreferrer">
                                      <Button variant="outline" size="sm">
                                        Open <ExternalLink className="ml-1 h-3 w-3" />
                                      </Button>
                                    </a>
                                  )}
                                </div>
                              </div>

                              {tool && tool.steps && tool.steps.length > 0 && (
                                <div className="mt-4">
                                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-text-muted">Step-by-step process</p>
                                  <ol className="space-y-2">
                                    {tool.steps.map((step, stepIdx) => (
                                      <li key={stepIdx} className="flex gap-3 text-sm text-text-primary">
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-violet to-accent-pink text-xs font-bold text-white">
                                          {stepIdx + 1}
                                        </span>
                                        {step}
                                      </li>
                                    ))}
                                  </ol>
                                </div>
                              )}

                              <div className="mt-4 flex items-center gap-2">
                                <Button
                                  variant="outline"
                                  size="sm"
                                  onClick={() => {
                                    window.location.href = `/prompt-writer?tool=${encodeURIComponent(rec.slug)}&query=${encodeURIComponent(messages[0]?.content || "")}`;
                                  }}
                                >
                                  Generate a prompt for this
                                </Button>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    )}

                    {message.content.includes("Here's an optimized prompt:") && (
                      <div className="mt-4 rounded-2xl border border-surface-border bg-surface p-4">
                        <p className="mb-2 text-xs font-medium uppercase tracking-wider text-text-muted">Optimized prompt</p>
                        <pre className="whitespace-pre-wrap text-sm text-text-primary">{message.content}</pre>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="mt-2"
                          onClick={() => copyToClipboard(message.content, message.id)}
                        >
                          {copiedId === message.id ? (
                            <><Check className="mr-1 h-3 w-3" /> Copied</>
                          ) : (
                            <><Copy className="mr-1 h-3 w-3" /> Copy</>
                          )}
                        </Button>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          <div ref={messagesEndRef} />
        </div>
      </div>

      <div className="border-t border-surface-border bg-background px-4 py-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage(input);
          }}
          className="mx-auto max-w-3xl"
        >
          <div className="relative flex items-end gap-2 rounded-2xl border border-surface-border bg-surface p-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="What do you want to create?"
              className="flex-1 resize-none bg-transparent px-2 py-2 text-sm text-text-primary placeholder:text-text-muted focus:outline-none max-h-32 min-h-[40px]"
              rows={1}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  sendMessage(input);
                }
              }}
            />
            <Button
              type="submit"
              size="sm"
              disabled={!input.trim() || isLoading}
              className="shrink-0 rounded-xl"
            >
              {isLoading ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
