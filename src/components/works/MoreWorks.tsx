import { projects } from "@/data/projects";
import Container from "@/components/layout/Container";
import ProjectCard from "@/components/ui/ProjectCard";

interface MoreWorksProps {
  currentSlug: string;
}

export default function MoreWorks({ currentSlug }: MoreWorksProps) {
  const otherProjects = projects
    .filter((p) => p.slug !== currentSlug && !p.comingSoon)
    .slice(0, 2);

  if (otherProjects.length === 0) return null;

  return (
    <section className="py-12 md:py-20">
      <Container>
        <h2 className="mb-10 font-[family-name:var(--font-heading)] text-3xl font-bold tracking-[-0.03em] text-[#111]">
          More works
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {otherProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
