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
];