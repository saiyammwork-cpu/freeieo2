import type { Prompt } from "@/data/prompts";

export const promptCategories: { value: Prompt["category"] | "all"; label: string }[] = [
  { value: "all", label: "All Prompts" },
  { value: "landing-page", label: "Landing Pages" },
  { value: "portfolio", label: "Portfolios" },
  { value: "saas", label: "SaaS" },
  { value: "ecommerce", label: "E-commerce" },
  { value: "blog", label: "Blogs & Magazines" },
  { value: "dashboard", label: "Dashboards" },
  { value: "agency", label: "Agencies" },
  { value: "restaurant", label: "Restaurants" },
  { value: "resume", label: "Resume & Personal" },
  { value: "event", label: "Events & Conferences" },
  { value: "startup", label: "Startups & Waitlist" },
  { value: "nonprofit", label: "Nonprofits" },
  { value: "education", label: "Education & Courses" },
  { value: "mobile-app", label: "Mobile Apps" },
  { value: "newsletter", label: "Newsletters" },
];