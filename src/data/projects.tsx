import type { ComponentType } from "react";
import {
  BarChart, Brain, Database, FileSpreadsheet, Snowflake, Star, Table, TrendingUp,
} from "lucide-react";
import PythonIcon from "@/components/icons/PythonIcon";
import RIcon from "@/components/icons/RIcon";
import bankChurnImage from "@/assets/bank-churn.webp";
import uan32ForecastImage from "@/assets/uan32-forecast.png";
import fraudDetectionImage from "@/assets/fraud-detection.jpg";

const HOSPITALITY_VIDEO = "/videos/hospitality-dashboard.mp4";
const COCA_COLA_VIDEO = "/videos/coca-cola-dashboard.mp4";
const REVENUE_INSIGHTS_VIDEO = "/videos/revenue-insights-hospitality.mp4";

export type IconComponent = ComponentType<{ className?: string }>;

export interface Project {
  id: number;
  title: string;
  skills: string[];
  icon: IconComponent;
  highlights: string[];
  metrics: Record<string, string>;
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  video?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Bank Customer Churn Prediction",
    skills: ["python", "ml"],
    image: bankChurnImage,
    icon: TrendingUp,
    highlights: [
      "ML model predicting at-risk banking customers",
      "Customers aged 45+ were 2.1× more likely to churn",
      "31% churn for €100k+ balances vs 9% for zero",
      "Top features: Age (24%), Balance (19%), Products (17%)",
    ],
    metrics: { "AUC-ROC": "0.872", "PR-AUC": "0.534" },
    liveUrl: "https://github.com/Musleh-Ur/Bank-Customers-Churn-Prediction-using-Machine-Learning",
  },
  {
    id: 8,
    title: "Time Series Forecasting of UAN32 Fertilizer Price",
    skills: ["python", "ml"],
    image: uan32ForecastImage,
    icon: TrendingUp,
    highlights: [
      "SARIMAX model forecasting UAN32 fertilizer prices",
      "Achieved RMSE of 10.33 and MAE of 7.15",
      "Used seasonality, history & commodity drivers",
    ],
    metrics: { RMSE: "10.33", MAE: "7.15" },
    liveUrl: "https://github.com/Musleh-Ur/TimeSeries_Forecast_of_UAN32_NOLA",
  },
  {
    id: 11,
    title: "Transaction Fraud Detection Web App using Machine Learning",
    skills: ["python", "ml"],
    image: fraudDetectionImage,
    icon: Brain,
    highlights: [
      "Real-time fraud prediction Streamlit web app",
      "End-to-end ML pipeline using Logistic Regression",
      "Built with pandas, scikit-learn, numpy & joblib",
      "Deployable for fintech risk & analytics use cases",
    ],
    metrics: { Model: "LogReg", Stack: "Streamlit" },
    liveUrl: "https://github.com/Musleh-Ur/Fraud-Detection-Prediction-App",
  },
  {
    id: 2,
    title: "Hospitality Management Dashboard",
    skills: ["powerbi", "sql", "excel"],
    icon: BarChart,
    highlights: [
      "KPI-driven Power BI dashboard for hospitality",
      "Integrated 5+ data sources with advanced DAX",
      "Improved reporting efficiency by 25%",
      "Custom tooltips & calculated columns for insights",
    ],
    metrics: { Efficiency: "+25%", "Data Sources": "5+" },
    video: HOSPITALITY_VIDEO,
    liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiYWExNTUxMjEtMGZkZS00NTE5LWFkNzYtOGMzMDhiNDM1ZGVhIiwidCI6IjhhNjdhOTE1LTVjYTItNDRiOS1iOGIxLTczZTZlOGIwNzg1MiIsImMiOjEwfQ%3D%3D",
  },
  {
    id: 9,
    title: "Coca-Cola Product Analytics Dashboard",
    skills: ["powerbi"],
    icon: BarChart,
    highlights: [
      "Power BI dashboard analyzing 2022 Coca-Cola sales",
      "Multi-brand view with retailer & date filters",
      "Regional breakdowns across 5 US territories",
      "Tracks monthly profit trends & MoM changes",
    ],
    metrics: { "Units Sold": "16M", "Total Sales": "8M" },
    video: COCA_COLA_VIDEO,
    liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiM2NhZTgwMDAtZWRiMC00YTMwLTlhMDgtODgzNjg2MjVmNzMyIiwidCI6IjhhNjdhOTE1LTVjYTItNDRiOS1iOGIxLTczZTZlOGIwNzg1MiIsImMiOjEwfQ%3D%3D",
  },
  {
    id: 10,
    title: "Revenue Insights in Hospitality Domain",
    skills: ["powerbi"],
    icon: BarChart,
    highlights: [
      "Hospitality revenue insights via Power BI",
      "KPI framework with advanced DAX measures",
      "Interactive slicers & Power Query transformations",
      "Optimized for cross-highlighting & decisions",
    ],
    metrics: { Techniques: "6+", Insights: "Actionable" },
    video: REVENUE_INSIGHTS_VIDEO,
    liveUrl: "https://app.powerbi.com/view?r=eyJrIjoiYzI5MDUwYjItYWQwYy00MzQwLWIyZTQtY2UwYzAzODA0Y2I3IiwidCI6IjhhNjdhOTE1LTVjYTItNDRiOS1iOGIxLTczZTZlOGIwNzg1MiIsImMiOjEwfQ%3D%3D",
  },
];

export interface SkillFilter {
  id: string;
  label: string;
  icon: IconComponent;
  color: string;
}

export const SKILL_FILTERS: SkillFilter[] = [
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

interface SkillColorSet {
  border: string;
  bg: string;
  text: string;
}

export const SKILL_COLORS: Record<string, SkillColorSet> = {
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

export const SKILL_ICONS: Record<string, IconComponent> = {
  python: PythonIcon,
  r: RIcon,
  excel: FileSpreadsheet,
  powerbi: BarChart,
  gsheets: Table,
  ml: Brain,
  sql: Database,
  snowflake: Snowflake,
};

export const SKILL_LABELS: Record<string, string> = Object.fromEntries(
  SKILL_FILTERS.filter((f) => f.id !== "all").map((f) => [f.id, f.label])
);

export const SKILL_TAG_COLORS: Record<string, string> = {
  python: "bg-[#3572A5]/20 text-[#3572A5] border-[#3572A5]/30",
  r: "bg-[#276DC3]/20 text-[#276DC3] border-[#276DC3]/30",
  excel: "bg-[#217346]/20 text-[#217346] border-[#217346]/30",
  powerbi: "bg-[#F2C811]/20 text-[#F2C811] border-[#F2C811]/30",
  gsheets: "bg-[#34A853]/20 text-[#34A853] border-[#34A853]/30",
  ml: "bg-[#FF6F61]/20 text-[#FF6F61] border-[#FF6F61]/30",
  sql: "bg-[#00758F]/20 text-[#00758F] border-[#00758F]/30",
  snowflake: "bg-[#29A3D9]/20 text-[#29A3D9] border-[#29A3D9]/30",
};
