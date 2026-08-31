import Link from "next/link";
import { ArrowRight, Zap, Layers, Sparkles, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { tools } from "@/data/tools";

const today = new Date();
const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
const toolOfDay = tools[dayOfYear % tools.length];

const examplePrompts = [
  "Generate slides for free",
  "Free AI voiceover",
  "Free logo design",
  "Write me a prompt for Midjourney",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-violet/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-4xl px-4 pt-32 pb-20 text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-4 py-1.5 text-sm text-text-muted">
            <Sparkles className="h-4 w-4 text-accent-pink" />
            Built by Saiyam Jain · @saiyam.io
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-text-primary sm:text-6xl">
            Generate anything.{" "}
            <span className="bg-gradient-to-r from-accent-violet to-accent-pink bg-clip-text text-transparent">
              Pay nothing.
            </span>
          </h1>
          <p className="mt-4 text-xl text-text-muted max-w-2xl mx-auto">
            FREEIEO finds the best free and freemium AI tools for any task — and tells you exactly how to use them.
          </p>

          <div className="mt-10 flex justify-center">
            <Link href="/chat">
              <Button size="lg" className="text-base">
                Start creating <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {examplePrompts.map((prompt) => (
              <Link key={prompt} href={`/chat?q=${encodeURIComponent(prompt)}`}>
                <button className="rounded-xl border border-surface-border bg-surface px-4 py-2 text-sm text-text-muted transition-all hover:border-accent-violet/50 hover:text-text-primary hover:scale-105">
                  {prompt}
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tool of the Day */}
      {toolOfDay && (
        <section className="mx-auto max-w-4xl px-4 py-12">
          <div className="rounded-2xl border border-accent-violet/30 bg-gradient-to-br from-accent-violet/5 to-accent-pink/5 p-6">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-5 w-5 text-accent-violet" />
              <h2 className="text-lg font-semibold text-text-primary">Tool of the Day</h2>
            </div>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold text-text-primary">{toolOfDay.name}</h3>
                <p className="mt-1 text-text-muted">{toolOfDay.description}</p>
                <p className="mt-2 text-sm text-accent-cyan">{toolOfDay.freeTierNote}</p>
                <p className="mt-1 text-sm text-text-muted italic">{toolOfDay.bestFor}</p>
              </div>
              <a href={toolOfDay.url} target="_blank" rel="noopener noreferrer">
                <Button variant="outline">
                  Try it <ExternalLink className="ml-1 h-3 w-3" />
                </Button>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* How it works */}
      <section className="mx-auto max-w-4xl px-4 py-20">
        <h2 className="text-center text-3xl font-bold text-text-primary mb-12">
          How it <span className="gradient-text">works</span>
        </h2>
        <div className="grid gap-8 sm:grid-cols-3">
          {[
            {
              icon: <Layers className="h-6 w-6 text-accent-violet" />,
              title: "Describe",
              desc: "Tell FREEIEO what you want to create in plain English.",
            },
            {
              icon: <Sparkles className="h-6 w-6 text-accent-pink" />,
              title: "Discover",
              desc: "Get 2-3 best free tools matched to your task with real free-tier limits.",
            },
            {
              icon: <ArrowRight className="h-6 w-6 text-accent-cyan" />,
              title: "Create",
              desc: "Follow the step-by-step process and copy an optimized prompt to paste.",
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
