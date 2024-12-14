import CtaButton from "./_components/CtaButton";
import home1 from "@/public/home-1.jpeg";
import home2 from "@/public/home-2.jpeg";
import reviews1 from "@/public/reviews-1.jpeg";
import Image from "next/image";
import { averageSans, rufina } from "./_fonts/Fonts";
import RoundedText from "./_components/RoundedText";

import Footer from "./_components/Footer";

export default function Home() {
  return (
    <>
      <section className="bg-secondary-blushy-pink pt-14 px-4 pb-8">
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

      <section className="bg-neutral-beige pt-14 px-4 pb-8">
        <h2 className={`${rufina.className} text-heading-md mb-7`}>Reviews</h2>

        <article className="mb-10">
          <article className="relative overflow-x-clip">
            <Image
              className="rounded-t-full rounded-b-full"
              src={reviews1}
              alt="A smiling bride with long, dark hair, wearing a lace wedding dress with long sleeves, holds a lush bouquet of white flowers and greenery. She stands in a softly lit indoor setting with wooden doors in the background, showcasing an elegant and joyful atmosphere."
            />
            <RoundedText />
          </article>

          <article
            className={`${averageSans.className} mt-20 text-accent-dark-brown`}
          >
            <p>
              “I was so blessed to have Abby do the flowers for my wedding. She
              made the experience so personal and warm. We discussed my vision
              board, Pinterest inspirations, and colour themes, and she
              thoughtfully asked me questions to ensure we were on on the same
              page for each bouquet or buttonhole.
              <br /> I felt confident leaving the flowers in her capable hands
              as she understood my dream arrangements and was motivated to help
              my special day look beautiful. Thank you Abby for your hard work,
              all my family and friends still admire the beautiful flowers from
              my wedding!”
            </p>
            <p className="mt-11">Michaela & Sam</p>
          </article>
        </article>

        <CtaButton page="/weddings">Our Pricing Guide</CtaButton>
      </section>

      <Footer />
    </>
  );
}
