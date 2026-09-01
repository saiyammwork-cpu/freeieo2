import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { ToastProvider } from "@/components/ui/toast";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "FREEIEO — 5,000+ AI Tools & Websites Directory",
  description: "Discover 5000+ AI tools for writing, coding, design, marketing, video, productivity, automation and more. Find the best free and paid AI tools in one directory.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark`} suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground antialiased">
        <ThemeProvider>
          <ToastProvider>
            <Navigation />
            {children}
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
