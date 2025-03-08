"use client";
import React, { ReactNode, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GlobalProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    AOS.init();
  }, []);

  return <>{children}</>;
};

export default GlobalProvider;
