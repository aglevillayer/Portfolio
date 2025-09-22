"use client";

import { ITechno } from "@/app/interfaces";
import Image from "next/image";

export default function CardTechno({ techno }: { techno: ITechno }) {
  function handleCardTechno() {}

  return (
    <div
      className="border border-tile_b light:border-light_tile_b rounded-2xl bg-transparent hover:border-main_b hover:shadow-techno_shadow p-2 text-tile_text light:text-light_tile_text flex flex-col items-center w-22 h-20 text-xs hover:text-sm"
      onClick={handleCardTechno}
    >
      <Image
        src={techno.img}
        alt={techno.name}
        className="mb-3"
        width={30}
        height={30}
      />
      <p>{techno.name}</p>
    </div>
  );
}
