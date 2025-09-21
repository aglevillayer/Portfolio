"use client";

export default function TileTechno({ techno }: { techno: string }) {
  function handleTechno(techno: string) {
    console.log("techno: ", techno);
  }

  return (
    <button
      className="border border-tile_b rounded-4xl bg-transparent text-tile_text text-xs px-3 py-1 hover:bg-card_bg"
      onClick={() => {
        handleTechno(techno);
      }}
    >
      {techno}
    </button>
  );
}
