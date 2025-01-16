"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cursor, Tab } from "./SideTabs";
import { motion } from "framer-motion";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineWbSunny } from "react-icons/md";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="shadow-dark z-30 mx-auto mb-8 mt-8 flex w-[500px] flex-row items-center justify-between rounded-full border-b border-[#edf2f7] bg-gray-400 p-2 shadow-lg dark:bg-gray-900 dark:shadow-sm dark:shadow-white">
      <h1 className="flex h-[40px] w-[40px] flex-row items-center justify-center self-center rounded-full bg-[#333333] p-2 text-sm text-white dark:bg-white dark:text-black">
        <Link href="/">KH.</Link>
      </h1>

      <motion.div
        className="relative flex flex-row items-center gap-4 text-xl font-semibold dark:text-white sm:gap-8"
        onMouseLeave={() => {
          setPosition((pv) => ({
            ...pv,
            opacity: 0,
          }));
        }}
      >
        <Tab setPosition={setPosition}>
          <Link href="/">Home</Link>
        </Tab>
        <Tab setPosition={setPosition}>
          <Link href="/about">About</Link>
        </Tab>
        <Tab setPosition={setPosition}>
          <Link href="about.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </Link>
        </Tab>

        <Cursor position={position} />
      </motion.div>
      <div className="flex h-[42px] w-[42px] flex-row content-center items-center justify-center self-center rounded-full bg-[#e2e8f0] p-2 transition-all duration-[0.5s] ease-in-out hover:bg-transparent">
        {darkMode ? (
          <button onClick={() => setDarkMode(!darkMode)}>
            <MdOutlineWbSunny size={25} color="white" />
          </button>
        ) : (
          <button onClick={() => setDarkMode(!darkMode)}>
            <MdDarkMode size={25} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
