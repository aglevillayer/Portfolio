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
import { ITechno } from "./interfaces";

const projects = [
  {
    id: 1,
    title: "Ulteams",
    description: "An app to manage all your sport clubs",
    content: "Roles management",
    stack: ["TypeScript", "NodeJS", "Keystone", "React", "ViteJS"],
  },
  {
    id: 2,
    title: "Portfolio",
    description: "A web site to show my skills and projects",
    content: "Development from scratch",
    stack: ["TypeScript", "NodeJS", "NextJS"],
  },
  {
    id: 3,
    title: "Ultifit",
    description:
      "An app to manage fitness preparation for ultimate athletes and others",
    content: "Devlopment from scratch",
    stack: ["TypeScript", "NodeJS", "Keystone", "React", "ViteJS"],
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
      <section className="section-container flex flex-col items-center lg:flex-row lg:items-stretch gap-15">
        <div className="basis-2/3">
          <h1 className="section-title">Anne-Gaëlle Levillayer</h1>
          <p className="mb-5">Hey there ! 👋🏼</p>
          <p>Je suis Anne-Gaëlle,</p>
          <p>conceptrice-développeuse d'applications web et mobile</p>
        </div>
        <Image
          src={profilePicture}
          alt="profile_picture"
          className="rounded-full w-3xs"
        />
      </section>
      <section id="about-me" className="section-container">
        <h1 className="section-title">About me</h1>
        <p className="mb-5">Hey there ! 👋🏼</p>
        <p></p>
      </section>
      <section id="projects" className="section-container">
        <h1 className="section-title">My projects</h1>
        <div className="grid grid-cols-1 2xl:grid-cols-2 gap-x-4 gap-y-4 mt-4 mb-12 list-none">
          {/* //TODO: grid avec mes cards de projet*/}{" "}
          {projects.map((project) => (
            <CardProject
              key={project.id}
              title={project.title}
              description={project.description}
              content={project.content}
              stack={project.stack}
            />
          ))}
        </div>
      </section>
      <section id="stack" className="section-container">
        <h1 className="section-title">My stack</h1>
        <div className="flex gap-3 flex-col xl:flex-row">
          <div className="stack-container">
            <h3 className=" text-title-card text-2xl mb-5">Languages</h3>
            <div className="flex flex-row gap-2 mb-5">
              {/* //TODO: grid avec mes cards de projet*/}
              {technoLanguages.map((techno) => (
                <CardTechno key={techno.name} techno={techno} />
              ))}
            </div>
          </div>
          <div className="stack-container">
            <h3 className=" text-title-card text-2xl mb-5">
              Développeuse Backend
            </h3>
            <div className="flex flex-row gap-2">
              {/* //TODO: grid avec mes cards de projet*/}
              {technoBackend.map((techno) => (
                <CardTechno key={techno.name} techno={techno} />
              ))}
            </div>
          </div>
          <div className="stack-container">
            <h3 className=" text-title-card text-2xl mb-5">
              Développeuse Frontend
            </h3>
            <div className="flex flex-row gap-2">
              {/* //TODO: grid avec mes cards de projet*/}
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
