import React from "react";
import Image from "next/image";
import Riyaa1 from "@/public/riyaa-productholding.png";
import Riyaa2 from "@/public/riyaa-productholding-2.png";
import Riyaa3 from "@/public/riyaa-productholding-3.png";

const Gallery = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-wrap w-full mb-20 flex-col items-start text-start">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-950">
            Beauty & Delights Showcase
          </h1>
          <div className="h-1 w-20 bg-purple-800 rounded mb-2"></div>
          <p className="lg:w-1/2 w-full leading-relaxed text-gray-900">
            Dive into a visual journey featuring natural beauty solutions and
            homemade treats at Riyaa.shop. Indulge in luxurious skincare
            essentials and delectable cookies, embodying the essence of
            self-care and culinary delight.
          </p>
        </div>
        <div className="mx-auto flex flex-cols">
          {" "}
          <div className="p-4 md:w-1/3">
            <div className="h-full bg-white/30 backdrop-blur-md border-opacity-60 rounded-3xl overflow-hidden mx-auto">
              <Image
                className="lg:h-96 md:h-full w-full object-contain object-center"
                src={Riyaa3}
                height={500}
                width={500}
                alt="blog"
              />
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full bg-white/30 backdrop-blur-md border-opacity-60 rounded-3xl overflow-hidden mx-auto">
              <Image
                className="lg:h-96 md:h-full w-full object-contain object-center"
                src={Riyaa1}
                height={500}
                width={500}
                alt="blog"
              />
            </div>
          </div>
          <div className="p-4 md:w-1/3">
            <div className="h-full bg-white/30 backdrop-blur-md border-opacity-60 rounded-3xl overflow-hidden mx-auto">
              <Image
                className="lg:h-96 md:h-full w-full object-contain object-center"
                src={Riyaa2}
                height={500}
                width={500}
                alt="blog"
              />
            </div>
          </div>
        </div>

        <p className="w-full leading-relaxed text-center flex justify-center text-gray-900">
          Dive into a visual journey featuring natural beauty solutions and
          homemade treats at Riyaa.shop. Indulge in luxurious skincare
          essentials and delectable cookies, embodying the essence of self-care
          and culinary delight.
        </p>
      </div>
    </section>
  );
};

export default Gallery;
