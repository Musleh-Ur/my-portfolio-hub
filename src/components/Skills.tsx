import { Code } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";
import { SKILL_CATEGORIES } from "@/data/skills";

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
            A comprehensive toolkit for end-to-end data science workflows, from data wrangling to
            model deployment.
          </p>
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {SKILL_CATEGORIES.map(({ category, icon: Icon, color, borderColor, items }, index) => (
            <AnimatedSection
              key={category}
              animation="fade-up"
              delay={index * 100}
              className="h-full"
            >
              <div
                className={`group relative p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border/50 ${borderColor} transition-all duration-500 hover:shadow-lg hover:-translate-y-2 active:scale-[0.98] cursor-default h-full flex flex-col`}
              >
                {/* Gradient background on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Shimmer on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />

                <div className="relative z-10">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300 ring-1 ring-primary/20">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base text-foreground">{category}</h3>
                      <p className="text-xs text-muted-foreground">{items.length} technologies</p>
                    </div>
                  </div>

                  {/* Skills list */}
                  <div className="flex flex-wrap gap-2">
                    {items.map((item) => (
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
