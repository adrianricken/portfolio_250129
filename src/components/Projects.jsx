import Image from "next/image";
import Link from "next/link";
import React from "react";
import propertyImg from "../../public/assets/tailwind.png";
import cryptoImg from "../../public/assets/tailwind.png";
import netflixImg from "../../public/assets/tailwind.png";
import twitchImg from "../../public/assets/tailwind.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Property Finder"
            backgroundImg={propertyImg}
            projectUrl="/hideandseek"
            tech="React JS"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={cryptoImg}
            projectUrl="/artgallery"
            tech="React JS"
          />
          <ProjectItem
            title="Netflix App"
            backgroundImg={netflixImg}
            projectUrl="/weatheractivities"
            tech="React JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
