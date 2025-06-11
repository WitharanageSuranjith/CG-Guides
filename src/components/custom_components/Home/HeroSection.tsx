

export default function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-bottom bg-no-repeat h-screen w-full font-Poppins hero-bg  px-8"
     
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(to top, #0404041A, #ffffff00),
            linear-gradient(to right, #000000c9, #feb00000)
          `
        }}
      ></div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-between max-w-[1200px] mx-auto h-full ">
        <div className="w-full md:w-[70%] text-white space-y-2 absolute lg:w-[50%] bottom-[100px] md:bottom-[200px] lg:bottom-[300px] ">
          <h1 className="text-[32px] sm:text-[48px] md:text-[55px] lg:text-[60px] xl:text-[68px] font-semibold leading-[35px] sm:leading-[48px] md:leading-[65px]">
            Learn from the  <br />  Industry&apos; Best
          </h1>
          <p className="text-sm md:text-[20px]  md:leading-[30px] font-Poppins">
            Innovative online education for a successful <br /> career in the creative industries.
          </p>

          <h2 className="text-[#FF6B35] text-[18px] font-bold leading-[30px] font-Poppins">
            First time around here?
          </h2>

          <div className="flex items-center gap-6 ">
            <a
              href="/login"
              className="px-6 py-2 bg-[#E55A2B] text-white rounded-[6px] hover:text-[#000] font-medium transition font-Poppins text-[14px] xs:text-[16px]"
            >
              START HERE
            </a>
            <a
              href="/login"
              className="text-white  font-bold transition font-Poppins text-[16px] xs:text-[18px]"
            >
              Courses →
            </a>
          </div>
        </div>

        <div className="hidden md:block w-[50%]">
          {/* Character image or graphic can be placed here */}
        </div>
      </div>
    </section>
  );
}