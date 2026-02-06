import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-16 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--primary)/0.08)_0%,transparent_60%)]" />
      
      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-mono text-sm mb-3">Let's Connect</p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm always open to discussing data science opportunities, collaborations, 
            or just a friendly conversation about analytics and ML.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {/* Email */}
            <a
              href="mailto:rahmanmuslehur0@gmail.com"
              className="group p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <p className="font-medium text-sm group-hover:text-primary transition-colors">
                    rahmanmuslehur0@gmail.com
                  </p>
                </div>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+8801760928867"
              className="group p-6 rounded-xl bg-gradient-card border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Phone</p>
                  <p className="font-medium text-sm group-hover:text-primary transition-colors">
                    +880-1760-928867
                  </p>
                </div>
              </div>
            </a>
          </div>

          {/* Location */}
          <div className="p-6 rounded-xl bg-gradient-card border border-border/50 mb-12">
            <div className="flex items-center gap-4 justify-center">
              <div className="p-3 rounded-lg bg-primary/10 text-primary">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="font-medium">Pabna, Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mb-12">
            <Button variant="glow" size="lg" asChild>
              <a href="https://github.com/Musleh-Ur" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
                GitHub
              </a>
            </Button>
            <Button variant="glow" size="lg" asChild>
              <a href="https://www.linkedin.com/in/musleh-urrahman" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
            </Button>
            <Button variant="glow" size="lg" asChild>
              <a href="https://wa.me/8801760928867" target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Marketplace */}
          <div className="text-center mb-6">
            <p className="text-sm font-mono text-primary mb-1">Marketplace</p>
            <p className="text-muted-foreground text-sm">Hire me on your preferred platform</p>
          </div>
          <div className="flex justify-center gap-4">
            <a
              href="https://www.fiverr.com/muslehurrahman?public_mode=true"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-card border border-border/50 hover:border-[#1dbf73]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(29,191,115,0.15)]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M21.645 8.379h-3.27c0-2.088-1.695-3.783-3.783-3.783a3.79 3.79 0 0 0-3.783 3.783H7.526v2.721h1.392v8.9h2.721v-8.9h2.721v8.9h2.721v-8.9h1.843V8.379h-1.06v-.001zm-7.053 0a1.06 1.06 0 0 1 2.121 0h-2.121zM4.355 11.1h-.739v8.9H6.337v-8.9h-.739a1.243 1.243 0 0 1-1.243 0zM4.976 7.317a1.582 1.582 0 1 0 0 3.165 1.582 1.582 0 0 0 0-3.165z" fill="#1DBF73"/>
              </svg>
              <span className="font-medium text-sm text-muted-foreground group-hover:text-foreground transition-colors">Fiverr</span>
            </a>
            <a
              href="https://www.upwork.com/freelancers/~0115331acc900d5fc4?mp_source=share"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-card border border-border/50 hover:border-[#14a800]/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(20,168,0,0.15)]"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.214-1.832-2.148-4.032-2.687-5.886H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.548-1.405-.002-2.543-1.143-2.545-2.548V3.498H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.445-5.439-5.445z" fill="#14A800"/>
              </svg>
              <span className="font-medium text-sm text-muted-foreground group-hover:text-foreground transition-colors">Upwork</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
