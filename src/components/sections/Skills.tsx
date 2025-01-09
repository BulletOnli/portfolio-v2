import { sanityFetch, urlFor } from "@/lib/sanity";
import { SKILLS_QUERY } from "@/query/sanity";
import { SanityDocument } from "next-sanity";
import Image from "next/image";
import React from "react";

export const Skills = async () => {
  // const skills = await client.fetch<SanityDocument[]>(
  //   SKILLS_QUERY,
  //   {},
  //   options
  // );

  const skills = await sanityFetch<SanityDocument[]>({
    query: SKILLS_QUERY,
  });

  return (
    <section
      id="skills"
      className="w-full sm:px-10 sm:py-16 flex flex-col items-center gap-12"
    >
      <p className="text-4xl font-bold text-center">What I Use to Build</p>

      <div className="w-full flex flex-wrap justify-center items-center gap-4">
        {skills.map((skill) => (
          <div
            key={skill._id}
            className="relative size-28 max-w-28 p-4 flex flex-grow flex-col justify-center items-center gap-2 rounded-xl bg-white/10 "
          >
            <div className="w-full h-full flex justify-center items-center">
              <Image
                width={50}
                height={50}
                src={urlFor(skill.imageSrc)?.url() as string}
                alt={skill.name}
              />
            </div>
            <p className="text-center">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
