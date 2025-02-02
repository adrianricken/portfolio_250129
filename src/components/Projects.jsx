import React from "react";
import hideAndSeekImg from "../../public/assets/hideandseek.png";
import artGalleryImg from "../../public/assets/tailwind.png";
import weatherActivitiesImg from "../../public/assets/tailwind.png";
// import ProjectItem from "./ProjectItem";
import { ThreeDCardDemo } from "./ThreeDCardDemo";

const Projects = () => {
  return (
    <div id="projects" className="w-full p-2">
      <div className="max-w-[1240px] mx-auto px-4 py-16">
        <p className="text-xl tracking-widest uppercase text-[var(--highlight-color)]">
          Projekte
        </p>
        <p className="py-4 text-[var(--text-color1)] text-justify leading-relaxed">
          // Auswahl bisheriger Arbeiten
        </p>
        <div className="grid md:grid-cols-3 gap-80">
          <ThreeDCardDemo
            ProjectName={"Hide and Seek"}
            ProjectDescription={"Test"}
            ProjectLink={"/hideandseek"}
          />
          <ThreeDCardDemo
            ProjectName={"Hide and Seek"}
            ProjectDescription={"Test"}
            ProjectLink={"/hideandseek"}
          />
          <ThreeDCardDemo
            ProjectName={"Hide and Seek"}
            ProjectDescription={"Test"}
            ProjectLink={"/hideandseek"}
          />
          {/* <ProjectItem
            title="Hide and Seek"
            backgroundImg={hideAndSeekImg}
            projectUrl="/hideandseek"
            tech="React JS"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Projects;
