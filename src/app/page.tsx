import Image from "next/image";
import logo from "@/assets/images/Logo.png";
import character from "@/assets/images/character.jpg";

export default function Home() {
  return (
    <div>
      <main>
        {/* Navigation Bar Section with Background */}
        <section
          className="relative bg-cover bg-center bg-no-repeat h-screen w-full"
          style={{ backgroundImage: `url(${character.src})` }}
        >
          {/* Overlay (optional) */}
          <div className="absolute inset-0 bg-black/60 z-0"></div>

          <nav className="relative z-10 flex items-center justify-between px-[32px] py-6 bg-black/80 shadow-md text-white">
            <div className="flex items-center justify-between w-full max-w-[1200px] mx-auto">
              <Image
                src={logo}
                alt="Logo"
                className="w-[120px] h-auto"
                priority
              />

              {/* Nav Links */}
              <ul className="hidden md:flex gap-10 text-white font-bold uppercase">
                <li><a href="/our_courses">Our Courses</a></li>
                <li><a href="/community">Community</a></li>
                <li><a href="/academies">Academies</a></li>
                <li><a href="/blog">Blog</a></li>
              </ul>

              {/* Login Button */}
              <a
                href="/login"
                className="ml-6 px-6 py-2 bg-white text-black rounded-full hover:bg-gray-200 font-medium transition"
              >
                Login
              </a>
            </div>
          </nav>

          {/* Hero Section */}
          <div className="relative z-10 flex items-center justify-between max-w-[1200px] mx-auto w-full h-full px-8">
            <div className="w-full md:w-1/2 text-white space-y-6">
              <h1 className="text-5xl md:text-7xl font-semibold leading-tight">
                Learn from the Industry’s Best
              </h1>
              <p className="text-xl md:text-2xl">
                Innovative online education for a successful career in the creative industries.
              </p>
            </div>

            <div className="hidden md:block w-1/2">
              {/* Placeholder for right content/image if needed */}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
