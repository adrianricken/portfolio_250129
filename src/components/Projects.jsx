import React from "react";
import hideAndSeekImg from "../../public/assets/hideandseek.png";
import artGalleryImg from "../../public/assets/tailwind.png";
import weatherActivitiesImg from "../../public/assets/tailwind.png";
import { ThreeDCardDemo } from "./ThreeDCardDemo";

const Projects = () => {
  return (
    <div id="projects" className="w-full p-2">
      <div className="max-w-[1240px] mx-auto px-4">
        <p className="pt-20 text-4xl tracking-widest uppercase text-[var(--highlight-color)]">
          Projekte
        </p>

        <div className="grid md:grid-cols-3 gap-80">
          <ThreeDCardDemo
            ProjectName={"Hide and Seek"}
            ProjectDescription={"Test"}
            ProjectLink={"/hideandseek"}
          />
          <ThreeDCardDemo
            ProjectName={"Art Gallery App"}
            ProjectDescription={"Test"}
            ProjectLink={"/hideandseek"}
          />
          <ThreeDCardDemo
            ProjectName={"Weather activities App"}
            ProjectDescription={"Test"}
            ProjectLink={"/hideandseek"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
