import { ExternalLink, Github, TrendingUp, BarChart, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Bank Customer Churn Prediction",
    description: "Machine learning project predicting customer churn using ensemble methods. Achieved 87.2% AUC-ROC with XGBoost after extensive feature engineering.",
    tech: ["Python", "XGBoost", "Scikit-learn", "Pandas"],
    icon: TrendingUp,
    highlights: [
      "Customers aged 45+ were 2.1× more likely to churn",
      "31% churn among €100k+ balance vs 9% for zero-balance",
      "Feature importance: Age (24%), Balance (19%), NumOfProducts (17%)",
    ],
    metrics: {
      "AUC-ROC": "0.872",
      "PR-AUC": "0.534",
    },
  },
  {
    title: "Hospitality Management Dashboard",
    description: "Interactive Power BI dashboard integrating multiple data sources for real-time hospitality analytics and strategic decision-making.",
    tech: ["Power BI", "DAX", "Power Query", "SQL"],
    icon: BarChart,
    highlights: [
      "KPI-driven dashboard with multiple data source integration",
      "Advanced DAX measures improved reporting efficiency by 25%",
      "Custom tooltips and calculated columns for strategic insights",
    ],
    metrics: {
      "Efficiency Gain": "25%",
      "Data Sources": "5+",
    },
  },
  {
    title: "College Student Database",
    description: "Relational database design with optimized queries for academic performance reporting and efficient data retrieval.",
    tech: ["SQL Server", "DDL/DML", "CTEs", "Joins"],
    icon: Database,
    highlights: [
      "Designed normalized relational database schema",
      "Implemented complex joins, subqueries, and CTEs",
      "Optimized query performance for large datasets",
    ],
    metrics: {
      "Query Types": "15+",
      "Tables": "8",
    },
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--accent)/0.05)_0%,transparent_50%)]" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-3">Featured Work</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Real-world data science projects showcasing machine learning, 
            visualization, and database expertise.
          </p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative p-8 rounded-2xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-500" />
              
              <div className="relative z-10 flex flex-col lg:flex-row gap-8">
                {/* Left content */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      <project.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                  </div>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-mono rounded-md bg-secondary text-primary border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-6">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right metrics */}
                <div className="lg:w-48 flex lg:flex-col gap-4">
                  {Object.entries(project.metrics).map(([label, value]) => (
                    <div
                      key={label}
                      className="flex-1 p-4 rounded-xl bg-secondary/50 border border-border/50 text-center"
                    >
                      <p className="text-2xl md:text-3xl font-bold text-gradient mb-1">{value}</p>
                      <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
