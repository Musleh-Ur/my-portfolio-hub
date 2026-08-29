import { memo } from "react";
import { ExternalLink, Github } from "lucide-react";
import { SKILL_ICONS, SKILL_LABELS, SKILL_TAG_COLORS, type Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

/** Renders a single project card. Memoized — projects data is static. */
const ProjectCard = memo(({ project }: ProjectCardProps) => {
  const { icon: Icon, title, skills, highlights, metrics, githubUrl, liveUrl, image, video } = project;

  return (
    <div className="group relative p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 active:scale-[0.98] overflow-hidden h-full flex flex-col">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 group-hover:w-40 group-hover:h-40 transition-all duration-700" />

      <div className="relative z-10 flex flex-col flex-1">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4 min-h-[3.5rem]">
          <div className="p-2.5 rounded-lg bg-primary/10 text-primary flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
            <Icon className="w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors duration-300">
            {title}
          </h3>
        </div>

        {/* Project Media */}
        <div className="mb-4 overflow-hidden rounded-lg aspect-video bg-secondary/30">
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover object-left-top rounded-lg"
              aria-label={`${title} preview`}
            />
          ) : image ? (
            <img
              src={image}
              alt={title}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-left-top rounded-lg"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center rounded-lg">
              <Icon className="w-12 h-12 text-muted-foreground/30" />
            </div>
          )}
        </div>

        {/* Skill Tags */}
        <div className="flex flex-wrap gap-2 mb-4 min-h-[2rem] content-start">
          {skills.map((skill) => {
            const SkillIcon = SKILL_ICONS[skill];
            return (
              <span
                key={skill}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md border ${SKILL_TAG_COLORS[skill]} hover:scale-105 transition-transform duration-200`}
              >
                {SkillIcon && <SkillIcon className="w-3 h-3" />}
                {SKILL_LABELS[skill]}
              </span>
            );
          })}
        </div>

        {/* Highlights */}
        <ul className="space-y-1.5 mb-4 min-h-[7.5rem]">
          {highlights.map((highlight) => (
            <li key={highlight} className="flex items-start gap-2 text-xs text-muted-foreground">
              <span className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
              <span className="leading-relaxed">{highlight}</span>
            </li>
          ))}
        </ul>

        {/* Bottom block: metrics + buttons pinned to card bottom */}
        <div className="mt-auto">
          <div className="flex gap-3 mb-4">
            {Object.entries(metrics).map(([label, value]) => (
              <div
                key={label}
                className="flex-1 p-2.5 rounded-lg bg-secondary/50 border border-border/50 text-center group-hover:border-primary/20 transition-colors duration-300"
              >
                <p className="text-lg font-bold text-gradient">{value}</p>
                <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{label}</p>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            {githubUrl && (
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-sm font-medium transition-all duration-300 hover:scale-105 active:scale-95"
              >
                <Github className="w-4 h-4" />
                Code
              </a>
            )}
            {liveUrl && (
              <a
                href={liveUrl}
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
    </div>
  );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
