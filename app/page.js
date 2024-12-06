import { Rufina } from "next/font/google";
import Button from "./_components/Button";

const rufina = Rufina({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
  display: "swap",
});

export default function Home() {
  return (
    <>
      <section className="bg-secondary-blushy-pink pt-[52px] px-4 pb-[30px]">
        <h1
          className={`${rufina.className} uppercase text-neutral-white text-heading-md max-[374px]:text-heading-sm`}
        >
          <span className="block text-end drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
            Transforming
          </span>{" "}
          <span className="block text-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
            your vision into a
          </span>{" "}
          <span className="block text-start drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)]">
            blooming reality
          </span>
        </h1>
        <Button>Inquire now</Button>
      </section>
    </>
  );
}
