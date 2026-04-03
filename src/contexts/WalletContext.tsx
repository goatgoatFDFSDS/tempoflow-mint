import { createContext, useContext, useState, useCallback, ReactNode } from "react";

const TEMPO_CHAIN = {
  chainId: "0x1079", // 4217 in hex
  chainName: "Tempo Chain",
  nativeCurrency: { name: "USD", symbol: "USD", decimals: 18 },
  rpcUrls: ["https://rpc.tempo.xyz"],
  blockExplorerUrls: [],
};

interface WalletState {
  address: string | null;
  isConnecting: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
}

const WalletContext = createContext<WalletState>({
  address: null,
  isConnecting: false,
  connect: async () => {},
  disconnect: () => {},
});

export const useWallet = () => useContext(WalletContext);

export const WalletProvider = ({ children }: { children: ReactNode }) => {
  const [address, setAddress] = useState<string | null>(null);
  const [isConnecting, setIsConnecting] = useState(false);

  const switchToTempo = useCallback(async () => {
    const { ethereum } = window as any;
    try {
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: TEMPO_CHAIN.chainId }],
      });
    } catch (err: any) {
      if (err.code === 4902) {
        await ethereum.request({
          method: "wallet_addEthereumChain",
          params: [TEMPO_CHAIN],
        });
      } else {
        throw err;
      }
    }
  }, []);

  const connect = useCallback(async () => {
    const { ethereum } = window as any;
    if (!ethereum) {
      window.open("https://metamask.io/download/", "_blank");
      return;
    }
    setIsConnecting(true);
    try {
      await switchToTempo();
      const accounts: string[] = await ethereum.request({
        method: "eth_requestAccounts",
      });
      if (accounts[0]) setAddress(accounts[0]);
    } catch (err) {
      console.error("Wallet connection failed:", err);
    } finally {
      setIsConnecting(false);
    }
  }, [switchToTempo]);

  const disconnect = useCallback(() => setAddress(null), []);

  return (
    <WalletContext.Provider value={{ address, isConnecting, connect, disconnect }}>
      {children}
    </WalletContext.Provider>
  );
};
