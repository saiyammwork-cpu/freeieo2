import { notFound } from "next/navigation";
import { tools } from "@/data/tools";
import { Button } from "@/components/ui/button";
import { ToolDialog } from "@/components/tools/tool-dialog";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export default function ToolDetailPage({ params }: { params: { slug: string } }) {
  const tool = tools.find((t) => t.slug === params.slug);
  if (!tool) return notFound();

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-text-primary">{tool.name}</h1>
          <p className="mt-2 text-text-muted">{tool.description}</p>
          <p className="mt-1 text-sm text-accent-cyan">{tool.freeTierNote}</p>
          <p className="mt-1 text-sm text-text-muted italic">{tool.bestFor}</p>
          <a href={tool.url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block">
            <Button variant="default">Open tool</Button>
          </a>
        </div>

        <div className="rounded-2xl border border-surface-border bg-surface p-6">
          <h2 className="text-xl font-semibold text-text-primary mb-4">Step-by-step process</h2>
          {tool.steps && tool.steps.length > 0 ? (
            <ol className="space-y-4">
              {tool.steps.map((step, idx) => (
                <li key={idx} className="flex gap-4 text-text-primary">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent-violet to-accent-pink text-sm font-bold text-white">
                    {idx + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          ) : (
            <p className="text-sm text-text-muted">No step-by-step process available yet.</p>
          )}
        </div>
      </div>
    </div>
  );
}
