import React from "react";
import { ThreeDCardDemo } from "./ThreeDCardDemo";
import { projects } from "../../data/projects";

const Projects = () => {
  console.log(projects);

  return (
    <div id="projects" className="w-full p-2">
      <div className="max-w-[1240px] mx-auto px-4">
        <p className="pt-22 text-4xl tracking-widest uppercase text-[var(--highlight-color)]">
          Projekte
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ThreeDCardDemo
              key={project.id}
              ProjectName={project.name}
              ProjectDescription={project.description}
              ProjectLink={`/projects/${project.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
