import React from "react";
import { ThreeDCardDemo } from "./ThreeDCardDemo";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <div id="projects" className="w-full p-2 sm:h-screen flex items-center">
      <div className="max-w-[1240px] mx-auto px-4 py-6">
        <p className="pt-16 text-4xl tracking-widest uppercase text-[var(--highlight-color)]">
          projektauswahl
        </p>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project) => (
            <ThreeDCardDemo
              key={project.id}
              ProjectName={project.name}
              ProjectDescription={project.description}
              ProjectLink={`/projects/${project.id}`}
              ProjectImage={project.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
