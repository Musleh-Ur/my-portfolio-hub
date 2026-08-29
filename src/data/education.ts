import juLogo from "@/assets/ju-logo.png";
import kuLogo from "@/assets/ku-logo.png";

export interface EducationEntry {
  degree: string;
  institution: string;
  logo: string;
  coursework: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  certLink: string;
}

export const EDUCATION: EducationEntry[] = [
  {
    degree: "Masters in Applied Statistics and Data Science",
    institution: "Jahangirnagar University",
    logo: juLogo,
    coursework: ["Advanced Statistical Modeling", "Data Visualization", "Machine Learning"],
  },
  {
    degree: "B.Sc. (Hons) in Statistics",
    institution: "Khulna University",
    logo: kuLogo,
    coursework: ["Regression Analysis", "Hypothesis Testing", "Probability Theory"],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Python for Data Science, AI & Development",
    issuer: "Coursera",
    certLink: "https://www.coursera.org/account/accomplishments/verify/NRMVP944643Q",
  },
  {
    name: "Data Analytics and Power BI Career Path",
    issuer: "Interactive Cares",
    certLink: "https://interactivecares.com/certificate/4b3b5cb6-c44f-4902-aaca-df672488aec5",
  },
  {
    name: "SQL (Basic) Certification",
    issuer: "HackerRank",
    certLink: "https://www.hackerrank.com/certificates/iframe/246059605df4",
  },
];
