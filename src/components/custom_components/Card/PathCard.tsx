import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface PathCardProps {
  href: string;
  title: string;
  image: StaticImageData | string;
}

export default function PathCard({ href, title, image }: PathCardProps) {
  return (
    <Link href={href} className="w-full">
      <div className="relative w-full h-[350px] rounded-[15px] overflow-hidden group">
        {/* Image */}
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Bottom Dark Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-black/15 group-hover:bg-black/5 transition-colors"></div>


        {/* Bottom-Center Title */}
        <div className="absolute bottom-5 inset-x-0 flex justify-center z-10">
          <h3 className="text-white text-[22px] font-normal font-Poppins text-center drop-shadow-lg px-4">
            {title}
          </h3>
        </div>
      </div>
    </Link>
  );
}




