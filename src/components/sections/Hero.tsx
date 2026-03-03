"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import { heroContent } from "@/data/site";

const LINKEDIN_URL = "https://www.linkedin.com/in/gustavocomitre/";

export default function Hero() {
  return (
    // Mobile + tablet (< lg): stacked flex column filling viewport height
    // Desktop (≥ lg): block with min-h-screen and absolute photo behind content
    <section className="relative flex h-dvh flex-col overflow-hidden lg:block lg:min-h-screen">
      {/* Content — first in DOM = top on mobile/tablet (normal flow).
          On desktop: absolute overlay pinned to bottom. */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative z-10 shrink-0 pb-8 pt-8 lg:absolute lg:inset-0 lg:flex lg:flex-col lg:justify-end lg:pb-28 lg:pt-0"
      >
        <Container>
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:gap-10">
            {/* Left column */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                {/* Radar-style green dot */}
                <span className="relative flex h-3 w-3 items-center justify-center">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="absolute h-[200%] w-[200%] animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite_0.5s] rounded-full bg-green-400 opacity-30" />
                  <span className="relative h-2 w-2 rounded-full bg-green-500" />
                </span>
                <span className="text-sm text-[#666]">{heroContent.tagline}</span>
              </div>
              <h1 className="max-w-xl font-[family-name:var(--font-heading)] text-3xl font-bold tracking-[-0.03em] text-[#111] lg:text-4xl xl:text-[2.75rem] xl:leading-[1.15]">
                {heroContent.heading}
              </h1>
            </div>

            {/* Right column */}
            <div className="flex flex-col lg:justify-end">
              <h2 className="mb-2 font-[family-name:var(--font-heading)] text-base font-bold tracking-[-0.03em] text-[#111]">
                {heroContent.backgroundTitle}{" "}
                <span aria-hidden="true">🏆</span>
              </h2>
              <p className="mb-5 text-sm leading-relaxed text-[#555]">
                {heroContent.backgroundText}
              </p>
              <div>
                <Button href={LINKEDIN_URL} variant="primary">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/linkedin.svg" alt="" className="h-4 w-4 brightness-0 invert" />
                  Follow me
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </motion.div>

      {/* Photo — second in DOM = below content on mobile/tablet (normal flow).
          On desktop: absolute, fills entire hero as a background. */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="relative min-h-0 flex-1 w-full lg:absolute lg:inset-0 lg:z-0 lg:flex lg:h-auto lg:justify-center"
        style={{ willChange: "transform", backfaceVisibility: "hidden" }}
      >
        <div className="relative h-full w-full lg:max-w-[900px]">
          <Image
            src="/images/hero-portrait.webp"
            alt="Gustavo Comitre"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Mobile/tablet: fade bottom edge to white */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent lg:hidden" />

        {/* Desktop: subtle side fades */}
        <div className="absolute inset-y-0 left-0 hidden w-32 bg-gradient-to-r from-white/40 to-transparent lg:block" />
        <div className="absolute inset-y-0 right-0 hidden w-32 bg-gradient-to-l from-white/40 to-transparent lg:block" />
      </motion.div>

      {/* Desktop only: gradient blur overlay between photo and content */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] hidden h-[70vh] lg:block">
        <div className="absolute inset-0 [mask-image:linear-gradient(to_top,black_0%,black_30%,transparent_100%)] backdrop-blur-xl" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-white/40 to-transparent" />
      </div>
    </section>
  );
}
