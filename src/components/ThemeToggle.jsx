"use client";

import React, { useState } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button onClick={toggleTheme} className="p-2 rounded-full">
      {theme === "light" ? (
        <span>
          <HiOutlineMoon
            size={24}
            className="text-gray-400 hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.8)]"
          />
        </span>
      ) : (
        <span>
          <HiOutlineSun
            size={24}
            className="text-gray-400 hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.8)]"
          />
        </span>
      )}
    </button>
  );
};

export default ThemeToggle;
