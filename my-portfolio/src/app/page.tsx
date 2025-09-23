"use client";

import CardProject from "@/components/CardProject";
import CardTechno from "@/components/CardTechno";
import Image from "next/image";
import { useContext } from "react";
import { ITechno } from "./interfaces";
import { LightModeContext } from "@/context/LightModeContext";
import { FrModeContext } from "@/context/FrModeContext";
import profilePicture from "../../public/profilePicture.png";
import cssPicture from "../../public/technos/languages/css.svg";
import htmlPicture from "../../public/technos/languages/html.svg";
import javascriptPicture from "../../public/technos/languages/js.svg";
import typescriptPicture from "../../public/technos/languages/typeScript.svg";
import nodejsPicture from "../../public/technos/back/nodejs.svg";
import nextjsPicture from "../../public/technos/front/nextjs.svg";
import reactPicture from "../../public/technos/front/react.webp";
import tailwindPicture from "../../public/technos/front/tailwind.webp";
import mongodbPicture from "../../public/technos/back/mongodb.svg";
import postgresqlPicture from "../../public/technos/back/postgresql.svg";
import apolloPicture from "../../public/technos/back/apollo.png";
import dockerPicture from "../../public/technos/devops/docker.svg";
import { en } from "@/translation/en";
import { fr } from "@/translation/fr";

const technoLanguages: ITechno[] = [
  { name: "JavaScript", img: javascriptPicture.src },
  { name: "TypeScript", img: typescriptPicture.src },
  {
    name: "HTML",
    img: htmlPicture.src,
  },
  {
    name: "CSS",
    img: cssPicture.src,
  },
];
const technoBackend: ITechno[] = [
  { name: "NodeJS", img: nodejsPicture.src },
  { name: "Apollo", img: apolloPicture.src },
  { name: "PostegreSQL", img: postgresqlPicture.src },
  // { name: "Keystone", img: "" },
  { name: "MongoDB", img: mongodbPicture.src },
];
const technoFrontend: ITechno[] = [
  { name: "NextJS", img: nextjsPicture.src },
  // { name: "ViteJS", img: vitejsPicture.src },
  { name: "React", img: reactPicture.src },
  { name: "Tailwind", img: tailwindPicture.src },
];
const technoDevOps: ITechno[] = [{ name: "Docker", img: dockerPicture.src }];

export default function Home() {
  const { theme } = useContext(LightModeContext);
  const { language } = useContext(FrModeContext);

  return (
    <div className="main-container">
      {/*** Introduction ***/}
      <section className="section-container flex flex-col items-center lg:flex-row lg:items-stretch gap-15">
        <div className="flex-2/3">
          <h1 className="section-title">
            {language === "En" ? en.home_section.title : fr.home_section.title}
          </h1>
          <p className="mb-5 text-2xl hover:text-3xl">Hey there ! 👋🏼</p>
          <p>{language === "En" ? en.home_section.p : fr.home_section.p}</p>
        </div>
        <div className="content-center">
          <Image
            src={profilePicture}
            alt="profile-picture"
            className="rounded-full w-3xs border-2 shadow-profilePicture_shadow border-tile_b hover:border-main_b hover:shadow-main_b"
          />
        </div>
      </section>

      {/*** About me ***/}
      <section id="about-me" className="section-container">
        <h1 className="section-title">
          {language === "En"
            ? en.aboutMe_section.title
            : fr.aboutMe_section.title}
        </h1>
        <p className="mb-5 text-2xl hover:text-3xl">Hey there ! 👋🏼</p>
        <p>{language === "En" ? en.aboutMe_section.p : fr.aboutMe_section.p}</p>
        <p></p>
      </section>

      {/*** My projects ***/}
      <section id="projects" className="section-container">
        <h1 className="section-title">
          {language === "En"
            ? en.projects_section.title
            : fr.projects_section.title}
        </h1>
        <div className="grid grid-cols-1 lg:grid-cols-2  2xl:grid-cols-3 gap-x-4 gap-y-4 mt-4 mb-12 list-none">
          {language === "En"
            ? en.projects_section.projects.map((project, id) => (
                <CardProject
                  key={id}
                  title={project.title}
                  description={project.description}
                  jobs={project.jobs}
                  stack={project.stack}
                  finished={project.finished}
                  img={theme === "dark" ? project.imgDark : project.imgLight}
                />
              ))
            : fr.projects_section.projects.map((project, id) => (
                <CardProject
                  key={id}
                  title={project.title}
                  description={project.description}
                  jobs={project.jobs}
                  stack={project.stack}
                  finished={project.finished}
                  img={theme === "dark" ? project.imgDark : project.imgLight}
                />
              ))}
        </div>
      </section>

      {/*** My stack ***/}
      <section id="stack" className="section-container">
        <h1 className="section-title">
          {language === "En" ? en.stack_section.title : fr.stack_section.title}
        </h1>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-3">
          <div className="stack-container">
            <h3 className="card-title">
              {language === "En"
                ? en.stack_section.languages
                : fr.stack_section.languages}
            </h3>
            <div className="cardTechno-container">
              {technoLanguages.map((techno) => (
                <CardTechno key={techno.name} techno={techno} />
              ))}
            </div>
          </div>
          <div className="stack-container">
            <h3 className="card-title">
              {language === "En"
                ? en.stack_section.devOps
                : fr.stack_section.devOps}
            </h3>
            <div className="cardTechno-container">
              {technoDevOps.map((techno) => (
                <CardTechno key={techno.name} techno={techno} />
              ))}
            </div>
          </div>
          <div className="stack-container">
            <h3 className="card-title">
              {language === "En"
                ? en.stack_section.backend
                : fr.stack_section.backend}
            </h3>
            <div className="cardTechno-container">
              {technoBackend.map((techno) => (
                <CardTechno key={techno.name} techno={techno} />
              ))}
            </div>
          </div>
          <div className="stack-container">
            <h3 className="card-title">
              {language === "En"
                ? en.stack_section.frontend
                : fr.stack_section.frontend}
            </h3>
            <div className="cardTechno-container">
              {technoFrontend.map((techno) => (
                <CardTechno key={techno.name} techno={techno} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section-container text-sm flex flex-col md:flex-row justify-between gap-5">
        <p> {language === "En" ? en.footer.made : fr.footer.made}</p>
        <p> {language === "En" ? en.footer.rights : fr.footer.rights}</p>
      </section>
    </div>
  );
}
