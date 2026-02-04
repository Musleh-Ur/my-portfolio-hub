import { useState, useEffect } from "react";
import { ExternalLink, Github, TrendingUp, BarChart, Database, Brain, FileSpreadsheet, Snowflake, Code, Table } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: number;
  title: string;
  description: string;
  skills: string[];
  icon: React.ComponentType<{ className?: string }>;
  highlights: string[];
  metrics: Record<string, string>;
  githubUrl?: string;
  liveUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Bank Customer Churn Prediction",
    description: "Machine learning project predicting customer churn using ensemble methods. Achieved 87.2% AUC-ROC with XGBoost after extensive feature engineering and hyperparameter tuning.",
    skills: ["python", "ml", "sql"],
    icon: TrendingUp,
    highlights: [
      "Customers aged 45+ were 2.1× more likely to churn",
      "31% churn among €100k+ balance vs 9% for zero-balance",
      "Feature importance: Age (24%), Balance (19%), NumOfProducts (17%)",
    ],
    metrics: { "AUC-ROC": "0.872", "PR-AUC": "0.534" },
    githubUrl: "https://github.com/",
  },
  {
    id: 2,
    title: "Hospitality Management Dashboard",
    description: "Interactive Power BI dashboard integrating multiple data sources for real-time hospitality analytics and strategic decision-making with advanced DAX measures.",
    skills: ["powerbi", "sql", "excel"],
    icon: BarChart,
    highlights: [
      "KPI-driven dashboard with multiple data source integration",
      "Advanced DAX measures improved reporting efficiency by 25%",
      "Custom tooltips and calculated columns for strategic insights",
    ],
    metrics: { "Efficiency": "+25%", "Data Sources": "5+" },
  },
  {
    id: 3,
    title: "College Student Database System",
    description: "Relational database design with optimized queries for academic performance reporting, featuring complex joins, CTEs, and efficient data retrieval.",
    skills: ["sql", "excel"],
    icon: Database,
    highlights: [
      "Designed normalized relational database schema",
      "Implemented complex joins, subqueries, and CTEs",
      "Optimized query performance for large datasets",
    ],
    metrics: { "Query Types": "15+", "Tables": "8" },
    githubUrl: "https://github.com/",
  },
  {
    id: 4,
    title: "Predictive Maintenance System",
    description: "Designed a predictive maintenance system using Python for ML model training and Power BI for visualizing equipment health predictions.",
    skills: ["python", "ml", "powerbi"],
    icon: Brain,
    highlights: [
      "Real-time equipment health monitoring",
      "Reduced unplanned downtime predictions",
      "Interactive Power BI dashboards for maintenance teams",
    ],
    metrics: { "Accuracy": "91%", "Models": "3" },
    githubUrl: "https://github.com/",
  },
  {
    id: 5,
    title: "Business Intelligence Report",
    description: "Built a comprehensive BI report integrating Google Sheets data with Power BI and SnowFlake for real-time business insights and analytics.",
    skills: ["powerbi", "gsheets", "snowflake"],
    icon: BarChart,
    highlights: [
      "Real-time data synchronization from multiple sources",
      "Automated refresh schedules for live reporting",
      "Executive-level KPI tracking and visualization",
    ],
    metrics: { "Reports": "12", "Users": "50+" },
  },
  {
    id: 6,
    title: "Financial Planning Tool",
    description: "Developed a collaborative budgeting and financial planning tool using Excel and Google Sheets with advanced formulas and automation.",
    skills: ["excel", "gsheets"],
    icon: FileSpreadsheet,
    highlights: [
      "Automated budget calculations and forecasting",
      "Collaborative multi-user access and editing",
      "Dynamic charts and variance analysis",
    ],
    metrics: { "Formulas": "200+", "Sheets": "15" },
  },
  {
    id: 7,
    title: "Statistical Report Generator",
    description: "Created an automated tool to generate statistical reports from survey data using R and Excel for comprehensive data processing and analysis.",
    skills: ["r", "excel"],
    icon: Table,
    highlights: [
      "Automated statistical analysis pipeline",
      "Publication-ready report generation",
      "Support for multiple survey formats",
    ],
    metrics: { "Tests": "20+", "Export Formats": "5" },
    githubUrl: "https://github.com/",
  },
];

const skillIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  python: Code,
  r: Table,
  excel: FileSpreadsheet,
  powerbi: BarChart,
  gsheets: Table,
  ml: Brain,
  sql: Database,
  snowflake: Snowflake,
};

const skillLabels: Record<string, string> = {
  python: "Python",
  r: "R Language",
  excel: "Excel",
  powerbi: "Power BI",
  gsheets: "Google Sheets",
  ml: "Machine Learning",
  sql: "SQL",
  snowflake: "SnowFlake",
};

const skillTagColors: Record<string, string> = {
  python: "bg-[#3572A5]/20 text-[#3572A5] border-[#3572A5]/30",
  r: "bg-[#276DC3]/20 text-[#276DC3] border-[#276DC3]/30",
  excel: "bg-[#217346]/20 text-[#217346] border-[#217346]/30",
  powerbi: "bg-[#F2C811]/20 text-[#F2C811] border-[#F2C811]/30",
  gsheets: "bg-[#34A853]/20 text-[#34A853] border-[#34A853]/30",
  ml: "bg-[#FF6F61]/20 text-[#FF6F61] border-[#FF6F61]/30",
  sql: "bg-[#00758F]/20 text-[#00758F] border-[#00758F]/30",
  snowflake: "bg-[#29A3D9]/20 text-[#29A3D9] border-[#29A3D9]/30",
};

interface ProjectsProps {
  activeSkill: string;
}

const Projects = ({ activeSkill }: ProjectsProps) => {
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(projects);

  useEffect(() => {
    if (activeSkill === "all") {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter(p => p.skills.includes(activeSkill)));
    }
  }, [activeSkill]);

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--accent)/0.05)_0%,transparent_50%)]" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm mb-3">Featured Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {activeSkill === "all" 
              ? "Showing all projects. Click a skill above to filter."
              : `Showing ${visibleProjects.length} project${visibleProjects.length !== 1 ? 's' : ''} using ${skillLabels[activeSkill] || activeSkill}.`
            }
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow overflow-hidden animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary flex-shrink-0">
                    <project.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold leading-tight">{project.title}</h3>
                </div>
                
                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Skill Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill) => {
                    const SkillIcon = skillIcons[skill];
                    return (
                      <span
                        key={skill}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md border ${skillTagColors[skill]}`}
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
                      className="flex-1 p-2.5 rounded-lg bg-secondary/50 border border-border/50 text-center"
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
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-secondary hover:bg-secondary/80 text-sm font-medium transition-colors"
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
                      className="flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-primary text-primary-foreground text-sm font-medium transition-colors hover:bg-primary/90"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            </div>
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
