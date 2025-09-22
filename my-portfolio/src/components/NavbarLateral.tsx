"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { TbSunMoon } from "react-icons/tb";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { LightModeContext } from "@/context/LightModeContext";

export default function NavbarLateral({ className }: { className: string }) {
  const router = useRouter();
  const { toggleTheme } = useContext(LightModeContext);

  // TODO: fonctions à passer dans les props pour que le parent les définisse ? ou on va chercher le # ?
  function handleAboutMe() {
    router.push("#about-me");
  }
  function handleProjects() {
    router.push("#projects");
  }
  function handleStack() {
    router.push("#stack");
  }

  return (
    <nav
      className={`${className} navbar border-r fixed min-h-full p-10 text-center md:flex md:flex-col`}
    >
      <div className="flex flex-row w-full text-4xl mb-15 grow-1">
        <button
          className="mx-auto hover:text-tile_text light:hover:text-light_tile_text"
          onClick={toggleTheme}
        >
          <TbSunMoon />
        </button>
        <button className="mx-auto">🇬🇧</button>
      </div>

      <div className="flex flex-col grow-9">
        <div className="flex flex-col gap-y-3 mb-10">
          <h1 className="text-xl text-card_title font-bold light:text-light_card_title">
            Anne-Gaëlle Levillayer
          </h1>
          <p className="text-sm text-tile_text light:text-light_tile_text">
            Full-stack applications developer
          </p>
        </div>
        <div className="flex flex-col gap-y-5 text-xl grow">
          <button onClick={handleAboutMe} className="navbar-menu-button">
            About me
          </button>
          <button onClick={handleProjects} className="navbar-menu-button">
            Projects
          </button>
          <button onClick={handleStack} className="navbar-menu-button">
            Stack
          </button>
        </div>
      </div>

      <div className="flex flex-row w-full">
        <Link
          className="navbar-contact border-r mx-auto"
          href="https://www.linkedin.com/in/aglevillayer/"
          target="_blank"
        >
          <FaLinkedin size={30} />
        </Link>
        <Link
          className="navbar-contact border-r mx-auto"
          href="https://github.com/aglevillayer"
          target="_blank"
        >
          <FaGithub size={30} />
        </Link>
        <Link
          className="navbar-contact mx-auto"
          href="mailto:levillayer.ag@mail.com"
          target="_blank"
        >
          <MdContactMail size={30} />
        </Link>
      </div>
    </nav>
  );
}
