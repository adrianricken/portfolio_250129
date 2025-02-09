import { useState } from "react";

const experiences = [
  {
    id: 1,
    title: "Web Development Bootcamp",
    info: "Spiced Academy, Berlin",
    content:
      "Während meines Web Development Bootcamps bei Spiced habe ich intensiv moderne Webtechnologien erlernt und praxisnah angewendet. Der Fokus lag auf der Entwicklung interaktiver und performanter Anwendungen mit JavaScript, React, Next.js und MongoDB. Neben der technischen Umsetzung standen auch sauberes Code-Design, State-Management und API-Integration im Mittelpunkt. Durch agile Arbeitsweisen, Pair Programming und eigenständige Projekte konnte ich meine Fähigkeiten in Frontend- und Backend-Entwicklung vertiefen und kreative, nutzerzentrierte Lösungen entwickeln.",
  },
  {
    id: 2,
    title: "Praktika und Werkstudentenjob",
    content:
      "Im Rahmen meiner Praktika und Werkstudententätigkeiten konnte ich wertvolle Erfahrungen in den Bereichen Planung, Design und technische Umsetzung sammeln. Meine Aufgaben umfassten unter anderem die 3D-Modellierung von Bau- und Fabrikstrukturen, den Aufbau von Komponentenbibliotheken sowie die Erstellung und Prüfung von Layouts nach geltenden Normen. Dabei arbeitete ich mit CAD- und 3D-Modellierungsprogrammen, um präzise und funktionale Lösungen zu entwickeln.Durch die enge Zusammenarbeit mit interdisziplinären Teams konnte ich mein Wissen in strukturiertem Planen, normgerechter Gestaltung und effizienten Arbeitsabläufen vertiefen. Zudem gewann ich wertvolle Einblicke in die industrielle Planung, architektonische Gestaltung und prozessoptimierte Flächenkonzeption. Die Arbeit an realen Projekten ermöglichte es mir, meine analytischen und konzeptionellen Fähigkeiten zu schärfen und kreative, nutzerzentrierte Lösungen zu entwickeln. Gleichzeitig stärkte ich meine Kommunikations- und Teamarbeitsskills, indem ich eng mit Ingenieuren, Designern und Planern zusammenarbeitete.",
  },
  {
    id: 3,
    title: "Architektur-Studium",
    content:
      "Mein Architekturstudium hat mir ein tiefgehendes Verständnis für Design, Konstruktion und nachhaltiges Bauen vermittelt. Der Fokus lag auf der ganzheitlichen Planung von Gebäuden, wobei ich mich intensiv mit räumlicher Gestaltung, Materialkunde und technischen Normen auseinandergesetzt habe. Besonders fasziniert hat mich die Verbindung von ästhetischer Gestaltung und funktionaler Effizienz, wodurch ich ein ausgeprägtes Gespür für durchdachte, nutzerzentrierte Lösungen entwickelt habe. Durch verschiedene Projekte und Entwürfe konnte ich kreative Konzepte erarbeiten und meine Fähigkeiten in CAD, 3D-Modellierung und technischen Zeichnungen vertiefen.",
  },
];

const ExperienceItem = ({
  id,
  title,
  info,
  content,
  activeId,
  setActiveId,
}) => {
  const isOpen = activeId === id;

  return (
    <div className="border-b border-gray-300">
      {/* Header (Klick zum Ein-/Ausklappen) */}
      <button
        onClick={() => setActiveId(isOpen ? null : id)}
        className="w-full text-left pt-4 pb-4 flex justify-between items-center hover:bg-gray-200 transition"
      >
        <span className="font-bold flex justify-between text-lg md:text-xl text-justify leading-relaxed">
          {title}
        </span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "pt-4 pb-4" : "max-h-0"
        }`}
      >
        <p className="text-justify leading-relaxed">{info}</p>
        <p className="text-justify leading-relaxed">{content}</p>
      </div>
    </div>
  );
};

export default function CV() {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="flex flex-col relative justify-center items-center">
      <div className="w-100 sm:w-120 md:hidden px-5">
        {experiences.map((exp) => (
          <ExperienceItem
            key={exp.id}
            id={exp.id}
            title={exp.title}
            content={exp.content}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        ))}
      </div>
      <div className="hidden md:block md:w-100 lg:w-150">
        {experiences.map((exp) => (
          <ExperienceItem
            key={exp.id}
            id={exp.id}
            title={exp.title}
            content={exp.content}
            activeId={activeId}
            setActiveId={setActiveId}
          />
        ))}
      </div>
    </div>
  );
}
