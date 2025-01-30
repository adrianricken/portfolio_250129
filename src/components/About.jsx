import React from "react";
import Image from "next/image";
import Profile from "../../public/assets/profile.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="py-2 px-4 uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>

          <p className="py-2 px-4 text-gray-600 text-justify leading-relaxed">
            Schon immer haben mich Design, Strukturen und Funktionalität
            fasziniert – weshalb ich einen Bachelor in Architektur an der TU
            Berlin gemacht habe. Während meines Studiums und durch diverse
            Praktika konnte ich tief in die Welt des Entwerfens und
            Konstruierens eintauchen. Ich habe gelernt, komplexe Konzepte zu
            durchdenken, detaillierte Pläne zu erstellen und nachhaltige
            Lösungen für reale Herausforderungen zu entwickeln.
          </p>
          <p className="py-2 px-4 text-gray-600 text-justify leading-relaxed">
            Architektur und Webentwicklung haben viel gemeinsam: Beide erfordern
            ein Gespür für Ästhetik, Struktur und Nutzerführung – sei es in
            einem Gebäude oder in einer interaktiven Benutzeroberfläche.
          </p>
          <p className="py-2 px-4 text-gray-600 text-justify leading-relaxed">
            Diese Erkenntnis hat mich dazu gebracht, meine Leidenschaft für
            technische Lösungen und Design in den digitalen Raum zu verlagern.
            Mit dem Abschluss des Web Development bootcamp bei Spiced habe ich
            den ersten Schritt in diese Richtung unternommen. Meine
            architektonische Denkweise hilft mir, Projekte durchdacht zu planen,
            eine klare Struktur zu schaffen und eine nutzerzentrierte Gestaltung
            umzusetzen.
          </p>
        </div>
        <div className="w-full h-auto m-auto flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={Profile} alt="profile picture" />
        </div>
      </div>
    </div>
  );
};

export default About;
