"use client";

import { useRouter } from "next/navigation";

export default function NavbarFooter({ className }: { className: string }) {
  const router = useRouter();

  function handleAboutMe() {
    router.push("#about-me");
  }
  function handleProjects() {
    router.push("#projects");
  }
  function handleStack() {
    router.push("#stack");
  }

  //TODO: mettre des hover sur les boutons

  return (
    <nav
      className={`${className} navbar border-t flex flex-row w-full fixed bottom-0 h-13`}
    >
      <button
        className="flex-1 hover:text-tile_text hover:text-2xl"
        onClick={handleAboutMe}
      >
        About me
      </button>
      <button
        className="flex-1 hover:text-tile_text hover:text-2xl"
        onClick={handleProjects}
      >
        Projects
      </button>
      <button
        className="flex-1 hover:text-tile_text hover:text-2xl"
        onClick={handleStack}
      >
        Stack
      </button>
    </nav>
  );
}
