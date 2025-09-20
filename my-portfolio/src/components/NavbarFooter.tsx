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
      className={`${className} navbar border-t flex flex-row py-4 w-full fixed bottom-0`}
    >
      <button className="mx-auto" onClick={handleAboutMe}>
        About me
      </button>
      <button className="mx-auto" onClick={handleProjects}>
        Projects
      </button>
      <button className="mx-auto" onClick={handleStack}>
        Stack
      </button>
    </nav>
  );
}
