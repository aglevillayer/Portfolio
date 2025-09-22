"use client";

import { useState, useEffect, useRef } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { TbSunMoon } from "react-icons/tb";

export default function NavBarDropDown() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
        className="px-5 hover:text-tile_text"
      >
        <IoSettingsOutline size={25} />
      </button>
      {isOpen && (
        <div className="navbar absolute top-9 w-[70px] rounded-br-3xl border-b border-r flex flex-col align-items">
          <button className="flex px-5 py-3 w-full text-center hover:text-tile_text">
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
