"use client";

import { Rufina } from "next/font/google";
import { useNavigation } from "../_contexts/NavigationContext";

const rufina = Rufina({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
  display: "swap",
});

function NavMenu() {
  const { navOpen } = useNavigation();
  return (
    <section
      className={`absolute top-0 bg-neutral-beige w-full h-full text-center z-10 grid items-center justify-center -translate-y-full ${
        navOpen ? "-translate-y-0" : null
      } transition-all`}
    >
      <ul
        className={`${rufina.className} flex flex-col gap-5 text-heading-md text-accent-dark-brown`}
      >
        <li>Home</li>
        <li>About Us</li>
        <li>Gallery</li>
        <li>Weddings</li>
        <li>Contact Us</li>
      </ul>
    </section>
  );
}

export default NavMenu;
