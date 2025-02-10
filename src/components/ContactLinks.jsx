import React from "react";

import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const ContactLinks = () => {
  return (
    <div className="w-full flex items-center my-5 justify-between pt-3 text-[var(--icon-text-color)]">
      <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer ease-in duration-300 bg-[var(--icon-background-color)] hover:bg-[var(--highlight-color)]">
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
        <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer ease-in duration-300 bg-[var(--icon-background-color)] hover:bg-[var(--highlight-color)]">
          <FaGithub />
        </div>
      </a>
      <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer ease-in duration-300 bg-[var(--icon-background-color)] hover:bg-[var(--highlight-color)]">
        <AiOutlineMail />
      </div>
      <a
        target="blank"
        href="https://app.enhancv.com/share/7c236387/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
      >
        <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer ease-in duration-300 bg-[var(--icon-background-color)] hover:bg-[var(--highlight-color)]">
          <BsFillPersonLinesFill />
        </div>
      </a>
    </div>
  );
};

export default ContactLinks;
