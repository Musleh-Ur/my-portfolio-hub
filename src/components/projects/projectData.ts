import { TrendingUp, BarChart, Database, Brain, FileSpreadsheet, Snowflake, Table, Star } from "lucide-react";
import PythonIcon from "@/components/icons/PythonIcon";
import RIcon from "@/components/icons/RIcon";
import bankChurnImage from "@/assets/bank-churn.webp";
import uan32ForecastImage from "@/assets/uan32-forecast.png";

const hospitalityVideo = "/videos/hospitality-dashboard.mp4";
const cocaColaVideo = "/videos/coca-cola-dashboard.mp4";
const revenueInsightsVideo = "/videos/revenue-insights-hospitality.mp4";

export interface Project {
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

export const projects: Project[] = [
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
    id: 9,
    title: "Coca-Cola Product Analytics Dashboard",
    description: "Interactive Power BI dashboard analyzing Coca-Cola's 2022 product performance across brands (Coca-Cola, Dasani, Diet Coke, Fanta, Powerade, Sprite) with KPIs including 16M total units sold, $0.48 price per product, and 8M total sales. Features regional breakdowns, monthly profit trends, and retailer-level filtering.",
    skills: ["powerbi"],
    icon: BarChart,
    highlights: [
      "Multi-brand analysis with month, day, and retailer filters",
      "Regional sales breakdown across West, Northeast, Southeast, South, Midwest",
      "Monthly profit trend tracking with 11% and 14% month-over-month changes",
    ],
    metrics: { "Units Sold": "16M", "Total Sales": "8M" },
    video: cocaColaVideo,
    liveUrl: "https://app.powerbi.com/",
  },
  {
    id: 10,
    title: "Revenue Insights in Hospitality Domain",
    description: "Power BI dashboard delivering revenue insights for the hospitality sector. Built with a KPI framework, advanced DAX measures, calculated columns, interactive slicers, table relationships, and Power Query transformations—enabling intuitive filtering, cross-highlighting, and actionable decision-making.",
    skills: ["powerbi"],
    icon: BarChart,
    highlights: [
      "KPI framework with advanced DAX measures and calculated columns",
      "Interactive slicers, cross-highlighting, and Power Query transformations",
      "Optimized dashboard design for intuitive decision-making",
    ],
    metrics: { "Techniques": "6+", "Insights": "Actionable" },
    video: revenueInsightsVideo,
    liveUrl: "https://app.powerbi.com/",
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

export interface SkillFilter {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
}

export const skillFilters: SkillFilter[] = [
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

export const skillColors: Record<string, { border: string; bg: string; text: string }> = {
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

export const skillIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  python: PythonIcon,
  r: RIcon,
  excel: FileSpreadsheet,
  powerbi: BarChart,
  gsheets: Table,
  ml: Brain,
  sql: Database,
  snowflake: Snowflake,
};

export const skillLabels: Record<string, string> = {
  python: "Python",
  r: "R Language",
  excel: "Excel",
  powerbi: "Power BI",
  gsheets: "Google Sheets",
  ml: "Machine Learning",
  sql: "SQL",
  snowflake: "SnowFlake",
};

export const skillTagColors: Record<string, string> = {
  python: "bg-[#3572A5]/20 text-[#3572A5] border-[#3572A5]/30",
  r: "bg-[#276DC3]/20 text-[#276DC3] border-[#276DC3]/30",
  excel: "bg-[#217346]/20 text-[#217346] border-[#217346]/30",
  powerbi: "bg-[#F2C811]/20 text-[#F2C811] border-[#F2C811]/30",
  gsheets: "bg-[#34A853]/20 text-[#34A853] border-[#34A853]/30",
  ml: "bg-[#FF6F61]/20 text-[#FF6F61] border-[#FF6F61]/30",
  sql: "bg-[#00758F]/20 text-[#00758F] border-[#00758F]/30",
  snowflake: "bg-[#29A3D9]/20 text-[#29A3D9] border-[#29A3D9]/30",
};
