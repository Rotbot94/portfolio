"use client";
import "./styles/globals.css";
import { Roboto } from "next/font/google";
import {motion, AnimatePresence} from "framer-motion";
import {usePathname} from "next/navigation";
import React, {useContext, useRef, PropsWithChildren} from "react";
import {LayoutRouterContext} from "next/dist/shared/lib/app-router-context";


const roboto = Roboto({ weight: ["900"], subsets: ["latin"] });

function FrozenRouter(props: PropsWithChildren<{}>) {
    const context = useContext(LayoutRouterContext);
    const frozen = useRef(context).current;

    return (
        <LayoutRouterContext.Provider value={frozen}>
            {props.children}
        </LayoutRouterContext.Provider>
    );
}

export default function Layout(props: PropsWithChildren<{}>) {
    const pathname = usePathname();

    return (

      <html lang="en">
        <body className={`${roboto.className} overflow-hidden`}>
        <AnimatePresence>
            <motion.div
                key={pathname}
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0, height: 0}}
                transition={{
                    opacity: {
                        duration: 1
                    }, duration: 0.75
                }}
            >
                <FrozenRouter>
                    {props.children}
                </FrozenRouter>
            </motion.div>
        </AnimatePresence>
        </body>

      </html>
  );
}
