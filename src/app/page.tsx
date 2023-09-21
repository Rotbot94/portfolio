"use client";
import Menu from "./components/menu";
import { useEffect, useRef } from "react";
import anime from "animejs";
import { motion } from "framer-motion";
export default function Home() {
  const animationRef = useRef<any>(null);

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
    <main className="min-h-screen flex flex-col lg:flex-row justify-between">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ opacity: { duration: 2 } }}
        className="w-full "
      >
        <motion.div
          drag
          dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
          dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
          dragElastic={1}
          className="flex flex-col justify-center items-center h-full mt-5 lg:mt-0"
        >
          <h1 className="titleclass cursor-pointer">
            hi, <br />
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            I'm Ali
          </h1>
          <h2>Web Developer</h2>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: "auto" }}
        transition={{ delay: 1.5, height: { duration: 1 } }}
        className="min-w-[60%] mb-40 lg:mb-0"
      >
        <Menu
          menuItems={[
            { title: "Skills", url: "skills", isFloatStyle: false },
            { title: "About me", url: "about", isFloatStyle: false },
            { title: "Projects", url: "projects", isFloatStyle: false },
            { title: "Contact", url: "contact", isFloatStyle: false },
          ]}
        />
      </motion.div>
    </main>
  );
}
