"use client";

import HamburgerMenu from "./HamburgerMenu";
import { useNavigation } from "../_contexts/NavigationContext";
import Logo from "./Logo";
import NavMenu from "./NavMenu";
import { usePathname } from "next/navigation";

function Header() {
  const pathname = usePathname();
  const { navOpen } = useNavigation();

  let backgroundColor = "bg-secondary-blushy-pink";
  if (navOpen || pathname === "/weddings") backgroundColor = "bg-neutral-beige";
  if (pathname === "/about") backgroundColor = "bg-accent-light-brown";
  if (pathname === "/gallery" || pathname === "/contact")
    backgroundColor = "bg-neutral-off-white";

  return (
    <>
      <section
        className={`${backgroundColor} relative pt-12 px-4 flex justify-between items-center`}
      >
        <Logo />
        <HamburgerMenu />
      </section>

      {navOpen && <NavMenu />}
    </>
  );
}

export default Header;
