"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <div className="fixed h-[50px] w-[320px] left-1/2 md:left-1/5 lg:left-1/6 -translate-x-1/2 bottom-[20px] z-10 flex items-center justify-around bg-black rounded-3xl border-1 border-[var(--navBar-border)] text-gray-400 text-lg">
      <ThemeToggle />
      <Link
        href="/#about"
        className="transition duration-300 hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.8)]"
      >
        About
      </Link>
      <Link
        href="/#projects"
        className="transition duration-300 hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.8)]"
      >
        Projekte
      </Link>
      <Link
        href="/#contact"
        className="transition duration-300 hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.8)] mr-3"
      >
        Kontakt
      </Link>
    </div>
  );
};

export default NavBar;
