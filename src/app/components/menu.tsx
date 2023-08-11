import React, { useState, useRef, useEffect } from "react";
import anime from "animejs";
import styles from "../styles/menu.module.css";

const MenuItem = (props: { title: string; itemId: number }) => {
  const { title, itemId } = props;
  const [playing, setPlaying] = useState(false);
  const [activeItemId, setActiveItemId] = useState(null); // Keep track of the active item's id
  const animationRef = useRef(null);

  const translateXValue = (itemId + 1) % 2 == 0 ? "-400px" : "400px";

  useEffect(() => {
    if (playing && activeItemId !== null) {
      const animationKeyframes = {
        translateX: translateXValue,
        direction: "alternate",
        easing: "easeInOutExpo",
      };

      // Only start animation if activeItemId is not null
      animationRef.current = anime({
        targets: `#heading${activeItemId}`, // Use the activeItemId to target the specific item
        ...animationKeyframes,
        loop: true,
        easing: "linear",
      });
    } else {
      if (animationRef.current) {
        console.log("pause");
        animationRef.current.restart(); // Pause animation when not active
        animationRef.current.pause();
      }
    }
  }, [playing, activeItemId]);
  return (
    <li
      id={"heading" + itemId}
      className={`${styles.heading} ${
        (itemId + 1) % 2 == 0 ? "text-end" : "text-start"
      } h-full`}
      onMouseEnter={() => {
        setPlaying(true);
        setActiveItemId(itemId); // Set the active item's id
      }}
      onMouseLeave={() => {
        setPlaying(false);
        setActiveItemId(null); // Clear the active item's id
      }}
      style={{ cursor: "pointer" }}
    >
      {title}
    </li>
  );
};

export default function Menu(props: { menuItems: any }) {
  const { menuItems } = props;

  return (
    <ul className="sm:pr-8 overflow-hidden  flex flex-col h-full">
      {menuItems.map((item: any, idx: number) => (
        <MenuItem key={idx} title={item.title} itemId={idx} />
      ))}
    </ul>
  );
}
