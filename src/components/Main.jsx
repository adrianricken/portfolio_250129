import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <h1 className="py-4 text-[var(--text-color1)]">
            Hey, ich bin
            <span className="text-[var(--highlight-color)]"> Adrian</span> :-)
          </h1>
          <h1 className="py-2 text-[var(--text-color1)]">
            Junior Frontend Entwickler mit Background in Architektur
          </h1>
          <p className="py-4 px-8 text-[var(--text-color2)] sm:max-w-[70%] m-auto">
            Ich verbinde Design mit Funktionalität, um intuitive und ästhetische
            Webanwendungen zu schaffen. Mein Fokus liegt auf minimalistischen,
            nutzerfreundlichen Interfaces und der technischen Umsetzung
            kreativer Ideen.
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
        </div>
      </div>
    </div>
  );
};

export default Main;
