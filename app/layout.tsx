import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { ToastProvider } from "@/components/ui/toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "FREEIEO — Free AI tools for anything, found for you",
  description: "FREEIEO finds the best free and freemium AI tools for any task. Built by Saiyam Jain.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-background antialiased">
        <ToastProvider>
          <Navigation />
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}
