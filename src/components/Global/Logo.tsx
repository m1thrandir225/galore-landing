"use client";
import React from "react";
import Link from "next/link";
import {motion} from "motion/react";
import {cn} from "@/utils/utils";

const Logo: React.FC<{size: number; className?: string}> = (props) => {
  const {size, className} = props;

  return (
    <Link href={"/"}>
      <motion.div
        className={cn("font-benzin text-main", className)}
        style={{fontSize: size}}
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
          bounce: 0.5,
        }}
      >
        galore
      </motion.div>
    </Link>
  );
};

export default Logo;
