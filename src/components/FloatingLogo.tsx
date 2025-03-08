import Image from "next/image";
import React from "react";

type Props = {
  className?: string;
  image: string;
  alt?: string;
  duration?: number;
};

const FloatingLogo = ({
  className = `absolute left-${Math.floor(Math.random() * 90)} top-1/4`,
  image,
  alt,
  duration = 4,
}: Props) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay="600"
      className={`flex items-center justify-center ${className}`}
    >
      <div
        className="relative size-16 sm:size-20"
        style={{
          animation: `float ${duration}s ease-in-out infinite`,
        }}
      >
        <div className="absolute inset-2 bg-white/5 rounded-full shadow-inner"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={image}
            alt={alt || "Floating logo"}
            width={80}
            height={80}
            className="size-2/4 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

// const FloatingLogo = () => {
//   return (
//     <div className="absolute left-0 flex items-center justify-center animate-float">
//       <Image
//         src="/images/tech logos/react.png"
//         alt="Next.js Logo"
//         width={80}
//         height={80}
//         className="w-3/5 h-3/5 object-contain"
//       />
//     </div>
//   );
// };

export default FloatingLogo;
