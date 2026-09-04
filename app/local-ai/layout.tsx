import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Local AI Tools — Open Source & Offline | Freeieo",
  description:
    "Discover the best local AI tools that run on your computer. Private, offline-capable, open-source alternatives to cloud AI.",
  alternates: {
    canonical: "/local-ai",
  },
};

export default function LocalAiLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
