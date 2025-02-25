"use client";

import React from "react";
import { projects } from "../../data/projects";
import { FaGithub, FaGlobe } from "react-icons/fa";
import ProjectsCarousel from "./ProjectsCarousel";

const Projects = () => {
  return (
    <>
      <div
        id="projects"
        className="flex justify-center min-h-content md:border-b-2 border-dotted"
      >
        {/* erster Abschnitt */}
        <div className="relative w-full max-w-[1680px] min-h-content grid grid-cols-1 md:grid-cols-[2fr_3fr] lg:grid-cols-[1fr_2fr]">
          {/* Linker Container */}
          <div className="relative h-full flex justify-center items-center md:border-r-2 border-dotted">
            {/* leeres div links ab md */}
            <div className="hidden md:flex flex-col justify-start items-center h-full flex-grow"></div>
            <div
              id="problem"
              className="w-100 sm:w-120 md:hidden text-lg text-justify leading-relaxed font-bold mt-20 px-10"
            >
              <p className="w-100 sm:w-120 md:hidden font-bold text-lg md:text-xl text-justify leading-relaxed mt-10 px-10"></p>
              <p>
                Hier eine Auswahl von Projekten, die ich während meines Web
                Development Bootcamps (mit)entwickelt habe. Jedes Projekt
                spiegelt verschiedene Technologien, Konzepte und
                Herausforderungen wider, mit denen ich mich intensiv beschäftigt
                habe :
              </p>
            </div>
          </div>

          {/* Rechter Container */}
          <div className="hidden md:flex relative justify-center flex-col items-center md:pr-10 md:pl-10">
            <div className="w-100 md:w-100 lg:w-150 font-bold text-xl mt-20 mb-20 text-justify leading-relaxed">
              <p>
                Hier eine Auswahl von Projekten, die ich während meines Web
                Development Bootcamps (mit)entwickelt habe. Jedes Projekt
                spiegelt verschiedene Technologien, Konzepte und
                Herausforderungen wider, mit denen ich mich intensiv beschäftigt
                habe :
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* dynamische Erstellung Projekte */}
      <div>
        {projects.map((project) => (
          <div
            key={project.id}
            className="flex justify-center min-h-content md:border-b-2 border-dotted"
          >
            <div className="relative w-full max-w-[1680px] h-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] lg:grid-cols-[1fr_2fr] min-h-full items-stretch">
              {/* LINKER CONTAINER */}
              <div className="relative flex flex-col justify-start items-center md:pt-20 md:border-r-2 border-dotted h-full flex-grow">
                <h2
                  id="projectName"
                  className="hidden md:block text-5xl px-10 top-0 text-[var(--highlight-color)]"
                >
                  {project.name}
                </h2>
              </div>

              {/* RECHTER CONTAINER */}
              <div className="relative flex flex-col justify-around md:justify-between items-center h-auto">
                {/* kleinere Bildschirme */}
                <div className="relative md:hidden w-100 sm:w-120 lg:w-150 font-bold text-xl mt-20 mb-10 text-justify leading-relaxed px-10">
                  <h2 className="text-4xl text-[var(--highlight-color)]">
                    {project.name}
                  </h2>
                  <p className="text-justify leading-relaxed font-bold pt-10 pb-10">
                    {project.description}
                  </p>
                  <div className="shadow-lg">
                    <ProjectsCarousel images={project.images} />
                  </div>
                </div>

                {/* größere Bildschirme */}
                <div className="hidden md:flex md:flex-col w-100 lg:w-150 font-bold text-xl md:h-66.6 lg:h-auto py-20">
                  <p className="text-justify text-xl font-bold leading-relaxed pb-10">
                    {project.description}
                  </p>
                  <div className="hidden md:flex md:flex-col w-100 sm:w-120 md:w-100 lg:w-150 shadow-2xl">
                    <ProjectsCarousel images={project.images} />
                  </div>
                </div>
                <div className="flex items-center w-full justify-center mb-5 md:mb-20 px-10">
                  <div className="inline-flex text-lg text-[var(--icon-text-color)]">
                    <a
                      href={project.demo}
                      target="_blank"
                      className="bg-[var(--icon-background-color)] px-5 py-3 rounded-l-4xl md:border-r hover:bg-[var(--highlight-color)]"
                    >
                      <FaGlobe />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      className="bg-[var(--icon-background-color)] px-5 py-3 rounded-r-4xl hover:bg-[var(--highlight-color)]"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <div className="md:hidden w-full pt-5 px-10">
                  <hr className="border-dotted border-w-2" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
