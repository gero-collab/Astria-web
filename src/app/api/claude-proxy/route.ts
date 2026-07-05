import { NextResponse } from "next/server";
import { z } from "zod";

const GROQ_MODEL = "llama-3.1-8b-instant";
const GROQ_ENDPOINT = "https://api.groq.com/openai/v1/chat/completions";

const messageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string().min(1).max(4000),
});

const requestSchema = z.object({
  messages: z.array(messageSchema).min(1).max(60),
  system: z.string().min(1).max(4000),
  maxTokens: z.number().int().min(1).max(1000).optional(),
});

export async function POST(request: Request) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    console.error("GROQ_API_KEY is not configured");
    return NextResponse.json({ error: "server-not-configured" }, { status: 500 });
  }

  const body = await request.json().catch(() => null);
  const parsed = requestSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid-input" }, { status: 400 });
  }
  const { messages, system, maxTokens } = parsed.data;

  const chatMessages = [{ role: "system", content: system }, ...messages];

  try {
    const res = await fetch(GROQ_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: GROQ_MODEL,
        messages: chatMessages,
        max_tokens: maxTokens || 1000,
      }),
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Groq error:", res.status, errorText);
      throw new Error(`Groq ${res.status}: ${errorText}`);
    }

    const data = await res.json();
    const text = data.choices?.[0]?.message?.content || "";
    return NextResponse.json({ text });
  } catch (err) {
    console.error("Groq proxy request failed", err);
    return Response.json(
      { error: err instanceof Error ? err.message : String(err) },
      { status: 500 }
    );
  }
}
