import React from "react";
import { ThreeDCardDemo } from "./ThreeDCardDemo";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    // <div id="projects" className="w-full p-2 h-screen flex items-center">
    //   <div className="max-w-[1240px] mx-auto px-4 py-6">
    //     <p className="pt-16 text-4xl tracking-widest uppercase text-[var(--highlight-color)]">
    //       projektauswahl
    //     </p>

    //     <div className="w-full h-full border-1">TEST</div>
    //   </div>
    // </div>
    <div className="flex justify-center min-h-screen">
      <div className="relative w-full max-w-[1680px] h-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] lg:grid-cols-[1fr_2fr] min-h-full items-stretch">
        {/* Linker Container */}
        <div className="relative hidden md:flex flex-col justify-start items-center md:shadow-[5px_0_15px_0_rgba(0,0,0,0.3)] h-full flex-grow py-10"></div>
        {/* Rechter Container */}
        <div className="relative flex flex-col items-center h-full flex-grow py-10">
          <div className="w-1/2 h-1/2">TEST</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
