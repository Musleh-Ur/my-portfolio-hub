import { memo } from "react";
import { ExternalLink, Github } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import ProjectVideo from "./ProjectVideo";
import type { Project } from "./projectData";
import { skillIcons, skillLabels, skillTagColors } from "./projectData";

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = memo(({ project, index }: ProjectCardProps) => {
  return (
    <AnimatedSection animation="fade-up" delay={index * 100}>
      <div className="group relative p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 active:scale-[0.98] overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 group-hover:w-40 group-hover:h-40 transition-all duration-700" />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-start gap-3 mb-4">
            <div className="p-2.5 rounded-lg bg-primary/10 text-primary flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
              <project.icon className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors duration-300">
              {project.title}
            </h3>
          </div>

          {/* Project Media */}
          {project.video && (
            <ProjectVideo src={project.video} title={project.title} />
          )}
          {project.image && !project.video && (
            <div className="mb-4 overflow-hidden rounded-lg">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                decoding="async"
                className="w-full object-contain"
              />
            </div>
          )}

          {/* Description */}
          {project.description && (
            <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
              {project.description}
            </p>
          )}

          {/* Skill Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.skills.map((skill) => {
              const SkillIcon = skillIcons[skill];
              return (
                <span
                  key={skill}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md border ${skillTagColors[skill]} hover:scale-105 transition-transform duration-200`}
                >
                  {SkillIcon && <SkillIcon className="w-3 h-3" />}
                  {skillLabels[skill]}
                </span>
              );
            })}
          </div>

          {/* Highlights */}
          <ul className="space-y-1.5 mb-4">
            {project.highlights.slice(0, 2).map((highlight, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-muted-foreground">
                <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                <span className="line-clamp-1">{highlight}</span>
              </li>
            ))}
          </ul>

          {/* Metrics */}
          <div className="flex gap-3 mb-4">
            {Object.entries(project.metrics).map(([label, value]) => (
              <div
                key={label}
                className="flex-1 p-2.5 rounded-lg bg-secondary/50 border border-border/50 text-center group-hover:border-primary/20 transition-colors duration-300"
              >
                <p className="text-lg font-bold text-gradient">{value}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-all duration-300 hover:bg-primary/90 hover:scale-105 active:scale-95"
              >
                <ExternalLink className="w-4 h-4" />
                View Project
              </a>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
