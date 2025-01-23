import Link from "next/link";
import { averageSans } from "../_fonts/Fonts";

function CtaButton({ children, page }) {
  return (
    <button
      className={`${averageSans.className} bg-secondary-dark-pink py-2 px-4 rounded-lg text-paragraph-sm text-accent-dark-brown font-bold`}
    >
      <Link href={page}>{children}</Link>
    </button>
  );
}

export default CtaButton;
