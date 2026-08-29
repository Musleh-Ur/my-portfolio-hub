import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import ResumeButton from "@/components/ResumeButton";
import profilePhoto from "@/assets/profile-photo.png";
import { openExternalProfile } from "@/lib/externalLinks";
import { PROFILE } from "@/data/profile";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: PROFILE.links.github,
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: PROFILE.links.linkedin,
    icon: Linkedin,
    onClick: openExternalProfile(PROFILE.links.linkedin, "LinkedIn"),
  },
  {
    label: "Email",
    href: `mailto:${PROFILE.email}`,
    icon: Mail,
    external: false,
  },
] as const;

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-slow delay-1000" />
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="section-container relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Profile Photo */}
          <div className="flex flex-col items-center">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-primary rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-primary/30">
                <img
                  src={profilePhoto}
                  alt={PROFILE.name}
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
            </div>

            {/* Social Links - Below Picture */}
            <div
              className="flex gap-5 mt-8 animate-fade-up opacity-0"
              style={{ animationDelay: "0.6s" }}
            >
              {SOCIAL_LINKS.map(({ label, href, icon: Icon, ...rest }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  {...("external" in rest && !rest.external
                    ? {}
                    : { target: "_blank", rel: "noopener noreferrer" })}
                  {...("onClick" in rest ? { onClick: rest.onClick } : {})}
                  className="p-4 rounded-xl bg-secondary hover:bg-secondary/80 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-7 h-7" />
                </a>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="text-center lg:text-left max-w-2xl">
            <p
              className="text-primary font-mono text-sm md:text-base mb-4 animate-fade-up opacity-0"
              style={{ animationDelay: "0.1s" }}
            >
              Hello, I'm
            </p>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-up opacity-0"
              style={{ animationDelay: "0.2s" }}
            >
              Musleh-Ur <span className="text-gradient">Rahman</span>
              <span className="sr-only"> — {PROFILE.title}</span>
            </h1>
            <h2
              className="text-xl md:text-2xl text-muted-foreground font-medium mb-6 animate-fade-up opacity-0"
              style={{ animationDelay: "0.3s" }}
            >
              {PROFILE.title}
            </h2>
            <p
              className="text-muted-foreground text-base md:text-lg leading-relaxed mb-8 text-justify animate-fade-up opacity-0"
              style={{ animationDelay: "0.4s" }}
            >
              Transforming complex data into actionable insights through machine learning,
              statistical modeling, and interactive visualizations. Passionate about driving
              data-driven decision making.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-up opacity-0"
              style={{ animationDelay: "0.5s" }}
            >
              <Button variant="hero" size="lg" asChild>
                <a href="#projects">
                  View Projects
                  <ExternalLink className="w-4 h-4" />
                </a>
              </Button>
              <ResumeButton size="lg" label="Download Resume" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
