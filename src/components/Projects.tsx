import { useMemo, useState } from "react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import ProjectCard from "@/components/ProjectCard";
import { PROJECTS, SKILL_COLORS, SKILL_FILTERS, SKILL_LABELS } from "@/data/projects";

const ALL_FILTER = "all";

const Projects = () => {
  const [activeSkill, setActiveSkill] = useState<string>(ALL_FILTER);

  const visibleProjects = useMemo(
    () =>
      activeSkill === ALL_FILTER
        ? PROJECTS
        : PROJECTS.filter((project) => project.skills.includes(activeSkill)),
    [activeSkill]
  );

  const filterStatus =
    activeSkill === ALL_FILTER
      ? `Showing all ${visibleProjects.length} projects`
      : `Showing ${visibleProjects.length} project${visibleProjects.length === 1 ? "" : "s"} with ${SKILL_LABELS[activeSkill]}`;

  return (
    <section id="projects" className="py-16 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--accent)/0.05)_0%,transparent_50%)]" />

      <div className="section-container relative z-10">
        <AnimatedSection animation="fade-up" className="text-center mb-12">
          <p className="text-primary font-mono text-sm mb-3">Featured Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Real-world data science projects showcasing machine learning, visualization, and
            database expertise.
          </p>

          {/* Skill Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4">
            {SKILL_FILTERS.map(({ id, label, icon: Icon, color }) => {
              const colors = SKILL_COLORS[color];
              const isActive = activeSkill === id;

              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveSkill(id)}
                  className={`
                    group relative px-3 py-2 md:px-5 md:py-2.5 rounded-xl font-medium text-xs md:text-sm
                    flex items-center justify-center gap-1.5 md:gap-2 transition-all duration-300
                    border-2 ${colors.border} active:scale-95 min-w-[120px] md:min-w-[150px]
                    ${
                      isActive
                        ? `${colors.bg} text-background shadow-lg scale-105`
                        : `bg-secondary/50 ${colors.text} hover:bg-secondary hover:scale-105`
                    }
                  `}
                  aria-pressed={isActive}
                >
                  <Icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span>{label}</span>
                </button>
              );
            })}
          </div>

          {/* Filter Status */}
          <p className="text-sm text-muted-foreground" role="status" aria-live="polite">
            {filterStatus}
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {visibleProjects.map((project, index) => (
            <AnimatedSection
              key={project.id}
              animation="fade-up"
              delay={index * 100}
              className="h-full"
            >
              <ProjectCard project={project} />
            </AnimatedSection>
          ))}
        </div>

        {/* Empty State */}
        {visibleProjects.length === 0 && (
          <div className="text-center py-16">
            <p className="text-muted-foreground">No projects found for this skill.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
