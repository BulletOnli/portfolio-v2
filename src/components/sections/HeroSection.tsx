import React from "react";
import ScrollDownArrow from "../ScrollDownArrow";
import FloatingLogo from "../FloatingLogo";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="relative w-full h-svh flex justify-center items-center">
      <FloatingLogos />

      <div className="flex flex-col items-center gap-8 -mt-28">
        <div className="space-y-2">
          <h4
            data-aos="fade-right"
            data-aos-delay="300"
            className="font-extrabold text-xl sm:text-3xl text-orange"
          >
            I am
          </h4>
          <h1
            data-aos="zoom-in"
            data-aos-delay="100"
            className="text-center uppercase font-extrabold text-5xl sm:text-6xl "
          >
            GEMMUEL DELA Peña
          </h1>
          <h4
            data-aos="fade-left"
            data-aos-delay="300"
            className="font-extrabold text-xl sm:text-3xl  text-end text-orange"
          >
            Web Developer
          </h4>
        </div>

        <div
          data-aos="zoom-in-up"
          data-aos-delay="600"
          className="flex flex-col items-center gap-4"
        >
          <p className="text-center text-white/50 max-w-xl">
            A web developer based in the Philippines, specializing in front-end
            development. Let&apos;s collaborate and bring your ideas to life!
          </p>

          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
            <Link href="#contact">
              <button className="text-sm sm:text-base font-semibold min-w-[10rem] px-8 py-3  bg-orange bg-opacity-70 hover:bg-opacity-65 rounded-full">
                Get in touch
              </button>
            </Link>
            <Link
              href="https://www.linkedin.com/in/gemmuel-dela-pena"
              target="_blank"
            >
              <button className="text-sm sm:text-base min-w-[10rem] px-8 py-3 bg-white bg-opacity-10 hover:bg-opacity-15 rounded-full">
                About me
              </button>
            </Link>
          </div>
        </div>
      </div>

      <ScrollDownArrow />
    </section>
  );
};

const FloatingLogos = () => {
  return (
    <>
      <FloatingLogo
        className="absolute left-10 md:top-1/4 bottom-28 md:bottom-auto"
        image="/images/react.png"
        duration={3}
      />
      <FloatingLogo
        className="absolute left-14 sm:left-48 top-16 sm:top-32"
        image="/images/nextjs.png"
      />

      <FloatingLogo
        className="absolute right-10 md:top-1/4 bottom-24 md:bottom-auto"
        image="/images/tailwind.png"
      />
      <FloatingLogo
        className="absolute right-14 sm:right-48 top-10 sm:top-32"
        image="/images/copilot.png"
        duration={3}
      />
    </>
  );
};

export default HeroSection;
