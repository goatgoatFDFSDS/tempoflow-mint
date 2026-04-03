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
