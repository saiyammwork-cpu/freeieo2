import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Saved AI Tools & Prompts | Freeieo",
  description:
    "Access your bookmarked AI tools and saved prompts. Quick access to your favorite free AI tools and website design prompts.",
  robots: {
    index: false,
    follow: true,
  },
  alternates: {
    canonical: "/saved",
  },
};

export default function SavedLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
