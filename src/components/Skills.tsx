import { Code, Database, BarChart3, Brain, FileSpreadsheet, Server, TrendingUp } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const skills = [
  {
    category: "Programming & Querying",
    icon: Code,
    color: "from-blue-500/20 to-cyan-500/20",
    borderColor: "group-hover:border-blue-500/50",
    items: ["Python", "R", "SQL", "DAX"],
  },
  {
    category: "ML & Data Science",
    icon: Brain,
    color: "from-purple-500/20 to-pink-500/20",
    borderColor: "group-hover:border-purple-500/50",
    items: ["Scikit-learn", "TensorFlow", "Pandas", "NumPy"],
  },
  {
    category: "Visualization",
    icon: BarChart3,
    color: "from-emerald-500/20 to-teal-500/20",
    borderColor: "group-hover:border-emerald-500/50",
    items: ["Power BI", "Matplotlib", "Seaborn", "ggplot"],
  },
  {
    category: "Database Tools",
    icon: Database,
    color: "from-orange-500/20 to-amber-500/20",
    borderColor: "group-hover:border-orange-500/50",
    items: ["SQL Server", "MySQL", "SnowFlake"],
  },
  {
    category: "Analytics Tools",
    icon: FileSpreadsheet,
    color: "from-green-500/20 to-lime-500/20",
    borderColor: "group-hover:border-green-500/50",
    items: ["MS Excel", "Google Sheets", "Power Query", "JASP", "SPSS"],
  },
  {
    category: "Core Competencies",
    icon: TrendingUp,
    color: "from-rose-500/20 to-red-500/20",
    borderColor: "group-hover:border-rose-500/50",
    items: ["Data Cleaning", "Feature Engineering", "Forecasting", "ETL"],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.05)_0%,transparent_50%)]" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="section-container relative z-10">
        {/* Header */}
        <AnimatedSection animation="fade-up" className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Code className="w-4 h-4 text-primary" />
            <span className="text-primary font-mono text-sm">Technical Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A comprehensive toolkit for end-to-end data science workflows, 
            from data wrangling to model deployment.
          </p>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <AnimatedSection key={skill.category} animation="fade-up" delay={index * 100}>
              <div
                className={`group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 ${skill.borderColor} transition-all duration-500 hover:shadow-lg hover:-translate-y-2 active:scale-[0.98] cursor-default`}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Shimmer on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />

                <div className="relative z-10">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 ring-1 ring-primary/20">
                      <skill.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base text-foreground">{skill.category}</h3>
                      <p className="text-xs text-muted-foreground">{skill.items.length} technologies</p>
                    </div>
                  </div>
                  
                  {/* Skills list */}
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 text-sm font-medium rounded-lg bg-secondary/80 text-muted-foreground hover:text-foreground hover:bg-primary/15 hover:scale-105 active:scale-95 transition-all duration-300 border border-transparent hover:border-primary/20 cursor-default"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
