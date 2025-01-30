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
      className="bottom-4 right-4 p-3 bg-gray-800 text-white rounded-full shadow-lg transition-all duration-300 transform "
    >
      <span
        className={`transition-transform duration-300 ${
          theme === "light" ? "rotate-0" : "rotate-180"
        }`}
      >
        {theme === "light" ? (
          <HiOutlineMoon size={24} />
        ) : (
          <HiOutlineSun size={24} />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;
