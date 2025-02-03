// src/app/projects/[id]/page.js

import { projects } from "../../../../data/projects";
import Image from "next/image";

export default async function ProjectDetailPage({ params }) {
  const { id } = await params;
  const project = projects.find((project) => project.id === id); // Suche nach dem Projekt in den Daten

  if (!project) {
    return <div>Projekt nicht gefunden</div>;
  }

  return (
    <>
      <div className="bg-gray-900 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 py-10">
            {project.name}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            A short and catchy description of the project.
          </p>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            <Image
              src={project.image}
              alt={project.name}
              width={4000}
              height={4000}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">What I Did</h2>
            <p className="text-gray-700 leading-relaxed">
              A detailed explanation of your role, the challenges you faced, and
              how you contributed to the project.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6">Why I Did It</h2>
            <p className="text-gray-700 leading-relaxed">
              Explain the purpose of the project, the problem it solves, or the
              value it adds.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-6">Technologies Used</h2>
          <div className="flex flex-wrap gap-4">
            {["Next.js", "React", "Tailwind CSS", "Node.js", "MongoDB"].map(
              (tech) => (
                <span
                  key={tech}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>

      <div className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Responsive Design", icon: "🖥️" },
              { title: "User Authentication", icon: "🔐" },
              { title: "Real-Time Updates", icon: "⚡" },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <span className="text-4xl mb-4">{feature.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">
                  A brief description of this feature and its importance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6">Challenges & Solutions</h2>
        <div className="space-y-8">
          {[
            {
              challenge: "Challenge 1",
              solution: "How you solved it.",
            },
            {
              challenge: "Challenge 2",
              solution: "How you solved it.",
            },
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">{item.challenge}</h3>
              <p className="text-gray-700">{item.solution}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-[var(--text-color1)]">
            Want to See More?
          </h2>
          <p className="text-gray-300 mb-8 text-[var(--text-color2)]">
            Check out the live project or explore the code on GitHub.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="#"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Live Project
            </a>
            <a
              href="#"
              className="bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition"
            >
              GitHub Repo
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
