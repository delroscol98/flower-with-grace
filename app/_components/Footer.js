import Link from "next/link";
import InstagramIcon from "./InstagramIcon";
import FacebookIcon from "./FacebookIcon";
import Image from "next/image";
import logoPink from "@/public/logo-pink.svg";
import { averageSans } from "../_fonts/Fonts";

function Footer() {
  return (
    <footer className="bg-neutral-off-white flex flex-col items-center gap-5 py-20 px-14">
      <Link href="/">
        <Image src={logoPink} alt="flower with grace logo" />
      </Link>

      <article className="flex flex-col gap-5">
        <p className={`${averageSans.className} text-accent-dark-brown`}>
          info@flowerwithgrace.com.au
        </p>
        <article className="flex justify-center gap-4">
          <a href="https://www.instagram.com/flowerwithgrace?igsh=NzJjcmxybW83Z29u">
            <InstagramIcon />
          </a>
          <a href="https://www.facebook.com/share/fhGHvhprHdfHFaTQ/?mibextid=qi2Omg">
            <FacebookIcon />
          </a>
        </article>
      </article>
    </footer>
  );
}

export default Footer;
