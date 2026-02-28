"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import Button from "@/components/ui/Button";
import Container from "@/components/layout/Container";
import { cn } from "@/lib/utils";

const LINKEDIN_URL = "https://www.linkedin.com/in/gustavocomitre/";

export default function Header() {
  const pathname = usePathname();
  const isWorkPage = pathname.startsWith("/works/");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  if (isWorkPage) return null;

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white/95 shadow-[0_2px_32px_-4px_rgba(0,0,0,0.07)] backdrop-blur-md"
            : "bg-transparent"
        )}
      >
        <Container>
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="font-[family-name:var(--font-heading)] text-xl font-bold tracking-[-0.03em] text-[#111]"
            >
              Gustavo Comitre
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[#666] transition-colors hover:text-[#111]"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:block">
              <Button href={LINKEDIN_URL} variant="primary">
                Contact me
              </Button>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 items-center justify-center md:hidden"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-[#111]" />
              ) : (
                <Menu className="h-6 w-6 text-[#111]" />
              )}
            </button>
          </div>
        </Container>
      </header>

      {/* Mobile menu overlay — outside <header> to avoid sticky/fixed stacking context issues */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-16 z-[60] bg-white md:hidden"
          >
            <Container>
              <nav className="flex flex-col gap-6 py-10">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="font-[family-name:var(--font-heading)] text-2xl font-bold tracking-[-0.03em] text-[#111]"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.25 }}
                  className="pt-4"
                >
                  <Button
                    href={LINKEDIN_URL}
                    variant="primary"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact me
                  </Button>
                </motion.div>
              </nav>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
