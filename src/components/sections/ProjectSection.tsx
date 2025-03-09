import { sanityFetch, urlFor } from "@/lib/sanity";
import { PROJECTS_QUERY } from "@/query/sanity";
import { Project } from "@/types/sanity";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { FC } from "react";
import { FaGithub } from "react-icons/fa";

const ProjectSection = async () => {
  const projects = await sanityFetch<Project[]>({
    query: PROJECTS_QUERY,
  });

  return (
    <section
      id="projects"
      className="w-full mx-auto md:px-10 md:py-16 flex flex-col items-center gap-8 md:gap-12"
    >
      <p className=" text-4xl font-bold text-center">Featured Projects</p>

      <div className="w-full flex flex-col items-center gap-8">
        {projects.map((project) => (
          <ProjectCard key={project._id} project={project} />
        ))}
      </div>

      {projects.length >= 3 && (
        <Link
          href="https://github.com/BulletOnli?tab=repositories"
          target="_blank"
        >
          <button className="text-sm sm:text-base min-w-[10rem] flex items-center justify-center gap-2 px-8 py-2rounded-full">
            View All
            <ArrowUpRight className="text-orange" />
          </button>
        </Link>
      )}
    </section>
  );
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-4 justify-center items-center">
      <Image
        data-aos="fade-right"
        width={400}
        height={250}
        src={urlFor(project.imageSrc)?.url() as string}
        alt={project.name + " image"}
        className="w-[400px] h-[250px] rounded-lg object-cover"
        sizes="100vw"
      />

      <div
        data-aos="zoom-in"
        data-aos-delay="200"
        className="w-full max-w-lg flex flex-col items-center gap-4 text-center"
      >
        <h2 className="text-xl md:text-2xl font-semibold">{project.name}</h2>

        <p className="text-md md:text-base text-white/50">
          {project.description}
        </p>

        <div className="flex flex-wrap justify-center items-center gap-1 text-white/80 mx-auto">
          {project.tags.map((tag) => (
            <p key={tag} className="px-4 py-1 bg-white/10 rounded-md text-xs">
              {tag}
            </p>
          ))}
        </div>

        <div className="flex items-center justify-center gap-6">
          {project.githubUrl && (
            <Link href={project.githubUrl} target="_blank">
              <div className="flex items-center gap-1.5 text-xs">
                <FaGithub className="size-5 text-orange" />
                Github
              </div>
            </Link>
          )}

          {project.liveUrl && (
            <Link href={project.liveUrl} target="_blank">
              <div className="flex items-center gap-1 text-xs">
                Live Demo <ArrowUpRight className="text-orange" />
              </div>
            </Link>
          )}
        </div>

        {project.note && (
          <p className="text-xs text-white/50 font-light">{project.note}</p>
        )}
      </div>
    </div>
  );
};

export default ProjectSection;
