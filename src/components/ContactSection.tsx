import { Card } from "./ui/card";
import { Mail, Linkedin, Github, ExternalLink, Phone } from "lucide-react";
import { Button } from "./ui/button";
import { TerminalBlock, CodeLine } from "./TerminalBlock";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="text-sm text-primary">Contact</span>
          </div>
          <h2 className="mb-4">Let's Build Something Together</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Interested in collaborating on ML infrastructure, data engineering projects, 
            or discussing production AI systems? Let's connect.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="bg-card border-border p-6 hover:border-primary/30 transition-all group">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="mb-2">Email</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Drop me a line for project inquiries
                </p>
                <a 
                  href="mailto:yosufridwan@gmail.com" 
                  className="text-sm text-primary hover:underline flex items-center gap-1"
                >
                  yosufridwan@gmail.com
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </Card>

          <Card className="bg-card border-border p-6 hover:border-primary/30 transition-all group">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="mb-2">Phone</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Let's have a conversation
                </p>
                <a 
                  href="tel:+2349044843031" 
                  className="text-sm text-primary hover:underline flex items-center gap-1"
                >
                  +234-904-484-3031
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </Card>

          <Card className="bg-card border-border p-6 hover:border-primary/30 transition-all group">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="mb-2">LinkedIn</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with me professionally
                </p>
                <a 
                  href="https://www.linkedin.com/in/yusufridwan/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline flex items-center gap-1"
                >
                  linkedin.com/in/yusufr...
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </Card>
        </div>

        <TerminalBlock title="connect.sh" variant="darker">
          <CodeLine># Clone and explore my projects</CodeLine>
          <CodeLine>git clone https://github.com/GentRoyal/repo-name</CodeLine>
          <CodeLine output>Cloning into 'projects'...</CodeLine>
          <CodeLine></CodeLine>
          <CodeLine># Or reach out directly</CodeLine>
          <CodeLine>echo "Let's discuss your ML infrastructure needs"</CodeLine>
          <CodeLine output>→ Available for consulting and collaboration</CodeLine>
        </TerminalBlock>

        <div className="mt-8 text-center">
          <div className="flex items-center justify-center gap-4">
            <Button 
              variant="outline" 
              size="icon"
              className="border-primary/30 hover:border-primary hover:bg-primary/10"
              asChild
            >
              <a href="https://github.com/GentRoyal" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="border-primary/30 hover:border-primary hover:bg-primary/10"
              asChild
            >
              <a href="https://www.linkedin.com/in/yusufridwan/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="icon"
              className="border-primary/30 hover:border-primary hover:bg-primary/10"
              asChild
            >
              <a href="mailto:yosufridwan@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
