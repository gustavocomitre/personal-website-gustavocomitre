"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Project } from "@/types";
import TagPill from "@/components/ui/TagPill";
import { cn } from "@/lib/utils";

const projectGradients: Record<string, string> = {
  docplanner: "from-blue-900 to-blue-600",
  deepful: "from-violet-900 to-violet-600",
  "cuco-health": "from-emerald-900 to-emerald-600",
  consulting: "from-slate-800 to-slate-500",
  "zaia-health": "from-rose-900 to-rose-600",
  soon: "from-gray-700 to-gray-400",
};

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const gradient =
    projectGradients[project.slug] || "from-gray-700 to-gray-400";
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const rotateX = useTransform(springY, [0, 1], [4, -4]);
  const rotateY = useTransform(springX, [0, 1], [-4, 4]);

  const glareX = useTransform(springX, [0, 1], [0, 100]);
  const glareY = useTransform(springY, [0, 1], [0, 100]);
  const glareBackground = useTransform(
    [glareX, glareY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}% ${y}%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)`
  );

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const cardContent = (
    <div className="overflow-hidden rounded-[20px]">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX, rotateY, transformPerspective: 800 }}
        className="group relative aspect-[4/3]"
      >
        {/* Gradient background (always present as fallback) */}
        <div
          className={cn("absolute inset-0 bg-gradient-to-br", gradient)}
        />

        {/* Photo — shown when coverImage is provided, scales on hover */}
        {project.coverImage && (
          <div className="absolute inset-0 overflow-hidden transition-transform duration-700 ease-out group-hover:scale-110">
            <Image
              src={project.coverImage}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}

        {/* Liquid glass glare on hover */}
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background: glareBackground }}
        />

        {/* Bottom gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

        {/* Hover indicator — "Coming Soon" or "Know more" */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="scale-90 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm font-medium text-white opacity-0 backdrop-blur-md transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100">
            {project.comingSoon ? "Coming Soon" : "Know more"}
          </span>
        </div>

        {/* Bottom-left content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="mb-3 font-[family-name:var(--font-heading)] text-xl font-bold text-white">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <TagPill key={tag} label={tag} variant="light" />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );

  if (project.comingSoon) {
    return cardContent;
  }

  return (
    <Link href={`/works/${project.slug}`} className="block">
      {cardContent}
    </Link>
  );
}
