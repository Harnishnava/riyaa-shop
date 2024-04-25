import React from "react";
import Image from "next/image";
import HeroImage from "@/public/hero image 2.png";

const Hero = () => {
  return (
    <div className="lg:flex bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-indigo-300 via-indigo-200 to-pink-300">
      <div className="flex items-center justify-between w-full px-6 py-8 md:h-[42rem] md:w-1/2 ">
        <div className="max-w-3xl bg-slate-50 rounded-2xl p-20 ">
          <h2 className="text-4xl font-medium text-gray-800  md:text-8xl">
            Build Your New{" "}
            <span className="text-blue-600 dark:text-blue-400">Idea</span>
          </h2>

          <p className="mt-4 text-sm text-gray-800  md:text-xs">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
            commodi cum cupiditate ducimus, fugit harum id necessitatibus odio
            quam quasi, quibusdam rem tempora voluptates.
          </p>

          <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
            <a
              href="#"
              className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-white transition-colors duration-300 transform bg-gray-900 rounded-md hover:bg-gray-700"
            >
              Get Started
            </a>
            {/* <a
              href="#"
              className="block px-5 py-2 text-sm font-medium tracking-wider text-center text-gray-700 transition-colors duration-300 transform bg-gray-200 rounded-md lg:mx-4 hover:bg-gray-300"
            >
              Learn More
            </a> */}
          </div>
        </div>
      </div>

      <div className="w-full h-72 lg:w-3/6 lg:h-auto ">
        <div className="w-full h-full relative z-10">
          <Image
            src={HeroImage}
            alt="Hero image"
            layout="fill"
            objectFit="contain"
            className="rounded-xl z-20"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
