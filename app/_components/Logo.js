"use client";

import Image from "next/image";
import logoWhite from "@/public/logo-white.svg";
import logoBrown from "@/public/logo-brown.svg";
import logoPink from "@/public/logo-pink.svg";
import { useNavigation } from "../_contexts/NavigationContext";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Logo() {
  const { navOpen, setNavOpen } = useNavigation();
  const pathname = usePathname();

  let logo = logoWhite;
  if (pathname === "/gallery" || pathname === "/contact") logo = logoPink;
  if (pathname === "/weddings" || navOpen) logo = logoBrown;

  return (
    <Link
      href="/"
      onClick={() => setNavOpen(false)}
      className={`z-20 ${navOpen && "fixed top-12 left-4"}`}
    >
      <Image
        className="w-[89px]"
        src={logo}
        alt="flower with grace logo"
        priority
      />
    </Link>
  );
}

export default Logo;
