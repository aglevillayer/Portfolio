import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import NavBarDropDown from "./NavBarDropDown";

// IDEA: mettre en props un tableau avec des objets {chemin ; label}, puis boucler sur le tableau pour afficher Link
//TODO: mettre des hover sur les boutons

export default function NavbarHeader({ className }: { className: string }) {
  return (
    <div className={className}>
      <nav className="navbar border-b fixed top-0 w-full flex py-2 items-center">
        <NavBarDropDown />
        <p className="mr-auto text-text-dark px-10">Anne-Gaëlle Levillayer</p>
        <Link
          href="https://www.linkedin.com/in/aglevillayer/"
          target="_blank"
          className="px-5 border-r"
        >
          <FaLinkedin size={25} />
        </Link>
        <Link
          href="https://github.com/aglevillayer"
          target="_blank"
          className="px-5 border-r text-text-clear"
        >
          <FaGithub size={25} />
        </Link>
        <Link href="/skills" target="_blank" className="px-5">
          <MdContactMail size={25} />
        </Link>
      </nav>
    </div>
  );
}
