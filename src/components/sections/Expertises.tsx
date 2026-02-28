"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Container from "@/components/layout/Container";
import { AnimatedText } from "@/components/ui/animated-underline-text-one";

const TEXT_LINE1 = "Anyone can ship fast today 🚀";
const TEXT_LINE2 = "The new edge is shipping tastefully, with a WoW effect.";

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.15, 1]);
  return (
    <span className="relative mr-[0.25em] mt-1 inline-block">
      <motion.span style={{ opacity }}>{children}</motion.span>
    </span>
  );
}

export default function Expertises() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.85", "start 0.2"],
  });

  const words1 = TEXT_LINE1.split(" ");
  const words2 = TEXT_LINE2.split(" ");
  const totalWords = words1.length + words2.length;

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div
          ref={containerRef}
          className="grid grid-cols-1 gap-6 md:grid-cols-[200px_1fr] md:gap-16"
        >
          {/* Left: label */}
          <div className="pt-1">
            <span className="text-base text-[#999]">My Expertise</span>
          </div>

          {/* Right: large text reveal + animated tag line */}
          <div className="flex flex-col gap-2">
            <p className="flex flex-wrap font-[family-name:var(--font-heading)] text-2xl font-bold tracking-[-0.03em] text-[#111] md:text-4xl lg:text-5xl">
              {words1.map((word, i) => {
                const start = i / totalWords;
                const end = start + 1 / totalWords;
                return (
                  <Word key={i} progress={scrollYProgress} range={[start, end]}>
                    {word}
                  </Word>
                );
              })}
              {/* Force a new flex row — same as a line break */}
              <span className="basis-full" />
              {words2.map((word, i) => {
                const idx = words1.length + i;
                const start = idx / totalWords;
                const end = start + 1 / totalWords;
                return (
                  <Word key={`l2-${i}`} progress={scrollYProgress} range={[start, end]}>
                    {word}
                  </Word>
                );
              })}
            </p>
            <AnimatedText
              text="That's where I come in 💪"
              textClassName="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-[-0.03em] text-[#111] md:text-4xl lg:text-5xl"
              underlineClassName="text-[#111]"
              underlineDuration={1.2}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
