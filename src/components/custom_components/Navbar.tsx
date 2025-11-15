'use client'

import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/Logo/Logo.png";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navItems = [
    { id: "courses", label: "All Courses", path: "/courses" },
    { id: "academies", label: "Academies", path: "#" },
    {
      id: "community",
      label: "Community",
      path: "https://discord.gg/s3qdUWyrhM",
      target: "_blank"
    },
    { id: "blog", label: "Blog", path: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`z-50 flex items-center px-8 py-6 fixed w-full ${
        scrolled ? "bg-[#000000ef]" : "bg-[#000000ef]/90 backdrop-blur-sm"
      } shadow-md text-white h-[80px] transition-all duration-300`}
    >
      <div className="flex items-center w-full max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center mr-auto gap-10">
          <Link href="/" className="block">
            <Image
              src={logo}
              alt="Logo"
              className="w-[150px] lg:w-[200px] h-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div>
            <ul className="hidden md:flex gap-4 sm:gap-6 lg:gap-10 text-white font-[500] uppercase text-sm lg:text-base font-Poppins">
              {navItems.map((item) => (
                <li key={item.id}>
                  {item.target ? (
                    <a
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition-colors"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      className="hover:text-primary transition-colors"
                      href={item.path}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Desktop Login Button & Mobile Menu Toggle */}
        <div className="flex items-center ml-auto gap-4">
          <Link
            href="/log-in"
            className="px-6 py-[6px] bg-white text-black rounded-full hover:bg-primary hover:text-white font-medium transition-colors hidden md:block font-Poppins"
          >
            Login
          </Link>

          <div className="md:hidden">
            <GiHamburgerMenu
              onClick={toggleMenu}
              className="text-white w-6 h-6 cursor-pointer"
            />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
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
                {item.target ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    href={item.path}
                    className="block py-2 hover:text-primary transition-colors"
                    onClick={toggleMenu}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}

            <li>
              <Link
                href="/log-in"
                className="block px-6 py-[6px] bg-white text-black rounded-full hover:bg-primary hover:text-white font-medium transition-colors w-fit font-Poppins"
                onClick={toggleMenu}
              >
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
