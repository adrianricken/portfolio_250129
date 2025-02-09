import React from "react";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <>
      {/* erster Abschnitt */}
      <div className="flex justify-center min-h-content">
        <div className="relative w-full max-w-[1680px] min-h-content grid grid-cols-1 md:grid-cols-[2fr_3fr] lg:grid-cols-[1fr_2fr] ">
          {/* Linker Container */}
          <div className="relative h-full flex justify-center items-center md:border-r-2 md:border-dotted my-5 md:m-0">
            <div className="relative hidden md:flex flex-col justify-start items-center h-full flex-grow"></div>
            <div className="w-100 sm:w-120 md:hidden text-lg text-justify leading-relaxed font-bold px-5">
              <p className="py-5">
                Hier eine Auwahl der Projekte, die ich während dem Bootcamp
                bearbeitet h sd abe, asdoifbasobdf boa sdboiubsudo
              </p>
            </div>
          </div>
          {/* Rechter Container */}
          <div className="hidden md:flex relative justify-center flex-col items-center md:pr-10 md:pl-10">
            <div className="w-100 md:w-100 lg:w-150 font-bold text-xl mt-30 mb-10 text-justify leading-relaxed">
              <p>
                Hier eine Auwahl der Projekte, die ich während dem Bootcamp
                bearbeitet sss s habe, asdoifbasobdf boa sdboiubsudoaf budf
                buoasdf bo:
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* zweiter Abschnitt */}
      <div className="flex justify-center min-h-screen">
        <div className="relative w-full max-w-[1680px] h-auto grid grid-cols-1 md:grid-cols-[2fr_3fr] lg:grid-cols-[1fr_2fr] min-h-full items-stretch">
          {/* Linker Container */}
          <div className="relative hidden md:flex flex-col justify-start items-center md:border-r-2 border-dotted h-full flex-grow py-10">
            <h2 className="text-6xl px-10">Hide and Seek</h2>
            <p className="text-justify leading-relaxed px-10 font-bold py-10">
              Mit meinem Abschlussprojekt Hide and Seek habe ich es mir zum Ziel
              gesetzt, die öffentlichen Parks in Berlin mit besonderem Fokus auf
              das sportliche Angebot zu analysieren und darzustellen. Nutzer
              können gezielt nach Parks filtern, die ihre gewünschte Sportart
              anbieten, und sich den genauen Standort der Aktivität auf der
              Detailseite anzeigen lassen. Neben der Filteroption können Parks
              auch per Texteingabe gesucht und als Favoriten gespeichert werden.
              Eingeloggte Nutzer können Kommentare hinterlassen. In einem
              nächsten Schritt soll die Plattform um einen Event-Bereich
              erweitert werden, um anstehende Veranstaltungen wie Flohmärkte
              oder Konzerte anzuzeigen.
            </p>
          </div>
          {/* Rechter Container */}
          <div className="relative flex justify-center items-center h-full">
            <div className="absolute w-90 h-67.5 sm:w-110 sm:h-82.5 md:w-100 md:h-75 lg:w-150 lg:h-112.5 top-10 bg-amber-200"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
