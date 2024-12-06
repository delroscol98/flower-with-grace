"use client";

import { Rufina } from "next/font/google";
import { useNavigation } from "../_contexts/NavigationContext";
import Link from "next/link";

const rufina = Rufina({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
  display: "swap",
});

function NavMenu() {
  const { navOpen, toggleNavMenu } = useNavigation();
  return (
    <section
      className={`absolute top-0 bg-neutral-beige w-full h-full text-center z-10 grid items-center justify-center  ${
        navOpen ? "-translate-y-0" : "-translate-y-full"
      } transition-all`}
    >
      <ul
        className={`${rufina.className} flex flex-col gap-5 text-heading-md text-accent-dark-brown`}
      >
        <li>
          <Link href="/" onClick={toggleNavMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" onClick={toggleNavMenu}>
            About Us
          </Link>
        </li>
        <li>
          <Link href="/gallery" onClick={toggleNavMenu}>
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/weddings" onClick={toggleNavMenu}>
            Weddings
          </Link>
        </li>
        <li>
          <Link href="/contact" onClick={toggleNavMenu}>
            Contact Us
          </Link>
        </li>
      </ul>
    </section>
  );
}

export default NavMenu;
