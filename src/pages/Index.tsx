import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  const [activeSkill, setActiveSkill] = useState("all");

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Skills activeSkill={activeSkill} setActiveSkill={setActiveSkill} />
        <Projects activeSkill={activeSkill} />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
