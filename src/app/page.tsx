import HeroSection from "@/components/sections/HeroSection";
import Skills from "@/components/sections/Skills";
import React from "react";

export const dynamic = "force-dynamic";

const Homepage = async () => {
  return (
    <main className=" relative z-10 w-full max-w-7xl mx-auto p-4 space-y-20">
      <HeroSection />
      <Skills />

      <section className="w-full h-screen px-10 py-20 flex flex-col items-center gap-12">
        <p className="text-4xl font-bold">Featured Projects</p>
      </section>
      <section className="w-full h-screen px-10 py-20 flex flex-col items-center gap-12">
        <p className="text-4xl font-bold">Get in touch</p>
      </section>
    </main>
  );
};

export default Homepage;
