import gallery1 from "@/public/gallery-1.jpeg";
import gallery2 from "@/public/gallery-2.jpeg";
import gallery3 from "@/public/gallery-3.jpeg";
import gallery4 from "@/public/gallery-4.jpeg";
import gallery5 from "@/public/gallery-5.jpeg";
import gallery6 from "@/public/gallery-6.jpeg";
import Image from "next/image";
import { rufina } from "../_fonts/Fonts";
import CtaButton from "../_components/CtaButton";

export default function GalleryPage() {
  const images = [
    {
      id: 1,
      src: gallery1,
      alt: "A smiling bride stands outdoors holding a large bouquet of white roses and greenery. She is wearing a lace wedding dress with long, sheer sleeves featuring floral embroidery. Her dark, wavy hair is styled loosely, and a pearl necklace adorns her neck. The background shows a lush green hedge, adding a natural and serene atmosphere to the image",
    },
    {
      id: 2,
      src: gallery2,
      alt: "A black-and-white photo captures a bride and groom running together, holding hands, with joyful energy. The bride's flowing gown and veil trail behind her as she lifts it slightly, revealing her heels. The groom is dressed in a suit and holds part of the bride's dress to assist her. The blurred motion adds a dynamic feel to the image. In the background, a grand building with tall columns and ivy-covered walls provides an elegant setting.",
    },
    {
      id: 3,
      src: gallery3,
      alt: "A cheerful wedding party poses in front of an elegant building with tall white columns and brick walls. The bride stands at the center, radiant in a lace wedding gown, holding a bouquet of white roses. Surrounding her are five bridesmaids wearing navy-blue dresses with sparkling bodices and long, flowing skirts. Each bridesmaid holds a bouquet of white flowers, with some raising them playfully in the air. The group shares laughter and smiles, creating a joyful and celebratory scene. Lush greenery adds a touch of nature to the backdrop",
    },
    {
      id: 4,
      src: gallery4,
      alt: "A bride stands gracefully on the steps of Cropley House, smiling as her bridesmaids tend to her elegant lace gown. The bridesmaids, dressed in navy-blue dresses with sparkling bodices, hold white bouquets while adjusting the bride’s train and veil. The grand entrance of the venue, with its white columns and arched doorway, creates a timeless and sophisticated backdrop. The warm lighting and natural expressions of joy add to the charm of this candid wedding moment.",
    },
    {
      id: 5,
      src: gallery5,
      alt: "This black-and-white photograph captures a romantic moment between the bride and groom as they walk hand in hand. The bride's lace gown flows elegantly behind her, while the groom, dressed in a classic black suit, gazes at her lovingly. The natural setting, with towering trees and an open pathway, adds a timeless and cinematic feel to the image. The contrast and lighting create a nostalgic, almost dreamlike atmosphere, emphasizing the deep connection between the couple.",
    },
    {
      id: 6,
      src: gallery6,
      alt: "This beautiful image captures the bride radiating happiness as she looks back with a bright smile. Her bridesmaids, dressed in elegant navy blue gowns with sparkling details, gracefully assist in carrying her flowing lace gown. The lush greenery and soft natural lighting enhance the romantic and joyful atmosphere of the moment. The candid composition perfectly conveys the excitement and warmth of the wedding day.",
    },
  ];

  return (
    <section className="bg-neutral-off-white pt-6 px-4 pb-8">
      <h1
        className={`${rufina.className} text-center text-heading-md uppercase mb-10 text-secondary-blush-pink`}
      >
        Gallery
      </h1>
      <article className="grid gap-4">
        {images.map((image) => (
          <Image
            className="rounded-full"
            key={image.id}
            src={image.src}
            alt={image.alt}
          />
        ))}
      </article>

      <article className="text-center mt-10">
        <CtaButton page={"/contact"}>Book now</CtaButton>
      </article>
    </section>
  );
}
