import { useState } from "react";

const MintCard = () => {
  const [quantity, setQuantity] = useState(1);
  const pricePerMint = 10;

  return (
    <div className="border border-border neon-border bg-card/50 p-6 backdrop-blur-sm">
      <h2 className="font-display text-lg tracking-wider text-foreground neon-text mb-1">
        {">"} MINT TEMPORIS
      </h2>
      <p className="text-xs text-muted-foreground mb-6">max 10 per wallet</p>

      <div className="space-y-5">
        <div>
          <span className="text-[10px] font-pixel text-muted-foreground">PRICE PER MINT</span>
          <p className="text-foreground font-display text-xl mt-1">10 <span className="text-sm text-muted-foreground">pathUSD</span></p>
        </div>

        <div>
          <span className="text-[10px] font-pixel text-muted-foreground">QUANTITY</span>
          <div className="flex items-center gap-0 mt-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="w-10 h-10 border border-border bg-secondary text-foreground font-display text-lg hover:bg-primary/20 transition-colors"
            >
              -
            </button>
            <div className="w-16 h-10 border-y border-border bg-background flex items-center justify-center text-foreground font-display text-lg">
              {quantity}
            </div>
            <button
              onClick={() => setQuantity(Math.min(10, quantity + 1))}
              className="w-10 h-10 border border-border bg-secondary text-foreground font-display text-lg hover:bg-primary/20 transition-colors"
            >
              +
            </button>
          </div>
        </div>

        <div className="border-t border-border/30 pt-4">
          <span className="text-[10px] font-pixel text-muted-foreground">TOTAL</span>
          <p className="text-foreground font-display text-2xl mt-1">
            {quantity * pricePerMint} <span className="text-sm text-muted-foreground">pathUSD</span>
          </p>
        </div>

        <button className="w-full py-3 bg-primary text-primary-foreground font-display text-sm tracking-wider neon-glow-strong hover:brightness-110 transition-all duration-300 animate-pulse-glow">
          CONNECT WALLET TO MINT
        </button>
      </div>
    </div>
  );
};

export default MintCard;
