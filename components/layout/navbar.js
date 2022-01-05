import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Logo from "./logo";
import NavbarItem from "./navbar-item";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b-2 border-zinc-800 shadow-lg shadow-zinc-800/10 text-zinc-200 w-full flex flex-row py-4 px-12 justify-between">
      <Link href="/">
        <a className="hidden md:block">
          <Logo />
        </a>
      </Link>

      <nav className="my-auto">
        <ul className="flex flex-col md:flex-row md:gap-x-8">
          <NavbarItem href="/posts">All Posts</NavbarItem>
          <NavbarItem href="/contact">Contact</NavbarItem>
        </ul>
      </nav>
    </header>
  );
}
