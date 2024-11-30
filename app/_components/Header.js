import HamburgerMenu from "./HamburgerMenu";
import { NavigationProvider } from "../_contexts/NavigationContext";
import Logo from "./Logo";
import NavMenu from "./NavMenu";

function Header() {
  return (
    <NavigationProvider>
      <section className="relative pt-12 px-4 flex justify-between items-center z-20">
        <Logo />
        <HamburgerMenu />
      </section>

      <NavMenu />
    </NavigationProvider>
  );
}

export default Header;
