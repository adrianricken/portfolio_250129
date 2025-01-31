import React from "react";
import hideAndSeekImg from "../../public/assets/hideandseek.png";
import artGalleryImg from "../../public/assets/tailwind.png";
import weatherActivitiesImg from "../../public/assets/tailwind.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[var(--highlight-color)]">
          Projekte
        </p>
        <p className="py-4 text-[var(--text-color1)] text-justify leading-relaxed">
          // Auswahl bisheriger Arbeiten
        </p>
        <div className="py-4 grid md:grid-cols-3 gap-8">
          <ProjectItem
            title="Hide and Seek"
            backgroundImg={hideAndSeekImg}
            projectUrl="/hideandseek"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
