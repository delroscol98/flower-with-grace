"use client";

import Image from "next/image";
import logoWhite from "@/public/logo-white.svg";
import logoBrown from "@/public/logo-brown.svg";
import logoPink from "@/public/logo-pink.svg";
import { useNavigation } from "../_contexts/NavigationContext";

function Logo() {
  const { navOpen } = useNavigation();

  return (
    <Image
      className="w-[89px]"
      src={navOpen ? logoBrown : logoWhite}
      alt="flower with grace logo"
    />
  );
}

export default Logo;
