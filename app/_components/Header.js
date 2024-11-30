import Image from "next/image";
import logoWhite from "@/public/logo-white.svg";
import logoBrown from "@/public/logo-brown.svg";
import HamburgerMenu from "./HamburgerMenu";
import { Rufina } from "next/font/google";
import { NavigationProvider } from "../_contexts/NavigationContext";
import Logo from "./Logo";

const rufina = Rufina({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
  display: "swap",
});

function Header() {
  return (
    <NavigationProvider>
      <section className="relative py-12 px-4 flex justify-between items-center z-20">
        <Logo />
        <HamburgerMenu />
      </section>

      <section className="absolute top-0 bg-neutral-beige w-full h-full text-center z-10 grid items-center justify-center">
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
    </NavigationProvider>
  );
}

export default Header;
