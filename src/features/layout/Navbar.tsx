import Link from "next/link";
import ContactDialog from "@/features/contact/ContactDialog";

export default function Navbar() {
  return (
    <header className="bg-[#020d1c] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
        <Link href="/" className="text-2xl font-black tracking-wide">
          SOUTHERN EDGE
          <span className="block text-sm font-bold tracking-[0.3em] text-success">
            SERVICES
          </span>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
          <Link href="/#services" className="hover:text-success">
            Services
          </Link>
          <Link href="/about" className="hover:text-success">
            About Us
          </Link>
          <Link href="/#reviews" className="hover:text-success">
            Reviews
          </Link>
          <Link href="/#areas" className="hover:text-success">
            Service Areas
          </Link>
          <Link href="/contact" className="hover:text-success">
            Contact
          </Link>
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <ContactDialog />
          <a href="tel:+12515096035" className="font-bold">
            (251) 509-6035
          </a>
        </div>

        <a href="tel:+12515096035" className="font-bold lg:hidden">
          Call
        </a>
      </div>
    </header>
  );
}
