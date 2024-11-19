"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const ScrollDownArrow = () => {
  return (
    <div className="absolute bottom-10  flex flex-col justify-center items-center text-center">
      <motion.div
        animate={{
          y: [0, 24, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          repeatType: "loop",
        }}
        className="cursor-pointer flex flex-col justify-center items-center"
        onClick={() =>
          window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
        }
      >
        <p className="text-center text-lg">Scroll down</p>
        <ChevronDown className="h-12 w-12 text-primary text-orange" />
      </motion.div>
    </div>
  );
};

export default ScrollDownArrow;
