export function getSavedTools(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem("freeieo-saved-tools");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function saveTool(slug: string) {
  if (typeof window === "undefined") return;
  const saved = getSavedTools();
  if (!saved.includes(slug)) {
    saved.push(slug);
    localStorage.setItem("freeieo-saved-tools", JSON.stringify(saved));
  }
}

export function unsaveTool(slug: string) {
  if (typeof window === "undefined") return;
  const saved = getSavedTools().filter((s) => s !== slug);
  localStorage.setItem("freeieo-saved-tools", JSON.stringify(saved));
}

export function getSavedPrompts(): Array<{ id: string; text: string; createdAt: string }> {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem("freeieo-saved-prompts");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function savePrompt(text: string) {
  if (typeof window === "undefined") return;
  const prompts = getSavedPrompts();
  prompts.unshift({ id: crypto.randomUUID(), text, createdAt: new Date().toISOString() });
  localStorage.setItem("freeieo-saved-prompts", JSON.stringify(prompts.slice(0, 100)));
}

export function getChatHistory(): Array<{ role: "user" | "assistant"; content: string }> {
  if (typeof window === "undefined") return [];
  try {
    const data = localStorage.getItem("freeieo-chat-history");
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

export function setChatHistory(messages: Array<{ role: "user" | "assistant"; content: string }>) {
  if (typeof window === "undefined") return;
  localStorage.setItem("freeieo-chat-history", JSON.stringify(messages.slice(-50)));
}
