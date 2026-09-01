import { NextRequest, NextResponse } from "next/server";
import { addJugad, readJugads } from "@/lib/jugad-store";
import type { Jugad } from "@/lib/jugad-types";

export const dynamic = "force-dynamic";

function slugify(input: string): string {
  return input
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 60) || "jugad";
}

function isValidUrl(value: unknown): value is string {
  if (typeof value !== "string" || value.length === 0) return false;
  try {
    const u = new URL(value);
    return u.protocol === "http:" || u.protocol === "https:";
  } catch {
    return false;
  }
}

export async function GET() {
  try {
    const items = await readJugads();
    return NextResponse.json({ items });
  } catch (err) {
    console.error("[jugad] read error", err);
    return NextResponse.json(
      { items: [], error: "Failed to read jugads" },
      { status: 200 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { error: "Invalid JSON body" },
        { status: 400 }
      );
    }

    const toolName = String(body.toolName ?? "").trim();
    const jugadTitle = String(body.jugadTitle ?? "").trim();
    const description = String(body.description ?? "").trim();
    const category = String(body.category ?? "").trim();
    const submittedBy = String(body.submittedBy ?? "").trim();
    const stepsRaw = body.steps;

    if (!toolName || toolName.length > 80) {
      return NextResponse.json(
        { error: "toolName is required (max 80 chars)" },
        { status: 400 }
      );
    }
    if (!jugadTitle || jugadTitle.length > 120) {
      return NextResponse.json(
        { error: "jugadTitle is required (max 120 chars)" },
        { status: 400 }
      );
    }
    if (!description || description.length < 5 || description.length > 800) {
      return NextResponse.json(
        { error: "description must be 5-800 chars" },
        { status: 400 }
      );
    }

    const steps: string[] = Array.isArray(stepsRaw)
      ? stepsRaw
          .map((s) => String(s).trim())
          .filter((s) => s.length > 0 && s.length <= 200)
          .slice(0, 10)
      : [];

    const item: Jugad = {
      id: `${slugify(toolName)}-${Date.now().toString(36)}`,
      toolName,
      jugadTitle,
      description,
      steps,
      category: category || undefined,
      submittedBy: submittedBy || undefined,
      createdAt: new Date().toISOString(),
    };

    const items = await addJugad(item);

    return NextResponse.json({ ok: true, item, count: items.length }, { status: 201 });
  } catch (err) {
    console.error("[jugad] write error", err);
    return NextResponse.json(
      { error: "Failed to save jugad" },
      { status: 500 }
    );
  }
}