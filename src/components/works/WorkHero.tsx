"use client";

import { useState } from "react";
import Image from "next/image";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

const projectGradients: Record<string, string> = {
  docplanner: "from-blue-900 to-blue-600",
  deepful: "from-violet-900 to-violet-600",
  "cuco-health": "from-emerald-900 to-emerald-600",
  consulting: "from-slate-800 to-slate-500",
  "zaia-health": "from-rose-900 to-rose-600",
};

interface WorkHeroProps {
  project: Project;
}

export default function WorkHero({ project }: WorkHeroProps) {
  const gradient = projectGradients[project.slug] || "from-gray-700 to-gray-400";
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="relative h-[50vh] w-full overflow-hidden md:h-[60vh]">
      {/* Gradient fallback — fades out once image is ready */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-br transition-opacity duration-700",
          gradient,
          imageLoaded ? "opacity-0" : "opacity-100"
        )}
      />

      {/* Photo — fades in on load */}
      {project.heroImage && (
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          className={cn(
            "object-cover transition-opacity duration-700",
            imageLoaded ? "opacity-100" : "opacity-0"
          )}
          sizes="100vw"
          priority
          onLoad={() => setImageLoaded(true)}
        />
      )}

      {/* Title watermark — only shown when no real image */}
      {!project.heroImage && (
        <div className="absolute inset-0 flex items-center justify-center">
          <h2 className="font-[family-name:var(--font-heading)] text-4xl font-bold tracking-[-0.03em] text-white/30 md:text-7xl">
            {project.title}
          </h2>
        </div>
      )}
    </div>
  );
}
