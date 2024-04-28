"use client";
import { useEffect, useState } from "react";
import Logo from "@/public/Riyaa logo1.3 (C).png";
import Image from "next/image";

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        isScrolled
          ? "bg-white/30 backdrop-blur-md sticky top-0 md:text-sm mx-auto max-w-screen-sm border rounded-full mt-0 z-30 transition-all duration-200"
          : ""
      }`}
      style={{
        transitionProperty: "background-color", // Add transition to background-color
        transitionDuration: "0.2s", // Set transition duration
      }}
    >
      <div className="gap-x-14 items-center justify-between mx-auto flex">
        <div className="flex items-center ml-10 py-1">
          <a href="/">
            <Image src={Logo} width={60} height={60} alt="Float UI logo" />
          </a>
        </div>
        <div className="flex gap-x-6 mt-6 md:flex space-y-0 md:mt-0 md:mr-10">
          <a
            href="/"
            className="md:items-center gap-x-1 p-3 text-purple-950 font-medium"
          >
            Shop Now!
          </a>
        </div>
      </div>
    </nav>
  );
};
export default Nav;
