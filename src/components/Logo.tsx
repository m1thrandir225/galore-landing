"use client"
import React from "react";
import Link from "next/link";
import { motion } from "motion/react"


const Logo: React.FC<{size: number}> = (props) => {
    const { size } = props;

    return (
        <Link href={"/"}>
            <motion.div
                className={"font-benzin text-main"} style={{fontSize: size}}
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                }}
                transition={{
                    type: "spring",
                    visualDuration: 0.5,
                    damping: 15,
                    bounce: 0.5

                }}
            >
                galore
            </motion.div>
        </Link>
    )
}

export default Logo;