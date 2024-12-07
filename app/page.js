import CtaButton from "./_components/CtaButton";
import Link from "next/link";
import home1 from "@/public/home-1.jpeg";
import home2 from "@/public/home-2.jpeg";
import Image from "next/image";
import { rufina } from "./_fonts/Fonts";

export default function Home() {
  return (
    <>
      <section className="bg-secondary-blushy-pink pt-[52px] px-4 pb-[30px]">
        <article>
          <h1
            className={`${rufina.className} uppercase text-neutral-white text-heading-md `}
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
          <Link href="/contact">
            <CtaButton>Inquire now</CtaButton>
          </Link>
        </article>

        <article className="grid gap-10 mt-20 mb-10">
          <Image
            className="h-[400px] object-cover rounded-t-full"
            src={home1}
            alt="Close-up of a bride holding a bouquet of white roses, baby's breath, and greenery, surrounded by more bouquets held by others in dark attire."
            height={400}
          />
          <Image
            className="h-[400px] object-cover rounded-b-full"
            src={home2}
            alt="A wedding party stands in front of a brick building, with the bride and groom in the center, surrounded by bridesmaids in blue dresses and groomsmen in suits."
            height={400}
          />
        </article>

        <article>
          <p>
            <strong>
              We are a Sydney-based wedding florist and stylist, focused on
              curating romantic, dreamy florals for your special day.
            </strong>
          </p>
        </article>
      </section>
    </>
  );
}
