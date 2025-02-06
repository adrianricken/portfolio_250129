import React from "react";
import Image from "next/image";
import Profile from "../../public/assets/profile_normal.png";

const Main = () => {
  return (
    <>
      <div id="about" className="h-screen w-full relative">
        <div className="px-5 h-full relative">
          {/* Vertikale Buchstaben (Desktop) */}
          <div className="absolute flex flex-col justify-between items-center h-full md:visible invisible text-[var(--text-color1)]">
            {["A", "d", "r", "i", "a", "n"].map((letter, index) => (
              <span key={index} className="letter text-9xl font-bold">
                {letter}
              </span>
            ))}
          </div>

          <div
            className="flex justify-between h-full md:invisible pt-5 px-2
          "
          >
            {["A", "d", "r", "i", "a", "n"].map((letter, index) => (
              <span key={index} className="letter text-5xl font-bold">
                {letter}
              </span>
            ))}
          </div>

          {/* <div className="relative top-0">
            <p>Hey, das bin ich:</p>
          </div> */}

          <Image
            src={Profile}
            alt="profile picture"
            width={400}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 px-5"
          />
        </div>
      </div>

      <hr className="mx-auto" />

      {/* Textblock */}
      <div className="h-[50vh] w-screen items-center grid grid-cols-1 lg:grid-cols-2 justify-between max-w-[1240xp">
        <p className="text-justify leading-relaxed text-xl font-bold text-[var(--text-color1)] w-[400px] px-5">
          Design, Struktur und Funktionalität haben mich schon immer fasziniert.
          Mein Architekturstudium hat mir das Denken in Systemen, präzise
          Planung und nutzerzentrierte Gestaltung beigebracht. Mit dem Web
          Development Bootcamp bei Spiced habe ich meinen Weg in die digitale
          Welt angetreten, um durchdachte, ästhetische und funktionale Lösungen
          zu schaffen.
        </p>
        <div>
          <hr />
          <div className="h-10 flex items-center justify-between pr-10">
            <p>TEST</p>
            <p>TEST</p>
          </div>
          <hr />
          <div className="h-10 flex items-center justify-between">
            <p>TEST</p>
            <p>TEST</p>
          </div>
          <hr />
          <div className="h-10 flex items-center justify-between">
            <p>TEST</p>
            <p>TEST</p>
          </div>

          <hr />
        </div>
      </div>
    </>
  );
};

export default Main;
