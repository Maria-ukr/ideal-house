"use client";

import { motion } from "motion/react";

export default function AnimatedSection({children}: {children: React.ReactNode;}) {
  return (
    <motion.section
      className="relative min-h-dvh"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ amount: 0.3 }}
    >
      {children}
    </motion.section>
  )
}