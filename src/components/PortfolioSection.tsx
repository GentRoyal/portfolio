import * as LucideIcons from "lucide-react"; // Import everything as an object
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import portfolioData from "../data/portfolio-data.json";

interface Project {
  id: number;
  title: string;
  description: string;
  impact: string;
  icon: string;
  technologies: string[];
  category: string;
  url: string;
}

export function PortfolioSection() {
  const projects = portfolioData.projects.map((project) => {
    // Dynamically get the icon component from LucideIcons
    const IconComponent = (LucideIcons as any)[project.icon] || LucideIcons.Zap;

    return {
      ...project,
      icon: <IconComponent className="w-6 h-6" />,
    };
  });

  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm text-primary">Portfolio</span>
          </div>
          <h2 className="mb-4">End-to-End AI Solutions</h2>
          <p className="max-w-2xl text-muted-foreground">
            Production-ready systems that demonstrate the complete ML lifecycle—from data ingestion 
            and model training to deployment, monitoring, and continuous improvement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <Card key={project.id} className="bg-card border-border hover:border-primary/30 transition-all duration-300 p-6 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  {project.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3>{project.title}</h3>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      {project.category}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    {project.description}
                  </p>
                </div>
              </div>

              <div className="mb-4 p-4 rounded-lg bg-muted/50 border-l-4 border-primary">
                <p className="text-sm">
                  <span className="text-primary mr-2">Impact:</span>
                  <span className="text-foreground">{project.impact}</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, index) => (
                  <Badge 
                    key={index} 
                    variant="secondary" 
                    className="bg-secondary/50 hover:bg-secondary text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="mt-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-4 py-2 rounded bg-primary text-white hover:bg-primary/80 transition-colors text-sm"
                >
                  View Project
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
