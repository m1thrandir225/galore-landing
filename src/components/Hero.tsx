"use client";
import {motion} from "motion/react";
import Image from "next/image";

const Hero: React.FC = () => {
  return (
    <div
      className={
        "w-full bg-main h-[500px] grid grid-cols-2 grid-rows-1 p-4 rounded-[24px] overflow-hidden my-[80px]"
      }
    >
      <div
        className={
          "w-full h-full flex flex-col items-start justify-center max-w-[80%] mx-auto gap-4 overflow-hidden"
        }
      >
        <motion.h1
          className={"font-stardom text-4xl text-onMain"}
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.2,
            type: "spring",
            bounce: 0.5,
          }}
        >
          Discover your next cocktail.
        </motion.h1>
        <motion.p
          className={"text-lg font-satoshi text-onMain opacity-75"}
          initial={{
            opacity: 0,
            y: -50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.35,
            type: "spring",
            bounce: 0.5,
          }}
        >
          Elevate your cocktail experience with Galore! Powered by a smart
          recommendation algorithm, effortlessly find your next favorite drink.
          Save your go-to recipes, and unleash your creativity with AI-driven
          cocktail generation tailored just for you.
        </motion.p>
        <motion.button
          className={
            "text-onMainContainer font-satoshi font-bold py-4 px-8 rounded-[16px] bg-mainContainer"
          }
          initial={{
            opacity: 0,
            y: -100,
          }}
          whileHover={{
            opacity: 0.75,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            bounce: 0.5,
          }}
        >
          Coming Soon
        </motion.button>
      </div>
      <motion.div
        className={
          "w-full h-full flex flex-col items-start justify-start relative"
        }
        initial={{
          y: 100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          type: "spring",
          delay: 0.55,
          bounce: 0.25,
          visualDuration: 0.5,
        }}
      >
        <Image
          src={"/hero-mockup.png"}
          alt={"Galore App"}
          fill
          priority={true}
          style={{
            objectFit: "contain",
          }}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
