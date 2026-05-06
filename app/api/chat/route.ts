import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { messages, systemPrompt } = await req.json();

  const history = messages
    .slice(0, -1)
    .map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "model" : "user",
      parts: [{ text: m.content }],
    }));

  const lastMessage = messages[messages.length - 1].content;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: systemPrompt }] },
        contents: [
          ...history,
          { role: "user", parts: [{ text: lastMessage }] },
        ],
        generationConfig: { maxOutputTokens: 500 },
      }),
    },
  );

  const data = await response.json();

  let message = "Sorry, I could not process that.";
  if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
    message = data.candidates[0].content.parts[0].text;
  } else if (data.error?.status === "UNAVAILABLE") {
    message = "AI sedang sibuk, coba lagi dalam beberapa detik ya! 🙏";
  } else if (data.error?.status === "RESOURCE_EXHAUSTED") {
    message = "Quota habis untuk saat ini, coba lagi nanti!";
  }

  return NextResponse.json({ message });
}
