export const projects = [
  {
    id: "hide-and-seek",
    name: "Hide and Seek",
    description:
      "Interaktive Übersicht der Berliner Parks mit Fokus auf Sportangebote.",
    descriptionLong: `Mit meinem Abschlussprojekt Hide and Seek habe ich es mir zum Ziel gesetzt, die zahlreichen öffentlichen Parks Berlins mit besonderem Fokus auf das sportliche Angebot zu analysieren und übersichtlich darzustellen.

Nutzer können in einer interaktiven Gesamtübersicht gezielt nach Parks filtern, die ihre gewünschte Sportart anbieten. Auf der Detailseite eines Parks lassen sich die verfügbaren Sportmöglichkeiten weiter eingrenzen, sodass der genaue Standort der gesuchten Aktivität auf einen Blick ersichtlich ist. Neben der Filteroption gibt es selbstverständlich auch die Möglichkeit, per Texteingabe nach konkreten Parks zu suchen.

Darüber hinaus bietet Hide and Seek die Möglichkeit, Parks als Favoriten zu speichern. Eingeloggte Nutzer können zudem Kommentare hinterlassen, um ihre Erfahrungen zu teilen oder Empfehlungen zu geben.

In einem nächsten Schritt soll die Plattform um einen Event-Bereich erweitert werden. So werden anstehende Veranstaltungen wie Flohmärkte, Konzerte oder Sportturniere direkt bei den jeweiligen Parks angezeigt – damit alle relevanten Informationen für den perfekten Parkbesuch an einem Ort verfügbar sind.`,
    technologies: ["React", "Next.js", "MongoDB", "Leaflet / OpenStreetMap"],
    image: "/projects/hide-and-seek.png",
    imageDetail: "/projects/hideandseekDetail.png",
    github: "https://github.com/adrianricken/hide-and-seek",
    demo: "https://hide-and-seek-pi.vercel.app",
    features: [
      { title: "Responsives Design", icon: "🖥️" },
      { title: "User Authentifikation", icon: "🔐" },
      { title: "Live Filter", icon: "⚡" },
    ],
  },
  {
    id: "art-gallery",
    name: "Art Gallery App",
    description: "Eine Kunstgallerie-App zum Durchsuchen von Kunstwerken.",
    technologies: ["React", "Next.js", "MongoDB"],
    image: "/projects/art-gallery.png",
    github: "https://github.com/adrianricken/adrian-andreas-art-gallery-app",
    demo: "https://adrian-andreas-art-gallery-app.vercel.app/",
    features: [
      { title: "Responsives Design", icon: "🖥️" },
      { title: "User Authentifikation", icon: "🔐" },
      { title: "Live Filter", icon: "⚡" },
    ],
  },
  {
    id: "weather-activities",
    name: "Weather Activities App",
    description:
      "Wetterdaten mit einer (fiktiven) API abrufen und passende Aktivitäten anzeigen und hinzufügen.",
    technologies: ["React", "Next.js", "Weather API"],
    image: "/projects/weather-activities.png",
    github: "https://github.com/yourusername/weather-activities",
    demo: "https://weather-activities-demo.com",
    features: [
      { title: "Responsives Design", icon: "🖥️" },
      { title: "User Authentifikation", icon: "🔐" },
      { title: "Live Filter", icon: "⚡" },
    ],
  },
];
