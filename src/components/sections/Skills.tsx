import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="w-full p-10 flex flex-wrap justify-center items-center gap-4">
      <div className="relative size-28 max-w-28 p-4 flex flex-grow flex-col justify-center items-center gap-2 rounded-lg bg-white/10">
        <div className="w-full h-full flex justify-center items-center">
          <Image width={50} height={50} src="/images/react.png" alt="react" />
        </div>
        <p>React</p>
      </div>

      <div className="relative size-28 max-w-28 p-4 flex flex-grow flex-col justify-center items-center gap-2 rounded-lg bg-white/10">
        <div className="w-full h-full flex justify-center items-center">
          <Image width={50} height={50} src="/images/html.png" alt="html" />
        </div>
        <p>Html</p>
      </div>

      <div className="relative size-28 max-w-28 p-4 flex flex-grow flex-col justify-center items-center gap-2 rounded-lg bg-white/10">
        <div className="w-full h-full flex justify-center items-center">
          <Image width={50} height={50} src="/images/css.png" alt="tailwind" />
        </div>
        <p>CSS</p>
      </div>

      <div className="relative size-28 max-w-28 p-4 flex flex-grow flex-col justify-center items-center gap-2 rounded-lg bg-white/10">
        <div className="w-full h-full flex justify-center items-center">
          <Image
            width={50}
            height={50}
            src="/images/tailwind.png"
            alt="tailwind"
          />
        </div>
        <p>Tailwind</p>
      </div>
    </div>
  );
};

export default Skills;
