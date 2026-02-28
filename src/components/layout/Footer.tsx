"use client";

import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";
import TextReveal from "@/components/ui/TextReveal";

const LINKEDIN_URL = "https://www.linkedin.com/in/gustavocomitre/";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#111] text-white">
      {/* Top CTA area with text reveal */}
      <Container className="py-20 md:py-28">
        <div className="max-w-4xl">
          <TextReveal
            text="My passion is building beautiful healthcare products that improve millions of lives"
            className="mb-10"
          />
          <p className="mb-8 text-base text-white/60 md:text-lg">
            Contact me on LinkedIn if you would like my help
          </p>
          <Button
            href={LINKEDIN_URL}
            className="border-white text-white hover:bg-white hover:text-[#111]"
            variant="outline"
            showArrow
          >
            Check Gustavo&apos;s LinkedIn
          </Button>
        </div>
      </Container>

      {/* Footer bottom */}
      <Container className="border-t border-white/10 py-6">
        <p className="text-sm text-[#666]">
          &copy; 2026 Gustavo Comitre. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
