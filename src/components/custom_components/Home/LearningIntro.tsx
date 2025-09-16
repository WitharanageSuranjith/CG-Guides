export default function LearningIntro() {
  return (
    <section className="relative bg-auto bg-bottom bg-dark bg-no-repeat h-auto w-full py-[80px] px-8">
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-[15px] max-w-7xl mx-auto w-full h-full">
        <div className="lg:w-[38%] ">
          <h2 className="text-white text-[16px] font-bold leading-[30px] mb-[10px] font-Poppins - lg:text-[18px] lg:leading-[30px] ">
            Start Learning Online
          </h2>
          <h1 className="font-semibold text-primary font-Poppins - 
          text-[24px]  sm:text-[24px] md:text-[24px] lg:text-[34px] xl:text-[40px]
          leading-[30px]  sm:leading-[30px] md:leading-[30px] lg:leading-[42.5px] xl:leading-[50px]  ">
            Choose your journey for the best experience and results.
          </h1>


          <div className=" text-white  mt-[5px] font-Poppins -
            text-[11px] xs:text-[12px] lg:text-[14px] xl:text-[18px] 
            leading-[22px] xs:leading-[24px] lg:leading-[28px] xl:leading-[36px]">


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



