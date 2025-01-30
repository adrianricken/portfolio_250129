import React from "react";
import SkillCard from "./SkillCard";
import { skills } from "../../data/skillsData";

const Skills = () => {
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
              skillName={skill.skillName}
              skillLogo={skill.skillLogo}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
