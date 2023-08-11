"use client";
import Menu from "@/app/components/menu";
import { useEffect, useRef } from "react";
import anime from "animejs";

export default function Home() {
  const animationRef = useRef(null);

  useEffect(() => {
    const animationKeyframes = {
      targets: `h1.titleclass`, // Use the activeItemId to target the specific item
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
    <div className="min-h-screen flex flex-row justify-between">
      <div className="w-full ">
        <div className="flex flex-col justify-center items-center h-full">
          <h1 className="self-center titleclass">
            hi, <br />
            I'm Ali
          </h1>
        </div>
      </div>
      <div className="min-w-[60%]">
        <Menu
          menuItems={[
            { title: "Skills" },
            { title: "About me" },
            { title: "Projects" },
            { title: "Contact" },
          ]}
        />
      </div>
    </div>
  );
}
