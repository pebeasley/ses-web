"use client";

import { contact } from "@/features/contact/contact";
import { useActionState } from "react";
import { ContactActionState } from "./Types";

const initialState: ContactActionState = { status: "idle" };

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(contact, initialState);

  return (
    <form action={formAction} className="flex flex-1">
      <fieldset className="fieldset rounded-box w-md border p-4">
        <div className="flex flex-col flex-1 gap-4">
          <pre>{state.status}</pre>
          <legend className="fieldset-legend text-xl">Contact Us</legend>

          <label className="label text-primary">Your Email</label>
          <input
            name="email"
            className="input input-primary w-full"
            placeholder="user@domain.com"
          />

          <label className="label text-primary">Your Name</label>
          <input name="name" className="input input-primary w-full" />

          <label className="label text-primary">Your Phone Number</label>
          <input name="phone" className="input input-primary w-full" />

          <label className="label text-primary">Message</label>
          <textarea
            name="message"
            className="textarea input-primary w-full"
            placeholder="Message"
            rows={3}
          />
          <button
            type="submit"
            className="btn btn-primary"
            disabled={isPending}
          >
            Submit
          </button>
        </div>
      </fieldset>
    </form>
  );
}
