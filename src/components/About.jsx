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
        <div className="relative w-full max-w-[1680px] min-h-screen grid grid-cols-1 md:grid-cols-[2fr_3fr] lg:grid-cols-[1fr_2fr] pt-10">
          {/* Linker Container */}
          <div className="relative flex flex-col items-center pl-5 md:pl-8 pr-10">
            <h1 className="text-[var(--text-color1)]">
              Hi, ich bin{" "}
              <span className="text-[var(--highlight-color)]">Adrian</span>
            </h1>
            <h2>Junior Frontend Developer</h2>
            <div className="w-full flex items-center my-4 justify-around pt-3">
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
            <p className="w-100 sm:w-120 md:hidden font-bold text-lg md:text-xl text-justify leading-relaxed pt-5 pl-5 pr-5">
              Design, Struktur und Funktionalität haben mich schon immer
              fasziniert. Mein Architekturstudium hat mir das Denken in
              Systemen, präzise Planung und nutzerzentrierte Gestaltung
              beigebracht. Mit dem Web Development Bootcamp bei Spiced habe ich
              meinen Weg in die digitale Welt angetreten, um durchdachte,
              ästhetische und funktionale Lösungen zu schaffen.
            </p>
          </div>

          <Image
            src={Profile}
            alt="profile picture"
            width={320}
            className="absolute bottom-10 left-1/2 md:left-1/5 lg:left-1/6 -translate-x-1/2"
          />
          {/* Rechter Container */}
          <div className="relative flex justify-center pt-10 flex-col items-center md:pr-10">
            <p className="hidden md:block w-100 md:w-80 lg:w-150  text-justify leading-relaxed text-xl font-bold text-[var(--text-color1)] md:text-2xl lg:text-3xl absolute sm:top-0 sm:relative">
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
      <div className="flex justify-center min-h-screen">
        <div className="relative w-full max-w-[1680px] min-h-screen grid grid-cols-1 md:grid-cols-[2fr_3fr] lg:grid-cols-[1fr_2fr] pt-5 md:pt-10">
          TEST
        </div>
      </div>
    </>
  );
};

export default About;
