import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";
import { CONTACT_EMAIL } from "@/lib/data";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  projectType: z.string().trim().min(1).max(200),
  message: z.string().trim().min(1).max(5000),
});

function escapeHtml(input: string) {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not configured");
    return NextResponse.json({ error: "server-not-configured" }, { status: 500 });
  }

  const json = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(json);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid-input" }, { status: 400 });
  }
  const { name, email, projectType, message } = parsed.data;

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: "somos@somosastria.com.ar",
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: "Nuevo contacto desde somosastria.com.ar",
      html: `
        <h2>Nuevo mensaje desde astria.com.ar</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Tipo de proyecto:</strong> ${escapeHtml(projectType)}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br/>")}</p>
      `,
    });

    if (error) {
      console.error("Resend error", error);
      return NextResponse.json({ error: "send-failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed", err);
    return NextResponse.json({ error: "send-failed" }, { status: 500 });
  }
}
