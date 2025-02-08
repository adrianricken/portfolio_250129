import React from "react";
import Image from "next/image";
import Profile from "../../public/assets/profile_normal.png";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import TransparentHeader from "./TransparentHeader";

const About = () => {
  return (
    <>
      {/* <TransparentHeader /> */}
      <div className="flex justify-center min-h-screen">
        <div className="w-full max-w-[1680px] min-h-screen grid grid-cols-1 md:grid-cols-[2fr_3fr] lg:grid-cols-[1fr_2fr] gap-10 pt-5 md:pt-10">
          {/* Linker Container */}
          <div className="relative flex flex-col items-center pl-5 md:pl-10">
            <h1 className="text-[var(--text-color1)]">
              Hi, ich bin{" "}
              <span className="text-[var(--highlight-color)]">Adrian</span>
            </h1>
            <h2>Junior Frontend Developer</h2>
            <div className="w-full flex items-center my-4 justify-between pt-5">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300">
                <a
                  href="https://www.linkedin.com/in/adrian-ricken/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn className="text-[var(--icon-color)]" />
                </a>
              </div>
              <a
                href="https://github.com/adrianricken"
                target="_blank"
                rel="noreferrer"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300">
                  <FaGithub />
                </div>
              </a>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer  ease-in duration-300">
                <AiOutlineMail />
              </div>
              <a
                target="blank"
                href="https://app.enhancv.com/share/7c236387/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </a>
            </div>
            <div>
              <Image
                src={Profile}
                alt="profile picture"
                width={320}
                className="absolute bottom-10 left-23"
              />
            </div>
          </div>

          {/* Rechter Container */}
          <div className="flex justify-center pt-10 flex-col items-center pr-10">
            <p className="w-150 relative text-justify leading-relaxed text-xl font-bold text-[var(--text-color1)] lg:text-3xl">
              Design, Struktur und Funktionalität haben mich schon immer
              fasziniert. Mein Architekturstudium hat mir das Denken in
              Systemen, präzise Planung und nutzerzentrierte Gestaltung
              beigebracht. Mit dem Web Development Bootcamp bei Spiced habe ich
              meinen Weg in die digitale Welt angetreten, um durchdachte,
              ästhetische und funktionale Lösungen zu schaffen.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
