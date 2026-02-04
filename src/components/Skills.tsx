import { useState } from "react";
import { 
  Code, Database, BarChart3, Brain, FileSpreadsheet, 
  Snowflake, Star, Table
} from "lucide-react";

const skillFilters = [
  { id: "all", label: "All Skills", icon: Star, color: "primary" },
  { id: "python", label: "Python", icon: Code, color: "python" },
  { id: "r", label: "R Language", icon: Table, color: "r" },
  { id: "excel", label: "Excel", icon: FileSpreadsheet, color: "excel" },
  { id: "powerbi", label: "Power BI", icon: BarChart3, color: "powerbi" },
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

interface SkillsProps {
  activeSkill: string;
  setActiveSkill: (skill: string) => void;
}

const Skills = ({ activeSkill, setActiveSkill }: SkillsProps) => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--primary)/0.05)_0%,transparent_50%)]" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-3">Filter by Skill</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Click on a skill to filter projects. Each skill represents my expertise 
            in data science and analytics workflows.
          </p>
        </div>

        {/* Skill Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {skillFilters.map((skill) => {
            const colors = skillColors[skill.color];
            const isActive = activeSkill === skill.id;
            
            return (
              <button
                key={skill.id}
                onClick={() => setActiveSkill(skill.id)}
                className={`
                  group relative px-4 py-3 md:px-6 md:py-3 rounded-xl font-medium text-sm md:text-base
                  flex items-center gap-2 md:gap-3 transition-all duration-300
                  border-2 ${colors.border}
                  ${isActive 
                    ? `${colors.bg} text-background shadow-lg scale-105` 
                    : `bg-secondary/50 ${colors.text} hover:bg-secondary hover:scale-102`
                  }
                `}
                aria-pressed={isActive}
              >
                <skill.icon className="w-4 h-4 md:w-5 md:h-5" />
                <span>{skill.label}</span>
                {isActive && (
                  <span className="absolute -top-1 -right-1 w-3 h-3 bg-background rounded-full border-2 border-current animate-pulse" />
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Summary Cards */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Programming", items: ["Python", "R", "SQL", "DAX"], icon: Code },
            { label: "Visualization", items: ["Power BI", "Matplotlib", "Seaborn"], icon: BarChart3 },
            { label: "ML & AI", items: ["Scikit-learn", "TensorFlow", "XGBoost"], icon: Brain },
            { label: "Data Tools", items: ["Excel", "Google Sheets", "SnowFlake"], icon: Database },
          ].map((category, index) => (
            <div
              key={category.label}
              className="p-4 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <category.icon className="w-4 h-4 text-primary" />
                <h3 className="font-semibold text-sm">{category.label}</h3>
              </div>
              <div className="flex flex-wrap gap-1">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
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
