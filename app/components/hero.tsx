"use client";
import React from "react";
import Image from "next/image";
import HeroImage from "@/public/riyaa sis photo.png";
import Button from "@/app/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="">
      <div className="max-w-screen-3xl mx-auto px-4 py-28 gap-12 text-gray-600 overflow-hidden md:px-8 md:flex md:items-center">
        <div className="flex-none space-y-5 max-w-3xl ">
          <h1 className="text-4xl text-purple-950 font-extrabold md:text-8xl">
            Unlock Radiant Beauty
          </h1>
          <p className="text-xs">
            Discover the Perfect Fusion of Nature&rsquo;s Finest Ingredients and
            Skincare Expertise at Riyaa.shop. Indulge in Luxurious Beauty
            Rituals Crafted with Care for Your Skin&rsquo;s Ultimate Delight.
          </p>
          <div className="flex items-center gap-x-3 sm:text-sm">
            <Link href="/">
              <Button />
            </Link>
          </div>
        </div>
        <div className=" flex justify-center flex-1 md:block">
          {/* Replace with your image */}
          <Image
            src={HeroImage}
            className="md:max-w-xl md:w-full"
            alt="hii"
            height={1000}
            width={1000}
          />
        </div>
      </div>
      <div className="flex  justify-center md:justify-end">
        <div className="bg-white/30 backdrop-blur-md rounded-full mr-5 ">
          <ul className="flex justify-center items-center mr-5 ml-2 gap-3 mt-5 font-semibold text-gray-900">
            <li>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
              ></motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
              >
                <Link href="/" className="mr-4 hover:underline md:mr-6 ">
                  <div className="rounded-full border item-center border-gray-500 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Capa_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 24 24"
                      xmlSpace="preserve"
                      width="20"
                      height="20"
                      className="stroke-purple-950"
                    >
                      <g>
                        <path d="M12,2.162c3.204,0,3.584,0.012,4.849,0.07c1.308,0.06,2.655,0.358,3.608,1.311c0.962,0.962,1.251,2.296,1.311,3.608   c0.058,1.265,0.07,1.645,0.07,4.849c0,3.204-0.012,3.584-0.07,4.849c-0.059,1.301-0.364,2.661-1.311,3.608   c-0.962,0.962-2.295,1.251-3.608,1.311c-1.265,0.058-1.645,0.07-4.849,0.07s-3.584-0.012-4.849-0.07   c-1.291-0.059-2.669-0.371-3.608-1.311c-0.957-0.957-1.251-2.304-1.311-3.608c-0.058-1.265-0.07-1.645-0.07-4.849   c0-3.204,0.012-3.584,0.07-4.849c0.059-1.296,0.367-2.664,1.311-3.608c0.96-0.96,2.299-1.251,3.608-1.311   C8.416,2.174,8.796,2.162,12,2.162 M12,0C8.741,0,8.332,0.014,7.052,0.072C5.197,0.157,3.355,0.673,2.014,2.014   C0.668,3.36,0.157,5.198,0.072,7.052C0.014,8.332,0,8.741,0,12c0,3.259,0.014,3.668,0.072,4.948c0.085,1.853,0.603,3.7,1.942,5.038   c1.345,1.345,3.186,1.857,5.038,1.942C8.332,23.986,8.741,24,12,24c3.259,0,3.668-0.014,4.948-0.072   c1.854-0.085,3.698-0.602,5.038-1.942c1.347-1.347,1.857-3.184,1.942-5.038C23.986,15.668,24,15.259,24,12   c0-3.259-0.014-3.668-0.072-4.948c-0.085-1.855-0.602-3.698-1.942-5.038c-1.343-1.343-3.189-1.858-5.038-1.942   C15.668,0.014,15.259,0,12,0z" />
                        <path d="M12,5.838c-3.403,0-6.162,2.759-6.162,6.162c0,3.403,2.759,6.162,6.162,6.162s6.162-2.759,6.162-6.162   C18.162,8.597,15.403,5.838,12,5.838z M12,16c-2.209,0-4-1.791-4-4s1.791-4,4-4s4,1.791,4,4S14.209,16,12,16z" />
                        <circle cx="18.406" cy="5.594" r="1.44" />
                      </g>
                    </svg>
                  </div>
                </Link>
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
              >
                <Link
                  href={"https://www.wasap.my/60143208300"}
                  className="mr-4 hover:underline md:mr-6 "
                >
                  <div className="rounded-full border item-center border-gray-500 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      version="1.1"
                      id="Capa_1"
                      x="0px"
                      y="0px"
                      viewBox="0 0 24 24"
                      xmlSpace="preserve"
                      width="20"
                      height="20"
                      className="stroke-purple-950"
                    >
                      <g id="WA_Logo">
                        <g>
                          <path
                            style={{ fillRule: "evenodd", clipRule: "evenodd" }}
                            d="M20.463,3.488C18.217,1.24,15.231,0.001,12.05,0    C5.495,0,0.16,5.334,0.157,11.892c-0.001,2.096,0.547,4.142,1.588,5.946L0.057,24l6.304-1.654    c1.737,0.948,3.693,1.447,5.683,1.448h0.005c6.554,0,11.89-5.335,11.893-11.893C23.944,8.724,22.708,5.735,20.463,3.488z     M12.05,21.785h-0.004c-1.774,0-3.513-0.477-5.031-1.378l-0.361-0.214l-3.741,0.981l0.999-3.648l-0.235-0.374    c-0.99-1.574-1.512-3.393-1.511-5.26c0.002-5.45,4.437-9.884,9.889-9.884c2.64,0,5.122,1.03,6.988,2.898    c1.866,1.869,2.893,4.352,2.892,6.993C21.932,17.351,17.498,21.785,12.05,21.785z M17.472,14.382    c-0.297-0.149-1.758-0.868-2.031-0.967c-0.272-0.099-0.47-0.149-0.669,0.148s-0.767,0.967-0.941,1.166    c-0.173,0.198-0.347,0.223-0.644,0.074c-0.297-0.149-1.255-0.462-2.39-1.475c-0.883-0.788-1.48-1.761-1.653-2.059    s-0.018-0.458,0.13-0.606c0.134-0.133,0.297-0.347,0.446-0.521C9.87,9.97,9.919,9.846,10.019,9.647    c0.099-0.198,0.05-0.372-0.025-0.521C9.919,8.978,9.325,7.515,9.078,6.92c-0.241-0.58-0.486-0.501-0.669-0.51    C8.236,6.401,8.038,6.4,7.839,6.4c-0.198,0-0.52,0.074-0.792,0.372c-0.272,0.298-1.04,1.017-1.04,2.479    c0,1.463,1.065,2.876,1.213,3.074c0.148,0.198,2.095,3.2,5.076,4.487c0.709,0.306,1.263,0.489,1.694,0.626    c0.712,0.226,1.36,0.194,1.872,0.118c0.571-0.085,1.758-0.719,2.006-1.413c0.248-0.694,0.248-1.29,0.173-1.413    C17.967,14.605,17.769,14.531,17.472,14.382z"
                          />
                        </g>
                      </g>
                    </svg>
                  </div>
                </Link>
              </motion.button>
            </li>
            <li>
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 17,
                }}
              >
                <Link
                  href="mailto:admin@riyaa.shop"
                  className="mr-4 hover:underline md:mr-6"
                >
                  <div className="rounded-full border item-center border-gray-500 p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      id="Outline"
                      viewBox="0 0 24 24"
                      width="20"
                      height="20"
                      className="stroke-purple-950"
                    >
                      <path d="M19,1H5A5.006,5.006,0,0,0,0,6V18a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V6A5.006,5.006,0,0,0,19,1ZM5,3H19a3,3,0,0,1,2.78,1.887l-7.658,7.659a3.007,3.007,0,0,1-4.244,0L2.22,4.887A3,3,0,0,1,5,3ZM19,21H5a3,3,0,0,1-3-3V7.5L8.464,13.96a5.007,5.007,0,0,0,7.072,0L22,7.5V18A3,3,0,0,1,19,21Z" />
                    </svg>
                  </div>
                </Link>
              </motion.button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Hero;
