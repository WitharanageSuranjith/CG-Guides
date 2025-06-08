'use client'

import Image from "next/image";
import logo from "@/assets/images/Logo.png";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { id: "courses", label: "Our Courses", path: "#" },
    { id: "community", label: "Community", path: "#" },
    { id: "academies", label: "Academies", path: "#" },
    { id: "blog", label: "Blog", path: "#" },
  ];

  return (
    <nav className="z-50 flex items-center  px-[32px] py-6 bg-[#00000095] shadow-md text-white  h-[80px] fixed w-full">
      <div className="flex items-center w-full max-w-[1200px] mx-auto">
        {/* Logo */}
        <a href="#" className="block">
          <Image
            src={logo}
            alt="Logo"
            className="w-[150px] lg:w-[200px] h-auto"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <div className="flex items-center ml-auto gap-10">
          <ul className="hidden md:flex gap-4 sm:gap-6 lg:gap-10 text-white font-[500] uppercase text-sm lg:text-base font-Poppins" >
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={item.path}>{item.label}</a>
              </li>
            ))}
          </ul>







          <a
            href="#"
            className="px-6 py-[6px] bg-white text-black rounded-full hover:bg-[#E55A2B] font-medium transition hidden md:block font-Poppins"
          >
            Login
          </a>

          {/* Mobile hamburger menu button */}
          <div className="md:hidden ml-4">
            <GiHamburgerMenu
              onClick={toggleMenu}
              className="text-white w-6 h-6 cursor-pointer "
            />
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 top-0 w-full h-full bg-[#00000095] backdrop-blur-sm z-[1000] pt-20 px-8 font-Poppins">
          <div className="flex justify-end absolute top-6 right-8">
            <IoClose
              onClick={toggleMenu}
              size={30}
              className="cursor-pointer text-white"
            />
          </div>
          
          <ul className="flex flex-col gap-6 text-white uppercase text-lg">
            {navItems.map((item) => (
              <li key={item.id}>
                <a 
                  href={item.path} 
                  className="block py-2 hover:text-[rgb(229,90,43)] transition"
                  onClick={toggleMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className="block px-6 py-[6px] bg-white text-black rounded-full hover:bg-[#E55A2B] font-medium transition w-fit font-Poppins"
                onClick={toggleMenu}
              >
                Login
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}