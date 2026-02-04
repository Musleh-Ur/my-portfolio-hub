import { Code, Database, BarChart3, Brain, FileSpreadsheet, Server } from "lucide-react";

const skills = [
  {
    category: "Programming & Querying",
    icon: Code,
    items: ["Python", "R", "SQL", "DAX"],
  },
  {
    category: "ML & Data Science",
    icon: Brain,
    items: ["Scikit-learn", "TensorFlow", "Pandas", "NumPy"],
  },
  {
    category: "Visualization",
    icon: BarChart3,
    items: ["Power BI", "Matplotlib", "Seaborn", "ggplot"],
  },
  {
    category: "Database Tools",
    icon: Database,
    items: ["SQL Server", "MySQL", "Power Query"],
  },
  {
    category: "Analytics Tools",
    icon: FileSpreadsheet,
    items: ["MS Excel", "Google Sheets", "Statistical Modeling"],
  },
  {
    category: "Core Competencies",
    icon: Server,
    items: ["Data Cleaning", "Feature Engineering", "Forecasting", "ETL"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.05)_0%,transparent_50%)]" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-3">What I Work With</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for end-to-end data science workflows, 
            from data wrangling to model deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="group p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-500 hover:shadow-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-lg">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm rounded-full bg-secondary text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-300"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
