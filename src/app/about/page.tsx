import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Southern Edge Services",
  description:
    "Learn about Southern Edge Services, a locally owned technology support provider helping homes and businesses with practical IT service.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Southern Edge Services",
    description:
      "Learn about Southern Edge Services and local technology support for homes and businesses.",
    url: "/about",
  },
};

const trustItems = [
  {
    label: "Locally Owned",
    value: "Local",
    description: "Support from someone who understands the homes and businesses nearby.",
  },
  {
    label: "Home & Business",
    value: "2-in-1",
    description: "Practical technology help for personal devices, offices, and small teams.",
  },
  {
    label: "Practical Fixes",
    value: "Clear",
    description: "Straight answers, useful recommendations, and solutions that make sense.",
  },
];

const values = [
  {
    title: "Clear Communication",
    description:
      "Technology problems are frustrating enough. We explain what is happening, what can be done, and what the next step should be.",
  },
  {
    title: "Reliable Follow-Through",
    description:
      "From setup to troubleshooting, the goal is to leave you with equipment, networks, and devices that work the way you need them to.",
  },
  {
    title: "No Runaround",
    description:
      "You get practical help focused on the issue in front of you, not confusing jargon or one-size-fits-all recommendations.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-base-100 text-base-content">
      <section className="bg-[#1d2838] px-6 py-16 text-white lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.34em] text-success">
              About Southern Edge Services
            </p>
            <h1 className="mt-5 text-5xl font-black leading-tight md:text-6xl">
              Local technology help built on trust.
            </h1>
            <p className="mt-6 max-w-2xl text-xl leading-8 text-white/76">
              Southern Edge Services helps local homeowners and businesses solve
              everyday technology problems with clear communication, practical
              fixes, and dependable support.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact" className="btn btn-success btn-lg text-primary">
                Request Service
              </Link>
              <a
                href="tel:+12515096035"
                className="btn btn-outline btn-lg border-white px-8 text-white hover:bg-white hover:text-primary"
              >
                (251) 509-6035
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 -top-4 hidden h-28 w-28 rounded-box border border-success/70 lg:block" />
            <Image
              src="/about-it-support.jpg"
              alt="IT technician working through workstation cable and network issues"
              width={1200}
              height={900}
              className="relative aspect-[4/3] w-full rounded-box object-cover shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-18">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.32em] text-success">
              Our Approach
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-primary md:text-5xl">
              Straightforward support from someone local.
            </h2>
          </div>

          <div className="grid gap-6 text-lg leading-8 text-base-content/70">
            <p>
              Technology should make daily work easier, not create another
              problem to manage. Southern Edge Services focuses on the core
              issues that slow people down: unreliable Wi-Fi, computer problems,
              security setup, device configuration, and the everyday details
              that keep homes and small businesses running.
            </p>
            <p>
              The work starts with listening, then narrowing the problem down to
              a practical path forward. Whether the answer is a repair, a better
              setup, an upgrade, or a simple configuration change, the goal is
              to make the solution clear and useful.
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-7xl gap-5 md:grid-cols-3">
          {trustItems.map((item) => (
            <article
              key={item.label}
              className="rounded-box border border-base-300 bg-base-100 p-6 shadow-sm"
            >
              <p className="text-4xl font-black text-primary">{item.value}</p>
              <h3 className="mt-4 text-xl font-black text-primary">
                {item.label}
              </h3>
              <p className="mt-3 leading-7 text-base-content/65">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-base-200 px-6 py-18">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.32em] text-success">
              What We Value
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-primary md:text-5xl">
              Practical help without the runaround.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article
                key={value.title}
                className="rounded-box border border-base-300 bg-white p-7 shadow-sm"
              >
                <div className="h-1 w-16 bg-success" />
                <h3 className="mt-6 text-2xl font-black text-primary">
                  {value.title}
                </h3>
                <p className="mt-4 leading-7 text-base-content/70">
                  {value.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-box bg-[#1d2838] p-8 text-white md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.32em] text-success">
              Need Local Tech Support?
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight md:text-4xl">
              Tell us what is going on, and we will help you find the next step.
            </h2>
          </div>

          <Link href="/contact" className="btn btn-success btn-lg text-primary">
            Request Service
          </Link>
        </div>
      </section>
    </main>
  );
}
