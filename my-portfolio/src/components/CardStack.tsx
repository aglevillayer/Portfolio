"use client";

export default function CardStack({ stack }: { stack: string }) {
  function handleStack(stack: string) {
    console.log("techno: ", stack);
  }

  return (
    <button
      className="border border-border rounded-4xl bg-background text-text-dark text-xs px-3 py-1"
      onClick={() => {
        handleStack(stack);
      }}
    >
      {stack}
    </button>
  );
}
