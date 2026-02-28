"use client";

import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import Container from "@/components/layout/Container";
import ProjectCard from "@/components/ui/ProjectCard";
import FadeIn from "@/components/ui/FadeIn";

export default function FeaturedWorks() {
  return (
    <section id="works" className="py-12 md:py-20">
      <Container>
        {/* Section header */}
        <FadeIn>
          <div className="mb-10 flex items-center justify-between">
            <h2 className="font-[family-name:var(--font-heading)] text-3xl font-bold tracking-[-0.03em] text-[#111] md:text-4xl">
              Featured works
            </h2>
            <a
              href="https://www.linkedin.com/in/gustavocomitre/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-[#666] transition-colors hover:text-[#111]"
            >
              Check my LinkedIn
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </FadeIn>

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.1}>
              <ProjectCard project={project} />
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
