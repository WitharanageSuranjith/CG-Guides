import React from "react";
import ImageGrid from "./ImageGrid";



const StudentShowcase = () => {
  return (
    <section className="relative bg-auto bg-bottom bg-[#ffffff] bg-no-repeat h-auto w-full pt-[60px] pb-[120px] px-8">
      <div className="relative z-10 items-center justify-between gap-[15px] max-w-[1200px] mx-auto w-full h-full">
        <div className="flex flex-col gap-3 justify-between w-full">
          <span className="text-[#000] text-3xl md:text4xl lg:text-5xl">
            Student Showcase.
          </span>
          <span className="text-[#000] font-medium text-sm sm:text-base lg:text-xl">
            From novice creatives looking to jumpstart their career to seasoned
            pros adding to their toolkit, our students produce thoughtful,
            mind-blowing work. We want the world to see it.
          </span>
        </div>

        <div className="relative pt-[20px] sm:pt-[50px]">
          <ImageGrid/>
        </div>
      </div>
    </section>
  );
};

export default StudentShowcase;
