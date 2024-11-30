"use client";

import { useNavigation } from "../_contexts/NavigationContext";

function HamburgerMenu() {
  const { navOpen, toggleNavMenu } = useNavigation();
  return (
    <>
      <article
        className={`${
          navOpen ? "open" : null
        } flex items-center px-1 py-2 h-6 mr-3 hover:cursor-pointer`}
        onClick={toggleNavMenu}
      >
        <input type="checkbox" id="hamburgerMenu__checkbox" hidden />
        <label htmlFor="hamburgerMenu__checkbox">
          <span onClick={toggleNavMenu} className="hamburgerMenu"></span>
        </label>
      </article>
    </>
  );
}

export default HamburgerMenu;
