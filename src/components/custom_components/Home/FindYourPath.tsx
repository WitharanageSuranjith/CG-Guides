import PathCard from "../Card/PathCard";
import P1 from "@/assets/images/Path Cover/P1.jpg";
import P2 from "@/assets/images/Path Cover/P2.jpg";
import P3 from "@/assets/images/Path Cover/P3.jpg";
import P4 from "@/assets/images/Path Cover/P4.jpg";

const Paths = [
  {
    id: 1,
    title: "Art & Illustration",
    image: P1,
    href: "/1",
  },
  {
    id: 2,
    title: "3D & Game Art",
    image: P2,
    href: "/2",
  },
  {
    id: 3,
    title: "Motion & VFX",
    image: P3,
    href: "/3",
  },
  {
    id: 4,
    title: "CAD Design",
    image: P4,
    href: "/4",
  },
];

export default function FindYourPath() {
  return (
    <section className="relative bg-auto bg-bottom bg-[#ffffff] bg-no-repeat h-auto w-full pt-[60px] pb-[120px] px-8">
      <div className="relative z-10 items-center justify-between gap-[15px] max-w-[1200px] mx-auto w-full h-full">
        {/* Heading */}
        <div className="flex justify-between w-full">
          <h1 className="text-[#000] font-bold text-2xl md:text-3xl lg:text-4xl leading-[40px]">
            Find Your Path.
          </h1>
        </div>

        {/* Subheading */}
        <h2 className="text-[#000] font-medium text-sm sm:text-base lg:text-2xl leading-[40px]">
          One Academy. Four Industries. Endless Possibilities.
        </h2>

        {/* Grid of Cards */}
        <div className="relative pt-[20px] sm:pt-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {Paths.map((path) => (
              <PathCard
                key={path.id}
                title={path.title}
                image={path.image}
                href={path.href}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
