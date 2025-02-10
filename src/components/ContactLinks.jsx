import React from "react";

import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const email = process.env.NEXT_PUBLIC_EMAIL;

const ContactLinks = () => {
  return (
    <div className="w-full flex items-center my-5 justify-between text-[var(--icon-text-color)]">
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
      <a href={`mailto:${email}`}>
        <div className="rounded-full shadow-md shadow-gray-400 p-3 cursor-pointer ease-in duration-300 bg-[var(--icon-background-color)] hover:bg-[var(--highlight-color)]">
          <AiOutlineMail />
        </div>
      </a>
    </div>
  );
};

export default ContactLinks;
