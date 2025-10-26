import { Terminal } from "lucide-react";

interface TerminalBlockProps {
  title?: string;
  children: React.ReactNode;
  variant?: "dark" | "darker";
}

export function TerminalBlock({ title = "terminal", children, variant = "dark" }: TerminalBlockProps) {
  return (
    <div className={`rounded-lg overflow-hidden border ${variant === "darker" ? "bg-[#0a0a0a] border-primary/20" : "bg-[#1a1a1a] border-border"}`}>
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#0a0a0a] border-b border-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="flex items-center gap-2 ml-4 text-xs text-muted-foreground">
          <Terminal className="w-3 h-3" />
          <span>{title}</span>
        </div>
      </div>
      
      {/* Terminal content */}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}

interface CodeLineProps {
  prompt?: string;
  children: React.ReactNode;
  output?: boolean;
}

export function CodeLine({ prompt = "$", children, output = false }: CodeLineProps) {
  return (
    <div className="flex gap-3 items-start mb-2 last:mb-0">
      {!output && <span className="text-primary select-none">{prompt}</span>}
      <code className={`flex-1 ${output ? "text-muted-foreground" : "text-foreground"}`}>
        {children}
      </code>
    </div>
  );
}
