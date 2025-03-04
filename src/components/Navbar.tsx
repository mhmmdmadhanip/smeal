"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/../public/smeal-logo.png";
import Link from "next/link";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed z-50 py-8 px-12 flex justify-between transition-all duration-300 ${
        isScrolled ? "bg-[#259426]" : "bg-transparent"
      }`}
    >
      <Image src={logo} alt="SMeal Logo" width={64} className="md:w-32" />

      <Link
        href={"/"}
        className="link-navbar flex items-center justify-center px-9 text-white font-medium leading-[150%] py-2"
      >
        Order Here
      </Link>
    </nav>
  );
};

export default Navbar;