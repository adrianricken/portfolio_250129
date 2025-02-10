"use client";

import React from "react";
import Image from "next/image";
import Profile from "../../public/assets/profile_normal.png";
import CV from "./CV";
import ContactLinks from "./ContactLinks";

const About = () => {
  return (
    <>
      <div className="flex justify-center min-h-screen">
        <div className="relative w-full max-w-[1680px] min-h-screen grid grid-cols-1 md:grid-cols-[2fr_3fr] lg:grid-cols-[1fr_2fr]">
          {/* Linker Container */}
          <div className="relative flex flex-col items-center pl-5 md:pl-10 pt-10 pr-5 md:pr-10 md:border-r-2 md:border-dotted">
            <h1>
              Hi, ich bin{" "}
              <span className="text-[var(--highlight-color)]">Adrian</span>
            </h1>
            <h2>Junior Web Developer</h2>

            <ContactLinks />

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
            <p className="w-100 md:w-100 lg:w-150  text-justify leading-relaxed text-xl font-bold md:text-2xl absolute sm:top-0 sm:relative">
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
          <div
            id="end"
            className="relative hidden md:flex flex-col justify-start items-center md:border-r-2 md:border-b-2 md:border-dotted h-full flex-grow"
          ></div>
          {/* Rechter Container */}
          <div className="relative flex flex-col items-center h-full flex-grow md:border-b-2 border-dotted">
            <CV />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
