"use client";

import React from "react";
import Image from "next/image";
import Profile from "../../public/assets/profile_normal.png";
import Home from "../../public/assets/home.jpg";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import TransparentHeader from "./TransparentHeader";
import CV from "./CV";

const About = () => {
  return (
    <>
      {/* <TransparentHeader /> */}
      <div className="flex justify-center min-h-screen">
        <div className="relative w-full max-w-[1680px] min-h-screen grid grid-cols-1 md:grid-cols-[2fr_3fr] lg:grid-cols-[1fr_2fr] ">
          {/* Linker Container */}
          <div className="relative flex flex-col items-center pl-5 md:pl-10 pt-10 pr-5 md:shadow-[5px_0_15px_0_rgba(0,0,0,0.3)]">
            <h1 className="text-[var(--text-color1)]">
              Hi, ich bin{" "}
              <span className="text-[var(--highlight-color)]">Adrian</span>
            </h1>
            <h2>Junior Frontend Developer</h2>
            {/* Contact icons */}
            <div className="w-full flex items-center my-4 justify-between pt-3">
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300 bg-[var(--icon-background-color1)] hover:bg-[var(--highlight-color)]">
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
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300 bg-[var(--icon-background-color1)] hover:bg-[var(--highlight-color)]">
                  <FaGithub />
                </div>
              </a>
              <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer  ease-in duration-300 bg-[var(--icon-background-color1)] hover:bg-[var(--highlight-color)]">
                <AiOutlineMail />
              </div>
              <a
                target="blank"
                href="https://app.enhancv.com/share/7c236387/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
              >
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300 bg-[var(--icon-background-color1)] hover:bg-[var(--highlight-color)]">
                  <BsFillPersonLinesFill />
                </div>
              </a>
            </div>
            <p className="w-100 sm:w-120 md:hidden font-bold text-lg md:text-xl text-justify leading-relaxed mt-5 px-5">
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
          <div className="hidden md:flex relative justify-center flex-col items-center md:pr-10 md:pl-10">
            <p className="w-100 md:w-80 lg:w-150  text-justify leading-relaxed text-xl font-bold text-[var(--text-color1)] md:text-2xl lg:text-3xl absolute sm:top-0 sm:relative">
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

      {/* zweiter Abschnitt */}
      <div className="flex justify-center min-h-content">
        <div className="relative w-full max-w-[1680px] h-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] lg:grid-cols-[1fr_2fr] min-h-full items-stretch">
          {/* Linker Container */}
          <div className="relative hidden md:flex flex-col justify-start items-center md:shadow-[5px_0_15px_0_rgba(0,0,0,0.3)] h-full flex-grow"></div>
          {/* Rechter Container */}
          <div className="relative flex flex-col items-center my-10 h-full flex-grow">
            <CV />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
