import ulteamsLightPicture from "../../public/projects/ulteams-light.png";
import ulteamsDarkPicture from "../../public/projects/ulteams-dark.png";
import portfolioDarkPicture from "../../public/projects/portfolio-dark.png";
import portfolioLightPicture from "../../public/projects/portfolio-light.png";
import wip20LightPicture from "../../public/projects/wip20Light.png";
import wip20DarkPicture from "../../public/projects/wip20Dark.png";

export const fr = {
  home_section: {
    title: "Développeuse d'applications full-stack",
    p: "Je suis Anne-Gaëlle, ingénieure INSA reconvertie dans le développement d'applications web et mobile",
  },
  aboutMe_section: {
    title: "A propos de moi",
    p: "Il était une fois une femme, habituée au monde de l'automatisme, décida d'écouter sa curiosité et découvra l'informatique. Son monde entier changea alors. Son nom est Anne-Gaëlle et devinez quoi ? C'est moi ! En effet, je suis une jeune développeuse qui adore développer et apprendre toujours plus de nouvelles choses à propos de ce monde merveilleux que je continue à découvrir.",
  },
  projects_section: {
    title: "Mes Projets",
    projects: [
      {
        title: "Ulteams",
        description: "Une app pour gérer ton club de sport",
        jobs: ["Gestion de rôles", "Mini-jeu", "Présences aux entraînements"],
        stack: ["Keystone", "React", "ViteJS"],
        finished: true,
        imgLight: ulteamsLightPicture.src,
        imgDark: ulteamsDarkPicture.src,
      },
      {
        title: "Portfolio",
        description: "Un site pour montrer mes projets et mes compétences",
        jobs: ["Développement from scratch", "Design", "Déploiement"],
        stack: ["TypeScript", "NextJS", "Tailwind"],
        finished: true,
        imgLight: portfolioLightPicture.src,
        imgDark: portfolioDarkPicture.src,
      },
      {
        title: "Ultifit",
        description:
          "Une app pour aider les joueur·euses d'ultimate et autres athlètes dans leur préparation physique",
        jobs: ["Développement from scratch", "Développement en cours"],
        stack: ["Keystone", "React", "ViteJS"],
        finished: false,
        imgLight: wip20LightPicture.src,
        imgDark: wip20DarkPicture.src,
      },
    ],
  },
  stack_section: {
    title: "Mon Stack Technologique",
    languages: "Langages",
    devOps: "DevOps",
    backend: "Développeuse Backend",
    frontend: "Développeuse Frontend",
  },
  navbar: { about_me: "à propos", projects: "projets", stack: "stack" },
  footer: {
    made: "Fait avec 💜 et 🍪 par Anne-Gaëlle",
    rights: "© 2025 Tous droits réservés",
  },
};
