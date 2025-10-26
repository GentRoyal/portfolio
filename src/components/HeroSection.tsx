import { Button } from "./ui/button";
import { ArrowRight, Terminal } from "lucide-react";

export function HeroSection() {
  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Grid background effect */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 mb-8">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="text-sm text-primary">Data Scientist & AI/ML Engineer</span>
        </div>
        
        <h1 className="mb-6 text-primary">
          Ridwan Lanre Yusuf
          <br />
          <span className="text-muted-foreground text-3xl md:text-4xl">Scaling AI Solutions from Prototype to Production</span>
        </h1>
        
        <p className="max-w-2xl mx-auto mb-10 text-muted-foreground">
          Experienced in end-to-end model development, deployment, and monitoring. Designing robust ML systems 
          with FastAPI, Docker, MLflow, and CI/CD pipelines across finance, healthcare, fraud detection, and NLP domains.
        </p>
        
        <div className="flex items-center justify-center gap-4">
          <Button 
            onClick={scrollToPortfolio}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 group"
          >
            View Portfolio
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-primary/30 hover:border-primary hover:bg-primary/5 px-8 py-6"
          >
            Get in Touch
          </Button>
        </div>
        
        {/* Floating tech indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span>FastAPI</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span>LangChain</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span>MLflow</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span>RAG Systems</span>
          </div>
        </div>
      </div>
      
      <style>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, #2a2a2a 1px, transparent 1px),
            linear-gradient(to bottom, #2a2a2a 1px, transparent 1px);
          background-size: 40px 40px;
        }
      `}</style>
    </section>
  );
}
