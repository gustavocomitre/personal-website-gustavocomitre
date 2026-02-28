import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  variant?: "primary" | "outline";
  onClick?: () => void;
  showArrow?: boolean;
}

export default function Button({
  children,
  href,
  className,
  variant = "primary",
  onClick,
  showArrow = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 shadow-[16px_16px_40px_-8px_rgba(0,0,0,0.25)] hover:shadow-[16px_16px_48px_-4px_rgba(0,0,0,0.3)]";

  const variants = {
    primary: "bg-[#111] text-white hover:bg-[#333]",
    outline:
      "border border-[#111] text-[#111] hover:bg-[#111] hover:text-white",
  };

  const classes = cn(baseStyles, variants[variant], className);

  const content = (
    <>
      {children}
      {showArrow && <ArrowRight className="h-4 w-4" />}
    </>
  );

  if (href) {
    const isExternal =
      href.startsWith("http") || href.startsWith("mailto:");

    if (isExternal) {
      return (
        <a
          href={href}
          className={classes}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel={href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
