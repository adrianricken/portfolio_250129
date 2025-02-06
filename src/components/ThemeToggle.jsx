"use client";

import React, { useState, useEffect } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  // Beim ersten Rendern das Theme aus localStorage holen
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme); // Neuen Wert im localStorage speichern
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
