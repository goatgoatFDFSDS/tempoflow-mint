import { useEffect, useState } from "react";

const LINES = [
  "system online",
  "temporis stream active",
  "mpp channel initialized",
  "awaiting mint input...",
];

const TerminalPanel = () => {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);

  useEffect(() => {
    LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
      }, 600 * (i + 1));
    });
  }, []);

  return (
    <div className="border border-border neon-border bg-card/50 p-5 backdrop-blur-sm">
      <h2 className="font-display text-sm tracking-wider text-foreground neon-text mb-4">
        {">"} TEMPORIS TERMINAL
      </h2>
      <div className="bg-background/80 border border-border/50 p-4 font-pixel text-[10px] leading-6 text-primary min-h-[120px]">
        {visibleLines.map((line, i) => (
          <div key={i}>
            <span className="text-muted-foreground">{">"} </span>
            {line}
          </div>
        ))}
        <span className="inline-block w-2 h-3 bg-primary animate-blink mt-1" />
      </div>
    </div>
  );
};

export default TerminalPanel;
