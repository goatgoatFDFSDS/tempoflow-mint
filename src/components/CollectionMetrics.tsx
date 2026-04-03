const TOTAL_SUPPLY = 50_000_000;
const MINTED = 0;

const CollectionMetrics = () => {
  const remaining = TOTAL_SUPPLY - MINTED;
  const progress = (MINTED / TOTAL_SUPPLY) * 100;
  const segments = 20;
  const filledSegments = Math.floor((progress / 100) * segments);

  return (
    <div className="border border-border neon-border bg-card/50 p-6 backdrop-blur-sm">
      <h2 className="font-display text-lg tracking-wider text-foreground neon-text mb-5">
        {">"} COLLECTION METRICS
      </h2>

      <div className="space-y-3 text-sm">
        {[
          ["Total Supply", TOTAL_SUPPLY.toLocaleString()],
          ["Minted", MINTED.toLocaleString()],
          ["Remaining", remaining.toLocaleString()],
          ["Price", "10 pathUSD"],
          
        ].map(([label, value]) => (
          <div key={label} className="flex justify-between">
            <span className="text-muted-foreground">{label}</span>
            <span className="text-foreground font-display">{value}</span>
          </div>
        ))}
      </div>

      <div className="mt-5">
        <div className="flex justify-between text-[10px] font-pixel text-muted-foreground mb-2">
          <span>PROGRESS</span>
          <span>{progress.toFixed(1)}%</span>
        </div>
        <div className="flex gap-[2px]">
          {Array.from({ length: segments }).map((_, i) => (
            <div
              key={i}
              className={`h-3 flex-1 ${
                i < filledSegments
                  ? "bg-primary neon-glow"
                  : "bg-secondary"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CollectionMetrics;
