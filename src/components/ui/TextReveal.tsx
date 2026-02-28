"use client";

import { motion } from "framer-motion";

interface TextRevealProps {
  text: string;
  className?: string;
}

export default function TextReveal({ text, className }: TextRevealProps) {
  const words = text.split(" ");

  return (
    <div className={className}>
      <p className="flex flex-wrap font-[family-name:var(--font-heading)] text-3xl font-bold tracking-[-0.03em] md:text-5xl lg:text-6xl">
        {words.map((word, i) => (
          <Word key={i} delay={i * 0.07}>
            {word}
          </Word>
        ))}
      </p>
    </div>
  );
}

interface WordProps {
  children: string;
  delay: number;
}

function Word({ children, delay }: WordProps) {
  return (
    <span className="relative mr-[0.25em] mt-1">
      <motion.span
        className="text-white"
        initial={{ opacity: 0.15 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0 }}
        transition={{ duration: 0.4, delay, ease: "easeOut" }}
      >
        {children}
      </motion.span>
    </span>
  );
}
