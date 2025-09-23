import ulteamsLightPicture from "../../public/projects/ulteams-light.png";
import ulteamsDarkPicture from "../../public/projects/ulteams-dark.png";
import portfolioDarkPicture from "../../public/projects/portfolio-dark.png";
import portfolioLightPicture from "../../public/projects/portfolio-light.png";
import wip20LightPicture from "../../public/projects/wip20Light.png";
import wip20DarkPicture from "../../public/projects/wip20Dark.png";

export const en = {
  common: {
    in_development: "Sorry, this page is in development",
  },
  home_section: {
    title: "Full-stack applications developer",
    p: "I'm Anne-Gaëlle, engineer from INSA retrained in the web and mobile applications development",
  },
  aboutMe_section: {
    title: "About me",
    p: "Once upon a time a woman, used to work in automation, decided to listen her curiosity and discovered the computer engineering domain. Therefore, she changed her whole world. Her name is Anne-Gaëlle and guess what? It's me! Indeed, I'm a fresh and young developer, who love working and learning more about this wonderfull world that I'm still discovering.",
  },
  projects_section: {
    title: "My Projects",
    projects: [
      {
        title: "Ulteams",
        description: "An app to manage your sport club",
        jobs: ["Roles management", "Mini-game", "Training presence"],
        stack: ["Keystone", "React", "ViteJS"],
        finished: true,
        imgLight: ulteamsLightPicture.src,
        imgDark: ulteamsDarkPicture.src,
      },
      {
        title: "Portfolio",
        description: "A web site to show my skills and projects",
        jobs: ["Development from scratch", "Design", "Deployment"],
        stack: ["TypeScript", "NextJS", "Tailwind"],
        finished: true,
        imgLight: portfolioLightPicture.src,
        imgDark: portfolioDarkPicture.src,
      },
      {
        title: "Ultifit",
        description:
          "An app to manage fitness preparation for ultimate athletes and others",
        jobs: ["Development from scratch", "Development in progress"],
        stack: ["Keystone", "React", "ViteJS"],
        finished: false,
        imgLight: wip20LightPicture.src,
        imgDark: wip20DarkPicture.src,
      },
    ],
  },
  stack_section: {
    title: "My Tech Stack",
    languages: "Languages",
    devOps: "DevOps",
    backend: "Backend Developer",
    frontend: "Frontend Developer",
  },
  navbar: { about_me: "About me", projects: "Projects", stack: "Stack" },
  footer: {
    made: "Made with 💜 and 🍪 by Anne-Gaëlle",
    rights: "© 2025 All Rights Reserved",
  },
};
