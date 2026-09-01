import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, BookOpen, Code2, Sparkles, GraduationCap, Play } from "lucide-react";

const courses = [
  {
    title: "Learn AI & Prompt Engineering",
    description: "Master AI tools, prompt writing, and automation workflows from scratch.",
    url: "https://jainsaiyam.in",
    icon: <Sparkles className="h-6 w-6 text-accent-pink" />,
    badge: "Popular",
  },
  {
    title: "Vibe Coding Masterclass",
    description: "Learn how to build full-stack apps using AI coding assistants and modern stacks.",
    url: "https://jainsaiyam.in",
    icon: <Code2 className="h-6 w-6 text-accent-cyan" />,
    badge: "New",
  },
  {
    title: "AI for Creators & Founders",
    description: "Use AI to ship faster, design better, and grow your business with less effort.",
    url: "https://jainsaiyam.in",
    icon: <GraduationCap className="h-6 w-6 text-accent-violet" />,
    badge: "Free",
  },
];

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-5xl px-4 py-20">
        <div className="text-center mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-4 py-1.5 text-sm text-text-muted">
            <BookOpen className="h-4 w-4 text-accent-violet" />
            Learn by doing
          </div>
          <h1 className="text-4xl font-bold text-text-primary sm:text-5xl">
            Learn <span className="gradient-text">AI & Vibe Coding</span>
          </h1>
          <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
            Practical courses and tutorials to help you master AI tools, prompt engineering, and modern AI-powered development.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-surface-border bg-surface p-6 transition-all hover:border-accent-violet/30 hover:shadow-lg hover:shadow-accent-violet/10"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-surface-border/60">
                  {course.icon}
                </div>
                <span className="rounded-full bg-gradient-to-r from-accent-violet to-accent-pink px-3 py-1 text-xs font-medium text-white">
                  {course.badge}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">{course.title}</h3>
              <p className="text-sm text-text-muted mb-6">{course.description}</p>
              <a href={course.url} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full" variant="default">
                  Start Learning <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-surface-border bg-surface p-8 text-center">
          <Play className="mx-auto h-10 w-10 text-accent-pink mb-4" />
          <h2 className="text-2xl font-bold text-text-primary mb-2">Prefer video lessons?</h2>
          <p className="text-text-muted mb-6 max-w-xl mx-auto">
            Dive deeper with step-by-step tutorials on AI tools, automation, and vibe coding workflows.
          </p>
          <a href="https://jainsaiyam.in" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="default">
              Browse All Courses <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
