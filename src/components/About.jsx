import React from "react";
import Image from "next/image";
import Profile from "../../public/assets/profile.png";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>

          <p className="py-2 px-4 text-gray-600 text-justify">
            Schon immer haben mich Design, Strukturen und Funktionalität
            fasziniert – deshalb habe ich meinen Bachelor in Architektur an der
            TU Berlin gemacht. Während meines Studiums und durch diverse
            Praktika konnte ich tief in die Welt des Entwerfens und
            Konstruierens eintauchen. Ich lernte, komplexe Konzepte zu
            durchdenken, detaillierte Pläne zu erstellen und nachhaltige
            Lösungen für reale Herausforderungen zu entwickeln.
          </p>
          <p className="py-2 px-4 text-gray-600 text-justify">
            Doch mit der Zeit merkte ich, dass mich nicht nur das Gestalten
            physischer Räume, sondern auch das digitale Erschaffen begeistert.
            Architektur und Webentwicklung haben viel gemeinsam: Beide erfordern
            ein Gespür für Ästhetik, Struktur und Nutzerführung – sei es in
            einem Gebäude oder in einer interaktiven Benutzeroberfläche.
          </p>
          <p className="py-2 px-4 text-gray-600 text-justify">
            Diese Erkenntnis hat mich dazu gebracht, meine Leidenschaft für
            technische Lösungen und Design in den digitalen Raum zu verlagern.
            Heute entwickle ich intuitive und minimalistische Webanwendungen,
            die nicht nur funktional, sondern auch visuell ansprechend sind.
            Meine architektonische Denkweise hilft mir, Projekte durchdacht zu
            planen, eine klare Struktur zu schaffen und eine nutzerzentrierte
            Gestaltung umzusetzen.
          </p>
          <p className="py-2 px-4 text-gray-600 text-justify">
            Ich freue mich darauf, mein Wissen weiter zu vertiefen und
            innovative digitale Lösungen zu entwickeln!
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
