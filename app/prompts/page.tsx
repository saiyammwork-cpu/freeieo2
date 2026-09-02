import type { Metadata } from "next";
import { PromptsClient } from "./PromptsClient";

export const metadata: Metadata = {
  title: "Free Website Design Prompts — FREEIEO",
  description:
    "Browse 15+ free, copy-paste prompts for building beautiful websites with v0, Cursor, Bolt, Lovable, Windsurf and more. Landing pages, SaaS, dashboards, portfolios, e-commerce and more.",
};

export default function PromptsPage() {
  return <PromptsClient />;
}