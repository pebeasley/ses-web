const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "About Us", href: "/about" },
  { label: "Reviews", href: "#reviews" },
  { label: "Service Areas", href: "#areas" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1d2838] text-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.4fr] lg:items-end">
          <div>
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-box bg-success text-xl font-black text-primary">
                SE
              </div>
              <div>
                <p className="text-xl font-black tracking-wide text-white">
                  SOUTHERN EDGE
                </p>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-success">
                  Services
                </p>
              </div>
            </div>

            <h2 className="mt-8 max-w-lg text-4xl font-black leading-tight">
              Practical technology help, right when you need it.
            </h2>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <a
              href="tel:+12515096035"
              className="rounded-box border border-white/14 bg-white/8 p-6 hover:border-success"
            >
              <span className="text-xs font-black uppercase tracking-[0.26em] text-success">
                Phone
              </span>
              <span className="mt-3 block text-2xl font-black">
                (251) 509-6035
              </span>
            </a>
            <a
              href="/contact"
              className="rounded-box border border-success bg-success p-6 text-primary hover:bg-white"
            >
              <span className="text-xs font-black uppercase tracking-[0.26em]">
                Next Step
              </span>
              <span className="mt-3 block text-2xl font-black">
                Request Service
              </span>
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-8 border-t border-white/12 pt-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="max-w-xl leading-7 text-white/70">
              Computer support, Wi-Fi fixes, security setup, and everyday IT
              troubleshooting for local homeowners and businesses.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.24em] text-success">
              Explore
            </h3>
            <div className="mt-4 grid gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="font-semibold text-white/72 hover:text-success"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-black uppercase tracking-[0.24em] text-success">
              Service Area
            </h3>
            <p className="mt-4 leading-7 text-white/72">
              Southern Alabama and nearby Gulf Coast communities.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/12 pt-5 text-sm font-semibold text-white/52 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Southern Edge Services</p>
          <p>Home & business technology support</p>
        </div>
      </div>
    </footer>
  );
}
