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
    <div className="border border-main_b rounded-xl bg-navbar_bg hover:bg-tile_bg p-5 flex flex-row">
      <div className="mr-5 grow">
        <p className="card-title">{title}</p>
        <div className="flex flex-row flex-wrap gap-1 mb-3">
          {stack.map((stack, id) => (
            <TileTechno key={id} techno={stack} />
          ))}
        </div>
        <p className="text-main_text mb-1">{description}</p>
        <ul>
          {jobs.map((job, id) => (
            <li key={id} className="text-main_text text-sm list-disc ml-8">
              {job}
            </li>
          ))}
        </ul>
      </div>
      <div className="basis-1/4">
        <Image
          src={ulteamsImg}
          alt="ulteams"
          width={150}
          height={350}
          className="rounded-2xl"
        />
      </div>
    </div>
  );
}
