"use client";

import { motion, useScroll } from "motion/react";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return <motion.div className="prog" id="pg" style={{ scaleX: scrollYProgress }} />;
}
