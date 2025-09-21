import CardProject from "@/components/CardProject";
import CardTechno from "@/components/CardTechno";
import Image from "next/image";
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
import { ITechno } from "./interfaces";

const projects = [
  {
    id: 1,
    title: "Ulteams",
    description: "An app to manage your sport club",
    jobs: ["Roles management", "mini-game"],
    stack: [
      "TypeScript",
      "NodeJS",
      "Keystone",
      "PostgreSQL",
      "React",
      "ViteJS",
    ],
  },
  {
    id: 2,
    title: "Portfolio",
    description: "A web site to show my skills and projects",
    jobs: ["Development from scratch"],
    stack: ["TypeScript", "NodeJS", "NextJS", "Tailwind"],
  },
  {
    id: 3,
    title: "Ultifit",
    description:
      "An app to manage fitness preparation for ultimate athletes and others",
    jobs: ["Development from scratch"],
    stack: [
      "TypeScript",
      "NodeJS",
      "Keystone",
      "PostgreSQL",
      "React",
      "ViteJS",
    ],
  },
];

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
  //{ name: "Apollo", img: "" },
  { name: "PostegreSQL", img: postgresqlPicture.src },
  // { name: "Keystone", img: "" },
  { name: "MongoDB", img: mongodbPicture.src },
  { name: "Apollo", img: apolloPicture.src },
];
const technoFrontend: ITechno[] = [
  { name: "NextJS", img: nextjsPicture.src },
  // { name: "ViteJS", img: vitejsPicture.src },
  { name: "React", img: reactPicture.src },
  { name: "Tailwind", img: tailwindPicture.src },
];

export default function Home() {
  return (
    <div className="main-container">
      {/*** Introduction ***/}
      <section className="section-container flex flex-col items-center lg:flex-row lg:items-stretch gap-15">
        <div className="basis-2/3">
          <h1 className="section-title">Full-stack applications developer</h1>
          <p className="mb-5 text-2xl hover:text-3xl">Hey there ! 👋🏼</p>
          <p>I'm Anne-Gaëlle,</p>
          <p>
            Engineer from INSA retrained in the web and mobile applications
            development.
          </p>
        </div>
        <Image
          src={profilePicture}
          alt="profile-picture"
          className="rounded-full w-3xs border-2 border-tile_b hover:border-main_b"
        />
      </section>

      {/*** About me ***/}
      <section id="about-me" className="section-container">
        <h1 className="section-title">About me</h1>
        <p className="mb-5 text-2xl hover:text-3xl">Hey there ! 👋🏼</p>
        <p>
          Once upon a time, a woman, used to work in automation, decided to
          listen her curiosity and discovered the computer engineering domain.
          Therefore, she changed her whole world. Her name is Anne-Gaëlle and
          guess what? It's me! Indeed, I'm a fresh and young developer, who love
          working and learning more about this wonderfull world that I'm still
          discovering.
          {/* Je m'appelle Anne-Gaëlle et je suis une jeune
          développeuse tout juste reconvertie. Appartenant initialement à
          l'automatisme, j'ai décidé d'écouter ma curiosité et me suis lancée
          dans le monde de l'informatique. */}
        </p>
        <p></p>
      </section>

      {/*** My projects ***/}
      <section id="projects" className="section-container">
        <h1 className="section-title">My projects</h1>
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-x-4 gap-y-4 mt-4 mb-12 list-none">
          {projects.map((project) => (
            <CardProject
              key={project.id}
              title={project.title}
              description={project.description}
              jobs={project.jobs}
              stack={project.stack}
            />
          ))}
        </div>
      </section>

      {/*** My stack ***/}
      <section id="stack" className="section-container">
        <h1 className="section-title">My stack</h1>
        <div className="flex gap-3 flex-col xl:flex-row">
          <div className="stack-container">
            <h3 className="card-title">Languages</h3>
            <div className="flex flex-row gap-2">
              {technoLanguages.map((techno) => (
                <CardTechno key={techno.name} techno={techno} />
              ))}
            </div>
          </div>
          <div className="stack-container">
            <h3 className="card-title">Backend Developer</h3>
            <div className="flex flex-row gap-2">
              {technoBackend.map((techno) => (
                <CardTechno key={techno.name} techno={techno} />
              ))}
            </div>
          </div>
          <div className="stack-container">
            <h3 className="card-title">Frontend Developer</h3>
            <div className="flex flex-row gap-2">
              {technoFrontend.map((techno) => (
                <CardTechno key={techno.name} techno={techno} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
