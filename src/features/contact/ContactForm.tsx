"use client";

import { contact } from "@/features/contact/contact";
import { useActionState } from "react";
import { ContactActionState } from "./Types";

const initialState: ContactActionState = { status: "idle" };

const serviceOptions = [
  "Computer Support",
  "Networking & Wi-Fi",
  "Security Systems",
  "Setup & Troubleshooting",
  "Not Sure Yet",
];

const contactMethods = ["Phone", "Email", "Text"];

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(contact, initialState);

  return (
    <form
      action={formAction}
      className="grid w-full overflow-hidden rounded-box border border-base-300 bg-white shadow-xl lg:grid-cols-[0.9fr_1.1fr]"
    >
      <aside className="bg-[#1d2838] p-8 text-white md:p-10">
        <div className="flex items-center gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-box bg-success text-xl font-black text-primary">
            SE
          </div>
          <div>
            <p className="text-xl font-black tracking-wide">SOUTHERN EDGE</p>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-success">
              Services
            </p>
          </div>
        </div>

        <div className="mt-10">
          <p className="text-sm font-black uppercase tracking-[0.28em] text-success">
            Request Local Tech Support
          </p>
          <h2 className="mt-4 text-4xl font-black leading-tight">
            Tell us what is going on.
          </h2>
          <p className="mt-5 leading-7 text-white/72">
            Share a few details and we will follow up with a practical next
            step for your computer, network, security, or setup issue.
          </p>
        </div>

        <div className="mt-10 grid gap-4">
          <a
            href="tel:+12515096035"
            className="rounded-box border border-white/12 bg-white/7 p-4 hover:border-success"
          >
            <span className="block text-xs font-black uppercase tracking-[0.24em] text-success">
              Phone
            </span>
            <span className="mt-2 block text-lg font-black">
              (251) 509-6035
            </span>
          </a>

          <div className="rounded-box border border-white/12 bg-white/7 p-4">
            <span className="block text-xs font-black uppercase tracking-[0.24em] text-success">
              Hours
            </span>
            <span className="mt-2 block text-lg font-black">
              Mon-Fri, 8 AM-6 PM
            </span>
          </div>

          <div className="rounded-box border border-white/12 bg-white/7 p-4">
            <span className="block text-xs font-black uppercase tracking-[0.24em] text-success">
              Service Area
            </span>
            <span className="mt-2 block text-lg font-black">
              Southern Alabama & Gulf Coast
            </span>
          </div>
        </div>
      </aside>

      <fieldset className="fieldset gap-5 p-8 md:p-10">
        <legend className="text-3xl font-black text-primary">
          Request Service
        </legend>

        {state.status !== "idle" && (
          <div
            className={
              state.status === "success"
                ? "alert alert-success"
                : "alert alert-error"
            }
          >
            <span>
              {state.message ??
                (state.status === "success"
                  ? "Thanks. We will be in touch soon."
                  : "Something went wrong. Please try again.")}
            </span>
          </div>
        )}

        <div className="grid gap-5 md:grid-cols-2">
          <label className="form-control w-full">
            <span className="label pb-2 text-sm font-black uppercase tracking-[0.16em] text-primary">
              Full Name
            </span>
            <input
              name="name"
              className="input input-bordered input-primary w-full"
              placeholder="Your name"
              autoComplete="name"
              required
            />
          </label>

          <label className="form-control w-full">
            <span className="label pb-2 text-sm font-black uppercase tracking-[0.16em] text-primary">
              Phone Number
            </span>
            <input
              name="phone"
              type="tel"
              className="input input-bordered input-primary w-full"
              placeholder="(251) 555-0123"
              autoComplete="tel"
              required
            />
          </label>
        </div>

        <label className="form-control w-full">
          <span className="label pb-2 text-sm font-black uppercase tracking-[0.16em] text-primary">
            Email Address
          </span>
          <input
            name="email"
            type="email"
            className="input input-bordered input-primary w-full"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />
        </label>

        <label className="form-control w-full">
          <span className="label pb-2 text-sm font-black uppercase tracking-[0.16em] text-primary">
            Service Needed
          </span>
          <select
            name="service"
            className="select select-bordered select-primary w-full"
            defaultValue=""
            required
          >
            <option value="" disabled>
              Choose a service
            </option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </label>

        <div className="form-control w-full">
          <span className="label pb-2 text-sm font-black uppercase tracking-[0.16em] text-primary">
            Preferred Contact Method
          </span>
          <div className="grid gap-2 sm:grid-cols-3">
            {contactMethods.map((method) => (
              <label
                key={method}
                className="flex cursor-pointer items-center gap-3 rounded-box border border-base-300 px-4 py-3 font-bold text-primary has-checked:border-success has-checked:bg-success/10"
              >
                <input
                  type="radio"
                  name="contactMethod"
                  value={method}
                  className="radio radio-success radio-sm"
                  required
                />
                <span>{method}</span>
              </label>
            ))}
          </div>
        </div>

        <label className="form-control w-full">
          <span className="label pb-2 text-sm font-black uppercase tracking-[0.16em] text-primary">
            Message
          </span>
          <textarea
            name="message"
            className="textarea textarea-bordered textarea-primary min-h-36 w-full"
            placeholder="Tell us what is happening and the best time to reach you."
            rows={5}
            required
          />
        </label>

        <button
          type="submit"
          className="btn btn-success btn-lg mt-2 text-primary"
          disabled={isPending}
        >
          {isPending ? "Sending..." : "Request Service"}
        </button>
      </fieldset>
    </form>
  );
}
