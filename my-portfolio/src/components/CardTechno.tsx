"use client";

import { ITechno } from "@/app/interfaces";
import Image from "next/image";

export default function CardTechno({ techno }: { techno: ITechno }) {
  function handleCardTechno() {}

  return (
    <div
      className="border border-border rounded-xl bg-background-navbar p-2 text-text-dark flex flex-col items-center w-22 h-20"
      onClick={handleCardTechno}
    >
      <Image
        src={techno.img}
        alt={techno.name}
        className="mb-3"
        width={30}
        height={30}
      />
      <p className="text-xs">{techno.name}</p>
    </div>
  );
}
