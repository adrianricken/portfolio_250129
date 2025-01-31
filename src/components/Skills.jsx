import React from "react";
import SkillCard from "./SkillCard";
import { skills } from "../../data/skillsData";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="px-4 max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="pt-20 pb-4 text-xl tracking-widest uppercase text-[var(--highlight-color)]">
          Skills
        </p>
        <p className="py-2 text-[var(--text-color1)] text-justify leading-relaxed">
          // womit ich bisher gearbeitet habe:
        </p>
        <div className="py-2 flex flex-wrap gap-10 justify-around sm:justify-between">
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
