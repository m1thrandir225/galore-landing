"use client";
import React from "react";
import Waves from "./Waves";
import {motion} from "motion/react";

const ComingSoon: React.FC = () => {
  return (
    <div className="w-full min-h-[500px] h-full grid grid-cols-4 relative my-[60px] md:my-[120px]">
      <div className="w-full h-full max-w-full md:max-w-[80%] mx-auto bg-main col-start-1 col-end-6 flex flex-col items-center justify-center rounded-[24px] relative">
        <motion.h1
          transition={{
            duration: 1,
            type: "spring",
            bounce: 0.25,
            damping: 20,
          }}
          initial={{
            y: 100,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          viewport={{once: true}}
          className="font-stardom font-bold text-[36px] md:text-[64px] text-onMain relative z-10"
        >
          COMING SOON
        </motion.h1>
        <Waves
          className="rounded-[24px]"
          lineColor="#ffdad280"
          backgroundColor=""
          waveSpeedX={0.035}
          waveSpeedY={0.01}
          waveAmpX={35}
          waveAmpY={20}
          friction={0.9}
          tension={0.01}
          maxCursorMove={120}
          xGap={18}
          yGap={36}
        />
      </div>
    </div>
  );
};

export default ComingSoon;
