import Image from "next/image";
import React from "react";

const images = [
  // Replace these URLs with your own images if needed
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
  "https://images.unsplash.com/photo-1519125323398-675f0ddb6308",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
  "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca",
];

const ImageGrid = () => {
  return (
    <div className="relative pt-[20px] sm:pt-[50px]">
      <div className="w-full flex flex-col gap-3">
        <div className="flex flex-col">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {images.map((src, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl bg-gray-200 aspect-[4/3] "
              >
                <Image
                  width={300}
                  height={300}
                  src={src}
                  alt="Student artwork"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-200"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <div className="w-4/12 rounded-xl">
            <Image
              width={300}
              height={300}
              src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
              alt="Student artwork"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-200 rounded-xl max-h-[140px] max-w-[392px]"
              loading="lazy"
            />
          </div>
          <div className="w-8/12">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 h-full">
              {images.map((src, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-xl bg-gray-200 aspect-[4/3] h-full max-w-[122px]"
                >
                  <Image
                    width={300}
                    height={300}
                    src={src}
                    alt="Student artwork"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-200 "
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className=" flex flex-row gap-3">
          <div className="w-4/12 flex flex-col gap-3">
            <div className="flex flex-row gap-3">
              <div className="w-1/2 rounded-xl">
                <Image
                  width={300}
                  height={300}
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                  alt="Student artwork"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-200 rounded-xl max-h-[140px] max-w-[186px]"
                  loading="lazy"
                />
              </div>
              <div className="w-1/2 rounded-xl">
                <Image
                  width={300}
                  height={300}
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                  alt="Student artwork"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-200 rounded-xl max-h-[140px] max-w-[186px]"
                  loading="lazy"
                />
              </div>
            </div>
            <div className=" rounded-xl">
              <Image
                width={300}
                height={300}
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                alt="Student artwork"
                className="object-cover w-full h-full hover:scale-105 transition-transform duration-200 rounded-xl max-h-[140px] max-w-[392px]"
                loading="lazy"
              />
            </div>
          </div>
          <div className="">
            <div className="grid grid-cols-3 gap-3 h-full">
              {images.map((src, idx) => (
                <div
                  key={idx}
                  className="overflow-hidden rounded-xl bg-gray-200 aspect-[4/3] h-full max-w-[120px]"
                >
                  <Image
                    width={300}
                    height={300}
                    src={src}
                    alt="Student artwork"
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-200 "
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
           <div className="w-4/12 flex flex-col gap-3 relative left-2">
            <div className="flex flex-row gap-3 h-full">
              <div className="w-1/2 rounded-xl">
                <Image
                  width={300}
                  height={300}
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                  alt="Student artwork"
                  className="object-cover w-full hover:scale-105 transition-transform duration-200 rounded-xl h-full max-w-[186px]"
                  loading="lazy"
                />
              </div>
              <div className="w-1/2 rounded-xl">
                <Image
                  width={300}
                  height={300}
                  src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                  alt="Student artwork"
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-200 rounded-xl max-w-[186px]"
                  loading="lazy"
                />
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGrid;

