import ScrollDownArrow from "@/components/ScrollDownArrow";
import HeroSection from "@/components/sections/HeroSection";
import Skills from "@/components/sections/Skills";
import React from "react";

const Homepage = () => {
  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto p-4">
      <HeroSection />
      <Skills />

      <div className="w-full h-screen"></div>
      <div className="w-full h-screen"></div>
    </div>
  );
};

export default Homepage;
