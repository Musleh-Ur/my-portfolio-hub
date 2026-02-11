import { GraduationCap, Award, Calendar, ExternalLink } from "lucide-react";
import juLogo from "@/assets/ju-logo.png";
import kuLogo from "@/assets/ku-logo.png";

const education = [
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

const certifications = [
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

const Education = () => {
  return (
    <section id="education" className="py-16 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--primary)/0.03)_0%,transparent_50%)]" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-3">Academic Background</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & <span className="text-gradient">Certifications</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className="relative pl-20 before:absolute before:left-16 before:top-8 before:w-3 before:h-3 before:bg-primary before:rounded-full before:shadow-glow after:absolute after:left-[4.375rem] after:top-11 after:w-px after:h-[calc(100%-20px)] after:bg-border last:after:hidden"
                >
                  <img 
                    src={edu.logo} 
                    alt={`${edu.institution} logo`}
                    className="absolute left-0 top-0 w-14 h-14 object-contain rounded-lg bg-white/10 p-1"
                  />
                  <h4 className="font-semibold text-lg mb-1">{edu.degree}</h4>
                  <p className="text-primary text-sm mb-3">{edu.institution}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.coursework.map((course) => (
                      <span
                        key={course}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-muted-foreground"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className="p-5 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 group"
                >
                  <h4 className="font-medium mb-2 group-hover:text-primary transition-colors">
                    {cert.name}
                  </h4>
                  <p className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {cert.issuer}
                  </p>
                  <a
                    href={cert.certLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-primary border border-primary/40 rounded-lg hover:bg-primary/10 hover:border-primary hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    View Certificate <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
