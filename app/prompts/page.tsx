import type { Metadata } from "next";
import { PromptsClient } from "./PromptsClient";

export const metadata: Metadata = {
  title: "Free Website Design Prompts — v0, Cursor, Bolt, Lovable | Freeieo",
  description:
    "Browse 15+ free, copy-paste prompts for building beautiful websites with v0, Cursor, Bolt, Lovable, Windsurf and more. Landing pages, SaaS, dashboards, portfolios, e-commerce and more.",
  alternates: {
    canonical: "/prompts",
  },
  openGraph: {
    title: "Free Website Design Prompts — v0, Cursor, Bolt, Lovable | Freeieo",
    description:
      "Browse 15+ free, copy-paste prompts for building beautiful websites with v0, Cursor, Bolt, Lovable, Windsurf and more.",
    url: "https://jainsaiyam.in/prompts",
    siteName: "Freeieo",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free Website Design Prompts — v0, Cursor, Bolt, Lovable | Freeieo",
    description:
      "Browse 15+ free, copy-paste prompts for building beautiful websites with v0, Cursor, Bolt, Lovable, Windsurf and more.",
  },
};

export default function PromptsPage() {
  return (
    <main>
      <PromptsClient />
    </main>
  );
}