"use client";

import { useNavigation } from "../_contexts/NavigationContext";
import Link from "next/link";
import { rufina } from "../_fonts/Fonts";

function NavMenu() {
  const { toggleNavMenu } = useNavigation();
  return (
    <section
      className={`top-0 bg-neutral-beige w-full h-full text-center z-10 grid items-center justify-center fixed`}
    >
      <nav>
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
      </nav>
    </section>
  );
}

export default NavMenu;
