import { Terminal } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm">Ridwan Lanre Yusuf</p>
              <p className="text-xs text-muted-foreground">Data Scientist & AI/ML Engineer</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <button 
              onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-primary transition-colors"
            >
              Portfolio
            </button>
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-primary transition-colors"
            >
              Contact
            </button>
          </div>

          <div className="text-xs text-muted-foreground">
            <p>© {currentYear} All rights reserved</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span>System Status: Operational</span>
            </div>
            <span className="mx-2">|</span>
            <span>Built with React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
