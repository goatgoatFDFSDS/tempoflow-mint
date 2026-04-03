import TemporisHeader from "@/components/TemporisHeader";
import MintCard from "@/components/MintCard";
import CollectionMetrics from "@/components/CollectionMetrics";
import HourglassAnimation from "@/components/HourglassAnimation";
import TerminalPanel from "@/components/TerminalPanel";
import NetworkInfo from "@/components/NetworkInfo";

const Index = () => {
  return (
    <div className="min-h-screen bg-background grid-bg scanline relative">
      <TemporisHeader />

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Top section: Mint + Hourglass + Metrics */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-1">
            <MintCard />
          </div>
          <div className="lg:col-span-1 flex items-center justify-center">
            <HourglassAnimation />
          </div>
          <div className="lg:col-span-1">
            <CollectionMetrics />
          </div>
        </div>

        {/* Bottom section: Terminal + Network Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <TerminalPanel />
          <NetworkInfo />
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-border/20">
        <p className="text-xs text-muted-foreground font-display tracking-widest">
          Powered by Tempo
        </p>
        <p className="text-[10px] text-muted-foreground/50 mt-1 font-pixel">
          time is being minted
        </p>
      </footer>
    </div>
  );
};

export default Index;
