"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

type Props = {
  line1: string;
  line2: string;
};

export function RecedingHeroText({ line1, line2 }: Props) {
  const [scrollEnd, setScrollEnd] = useState(1);
  const { scrollY } = useScroll();

  useEffect(() => {
    const update = () => setScrollEnd(window.innerHeight * 0.3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const scale = useTransform(scrollY, [0, scrollEnd], [1, 0.89]);
  const opacity = useTransform(scrollY, [0, scrollEnd], [1, 0]);

  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ y: 48, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.h1
          className="font-display max-w-[14ch] text-[clamp(2.5rem,7.5vw,6.5rem)] font-medium leading-[1.02] tracking-[-0.03em] text-dh-dark text-balance will-change-transform md:max-w-[16ch] [transform-style:preserve-3d]"
          style={{ scale, opacity, transformOrigin: "50% 50%" }}
        >
          {line1}
          <br />
          {line2}
        </motion.h1>
      </motion.div>
    </div>
  );
}
