import Image from "next/image";
import logo from "@/public/logo-white.svg";
import HamburgerMenu from "./HamburgerMenu";

function Header() {
  return (
    <section className="flex justify-between items-center">
      <Image className="w-[89px]" src={logo} alt="flower with grace logo" />
      <HamburgerMenu />
    </section>
  );
}

export default Header;
