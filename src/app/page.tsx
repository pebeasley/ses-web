import ContactDialog from "@/features/contact/ContactDialog";

const services = [
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

export default function Home() {
  return (
    <main className="bg-base-100 text-base-content">
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
              <ContactDialog />
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
              <article
                key={service.title}
                className="overflow-hidden rounded-box border border-base-300 bg-base-100 shadow-sm"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                />

                <div className="relative p-7 pt-10">
                  <div className="absolute -top-8 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-2xl font-black text-white ring-4 ring-white">
                    {service.icon}
                  </div>

                  <h3 className="text-2xl font-black text-primary">
                    {service.title}
                  </h3>
                  <p className="mt-4 leading-7 text-base-content/70">
                    {service.description}
                  </p>

                  <a
                    href="/contact"
                    className="mt-6 inline-flex font-bold text-success hover:text-primary"
                  >
                    Learn More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
