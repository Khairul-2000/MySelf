"use client";

import React, { PropsWithChildren } from "react";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-fredoka",
});

const Animation = ({ children }: PropsWithChildren) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 5000);
  }, []);

  return (
    <div>
      {loading ? (
        <div
          className={`flex min-h-screen flex-col items-center justify-center ${fredoka.variable} font-serif`}
        >
          <TypeAnimation
            sequence={[
              "Welcome To My Website",
              1000,
              "Explore and Enjoy✨",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </div>
      ) : (
        <div>{children}</div>
      )}
    </div>
  );
};

export default Animation;
