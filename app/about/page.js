import Image from "next/image";
import { averageSans, rufina } from "../_fonts/Fonts";
import about1 from "@/public/about-1.jpeg";

export default function AboutPage() {
  return (
    <>
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
          alt="Flower with Grace owner and creative director carefully arranges a hanging installation of flowers on a blank white wall behind a white table decorated with candles and vases with flowers."
        />

        <article
          className={`${averageSans.className} text-paragraph text-neutral-white grid gap-4 mt-10 mb-10`}
        >
          <p>
            I&apos;ve always loved all things flowers, design and styling,
            whether it be curating a bouquet to brighten up my home or using my
            creativity to style a friend&apos;s special event.
          </p>
          <p>
            Since having my baby girl, I&apos;ve decided to branch out from my
            career in healthcare to further develop my creative skills and
            pursue my passion for floristry!
          </p>
          <p>
            After working with the wonderful wedding florist & stylist, Kristela
            Marie, I decided to take the leap and bring my dream to life through
            the creation of Flower with Grace!
          </p>
        </article>
      </section>
    </>
  );
}
