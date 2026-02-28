import { NavLink, SocialLink, Testimonial, StatCard } from "@/types";

export const navLinks: NavLink[] = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#works" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://linkedin.com/in/gustavocomitre", icon: "linkedin" },
  { label: "X (Twitter)", href: "https://twitter.com/gustavocomitre", icon: "twitter" },
  { label: "GitHub", href: "https://github.com/gustavocomitre", icon: "github" },
  { label: "Instagram", href: "https://instagram.com/gustavocomitre", icon: "instagram" },
];

export const testimonial: Testimonial = {
  quote:
    "Gustavo's product expertise goes beyond metrics — he builds experiences that truly connect with users. A great collaborator and a problem-solver at heart.",
  name: "Placeholder",
  role: "Colleague",
};

export const stats: StatCard[] = [
  { value: "90M+", label: "users monthly impacted by products developed by my teams." },
  { value: "1M+", label: "downloads/mo with zero ads, focusing on building flywheels." },
];

export const heroContent = {
  tagline: "What drives me...",
  heading:
    "My passion is building beautiful healthcare products that improve millions of lives",
  backgroundTitle: "My background",
  backgroundText:
    "Led hypergrowth patient products at Docplanner — the world's #1 doctor booking platform (14 countries, 90M+ users/mo). Founded and sold a health app to Brazil's largest drugstore chain, and helped tech companies on 0-1 products and build high-performing teams.",
  email: "gustavo.comitre@gmail.com",
};
