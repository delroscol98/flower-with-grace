import Image from "next/image";
import RoundedTextBridalParty from "../_components/RoundedTextBridalParty";
import { averageSans, rufina } from "../_fonts/Fonts";
import bridalParty from "@/public/bridal-party.jpeg";

export default function WeddingsPage() {
  return (
    <section className="bg-neutral-beige pt-6 px-4 pb-8">
      <h1
        className={`${rufina.className} text-center text-heading-md uppercase mb-10`}
      >
        Pricing Guide
      </h1>

      <article className="inline-flex flex-col gap-5">
        <article className="inline-flex flex-col items-center ">
          <h2 className="hidden">Bridal Party</h2>
          <RoundedTextBridalParty />
          <Image
            className="w-60 rounded-t-full mt-[-48px]"
            src={bridalParty}
            alt=""
          />
        </article>
        <hr className="w-40 ml-[13px] border-secondary-blush-pink" />
        <article>
          <article className={`flex justify-between ${averageSans.className}`}>
            <p>Bridal Bouquets</p>
            <p className="w-2/6">From $300</p>
          </article>
          <article className={`flex justify-between ${averageSans.className}`}>
            <p>Bridesmaid Bouquets</p>
            <p className="w-2/6">From $170</p>
          </article>
          <article className={`flex justify-between ${averageSans.className}`}>
            <p>Buttonholes</p>
            <p className="w-2/6">From $15</p>
          </article>
          <article className={`flex justify-between ${averageSans.className}`}>
            <p>Flower Girl Petals</p>
            <p className="w-2/6">From $15</p>
          </article>
          <article className={`flex justify-between ${averageSans.className}`}>
            <p>Corsages</p>
            <p className="w-2/6">$15</p>
          </article>
        </article>
      </article>
    </section>
  );
}
