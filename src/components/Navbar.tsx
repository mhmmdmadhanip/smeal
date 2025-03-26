"use client";

import React from "react";

import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      className={`bg-transparent w-full fixed z-50 py-8 px-4 md:px-12 flex justify-end`}
    >
      <Link
        href={"https://wa.me/+6287782298166"}
        target="_blank"
        rel="noopener noreferrer"
        className="link-navbar flex items-center justify-center px-9 text-white font-medium leading-[150%] py-2"
      >
        Order Here
      </Link>
    </nav>
  );
};

export default Navbar;
