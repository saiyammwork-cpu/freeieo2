export type Prompt = {
  id: string;
  title: string;
  category:
    | "landing-page"
    | "portfolio"
    | "saas"
    | "ecommerce"
    | "blog"
    | "dashboard"
    | "agency"
    | "restaurant"
    | "resume"
    | "event"
    | "startup"
    | "nonprofit"
    | "education"
    | "mobile-app"
    | "newsletter";
  style: string;
  description: string;
  preview: string;
  tags: string[];
  difficulty: "Easy" | "Medium" | "Advanced";
  tool: "v0" | "Cursor" | "Bolt" | "Lovable" | "Windsurf" | "Any";
  free: boolean;
};

export const prompts: Prompt[] = [];