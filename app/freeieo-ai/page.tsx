import { Sparkles } from "lucide-react";

export const metadata = {
  title: "Freeieo AI · Freeieo",
  description:
    "Discover and get AI tool recommendations with Freeieo AI — your personal AI tool discovery assistant.",
};

export default function FreeieoAIPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-violet/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-6xl px-4 pt-24 pb-8 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-4 py-1.5 text-sm text-text-muted">
            <Sparkles className="h-4 w-4 text-accent-violet" />
            AI Tool Discovery · Recommendations
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            <span className="bg-gradient-to-r from-accent-violet to-accent-pink bg-clip-text text-transparent">
              Freeieo AI
            </span>
          </h1>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
            Chat with our AI assistant to discover the best free and freemium AI tools
            tailored to your needs. Get instant recommendations, comparisons, and
            alternatives — all in one place.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="overflow-hidden rounded-2xl border border-surface-border bg-surface shadow-xl shadow-accent-violet/5">
          <iframe
            src="https://chatbot.getmindpal.com/freeieo-ai-ai-tool-discovery-recommendation-engine-bpt?theme=dark"
            allow="clipboard-read; clipboard-write; microphone"
            style={{ width: "100%", height: "100%", minHeight: "700px" }}
            title="Freeieo AI Chatbot"
          />
        </div>
      </section>
    </div>
  );
}