import React from "react";
import Image from "next/image";
import Profile from "../../public/assets/profile_normal.png";

const About = () => {
  return (
    <div className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8 px-2 ">
        <div className="col-span-2 px-2"></div>
      </div>
    </div>
  );
};

export default About;
