import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { AnimatedSection } from "@/hooks/useScrollAnimation";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="section-container">
        <AnimatedSection animation="fade-up">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & Copyright */}
            <div className="text-center md:text-left">
              <p className="text-xl font-bold mb-2">
                <span className="text-gradient">Musleh-Ur Rahman</span>
              </p>
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Musleh-Ur"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/musleh-ur-rahman-a4b9b525a"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.linkedin.com/in/musleh-ur-rahman-a4b9b525a", "_blank", "noopener,noreferrer");
                }}
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:rahmanmuslehur0@gmail.com"
                aria-label="Email"
                className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary hover:scale-110 active:scale-95 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>

            {/* Made with love */}
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              Made with <Heart className="w-4 h-4 text-primary fill-primary animate-pulse" /> using React
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
};

export default Footer;
