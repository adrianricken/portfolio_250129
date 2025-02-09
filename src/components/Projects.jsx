import React from "react";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <>
      {/* erster Abschnitt */}
      <div id="projects" className="flex justify-center min-h-content">
        <div className="relative w-full max-w-[1680px] min-h-content grid grid-cols-1 md:grid-cols-[2fr_3fr] lg:grid-cols-[1fr_2fr] ">
          {/* Linker Container */}
          <div className="relative h-full flex justify-center items-center md:border-r-2 md:border-dotted md:m-0">
            <div className="relative hidden md:flex flex-col justify-start items-center h-full flex-grow"></div>
            <div className="w-100 sm:w-120 md:hidden text-lg text-justify leading-relaxed font-bold px-5">
              <p className="">
                Hier eine Auwahl der Projekte, die ich während dem Bootcamp
                bearbeitet sss s habe, asdoifbasobdf boa sdboiubsudoaf budf
                buoasdf bo:
              </p>
            </div>
          </div>
          {/* Rechter Container */}
          <div className="hidden md:flex relative justify-center flex-col items-center md:pr-10 md:pl-10">
            <div className="w-100 md:w-100 lg:w-150 font-bold text-xl mt-20 mb-20 text-justify leading-relaxed">
              <p>
                Hier eine Auwahl der Projekte, die ich während dem Bootcamp
                bearbeitet sss s habe, asdoifbasobdf boa sdboiubsudoaf budf
                buoasdf bo:
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* dynamische Erstellung der Projekt Abschnitte */}
      <div>
        {projects.map((project) => (
          <div key={project.id} className="flex justify-center min-h-screen">
            <div className="relative w-full max-w-[1680px] h-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] lg:grid-cols-[1fr_2fr] min-h-full items-stretch">
              {/* Linker Container */}
              <div className="relative hidden md:flex flex-col justify-start items-center md:border-r-2 border-dotted h-full flex-grow">
                <h2 className="text-6xl px-10 top-0">{project.name}</h2>
                <p className="text-justify leading-relaxed px-10 font-bold py-10">
                  {project.descriptionLong}
                </p>
              </div>
              {/* Rechter Container */}
              <div className="relative flex flex-col justify-around md:justify-center items-center h-full">
                <div className="md:hidden top-0 md:w-100 lg:w-150 font-bold text-xl mt-20 mb-10 text-justify leading-relaxed">
                  <div className="w-90 sm:w-110 md:hidden">
                    <h2 className="text-5xl">{project.name}</h2>
                    <p className="text-justify leading-relaxed font-bold pt-5">
                      {project.descriptionLong}
                    </p>
                  </div>
                </div>
                <div className="md:absolute w-90 h-60 sm:w-110 sm:h-73.3 md:w-100 md:h-66.6 lg:w-150 lg:h-80 top-25 bg-amber-200 mb-10">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="object-cover w-full h-full"
                  />
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
