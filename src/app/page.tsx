"use client";
import Menu from "@/app/components/menu";
import { useEffect, useRef } from "react";
import anime from "animejs";
import { motion } from "framer-motion";
import { auto } from "@popperjs/core";

export default function Home() {
  const animationRef = useRef(null);

  useEffect(() => {
    const animationKeyframes = {
      targets: `h1.titleclass`,
      loop: true,
      autoplay: true,
      direction: "alternate",
      easing: "easeInOutExpo",
      textShadow: {
        duration: 1500,
        value: "-10px -12px 0px white",
        delay: 0,
        endDelay: 0,
      },
    };

    animationRef.current = anime(animationKeyframes);
  }, []);

  return (
    <main className="min-h-screen flex flex-row justify-between">
      <div className="w-full ">
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
          dragElastic={1}
          className="flex flex-col justify-center items-center h-full"
        >
          <h1 className="titleclass cursor-pointer">
            hi, <br />
            I'm Ali
          </h1>
          <h2>Web Developer</h2>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        exit={{ opacity: 0 }}
        className="min-w-[60%]"
      >
        <Menu
          menuItems={[
            { title: "Skills", url: "skills" },
            { title: "About me", url: "about" },
            { title: "Projects", url: "projects" },
            { title: "Contact", url: "contact" },
          ]}
        />
      </motion.div>
    </main>
  );
}
