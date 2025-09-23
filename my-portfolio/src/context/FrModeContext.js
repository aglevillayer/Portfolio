"use client";

import { createContext, useState } from "react";

export const FrModeContext = createContext();

export function FrModeProvider({ children }) {
  const [language, setLanguage] = useState("En");

  function toggleLanguage() {
    setLanguage((prevLanguage) => (prevLanguage === "Fr" ? "En" : "Fr"));
  }

  return (
    <FrModeContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </FrModeContext.Provider>
  );
}
