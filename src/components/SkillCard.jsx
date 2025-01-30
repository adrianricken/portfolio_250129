import React from "react";
import Image from "next/image";

const SkillCard = ({ skillName, skillLogo }) => {
  return (
    <div className="w-35 p-6 bg-[var(--text-color1)] shadow-xl rounded-[70px] hover:scale-105 ease-in duration-300">
      <div className="flex flex-col gap-4 justify-center items-center">
        <div className="m-auto">
          <Image src={skillLogo} width={60} height={60} alt={skillName} />
        </div>
        <h3>{skillName}</h3>
      </div>
    </div>
  );
};

export default SkillCard;
