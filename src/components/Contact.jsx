import React from "react";
import ContactLinks from "./ContactLinks";

const Contact = () => {
  return (
    <div id="contact" className="flex justify-center h-1/2">
      <div className="relative w-full max-w-[1680px] grid grid-cols-1 md:grid-cols-[2fr_3fr] lg:grid-cols-[1fr_2fr]">
        {/* Linker Container */}
        <div className="relative h-full flex justify-center items-center md:border-r-2 md:border-dotted">
          <div className="hidden md:flex flex-col justify-start items-center h-full flex-grow"></div>
        </div>

        {/* Rechter Container */}
        <div className="relative flex flex-col justify-center items-center w-full p-10">
          <p className="w-100 sm:w-120 md:w-100 lg:w-150 text-xl text-justify leading-relaxed px-10 md:px-0 font-bold">
            Fragen, Kommentare oder Anregungen gerne über eine der folgenden
            Optionen:
          </p>
          <div className="w-100 sm:w-120 md:w-100 lg:w-150 px-10 md:px-0 mb-10">
            <ContactLinks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
