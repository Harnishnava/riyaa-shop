"use client";
import React from "react";
import { HoverBorderGradient } from "./moving-border";

export default function HoverBorderGradientDemo() {
  return (
    <div className=" text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className=" bg-purple-950 text-white flex items-center space-x-2"
      >
        Shop Now!
      </HoverBorderGradient>
    </div>
  );
}
