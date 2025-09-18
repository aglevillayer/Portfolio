"use client";

export default function NavbarFooter({ className }: { className: string }) {
  function handleAboutMe() {}
  function handleProjects() {}
  function handleStack() {}

  //TODO: mettre des hover sur les boutons

  return (
    <div className={`${className} navbar border-t flex flex-row py-4 w-full`}>
      <button className="mx-auto" onClick={handleAboutMe}>
        About me
      </button>
      <button className="mx-auto" onClick={handleProjects}>
        Projects
      </button>
      <button className="mx-auto" onClick={handleStack}>
        Stack
      </button>
    </div>
  );
}
