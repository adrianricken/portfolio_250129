import React from "react";
import { projects } from "../../data/projects";
import { FaGithub, FaGlobe } from "react-icons/fa";

const Projects = () => {
  return (
    <>
      {/* erster Abschnitt */}
      <div id="projects" className="flex justify-center min-h-content">
        <div className="relative w-full max-w-[1680px] min-h-content grid grid-cols-1 md:grid-cols-[2fr_3fr] lg:grid-cols-[1fr_2fr] ">
          {/* Linker Container */}
          <div className="relative h-full flex justify-center items-center md:border-r-2 md:border-b-2 md:border-dotted md:m-0">
            <div className="hidden md:flex flex-col justify-start items-center h-full flex-grow"></div>
            <div className="w-100 sm:w-120 md:hidden text-lg text-justify leading-relaxed font-bold px-5">
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
          <div className="hidden md:flex relative justify-center flex-col items-center md:pr-10 md:pl-10 md:border-b-2 md:border-dotted">
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
          <div key={project.id} className="flex justify-center min-h-content">
            <div className="relative w-full max-w-[1680px] h-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] lg:grid-cols-[1fr_2fr] min-h-full items-stretch">
              {/* LINKER CONTAINER */}
              <div className="relative flex flex-col justify-start items-center pt-20 md:border-r-2 md:border-b-2 border-dotted h-full flex-grow">
                <h2
                  id="projectName"
                  className="hidden md:block text-5xl px-10 top-0 text-[var(--highlight-color)]"
                >
                  {project.name}
                </h2>
              </div>

              {/* RECHTER CONTAINER */}
              <div className="relative flex flex-col justify-around md:justify-between items-center h-auto border-b-2 border-dotted">
                {/* kleinere Bildschirme */}
                <div className="md:hidden w-100 lg:w-150 font-bold text-xl mt-20 mb-10 text-justify leading-relaxed">
                  <h2 className="text-5xl text-[var(--highlight-color)]">
                    {project.name}
                  </h2>
                  <p className="text-justify leading-relaxed font-bold pt-5">
                    {project.descriptionLong}
                  </p>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* größere Bildschirme */}
                <div className="hidden md:flex md:flex-col w-100 lg:w-150 font-bold text-xl sm:w-110 sm:h-73.3 md:h-66.6 lg:h-auto py-20">
                  <p className="text-justify text-xl font-bold leading-relaxed pb-10">
                    {project.descriptionLong}
                  </p>
                  <img
                    src={project.image}
                    alt={project.name}
                    className="object-cover w-full h-full shadow-lg shadow-gray-400"
                  />
                </div>
                <div className="flex items-center w-full justify-center pb-20">
                  <div className="inline-flex text-lg text-[var(--icon-text-color)]">
                    <a
                      href={project.demo}
                      target="_blank"
                      className="bg-[var(--icon-background-color)] px-5 py-3 rounded-l-4xl border-r hover:bg-[var(--highlight-color)]"
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
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Projects;
