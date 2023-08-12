import React, { useState, useRef, useEffect } from "react";
import anime from "animejs";
import styles from "../styles/menu.module.css";

const MenuItem = (props: { title: string; url: string; itemId: number }) => {
  const { title, itemId, url } = props;
  const [playing, setPlaying] = useState(false);
  const [activeItemId, setActiveItemId] = useState<null | number>(null);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (playing && activeItemId !== null) {
      const translateXValue = (itemId + 1) % 2 == 0 ? "-400px" : "400px";
      const animationKeyframes = {
        translateX: translateXValue,
        direction: "alternate",
        easing: "easeInOutExpo",
      };

      animationRef.current = anime({
        targets: `#heading${activeItemId}`,
        ...animationKeyframes,
        loop: true,
        easing: "linear",
      });
    } else {
      if (animationRef.current) {
        console.log("pause");
        animationRef.current.restart();
        animationRef.current.pause();
      }
    }
  }, [playing, activeItemId, itemId]);
  return (
    <a href={url}>
      <li
        id={"heading" + itemId}
        className={`${styles.heading} ${
          (itemId + 1) % 2 == 0 ? "text-end" : "text-start"
        } h-full cursor-pointer`}
        onMouseEnter={() => {
          setPlaying(true);
          setActiveItemId(itemId);
        }}
        onMouseLeave={() => {
          setPlaying(false);
          setActiveItemId(null);
        }}
      >
        {title}
      </li>
    </a>
  );
};

export default function Menu(props: {
  menuItems: { title: string; url: string }[];
}) {
  const { menuItems } = props;

  return (
    <ul className="pr-20 overflow-hidden justify-around flex flex-col h-full">
      {menuItems.map((item: any, idx: number) => (
        <MenuItem key={idx} title={item.title} url={item.url} itemId={idx} />
      ))}
    </ul>
  );
}
