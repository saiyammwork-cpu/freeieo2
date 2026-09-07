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
  previewImage?: string;
  tags: string[];
  difficulty: "Easy" | "Medium" | "Advanced";
  tool: "v0" | "Cursor" | "Bolt" | "Lovable" | "Windsurf" | "Any";
  free: boolean;
};

export const prompts: Prompt[] = [
  {
    id: "cyber-robb-hero",
    title: "Cyber-Robb // Neural Edges — Futuristic AI Hero",
    category: "landing-page",
    style: "Cyberpunk · Burnt orange · Cinematic · Single file",
    description:
      "A premium futuristic cyberpunk hero for an AI/robotics product called CYBER-ROBB. Gunmetal robot on the right looking left, dark burnt-orange atmosphere, glassmorphism UI, cursor-spotlight reveal, word-by-word heading animation, scroll-reveal specs. Output is a single self-contained HTML file.",
    previewImage: "/prompts/cyber-robb-preview.png",
    preview: `Create a single self-contained HTML file (index.html) — a full-viewport futuristic cyberpunk hero section called "Cyber-Robb". No frameworks, no build tools: use one file with inline <style> and inline <script>.

The page should feel like a premium futuristic AI/robotics product website — cinematic, dark orange, metallic, sophisticated, minimal, and highly interactive.

Page <title>: Cyber-Robb // Neural Edges

FONTS
- Orbitron-Medium via https://db.onlinewebfonts.com/c/b1314443e183d1cdd77049077c46facc?family=Orbitron-Medium
- Google Fonts Inter (weights 300, 400, 500, 600)
- Body font: 'Inter', system-ui, -apple-system, sans-serif
- All h1/h2/h3 and .heading-font: 'Orbitron-Medium', 'Arial Narrow', sans-serif
- Font weight: 400, letter-spacing: 0.02em
- Preconnect to https://fonts.googleapis.com and https://fonts.gstatic.com

COLORS / CSS VARIABLES
:root {
  --cream: #FBDBAF;
  --muted: rgba(251, 219, 175, 0.72);
  --label: rgba(251, 219, 175, 0.48);
  --orange: #E07020;
  --card: rgba(10, 8, 7, 0.58);
}
- HTML/body background: #C45A18
- Text color: var(--cream)
- overflow-x: hidden
Palette: burnt orange, dark bronze, black, warm cream, subtle glowing orange, metallic gunmetal, cinematic shadows.

HERO CHARACTER — CYBER-ROBB
- High-end futuristic humanoid robot (NOT a human boy / samurai / ronin / human face)
- Realistic cinematic 3D, gunmetal/black metallic body, sophisticated mechanical armor, exposed mechanical details around neck and joints
- Subtle orange glowing elements, futuristic robotic head, glowing orange/red optical eye or visor
- Sleek aerodynamic silhouette, premium industrial design, realistic reflections, subtle scratches and wear
- Powerful but elegant; no cartoon, no anime, no human skin, no human facial features
- Positioned on the RIGHT side of the screen, looking toward the LEFT, head clearly turned left in side / three-quarter profile
- Robot occupies a large portion of the right side without covering the UI

IMAGE ASSETS (use as CSS background-image URLs)
- Base hero: https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260831_115955_2a9adb39-5e9b-4ced-96e2-6900eabe3de9.png&w=1920&q=85
- Reveal hero (cursor spotlight): https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260831_123709_183f0065-efb2-4bb2-a849-13aaa5af2f3f.png&w=1920&q=85
- Product card thumbnail: https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260831_121937_3f02b5a0-5b86-43d9-b30e-03c5e46632e7.png&w=1920&q=85
If the images contain a human/helmeted character, reinterpret or replace that character with Cyber-Robb.

PAGE STRUCTURE
<main class="hero">
- width: 100%, height: 100vh (and 100dvh), position: relative, overflow: hidden, background: #C45A18

1. BASE HERO IMAGE
<div class="hero-base-img hero-image-animate"></div>
absolute, inset: 0, z-index: 1, background-size: cover, background-position: center, use BASE HERO IMAGE, cinematic entrance animation.

2. CURSOR REVEAL IMAGE
<div class="hero-reveal-img" id="reveal-img"></div>
absolute, inset: 0, z-index: 2, pointer-events: none, background-size: cover, background-position: center, use REVEAL HERO IMAGE. Initial mask: radial-gradient(circle 0px at -999px -999px, #fff, transparent). Reveal on cursor move only.

3. HERO UI
<div class="hero-ui">
absolute, inset: 0, z-index: 8, display: grid, grid-template-columns: 1fr 1fr, grid-template-rows: auto 1fr auto, padding: 36px 44px 40px, pointer-events: none. Interactive children re-enable pointer events.

HERO LEFT SIDE
<div class="hero-left">
grid-column: 1, grid-row: 1 / -1, display: flex, flex-direction: column, justify-content: space-between, align-items: flex-start, gap: 28px, min-width: 0.

HERO COPY
<div class="hero-copy">
max-width: 520px, padding-right: 56px, pointer-events: auto.

H1 (class="words-pull-up"):
  <span>CYBER-ROBB //</span>
  <span>BUILT.</span>
  <span>BEYOND.</span>
  <span>LIMITS.</span>
font-size: clamp(1.55rem, 3.6vw, 3.15rem), line-height: 1.05, uppercase, color: var(--cream), text-shadow: 0 2px 28px rgba(0,0,0,0.22). Each direct <span> is display: block; animate word-by-word.

Description (class="fade-up-reveal" data-delay="0.5"):
"Engineered with a next-generation AI core and a precision neural frame for machines that don't just process the future—they become it. Meet Cyber-Robb."
margin-top: 18px, max-width: 340px, font-size: 13.5px, font-weight: 400, line-height: 1.55, color: var(--muted).

ICON ROW
<div class="icon-row fade-up-reveal" data-delay="0.65">
display: flex, gap: 10px, margin-top: 22px.
Three round buttons <button class="icon-btn"> (38x38, border-radius: 50%, border 1px solid rgba(251,219,175,0.55), transparent bg, color var(--cream), hover bg rgba(251,219,175,0.1) and border-color var(--cream)). Each contains a 16x16 inline SVG:
1) CORE — hexagon M8 1.4L13.8 4.7V11.3L8 14.6L2.2 11.3V4.7L8 1.4Z + filled circle cx=8 cy=8 r=1.35
2) VISION — four corner brackets M2 5.2V2h3.2 / M14 5.2V2h-3.2 / M2 10.8V14h3.2 / M14 10.8V14h-3.2 + center rect x=5.2 y=5.2 w=5.6 h=5.6
3) FORCE — lightning bolt M9.2 1.6L4 9.1h3.5L6.8 14.4 12 6.9H8.5L9.2 1.6Z (stroke currentColor, stroke-width 1.2)

CYBER-ROBB PRODUCT CARD
<article class="product-card">
pointer-events: auto, width: min(320px, 100%), display: grid, grid-template-columns: 86px 1fr, grid-template-rows: auto auto, gap: 10px 14px, padding: 12px, border-radius: 18px, background: var(--card), backdrop-filter: blur(18px), -webkit-backdrop-filter: blur(18px), border: 1px solid rgba(251,219,175,0.08), box-shadow: 0 18px 50px rgba(0,0,0,0.28).

<div class="product-thumb"> — grid-column 1, grid-row 1 / -1, 86px, min-height 86px, border-radius 12px, overflow hidden, background-size cover, background-position center, use PRODUCT CARD THUMBNAIL, aria-hidden true.

<div class="product-body">
- Heading: "CR-01: CYBER-ROBB" — font-size 11px, line-height 1.25, uppercase, color var(--cream)
- Description: "Autonomous AI robotics platform with adaptive intelligence and precision-grade neural systems." — margin-top 6px, font-size 11.5px, line-height 1.45, color var(--muted)

<button class="cart-btn fade-up-reveal" data-delay="1.15">Meet Cyber-Robb</button>
grid-column 2, grid-row 2, justify-self start, align-self end, border 1px solid var(--cream), border-radius 999px, padding 7px 16px, font-size 12px, font-weight 500, color var(--cream), transparent bg, transition on border-color/color/transform 0.2s, hover translateY(-1px).

PAGE INDICATOR
<div class="hero-page">01 / 26</div>
absolute, top: 36px, right: 44px, class="fade-up-reveal", data-delay="0.75", font-size 13px, letter-spacing 0.08em, color rgba(251,219,175,0.78).

OPERATIVE SPECS
<div class="specs">
grid-column 2, grid-row 3, justify-self end, pointer-events auto, width: min(340px, 100%).
Heading "Cyber-Robb Specs": font-size 11px, uppercase, margin-bottom 14px, letter-spacing 0.12em.
Four .spec-row elements: display flex, justify-content space-between, align-items baseline, gap 16px, padding 7px 0, adjacent rows border-top 1px solid rgba(251,219,175,0.12). Each row has .fade-up-reveal with delays 1.2 / 1.3 / 1.4 / 1.5.
Rows:
  Core      — Neural AI X1
  Frame     — Titanium Adaptive Shell
  Reflex    — 144Hz Predictive Response
  Power     — Quantum Cell Matrix
.spec-label: font-size 11px, letter-spacing 0.08em, uppercase, color var(--label).
.spec-value: font-size 12.5px, color var(--cream), text-align right, white-space nowrap.

VISUAL TREATMENT OF CYBER-ROBB
Add: cinematic orange rim lighting, metallic reflections, atmospheric haze, subtle orange glow around robotic optics, dark shadows, soft depth-of-field, slight film grain if achievable in CSS, subtle vignette, futuristic orange light bloom. Cyber-Robb stays the main visual focus; gaze clearly points to the left-side text.

ANIMATIONS
1) @keyframes heroImageIn { from {opacity:0; transform:scale(1.18);} to {opacity:1; transform:scale(1);} }
   .hero-image-animate { animation: heroImageIn 1.2s cubic-bezier(0.25,0.46,0.45,0.94) forwards; animation-delay: 0.15s; opacity: 0; }

2) @keyframes wordPullUp { from {opacity:0; transform:translateY(20px);} to {opacity:1; transform:translateY(0);} }
   .pull-word { display: inline-block; opacity: 0; transform: translateY(20px); margin-right: 0.3em (non-last); }
   When parent gets .words-visible: animation wordPullUp 0.55s ease forwards; stagger by index * 0.1s.

3) @keyframes fadeUp { from {opacity:0; transform:translateY(14px); filter:blur(8px);} to {opacity:1; transform:translateY(0); filter:blur(0);} }
   .fade-up-reveal starts hidden/blurred. .is-visible runs fadeUp 0.7s ease forwards; animationDelay = data-delay.

REDUCED MOTION
@media (prefers-reduced-motion: reduce) { * { animation: none !important; opacity: 1 !important; transform: none !important; filter: none !important; } }

JAVASCRIPT (vanilla, IIFE, no libs)
1) Cursor spotlight reveal
- Listen window mousemove and touchmove (passive: true, touches[0])
- Compute position relative to #reveal-img using its bounding rect
- Update webkitMaskImage + maskImage with:
  radial-gradient(circle Rpx at Xpx Ypx, #fff 0%, #fff 40%, rgba(255,255,255,0.75) 60%, rgba(255,255,255,0.4) 75%, rgba(255,255,255,0.12) 88%, transparent 100%)
- Radius: <480px → 120px; <720px → 160px; otherwise 260px

2) Word splitting
- For every .words-pull-up, split text into words and wrap each in <span class="pull-word">
- animation-delay = index * 0.1s
- For H1, detect direct child spans and treat each as a separate visual line; keep .pull-line; split words within each line; ONE continuous word index across all lines
- Use dataset.split to prevent duplicate splitting

3) Scroll reveal
- Two IntersectionObservers
- .words-pull-up (threshold 0.2): add .words-visible, unobserve
- .fade-up-reveal (threshold 0.15): read data-delay, set style.animationDelay, add .is-visible, unobserve
- If IntersectionObserver unsupported, reveal all content immediately

RESPONSIVE
@1024px: .hero-ui padding 32px 28px 36px; .hero-page top 32px right 28px; .specs width min(300px,100%).
@900px: .hero-ui padding 28px 22px 28px; .hero-page top 28px right 22px; H1 clamp(1.35rem, 7.2vw, 2.4rem); images background-position 40% center; .specs width min(280px,100%). Keep Cyber-Robb visible looking left.
@768px: .hero-ui single-column grid, rows auto 1fr auto; safe-area padding max(24px, env(safe-area-inset-top)) max(20px, env(safe-area-inset-right)) max(28px, env(safe-area-inset-bottom)) max(20px, env(safe-area-inset-left)); .hero-left spans rows 1 / 3, gap 24px; .hero-page uses same safe-area top/right; .specs row 3, justify-self stretch, full width, margin-top 8px; images background-position 40% center.
@720px: .hero height auto, min-height 100vh / 100dvh; .hero-ui position relative, display flex, flex-direction column, min-height 100vh / 100dvh, justify-content flex-start, gap 28px; safe-area padding max(22px, env(safe-area-inset-top)) max(18px, env(safe-area-inset-right)) max(24px, env(safe-area-inset-bottom)) max(18px, env(safe-area-inset-left)); .hero-left unset grid, width 100%, justify-content flex-start; .hero-copy max-width 100%, padding-right 48px; copy font-size 12.5px, width 100%; .product-card width 100%; .specs width 100%, margin-top auto, padding-top 4px; .spec-value white-space normal; bg-position 40% center. Robot must remain visible on mobile.
@480px: gap 22px; tighter safe-area padding max(18px, env(safe-area-inset-top)) max(16px, env(safe-area-inset-right)) max(20px, env(safe-area-inset-bottom)) max(16px, env(safe-area-inset-left)); .hero-page font-size 12px; H1 clamp(1.1rem, 8.5vw, 1.65rem); copy font-size 12px, margin-top 14px; icon-row margin-top 16px, gap 8px; icon-btn 34x34; .hero-left gap 22px; .product-card grid-template-columns 72px 1fr, gap 8px 12px, padding 10px, border-radius 14px; .product-thumb width 72px, min-height 72px, border-radius 10px; product heading 10px; description 11px; button padding 6px 14px, font-size 11px; specs heading 10px, margin-bottom 10px; spec rows padding 6px 0, gap 10px; spec label/value 11px.
@360px: H1 font-size 1rem; .product-card grid-template-columns 64px 1fr; .product-thumb width 64px, min-height 64px.

FINAL DIRECTION
Premium futuristic AI/robotics landing page. Cyberpunk robotics laboratory, futuristic AI startup, cinematic sci-fi product launch, premium robotics brand, dark metallic surfaces, burnt-orange atmosphere, glowing robotic optics, glassmorphism interface, sophisticated typography, subtle animations, interactive cursor reveal. CYBER-ROBB is the hero, must look LEFT, no human/samurai character, realistic cinematic futuristic robot. Output the complete single index.html file and nothing else.`,
    tags: ["cyberpunk", "hero", "robot", "cinematic", "single-file"],
    difficulty: "Advanced",
    tool: "Any",
    free: true,
  },
  {
    id: "nexus-saaS",
    title: "Nexus — Modern SaaS Landing Page",
    category: "saas",
    style: "Modern SaaS · Glassmorphism · Indigo/Violet · Single file",
    description:
      "A clean, modern SaaS landing page for a fictional product called Nexus. Features a glassmorphism header, gradient accents, feature grid, pricing cards, and a strong CTA. Perfect for AI tools, dev tools, or B2B SaaS.",
    previewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    preview: `Create a single self-contained HTML file (index.html) for a modern SaaS landing page called "Nexus".

FONTS
- Google Fonts Inter (weights 300, 400, 500, 600, 700)
- Preconnect to https://fonts.googleapis.com and https://fonts.gstatic.com

COLORS
- Background: #0f0f14
- Surface: rgba(255, 255, 255, 0.03)
- Border: rgba(255, 255, 255, 0.08)
- Text primary: #f8fafc
- Text muted: #94a3b8
- Accent indigo: #6366f1
- Accent violet: #8b5cf6
- Accent cyan: #06b6d4

STRUCTURE
1. NAVIGATION
   - Fixed top, glassmorphism background (backdrop-filter: blur(20px))
   - Logo "Nexus" on left with small gradient icon
   - Links: Features, Pricing, About, Contact
   - CTA button "Get Started" with gradient bg

2. HERO SECTION
   - Centered, max-width 800px
   - Badge: "New: AI-powered workflows"
   - H1: "Ship faster with intelligent automation" (text-5xl, font-bold, gradient text)
   - Subtitle: "Nexus helps teams automate repetitive work, connect tools, and ship products 10x faster."
   - Two buttons: "Start free trial" (gradient) and "Watch demo" (outline)
   - Abstract 3D-style illustration area using CSS gradients and shapes

3. FEATURES SECTION
   - Section title: "Everything you need"
   - 3x2 grid of feature cards
   - Each card: icon, title, description
   - Glassmorphism cards with hover border glow

4. PRICING SECTION
   - 3 cards: Starter ($0), Pro ($29), Enterprise (Custom)
   - Highlight Pro card with gradient border
   - Checkmarks for features

5. CTA SECTION
   - Full-width gradient background
   - "Ready to get started?" heading
   - Email input + button

6. FOOTER
   - Logo, links, copyright

ANIMATIONS
- Subtle fade-in on scroll using IntersectionObserver
- Hover scale on cards
- Smooth gradient animation on CTA button

RESPONSIVE
- Mobile: stack layouts, smaller text, hamburger menu placeholder
- Tablet: 2-column grids
- Desktop: full layout

Make it look premium, minimal, and fast. Use subtle shadows, rounded corners (16px-24px), and smooth transitions.`,

    tags: ["saas", "landing-page", "glassmorphism", "gradient", "modern"],
    difficulty: "Medium",
    tool: "v0",
    free: true,
  },
  {
    id: "lumina-portfolio",
    title: "Lumina — Minimal Dark Portfolio",
    category: "portfolio",
    style: "Minimal Dark · Developer · Typography-focused · Single file",
    description:
      "A minimal, dark-themed portfolio for a creative developer. Features large typography, subtle animations, project grid, and a clean contact section. No clutter, just content.",
    previewImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    preview: `Create a single self-contained HTML file (index.html) for a minimal dark developer portfolio called "Lumina".

FONTS
- Google Fonts Inter (400, 500, 600) + JetBrains Mono for code snippets
- Preconnect to https://fonts.googleapis.com

COLORS
- Background: #0a0a0f
- Surface: #111118
- Border: #1e1e2e
- Text primary: #e2e8f0
- Text secondary: #94a3b8
- Accent: #22d3ee (cyan)

STRUCTURE
1. HERO
   - Full viewport height
   - Large name "Alex Chen" with gradient accent on "Chen"
   - Title: "Full-stack developer & designer"
   - Short bio paragraph
   - Social links: GitHub, Twitter, LinkedIn, Email
   - Subtle grid background pattern using CSS

2. PROJECTS
   - Section title "Selected Work"
   - 2-column grid of project cards
   - Each card: title, description, tags, link
   - Hover: subtle border glow and lift

3. ABOUT
   - Split layout: text left, skills right
   - Skills as small tags/pills
   - Tech stack icons using simple SVG or emoji

4. CONTACT
   - Simple: "Let's work together"
   - Email link + social links
   - Minimal form placeholder or just email

ANIMATIONS
- Staggered fade-in on scroll
- Subtle parallax on hero
- Hover effects on project cards

TYPOGRAPHY
- Large headings (clamp for responsiveness)
- Generous whitespace
- High contrast

Make it feel premium, quiet, and confident. No flashy effects.`,

    tags: ["portfolio", "minimal", "dark", "developer", "typography"],
    difficulty: "Medium",
    tool: "Any",
    free: true,
  },
  {
    id: "cartflow-ecommerce",
    title: "CartFlow — Clean E-commerce Template",
    category: "ecommerce",
    style: "Clean E-commerce · Product-focused · Minimal · Single file",
    description:
      "A clean, product-focused e-commerce template for a lifestyle brand. Features a hero banner, product grid, category filters, and a simple cart UI.",
    previewImage: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    preview: `Create a single self-contained HTML file (index.html) for a clean e-commerce template called "CartFlow".

FONTS
- Google Fonts Inter (400, 500, 600, 700)
- Preconnect to https://fonts.googleapis.com

COLORS
- Background: #fafafa
- Surface: #ffffff
- Border: #e5e7eb
- Text primary: #111827
- Text secondary: #6b7280
- Accent: #0f172a (near-black)

STRUCTURE
1. HEADER
   - Sticky, white bg, subtle bottom border
   - Logo "CartFlow" + search icon + cart icon + menu
   - Nav links: Shop, Categories, About, Contact

2. HERO BANNER
   - Full-width, soft gradient background
   - Heading: "Summer Collection 2025"
   - Subtitle: "Minimal essentials for everyday life"
   - CTA button: "Shop Now"

3. CATEGORIES
   - Horizontal scroll or grid: Men, Women, Accessories, Home, New Arrivals
   - Each category card with image placeholder and label

4. PRODUCT GRID
   - 4 columns on desktop, 2 on mobile
   - Product cards: image area, title, price, "Add to cart" button
   - Hover: shadow and slight scale
   - Sale badge on discounted items

5. NEWSLETTER
   - Simple: "Join our newsletter"
   - Email input + subscribe button

6. FOOTER
   - Columns: Shop, Help, Company, Social

IMAGES
- Use https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80 for hero
- Use https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80 for products
- Use https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&q=80 for accessories

Make it feel like a premium lifestyle brand. Clean whites, sharp typography, generous spacing.`,

    tags: ["ecommerce", "shop", "minimal", "product", "lifestyle"],
    difficulty: "Medium",
    tool: "v0",
    free: true,
  },
  {
    id: "metric-dashboard",
    title: "Metric — Dark Analytics Dashboard",
    category: "dashboard",
    style: "Dark Dashboard · Analytics · Data-heavy · Single file",
    description:
      "A dark analytics dashboard template with charts, metrics cards, data tables, and sidebar navigation. Great for SaaS analytics, admin panels, or internal tools.",
    previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    preview: `Create a single self-contained HTML file (index.html) for a dark analytics dashboard called "Metric".

FONTS
- Google Fonts Inter (400, 500, 600)
- Preconnect to https://fonts.googleapis.com

COLORS
- Background: #0f172a
- Surface: #1e293b
- Surface hover: #334155
- Border: #334155
- Text primary: #f1f5f9
- Text secondary: #94a3b8
- Success: #22c55e
- Warning: #f59e0b
- Danger: #ef4444
- Info: #3b82f6

STRUCTURE
1. SIDEBAR
   - Left, 260px wide
   - Logo "Metric"
   - Nav: Dashboard, Analytics, Customers, Reports, Settings
   - User profile at bottom

2. TOP BAR
   - Search input
   - Notifications bell
   - User avatar

3. METRICS ROW
   - 4 metric cards: Revenue, Users, Conversion, Bounce Rate
   - Each: label, value, trend indicator (up/down arrow + %)

4. CHARTS ROW
   - 2 large chart cards using Chart.js CDN
   - Line chart: Revenue over 12 months
   - Bar chart: Traffic sources

5. TABLE SECTION
   - Recent transactions or users table
   - Columns: Name, Email, Status, Amount, Date
   - Pagination placeholder

ANIMATIONS
- Smooth chart animations
- Hover states on rows
- Sidebar active indicator

Use Chart.js from CDN for charts. Make data look realistic.`,

    tags: ["dashboard", "analytics", "dark", "charts", "admin"],
    difficulty: "Advanced",
    tool: "Cursor",
    free: true,
  },
  {
    id: "vertex-agency",
    title: "Vertex — Bold Creative Agency",
    category: "agency",
    style: "Bold Agency · Colorful · Experimental · Single file",
    description:
      "A bold, experimental landing page for a creative agency. Features oversized typography, vibrant gradients, asymmetric layouts, and a showreel-style hero.",
    previewImage: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&q=80",
    preview: `Create a single self-contained HTML file (index.html) for a bold creative agency called "Vertex".

FONTS
- Google Fonts Space Grotesk (400, 500, 600, 700) + Inter (400)
- Preconnect to https://fonts.googleapis.com

COLORS
- Background: #0a0a0a
- Text primary: #ffffff
- Text secondary: #a1a1aa
- Accent 1: #ff3366 (hot pink)
- Accent 2: #7c3aed (violet)
- Accent 3: #06b6d4 (cyan)

STRUCTURE
1. HERO
   - Full viewport, black background
   - Oversized heading: "WE CREATE DIGITAL EXPERIENCES"
   - Words alternate colors: white, pink, violet, cyan
   - Subtitle: "A creative agency for brands that refuse to blend in."
   - Scroll indicator at bottom

2. WORK / PROJECTS
   - Asymmetric grid: large featured project left, 2 smaller right
   - Project cards with hover overlay showing title + category
   - Marquee-style scrolling text between sections

3. SERVICES
   - List layout: Service name left, description right
   - Alternating colors for each service
   - Services: Branding, Web Design, Development, Motion, Strategy

4. MARQUEE
   - Infinite horizontal scroll of client names or capabilities
   - CSS animation, no JS needed

5. CONTACT
   - Large CTA: "Let's talk"
   - Email + social links
   - Minimal footer

ANIMATIONS
- Text reveal on scroll
- Hover color shifts
- Smooth marquee
- Parallax on project images

Make it loud, confident, and unapologetically bold.`,

    tags: ["agency", "creative", "bold", "colorful", "experimental"],
    difficulty: "Advanced",
    tool: "Any",
    free: true,
  },
  {
    id: "savora-restaurant",
    title: "Savora — Elegant Restaurant Website",
    category: "restaurant",
    style: "Elegant Restaurant · Warm · Serif typography · Single file",
    description:
      "An elegant, warm restaurant website template. Features a hero video background, menu preview, reservation form, and beautiful food photography.",
    previewImage: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80",
    preview: `Create a single self-contained HTML file (index.html) for an elegant restaurant website called "Savora".

FONTS
- Google Fonts Playfair Display (400, 500, 600, 700) for headings
- Google Fonts Inter (300, 400, 500) for body
- Preconnect to https://fonts.googleapis.com

COLORS
- Background: #0c0a09
- Surface: #1c1917
- Text primary: #fafaf9
- Text secondary: #a8a29e
- Accent: #d6d3d1 (warm stone)
- Gold accent: #d4a574

STRUCTURE
1. HERO
   - Full viewport, dark background with subtle grain texture
   - Restaurant name "Savora" in large Playfair Display
   - Tagline: "Modern Italian cuisine"
   - CTA: "Reserve a table"
   - Subtle parallax background image of restaurant interior

2. ABOUT
   - Image left, text right
   - Short story about the restaurant
   - Chef signature

3. MENU PREVIEW
   - 3 columns: Antipasti, Main, Dolci
   - Each item: name, description, price
   - Elegant dividers

4. GALLERY
   - Masonry-style grid of food photos
   - Hover: subtle zoom and caption

5. RESERVATION
   - Simple form: date, time, guests, name, email
   - Warm, inviting design

6. FOOTER
   - Address, hours, phone, Instagram

IMAGES
- https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80
- https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80
- https://images.unsplash.com/photo-1567620905732-2d01ec7ab71e?w=800&q=80

Make it feel warm, intimate, and premium.`,

    tags: ["restaurant", "elegant", "warm", "menu", "serif"],
    difficulty: "Medium",
    tool: "Bolt",
    free: true,
  },
  {
    id: "launchpad-startup",
    title: "Launchpad — Startup Landing Page",
    category: "startup",
    style: "Minimal Startup · Clean · Waitlist-focused · Single file",
    description:
      "A minimal, conversion-focused startup landing page. Features a clean hero, feature highlights, social proof, and a prominent email waitlist form.",
    previewImage: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80",
    preview: `Create a single self-contained HTML file (index.html) for a startup landing page called "Launchpad".

FONTS
- Google Fonts Inter (400, 500, 600, 700)
- Preconnect to https://fonts.googleapis.com

COLORS
- Background: #ffffff
- Surface: #f8fafc
- Border: #e2e8f0
- Text primary: #0f172a
- Text secondary: #475569
- Accent: #0f172a (dark) or #3b82f6 (blue)

STRUCTURE
1. NAV
   - Minimal, logo left, "Join waitlist" button right
   - Transparent, becomes solid on scroll

2. HERO
   - Centered, max-width 640px
   - Badge: "Backed by Y Combinator"
   - H1: "The future of [industry] is here"
   - Subtitle: "One sentence about what the product does and who it's for."
   - Email input + "Join waitlist" button
   - "No credit card required" microcopy

3. SOCIAL PROOF
   - "Trusted by teams at"
   - 4-5 company logos (use text/SVG placeholders)

4. FEATURES
   - 3 columns
   - Each: icon, title, 1-line description
   - Clean, minimal cards

5. HOW IT WORKS
   - 3 steps with numbers
   - Simple timeline layout

6. TESTIMONIAL
   - One large quote
   - Author name, title, company

7. CTA BANNER
   - "Ready to get started?"
   - Email input + button

8. FOOTER
   - Logo, links, copyright

Make it fast, clean, and conversion-focused.`,

    tags: ["startup", "waitlist", "minimal", "clean", "saas"],
    difficulty: "Easy",
    tool: "v0",
    free: true,
  },
  {
    id: "learnify-education",
    title: "Learnify — Online Course Platform",
    category: "education",
    style: "Friendly Education · Accessible · Blue/Green · Single file",
    description:
      "A friendly, accessible online course platform template. Features a course catalog, course detail preview, instructor section, and a clean learning dashboard.",
    previewImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&q=80",
    preview: `Create a single self-contained HTML file (index.html) for an online course platform called "Learnify".

FONTS
- Google Fonts Inter (400, 500, 600, 700)
- Preconnect to https://fonts.googleapis.com

COLORS
- Background: #ffffff
- Surface: #f0fdf4
- Border: #bbf7d0
- Text primary: #14532d
- Text secondary: #166534
- Accent: #16a34a (green)

STRUCTURE
1. HEADER
   - Logo "Learnify" + nav: Courses, About, Pricing, Login
   - CTA: "Start Learning"

2. HERO
   - Left: H1 "Learn new skills from experts", subtitle, CTA buttons
   - Right: Course card mockup or illustration
   - Soft green gradient background

3. COURSE CATALOG
   - Filter tabs: All, Design, Development, Business, Marketing
   - Course cards: thumbnail, title, instructor, rating, price
   - 4-column grid

4. FEATURES
   - Why Learnify: Expert instructors, Hands-on projects, Certificate, Lifetime access
   - Icon grid

5. TESTIMONIALS
   - 3 student testimonials in cards
   - Star ratings

6. FOOTER
   - Links, newsletter, social

IMAGES
- https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80
- https://images.unsplash.com/photo-1516321318423-f06f85e504b0?w=600&q=80
- https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80

Make it friendly, accessible, and encouraging.`,

    tags: ["education", "courses", "friendly", "accessible", "learning"],
    difficulty: "Medium",
    tool: "Bolt",
    free: true,
  },
  {
    id: "vortex-blog",
    title: "Vortex — Content-First Blog Template",
    category: "blog",
    style: "Content-First Blog · Typography · Clean · Single file",
    description:
      "A typography-focused blog template for writers and publications. Features a clean reading experience, newsletter signup, related posts, and a minimal design system.",
    previewImage: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
    preview: `Create a single self-contained HTML file (index.html) for a typography-focused blog template called "Vortex".

FONTS
- Google Fonts Merriweather (400, 700) for body text
- Google Fonts Inter (400, 500, 600) for UI elements
- Preconnect to https://fonts.googleapis.com

COLORS
- Background: #ffffff
- Text primary: #1a1a1a
- Text secondary: #525252
- Accent: #2563eb (blue for links)

STRUCTURE
1. HEADER
   - Logo "Vortex" left
   - Nav: Home, Articles, About, Subscribe
   - Search icon

2. FEATURED POST
   - Large hero image
   - Category tag
   - Title: large, bold
   - Excerpt + author + date + read time

3. POST GRID
   - 3 columns on desktop, 1 on mobile
   - Each card: image, category, title, excerpt, author, date
   - Clean cards with subtle hover shadow

4. NEWSLETTER
   - "Subscribe to our newsletter"
   - Email input + button
   - Minimal, centered

5. SIDEBAR (on post page)
   - About author
   - Popular posts
   - Categories list
   - Tags cloud

6. FOOTER
   - Logo, copyright, social links

TYPOGRAPHY
- Body: 18px, line-height 1.8
- Max-width 680px for readability
- Generous margins

Make it feel like a premium publication.`,

    tags: ["blog", "typography", "content", "minimal", "writing"],
    difficulty: "Easy",
    tool: "Any",
    free: true,
  },
  {
    id: "pulse-mobile-app",
    title: "Pulse — Mobile App Landing Page",
    category: "mobile-app",
    style: "Mobile App · Vibrant · App Store · Single file",
    description:
      "A vibrant mobile app landing page for a fitness or productivity app. Features phone mockups, feature highlights, testimonials, and app store download buttons.",
    previewImage: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
    preview: `Create a single self-contained HTML file (index.html) for a mobile app landing page called "Pulse".

FONTS
- Google Fonts Inter (400, 500, 600, 700)
- Preconnect to https://fonts.googleapis.com

COLORS
- Background: #0f0f23
- Surface: #1a1a35
- Border: #2d2d5a
- Text primary: #ffffff
- Text secondary: #a5b4fc
- Accent: #6366f1 (indigo)
- Accent 2: #ec4899 (pink)

STRUCTURE
1. HERO
   - Dark background with gradient orbs/blobs
   - Left: H1 "Your personal health companion", subtitle, App Store + Play Store buttons
   - Right: Phone mockup using CSS (rounded rectangle with screen content)

2. FEATURES
   - Alternating layout: text left/image right, then swap
   - Each feature: icon, title, description
   - Soft gradient cards

3. HOW IT WORKS
   - 3 steps: Download, Personalize, Track
   - Step numbers with gradient circles

4. TESTIMONIALS
   - User avatars, quotes, ratings
   - Horizontal scroll or grid

5. DOWNLOAD CTA
   - Full-width gradient section
   - "Download Pulse today"
   - App store buttons

6. FOOTER
   - Links, social, copyright

ANIMATIONS
- Floating phone mockup
- Gradient orbs animation
- Scroll reveal

Make it feel energetic and modern.`,

    tags: ["mobile-app", "fitness", "vibrant", "app-store", "productivity"],
    difficulty: "Medium",
    tool: "v0",
    free: true,
  },
];