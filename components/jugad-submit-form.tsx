"use client";

import { useState } from "react";
import { Plus, Loader2, CheckCircle2, AlertCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  onCreated?: () => void;
};

export function JugadSubmitForm({ onCreated }: Props) {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [toolName, setToolName] = useState("");
  const [jugadTitle, setJugadTitle] = useState("");
  const [description, setDescription] = useState("");
  const [steps, setSteps] = useState("");
  const [category, setCategory] = useState("");
  const [submittedBy, setSubmittedBy] = useState("");

  function reset() {
    setToolName("");
    setJugadTitle("");
    setDescription("");
    setSteps("");
    setCategory("");
    setSubmittedBy("");
    setSuccess(null);
    setError(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    setSubmitting(true);
    try {
      const stepsArr = steps
        .split(/\r?\n/)
        .map((s) => s.trim())
        .filter(Boolean);

      const res = await fetch("/api/jugads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          toolName,
          jugadTitle,
          description,
          steps: stepsArr,
          category,
          submittedBy,
        }),
      });

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data?.error ?? `Request failed (${res.status})`);
        return;
      }

      setSuccess("Your jugad has been added to the page!");
      reset();
      onCreated?.();
      setTimeout(() => {
        setSuccess(null);
        setOpen(false);
      }, 1800);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Network error");
    } finally {
      setSubmitting(false);
    }
  }

  if (!open) {
    return (
      <div className="text-center mb-10">
        <Button
          size="lg"
          variant="default"
          onClick={() => setOpen(true)}
          className="text-base"
        >
          <Plus className="mr-2 h-5 w-5" /> Submit a Jugad
        </Button>
        <p className="mt-3 text-sm text-text-muted">
          Share a smart workaround and it will appear on this page.
        </p>
      </div>
    );
  }

  return (
    <div className="mb-10 rounded-2xl border border-accent-violet/30 bg-surface p-6 sm:p-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-text-primary">Submit a Jugad</h3>
        <button
          aria-label="Close form"
          onClick={() => {
            setOpen(false);
            setError(null);
            setSuccess(null);
          }}
          className="rounded-lg p-2 text-text-muted hover:bg-surface-border/60 hover:text-text-primary"
        >
          <X className="h-4 w-4" />
        </button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">
              AI Tool Name <span className="text-accent-pink">*</span>
            </label>
            <input
              required
              maxLength={80}
              value={toolName}
              onChange={(e) => setToolName(e.target.value)}
              placeholder="e.g. ChatGPT, Midjourney, Notion AI"
              className="w-full rounded-xl border border-surface-border bg-background px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-violet focus:outline-none"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-1">
              Category (optional)
            </label>
            <input
              maxLength={40}
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g. Image Generation, Coding"
              className="w-full rounded-xl border border-surface-border bg-background px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-violet focus:outline-none"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-1">
            Jugad Title <span className="text-accent-pink">*</span>
          </label>
          <input
            required
            maxLength={120}
            value={jugadTitle}
            onChange={(e) => setJugadTitle(e.target.value)}
            placeholder="e.g. Use a temp email + Bing rewards to get GPT-4 free"
            className="w-full rounded-xl border border-surface-border bg-background px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-violet focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-1">
            Description <span className="text-accent-pink">*</span>
            <span className="ml-2 text-xs text-text-muted">({description.length}/600)</span>
          </label>
          <textarea
            required
            minLength={10}
            maxLength={600}
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Briefly explain what this jugad is and how it works."
            className="w-full rounded-xl border border-surface-border bg-background px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-violet focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-1">
            Steps (optional, one per line)
          </label>
          <textarea
            rows={4}
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            placeholder={"1. Sign up with a temp email\n2. Claim free credits\n3. ..."}
            className="w-full rounded-xl border border-surface-border bg-background px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-violet focus:outline-none"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-primary mb-1">
            Your Name (optional)
          </label>
          <input
            maxLength={60}
            value={submittedBy}
            onChange={(e) => setSubmittedBy(e.target.value)}
            placeholder="Anonymous"
            className="w-full rounded-xl border border-surface-border bg-background px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-violet focus:outline-none"
          />
        </div>

        {error && (
          <div className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-3 py-2 text-sm text-red-400">
            <AlertCircle className="h-4 w-4 mt-0.5 shrink-0" />
            <span>{error}</span>
          </div>
        )}
        {success && (
          <div className="flex items-start gap-2 rounded-xl border border-green-500/30 bg-green-500/10 px-3 py-2 text-sm text-green-400">
            <CheckCircle2 className="h-4 w-4 mt-0.5 shrink-0" />
            <span>{success}</span>
          </div>
        )}

        <div className="flex items-center justify-end gap-2 pt-2">
          <Button
            type="button"
            variant="outline"
            onClick={() => {
              setOpen(false);
              reset();
            }}
            disabled={submitting}
          >
            Cancel
          </Button>
          <Button type="submit" disabled={submitting}>
            {submitting ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Submitting...
              </>
            ) : (
              <>
                <Plus className="mr-2 h-4 w-4" /> Submit Jugad
              </>
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}