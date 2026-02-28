"use client";

import { stats } from "@/data/site";
import Container from "@/components/layout/Container";
import FadeIn from "@/components/ui/FadeIn";

export default function SocialProof() {
  return (
    <section className="py-12 md:py-20">
      <Container>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Card 1: Stat */}
          <FadeIn delay={0}>
            <div className="flex flex-col justify-between rounded-[20px] bg-[#f5f5f5] p-8">
              <div>
                <span className="mb-6 block text-3xl">😍</span>
                <p className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[#111]">
                  {stats[0].value}
                </p>
                <p className="mt-1 font-[family-name:var(--font-body)] text-sm text-[#666]">
                  {stats[0].label}
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Card 2: Global stat */}
          <FadeIn delay={0.1}>
            <div className="flex flex-col justify-between rounded-[20px] bg-[#111] p-8 text-white">
              <div>
                <span className="mb-6 block text-3xl">🌎</span>
                <p className="font-[family-name:var(--font-heading)] text-4xl font-bold text-white">
                  Global
                </p>
                <p className="mt-1 font-[family-name:var(--font-body)] text-sm text-white/60">
                  experience with users worldwide, covering LATAM, EU and US.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Card 3: Stat */}
          <FadeIn delay={0.2}>
            <div className="flex flex-col justify-between rounded-[20px] bg-[#f5f5f5] p-8">
              <div>
                <span className="mb-6 block text-3xl">🔥</span>
                <p className="font-[family-name:var(--font-heading)] text-4xl font-bold text-[#111]">
                  {stats[1].value}
                </p>
                <p className="mt-1 font-[family-name:var(--font-body)] text-sm text-[#666]">
                  {stats[1].label}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
