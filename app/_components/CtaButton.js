import { averageSans } from "../_fonts/Fonts";

function CtaButton({ children }) {
  return (
    <button
      className={`${averageSans.className} bg-secondary-dark-pink py-2 px-3 rounded-lg text-paragraph-sm  mt-[11px] text-accent-dark-brown`}
    >
      {children}
    </button>
  );
}

export default CtaButton;
