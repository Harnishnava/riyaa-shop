import React from "react";
import Image from "next/image";
import HeroImage from "@/public/Remove-bg.ai_1711461625724.png";

const Hero = () => {
  return (
    <section className="">
      <div className="container mx-auto px-4 py-12 relative">
        <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
          {/* Text on the Left */}
          <div className="hidden md:flex-1 md:flex md:items-center justify-center text-center md:text-left text-sm">
            <span className="bg-gray-300 rounded-full px-3 py-1">
              "Discover"
            </span>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-full h-full rounded-xl ">
              <Image
                src={HeroImage}
                alt="Beauty Cream"
                className="rounded-xl"
                width={500}
                height={500}
              />
            </div>
          </div>

          {/* Text on the Right */}
          <div className="flex-1 mt-8 md:mt-0 md:ml-12 md:items-end text-center md:text-left">
            <h1 className="md:text-7xl text-3xl font-bold text-zinc-800">
              Unlock Radiant Beauty
            </h1>
            <p className="mt-4 text-md text-zinc-600">
              Get them together for less! For dewy, natural-looking coverage
              that still looks like skin.
            </p>
            <a
              href="#"
              className="mt-6 inline-block bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 transition-colors"
            >
              SHOP NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
