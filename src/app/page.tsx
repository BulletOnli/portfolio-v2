import ScrollDownArrow from "@/components/ScrollDownArrow";
import React from "react";

const Homepage = () => {
  return (
    <div className="relative z-10 w-full">
      <div className="relative w-full h-screen flex justify-center items-center">
        <div className="flex flex-col items-center gap-14 -mt-28">
          <div className="space-y-2">
            <p className="font-bold text-3xl text-orange">I am</p>
            <p className="uppercase font-extrabold text-6xl">
              GEMMUEL DELA Peña
            </p>
            <p className="font-bold text-3xl text-end text-orange">
              Web Developer
            </p>
          </div>

          <div className="space-x-4">
            <button className="font-semibold min-w-[10rem] px-8 py-3  bg-orange bg-opacity-70 hover:bg-opacity-65 rounded-full">
              Get in touch
            </button>
            <button className="min-w-[10rem] px-8 py-3  bg-white bg-opacity-5 hover:bg-opacity-10 rounded-full">
              About me
            </button>
          </div>
        </div>

        <ScrollDownArrow />
      </div>

      <div className="w-full h-screen"></div>
      <div className="w-full h-screen"></div>
    </div>
  );
};

export default Homepage;
