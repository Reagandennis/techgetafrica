import { NextResponse } from "next/server";
import { ContactSchema } from "@/lib/contact-schema";

export async function POST(request: Request) {
  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON body" },
      { status: 400 },
    );
  }

  const parsed = ContactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Validation failed",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 422 },
    );
  }

  const { name, email, company, topic, message } = parsed.data;

  // TODO: wire up real email delivery here (Resend / Postmark / SendGrid).
  // We deliberately don't hard-code a provider; pick one and replace this block.
  // Example with Resend:
  //   await resend.emails.send({
  //     from: "site@techgetafrica.com",
  //     to: "hello@techgetafrica.com",
  //     replyTo: email,
  //     subject: `[${topic}] New contact from ${name}${company ? ` · ${company}` : ""}`,
  //     text: message,
  //   });

  // For now, just log on the server so we can see submissions in dev.
  if (process.env.NODE_ENV !== "production") {
    console.log("[contact form]", { name, email, company, topic, length: message.length });
  }

  return NextResponse.json({ ok: true });
}

export async function GET() {
  return NextResponse.json(
    { ok: false, error: "Method not allowed" },
    { status: 405 },
  );
}
