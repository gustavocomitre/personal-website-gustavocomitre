import { notFound } from "next/navigation";
import { Metadata } from "next";
import { projects, activeProjects } from "@/data/projects";
import WorkHero from "@/components/works/WorkHero";
import WorkContentCard from "@/components/works/WorkContentCard";
import MoreWorks from "@/components/works/MoreWorks";

interface WorkPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return activeProjects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  const description = project.overview.slice(0, 160);
  const ogImage = project.heroImage || "/images/og-image.png";

  return {
    title: project.title,
    description,
    openGraph: {
      type: "website",
      title: `${project.title} — Gustavo Comitre`,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — Gustavo Comitre`,
      description,
      images: [ogImage],
    },
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project || project.comingSoon) {
    notFound();
  }

  return (
    <>
      <WorkHero project={project} />
      <WorkContentCard project={project} />
      <MoreWorks currentSlug={project.slug} />
    </>
  );
}
