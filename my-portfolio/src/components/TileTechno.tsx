"use client";

export default function TileTechno({ techno }: { techno: string }) {
  function handleTechno(techno: string) {
    console.log("techno: ", techno);
  }

  return (
    <button
      className="border rounded-4xl border-tile_b light:border-light_tile_b bg-transparent text-tile_text light:text-light_tile_text text-xs px-3 py-1 hover:bg-tile_bg light:hover:bg-light_tile_bg"
      onClick={() => {
        handleTechno(techno);
      }}
    >
      {techno}
    </button>
  );
}
