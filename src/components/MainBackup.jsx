import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Image from "next/image";
import Profile from "../../public/assets/profile_normal.png";

const Main = () => {
  return (
    <>
      <div>
        <div
          id="about"
          className="name-container absolute flex flex-col justify-between items-center h-screen lg:visible invisible left-5"
        >
          <span className="text-5xl font-bold md:hidden">ADRIAN</span>
        </div>
        <div
          id="about"
          className="name-container absolute flex flex-col justify-between items-center h-screen lg:visible invisible left-5"
        >
          <span className="letter text-9xl font-bold transform">A</span>
          <span className="letter text-9xl font-bold transform">d</span>
          <span className="letter text-9xl font-bold transform">r</span>
          <span className="letter text-9xl font-bold transform">i</span>
          <span className="letter text-9xl font-bold transform">a</span>
          <span className="letter text-9xl font-bold transform">n</span>
        </div>
        <Image
          src={Profile}
          alt="profile picture"
          height={500}
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
        />
      </div>
      <div className="relative max-w-[1000px] flex justify-center">
        <p className="text-justify leading-relaxed text-xl">
          Design, Struktur und Funktionalität haben mich schon immer fasziniert.
          Mein Architekturstudium hat mir das Denken in Systemen, präzise
          Planung und nutzerzentrierte Gestaltung beigebracht – Fähigkeiten, die
          auch in der Webentwicklung essenziell sind. Mit dem Web Development
          Bootcamp bei Spiced habe ich diesen Weg in die digitale Welt
          erweitert, um durchdachte, ästhetische und funktionale Lösungen zu
          schaffen.
        </p>

        {/* <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300">
          <a
            href="https://www.linkedin.com/in/adrian-ricken/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn className="text-[var(--icon-color)]" />
          </a>
        </div> */}
        {/* <a
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
        </a> */}
        {/* </div> */}

        {/* <div id="home" className="w-full h-screen text-center">
        <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center"> */}
        {/* <div>
          <h1 className="py-4 text-[var(--text-color1)]">
            Hey, ich bin
            <span className="text-[var(--highlight-color)]"> Adrian</span> ,
          </h1>
          <h1 className="py-2 text-[var(--text-color1)]">
            Junior Web Developer
            <br />
            mit Background in Architektur
          </h1>
          <p className="py-4 px-8 text-[var(--text-color2)] sm:max-w-[70%] m-auto">
            Mit einem Auge für Design lege ich besonders viel Wert auf klare
            Gestaltung, gute Usability und die technische Umsetzung kreativer
            Konzepte.
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/adrian-ricken/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg p-6 cursor-pointer ease-in duration-300 bg-[var(--icon-background-color1)] hover:bg-[var(--icon-background-color2)]">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/adrianricken"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg p-6 cursor-pointer ease-in duration-300 bg-[var(--icon-background-color1)] hover:bg-[var(--icon-background-color2)]">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg p-6 cursor-pointer ease-in duration-300 bg-[var(--icon-background-color1)] hover:bg-[var(--icon-background-color2)]">
                <AiOutlineMail />
              </div>
            </Link>
            <a
              target="blank"
              href="https://app.enhancv.com/share/7c236387/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
            >
              <div className="rounded-full shadow-lg p-6 cursor-pointer ease-in duration-300 bg-[var(--icon-background-color1)] hover:bg-[var(--icon-background-color2)]">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Main;
