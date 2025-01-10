import React from "react";

const Footer = () => {
  return (
    <div className="w-full my-6 mt-10 flex justify-center items-center">
      <p className="text-white/50 text-sm">
        © {new Date().getFullYear()} Gemmuel Dela Pena
      </p>
    </div>
  );
};

export default Footer;
