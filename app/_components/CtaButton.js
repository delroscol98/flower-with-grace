import { Average_Sans } from "next/font/google";

const averageSans = Average_Sans({
  weight: "400",
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});

function CtaButton({ children }) {
  return (
    <button
      className={`${averageSans.className} bg-secondary-dark-pink py-2 px-2 rounded-lg text-paragraph-sm  mt-[11px] text-accent-dark-brown`}
    >
      {children}
    </button>
  );
}

export default CtaButton;
