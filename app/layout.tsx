import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Navigation } from "@/components/navigation";
import { ToastProvider } from "@/components/ui/toast";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://jainsaiyam.in"),
  title: {
    default: "Freeieo — 5,000+ AI Tools & Websites Directory",
    template: "%s | Freeieo",
  },
  description:
    "Discover 5,000+ AI tools for writing, coding, design, marketing, video, productivity, automation and more. Find the best free and paid AI tools in one directory by Saiyam Jain.",
  keywords: [
    "AI tools",
    "free AI tools",
    "AI directory",
    "online tools",
    "productivity tools",
    "AI for students",
    "AI for creators",
    "AI for business",
    "vibe coding tools",
    "AI website builders",
    "AI presentation tools",
    "AI video tools",
    "AI image tools",
    "AI writing tools",
    "open source AI tools",
    "free software tools",
    "Saiyam Jain",
    "Freeieo",
  ],
  authors: [{ name: "Saiyam Jain", url: "https://jainsaiyam.in" }],
  creator: "Saiyam Jain",
  publisher: "Saiyam Jain",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://jainsaiyam.in",
    siteName: "Freeieo",
    title: "Freeieo — 5,000+ AI Tools & Websites Directory",
    description:
      "Discover 5,000+ AI tools for writing, coding, design, marketing, video, productivity, automation and more.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Freeieo — 5,000+ AI Tools & Websites Directory",
    description:
      "Discover 5,000+ AI tools for writing, coding, design, marketing, video, productivity, automation and more.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fafafa" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f12" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <meta name="monetag" content="89ea6593fa76921c47d3c190a566a2bd" />
        <script
          id="aclib"
          type="text/javascript"
          src="//acscdn.com/script/aclib.js"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `aclib.runInPagePush({ zoneId: "12108522", maxAds: 2 });`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Freeieo",
              url: "https://jainsaiyam.in",
              description:
                "Discover 5,000+ AI tools for writing, coding, design, marketing, video, productivity, automation and more.",
              publisher: {
                "@type": "Person",
                name: "Saiyam Jain",
                url: "https://jainsaiyam.in",
              },
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate: "https://jainsaiyam.in/ai-tools?search={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}else{document.documentElement.classList.remove('dark');document.documentElement.style.colorScheme='light';}}catch(e){}})();`,
          }}
        />
      </head>
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
