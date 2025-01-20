"use client";

import React from "react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { shuffle } from "lodash";

const spring = {
  type: "spring",
  damping: 20,
  stiffness: 300,
};

const initialColors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF"];

type TransitionProps = {
  children: React.ReactNode;
};

const Transition = ({ children }: TransitionProps) => {
  const [colors, setColors] = useState(initialColors);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  useEffect(() => {
    setTimeout(() => setColors(shuffle(colors)), 1000);
  }, [colors]);
  return (
    <div>
      {loading ? (
        <div className="flex min-h-screen flex-col items-center justify-center">
          <ul className="grid grid-cols-2">
            {colors.map((background) => (
              <motion.li
                className="mb-2 mr-2 h-[140px] w-[140px] rounded-md"
                key={background}
                layout
                transition={spring}
                style={{ background }}
              ></motion.li>
            ))}
          </ul>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default Transition;
