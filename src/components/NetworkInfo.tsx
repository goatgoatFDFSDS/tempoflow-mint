const INFO = [
  ["Network", "Tempo"],
  ["Protocol", "MPP"],
  ["Asset", "pathUSD"],
  ["Standard", "TIP-20"],
  ["Status", "Live"],
];

const NetworkInfo = () => {
  return (
    <div className="border border-border neon-border bg-card/50 p-5 backdrop-blur-sm">
      <h2 className="font-display text-sm tracking-wider text-foreground neon-text mb-4">
        {">"} NETWORK INFO
      </h2>
      <div className="space-y-3 text-sm">
        {INFO.map(([label, value]) => (
          <div key={label} className="flex justify-between">
            <span className="text-muted-foreground">{label}</span>
            <span className={`font-display ${value === "Live" ? "text-primary neon-text" : "text-foreground"}`}>
              {value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetworkInfo;
