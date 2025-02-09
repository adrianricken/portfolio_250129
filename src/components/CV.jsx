import { useState } from "react";
import experiences from "../../data/experiences";

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
        className="w-full text-left pt-4 pb-4 flex justify-between items-center"
      >
        <span className="font-bold flex justify-between text-lg md:text-xl text-justify leading-relaxed">
          {title}
        </span>
        <span>{isOpen ? "▲" : "▼"}</span>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 pb-5"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-justify leading-relaxed">{info}</p>
          <p className="text-justify leading-relaxed">{content}</p>
        </div>
      </div>
    </div>
  );
};

export default function CV() {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="flex flex-col relative justify-center items-center mb-20">
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
