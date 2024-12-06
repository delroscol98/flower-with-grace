import { Average_Sans } from "next/font/google";

const averageSans = Average_Sans({
  weight: "400",
  style: "normal",
  display: "swap",
  subsets: ["latin"],
});

function Button({ children }) {
  return (
    <button
      className={`${averageSans.className} bg-secondary-dark-pink py-2 px-2 rounded-lg text-paragraph-sm max-[374px]:text-paragraph-xs mt-[11px]`}
    >
      {children}
    </button>
  );
}

export default Button;
