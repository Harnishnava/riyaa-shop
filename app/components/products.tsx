import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

import Image from "next/image";
import product1 from "@/public/rose.png";
import product2 from "@/public/carrot.png";
import product3 from "@/public/ghee cream.png";
import product4 from "@/public/24k avacado.png";

const products = [
  {
    id: 1,
    name: "Riyaa Rose Face Mask",
    image: product1,
    description:
      "Indulge your skin with this hydrating rose face mask, enriched with rose petals, beetroot powder, and essential oils. With kaolin clay to cleanse and purify, this mask refreshes and evens skin tone while providing a cooling and soothing sensation. Apply a thin layer, leave on for 20-30 minutes, then rinse off with Riyaa Face Wash for best results. Perfect for use 4-5 times a week, leaving your skin moisturized and rejuvenated.",
  },
  {
    id: 2,
    name: "Riyaa Carrot Face Wash.",
    image: product2,
    description:
      "A blend of nourishing oils infused with carrot and beetroot, this daily skincare essential brightens and softens the skin. Formulated with coconut, almond, olive, and rose oils along with saffron, it revitalizes your complexion, leaving it radiant and supple. Ideal for daily use, morning and night, for a refreshed and cleansed face.",
  },
  {
    id: 3,
    name: "Riyaa Ghee Cream",
    image: product3,
    description:
      "Experience the glow with Riyaa Ghee Cream, a luxurious blend of ghee, tulasi water, and rose water. This cream not only brightens and hydrates your skin but also lightens dark spots and reduces dark circles. Its anti-aging properties leave your skin feeling youthful and rejuvenated. Suitable for both face and body, apply day and night for radiant, supple skin.",
  },
  {
    id: 4,
    name: "Riyaa 24K Avocado Oil",
    image: product4,
    description:
      "Unlock the secret to youthful skin with Riyaa 24K Avocado Oil, a potent blend of nourishing oils infused with 24K gold. This oil addresses various skin concerns, from wrinkles to acne, with ingredients like almond oil, grape seed oil, and avocado oil. Rich in antioxidants and anti-inflammatory properties, it tightens the skin, fights aging, and treats acne and pimples. Simply apply a few drops day and night for glowing, rejuvenated skin.",
  },
];

export default function Products() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-start text-start">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-950">
            Revitalize Your Skin with Our Premium Products
          </h1>
          <div className="h-1 w-20 bg-purple-800 rounded mb-2"></div>
          <p className="lg:w-1/2 text-xs w-full leading-relaxed text-gray-900">
            Discover the transformative power of natural ingredients with
            Riyaa.shop&apos;s range of premium skincare products.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((product) => (
            <div key={product.id} className="p-4">
              <div className="bg-white/30 backdrop-blur-md p-6 rounded-lg h-full">
                <Image
                  className="h-40 w-full object-contain object-center mb-6 rounded-lg"
                  src={product.image}
                  height={500}
                  width={500}
                  alt={product.name}
                />
                <h3 className="text-purple-500 text-xs tracking-tight">
                  COSMETICS
                </h3>
                <h2 className="text-lg md:text-2xl text-gray-900 font-medium  mb-4">
                  {product.name}
                </h2>
                <p className="leading-relaxed text-sm md:text-xs">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
