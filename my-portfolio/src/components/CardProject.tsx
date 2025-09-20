"use client";

import CardStack from "./CardStack";
import Image from "next/image";
import ulteamsImg from "../../public/projects/ulteams.png";

export default function CardProject({
  title,
  description,
  content,
  stack,
}: {
  title: string;
  description: string;
  content: string;
  stack: string[];
}) {
  return (
    <div className="border border-border rounded-xl bg-background-navbar p-5 flex flex-row">
      <div className="mr-5 grow">
        <p className="font-bold text-2xl text-title-card mb-3">{title}</p>
        <div className="flex flex-row flex-wrap gap-x-1 mb-3">
          {stack.map((stack, id) => (
            <CardStack key={id} stack={stack} />
          ))}
        </div>
        <p className="text-text-clear mb-1">{description}</p>
        <p className="text-text-grey">{content}</p>
      </div>
      <div className="basis-1/4">
        <Image src={ulteamsImg} alt="ulteams" width={150} height={300} />
      </div>
    </div>
  );
}
