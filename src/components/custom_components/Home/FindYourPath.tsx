import PathCard from "../Card/PathCard";



export default function FindYourPath() {
  return (
    <section className="relative bg-auto bg-bottom bg-[#ffffff] bg-no-repeat h-auto w-full pt-[60px] pb-[120px] px-8">
      <div className="relative z-10 items-center justify-between gap-[15px] max-w-[1200px] mx-auto w-full h-full">
        <div className="flex justify-between w-full">
          <h1 className="text-[#000] font-bold text-2xl md:text3xl lg:text-4xl leading-[40px]">
            Find Your Path.
          </h1>
        </div>

        <h2 className="text-[#000] font-medium text-sm sm:text-base lg:text-2xl leading-[40px]">
          One Academy. Four Industries. Endless Possibilities.
        </h2>

        <div className="relative pt-[20px] sm:pt-[50px]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <PathCard href="/path1" />
            <PathCard href="/path2" />
            <PathCard href="/path3" />
            <PathCard href="/path4" />
          </div>
        </div>
      </div>
    </section>
  );
}