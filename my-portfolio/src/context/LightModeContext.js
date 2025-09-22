"use client";

import { createContext, useState, useEffect } from "react";

export const LightModeContext = createContext();

export function LightModeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    const root = window.document.documentElement; // là ça cible l'élément html = la balise html
    if (theme === "light") {
      root.classList.add("light"); // ça va rajouter une class="light" à notre balise html, donc à notre page. On pourra alors ajuster le style de la page en fonction de cette class grâce à la config tailwind
    } else {
      root.classList.remove("light");
    }
  }, [theme]);

  return (
    <LightModeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </LightModeContext.Provider>
  );
}
