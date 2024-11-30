"use client";

import { useRef, useState } from "react";

function HamburgerMenu() {
  const [isChecked, setIsChecked] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsChecked((isChecked) => !isChecked);
  };

  return (
    <>
      <article
        className={`${
          isChecked ? "open" : null
        } flex items-center px-1 py-2 h-6 mr-3 hover:cursor-pointer`}
        onClick={toggleHamburgerMenu}
      >
        <input type="checkbox" id="hamburgerMenu__checkbox" hidden />
        <label htmlFor="hamburgerMenu__checkbox">
          <span onClick={toggleHamburgerMenu} className="hamburgerMenu"></span>
        </label>
      </article>
    </>
  );
}

export default HamburgerMenu;
