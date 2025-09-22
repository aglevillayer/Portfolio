"use client";

import { useState, useEffect, useRef, useContext } from "react";
import { TbSunMoon } from "react-icons/tb";
import { LightModeContext } from "@/context/LightModeContext";
import { IoSettingsOutline } from "react-icons/io5";

export default function NavBarDropDown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { toggleTheme } = useContext(LightModeContext);

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
        className="px-5 hover:text-tile_text light:hover:text-light_tile_text"
      >
        <IoSettingsOutline size={25} />
      </button>
      {isOpen && (
        <div className="navbar absolute top-9 w-[70px] rounded-br-3xl border-br flex flex-col align-items">
          <button
            onClick={toggleTheme}
            className="flex px-5 py-3 w-full text-center hover:text-tile_text light:hover:text-light_tile_text"
          >
            <TbSunMoon size={25} />
          </button>
          <button className="flex px-5 py-3 w-full text-center text-[25px]">
            🇬🇧
          </button>
        </div>
      )}
    </div>
  );
}
