import { Badge } from "./ui/badge";
import { CheckCircle2, GitBranch, Database, Cpu, Cloud } from "lucide-react";
import { TerminalBlock, CodeLine } from "./TerminalBlock";

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

const timeline: TimelineItem[] = [
  {
    year: "2025",
    title: "Data Scientist (Contract)",
    company: "Whiteshield",
    description: "Co-developed AI Advisor using RAG architecture, engineered geospatial data pipelines, and optimized cloud-based TIFF processing workflows"
  },
  {
    year: "2023 - Present",
    title: "Data Scientist & ML Engineer",
    company: "Freelance & Project-Based",
    description: "Designed AI workflows with FastAPI, LangChain, and Pinecone. Built ML systems for fraud detection, healthcare, finance, and NLP with measurable impact"
  },
  {
    year: "2023 - Present",
    title: "Program Mentor, Data Programs",
    company: "ALX",
    description: "Mentoring learners in Data Science and Analytics, guiding end-to-end project development from data cleaning to model deployment"
  }
];

const techStack = {
  mlops: [
    "FastAPI", "MLflow", "Docker", "Airflow", "CI/CD (GitHub Actions)",
    "Poetry", "Pytest", "AWS (EC2, S3)", "GCP (BigQuery)"
  ],
  dataEngineering: [
    "PostgreSQL", "MySQL", "ETL Pipelines", "SQL", "API Integration",
    "Streaming Data", "ChromaDB", "Pinecone", "Geospatial (SHP/TIFF)"
  ],
  aiFrameworks: [
    "Scikit-learn", "OpenAI", "LangChain", "Groq Llama", "Ollama", "Gemini API",
    "RAG Systems", "NLP", "Computer Vision", "Time-Series Forecasting"
  ],
  programmingTools: [
    "Python", "Bash", "Git", "Linux/WSL", "Power BI", "Matplotlib",
    "Seaborn", "Pandas", "NumPy", "Feature Engineering"
  ]
};

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm text-primary">About</span>
          </div>
          <h2 className="mb-4">Journey & Expertise</h2>
          <p className="max-w-2xl text-muted-foreground">
            Data Scientist & AI/ML Engineer experienced in end-to-end model development, deployment, and monitoring. 
            Skilled in designing robust machine learning systems with FastAPI, Docker, MLflow, and CI/CD pipelines. 
            Passionate about using AI for real-world impact, from predictive analytics to workflow automation.
          </p>
        </div>

        {/* Professional Timeline */}
        <div className="mb-16">
          <h3 className="mb-8 flex items-center gap-2">
            <GitBranch className="w-5 h-5 text-primary" />
            Professional Timeline
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:pl-12'}`}>
                    <div className="inline-block bg-card border border-border rounded-lg p-6 hover:border-primary/30 transition-colors">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary mb-3">
                        <span className="text-xs">{item.year}</span>
                      </div>
                      <h4 className="mb-1">{item.title}</h4>
                      <p className="text-sm text-primary mb-2">{item.company}</p>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  
                  {/* Center dot */}
                  <div className="absolute left-0 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2"></div>
                  
                  {/* Spacer */}
                  <div className="flex-1 hidden md:block"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Stack */}
        <div className="mb-16">
          <h3 className="mb-8 flex items-center gap-2">
            <Cpu className="w-5 h-5 text-primary" />
            Technical Stack
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Cloud className="w-5 h-5 text-primary" />
                <h4>MLOps & Infrastructure</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.mlops.map((tech, index) => (
                  <Badge key={index} variant="outline" className="border-primary/20 hover:border-primary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Database className="w-5 h-5 text-primary" />
                <h4>Data Engineering</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.dataEngineering.map((tech, index) => (
                  <Badge key={index} variant="outline" className="border-primary/20 hover:border-primary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                <h4>AI/ML Frameworks</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.aiFrameworks.map((tech, index) => (
                  <Badge key={index} variant="outline" className="border-primary/20 hover:border-primary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center gap-2 mb-4">
                <Cpu className="w-5 h-5 text-primary" />
                <h4>Programming & Tools</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {techStack.programmingTools.map((tech, index) => (
                  <Badge key={index} variant="outline" className="border-primary/20 hover:border-primary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Code Example */}
        <div>
          <h3 className="mb-6">Development Workflow</h3>
          <TerminalBlock title="rag-pipeline.py" variant="darker">
            <CodeLine># RAG-based AI system deployment</CodeLine>
            <CodeLine>uvicorn main:app --host 0.0.0.0 --port 8000</CodeLine>
            <CodeLine output>INFO: Started server process [1]</CodeLine>
            <CodeLine output>INFO: Waiting for application startup...</CodeLine>
            <CodeLine></CodeLine>
            <CodeLine># Run embedding pipeline tests</CodeLine>
            <CodeLine>pytest tests/test_embeddings.py -v</CodeLine>
            <CodeLine output>test_vector_similarity ... PASSED</CodeLine>
            <CodeLine output>✓ All tests passed | Coverage: 94%</CodeLine>
          </TerminalBlock>
        </div>

        {/* Education & Certifications */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="mb-6">Education</h3>
            <div className="space-y-4">
              <div className="bg-card border border-border rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="mb-1">M.Sc. Financial Engineering</h4>
                    <p className="text-sm text-muted-foreground">WorldQuant University, Louisiana, US</p>
                    <p className="text-xs text-primary mt-1">In Progress</p>
                  </div>
                </div>
              </div>
              <div className="bg-card border border-border rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="mb-1">B.Sc. Computer Science</h4>
                    <p className="text-sm text-muted-foreground">Dominican University, Ibadan, Nigeria</p>
                    <p className="text-xs text-muted-foreground mt-1">2023 - 2024</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="mb-6">Certifications</h3>
            <div className="bg-card border border-border rounded-lg p-5">
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span className="text-muted-foreground">DataCamp – Data Analyst Certification</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span className="text-muted-foreground">WorldQuant – Applied AI Lab, Financial Engineering</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span className="text-muted-foreground">ALX Africa – Data Science, AI Augmented Professional Development</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span className="text-muted-foreground">Microsoft & LinkedIn – Career Essentials in Business & Data Analysis</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span className="text-muted-foreground">Google – Data Analytics (Coursera)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">→</span>
                  <span className="text-muted-foreground">Hamoye – Machine Learning: Classification</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
