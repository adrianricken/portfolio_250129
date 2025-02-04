export const projects = [
  {
    id: "hide-and-seek",
    name: "Hide and Seek",
    description:
      "Interaktive Plattform zum Erkunden der Berliner Parks mit Fokus auf Sportangebote.",
    descriptionLong: `Mit meinem Abschlussprojekt Hide and Seek habe ich es mir zum Ziel gesetzt, die zahlreichen öffentlichen Parks Berlins mit besonderem Fokus auf das sportliche Angebot zu analysieren und übersichtlich darzustellen. Nutzer können in einer interaktiven Gesamtübersicht gezielt nach Parks filtern, die ihre gewünschte Sportart anbieten. Auf der Detailseite eines Parks lassen sich die verfügbaren Sportmöglichkeiten weiter eingrenzen, sodass der genaue Standort der gesuchten Aktivität auf einen Blick ersichtlich ist. Neben der Filteroption gibt es selbstverständlich auch die Möglichkeit, per Texteingabe nach konkreten Parks zu suchen. Darüber hinaus bietet Hide and Seek die Möglichkeit, Parks als Favoriten zu speichern. Eingeloggte Nutzer können zudem Kommentare hinterlassen, um ihre Erfahrungen zu teilen oder Empfehlungen zu geben. In einem nächsten Schritt soll die Plattform um einen Event-Bereich erweitert werden. So werden anstehende Veranstaltungen wie Flohmärkte, Konzerte oder Sportturniere direkt bei den jeweiligen Parks angezeigt – damit alle relevanten Informationen für den perfekten Parkbesuch an einem Ort verfügbar sind.`,
    technologies: ["React", "Next.js", "MongoDB", "Leaflet / OpenStreetMap"],
    image: "/projects/hide-and-seek.png",
    imageDetail: "/projects/hideandseekDetail.png",
    github: "https://github.com/adrianricken/hide-and-seek",
    demo: "https://hide-and-seek-pi.vercel.app",
    features: [
      {
        title: "Interaktive Parkübersicht",
        icon: "🗺️",
        description:
          "Nutzer können durch eine interaktive Karte alle Parks in Berlin entdecken. Jeder Park wird auf der Karte angezeigt und bietet eine Detailansicht.",
      },
      {
        title: "Park-Suche & Filter",
        icon: "🔍",
        description:
          "Die App bietet eine Such- und Filterfunktion, mit der Nutzer gezielt nach Parks suchen oder nach spezifischen Sportangeboten (z. B. Tischtennis) filtern können.",
      },
      {
        title: "Kommentare",
        icon: "💬",
        description:
          "Eingeloggte Nutzer können Kommentare zu den Parks hinterlassen und ihre persönlichen Eindrücke oder Erfahrungen teilen.",
      },
    ],
  },
  {
    id: "art-gallery",
    name: "Art Gallery App",
    description:
      "Kunstgallerie-App zum Durchsuchen von Kunstwerken mit Favoritenfunktion.",
    descriptionLong:
      "Diese Galerie-App soll eine Sammlung von Kunstwerken aus einer externen API anzeigen. Der Fokus liegt dabei auf einer strukturierten und modularen Umsetzung in Next.js, mit besonderem Augenmerk auf das Fetching und die Verwaltung von Zustandsdaten. Ziele der App: Kunstwerke mit Bild und relevanten Informationen aus einer API abrufen und anzeigen. Nutzerinteraktionen ermöglichen, indem zusätzliche Informationen zu Kunstwerken gespeichert werden. Eine gut strukturierte Codebasis mit wiederverwendbaren Komponenten und sauberem Zustandshandling aufbauen. Best Practices in Next.js und React umsetzen, insbesondere beim Laden von Daten und der Handhabung von Bildern mit next/image. Kollaboratives Arbeiten mit GitHub und die Nutzung von Branches und Pull Requests für eine effiziente Zusammenarbeit im Team.",
    technologies: ["React", "Next.js", "MongoDB"],
    image: "/projects/art-gallery.png",
    github: "https://github.com/adrianricken/adrian-andreas-art-gallery-app",
    demo: "https://adrian-andreas-art-gallery-app.vercel.app/",
    features: [
      {
        title: "API-Daten-Abruf",
        icon: "🖼️",
        description:
          "Die App lädt Kunstwerke aus einer API und zeigt sie in einer Galerieansicht an. Mithilfe des next/image-Components werden die Bilder optimiert und effizient geladen.",
      },
      {
        title: "Zustandsmanagement",
        icon: "⭐",
        description:
          "Der Zustand der App wird dynamisch verwaltet, sodass Änderungen sofort und reibungslos angezeigt werden.",
      },
      {
        title: "Modularer Code",
        icon: "🛠️",
        description:
          "Die App ist in isolierte, wiederverwendbare Komponenten unterteilt. So wird sichergestellt, dass der Code leicht gewartet und erweitert werden kann.",
      },
    ],
  },
  {
    id: "weather-activities",
    name: "Weather Activities App",
    description:
      "App, um Aktivitäten zu speichern und je nach aktuellem Wetter Optionen anzuzeigen.",
    descriptionLong:
      "Diese App nutzt eine Wetter-API, um basierend auf den aktuellen Wetterbedingungen passende Aktivitäten aus einer vordefinierten Liste vorzuschlagen. Zusätzlich können Nutzer eigene Aktivitäten hinzufügen und löschen. Ziele der App: Wetterdaten von einer API abrufen und in der App verwenden. Basierend auf dem Wetter passende Aktivitäten anzeigen. Nutzern ermöglichen, Aktivitäten zur Liste hinzuzufügen und zu löschen (CRUD-Funktionalität). Die Kernlogik in React umsetzen, insbesondere den Umgang mit Zustand und Benutzerinteraktionen üben. Eine strukturierte Codebasis mit klaren Komponenten und sauberem Zustandshandling erstellen.",
    technologies: ["React", "Next.js", "Weather API"],
    image: "/projects/weather-activities.png",
    github: "https://github.com/adrianricken/adrian-paulina-weather-app",
    demo: "https://paulina-adrian-weather-app.vercel.app/",
    features: [
      {
        title: "CRUD-Operationen",
        icon: "✍️",
        description:
          "Nutzer können Aktivitäten zur Liste hinzufügen, bestehende Aktivitäten anzeigen, bestehende Aktivitäten bearbeiten und löschen.",
      },
      {
        title: "Dynamisches Zustandshandling",
        icon: "🔄",
        description:
          "Die App verwaltet den Zustand der Aktivitätenliste und aktualisiert die angezeigten Vorschläge je nach Nutzerinteraktion und den abgerufenen Wetterdaten.",
      },
      {
        title: "Wetterbasierte Aktivitätsvorschläge",
        icon: "🌤️",
        description:
          "Die App ruft Wetterdaten von einer API ab und schlägt basierend auf den aktuellen Wetterbedingungen passende Aktivitäten vor.",
      },
    ],
  },
];
