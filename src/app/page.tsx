import Image from "next/image";
import logo from "@/assets/images/Logo.png";
import bg1 from "@/assets/images/BG1.jpg";
import bg2 from "@/assets/images/BG2.png";
import bg3 from "@/assets/images/BG3.jpg";
import c1 from "@/assets/images/Courses Cover/CC1.jpg";
import c2 from "@/assets/images/Courses Cover/CC2.jpg";
import c3 from "@/assets/images/Courses Cover/CC3.jpg";
import c4 from "@/assets/images/Courses Cover/CC4.jpg";

export default function Home() {
  return (
    <div>
      <main>

        {/* Navigation Bar */}

        <nav className="z-50 relative flex items-center justify-end px-[32px] py-6 bg-[#00000095] shadow-md text-white">
          <div className="flex items-center w-full max-w-[1200px] mx-auto">
            {/* Logo */}
            <a href="/home" className="block">
              <Image
                src={logo}
                alt="Logo"
                className="w-[200px] h-auto"
                priority
              />
            </a>

            {/* Right-side Links */}
            <div className="flex items-center ml-auto gap-10">
              <ul className="hidden md:flex gap-10 text-white font-[500] uppercase">
                <li><a href="/our_courses">Our Courses</a></li>
                <li><a href="/community">Community</a></li>
                <li><a href="/academies">Academies</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>

              <a
                href="/login"
                className="px-6 py-[6px] bg-white text-black rounded-full hover:bg-[#E55A2B] font-medium transition"
              >
                Login
              </a>
            </div>
          </div>
        </nav>


        {/* Hero Section */}
        <section
          className="relative bg-cover bg-bottom bg-no-repeat h-screen w-full mt-[-300px] absolute bottom-[-40px]"
          style={{ backgroundImage: `url(${bg1.src})` }}
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
          <div className="relative z-10 flex items-center justify-between max-w-[1200px] mx-auto w-full h-full">
            <div className="w-full md:w-[50%] text-white space-y-2 absolute bottom-[300px]">
              <h1 className="text-[48px] md:text-[68px] font-semibold leading-[65px]">
                Learn from the Industry’s Best
              </h1>
              <p className="text-[18px] md:text-[20px] leading-[30px]">
                Innovative online education for a successful <br /> career in the creative industries.
              </p>

              <h2 className="text-[#FF6B35] text-[18px] font-bold leading-[30px]">
                First time around here?
              </h2>

              <div className="flex items-center gap-6">
                <a
                  href="/login"
                  className="px-6 py-2 bg-[#E55A2B] text-white rounded-[6px] hover:text-[#000] font-medium transition"
                >
                  START HERE
                </a>
                <a
                  href="/login"
                  className="text-white text-[18px] font-bold transition"
                >
                  Courses →
                </a>
              </div>
            </div>

            <div className="hidden md:block w-[50%]">
              {/* You can place a character image or graphic here if needed */}
            </div>
          </div>
        </section>

        {/* Learning into Section */}
        <section className="relative bg-auto bg-bottom bg-[#181818] bg-no-repeat h-auto w-full py-[60px]" >rounded-[20px]

          <div className="relative z-10 flex items-center justify-between gap-[15px] max-w-[1200px] mx-auto w-full h-full ">

            <div className="w-[33%]">
              <h2 className="text-[#ffffff] text-[18px] font-bold leading-[30px] mb-[10px]" >Start Learning Online
              </h2>
              <h1 className="text-[40px] font-bold leading-[50px] text-[#E55A2B] ">Choose your journey for the best experience and results.
              </h1>
              <div className="text-[#fff] leading-[40px] mt-[5px]">
                <li>Expert training from industry professionals</li>
                <li>Collaborative virtual classroom</li>
                <li>Personalized expert feedback and live Q&A</li>
                <li>Learn at any level, anywhere</li>
                <li>Lifetime access</li>
              </div>


            </div>
            {/* Intro Video */}

            <div className="w-[67%] pl-[80px]" >

              <div className="  aspect-video  " >
                <iframe
                  className="w-full h-full rounded-[25px] aspect-video "
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

        {/* Find Your Path Section */}
        <section className="relative bg-auto bg-bottom bg-[#ffffff] bg-no-repeat h-auto w-full pt-[60px] pb-[120px]">

          <div className="relative z-10 items-center justify-between gap-[15px] max-w-[1200px] mx-auto w-full h-full">
            <div className="flex justify-between w-full">
              <h1 className="text-[#000] font-bold text-[40px] leading-[40px]">
                Find Your Path.
              </h1>

            </div>

            <h2 className="text-[#000] font-medium text-[22px] leading-[40px]">
              One Academy. Four Industries. Endless Possibilities.
            </h2>



            <div className=" relative  pt-[50px]">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">



                {/*Find Card 1 */}
                <a href="/5" className="w-full">
                  <div className="bg-[#000] w-full h-[270px] rounded-[15px] flex flex-col justify-between overflow-hidden">
                    sss

                  </div>
                </a>


                {/*Find Card 2 */}
                <a href="/5" className="w-full">
                  <div className="bg-[#000] w-full h-[270px] rounded-[15px] flex flex-col justify-between overflow-hidden">

                  </div>
                </a>



                {/*Find Card 3 */}
                <a href="/5" className="w-full">
                  <div className="bg-[#000] w-full h-[270px] rounded-[15px] flex flex-col justify-between overflow-hidden">
                    sss

                  </div>
                </a>



                {/*Find Card 4 */}
                <a href="/5" className="w-full">
                  <div className="bg-[#000] w-full h-[270px] rounded-[15px] flex flex-col justify-between overflow-hidden">
                    sss

                  </div>
                </a>



              </div>
            </div>

          </div>


        </section>

        {/* Featured Courses Section */}
        <section className="relative bg-auto bg-bottom bg-[#000000] bg-no-repeat h-auto w-full py-[60px]">


          <div className="relative z-10 items-center justify-between gap-[15px] max-w-[1200px] mx-auto w-full h-full">
            <div className="flex justify-between w-full">
              <h1 className="text-[#FF6B35] font-bold text-[40px] leading-[40px]">
                Featured Courses.
              </h1>

              <h1 className="text-[#F1F1F1] font-medium text-[25px] leading-[40px]">
                <a href="/courses">
                  All courses →
                </a>
              </h1>
            </div>

            <h2 className="text-[#F1F1F1] font-medium text-[22px] leading-[40px]">
              Gain the skills and knowledge you need to make an impact.
            </h2>


            <div className=" relative z-10 flex items-center justify-between gap-[15px] max-w-[1200px] mx-auto w-full h-full pt-[50px]">


              {/* Courses Card 1 */}

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Card 1 */}
                <a href="/5" className="w-full">
                  <div className="bg-white w-full h-[460px] rounded-[15px] flex flex-col justify-between overflow-hidden">
                    <Image
                      src={c1}
                      alt="Course Thumbnail"
                      className="rounded-[20px] object-cover aspect-[250/270] p-[10px]"
                      width={400}
                      height={300}
                    />
                    <div className="px-[15px] flex flex-col flex-grow">
                      <h1 className="text-black text-[20px] font-bold leading-[25px]">
                        Master Cinematic Storytelling in Blender
                      </h1>
                      <p className="text-black text-[12px] font-medium leading-[13px] pt-[5px]">
                        An 8-week course focused on creating stronger environment paintings based on a narrative of the student’s choice
                      </p>
                    </div>
                    <div className="border-t border-[#ccc] w-full my-[8px]" />
                    <div className="flex justify-between items-center text-black px-[15px] mb-[12px]">
                      <h3 className="text-[13px] font-medium">Intermediate</h3>
                      <h3 className="text-[12px] font-medium border border-black px-[10px] py-[4px] rounded-full">
                        16 Week
                      </h3>
                    </div>
                  </div>
                </a>

                {/* Card 2 */}
                <a href="/5" className="w-full">
                  <div className="bg-white w-full h-[460px] rounded-[15px] flex flex-col justify-between overflow-hidden">
                    <Image
                      src={c2}
                      alt="Course Thumbnail"
                      className="rounded-[20px] object-cover aspect-[250/270] p-[10px]"
                      width={400}
                      height={300}
                    />
                    <div className="px-[15px] flex flex-col flex-grow">
                      <h1 className="text-black text-[20px] font-bold leading-[25px]">
                        3D Environment <br /> Painting and Design
                      </h1>
                      <p className="text-black text-[12px] font-medium leading-[13px] pt-[5px]">
                        An 8-week course focused on creating stronger environment paintings based on a narrative of the student’s choice
                      </p>
                    </div>
                    <div className="border-t border-[#ccc] w-full my-[8px]" />
                    <div className="flex justify-between items-center text-black px-[15px] mb-[12px]">
                      <h3 className="text-[13px] font-medium">Beginner - Intermediate</h3>
                      <h3 className="text-[12px] font-medium border border-black px-[10px] py-[4px] rounded-full">
                        20 Week
                      </h3>
                    </div>
                  </div>
                </a>

                {/* Card 3 */}
                <a href="/5" className="w-full">
                  <div className="bg-white w-full h-[460px] rounded-[15px] flex flex-col justify-between overflow-hidden">
                    <Image
                      src={c3}
                      alt="Course Thumbnail"
                      className="rounded-[20px] object-cover aspect-[250/270] p-[10px]"
                      width={400}
                      height={300}
                    />
                    <div className="px-[15px] flex flex-col flex-grow">
                      <h1 className="text-black text-[20px] font-bold leading-[25px]">
                        Master 3D Characters <br /> Sculpting in Blender
                      </h1>
                      <p className="text-black text-[12px] font-medium leading-[13px] pt-[5px]">
                        An 8-week course focused on creating stronger environment paintings based on a narrative of the student’s choice
                      </p>
                    </div>
                    <div className="border-t border-[#ccc] w-full my-[8px]" />
                    <div className="flex justify-between items-center text-black px-[15px] mb-[12px]">
                      <h3 className="text-[13px] font-medium">Intermediate - Advanced</h3>
                      <h3 className="text-[12px] font-medium border border-black px-[10px] py-[4px] rounded-full">
                        12 Week
                      </h3>
                    </div>
                  </div>
                </a>

                {/* Card 4 */}
                <a href="/5" className="w-full">
                  <div className="bg-white w-full h-[460px] rounded-[15px] flex flex-col justify-between overflow-hidden">
                    <Image
                      src={c4}
                      alt="Course Thumbnail"
                      className="rounded-[20px] object-cover aspect-[250/270] p-[10px]"
                      width={400}
                      height={300}
                    />
                    <div className="px-[15px] flex flex-col flex-grow">
                      <h1 className="text-black text-[20px] font-bold leading-[25px]">
                        Ultimate 3D Sculpting Blender Bundle
                      </h1>
                      <p className="text-black text-[12px] font-medium leading-[13px] pt-[5px]">
                        An 8-week course focused on creating stronger environment paintings based on a narrative of the student’s choice
                      </p>
                    </div>
                    <div className="border-t border-[#ccc] w-full my-[8px]" />
                    <div className="flex justify-between items-center text-black px-[15px] mb-[12px]">
                      <h3 className="text-[13px] font-medium">Advanced</h3>
                      <h3 className="text-[12px] font-medium border border-black px-[10px] py-[4px] rounded-full">
                        8 Week
                      </h3>
                    </div>
                  </div>
                </a>
              </div>







            </div>

          </div>




        </section>



      </main>
    </div>
  );
}
