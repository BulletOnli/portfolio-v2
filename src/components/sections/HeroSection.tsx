import React from "react";
import ScrollDownArrow from "../ScrollDownArrow";
import FloatingLogo from "../FloatingLogo";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center">
      <FloatingLogos />

      <div className="flex flex-col items-center gap-8 -mt-28">
        <div className="space-y-2">
          <h4 className="font-extrabold text-xl sm:text-3xl text-orange">
            I am
          </h4>
          <h1 className="text-center uppercase font-extrabold text-5xl sm:text-6xl ">
            GEMMUEL DELA Peña
          </h1>
          <h4 className="font-extrabold text-xl sm:text-3xl  text-end text-orange">
            Web Developer
          </h4>
        </div>

        <div className="flex flex-col items-center gap-4">
          <p className="text-center text-white/50 max-w-xl">
            A web developer based in the Philippines, specializing in front-end
            development. Let&apos;s collaborate and bring your ideas to life!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="#contact">
              <button className="font-semibold min-w-[10rem] px-8 py-3  bg-orange bg-opacity-70 hover:bg-opacity-65 rounded-full">
                Get in touch
              </button>
            </Link>
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

const FloatingLogos = () => {
  return (
    <>
      <FloatingLogo
        className="absolute left-10 md:top-1/4 bottom-32 md:bottom-auto"
        image="/images/react.png"
        duration={3}
      />
      <FloatingLogo
        className="absolute left-14 sm:left-48 top-32"
        image="/images/nextjs.png"
      />

      <FloatingLogo
        className="absolute right-10 md:top-1/4 bottom-32 md:bottom-auto"
        image="/images/tailwind.png"
      />
      <FloatingLogo
        className="absolute right-14 sm:right-48 top-32"
        image="/images/copilot.png"
        duration={3}
      />
    </>
  );
};

export default HeroSection;
