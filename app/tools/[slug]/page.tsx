import { notFound } from "next/navigation";
import { tools } from "@/data/tools";
import { Button } from "@/components/ui/button";
import { ToolDialog } from "@/components/tools/tool-dialog";
import type { Metadata } from "next";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const tool = tools.find((t) => t.slug === params.slug);
  if (!tool) {
    return {
      title: "Tool Not Found — Freeieo",
      description: "The requested AI tool could not be found in the Freeieo directory.",
    };
  }

  return {
    title: `${tool.name} — Free AI Tool | Freeieo`,
    description: `${tool.description} Free tier: ${tool.freeTierNote}. Best for: ${tool.bestFor}.`,
    alternates: {
      canonical: `/tools/${tool.slug}`,
    },
    openGraph: {
      title: `${tool.name} — Free AI Tool | Freeieo`,
      description: tool.description,
      url: `https://jainsaiyam.in/tools/${tool.slug}`,
      siteName: "Freeieo",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${tool.name} — Free AI Tool | Freeieo`,
      description: tool.description,
    },
  };
}

export default function ToolDetailPage({ params }: { params: { slug: string } }) {
  const tool = tools.find((t) => t.slug === params.slug);
  if (!tool) return notFound();

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:py-12">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-text-primary break-words">{tool.name}</h1>
          <p className="mt-2 text-sm sm:text-base text-text-muted">{tool.description}</p>
          <p className="mt-1 text-sm text-accent-cyan break-words">{tool.freeTierNote}</p>
          <p className="mt-1 text-sm text-text-muted italic break-words">{tool.bestFor}</p>
          <a href={tool.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
            <Button variant="default" className="w-full sm:w-auto">Open tool</Button>
          </a>
        </div>

        <div className="rounded-2xl border border-surface-border bg-surface p-5 sm:p-6">
          <h2 className="text-lg sm:text-xl font-semibold text-text-primary mb-4">Step-by-step process</h2>
          {tool.steps && tool.steps.length > 0 ? (
            <ol className="space-y-4">
              {tool.steps.map((step, idx) => (
                <li key={idx} className="flex gap-3 sm:gap-4 text-sm sm:text-base text-text-primary">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-violet to-accent-pink text-sm font-bold text-white">
                    {idx + 1}
                  </span>
                  <span className="min-w-0 break-words">{step}</span>
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-sm text-text-muted">No step-by-step process available yet.</p>
          )}
        </div>
      </div>
    </main>
  );
}
