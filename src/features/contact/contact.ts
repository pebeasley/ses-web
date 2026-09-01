"use server";

import nodemailer from "nodemailer";
import { z } from "zod";

import type { ContactActionState, ContactFormValues } from "./Types";

const serviceOptions = [
  "Computer Support",
  "Networking & Wi-Fi",
  "Security Systems",
  "Setup & Troubleshooting",
  "Not Sure Yet",
] as const;

const contactMethods = ["Phone", "Email", "Text"] as const;

const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(100),
  email: z.string().trim().email("Please enter a valid email address.").max(254),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number.")
    .max(30),
  service: z.enum(serviceOptions, "Please choose a service."),
  contactMethod: z.enum(contactMethods, "Please choose a contact method."),
  message: z
    .string()
    .trim()
    .min(10, "Please include a little more detail about how we can help.")
    .max(5000, "Please keep your message under 5,000 characters."),
});

function getFormValues(formData: FormData): ContactFormValues {
  return {
    name: String(formData.get("name") ?? "").trim(),
    email: String(formData.get("email") ?? "").trim(),
    phone: String(formData.get("phone") ?? "").trim(),
    service: String(formData.get("service") ?? "").trim(),
    contactMethod: String(formData.get("contactMethod") ?? "").trim(),
    message: String(formData.get("message") ?? "").trim(),
  };
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export const contact = async (
  _prevState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> => {
  const values = getFormValues(formData);
  const result = contactSchema.safeParse(values);

  if (!result.success) {
    const fieldErrors = Object.fromEntries(
      Object.entries(z.flattenError(result.error).fieldErrors).map(
        ([field, errors]) => [field, errors?.[0]],
      ),
    ) as ContactActionState["fieldErrors"];

    return {
      status: "error",
      message: "Please correct the highlighted fields and try again.",
      fieldErrors,
      values,
    };
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
  const toEmail = process.env.CONTACT_TO_EMAIL || gmailUser;

  if (!gmailUser || !gmailAppPassword || !toEmail) {
    console.error("Contact form email environment variables are not configured.");
    return {
      status: "error",
      message: "Email delivery is temporarily unavailable. Please call us instead.",
      values,
    };
  }

  const { name, email, phone, service, contactMethod, message } = result.data;
  const fromName = process.env.CONTACT_FROM_NAME || "Southern Edge Services Website";
  const subject = `New service request: ${service} — ${name}`;
  const text = [
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone}`,
    `Preferred contact method: ${contactMethod}`,
    `Service: ${service}`,
    "",
    "Message:",
    message,
  ].join("\n");

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailAppPassword },
    });

    await transporter.sendMail({
      from: { name: fromName, address: gmailUser },
      to: toEmail,
      replyTo: { name, address: email },
      subject,
      text,
      html: `
        <h2>New service request</h2>
        <dl>
          <dt><strong>Name</strong></dt><dd>${escapeHtml(name)}</dd>
          <dt><strong>Email</strong></dt><dd>${escapeHtml(email)}</dd>
          <dt><strong>Phone</strong></dt><dd>${escapeHtml(phone)}</dd>
          <dt><strong>Preferred contact method</strong></dt><dd>${escapeHtml(contactMethod)}</dd>
          <dt><strong>Service</strong></dt><dd>${escapeHtml(service)}</dd>
        </dl>
        <h3>Message</h3>
        <p>${escapeHtml(message).replaceAll("\n", "<br>")}</p>
      `,
    });

    return {
      status: "success",
      message: "Thanks. Your request was sent, and we will be in touch soon.",
    };
  } catch (error) {
    console.error("Unable to send contact form email:", error);
    return {
      status: "error",
      message: "We could not send your request. Please try again or call us.",
      values,
    };
  }
};
