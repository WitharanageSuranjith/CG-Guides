import Image from "next/image";
import c1 from "@/assets/images/Img01.png";
import c2 from "@/assets/images/Img02.png";
import c3 from "@/assets/images/Img03.png";

const cards = [
  { image: c1, alt: "Card 1" },
  { image: c2, alt: "Card 2" },
  { image: c3, alt: "Card 3" },
];

export default function CuratedTracks() {
  return (
    <section className="w-full py-12 px-8">
      <div className="max-w-[1200px] mx-auto flex flex-col xl:flex-row items-center xl:items-start gap-8 ">
        {/* Left: Text */}
        <div className="flex-1 min-w-[320px] xl:max-w-[480px]">
          <h1 className="text-3xl md:text-4xl font-semibold text-black leading-tight mb-4 text-center xl:text-start font-Poppins">
            Curated Tracks for <br className="hidden xl:block" />Your Brilliant Future
          </h1>
          <p className="text-[18px] font-semibold text-black mb-2 text-center xl:text-start">
            Master the ins and outs of your dream career <br /> with tracks explicitly
            crafted to provide quality,<br />  top-to-bottom education in the
            discipline you love.
          </p>
        </div>
        {/* Right: Cards */}
        <div className="flex-1 flex flex-col sm:flex-row gap-6 justify-center w-full">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className="overflow-hidden  w-full sm:w-[220px] h-[400px] sm:h-[300px] bg-white flex items-center justify-center"
            >
              <Image
                src={card.image}
                alt={card.alt}
                width={220}
                height={300}
                className="object-fill w-full h-full rounded-[10px]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}