"use client";

import React, { useState, useEffect } from "react";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

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
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full transition-all duration-300 transform "
    >
      <span
        className={`transition-transform duration-300 ${
          theme === "light" ? "rotate-0" : "rotate-180"
        }`}
      >
        {theme === "light" ? (
          <HiOutlineMoon size={24} className="text-[var(--text-color1)]" />
        ) : (
          <HiOutlineSun size={24} />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
