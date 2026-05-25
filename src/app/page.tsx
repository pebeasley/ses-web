import ServiceArticle from "@/features/landing/ServiceArticle";
import { Service } from "@/types/Service";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Computer Support, Wi-Fi & Security Services in Southern Alabama",
  description:
    "Southern Edge Services provides local computer support, networking, Wi-Fi setup, security system support, and troubleshooting for homes and businesses in Southern Alabama.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Computer Support, Wi-Fi & Security Services in Southern Alabama",
    description:
      "Local computer, networking, security, setup, and troubleshooting support for homes and businesses.",
    url: "/",
  },
};

const services: Service[] = [
  {
    title: "Computer Support",
    image: "/services/computer-support.jpg",
    icon: "▣",
    description:
      "Setup, repairs, upgrades, cleanup, and troubleshooting for home and business computers.",
  },
  {
    title: "Networking & Wi-Fi",
    image: "/services/networking.jpg",
    icon: "⌁",
    description:
      "Router setup, Wi-Fi coverage fixes, cabling, access points, and small-office networks.",
  },
  {
    title: "Security Systems",
    image: "/services/security.jpg",
    icon: "◉",
    description:
      "Camera setup, smart security devices, monitoring configuration, and system support.",
  },
  {
    title: "Setup & Troubleshooting",
    image: "/services/setup.jpg",
    icon: "✓",
    description:
      "Printers, email, devices, software, smart home tech, and everyday IT problems solved.",
  },
];

const faqs = [
  {
    question: "Do you help with both homes and businesses?",
    answer:
      "Yes. Southern Edge Services supports homeowners, home offices, and small businesses with practical computer, network, security, and setup help.",
  },
  {
    question: "Can you fix slow computers and setup issues?",
    answer:
      "Yes. We help with slow computers, software problems, device setup, printer issues, email setup, upgrades, cleanup, and everyday troubleshooting.",
  },
  {
    question: "Do you install or troubleshoot Wi-Fi networks?",
    answer:
      "Yes. We can help with router setup, weak Wi-Fi coverage, access points, cabling, device connections, and small-office network issues.",
  },
  {
    question: "Can you help with security cameras and smart devices?",
    answer:
      "Yes. We provide setup and support for security cameras, smart security devices, monitoring configuration, and connected home or business technology.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve Southern Alabama and nearby Gulf Coast communities. If you are nearby, contact us and we will let you know what options are available.",
  },
  {
    question: "How fast can I schedule service?",
    answer:
      "Availability depends on the issue and schedule, but we will follow up with the next practical step after you request service or call.",
  },
];

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Southern Edge Services",
  url: "https://southernedgeservices.com",
  telephone: "+12515096035",
  description:
    "Local computer support, networking, Wi-Fi setup, security system support, and troubleshooting for homes and businesses in Southern Alabama.",
  areaServed: [
    {
      "@type": "AdministrativeArea",
      name: "Southern Alabama",
    },
    {
      "@type": "Place",
      name: "Gulf Coast communities",
    },
  ],
  openingHours: "Mo-Fr 08:00-18:00",
  makesOffer: services.map((service) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Service",
      name: service.title,
      description: service.description,
    },
  })),
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function Home() {
  return (
    <main className="bg-base-100 text-base-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />

      <section
        className="relative min-h-[720px] bg-cover bg-center text-white"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(2, 13, 28, 0.94) 0%, rgba(2, 13, 28, 0.78) 42%, rgba(2, 13, 28, 0.34) 100%), url('/hero-it-services.jpg')",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              Reliable IT Services for Homes & Businesses
            </h1>

            <p className="mt-8 max-w-2xl text-2xl text-white/90">
              Local computer, networking, security, setup, and troubleshooting
              support.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn btn-success btn-lg">
                Contact Us
              </Link>
              <a
                href="tel:+12515096035"
                className="btn btn-outline btn-lg border-white px-10 text-white hover:bg-white hover:text-primary"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="bg-white px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-black uppercase tracking-[0.35em] text-success">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-black text-primary md:text-4xl">
              Services That Keep Your Technology Working
            </h2>
            <div className="mx-auto mt-5 h-1 w-24 bg-success" />
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service) => (
              <ServiceArticle key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      <section id="areas" className="bg-base-200 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.35em] text-success">
              Common Questions
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight text-primary md:text-5xl">
              Technology help, explained clearly.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-base-content/70">
              Whether you need computer support, better Wi-Fi, security system
              setup, or help sorting out a stubborn device, these answers cover
              the questions local homeowners and businesses ask most often.
            </p>

            <div className="mt-8 rounded-box border border-base-300 bg-white p-6">
              <h3 className="text-sm font-black uppercase tracking-[0.26em] text-success">
                Service Area
              </h3>
              <p className="mt-3 text-2xl font-black text-primary">
                Southern Alabama & Gulf Coast
              </p>
              <p className="mt-3 leading-7 text-base-content/65">
                Not sure if you are in range? Send a request and we will let
                you know what service options are available.
              </p>
            </div>
          </div>

          <div className="grid gap-4">
            {faqs.map((faq, index) => (
              <details
                key={faq.question}
                className="group rounded-box border border-base-300 bg-white p-6 shadow-sm"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-xl font-black text-primary">
                  {faq.question}
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-box bg-success text-primary transition group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-4 leading-7 text-base-content/70">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="reviews" className="bg-white px-6 py-16">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-box bg-[#1d2838] p-8 text-white md:grid-cols-[1fr_auto] md:items-center md:p-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.32em] text-success">
              Ready For The Next Step?
            </p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black leading-tight md:text-4xl">
              Get local technology support without the runaround.
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-white/72">
              Tell us what is broken, slow, disconnected, or confusing, and we
              will follow up with a practical path forward.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row md:flex-col lg:flex-row">
            <Link href="/contact" className="btn btn-success btn-lg">
              Contact Us
            </Link>
            <a
              href="tel:+12515096035"
              className="btn btn-outline btn-lg border-white px-8 text-white hover:bg-white hover:text-primary"
            >
              (251) 509-6035
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
