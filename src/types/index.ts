export interface Project {
  slug: string;
  title: string;
  tags: string[];
  coverImage: string;
  heroImage: string;
  overview: string;
  role: string;
  period: string;
  achievements: string[];
  website?: string;
  detailImages: { src: string; alt: string; fullWidth?: boolean }[];
  comingSoon?: boolean;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export interface StatCard {
  value: string;
  label: string;
}
