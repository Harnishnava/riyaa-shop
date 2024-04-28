import React from "react";
import Image from "next/image";
import Hero from "@/public/Infinity-00161.jpg";

const about = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-18 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            The Riyaa shop&rsquo;s Story:
            <br className="hidden lg:inline-block" />
            Crafted with Care
          </h1>
          <div className="h-1 w-20 bg-purple-800 rounded mb-2"></div>
          <p className="mb-8 leading-relaxed">
            Riyaa.shop is born from a passion for natural beauty solutions and
            homemade treats. We believe in simple self-care, curating luxurious
            products made with nature&rsquo;s finest ingredients. From
            nourishing avocado oil to decadent homemade cookies, each item is
            crafted with love and attention to detail. Join us in redefining
            self-care, one radiant skin and satisfying bite at a time.
          </p>
          <p className="mb-8 leading-relaxed">
            Shop Now & Experience the Riyaa.shop Difference! Ready to embark on
            a journey of natural beauty and delightful indulgence? Explore our
            collections today and discover the difference Riyaa.shop can make.
            We offer secure online shopping and a commitment to exceptional
            customer service. So pamper yourself, indulge a loved one, or simply
            treat your taste buds with a touch of homemade goodness. Shop
            Riyaa.shop today!
          </p>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-contain object-center rounded-3xl md:rounded-full"
            alt="hero"
            src={Hero}
            width={500}
            height={500}
          />
        </div>
      </div>
    </section>
  );
};

export default about;
