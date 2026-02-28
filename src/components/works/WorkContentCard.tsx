"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Project } from "@/types";

interface WorkContentCardProps {
  project: Project;
}

export default function WorkContentCard({ project }: WorkContentCardProps) {
  const detailRows = [
    {
      label: "Overview",
      content: (
        <p className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-[#333]">
          {project.overview}
        </p>
      ),
    },
    {
      label: "Role",
      content: (
        <p className="font-[family-name:var(--font-body)] text-sm text-[#333]">
          {project.role}
        </p>
      ),
    },
    {
      label: "Period",
      content: (
        <p className="font-[family-name:var(--font-body)] text-sm text-[#333]">
          {project.period}
        </p>
      ),
    },
    ...(project.achievements.length > 0
      ? [
          {
            label: "Key Achievements",
            content: (
              <ul className="list-disc space-y-2 pl-4">
                {project.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="font-[family-name:var(--font-body)] text-sm leading-relaxed text-[#333]"
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            ),
          },
        ]
      : []),
    ...(project.website
      ? [
          {
            label: "Website",
            content: (
              <a
                href={project.website.startsWith("http") ? project.website : `https://${project.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-[family-name:var(--font-body)] text-sm text-[#111] underline underline-offset-4 hover:opacity-60 transition-opacity"
              >
                {project.website.replace(/^https?:\/\//, "")}
              </a>
            ),
          },
        ]
      : []),
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative -mt-16 mx-auto max-w-[1120px] rounded-t-[40px] bg-white p-8 shadow-[16px_16px_60px_-8px_rgba(0,0,0,0.2)] md:p-12"
    >
      {/* Close button */}
      <Link
        href="/#works"
        className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-[#e5e5e5] text-[#666] transition-colors hover:border-[#111] hover:text-[#111] md:right-12 md:top-10"
        aria-label="Close and return to works"
      >
        <X className="h-5 w-5" />
      </Link>

      {/* Title */}
      <h1 className="mb-12 max-w-2xl font-[family-name:var(--font-heading)] text-3xl font-bold tracking-[-0.03em] text-[#111] md:text-5xl">
        {project.title}
      </h1>

      {/* Detail rows */}
      <div className="mb-12">
        {detailRows.map((row, index) => (
          <motion.div
            key={row.label}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
            className="grid grid-cols-1 gap-4 border-b border-[#e5e5e5] py-6 md:grid-cols-[200px_1fr]"
          >
            <span className="text-sm uppercase tracking-wider text-[#999]">
              {row.label}
            </span>
            <div>{row.content}</div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
