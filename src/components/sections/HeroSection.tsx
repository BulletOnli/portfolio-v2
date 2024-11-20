import React from "react";
import ScrollDownArrow from "../ScrollDownArrow";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <div className="flex flex-col items-center gap-8 -mt-28">
        <div className="space-y-2">
          <p className="font-extrabold text-3xl text-orange">I am</p>
          <p className="uppercase font-extrabold text-6xl ">
            GEMMUEL DELA Peña
          </p>
          <p className="font-extrabold text-3xl  text-end text-orange">
            Web Developer
          </p>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-center text-white/50 max-w-xl">
            I'm a web developer based in the Philippines, specializing in
            front-end development. Let's collaborate and bring your ideas to
            life!
          </p>

          <div className="space-x-4">
            <button className="font-semibold min-w-[10rem] px-8 py-3  bg-orange bg-opacity-70 hover:bg-opacity-65 rounded-full">
              Get in touch
            </button>
            <button className="min-w-[10rem] px-8 py-3 bg-white bg-opacity-10 hover:bg-opacity-15 rounded-full">
              About me
            </button>
          </div>
        </div>
      </div>

      <ScrollDownArrow />
    </div>
  );
};

export default HeroSection;
