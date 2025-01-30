import Image from "next/image";
import React from "react";
// import HTML from "../../public/assets/html.png";
// import CSS from "../../public/assets/css.png";
// import Tailwind from "../../public/assets/tailwind.png";
// import Javascript from "../../public/assets/javascript.png";
// import Reactlogo from "../../public/assets/react.png";
// import Nextjs from "../../public/assets/next.png";
// import Express from "../../public/assets/express.png";
// import Node from "../../public/assets/node.png";
// import Mongodb from "../../public/assets/mongo.png";
// import Github from "../../public/assets/github.png";
// import Illustrator from "../../public/assets/illustrator.svg";
// import Indesign from "../../public/assets/indesign.svg";
// import Photoshop from "../../public/assets/photoshop.svg";

import SkillCard from "./SkillCard";
import { skills } from "../../data/skillsData";

  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="py-2 px-4 text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <p className="py-2 px-4 text-gray-600 text-justify leading-relaxed">
          Hiermit habe ich bisher gearbeitet:
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <SkillCard
              key={index}
              name={skill.skillName}
              imageSrc={skill.skillLogo}
            />
          ))}
          {/* <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={HTML} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={CSS} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Javascript} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Reactlogo} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Nextjs} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>NextJS</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Express} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Express</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Node} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Mongodb} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Github} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Photoshop} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Photoshop</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Indesign} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>InDesign</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Illustrator} width="64px" height="64px" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Illustrator</h3>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
