import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { TrendingUp, Zap, Shield, Network } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  impact: string;
  icon: React.ReactNode;
  technologies: string[];
  category: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "RAG-Based AI Advisor",
    description: "Co-developed an AI Advisor enabling document-grounded policy insights through a RAG architecture. Optimized embedding pipelines and chatbot logic for context-aware, accurate responses using vector databases.",
    impact: "Delivered context-aware policy recommendations with improved accuracy through optimized RAG implementation",
    icon: <Zap className="w-6 h-6" />,
    technologies: ["OpenAI", "FastAPI", "PostgreSQL", "RAG", "LangChain", "Vector Embeddings"],
    category: "AI/ML"
  },
  {
    id: 2,
    title: "Geospatial Data Pipeline",
    description: "Engineered end-to-end geospatial data pipelines to extract and process SHP and TIFF files for mapping and spatial metrics. Refactored and automated large-scale TIFF processing scripts for cloud integration and database synchronization.",
    impact: "Automated geospatial processing workflows, reducing manual intervention and improving data pipeline reliability",
    icon: <Network className="w-6 h-6" />,
    technologies: ["Python", "SHP/TIFF Processing", "Cloud Integration", "PostgreSQL", "Pytest", "Automation"],
    category: "Data Engineering"
  },
  {
    id: 3,
    title: "The Fineprint Project",
    description: "Delivered measurable impact by automating legal text interpretation using Groq LLMs, Ollama, and Gemini TTS. Built intelligent document analysis system that extracts and summarizes complex legal language.",
    impact: "Automated legal document processing, making complex terms accessible through AI-powered interpretation",
    icon: <Shield className="w-6 h-6" />,
    technologies: ["Groq LLMs", "Ollama", "Gemini TTS", "NLP", "LangChain", "Document Processing"],
    category: "AI/ML"
  },
  {
    id: 4,
    title: "Financial Forecasting & MLOps Pipeline",
    description: "Developed and managed ETL and MLOps pipelines with Airflow and MLflow for financial forecasting and model lifecycle tracking. Applied transfer learning, resampling, and explainability techniques across diverse datasets.",
    impact: "Streamlined model deployment cycle and improved forecasting accuracy through systematic MLOps practices",
    icon: <TrendingUp className="w-6 h-6" />,
    technologies: ["Airflow", "MLflow", "Scikit-learn", "SHAP", "Transfer Learning", "Model Versioning"],
    category: "MLOps"
  },
  {
    id: 5,
    title: "Multi-Domain ML Systems",
    description: "Built and optimized machine learning systems spanning fraud detection, healthcare, finance, and NLP applications. Designed AI workflows integrating FastAPI, LangChain, and Pinecone for real-world automation and analysis tasks.",
    impact: "Delivered production-ready ML solutions across multiple industries with measurable business impact",
    icon: <Zap className="w-6 h-6" />,
    technologies: ["FastAPI", "LangChain", "Pinecone", "Scikit-learn", "XGBoost", "Model Explainability"],
    category: "AI/ML"
  }
];

export function PortfolioSection() {
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

              <div className="flex flex-wrap gap-2">
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
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
