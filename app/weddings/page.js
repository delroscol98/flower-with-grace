import Image from "next/image";
import { averageSans, rufina } from "../_fonts/Fonts";
import RoundedTextBridalParty from "../_components/RoundedTextBridalParty";
import RoundedTextCeremony from "../_components/RoundedTextCeremony";
import RoundedTextReception from "../_components/RoundedTextReception";
import bridalParty from "@/public/bridal-party.jpeg";
import ceremony from "@/public/ceremony.jpeg";
import reception from "@/public/reception.jpeg";
import CtaButton from "../_components/CtaButton";

export default function WeddingsPage() {
  return (
    <section className="bg-neutral-beige pt-6 px-4 pb-8">
      <h1
        className={`${rufina.className} text-center text-heading-md uppercase mb-10`}
      >
        Pricing Guide
      </h1>

      <article className="grid gap-16">
        <article className="inline-flex flex-col gap-5 justify-self-start">
          <article className="inline-flex flex-col items-center ">
            <h2 className="hidden">Bridal Party</h2>
            <RoundedTextBridalParty />
            <Image
              className="w-60 h-[400px] rounded-t-full mt-[-48px] object-cover"
              src={bridalParty}
              alt=""
            />
          </article>
          <hr className="w-40 self-center border-secondary-blush-pink" />
          <article>
            <article
              className={`flex justify-between ${averageSans.className}`}
            >
              <p>Bridal Bouquets</p>
              <p className="w-2/6">From $300</p>
            </article>
            <article
              className={`flex justify-between ${averageSans.className}`}
            >
              <p>Bridesmaid Bouquets</p>
              <p className="w-2/6">From $170</p>
            </article>
            <article
              className={`flex justify-between ${averageSans.className}`}
            >
              <p>Buttonholes</p>
              <p className="w-2/6">From $15</p>
            </article>
            <article
              className={`flex justify-between ${averageSans.className}`}
            >
              <p>Flower Girl Petals</p>
              <p className="w-2/6">From $15</p>
            </article>
            <article
              className={`flex justify-between ${averageSans.className}`}
            >
              <p>Corsages</p>
              <p className="w-2/6">$15</p>
            </article>
          </article>
        </article>

        <article className="inline-flex flex-col gap-5 justify-self-end">
          <article className="inline-flex flex-col items-center ">
            <h2 className="hidden">Ceremony</h2>
            <RoundedTextCeremony />
            <Image
              className="w-60 h-[400px] rounded-t-full mt-[-20px]"
              src={ceremony}
              alt=""
            />
          </article>
          <hr className="w-40 self-center border-secondary-blush-pink" />
          <article>
            <article
              className={`flex justify-between ${averageSans.className}`}
            >
              <p>Welcome sign</p>
              <p className="w-2/6">$100</p>
            </article>
            <article
              className={`flex justify-between ${averageSans.className}`}
            >
              <p>Welcome sign w/ florals</p>
              <p className="w-2/6">From $180</p>
            </article>
            <article
              className={`flex justify-between ${averageSans.className}`}
            >
              <p>Ceremony Pew Ends</p>
              <p className="w-2/6">From $20</p>
            </article>
            <article
              className={`flex justify-between ${averageSans.className}`}
            >
              <p>Urn arrangements</p>
              <p className="w-2/6">From $350</p>
            </article>
            <article
              className={`flex justify-between ${averageSans.className}`}
            >
              <p>Arbour florals</p>
              <p className="w-2/6">From $700</p>
            </article>
          </article>
        </article>

        <article className="inline-flex flex-col gap-5">
          <article className="inline-flex flex-col items-center ">
            <h2 className="hidden">Reception</h2>
            <RoundedTextReception />
            <Image
              className="w-60 h-[400px] rounded-t-full mt-[-20px] object-cover"
              src={reception}
              alt=""
            />
          </article>
          <hr className="w-40 self-center border-secondary-blush-pink" />
          <article>
            <article
              className={`flex justify-between ${averageSans.className}`}
            >
              <p>Bar arrangements</p>
              <p className="w-2/6">From $350</p>
            </article>
            <article
              className={`flex justify-between ${averageSans.className}`}
            >
              <p>Small, low centerpieces</p>
              <p className="w-2/6">From $150</p>
            </article>
            <article
              className={`flex justify-between ${averageSans.className}`}
            >
              <p>Medium, low centrepieces</p>
              <p className="w-2/6">From $250</p>
            </article>
            <article
              className={`flex justify-between ${averageSans.className}`}
            >
              <p>Large, elevated centrepieces</p>
              <p className="w-2/6">From $385 (incl. stand hire)</p>
            </article>
            <article
              className={`flex justify-between ${averageSans.className}`}
            >
              <p>Glass candelabra</p>
              <p className="w-2/6">From $100</p>
            </article>
            <article
              className={`flex justify-between ${averageSans.className}`}
            >
              <p>Faux flower centrepieces</p>
              <p className="w-2/6">From $120</p>
            </article>
            <article
              className={`flex justify-between ${averageSans.className}`}
            >
              <p>Candle centrepieces</p>
              <p className="w-2/6">From $45</p>
            </article>
            <article
              className={`flex justify-between ${averageSans.className}`}
            >
              <p>Pillar candle or candlestick hire</p>
              <p className="w-2/6">From $10 each</p>
            </article>
            <article
              className={`flex justify-between ${averageSans.className}`}
            >
              <p>Bridal table floral runner</p>
              <p className="w-2/6">From $250 per meter</p>
            </article>
            <article
              className={`flex justify-between ${averageSans.className}`}
            >
              <p>Bridal table floral hedges</p>
              <p className="w-2/6">From $500</p>
            </article>
            <article
              className={`flex justify-between ${averageSans.className}`}
            >
              <p>Hanging installations</p>
              <p className="w-2/6">From $1500</p>
            </article>
          </article>
        </article>

        <CtaButton page={"/contact"}>Get in touch</CtaButton>
      </article>
    </section>
  );
}
