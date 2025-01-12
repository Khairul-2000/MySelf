"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

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
    <div className="shadow-dark z-30 mx-auto mb-8 mt-8 flex max-w-[500px] flex-row items-center justify-between rounded-full border-b border-[#edf2f7] bg-gray-400 p-2 shadow-lg dark:bg-gray-900 dark:shadow-sm dark:shadow-white">
      <h1 className="flex h-[40px] w-[40px] flex-row items-center justify-center self-center rounded-full bg-[#333333] p-2 text-sm text-white dark:bg-white dark:text-black">
        <Link href="/">KH.</Link>
      </h1>

      <div className="flex flex-row items-center gap-4 font-semibold dark:text-white sm:gap-8">
        <Link href="/" className="nav-link">
          Home
        </Link>
        <Link href="/about" className="nav-link">
          About
        </Link>
        <Link
          href="about.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-link"
        >
          Resume
        </Link>
      </div>
      <div className="flex h-[40px] w-[40px] flex-row items-center justify-center self-center rounded-full bg-[#e2e8f0] p-2 hover:bg-gray-400">
        {darkMode ? (
          <button onClick={() => setDarkMode(!darkMode)}>
            <Image
              src="https://cdn-icons-png.flaticon.com/128/13426/13426124.png"
              alt="logo"
              width={30}
              height={30}
            />
          </button>
        ) : (
          <button onClick={() => setDarkMode(!darkMode)}>
            <Image
              src="https://cdn-icons-png.flaticon.com/512/6714/6714978.png"
              alt="logo"
              width={30}
              height={30}
            />
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
