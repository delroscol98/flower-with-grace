import Image from "next/image";
import { averageSans, rufina } from "../_fonts/Fonts";
import about1 from "@/public/about-1.jpeg";
import about2 from "@/public/about-2.jpeg";
import about3 from "@/public/about-3.jpeg";
import whoAreWe1 from "@/public/who-are-we-1.jpeg";
import whoAreWe2 from "@/public/who-are-we-2.jpeg";
import RoundedText from "../_components/RoundedText";
import CtaButton from "../_components/CtaButton";

export default function AboutPage() {
  return (
    <section className="bg-accent-light-brown pt-6 px-4 pb-8">
      <article className="flex flex-col gap-4 mb-14">
        <h1
          className={`${rufina.className} uppercase text-neutral-white text-heading-md`}
        >
          Hi! I&apos;m Abigail
        </h1>
        <h2
          className={`${rufina.className} text-heading-sm text-neutral-white`}
        >
          Founder and Creative Director of Flower with Grace!
        </h2>
      </article>

      <Image
        className="rounded-t-full rounded-b-full h-[555px] object-cover object-left"
        src={about1}
        alt="Flower with Grace owner and creative director carefully arranges a hanging installation of flowers on a blank white wall behind a white table that has been decorated with candles and vases filled with flowers."
        priority={true}
      />

      <article
        className={`${averageSans.className} text-paragraph text-neutral-white grid gap-4 mt-10 mb-10`}
      >
        <p>
          I&apos;ve always loved all things flowers, design and styling, whether
          it be curating a bouquet to brighten up my home or using my creativity
          to style a friend&apos;s special event.
        </p>
        <p>
          Since having my baby girl, I&apos;ve decided to branch out from my
          career in healthcare to further develop my creative skills and pursue
          my passion for floristry!
        </p>
        <p>
          After working with the wonderful wedding florist & stylist, Kristela
          Marie, I decided to take the leap and bring my dream to life through
          the creation of Flower with Grace!
        </p>
      </article>

      <article className="flex flex-col gap-10">
        <Image
          className="rounded-t-full h-[500px] object-cover"
          src={about2}
          alt="Flower with grace owner stands smiling next to a large floral arangement."
        />
        <Image
          className="rounded-b-full h-[500px] object-cover"
          src={about3}
          alt="Flower with grace owner smiles as she finishes final touches of large floral arrangment."
        />
      </article>
      <section className="mb-10">
        <h3
          className={`${rufina.className} text-heading-md text-neutral-white mt-14`}
        >
          Who are we?
        </h3>
        <article className="flex flex-col gap-10">
          <article className="relative">
            <Image
              className="rounded-t-full w-[224px] h-[370px] object-cover object-right"
              src={whoAreWe1}
              alt="A bride and groom stand intimately close to each other whilst looking into the other's eyes and holding a bouquet of white flowers."
            />
            <RoundedText
              fill={"#fff"}
              xPosition={"right-[-1rem]"}
              yPosition={"top-[2rem]"}
            />
          </article>

          <p className={`${averageSans.className} text-neutral-white`}>
            Based in North-West Sydney, Flower with Grace is a small yet highly
            dedicated team focused on curating elegant, airy, floral designs
            that reflect your unique love story. At Flower with Grace, we work
            collaboratively with you to help transform your vision into reality,
            working to make sure each floral arrangement reflects the utmost
            love and care that we instill into its design.
          </p>

          <article className="relative">
            <Image
              className="rounded-b-full w-[224px] h-[370px] object-cover float-end"
              src={whoAreWe2}
              alt="A pink floral arrangement in a round stone base sitting on top of a circular table with a pink sash."
            />
            <RoundedText
              fill={"#fff"}
              xPosition={"left-[-2rem]"}
              yPosition={"top-[2rem]"}
            />
          </article>

          <article className="flex flex-col gap-4">
            <p className={`${averageSans.className} text-neutral-white`}>
              We focus on the creation of thoughtful, signature pieces of the
              highest quality. I handpick the best fresh flowers available in
              the markets, to ensure they stay beautiful and lush for your big
              day. I make an effort to present and discuss with each client a
              variety of options to help best adapt to your budget. No matter
              what option you choose, you and your guests can expect to see a
              spectacular, thoughtfully-styled arrangement of high-quality
              blooms.
            </p>
            <p className={`${averageSans.className} text-neutral-white`}>
              Get in touch with me today to have a chat about your ideas and see
              how we can transform your vision into reality!
            </p>
          </article>
        </article>
      </section>

      <CtaButton page={"/contact"}>Get in touch</CtaButton>
    </section>
  );
}
