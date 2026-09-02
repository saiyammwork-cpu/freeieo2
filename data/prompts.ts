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

export const prompts: Prompt[] = [
  {
    id: "minimal-saas-landing",
    title: "Minimal SaaS Landing Page",
    category: "saas",
    style: "Clean · White · Inter font",
    description:
      "A conversion-focused SaaS landing page with a hero, features grid, social proof, pricing, and footer CTA.",
    preview:
      "Build a minimal SaaS landing page using a white background, Inter font, soft shadows, and a gradient accent. Include: sticky nav with logo + 4 links + CTA, hero with H1, subhead, primary + secondary CTA and a product screenshot mockup, social proof logo row, 3-column features grid with icons, 2-column testimonial section, 3-tier pricing table, FAQ accordion with 5 questions, and a final CTA banner. Use rounded-2xl cards, generous whitespace, and subtle hover effects.",
    tags: ["landing", "saas", "minimal", "white"],
    difficulty: "Easy",
    tool: "v0",
    free: true,
  },
  {
    id: "dark-portfolio",
    title: "Dark Mode Developer Portfolio",
    category: "portfolio",
    style: "Dark · Neon · Mono font",
    description:
      "An aesthetic developer portfolio with terminal vibes, neon accents, and a project showcase.",
    preview:
      "Create a developer portfolio in pure dark mode (#0a0a0a background). Use JetBrains Mono for code and Inter for body. Include: top nav with smooth-scroll links, hero with large name, animated typing effect for role, CTA buttons, an 'About' section with avatar and skill pills, a featured projects grid (3 cards) with tech-stack tags and GitHub/live links, an experience timeline, and a contact form with email + socials. Add subtle gradient glow (purple-to-cyan) on hover and a terminal-style cursor animation in the hero.",
    tags: ["portfolio", "dark", "developer", "neon"],
    difficulty: "Medium",
    tool: "Cursor",
    free: true,
  },
  {
    id: "agency-hero-gradient",
    title: "Creative Agency Hero with Gradient",
    category: "agency",
    style: "Bold · Gradient · Display font",
    description:
      "A bold creative-agency website with a giant animated gradient hero and case-study cards.",
    preview:
      "Design a creative agency homepage with a fullscreen hero that has a giant animated mesh-gradient background (violet, pink, cyan), an oversized headline in a display font (e.g. Space Grotesk), a marquee tag row of client logos below, a 2-column 'About' section with stats (e.g. 120+ projects, 40+ clients), a 'Selected Work' grid with 4 case-study cards (image + title + tag), a services section with 6 icon-led tiles, testimonials carousel, and a footer with newsletter signup. Use motion: fade-in on scroll and a slow rotating gradient on the hero.",
    tags: ["agency", "gradient", "bold", "creative"],
    difficulty: "Medium",
    tool: "v0",
    free: true,
  },
  {
    id: "ecommerce-storefront",
    title: "Modern E-commerce Storefront",
    category: "ecommerce",
    style: "Bright · Product-first · Sans",
    description:
      "A clean product-first storefront with category nav, hero banner, product grid and quick-view.",
    preview:
      "Build an e-commerce homepage: top utility bar (free shipping, currency), main nav with logo, search, account, cart icons and a mega-menu for categories. Hero with full-bleed image, large headline, CTA and small product thumbnails. Below: 'Shop by category' tile row (4 tiles), 'New arrivals' product grid (8 cards with image, name, price, color swatches, 'Add to cart' on hover), an 'Editor's picks' editorial split, brand story strip, and footer with newsletter + payment icons. Use rounded cards, soft shadows, and a neutral background (off-white).",
    tags: ["ecommerce", "shop", "products", "storefront"],
    difficulty: "Advanced",
    tool: "Lovable",
    free: true,
  },
  {
    id: "blog-magazine",
    title: "Editorial Blog / Magazine",
    category: "blog",
    style: "Editorial · Serif · Bordered",
    description:
      "A typography-driven blog or online magazine layout and individual article page.",
    preview:
      "Design an editorial blog: top header (date, issue number, subscribe button), featured story in a 2-column hero with large image and headline, 'Latest' grid (1 large + 4 small), category tabs (Tech, Culture, Business), a 'Most read' sidebar list with numbers, an author spotlight card, a newsletter signup mid-page, and a minimal footer. Article page should have a long-form serif body (e.g. Source Serif), pull quotes, inline images with captions, related-articles grid, and a sticky share rail on the left.",
    tags: ["blog", "editorial", "magazine", "typography"],
    difficulty: "Medium",
    tool: "Any",
    free: true,
  },
  {
    id: "analytics-dashboard",
    title: "SaaS Analytics Dashboard",
    category: "dashboard",
    style: "Data-dense · Light sidebar · Cards",
    description:
      "A complete analytics dashboard with sidebar nav, KPI cards, charts, and a data table.",
    preview:
      "Build a SaaS analytics dashboard. Left sidebar with logo, nav (Overview, Customers, Reports, Integrations, Settings), user avatar at the bottom. Main area: top bar with breadcrumb, search, notifications, 'Export' button. Row of 4 KPI cards (revenue, users, conversion, churn) with sparklines. Two-column charts: a large line/area chart for revenue over time, a bar chart for top channels. Below: a tabbed data table (Customers | Orders | Subscriptions) with sortable columns, search, pagination, and a status pill. Use a light theme with a colored left sidebar, rounded cards, and subtle borders.",
    tags: ["dashboard", "analytics", "data", "admin"],
    difficulty: "Advanced",
    tool: "Cursor",
    free: true,
  },
  {
    id: "cozy-restaurant",
    title: "Cozy Restaurant Website",
    category: "restaurant",
    style: "Warm · Serif · Photo-led",
    description:
      "A warm, photo-led restaurant site with menu, reservations and story sections.",
    preview:
      "Create a restaurant website with a warm color palette (cream, terracotta, deep green) and a serif display font (e.g. Playfair). Sections: fullscreen hero with a food photo, restaurant name, tagline and 'Reserve a table' CTA; 'Our story' 2-column with image and text; menu tabs (Starters, Mains, Desserts, Drinks) with prices; a 'Today's specials' card row; gallery masonry; chef's quote section; opening hours and map; reservation form with date/time/guests; and a footer with address, phone and Instagram grid. Use soft shadows and rounded image masks (rounded-3xl).",
    tags: ["restaurant", "food", "warm", "serif"],
    difficulty: "Easy",
    tool: "v0",
    free: true,
  },
  {
    id: "resume-personal-site",
    title: "Single-Page Resume / Personal Site",
    category: "resume",
    style: "Compact · Card-based · Mono accents",
    description:
      "A one-page personal site that doubles as an interactive resume with skills, work and contact.",
    preview:
      "Build a single-page personal site/resume. Top: avatar, name, role, location, 'Download CV' and 'Contact' buttons, social icons (GitHub, LinkedIn, X, Email). Sections: short 'About me' paragraph, 'Skills' as tag chips grouped by category (Languages, Frameworks, Tools), 'Experience' as a vertical timeline with company, role, dates, and bullet points, 'Selected projects' (3 cards with image, title, description, links), 'Education' list, and a minimal footer. Use a 2-column layout on desktop (sticky left summary, scrollable right content) and a single column on mobile.",
    tags: ["resume", "personal", "cv", "minimal"],
    difficulty: "Easy",
    tool: "Any",
    free: true,
  },
  {
    id: "conference-event",
    title: "Conference / Event Website",
    category: "event",
    style: "Bold · Countdown · Ticket tiers",
    description:
      "An event site with a countdown timer, speakers, schedule and ticket tiers.",
    preview:
      "Design a conference website. Hero with event name, dates, location, a live countdown timer (days/hours/min/sec), and 'Get tickets' CTA. Below: 3 ticket-tier cards (Early bird, Standard, VIP) with feature lists and 'Buy' CTA. Sections: 'Speakers' grid (8 cards with photo, name, role, company, socials), 'Schedule' as a tabbed multi-track timetable (Day 1 / Day 2 / Day 3) with time, talk title, speaker, track tag, 'Venue' section with map and travel info, 'Sponsors' tiered logo wall, FAQ, and a final CTA. Use a bold accent color (e.g. electric blue) on a near-white background.",
    tags: ["event", "conference", "tickets", "speakers"],
    difficulty: "Medium",
    tool: "Lovable",
    free: true,
  },
  {
    id: "startup-pitch",
    title: "Startup Pre-Launch / Waitlist",
    category: "startup",
    style: "Sleek · Animated · Glassmorphism",
    description:
      "A pre-launch startup site with a waitlist form, animated visuals and a 'coming soon' vibe.",
    preview:
      "Build a pre-launch startup landing page. Glassmorphism navbar with logo + 'Join waitlist' button. Hero with a floating glass card containing the headline, 1-line pitch, email input + CTA, and a small social proof line ('Join 2,400+ on the waitlist'). Behind it, an animated gradient blob background (slow drift). Sections: 'Why now' 3-column with icons, 'How it works' 3-step row, 'What you'll get' bullet list, FAQ accordion (5 Qs), and a final CTA card. Add a subtle noise/grain texture. Mobile-first, single column.",
    tags: ["startup", "waitlist", "prelaunch", "glass"],
    difficulty: "Easy",
    tool: "Bolt",
    free: true,
  },
  {
    id: "nonprofit-donate",
    title: "Nonprofit / Donation Website",
    category: "nonprofit",
    style: "Hopeful · Photo-led · Warm",
    description:
      "A nonprofit homepage with mission, impact stats, stories and a prominent donate flow.",
    preview:
      "Design a nonprofit website. Top nav with logo, links, and a prominent 'Donate' button. Hero with a powerful photo, mission headline, 1-line description, and dual CTAs ('Donate now' / 'Our work'). 'Impact in numbers' row of 4 stats (lives impacted, projects, countries, volunteers). 'Our causes' 3-card grid with image, title, progress bar and 'Donate to this cause' button. 'Stories from the field' 2-column feature with photo and quote. 'Get involved' 3-tile row (Donate, Volunteer, Partner). Footer with contact, social and a small newsletter form. Earthy palette (forest green, sand, cream).",
    tags: ["nonprofit", "donate", "charity", "impact"],
    difficulty: "Medium",
    tool: "Any",
    free: true,
  },
  {
    id: "online-course",
    title: "Online Course / Coaching",
    category: "education",
    style: "Friendly · Card-based · Bright",
    description:
      "An online course landing page with curriculum, instructor, testimonials and pricing.",
    preview:
      "Build an online course landing page. Hero with course title, instructor photo and name, rating (★★★★★ + count), short value pitch, primary 'Enroll now — $X' CTA and secondary 'Watch intro' button. Sections: 'What you'll learn' 2-column checklist (8 bullets with check icons), 'Curriculum' accordion (6 modules with lesson lists and durations), 'Your instructor' card with bio + credentials, 'Student testimonials' carousel with avatars and 5-star quotes, 3-tier pricing (Basic / Pro / Mentor) with feature lists and 'Choose plan', FAQ, money-back guarantee badge, and footer.",
    tags: ["course", "education", "teaching", "coaching"],
    difficulty: "Medium",
    tool: "v0",
    free: true,
  },
  {
    id: "app-landing",
    title: "Mobile App Landing Page",
    category: "mobile-app",
    style: "Vibrant · Phone mockup · Gradient",
    description:
      "A vibrant mobile-app landing page with a phone mockup, features, and app-store buttons.",
    preview:
      "Create a mobile app landing page. Top nav with logo + 'Download' CTA. Hero with a 2-column layout: left has app name, 1-line tagline, 'Available on' App Store + Google Play buttons, a 5-star rating row, and a small 'as featured in' logo row; right has an angled phone mockup showing the app UI (use a gradient screen mock, not a real image). Sections: 'Features' 6-tile grid with icons and short copy, 'How it works' 3 steps with numbered circles, 'Screenshots' horizontal scroll row (4-5 screens), 'Reviews' testimonial cards, pricing/plans, FAQ, and footer. Vibrant gradient accents (purple → pink → orange).",
    tags: ["app", "mobile", "landing", "product"],
    difficulty: "Medium",
    tool: "Bolt",
    free: true,
  },
  {
    id: "newsletter-substack",
    title: "Newsletter / Substack-style Site",
    category: "newsletter",
    style: "Reader-first · Serif · Quiet",
    description:
      "A reader-first newsletter site with latest issue, archive, author bio and subscribe CTA.",
    preview:
      "Build a Substack-style newsletter site. Top: minimal nav with publication name, 'Archive', 'About', and a 'Subscribe' button. Hero with publication name, tagline, author avatar + name, and a Subscribe card (email input + Free / Paid toggle with prices). 'Latest issue' featured post with cover image, title, 2-line dek, read-time and 'Read' button. 'Recent posts' list (6 items: date, read-time, title, 1-line summary). 'About the author' 2-column section. 'From the archive' 3-card grid. Footer with RSS, Twitter, contact, and a final Subscribe CTA. Use a serif body font and a quiet, paper-like background.",
    tags: ["newsletter", "substack", "writing", "reader"],
    difficulty: "Easy",
    tool: "Any",
    free: true,
  },
  {
    id: "pricing-comparison",
    title: "Pricing Page with Comparison Table",
    category: "saas",
    style: "Comparison · Toggle · Highlighted plan",
    description:
      "A dedicated pricing page with monthly/yearly toggle, comparison table and FAQs.",
    preview:
      "Design a SaaS pricing page. Header with 'Simple, transparent pricing' headline, subhead, and a Monthly / Yearly toggle (with 'Save 20%' badge on yearly). Below: 3 pricing tiers (Starter, Pro — highlighted, Team) with name, price, short tagline, feature bullet list with checkmarks, and a 'Get started' button per card. Below the cards: a full comparison table with feature rows grouped by category (Usage, Collaboration, Security, Support) and checkmark/dash cells per plan, with a sticky plan header on scroll. Add FAQ accordion (6 Qs) and a 'Still have questions? Talk to sales' card. Clean white background, single accent color, rounded-2xl cards.",
    tags: ["pricing", "saas", "comparison", "table"],
    difficulty: "Medium",
    tool: "Windsurf",
    free: true,
  },
];