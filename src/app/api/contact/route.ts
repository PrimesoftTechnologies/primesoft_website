import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactPayload = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SERVICE_LABELS: Record<string, string> = {
  "odoo-implementation": "Odoo Implementation",
  "call-center": "Call Center Solutions",
  "custom-software": "Custom Software Development",
  "ai-automation": "AI & Automation",
  "cloud-devops": "Cloud & DevOps Engineering",
  consulting: "IT Consulting & Strategy",
};

function isValidPayload(body: unknown): body is ContactPayload {
  if (!body || typeof body !== "object") return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    b.name.trim().length > 0 &&
    typeof b.company === "string" &&
    b.company.trim().length > 0 &&
    typeof b.email === "string" &&
    EMAIL_RE.test(b.email) &&
    typeof b.phone === "string" &&
    b.phone.trim().length > 0 &&
    typeof b.service === "string" &&
    b.service.trim().length > 0 &&
    typeof b.message === "string" &&
    b.message.trim().length > 0
  );
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isValidPayload(body)) {
    return NextResponse.json(
      { error: "Please fill in all required fields with valid values." },
      { status: 400 },
    );
  }

  const { name, company, email, phone, service, message } = body;
  const serviceLabel = SERVICE_LABELS[service] ?? service;

  const smtpUser = process.env.SMTP_USER;
  const smtpPassword = process.env.SMTP_PASSWORD;
  const fromEmail = process.env.CONTACT_FROM_EMAIL ?? smtpUser;
  const toEmail = process.env.CONTACT_TO_EMAIL;

  if (!smtpUser || !smtpPassword || !fromEmail || !toEmail) {
    console.error("Contact form: missing SMTP environment configuration.");
    return NextResponse.json(
      { error: "Email is not configured on the server." },
      { status: 500 },
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: (process.env.SMTP_SECURE ?? "true") === "true",
    auth: {
      user: smtpUser,
      pass: smtpPassword,
    },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 10_000,
  });

  const textBody = [
    `New enquiry from the PrimeSoft website contact form.`,
    ``,
    `Name: ${name}`,
    `Company: ${company}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Service Needed: ${serviceLabel}`,
    ``,
    `Message:`,
    message,
  ].join("\n");

  const htmlBody = `
    <div style="font-family:Arial,sans-serif;font-size:14px;color:#0f172a;line-height:1.6;">
      <h2 style="margin:0 0 16px;color:#187cc2;">New Website Enquiry</h2>
      <table cellpadding="6" cellspacing="0" style="border-collapse:collapse;">
        <tr><td style="font-weight:bold;">Name</td><td>${escapeHtml(name)}</td></tr>
        <tr><td style="font-weight:bold;">Company</td><td>${escapeHtml(company)}</td></tr>
        <tr><td style="font-weight:bold;">Email</td><td>${escapeHtml(email)}</td></tr>
        <tr><td style="font-weight:bold;">Phone</td><td>${escapeHtml(phone)}</td></tr>
        <tr><td style="font-weight:bold;">Service Needed</td><td>${escapeHtml(serviceLabel)}</td></tr>
      </table>
      <p style="font-weight:bold;margin-top:16px;">Message</p>
      <p style="white-space:pre-wrap;">${escapeHtml(message)}</p>
    </div>
  `;

  try {
    await transporter.sendMail({
      from: `"PrimeSoft Website" <${fromEmail}>`,
      to: toEmail,
      replyTo: `"${name}" <${email}>`,
      subject: `New Website Enquiry — ${serviceLabel}`,
      text: textBody,
      html: htmlBody,
    });
  } catch (error) {
    console.error("Contact form: failed to send email.", error);
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try again shortly." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true });
}
