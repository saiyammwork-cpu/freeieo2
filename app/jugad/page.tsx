import { Button } from "@/components/ui/button";
import {
  Lightbulb,
  ExternalLink,
  Calendar,
  Gift,
  GraduationCap,
  Cpu,
  Megaphone,
  Mail,
  CreditCard,
  AlertTriangle,
  Smartphone,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jugad — Smart Workarounds to Use AI Tools for Free | Freeieo",
  description:
    "Learn legitimate tricks to use freemium AI tools for free. Discover free trials, open-source alternatives, student plans, and smart workarounds by Saiyam Jain.",
  alternates: {
    canonical: "/jugad",
  },
  openGraph: {
    title: "Jugad — Smart Workarounds to Use AI Tools for Free | Freeieo",
    description:
      "Learn legitimate tricks to use freemium AI tools for free. Discover free trials, open-source alternatives, student plans, and smart workarounds.",
    url: "https://jainsaiyam.in/jugad",
    siteName: "Freeieo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jugad — Smart Workarounds to Use AI Tools for Free | Freeieo",
    description:
      "Learn legitimate tricks to use freemium AI tools for free. Discover free trials, open-source alternatives, student plans, and smart workarounds.",
  },
};

const methods = [
  {
    title: "Free Trials",
    description:
      "Many AI platforms offer 7-day, 14-day, or 30-day trials. Use the trial period to test premium models and features before deciding whether to subscribe.",
    icon: <Calendar className="h-6 w-6 text-accent-cyan" />,
    accent: "from-accent-cyan/10 to-transparent",
  },
  {
    title: "Free Credits",
    description:
      "Some AI tools provide monthly or one-time free credits for new users. Use these credits for premium models, image generation, video generation, APIs, and more.",
    icon: <Gift className="h-6 w-6 text-accent-pink" />,
    accent: "from-accent-pink/10 to-transparent",
  },
  {
    title: "Student / Education Plans",
    description:
      "If you're eligible, check whether the AI service offers student or education discounts/free access. Some platforms provide significantly increased limits to verified students.",
    icon: <GraduationCap className="h-6 w-6 text-accent-violet" />,
    accent: "from-accent-violet/10 to-transparent",
  },
  {
    title: "Free Open-Source Alternatives",
    description:
      "Instead of bypassing a premium AI service, use open-source models through platforms such as Ollama, LM Studio, Hugging Face, or local AI apps. Many models can run completely free on your own PC.",
    icon: <Cpu className="h-6 w-6 text-accent-cyan" />,
    accent: "from-accent-cyan/10 to-transparent",
  },
  {
    title: "Official Promotions & Giveaways",
    description:
      "AI companies sometimes provide temporary premium access, promotional credits, referral rewards, hackathon credits, or launch offers. These are legitimate ways to try premium features without paying.",
    icon: <Megaphone className="h-6 w-6 text-accent-pink" />,
    accent: "from-accent-pink/10 to-transparent",
  },
  {
    title: "Temporary / Disposable Email — With Restrictions",
    description:
      "A temporary email can be useful for testing services that explicitly allow multiple trial accounts or don't prohibit disposable addresses. However, don't use it to repeatedly create accounts, evade usage limits, bypass payment requirements, or violate a platform's Terms of Service.",
    icon: <Mail className="h-6 w-6 text-accent-violet" />,
    accent: "from-accent-violet/10 to-transparent",
  },
];

const resources = [
  {
    title: "Test Cards",
    description:
      "Developer/payment testing card numbers used in sandbox environments — never for unlocking paid AI subscriptions.",
    icon: <CreditCard className="h-5 w-5 text-accent-cyan" />,
  },
  {
    title: "Temporary Mobile Numbers",
    description:
      "Disposable phone numbers for receiving one-time SMS verification codes during sign-ups.",
    icon: <Smartphone className="h-5 w-5 text-accent-pink" />,
  },
  {
    title: "Temporary Emails",
    description:
      "Short-lived email addresses for testing services that allow disposable addresses.",
    icon: <Mail className="h-5 w-5 text-accent-violet" />,
  },
];

export default function JugadPage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-accent-pink/10 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-5xl px-4 pt-20 pb-10 text-center sm:pt-24 sm:pb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-surface-border bg-surface px-4 py-1.5 text-xs sm:text-sm text-text-muted">
            <Lightbulb className="h-4 w-4 text-accent-pink" />
            Desi Jugaad · Smart Workarounds
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">
            <span className="bg-gradient-to-r from-accent-violet to-accent-pink bg-clip-text text-transparent">
              Jugad
            </span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-text-muted max-w-2xl mx-auto px-2">
            Learn how to use <strong className="text-text-primary">freemium</strong> and{" "}
            <strong className="text-text-primary">premium</strong> AI tools for free using
            legitimate tricks, open-source alternatives, and smart workarounds.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12">
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
          {methods.map((method, idx) => (
            <div
              key={idx}
              className={`relative overflow-hidden rounded-2xl border border-surface-border bg-surface p-6 transition-all hover:border-accent-violet/30 hover:shadow-lg hover:shadow-accent-violet/10`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${method.accent} opacity-50`} />
              <div className="relative">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-surface-border/60">
                  {method.icon}
                </div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-12">
        <div className="rounded-2xl border border-accent-pink/30 bg-gradient-to-br from-accent-pink/10 via-surface to-accent-violet/10 p-5 sm:p-6 sm:p-10">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="h-6 w-6 text-accent-pink" />
            <h2 className="text-2xl font-bold text-text-primary">Important Warning</h2>
          </div>
          <p className="text-text-muted leading-relaxed">
            I wouldn't recommend using <strong className="text-text-primary">fake/test credit cards to unlock paid AI subscriptions</strong> or bypass billing.
            Test card numbers are intended for developer/payment testing environments, not for obtaining real premium services for free.
            Stay ethical — use these tricks only where allowed by the platform's Terms of Service.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-16">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-text-primary">
            Learn <span className="gradient-text">Much More</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-text-muted max-w-2xl mx-auto px-2">
            Discover more workarounds, test cards, temporary mobile numbers, temporary
            emails, and step-by-step tutorials on jainsaiyam.in.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {resources.map((res, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-surface-border bg-surface p-5"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-surface-border/60">
                {res.icon}
              </div>
              <h3 className="font-semibold text-text-primary mb-1">{res.title}</h3>
              <p className="text-sm text-text-muted">{res.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-surface-border bg-surface p-8 text-center">
          <Lightbulb className="mx-auto h-10 w-10 text-accent-pink mb-4" />
          <h2 className="text-2xl font-bold text-text-primary mb-2">
            Want the full Jugad playbook?
          </h2>
          <p className="text-text-muted mb-6 max-w-xl mx-auto">
            Explore advanced workarounds, hacks, and step-by-step guides to use any AI tool for free.
          </p>
          <a
            href="https://jainsaiyam.in"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button size="lg" variant="default">
              Visit jainsaiyam.in <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </a>
        </div>

        <div className="mt-10 text-center">
          <a href="https://jainsaiyam.in" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline">
              Visit jainsaiyam.in <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
}