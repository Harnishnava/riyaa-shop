import React from "react";
import Hero from "./components/hero";
import Products from "./components/products";
import Products2 from "./components/product-2";
import About from "./components/about";

const page = () => {
  return (
    <div>
      <Hero />
      <Products />
      <Products2 />
      <About />
    </div>
  );
};

export default page;
