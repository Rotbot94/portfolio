import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import anime from "animejs";

export default function Title(props: { title: string }) {
  const { title } = props;
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
    <motion.div
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
      dragElastic={1}
      className="flex flex-col justify-center items-center h-full"
    >
      <h1 className="titleclass cursor-pointer">{title}</h1>
    </motion.div>
  );
}
