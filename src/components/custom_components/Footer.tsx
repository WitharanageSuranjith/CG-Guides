import React from "react";
import {
  FaTwitter,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaWhatsapp,
  FaYoutube,
  FaDiscord,
} from "react-icons/fa";
import FooterLogo from "../../assets/images/Logo/FooterLogo.png";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer
      className={`bg-[#121212] w-full flex justify-center text-white py-12 px-8 ${className}`}
    >
      <div className="max-w-7xl flex flex-col justify-center items-center w-full">
        <div className=" flex flex-col sm:flex-row w-full gap-10 sm:gap-0">
          <div className="sm:max-w-[300px] order-2 sm:order-1">
            <div className="">
              {/* Brand Section */}
              <div className="space-y-6 sm:space-y-8">
                <div className="flex items-center space-x-2">
                  <Image
                    src={FooterLogo}
                    alt="footer logo"
                    width={150}
                    height={150}
                    className=""
                  />
                </div>

                <div className="">
                  <p className="text-lg font-medium">1-256-823-6836</p>
                  <p className="text-[#B1B1B1] text-sm">Request Appointment</p>
                </div>

                <div className="space-y-3 w-[250px]">
                
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col  items-end w-full gap-8 sm:gap-16 order-1 sm:order-2">
            <div className=" grid grid-cols-2 lg:grid-cols-4 gap-16 w-full sm:w-11/12">
              {/* Community Section */}
              <div className="space-y-4 xl:pl-16">
                <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Community
                </h3>
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="#"
                      className="text-[#B1B1B1] hover:text-white text-sm transition-colors"
                    >
                      Challenges
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#B1B1B1] hover:text-white text-sm transition-colors"
                    >
                      Industry News
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#B1B1B1] hover:text-white text-sm transition-colors"
                    >
                      Marketplace
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Academies Section */}
              <div className="space-y-4 xl:pl-16">
                <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Academies
                </h3>
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="#"
                      className="text-[#B1B1B1] hover:text-white text-sm transition-colors"
                    >
                      Academic Calendar
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#B1B1B1] hover:text-white text-sm transition-colors"
                    >
                      Tracks
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#B1B1B1] hover:text-white text-sm transition-colors"
                    >
                      Courses
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#B1B1B1] hover:text-white text-sm transition-colors"
                    >
                      Gift
                    </Link>
                  </li>
                </ul>
              </div>

              {/* About */}
              <div className="space-y-4 xl:pl-16">
                <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                  About
                </h3>
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="#"
                      className="text-[#B1B1B1] hover:text-white text-sm transition-colors"
                    >
                      CG Guides
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#B1B1B1] hover:text-white text-sm transition-colors"
                    >
                      How It Works
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#B1B1B1] hover:text-white text-sm transition-colors"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div className="space-y-4 xl:pl-16">
                <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Resources
                </h3>
                <ul className="space-y-1">
                  <li>
                    <Link
                      href="#"
                      className="text-[#B1B1B1] hover:text-white text-sm transition-colors"
                    >
                      Course Guide
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#B1B1B1] hover:text-white text-sm transition-colors"
                    >
                      Portfolio Review
                    </Link>
                  </li>
                 
                  <li>
                    <Link
                      href="#"
                      className="text-[#B1B1B1] hover:text-white text-sm transition-colors"
                    >
                      FAQ
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#B1B1B1] hover:text-white text-sm transition-colors"
                    >
                      Refund
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-[#B1B1B1] hover:text-white text-sm transition-colors"
                    >
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>


{/* Footer Bottom  */}

       <div className="w-full flex items-end justify-between flex-wrap">
  {/* Left Section */}
  <div className="sm:max-w-[300px] order-1 mb-6 sm:mb-0">
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-gray-300">
        Follow Us
      </h3>
      <p className="text-[#B1B1B1] text-sm">
        Subscribe to get industry news, inspiration and CG Guides updates in your inbox
      </p>

      <div className="flex">
        <input
          type="email"
          placeholder="Email"
          className="bg-[rgba(255,255,255,0.20)] text-white px-4 py-2 rounded-l-md flex-1 text-sm focus:outline-none focus:ring-1 focus:ring-[#FF6B35]"
        />
        <button className="bg-[rgba(255,255,255,0.20)] hover:bg-[rgba(255,255,255,0.40)] px-4 py-2 rounded-r-md text-sm transition-colors">
          →
        </button>
      </div>
    </div>
  </div>

  {/* Right Section */}
  <div className="w-full lg:w-fit order-2">
    <div className="flex justify-center space-x-6">
      <Link href="#" className="text-[#B1B1B1] hover:text-white transition-colors"><FaTwitter className="w-5 h-5" /></Link>
      <Link href="#" className="text-[#B1B1B1] hover:text-white transition-colors"><FaFacebook className="w-5 h-5" /></Link>
      <Link href="#" className="text-[#B1B1B1] hover:text-white transition-colors"><FaInstagram className="w-5 h-5" /></Link>
      <Link href="#" className="text-[#B1B1B1] hover:text-white transition-colors"><FaTiktok className="w-5 h-5" /></Link>
      <Link href="#" className="text-[#B1B1B1] hover:text-white transition-colors"><FaWhatsapp className="w-5 h-5" /></Link>
      <Link href="#" className="text-[#B1B1B1] hover:text-white transition-colors"><FaYoutube className="w-5 h-5" /></Link>
      <Link href="#" className="text-[#B1B1B1] hover:text-white transition-colors"><FaDiscord className="w-5 h-5" /></Link>
    </div>
  </div>
</div>

      </div>
    </footer>
  );
};

export default Footer;
