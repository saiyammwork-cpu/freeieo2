import { Metadata } from "next";

export const metadata: Metadata = {
  title: "5,000+ AI Tools Directory — Free & Paid | Freeieo",
  description:
    "Browse 5,000+ AI tools organized by category. Filter by pricing, tags, and use case. Find the best free AI tools for writing, coding, design, video, and more.",
  alternates: {
    canonical: "/ai-tools",
  },
};

export default function AiToolsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
