import { cn } from "@/lib/utils";

interface TagPillProps {
  label: string;
  variant?: "light" | "dark";
}

export default function TagPill({ label, variant = "dark" }: TagPillProps) {
  return (
    <span
      className={cn(
        "rounded-full px-3 py-1 text-sm",
        variant === "light" &&
          "border border-white/30 bg-white/20 text-white backdrop-blur-sm",
        variant === "dark" && "bg-[#f5f5f5] text-[#111]"
      )}
    >
      {label}
    </span>
  );
}
