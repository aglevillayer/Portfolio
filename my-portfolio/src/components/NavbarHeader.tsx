import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { MdContactMail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import NavBarDropDown from "./NavBarDropDown";

//TODO: mettre des hover sur les boutons

export default function NavbarHeader({ className }: { className: string }) {
  return (
    <div className={className}>
      <nav className="navbar border-b fixed top-0 w-full flex h-11 items-center">
        <NavBarDropDown />
        <p className="mr-auto pl-2 text-xl whitespace-nowrap truncate">
          Anne-Gaëlle Levillayer
        </p>
        <Link
          href="https://www.linkedin.com/in/aglevillayer/"
          target="_blank"
          className="px-5 border-r hover:text-tile_text hover:border-main_text"
        >
          <FaLinkedin size={25} />
        </Link>
        <Link
          href="https://github.com/aglevillayer"
          target="_blank"
          className="px-5 border-r hover:text-tile_text hover:border-main_text"
        >
          <FaGithub size={25} />
        </Link>
        <Link
          href="/skills"
          target="_blank"
          className="px-5 hover:text-tile_text"
        >
          <MdContactMail size={25} />
        </Link>
      </nav>
    </div>
  );
}
