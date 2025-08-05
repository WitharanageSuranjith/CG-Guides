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

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer
      className={`bg-black w-full flex justify-center text-white py-12 px-6 ${className}`}
    >
      <div className="max-w-7xl flex flex-col justify-center items-center w-full gap-8">
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
                  <p className="text-gray-400 text-sm">Request Appointment</p>
                </div>

                <div className="space-y-3">
                  <h3 className="text-sm font-medium text-gray-300">
                    Follow Us
                  </h3>
                  <p className="text-gray-400 text-sm">
                    Subscribe to get industry news, inspiration and CG Guides
                    updates in your inbox
                  </p>

                  <div className="flex">
                    <input
                      type="email"
                      placeholder="Email"
                      className="bg-gray-800 text-white px-4 py-2 rounded-l-md flex-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <button className="bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-r-md text-sm transition-colors">
                      →
                    </button>
                  </div>
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
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      Challenges
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      Industry News
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      Marketplace
                    </a>
                  </li>
                </ul>
              </div>

              {/* Academies Section */}
              <div className="space-y-4 xl:pl-16">
                <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Academies
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      Academic Calendar
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      Tracks
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      Courses
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      Gift
                    </a>
                  </li>
                </ul>
              </div>

              {/* About */}
              <div className="space-y-4 xl:pl-16">
                <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                  About
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      CG Guides
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      How It Works
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div className="space-y-4 xl:pl-16">
                <h3 className="text-sm font-medium text-gray-300 uppercase tracking-wider">
                  Resources
                </h3>
                <ul className="space-y-3">
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      Course Guide
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      Portfolio Review
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      Tuition Aid
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      Refund
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white text-sm transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex justify-end">
          <div className="w-full lg:w-fit">
            <div className="flex justify-center space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaFacebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaTiktok className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaYoutube className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <FaDiscord className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
