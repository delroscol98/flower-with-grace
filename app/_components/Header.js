"use client";

import HamburgerMenu from "./HamburgerMenu";
import { useNavigation } from "../_contexts/NavigationContext";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

function Header() {
  const { navOpen } = useNavigation();

  let backgroundColor = "bg-secondary-blushy-pink";
  if (navOpen) backgroundColor = "bg-neutral-beige";

  return (
    <>
      <section
        className={`${backgroundColor} relative pt-12 px-4 flex justify-between items-center transition`}
      >
        <Logo />
        <HamburgerMenu />
      </section>

      <NavMenu />
    </>
  );
}

export default Header;
