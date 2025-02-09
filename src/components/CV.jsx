import { useState } from "react";

const experiences = [
  {
    id: 1,
    title: "Frontend Developer",
    content: "Arbeitete an verschiedenen Web-Projekten mit React und Next.js.",
  },
  {
    id: 2,
    title: "Architektur-Studium",
    content: "Abschluss in Architektur mit Fokus auf nachhaltiges Bauen.",
  },
  {
    id: 3,
    title: "Design-Erfahrung",
    content: "Erfahrung in UI/UX-Design und Prototyping mit Figma.",
  },
];

const ExperienceItem = ({ id, title, content, activeId, setActiveId }) => {
  const isOpen = activeId === id;

  return (
    <div className="border-b border-gray-300">
      {/* Header (Klick zum Ein-/Ausklappen) */}
      <button
        onClick={() => setActiveId(isOpen ? null : id)}
        className="w-full text-left p-4 flex justify-between items-center hover:bg-gray-200 transition"
      >
        <span className="font-bold">{title}</span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      {/* Inhalt (eingeklappter Zustand: `hidden`) */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 pt-4 pb-4" : "max-h-0 p-0"
        }`}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

export default function CV() {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="max-w-2xl mx-auto p-6">
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
  );
}
