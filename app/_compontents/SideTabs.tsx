import React, { useRef } from "react";
import { motion } from "framer-motion";

export const Tab = ({ children, setPosition }) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        console.log(width);
        console.log(ref.current.offsetLeft);

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-black dark:text-white md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

export const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-white dark:bg-gradient-to-br dark:from-cyan-300 dark:to-cyan-600 md:h-12"
    />
  );
};
