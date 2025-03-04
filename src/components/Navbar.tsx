"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import logo from "@/../public/smeal-logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className={`bg-transparent w-full fixed z-50 py-8 px-4 md:px-12 flex justify-between`}
    >
      <Image src={logo} alt="SMeal Logo" width={96} className="md:w-32" />

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