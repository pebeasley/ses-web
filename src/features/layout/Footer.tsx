import type { Route } from "next";
import Link from "next/link";

const footerLinks: { label: string; href: Route }[] = [
  { label: "Services", href: "/#services" },
  { label: "About Us", href: "/about" },
  { label: "Reviews", href: "/#reviews" },
  { label: "Service Areas", href: "/#areas" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1d2838] text-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col gap-8 border-b border-white/12 pb-8 lg:flex-row lg:items-center lg:justify-between">
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

          <nav className="flex flex-wrap gap-x-7 gap-y-3 text-sm font-black uppercase tracking-[0.12em] text-white/72">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="hover:text-success"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-3 pt-5 text-sm font-semibold text-white/52 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Southern Edge Services</p>
          <p>Southern Alabama & Gulf Coast technology support</p>
        </div>
      </div>
    </footer>
  );
}
