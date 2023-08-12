import React, { useState } from "react";
import styles from "../styles/menu.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const MenuItem = (props: { title: string; url: string; itemId: number }) => {
  const { title, itemId, url } = props;

  const translateXValue = itemId % 2 === 0 ? 400 : -400;
  const [isHovered, setIsHovered] = useState(false);

  const hoverVariants = {
    hovered: {
      x: translateXValue,
      transition: {
        ease: "linear",
        duration: 1,
        repeat: "infinity",
        repeatType: "reverse",
      },
    },
    notHovered: {
      x: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
      <Link
      href={url}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.li
        initial={{ x: 0 }}
        animate={isHovered ? "hovered" : "notHovered"}
          // @ts-ignore
        variants={hoverVariants}
        id={"heading" + itemId}
        className={`${styles.heading} ${
          itemId % 2 === 0 ? "text-start" : "text-end"
        } h-full cursor-pointer`}
      >
        {title}
      </motion.li>
      </Link>
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
