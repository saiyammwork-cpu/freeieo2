import { GoogleGenerativeAI } from "@google/generative-ai";
import { tools } from "@/data/tools";
import { SYSTEM_PROMPT } from "@/lib/prompts";

export const runtime = "edge";

export async function POST(req: Request) {
  try {
    const { messages, toolSlug, query } = await req.json();

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return new Response(JSON.stringify({ error: "GEMINI_API_KEY is not configured" }), { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-001" });

    const targetTool = tools.find((t) => t.slug === toolSlug);
    const toolContext = targetTool
      ? `Target tool: ${targetTool.name} (${targetTool.category}): ${targetTool.description} | Free tier: ${targetTool.freeTierNote} | URL: ${targetTool.url}`
      : "";

    const promptSuffix = query
      ? `\n\nUser request: ${query}`
      : "\n\nWrite a concise, copy-paste-ready prompt optimized for the selected tool. No fluff, no explanation — just the prompt itself.";

    const fullSystemPrompt = `${SYSTEM_PROMPT}${toolContext}${promptSuffix}`;

    const lastMessage = messages.length > 0 ? messages[messages.length - 1] : { role: "user", content: query || "Write an optimized prompt" };
    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: [{ text: fullSystemPrompt + "\n\nPlease follow these instructions for all responses." }],
        },
        ...messages.slice(0, -1).map((m: any) => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: m.content }],
        })),
      ],
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 1000,
      },
    });

    const result = await chat.sendMessageStream(lastMessage.content);
    const stream = new ReadableStream({
      async start(controller) {
        const encoder = new TextEncoder();
        try {
          for await (const chunk of result.stream) {
            const text = chunk.text();
            if (text) {
              controller.enqueue(encoder.encode(text));
            }
          }
        } catch (e) {
          console.error("Stream error:", e);
        } finally {
          controller.close();
        }
      },
    });

    return new Response(stream, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
      },
    });
  } catch (error) {
    console.error("Prompt API error:", error);
    const message = error instanceof Error ? error.message : "Something went wrong";
    return new Response(JSON.stringify({ error: message }), { status: 500 });
  }
}
