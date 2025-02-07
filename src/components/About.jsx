import React from "react";
import Image from "next/image";
import Profile from "../../public/assets/profile_normal.png";
import TransparentHeader from "./TransparentHeader";

const About = () => {
  return (
    <>
      <TransparentHeader />
      <div
        id="about"
        className="h-screen w-screen relative flex justify-center"
      >
        <div className="grid md:grid-cols-2 md:gap-10 p-10 lg:p-15 h-full w-full max-w-[1340px]">
          <div>
            <h1 className="text-[var(--text-color1)] md:pt-25">
              Hi, ich bin{" "}
              <span className="text-[var(--highlight-color)]">Adrian</span>
            </h1>
            <p className="relative text-justify leading-relaxed text-xl font-bold text-[var(--text-color1)] lg:text-2xl md:hidden pt-7">
              Design, Struktur und Funktionalität haben mich schon immer
              fasziniert. Mein Architekturstudium hat mir das Denken in
              Systemen, präzise Planung und nutzerzentrierte Gestaltung
              beigebracht. Mit dem Web Development Bootcamp bei Spiced habe ich
              meinen Weg in die digitale Welt angetreten, um durchdachte,
              ästhetische und funktionale Lösungen zu schaffen.
            </p>
          </div>
          <p className="relative text-justify leading-relaxed text-xl font-bold text-[var(--text-color1)] pr-10 pt-5 sm:p-0 lg:text-2xl hidden md:block">
            Design, Struktur und Funktionalität haben mich schon immer
            fasziniert. Mein Architekturstudium hat mir das Denken in Systemen,
            präzise Planung und nutzerzentrierte Gestaltung beigebracht. Mit dem
            Web Development Bootcamp bei Spiced habe ich meinen Weg in die
            digitale Welt angetreten, um durchdachte, ästhetische und
            funktionale Lösungen zu schaffen.
          </p>
          <Image
            src={Profile}
            alt="profile picture"
            width={310}
            className="absolute bottom-15 left-1/2 -translate-x-1/2"
          />
        </div>
      </div>
      <hr />
    </>
  );
};

export default About;
