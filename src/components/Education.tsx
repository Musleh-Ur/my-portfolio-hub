import { GraduationCap, Award, Calendar } from "lucide-react";

const education = [
  {
    degree: "Masters in Applied Statistics and Data Science",
    institution: "Jahangirnagar University",
    coursework: ["Advanced Statistical Modeling", "Data Visualization", "Machine Learning"],
  },
  {
    degree: "B.Sc. (Hons) in Statistics",
    institution: "Khulna University",
    coursework: ["Regression Analysis", "Hypothesis Testing", "Probability Theory"],
  },
];

const certifications = [
  {
    name: "Python for Data Science, AI & Development",
    issuer: "Coursera",
  },
  {
    name: "Data Analytics and Power BI Career Path",
    issuer: "Interactive Cares",
  },
  {
    name: "SQL (Basic) Certification",
    issuer: "HackerRank",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
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
                  className="relative pl-8 before:absolute before:left-0 before:top-3 before:w-3 before:h-3 before:bg-primary before:rounded-full before:shadow-glow after:absolute after:left-1.5 after:top-6 after:w-px after:h-[calc(100%-12px)] after:bg-border last:after:hidden"
                >
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
