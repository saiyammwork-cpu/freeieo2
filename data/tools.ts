export type Tool = {
  slug: string;
  name: string;
  category:
    | "slides"
    | "images"
    | "video"
    | "voice"
    | "writing"
    | "coding"
    | "design"
    | "music"
    | "avatars"
    | "productivity";
  description: string;
  freeTierNote: string;
  url: string;
  steps: string[];
  bestFor: string;
};

export const tools: Tool[] = [
  {
    slug: "gamma",
    name: "Gamma",
    category: "slides",
    description:
      "AI-powered presentation, document, and website generator that turns ideas into polished slides in seconds.",
    freeTierNote: "400 AI credits/month, up to 3 projects, Gamma branding on exports",
    url: "https://gamma.app",
    steps: [
      "Sign up at gamma.app with Google or email.",
      "Click 'Create new' and choose 'Presentation'.",
      "Paste your topic or bullet points and let Gamma outline the deck.",
      "Refine each slide with the inline editor — rearrange, edit text, or regenerate visuals.",
      "Export as PDF or share via link; remove Gamma watermark on paid tiers.",
    ],
    bestFor: "Quick decks and pitch slides when design polish matters more than total control.",
  },
  {
    slug: "canva-ai",
    name: "Canva AI",
    category: "design",
    description:
      "Canva's built-in Magic Studio tools generate slides, images, and designs from prompts inside the familiar editor.",
    freeTierNote: "5 Magic Media credits/day, 25 Magic Write/month, free tier watermark on some assets",
    url: "https://canva.com",
    steps: [
      "Open canva.com and search for 'Presentation'.",
      "Use Magic Write to generate an outline, then Magic Media to create cover/background images.",
      "Drag-and-drop elements, apply a template, and tweak text.",
      "Export as PPTX or PDF; upgrade to Pro to remove watermarks.",
    ],
    bestFor: "Users who already know Canva and want AI speed without leaving the editor.",
  },
  {
    slug: "beautiful-ai",
    name: "Beautiful.ai",
    category: "slides",
    description:
      "Smart slide builder that auto-layouts content so decks always look designed.",
    freeTierNote: "1 presentation at a time, Beautiful.ai logo on slide footers",
    url: "https://beautiful.ai",
    steps: [
      "Create a free account at beautiful.ai.",
      "Pick a template or start from blank; the engine auto-aligns as you type.",
      "Add content and let Smart Slide adjust layouts automatically.",
      "Share via link or export PDF; upgrade to remove branding.",
    ],
    bestFor: "Professionals who care more about clean output than pixel-level customization.",
  },
  {
    slug: "ideogram",
    name: "Ideogram",
    category: "images",
    description:
      "AI image generator excelling at legible text inside images and photorealistic scenes.",
    freeTierNote: "5 free generations/day, image downloads include watermark",
    url: "https://ideogram.ai",
    steps: [
      "Open ideogram.ai and log in.",
      "Type a detailed prompt including style, subject, and composition.",
      "Generate multiple variants and remix the best one.",
      "Download at moderate resolution; watermark present on free tier.",
    ],
    bestFor: "Images with readable text, logos, and social graphics.",
  },
  {
    slug: "leonardo-ai",
    name: "Leonardo.AI",
    category: "images",
    description:
      "Character-consistent image generator popular for game assets, concept art, and product visuals.",
    freeTierNote: "150 tokens/day, up to 4 images per prompt, faster queue on paid",
    url: "https://leonardo.ai",
    steps: [
      "Sign up and use the daily free token refresh.",
      "Select a model (e.g. DreamShaper, Absolute Reality) and enter your prompt.",
      "Generate, then refine with 'Image to Image' if needed.",
      "Download images; tokens regenerate daily.",
    ],
    bestFor: "Consistent characters and stylized concept art.",
  },
  {
    slug: "bing-image-creator",
    name: "Bing Image Creator",
    category: "images",
    description:
      "Free DALL-E 3 access via Microsoft Bing with no daily token purchase required.",
    freeTierNote: "~15 fast boosts/day, slower unlimited queue with Microsoft account",
    url: "https://bing.com/create",
    steps: [
      "Log into bing.com/create with a Microsoft account.",
      "Describe your image and hit 'Create'.",
      "Download results or edit the prompt and regenerate.",
    ],
    bestFor: "Zero-cost DALL-E 3 generations with a Microsoft account.",
  },
  {
    slug: "capcut-ai",
    name: "CapCut AI",
    category: "video",
    description:
      "CapCut's built-in AI handles auto-captions, background removal, and one-click video styling.",
    freeTierNote: "All AI features free, some stock assets require paid pack",
    url: "https://capcut.com",
    steps: [
      "Download CapCut desktop or open the web editor.",
      "Import footage or use templates.",
      "Apply Auto Captions, AI Background Remover, or style presets.",
      "Export in up to 4K; watermark only on some premium templates.",
    ],
    bestFor: "Fast social-video editing with no software cost.",
  },
  {
    slug: "pika",
    name: "Pika",
    category: "video",
    description:
      "Prompt-to-video generator that animates images or creates short clips from text.",
    freeTierNote: "Free tier with credits that regenerate daily, 3–4s clips at lower resolution",
    url: "https://pika.art",
    steps: [
      "Join the Discord or use the web app.",
      "Type /create or enter your text prompt.",
      "Choose aspect ratio and animation style.",
      "Download short clips and extend with the 'Extend' tool if needed.",
    ],
    bestFor: "Short, playful AI video clips and image animations.",
  },
  {
    slug: "runway-free",
    name: "Runway Free",
    category: "video",
    description:
      "Runway's free tier includes Gen-2 text-to-image and basic video editing tools.",
    freeTierNote: "~10 seconds of Gen-2 video/month, limited exports, watermark on free downloads",
    url: "https://runwayml.com",
    steps: [
      "Create a Runway account and go to Gen-2.",
      "Upload an image or use text-to-video with a prompt.",
      "Generate short clips and edit in the timeline.",
      "Download with watermark on free tier.",
    ],
    bestFor: "Experimenting with video-to-video AI on a zero budget.",
  },
  {
    slug: "elevenlabs-free",
    name: "ElevenLabs Free",
    category: "voice",
    description:
      "Best-in-class AI voice cloning and text-to-speech with realistic emotion.",
    freeTierNote: "10 min/month of generated audio, 3 custom voices, watermark not applied on free",
    url: "https://elevenlabs.io",
    steps: [
      "Sign up and go to Speech Synthesis.",
      "Paste text, choose a stock voice, and generate.",
      "Download MP3 audio.",
      "Create custom voices with the VoiceLab (limited to 3 on free).",
    ],
    bestFor: "Natural-sounding narration, voiceovers, and audiobook snippets.",
  },
  {
    slug: "ttsmaker",
    name: "TTSMaker",
    category: "voice",
    description:
      "Completely free online TTS with 300+ voices in 50+ languages, no signup required.",
    freeTierNote: "Unlimited free TTS, 3,000 characters per conversion, MP3 downloads free",
    url: "https://ttsmaker.com",
    steps: [
      "Open ttsmaker.com — no account needed.",
      "Paste text, pick a voice and language.",
      "Convert and download the MP3.",
    ],
    bestFor: "Free, no-login TTS in dozens of languages.",
  },
  {
    slug: "claude-free",
    name: "Claude Free",
    category: "writing",
    description:
      "Anthropic's Claude free tier is powerful for long-form writing, editing, and research.",
    freeTierNote: "Claude 3.5 Sonnet free usage with message limits, no subscription required",
    url: "https://claude.ai",
    steps: [
      "Go to claude.ai and sign in with Google or email.",
      "Paste your writing task or document to analyze.",
      "Iterate by refining instructions.",
      "Copy final output.",
    ],
    bestFor: "Long-form writing and research that exceeds typical chatbot context windows.",
  },
  {
    slug: "chatgpt-free",
    name: "ChatGPT Free",
    category: "writing",
    description:
      "OpenAI's free GPT-4o access with browsing, DALL-E, and file uploads.",
    freeTierNote: "Limited message rate, GPT-4o access free, browsing and plugins on paid only",
    url: "https://chat.openai.com",
    steps: [
      "Create an OpenAI account.",
      "Switch to GPT-4o for best results.",
      "Upload files or attach images when needed.",
      "Copy and iterate on the output.",
    ],
    bestFor: "General-purpose AI chat with browsing and multimodal inputs.",
  },
  {
    slug: "v0-dev",
    name: "v0 by Vercel",
    category: "coding",
    description:
      "Generates React, Tailwind, and shadcn UI components from natural-language descriptions.",
    freeTierNote: "Free tier includes $10/month credits, enough for hobby projects",
    url: "https://v0.dev",
    steps: [
      "Sign in to v0.dev with GitHub.",
      "Describe the UI component or full page you want.",
      "Review generated code and iterate with follow-up prompts.",
      "Copy the React/Tailwind code into your project.",
    ],
    bestFor: "Rapid prototyping of React + Tailwind UIs.",
  },
  {
    slug: "cursor-free",
    name: "Cursor Free",
    category: "coding",
    description:
      "AI-first code editor with autocomplete, chat, and multi-file editing.",
    freeTierNote: "Free tier with 2,000 completions/month, limited slow-model chat",
    url: "https://cursor.com",
    steps: [
      "Download Cursor editor.",
      "Open a project folder.",
      "Use Cmd+K for inline edits and Cmd+L for chat.",
      "Iterate until the code is ready.",
    ],
    bestFor: "Day-to-day coding assistance with a familiar VS Code feel.",
  },
  {
    slug: "deepseek-coder-free",
    name: "DeepSeek Coder Free",
    category: "coding",
    description:
      "Open-source coding model accessible for free via web UI or API with generous limits.",
    freeTierNote: "Free web access and low-cost API, strong on code tasks",
    url: "https://deepseek.com",
    steps: [
      "Go to DeepSeek chat or API platform.",
      "Paste code or describe the function you want.",
      "Iterate on follow-up messages.",
      "Copy completed code.",
    ],
    bestFor: "Strong free code generation without a paid API.",
  },
  {
    slug: "midjourney-free",
    name: "Midjourney Free Trial",
    category: "images",
    description:
      "The iconic AI image model — trial credits let you test generations once.",
    freeTierNote: "No ongoing free tier; trial credits may not be available, check current policy",
    url: "https://midjourney.com",
    steps: [
      "Join the Midjourney Discord.",
      "Use /imagine with a descriptive prompt.",
      "Upscale and vary results in the Discord bot.",
      "Download final images.",
    ],
    bestFor: "Artistic, stylized illustrations and concept art (limited trial availability).",
  },
  {
    slug: "suno-free",
    name: "Suno Free",
    category: "music",
    description:
      "Generates full songs with vocals and instrumentation from text prompts.",
    freeTierNote: "10 generations/day on free tier, audio quality capped, Suno watermark",
    url: "https://suno.com",
    steps: [
      "Sign up at suno.com.",
      "Write a descriptive prompt with genre, mood, and lyrics.",
      "Generate and listen to the full track.",
      "Download on paid tiers; free users get limited access.",
    ],
    bestFor: "Songwriting demos and fun AI music experiments.",
  },
  {
    slug: "udio-free",
    name: "Udio Free",
    category: "music",
    description:
      "Competitor to Suno with high-quality music generation and vocal control.",
    freeTierNote: "~1,200 credits/month on free tier, enough for ~30 clips, watermark may apply",
    url: "https://udio.com",
    steps: [
      "Create an Udio account.",
      "Enter a prompt with genre, mood, and optional lyrics.",
      "Generate clips and extend sections.",
      "Download on free tier with limits.",
    ],
    bestFor: "Polished AI music with strong vocal realism.",
  },
  {
    slug: "heygen-free",
    name: "HeyGen Free",
    category: "avatars",
    description:
      "AI avatar video generator with realistic presenters speaking your script.",
    freeTierNote: "1 free credit (roughly 1 min video), watermark on output, requires paid to remove",
    url: "https://heygen.com",
    steps: [
      "Sign up and create an avatar or pick a preset.",
      "Write a script or paste text.",
      "Generate the video.",
      "Download with watermark on free tier.",
    ],
    bestFor: "Quick avatar video intros and explainers.",
  },
  {
    slug: "d-id-free",
    name: "D-ID Free",
    category: "avatars",
    description:
      "Turns photos or avatars into talking-head videos from text.",
    freeTierNote: "5 minutes free credit, watermark on output, limited resolution",
    url: "https://d-id.com",
    steps: [
      "Upload a portrait or choose a preset avatar.",
      "Type your script and choose a voice.",
      "Generate the talking-head video.",
      "Download with watermark; upgrade to remove.",
    ],
    bestFor: "Talking-head videos from still photos on a tiny budget.",
  },
  {
    slug: "synthesia-free",
    name: "Synthesia Free",
    category: "avatars",
    description:
      "Video platform with AI avatars for training and marketing videos.",
    freeTierNote: "Limited free demo credits per account, full access requires paid",
    url: "https://synthesia.io",
    steps: [
      "Create a free account.",
      "Select an avatar, enter your script, and choose a voice.",
      "Generate and preview the video.",
      "Export with branding on free tier.",
    ],
    bestFor: "Corporate training and onboarding videos with realistic avatars.",
  },
  {
    slug: "pictory-free",
    name: "Pictory Free",
    category: "video",
    description:
      "Turns long-form content into short, branded social clips automatically.",
    freeTierNote: "3 videos up to 10 min each, Pictory logo on output, free trial period",
    url: "https://pictory.ai",
    steps: [
      "Sign up for the free trial.",
      "Paste a URL or upload long-form video/audio.",
      "Let Pictory auto-highlight key moments.",
      "Edit and export short clips.",
    ],
    bestFor: "Repurposing long videos into social shorts quickly.",
  },
  {
    slug: "notion-ai-free",
    name: "Notion AI Free Trial",
    category: "productivity",
    description:
      "Notion's built-in AI helps write, summarize, and brainstorm inside your workspace.",
    freeTierNote: "Free trial AI responses available, full AI access requires Notion AI add-on (~$8/mo)",
    url: "https://notion.so",
    steps: [
      "Create a free Notion account.",
      "Type '/ai' inside a page for brainstorming or summarization.",
      "Use the AI block inside pages.",
      "Subscribe to Notion AI for unlimited responses after trial.",
    ],
    bestFor: "AI assistance inside an existing notes/wiki workflow.",
  },
  {
    slug: "tome-free",
    name: "Tome Free",
    category: "slides",
    description:
      "AI-generated narrative presentations with rich media embedding.",
    freeTierNote: "500 Tome Credits/month, Tome branding on shared pages",
    url: "https://tome.app",
    steps: [
      "Sign up and create a new Tome.",
      "Type a prompt and let Tome generate the outline and visuals.",
      "Tweak layouts and add live embeds (Figma, video, maps).",
      "Share or publish; watermark on free tier.",
    ],
    bestFor: "Narrative, story-driven decks and mood boards.",
  },
  {
    slug: "framer-ai",
    name: "Framer AI",
    category: "design",
    description:
      "AI-generated website and design layouts inside the Framer builder.",
    freeTierNote: "Free AI site generation available, Framer branding on free subdomain",
    url: "https://framer.com",
    steps: [
      "Open Framer and start a new AI Site.",
      "Describe your website style and content.",
      "Edit layout, copy, and images inside Framer.",
      "Publish to a Framer subdomain for free.",
    ],
    bestFor: "Launching a polished portfolio or landing page in minutes.",
  },
  {
    slug: "recraft-free",
    name: "Recraft Free",
    category: "design",
    description:
      "Generates vector art, icons, and illustrations with style consistency.",
    freeTierNote: "Free daily generations, limited exports, Recraft watermark on some outputs",
    url: "https://recraft.ai",
    steps: [
      "Create an account at recraft.ai.",
      "Choose a style preset or upload a reference.",
      "Prompt for vector art, icons, or illustrations.",
      "Download SVG or PNG on free tier with limits.",
    ],
    bestFor: "Consistent vector design systems and icon sets.",
  },
  {
    slug: "microsoft-designer-free",
    name: "Microsoft Designer Free",
    category: "design",
    description:
      "Free design tool with DALL-E 3 image generation and instant social templates.",
    freeTierNote: "Free DALL-E 3 credits with Microsoft account, design templates free",
    url: "https://designer.microsoft.com",
    steps: [
      "Go to designer.microsoft.com and sign in.",
      "Use AI Image to generate visuals from prompts.",
      "Apply templates for posts, cards, or banners.",
      "Download designs free.",
    ],
    bestFor: "Quick social graphics with free DALL-E 3 access.",
  },
  {
    slug: "remove-bg-free",
    name: "Remove.bg Free",
    category: "productivity",
    description:
      "Removes image backgrounds instantly with AI in one click.",
    freeTierNote: "Free low-res downloads with credit, full res requires paid",
    url: "https://remove.bg",
    steps: [
      "Upload any image.",
      "AI removes the background automatically.",
      "Download the low-res preview free; upgrade for full resolution.",
    ],
    bestFor: "Fast background removal without editing software.",
  },
  {
    slug: "blackbox-free",
    name: "Blackbox Free",
    category: "coding",
    description:
      "Code search and autocomplete tool that extracts code from any video or image.",
    freeTierNote: "Free VS Code extension and web search, limited API calls",
    url: "https://blackbox.ai",
    steps: [
      "Install the Blackbox extension or use the web app.",
      "Search code by natural language or extract code from images.",
      "Use autocomplete inside VS Code for free.",
    ],
    bestFor: "Finding and extracting code snippets from tutorials and demos.",
  },
];
