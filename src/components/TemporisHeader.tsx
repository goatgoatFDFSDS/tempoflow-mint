const TemporisHeader = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-border/30">
      <div>
        <h1 className="font-display text-2xl font-bold tracking-[0.3em] text-foreground neon-text">
          TEMPORIS
        </h1>
        <p className="text-xs text-muted-foreground tracking-widest mt-1">
          FIRST MPP MINT ON TEMPO
        </p>
      </div>
      <div className="flex items-center gap-4">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:neon-glow transition-all">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        </a>
        <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/50 hover:neon-glow transition-all">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
        </a>
        <div className="flex items-center gap-2 text-sm">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-foreground font-pixel text-[10px]">MINT LIVE</span>
        </div>
        <button className="px-5 py-2 border border-primary/50 text-foreground text-sm font-display tracking-wider hover:bg-primary/10 hover:neon-glow transition-all duration-300 animate-pulse-glow">
          CONNECT WALLET
        </button>
      </div>
    </header>
  );
};

export default TemporisHeader;
