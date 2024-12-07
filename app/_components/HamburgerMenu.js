"use client";

import { usePathname } from "next/navigation";
import { useNavigation } from "../_contexts/NavigationContext";

function HamburgerMenu() {
  const { navOpen, toggleNavMenu } = useNavigation();
  const pathname = usePathname();

  let hamburgerMenuColor =
    "bg-neutral-white before:bg-neutral-white after:bg-neutral-white";
  if (pathname === "/gallery" || pathname === "/contact")
    hamburgerMenuColor =
      "bg-secondary-blush-pink before:bg-secondary-blush-pink after:bg-secondary-blush-pink";
  if (pathname === "/weddings")
    hamburgerMenuColor =
      "bg-accent-dark-brown before:bg-accent-dark-brown after:bg-accent-dark-brown";
  return (
    <>
      <button
        className={`${
          navOpen && "open fixed top-12 right-4 translate-y-3/4"
        } flex items-center px-1 py-2 h-6 hover:cursor-pointer z-20`}
        onClick={toggleNavMenu}
      >
        <input type="checkbox" id="hamburgerMenu__checkbox" hidden />
        <label htmlFor="hamburgerMenu__checkbox">
          <span
            onClick={toggleNavMenu}
            className={`hamburgerMenu ${hamburgerMenuColor}`}
          ></span>
        </label>
      </button>
    </>
  );
}

export default HamburgerMenu;
