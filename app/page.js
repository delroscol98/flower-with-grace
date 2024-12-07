import CtaButton from "./_components/CtaButton";
import Link from "next/link";
import home1 from "@/public/home-1.jpeg";
import home2 from "@/public/home-2.jpeg";
import Image from "next/image";
import { averageSans, rufina } from "./_fonts/Fonts";

export default function Home() {
  return (
    <>
      <section className="bg-secondary-blushy-pink pt-[52px] px-4 pb-[30px]">
        <article>
          <h1
            className={`${rufina.className} uppercase text-neutral-white text-heading-md mb-[11px]`}
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
          <CtaButton page="/contact">Inquire now</CtaButton>
        </article>

        <article className="grid gap-10 mt-20 mb-10">
          <Image
            className="h-[400px] object-cover rounded-t-full"
            src={home1}
            alt="Close-up of a bride holding a bouquet of white roses, baby's breath, and greenery, surrounded by more bouquets held by others in dark attire."
          />
          <Image
            className="h-[400px] object-cover rounded-b-full"
            src={home2}
            alt="A wedding party stands in front of a brick building, with the bride and groom in the center, surrounded by bridesmaids in blue dresses and groomsmen in suits."
          />
        </article>

        <article className="text-neutral-white mb-8">
          <p className="mb-5">
            <strong className={`${rufina.className} text-paragraph-lg`}>
              We are a Sydney-based wedding florist and stylist, focused on
              curating romantic, dreamy florals for your special day.
            </strong>
          </p>

          <article className={`${averageSans.className} grid gap-3`}>
            <p>
              Searching for a floral designer who understands your vision and
              will work with you to bring it to life? Look no further!{" "}
            </p>
            <p>
              With a mixture of lush greenery and stunning seasonal blooms, we
              curate thoughtful, signature pieces that embody your unique love
              story.
            </p>
            <p>
              We instil so much labour and love into your florals as we believe
              they add a little bit of extra magic to your day - and they will
              be immortalised in photographs for you to look back on with
              fondness and treasure forever!
            </p>
          </article>
        </article>

        <CtaButton page="/about">Know about us</CtaButton>
      </section>
    </>
  );
}
