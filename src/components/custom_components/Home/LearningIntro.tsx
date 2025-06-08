export default function LearningIntro() {
  return (
    <section className="relative bg-auto bg-bottom bg-[#181818] bg-no-repeat h-auto w-full py-[60px] px-8">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-[15px] max-w-[1200px] mx-auto w-full h-full">
        <div className="lg:w-[38%] ">
          <h2 className="text-[#ffffff] text-[16px] font-bold leading-[30px] mb-[10px] font-Poppins - lg:text-[18px] lg:leading-[30px] ">
            Start Learning Online
          </h2>
          <h1 className="text-2xl md:text3xl  font-semibold leading-7 sm:text-leading-9 text-[#E55A2B] font-Poppins - lg:text-[40px] lg:leading-[50px]">
            Choose your journey for the best experience and results.
          </h1>
          <div className=" text-[#fff] text-[12px] sm:leading-[40px] mt-[5px] font-Poppins - lg:text-[18px] lg:leading-[40px]">
            <li>Expert training from industry professionals</li>
            <li>Collaborative virtual classroom</li>
            <li>Personalized expert feedback and live Q&A</li>
            <li>Learn at any level, anywhere</li>
            <li>Lifetime access</li>
          </div>
        </div>

        {/* Intro Video */}
        <div className="lg:w-[62%]  lg:max-w-[62%]    max-w-[600px]   lg:pl-[80px w-full">
          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-[25px] aspect-video"
              src="https://www.youtube.com/embed/UXqq0ZvbOnk"
              title="YouTube Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}