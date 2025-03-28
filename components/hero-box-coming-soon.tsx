"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import Image from "next/image";
import { useTheme } from "next-themes";

const transition = { duration: 1, ease: [0.25, 0.1, 0.25, 1] };
const variants = {
  hidden: { filter: "blur(10px)", transform: "translateY(20%)", opacity: 0 },
  visible: { filter: "blur(0)", transform: "translateY(0)", opacity: 1 },
};

const text = "Your AI-0ps Agents—Arriving in Q1 2025";

export default function HeroBox() {
  const words = text.split(" ");
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;
  const [mounted, setMounted] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      transition={{ staggerChildren: 0.04 }}
      viewport={{ once: true }}
      className="relative flex items-center flex-col space-y-4"
    >
      <div className="flex items-center">
        {currentTheme === "dark" && (
          <Image
            src="/logo-violet-dark-eyes.svg"
            alt="InfraStack Logo"
            width={40}
            height={40}
            className="h-10"
          />
        )}
        {currentTheme === "light" && (
          <Image
            src="/logo-violet.svg"
            alt="InfraStack Logo"
            width={40}
            height={40}
            className="h-10"
          />
        )}
        <p className="text-4xl font-bold ml-1 font-[family-name:var(--font-geist-sans)]">
          InfraStack
        </p>
      </div>
      {true && (
        <h1 className="mb-6 text-3.5xl/[2.25rem] md:text-5.5xl/[3.625rem] md:text-5xl text-center font-bold font-[family-name:var(--font-geist-sans)]">
          {words.map((word, index) => (
            <React.Fragment key={index}>
              <motion.span
                className="inline-block"
                transition={transition}
                variants={variants}
              >
                {word}
              </motion.span>
              {index < words.length - 1 && " "}
            </React.Fragment>
          ))}
        </h1>
      )}
      {true && (
        <ul className="text-left md:text-center text-sm md:text-2xl font-[family-name:var(--font-geist-mono)] font-semibold mb-8 leading-7 md:leading-9 dark:bg-black dark:bg-opacity-50 bg-white bg-opacity-50 p-2 rounded-2xl">
          <motion.li transition={transition} variants={variants}>
            Supercharge{" "}
            <span className="text-violet-500 font-bold">Infrastructure</span>,{" "}
            <span className="text-violet-500 font-bold">SRE</span>, and{" "}
            <span className="text-violet-500 font-bold">DevOps</span> with AI
            Agents
          </motion.li>
          <motion.li transition={transition} variants={variants}>
            Transform repetitive and time-consuming tasks into autonomous
            workflows
          </motion.li>
          <motion.li transition={transition} variants={variants}>
            Save time, reduce errors, and improve productivity
          </motion.li>
          {/* <span className="font-bold text-violet-500">From <span className="text-violet-500">chaos</span> to calm:</span> unleash the power of AI Agents <br /> to transform <span className="text-violet-500 font-bold">Infrastructure</span>, <span className="text-violet-500 font-bold">SRE</span> & <span className="text-violet-500 font-bold">DevOps</span> tasks into autonomous actions */}
        </ul>
      )}
      <div className="flex gap-4">
        <motion.div transition={transition} variants={variants}>
          <Button
            onClick={() => {
              window.open(
                "https://cal.com/aykut-gedik-infrastack-ai/talk-to-our-team",
                "_blank"
              );
            }}
            variant="outline"
            size="lg"
            className="bg-violet-500 hover:bg-[#7D53DE] text-white h-12"
          >
            Get Early Access
          </Button>
        </motion.div>
        {/* <motion.div transition={transition} variants={variants}>
                    <Button variant="outline" size="lg" className="h-12" >
                        Request a Demo
                    </Button>
                </motion.div> */}
      </div>
    </motion.div>
  );
}
