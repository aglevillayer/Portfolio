"use client";

import { useState, useEffect, useRef, useContext } from "react";
import { FrModeContext } from "@/context/FrModeContext";
import { LightModeContext } from "@/context/LightModeContext";
import { IoSettingsOutline } from "react-icons/io5";
import { TbSunMoon } from "react-icons/tb";

export default function NavBarDropDown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { toggleTheme } = useContext(LightModeContext);
  const { language, toggleLanguage } = useContext(FrModeContext);

  function toggleDropDownMenu() {
    setIsOpen(!isOpen);
  }
  function closeDropDownMenu() {
    setIsOpen(false);
  }

  useEffect(() => {
    function handleClickOutside(e: Event) {
      if (!dropdownRef.current?.contains(e.target as Node)) {
        closeDropDownMenu();
      }
    }
    document.addEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative flex content-center" ref={dropdownRef}>
      <button
        onClick={toggleDropDownMenu}
        className="px-5 hover:text-tile_text light:hover:text-light_tile_text hover:cursor-pointer"
      >
        <IoSettingsOutline size={25} />
      </button>
      {isOpen && (
        <div className="navbar border-br absolute top-9 w-[70px] rounded-br-3xl flex flex-col align-items">
          <button
            onClick={toggleTheme}
            className="flex px-5 py-3 w-full text-center hover:text-tile_text light:hover:text-light_tile_text hover:cursor-pointer"
          >
            <TbSunMoon size={25} />
          </button>
          <button
            className="flex px-5 py-3 w-full text-center text-[25px] hover:cursor-pointer"
            onClick={toggleLanguage}
          >
            {language === "En" ? "🇫🇷" : "🇬🇧"}
          </button>
        </div>
      )}
    </div>
  );
}
