import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar bg-accent hidden md:flex">
      <div className="flex flex-1">
        <Link className="link link-hover link-primary" href="/">
          S.E.S.
        </Link>
      </div>
      <div className="navbar-end space-x-2">
        <Link className="link link-hover link-primary" href="/">
          home
        </Link>
        <Link className="link link-hover link-primary" href="/about">
          about
        </Link>
        <Link className="link link-hover link-primary" href="/contact">
          contact
        </Link>
      </div>
    </nav>
  );
}
