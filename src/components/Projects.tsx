import { useState, useEffect } from "react";
const hospitalityVideo = "/videos/hospitality-dashboard.mp4";
const cocaColaVideo = "/videos/coca-cola-dashboard.mp4";
import bankChurnImage from "@/assets/bank-churn.webp";
import uan32ForecastImage from "@/assets/uan32-forecast.png";
import { 
  ExternalLink, Github, TrendingUp, BarChart, Database, Brain, 
  FileSpreadsheet, Snowflake, Code, Table, Star 
} from "lucide-react";
import PythonIcon from "@/components/icons/PythonIcon";
import RIcon from "@/components/icons/RIcon";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

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
  image?: string;
  video?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Bank Customer Churn Prediction",
    description: "",
    skills: ["python", "ml"],
    image: bankChurnImage,
    icon: TrendingUp,
    highlights: [
      "Customers aged 45+ were 2.1× more likely to churn",
      "31% churn among €100k+ balance vs 9% for zero-balance",
      "Feature importance: Age (24%), Balance (19%), NumOfProducts (17%)",
    ],
    metrics: { "AUC-ROC": "0.872", "PR-AUC": "0.534" },
    liveUrl: "https://github.com/Musleh-Ur/Bank-Customers-Churn-Prediction-using-Machine-Learning",
  },
  {
    id: 8,
    title: "Time Series Forecasting of UAN32 Fertilizer Price",
    description: "",
    skills: ["python", "ml"],
    image: uan32ForecastImage,
    icon: TrendingUp,
    highlights: [
      "SARIMAX model with exogenous variables for price forecasting",
      "Achieved RMSE of 10.33 and MAE of 7.15",
      "Incorporated seasonality, historical prices, and commodity drivers",
    ],
    metrics: { "RMSE": "10.33", "MAE": "7.15" },
    liveUrl: "https://github.com/Musleh-Ur/TimeSeries_Forecast_of_UAN32_NOLA",
  },
  {
    id: 2,
    title: "Hospitality Management Dashboard",
    description: "",
    skills: ["powerbi", "sql", "excel"],
    icon: BarChart,
    highlights: [
      "KPI-driven dashboard with multiple data source integration",
      "Advanced DAX measures improved reporting efficiency by 25%",
      "Custom tooltips and calculated columns for strategic insights",
    ],
    metrics: { "Efficiency": "+25%", "Data Sources": "5+" },
    video: hospitalityVideo,
    liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiYWExNTUxMjEtMGZkZS00NTE5LWFkNzYtOGMzMDhiNDM1ZGVhIiwidCI6IjhhNjdhOTE1LTVjYTItNDRiOS1iOGIxLTczZTZlOGIwNzg1MiIsImMiOjEwfQ%3D%3D",
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
];

const skillFilters = [
  { id: "all", label: "All Projects", icon: Star, color: "primary" },
  { id: "python", label: "Python", icon: PythonIcon, color: "python" },
  { id: "r", label: "R Language", icon: RIcon, color: "r" },
  { id: "excel", label: "Excel", icon: FileSpreadsheet, color: "excel" },
  { id: "powerbi", label: "Power BI", icon: BarChart, color: "powerbi" },
  { id: "gsheets", label: "Google Sheets", icon: Table, color: "gsheets" },
  { id: "ml", label: "Machine Learning", icon: Brain, color: "ml" },
  { id: "sql", label: "SQL", icon: Database, color: "sql" },
  { id: "snowflake", label: "SnowFlake", icon: Snowflake, color: "snowflake" },
];

const skillColors: Record<string, { border: string; bg: string; text: string }> = {
  primary: { border: "border-primary", bg: "bg-primary", text: "text-primary" },
  python: { border: "border-[#3572A5]", bg: "bg-[#3572A5]", text: "text-[#3572A5]" },
  r: { border: "border-[#276DC3]", bg: "bg-[#276DC3]", text: "text-[#276DC3]" },
  excel: { border: "border-[#217346]", bg: "bg-[#217346]", text: "text-[#217346]" },
  powerbi: { border: "border-[#F2C811]", bg: "bg-[#F2C811]", text: "text-[#F2C811]" },
  gsheets: { border: "border-[#34A853]", bg: "bg-[#34A853]", text: "text-[#34A853]" },
  ml: { border: "border-[#FF6F61]", bg: "bg-[#FF6F61]", text: "text-[#FF6F61]" },
  sql: { border: "border-[#00758F]", bg: "bg-[#00758F]", text: "text-[#00758F]" },
  snowflake: { border: "border-[#29A3D9]", bg: "bg-[#29A3D9]", text: "text-[#29A3D9]" },
};

const skillIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  python: PythonIcon,
  r: RIcon,
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

const Projects = () => {
  const [activeSkill, setActiveSkill] = useState("all");
  const [visibleProjects, setVisibleProjects] = useState<Project[]>(projects);

  useEffect(() => {
    if (activeSkill === "all") {
      setVisibleProjects(projects);
    } else {
      setVisibleProjects(projects.filter(p => p.skills.includes(activeSkill)));
    }
  }, [activeSkill]);

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
            Real-world data science projects showcasing machine learning, 
            visualization, and database expertise.
          </p>

          {/* Skill Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-4">
            {skillFilters.map((skill) => {
              const colors = skillColors[skill.color];
              const isActive = activeSkill === skill.id;
              
              return (
                <button
                  key={skill.id}
                  onClick={() => setActiveSkill(skill.id)}
                  className={`
                    group relative px-3 py-2 md:px-5 md:py-2.5 rounded-xl font-medium text-xs md:text-sm
                    flex items-center gap-1.5 md:gap-2 transition-all duration-300
                    border-2 ${colors.border} active:scale-95
                    ${isActive 
                      ? `${colors.bg} text-background shadow-lg scale-105` 
                      : `bg-secondary/50 ${colors.text} hover:bg-secondary hover:scale-105`
                    }
                  `}
                  aria-pressed={isActive}
                >
                  <skill.icon className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span>{skill.label}</span>
                </button>
              );
            })}
          </div>

          {/* Filter Status */}
          <p className="text-sm text-muted-foreground">
            {activeSkill === "all" 
              ? `Showing all ${visibleProjects.length} projects`
              : `Showing ${visibleProjects.length} project${visibleProjects.length !== 1 ? 's' : ''} with ${skillLabels[activeSkill]}`
            }
          </p>
        </AnimatedSection>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <AnimatedSection key={project.id} animation="fade-up" delay={index * 100}>
              <div
                className="group relative p-6 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow hover:-translate-y-2 active:scale-[0.98] overflow-hidden"
              >
                {/* Background accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 group-hover:w-40 group-hover:h-40 transition-all duration-700" />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start gap-3 mb-4">
                    <div className="p-2.5 rounded-lg bg-primary/10 text-primary flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                      <project.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                  </div>
                  
                  {/* Project Media */}
                  {project.video && (
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <video src={project.video} autoPlay loop muted playsInline className="w-full object-contain" />
                    </div>
                  )}
                  {project.image && !project.video && (
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <img src={project.image} alt={project.title} loading="lazy" decoding="async" className="w-full object-contain" />
                    </div>
                  )}

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
