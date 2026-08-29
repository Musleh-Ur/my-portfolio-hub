import { BarChart3, Brain, Code, Database, FileSpreadsheet, TrendingUp } from "lucide-react";
import type { IconComponent } from "@/data/projects";

export interface SkillCategory {
  category: string;
  icon: IconComponent;
  color: string;
  borderColor: string;
  items: string[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
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
