"use client";

import React, { useState } from "react";
import Image from "next/image";
import Shampoo from "@/public/shampoo.png";
import Spray from "@/public/hair spray.png";
import Conditioner from "@/public/riyaa&onion conditionar.png";

const products = [
  {
    id: 1,
    name: "Riyaa pure Hibiscus Shampoo",
    image: Shampoo,
    volume: "200ml",
    description: "Benefits: reduce hair fall problem, deep cleanse & hydration",
    additionalDescription:
      "Ingredients: Hibiscus, aloe vera, rose petals, curry leaves, soap nuts, Neem, amla",
  },
  {
    id: 2,
    name: "Riyaa & Onion Conditioner",
    image: Conditioner,
    volume: "100ml",
    description: "Benefits: reduce hair fall problem, deep cleanse & hydration",
    additionalDescription:
      "Ingredients: Rice, onion, butter, almond milk and argan oil",
  },
  {
    id: 3,
    name: "Riyaa ultimate hair spray",
    image: Spray,
    volume: "250ml",
    description:
      "Benefits: better improves the environment of your scalp and hair. It helps to promote a healthy hair cycle and boost hair density for stronger and thicker hair.",
    additionalDescription:
      "Directions: Spray generously on towel-dried or dry hair, focusing on hairline and problem areas. Massage gently with fingertips until absorbed. Smooth excess product through hair. No need to rinse. Discontinue if irritation occurs.",
  },
];

const Product2 = () => {
  const [expandedCardId, setExpandedCardId] = useState<number | null>(null);

  const toggleCardExpansion = (productId: number) => {
    setExpandedCardId((prevId) => (prevId === productId ? null : productId));
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-start text-start">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-950">
            Discover Our New Hair Care Essentials
          </h1>
          <div className="h-1 w-20  bg-purple-800 rounded mb-2"></div>
          <p className="lg:w-1/2 text-xs w-full leading-relaxed text-gray-900">
            Experience the transformative potential of our premium hair care
            essentials, crafted with care to rejuvenate and nourish your hair.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {products.map((product) => (
            <div key={product.id} className="p-4 md:w-1/3">
              <div className="h-4/5 border-2 bg-white/30 backdrop-blur-md rounded-xl overflow-hidden">
                <Image
                  className="h-1/2 w-full object-contain object-center"
                  src={product.image}
                  alt={product.name}
                />
                <div className="p-6">
                  <h2 className="tracking-widest text-xs text-purple-500 mb-1">
                    {product.volume}
                  </h2>
                  <h1 className="title-font text-xl md:text-xl font-medium text-gray-900 mb-3">
                    {product.name}
                  </h1>
                  <p className="leading-relaxed mb-3 text-xs ">
                    {product.description}
                  </p>
                  {expandedCardId === product.id && (
                    <p className="leading-relaxed mb-3 text-xs ">
                      {product.additionalDescription}
                    </p>
                  )}
                  <div className="flex items-center flex-wrap">
                    <button
                      onClick={() => toggleCardExpansion(product.id)}
                      className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 ml-2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m19.5 8.25-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product2;
