"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

// import React, { useState, useEffect } from "react";
// import Image from "next/image";

// import LogoLight from "../../public/assets/logo.png";
// import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
// import { FaGithub, FaLinkedinIn } from "react-icons/fa";
// import { BsFillPersonLinesFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <div className="fixed h-[50px] w-[300px] flex items-center justify-around bg-black rounded-3xl left-1/2 -translate-x-1/2 bottom-[30px] z-10 text-gray-400 text-lg">
      <ThemeToggle />
      {/* <Link
        href="/#home"
        className="transition duration-300 hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.8)]"
      >
        Home
      </Link> */}
      <Link
        href="/#about"
        className="transition duration-300 hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.8)]"
      >
        About
      </Link>
      <Link
        href="/#skills"
        className="transition duration-300 hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.8)]"
      >
        Skills
      </Link>
      <Link
        href="/#projects"
        className="transition duration-300 hover:text-white hover:[text-shadow:0_0_10px_rgba(255,255,255,0.8)] mr-3"
      >
        Projekte
      </Link>
    </div>

    // <div
    //   style={{
    //     boxShadow: shadow ? "0px 4px 50px var(--text-color1)" : "none",
    //   }}
    //   className={
    //     shadow
    //       ? "fixed w-full h-20 shadow-xl z-[100] bg-[var(--background-color)]"
    //       : "fixed w-full h-20 z-[100] bg-[var(--background-color)]"
    //   }
    // >
    //   <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 ">
    //     <Link href="/#home" className="ml-2">
    //       <Image
    //         src={LogoLight}
    //         alt="Logo"
    //         width={75}
    //         height={50}
    //         className="mx-2"
    //         priority
    //       />
    //     </Link>
    //     <div className="mr-4">
    //       <ul className="hidden md:flex items-center text-[var(--text-color1)]">
    //         <ThemeToggle />
    //         <Link href="/#home">
    //           <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
    //         </Link>
    //         <Link href="/#about">
    //           <li className="ml-10 text-sm uppercase hover:border-b">About</li>
    //         </Link>
    //         <Link href="/#skills">
    //           <li className="ml-10 text-sm uppercase hover:border-b">Skills</li>
    //         </Link>
    //         <Link href="/#projects">
    //           <li className="ml-10 text-sm uppercase hover:border-b">
    //             Projekte
    //           </li>
    //         </Link>
    //       </ul>
    //       <div onClick={handleNav} className="md:hidden">
    //         <AiOutlineMenu size={25} className="text-[var(--text-color1)]" />
    //       </div>
    //     </div>
    //   </div>
    //   <div
    //     className={
    //       nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
    //     }
    //   >
    //     <div
    //       className={
    //         nav
    //           ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[var(--background-color)] p-10  text-[var(--text-color1)]"
    //           : "fixed left-[-100%] h-screen top-0 p-10 bg-[var(--background-color)]"
    //       }
    //     >
    //       <div>
    //         <div className="flex w-full items-center justify-between">
    //           <Link href="/">
    //             <Image src={LogoLight} alt="logo" width={87} height={35} />
    //           </Link>
    //           <div
    //             onClick={handleNav}
    //             className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
    //           >
    //             <AiOutlineClose className="text[var(--text-color1)]" />
    //           </div>
    //         </div>
    //       </div>

    //       <div className="py-4 flex flex-col">
    //         <ul className="uppercase">
    //           <ThemeToggle />
    //           <Link href="/#home" onClick={handleNav}>
    //             <li className="py-4 text-sm">Home</li>
    //           </Link>
    //           <Link href="/#about" onClick={handleNav}>
    //             <li className="py-4 text-sm">About</li>
    //           </Link>
    //           <Link href="/#skills" onClick={handleNav}>
    //             <li className="py-4 text-sm">Skills</li>
    //           </Link>
    //           <Link href="/#projects" onClick={handleNav}>
    //             <li className="py-4 text-sm">Projekte</li>
    //           </Link>
    //         </ul>
    //         <div className="pt-40">
    //           <p className="uppercase tracking-widest text-[var(--highlight-color)]">
    //             Lets connect
    //           </p>
    //           <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
    //             <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300">
    //               <a
    //                 href="https://www.linkedin.com/in/adrian-ricken/"
    //                 target="_blank"
    //                 rel="noreferrer"
    //               >
    //                 <FaLinkedinIn className="text-[var(--icon-color)]" />
    //               </a>
    //             </div>
    //             <a
    //               href="https://github.com/adrianricken"
    //               target="_blank"
    //               rel="noreferrer"
    //             >
    //               <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300">
    //                 <FaGithub />
    //               </div>
    //             </a>
    //             <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer  ease-in duration-300">
    //               <AiOutlineMail />
    //             </div>
    //             <a
    //               target="blank"
    //               href="https://app.enhancv.com/share/7c236387/?utm_medium=growth&utm_campaign=share-resume&utm_source=dynamic"
    //             >
    //               <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300">
    //                 <BsFillPersonLinesFill />
    //               </div>
    //             </a>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default NavBar;
