import { promises as fs } from "fs";
import path from "path";
import type { Jugad } from "@/lib/jugad-types";

const DATA_DIR = path.join(process.cwd(), "data");
const DATA_FILE = path.join(DATA_DIR, "jugads.json");

async function ensureFile(): Promise<void> {
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.mkdir(DATA_DIR, { recursive: true });
    await fs.writeFile(DATA_FILE, "[]", "utf8");
  }
}

export async function readJugads(): Promise<Jugad[]> {
  await ensureFile();
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed as Jugad[];
  } catch {
    return [];
  }
}

export async function writeJugads(items: Jugad[]): Promise<void> {
  await ensureFile();
  await fs.writeFile(DATA_FILE, JSON.stringify(items, null, 2), "utf8");
}

export async function addJugad(item: Jugad): Promise<Jugad[]> {
  const current = await readJugads();
  const next = [item, ...current];
  await writeJugads(next);
  return next;
}