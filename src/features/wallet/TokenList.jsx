import { useState, useEffect } from 'react';
import { DollarSign } from 'lucide-react';
import { useWalletStore } from '../../store/useWalletStore';
import { getBalance } from '../../wallet/chains/solana';
import { PublicKey } from '@solana/web3.js';

const TokenList = () => {
  const [solBalance, setSolBalance] = useState(null);
  const [solPrice, setSolPrice] = useState(null);

  const activePublicKey = useWalletStore((state) => state.activePublicKey);
  const network = useWalletStore((state) => state.network) || 'mainnet';

  useEffect(() => {
    const fetchBalance = async () => {
      if (!activePublicKey) return;
      try {
        const net = network === 'mainnet' ? 'mainnet-beta' : network;
        const bal = await getBalance({ net, address: new PublicKey(activePublicKey) });
        setSolBalance(bal);
      } catch (err) {
        console.error('Failed to fetch balance', err);
        setSolBalance(0);
      }
    };
    fetchBalance();
  }, [activePublicKey, network]);

  const isMainnet = network === 'mainnet';
  useEffect(() => {
    if (!isMainnet) { setSolPrice(null); return; }
    const fetchPrice = async () => {
      try {
        const res = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=solana&vs_currencies=usd');
        const data = await res.json();
        setSolPrice(data.solana.usd);
      } catch (err) {
        console.error('Failed to fetch SOL price', err);
      }
    };
    fetchPrice();
  }, [isMainnet]);

  const solUsd = isMainnet && solBalance !== null && solPrice
    ? (solBalance * solPrice).toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    : '$0.00';
  const displaySol = solBalance !== null ? `${solBalance.toFixed(4)} SOL` : '— SOL';

  const tokens = [
    {
      name: 'Solana',
      symbol: 'SOL',
      balance: displaySol,
      usd: solUsd,
      usdColor: 'text-[#14F195]',
      icon: (
        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black flex items-center justify-center border border-white/10 shadow-lg shrink-0">
          <div className="w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-[#9945FF] to-[#14F195]" />
        </div>
      ),
    },
    {
      name: 'USD Coin',
      symbol: 'USDC',
      balance: '0.00 USDC',
      usd: '$0.00',
      usdColor: 'text-[#8FA396]',
      icon: (
        <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-[#2775CA] flex items-center justify-center border border-white/10 shadow-lg shrink-0">
          <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        </div>
      ),
    },
  ];

  return (
    <div className="bg-[#0C120F] rounded-2xl border border-white/5 overflow-hidden animate-fade-in-up delay-2">
      <div className="px-3 sm:px-4 py-2 sm:py-3 sm:p-5 border-b border-white/5 flex justify-between items-center">
        <h3 className="text-xs sm:text-base font-bold text-white">Active Tokens</h3>
        <span className="text-[9px] font-bold text-[#8FA396] uppercase tracking-widest">{tokens.length} assets</span>
      </div>
      <div className="p-1 sm:p-3 space-y-0.5">
        {tokens.map((token) => (
          <div
            key={token.symbol}
            className="flex items-center justify-between p-2 sm:p-4 hover:bg-white/[0.03] active:bg-white/[0.06] rounded-xl sm:rounded-2xl transition-colors cursor-pointer"
          >
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              {token.icon}
              <div className="min-w-0">
                <p className="font-bold text-white text-xs sm:text-base">{token.name}</p>
                <p className="text-[9px] sm:text-xs text-[#8FA396] font-mono">{token.symbol}</p>
              </div>
            </div>
            <div className="text-right shrink-0">
              <p className="font-bold text-white text-xs sm:text-base">{token.balance}</p>
              <p className={`text-[9px] sm:text-xs ${token.usdColor} font-bold`}>{token.usd}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TokenList;
