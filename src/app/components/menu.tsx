import React, { useState } from "react";
import styles from "../styles/menu.module.css";
import { motion } from "framer-motion";
import Link from "next/link";

const MenuItem = (props: {
  title: string;
  url: string;
  itemId: number;
  floatStyle?: boolean;
}) => {
  const { title, itemId, url, floatStyle } = props;

  const floatXValue = itemId % 2 === 0 ? 150 : -150;
  const translateXValue = itemId % 2 === 0 ? 400 : -400;
  const [isHovered, setIsHovered] = useState(false);
  const isFloatStyle = floatStyle;
  const hoverVariants = {
    hovered: {
      x: floatStyle ? floatXValue : translateXValue,
      transition: {
        ease: "linear",
        duration: 0.75,
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
        className={`${isFloatStyle ? styles.floatheading : styles.heading} ${
          itemId % 2 === 0 ? "text-start" : "text-end"
        } h-full cursor-pointer`}
      >
        {isFloatStyle ? "" : "/"}
        {title}
      </motion.li>
    </Link>
  );
};

export default function Menu(props: {
  menuItems: { title: string; url: string; isFloatStyle?: boolean }[];
}) {
  const { menuItems } = props;

  return (
    <ul
      className={` overflow-ellipsis justify-around flex flex-col ${
        menuItems[0]?.isFloatStyle
          ? "items-center"
          : " h-full px-5 md:px-20 lg:pr-20"
      }`}
    >
      {menuItems.map((item: any, idx: number) => (
        <MenuItem
          key={idx}
          title={item.title}
          url={item.url}
          itemId={idx}
          floatStyle={menuItems[0]?.isFloatStyle}
        />
      ))}
    </ul>
  );
}
