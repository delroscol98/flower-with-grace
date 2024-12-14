import Link from "next/link";
import Image from "next/image";
import logoPink from "@/public/logo-pink.svg";
import FacebookIcon from "@/public/facebook-icon.svg";
import InstagramIcon from "@/public/instagram-icon.svg";
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
            <Image src={InstagramIcon} alt="instagram icon" />
          </a>
          <a href="https://www.facebook.com/share/fhGHvhprHdfHFaTQ/?mibextid=qi2Omg">
            <Image src={FacebookIcon} alt="facebook icon" />
          </a>
        </article>
      </article>
    </footer>
  );
}

export default Footer;
