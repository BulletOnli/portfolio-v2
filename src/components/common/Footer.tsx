import React from "react";

const Footer = () => {
  const originalYear = 2022;
  const currentYear = new Date().getFullYear();
  const displayYear = `${originalYear}-${currentYear}`;

  return (
    <div className="w-full my-6 mt-10 flex justify-center items-center">
      <p className="text-white/50 text-sm">
        © {displayYear} Gemmuel Dela Pena
      </p>
    </div>
  );
};

export default Footer;
