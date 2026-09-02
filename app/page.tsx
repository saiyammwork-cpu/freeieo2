import Link from "next/link";
import { ArrowRight, Zap, Sparkles, ExternalLink, Star, TrendingUp, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { tools } from "@/data/tools";
import { Suspense } from "react";

const today = new Date();
const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
const toolOfDay = tools[dayOfYear % tools.length];

const featuredTools = tools.filter((t) => t.featured).slice(0, 6);
const trendingTools = tools.filter((t) => t.trending).slice(0, 6);

function ToolCardsSkeleton() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="rounded-2xl border border-surface-border bg-surface p-5">
          <div className="h-5 w-3/4 rounded bg-surface-border/60 mb-3" />
          <div className="h-4 w-full rounded bg-surface-border/60 mb-2" />
          <div className="h-4 w-1/2 rounded bg-surface-border/60" />
        </div>
      ))}
    </div>
  );
}

function FeaturedTools() {
  const { ToolCard } = require("@/components/tools/tool-card");
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {featuredTools.map((tool, idx) => (
        <ToolCard key={tool.slug} tool={tool} />
      ))}
    </div>
  );
}

function TrendingTools() {
  const { ToolCard } = require("@/components/tools/tool-card");
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {trendingTools.map((tool, idx) => (
        <ToolCard key={tool.slug} tool={tool} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-violet/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 pt-20 pb-12 text-center sm:pt-32 sm:pb-20">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-4 py-1.5 text-xs sm:text-sm text-text-muted">
            <Sparkles className="h-4 w-4 text-accent-pink" />
            Built by Saiyam Jain · @saiyam.io
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-text-primary">
            Discover the Best{" "}
            <span className="bg-gradient-to-r from-accent-violet to-accent-pink bg-clip-text text-transparent">
              AI Tools
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-xl text-text-muted max-w-2xl mx-auto px-2">
            Explore 5,000+ AI tools for work, creativity, business, coding, marketing, education and more.
          </p>

          <div className="mt-10 flex justify-center">
            <Link href="/ai-tools">
              <Button size="lg" className="text-base">
                Browse AI Tools <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2 px-2">
            {["Free AI voiceover", "Free logo design", "Generate slides for free", "AI video editor"].map((prompt) => (
              <Link key={prompt} href={`/ai-tools?search=${encodeURIComponent(prompt.replace("Free ", ""))}`}>
                <span className="inline-block rounded-xl border border-surface-border bg-surface px-4 py-2 text-sm text-text-muted cursor-pointer hover:border-accent-violet/50 hover:text-text-primary transition-all">
                  {prompt}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Tools */}
      {featuredTools.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-center gap-2 mb-6">
            <Star className="h-5 w-5 text-accent-pink" />
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Featured AI Tools</h2>
          </div>
          <Suspense fallback={<ToolCardsSkeleton />}>
            <FeaturedTools />
          </Suspense>
          <div className="mt-6 text-center">
            <Link href="/ai-tools">
              <Button variant="outline">View all 5,000+ tools</Button>
            </Link>
          </div>
        </section>
      )}

      {/* Trending Tools */}
      {trendingTools.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex items-center gap-2 mb-6">
            <TrendingUp className="h-5 w-5 text-accent-cyan" />
            <h2 className="text-xl sm:text-2xl font-bold text-text-primary">Trending AI Tools</h2>
          </div>
          <Suspense fallback={<ToolCardsSkeleton />}>
            <TrendingTools />
          </Suspense>
        </section>
      )}

{/* Tool of the Day */}
      {toolOfDay && (
        <section className="mx-auto max-w-4xl px-4 py-12">
          <div className="rounded-2xl border border-accent-violet/30 bg-gradient-to-br from-accent-violet/5 to-accent-pink/5 p-5 sm:p-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-accent-violet" />
              <h2 className="text-lg font-semibold text-text-primary">Tool of the Day</h2>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
              <div className="min-w-0">
                <h3 className="text-xl sm:text-2xl font-bold text-text-primary break-words">{toolOfDay.name}</h3>
                <p className="mt-1 text-sm sm:text-base text-text-muted">{toolOfDay.description}</p>
                <p className="mt-2 text-sm text-accent-cyan">{toolOfDay.freeTierNote}</p>
                <p className="mt-1 text-sm text-text-muted italic">{toolOfDay.bestFor}</p>
              </div>
              <a href={toolOfDay.url} target="_blank" rel="noopener noreferrer" className="shrink-0">
                <Button variant="outline" className="w-full sm:w-auto">
                  Try it <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* How it works */}
      <section className="mx-auto max-w-4xl px-4 py-16 sm:py-20">
        <h2 className="text-center text-2xl sm:text-3xl font-bold text-text-primary mb-10 sm:mb-12">
          How it <span className="gradient-text">works</span>
        </h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            {
              icon: <Search className="h-6 w-6 text-accent-violet" />,
              title: "Search",
              desc: "Search 5,000+ AI tools by name, category, or use case.",
            },
            {
              icon: <Sparkles className="h-6 w-6 text-accent-pink" />,
              title: "Discover",
              desc: "Find the best free tools matched to your task with real free-tier limits.",
            },
            {
              icon: <ArrowRight className="h-6 w-6 text-accent-cyan" />,
              title: "Create",
              desc: "Follow the step-by-step process and launch your next project for free.",
            },
          ].map((step, i) => (
            <div key={i} className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-surface border border-surface-border">
                {step.icon}
              </div>
              <h3 className="font-semibold text-text-primary">{step.title}</h3>
              <p className="mt-2 text-sm text-text-muted">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-surface-border py-8">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <p className="text-sm text-text-muted">
            Built by{" "}
            <a
              href="https://instagram.com/saiyam.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-cyan hover:underline"
            >
              Saiyam Jain
            </a>{" "}
            · @saiyam.io
          </p>
        </div>
      </footer>
    </div>
  );
}
