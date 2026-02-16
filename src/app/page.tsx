import ProjectSection from "@/components/sections/ProjectSection";
import ContactSection from "@/components/sections/ContactSection";
import HeroSection from "@/components/sections/HeroSection";
import Skills from "@/components/sections/Skills";
import React from "react";

export const dynamic = "force-dynamic";

const Homepage = async () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Gemmuel Dela Peña",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    description:
      "A Web developer based on the Philippines. Let's collaborate and bring your ideas to life!",
    author: {
      "@type": "Person",
      name: "Gemmuel Dela Peña",
    },
  };

  return (
    <div className="relative z-10 w-full max-w-7xl mx-auto p-4 space-y-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <Skills />

      <ProjectSection />
      <ContactSection />
    </div>
  );
};

export default Homepage;
