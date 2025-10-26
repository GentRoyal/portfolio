import { Card } from "./ui/card";
import { Database, Server, GitBranch, Cloud, Activity, Lock } from "lucide-react";

export function ArchitectureSection() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm text-primary">Architecture</span>
          </div>
          <h2 className="mb-4">Production ML System Design</h2>
          <p className="max-w-2xl text-muted-foreground">
            End-to-end architecture demonstrating how data flows from ingestion through 
            model training, deployment, and monitoring in a production environment.
          </p>
        </div>

        {/* Architecture Diagram */}
        <div className="mb-16 bg-card border border-border rounded-lg p-8 overflow-x-auto">
          <div className="min-w-[800px]">
            {/* Data Ingestion Layer */}
            <div className="mb-8">
              <h4 className="mb-4 text-primary">Data Ingestion & Processing Layer</h4>
              <div className="flex items-center gap-4 flex-wrap">
                <ArchitectureNode icon={<Database />} label="Raw Data (SHP/TIFF)" color="cyan" />
                <Arrow />
                <ArchitectureNode icon={<GitBranch />} label="ETL Pipeline" color="cyan" />
                <Arrow />
                <ArchitectureNode icon={<Server />} label="PostgreSQL" color="cyan" />
              </div>
            </div>

            {/* AI/ML Layer */}
            <div className="mb-8">
              <h4 className="mb-4 text-primary">AI & ML Layer</h4>
              <div className="flex items-center gap-4 flex-wrap">
                <ArchitectureNode icon={<Activity />} label="Document Processing" color="green" />
                <Arrow />
                <ArchitectureNode icon={<Database />} label="Vector Embeddings" color="green" />
                <Arrow />
                <ArchitectureNode icon={<Server />} label="RAG System" color="green" />
                <Arrow />
                <ArchitectureNode icon={<GitBranch />} label="LLM (OpenAI/Groq)" color="green" />
              </div>
            </div>

            {/* Deployment Layer */}
            <div>
              <h4 className="mb-4 text-primary">Deployment & Serving Layer</h4>
              <div className="flex items-center gap-4 flex-wrap">
                <ArchitectureNode icon={<Cloud />} label="FastAPI" color="purple" />
                <Arrow />
                <ArchitectureNode icon={<Lock />} label="MLflow Tracking" color="purple" />
                <Arrow />
                <ArchitectureNode icon={<Activity />} label="Cloud Integration" color="purple" />
              </div>
            </div>
          </div>
        </div>

        {/* Key Components */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-card border-border p-6">
            <div className="p-3 rounded-lg bg-primary/10 text-primary inline-flex mb-4">
              <Database className="w-6 h-6" />
            </div>
            <h4 className="mb-2">Data Pipeline</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Engineered geospatial and document processing pipelines with automated workflows and cloud integration.
            </p>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                <span className="text-muted-foreground">Geospatial data (SHP/TIFF) processing</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                <span className="text-muted-foreground">PostgreSQL database synchronization</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                <span className="text-muted-foreground">Automated ETL with Airflow</span>
              </li>
            </ul>
          </Card>

          <Card className="bg-card border-border p-6">
            <div className="p-3 rounded-lg bg-primary/10 text-primary inline-flex mb-4">
              <Server className="w-6 h-6" />
            </div>
            <h4 className="mb-2">RAG & AI Systems</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Building intelligent document processing and context-aware AI systems with vector embeddings and LLMs.
            </p>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                <span className="text-muted-foreground">RAG-based chatbots with OpenAI</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                <span className="text-muted-foreground">LangChain & Pinecone integration</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                <span className="text-muted-foreground">Legal text automation with Groq/Ollama</span>
              </li>
            </ul>
          </Card>

          <Card className="bg-card border-border p-6">
            <div className="p-3 rounded-lg bg-primary/10 text-primary inline-flex mb-4">
              <Cloud className="w-6 h-6" />
            </div>
            <h4 className="mb-2">MLOps & Deployment</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Deploying ML systems with FastAPI, experiment tracking, and comprehensive testing frameworks.
            </p>
            <ul className="text-sm space-y-2">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                <span className="text-muted-foreground">FastAPI production endpoints</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                <span className="text-muted-foreground">MLflow experiment tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">→</span>
                <span className="text-muted-foreground">Pytest-based testing & validation</span>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}

interface ArchitectureNodeProps {
  icon: React.ReactNode;
  label: string;
  color: "cyan" | "green" | "purple";
}

function ArchitectureNode({ icon, label, color }: ArchitectureNodeProps) {
  const colorClasses = {
    cyan: "border-cyan-500/50 bg-cyan-500/10 text-cyan-400",
    green: "border-green-500/50 bg-green-500/10 text-green-400",
    purple: "border-purple-500/50 bg-purple-500/10 text-purple-400"
  };

  return (
    <div className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 ${colorClasses[color]} min-w-[140px]`}>
      <div className="w-8 h-8 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-xs text-center">{label}</span>
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex items-center gap-1 text-primary">
      <div className="w-8 h-px bg-primary"></div>
      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" className="text-primary">
        <path d="M0 4L8 0V8L0 4Z" fill="currentColor" />
      </svg>
    </div>
  );
}
