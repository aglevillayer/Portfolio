"use client";

import TileTechno from "./TileTechno";
import Image from "next/image";
import ulteamsImg from "../../public/projects/ulteams.png";

export default function CardProject({
  title,
  description,
  jobs,
  stack,
}: {
  title: string;
  description: string;
  jobs: string[];
  stack: string[];
}) {
  return (
    <div className="p-5 flex flex-col gap-3 border-2 border-second_main_b rounded-xl bg-navbar_bg hover:border-main_b hover:shadow-project_shadow light:bg-light_navbar_bg light:border-light_second_main_b">
      <div className="mr-5 grow flex-2/3">
        <p className="card-title">{title}</p>
        <div className="flex flex-row flex-wrap gap-1 mb-3">
          {stack.map((stack, id) => (
            <TileTechno key={id} techno={stack} />
          ))}
        </div>
        <p className="mb-1">{description}</p>
        <ul>
          {jobs.map((job, id) => (
            <li key={id} className="text-sm list-disc ml-8">
              {job}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex justify-center">
        {/* //TODO: mettre aussi l'image en mode clair en important le theme via le useContext */}
        <Image src={ulteamsImg} alt="ulteams" className="rounded-2xl" />
      </div>
    </div>
  );
}
