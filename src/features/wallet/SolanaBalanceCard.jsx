import React from 'react';
import { useWalletStore } from '../../store/useWalletStore';
import { useSolPrice } from '../../hooks/useWallet';

const SolanaBalanceCard = ({ balance, solPrice }) => {
  const network = useWalletStore((state) => state.network) || 'mainnet';
  const isMainnet = network === 'mainnet';
  const { priceChange } = useSolPrice();

  const usdValue = isMainnet && balance !== null && solPrice ? (balance * solPrice).toLocaleString('en-US', { style: 'currency', currency: 'USD' }) : '$0.00';
  const displayBalance = balance !== null ? balance.toFixed(9).replace(/0+$/, '0') : '—';
  const changeText = isMainnet && priceChange !== null ? `${priceChange >= 0 ? '+' : ''}${priceChange.toFixed(1)}%` : null;
  const isPositive = priceChange !== null && priceChange >= 0;

  return (
    <div className="relative group cursor-pointer w-full rounded-[20px] sm:rounded-[24px] overflow-hidden p-[2px] animate-scale-in max-w-[400px]">
      {/* Running Border Animation */}
      <div className="absolute inset-[-400%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_0deg_at_50%_50%,#9945FF_0%,#14F195_50%,#9945FF_100%)]" />

      {/* Content */}
      <div className="relative bg-[#0C140F] rounded-[18px] sm:rounded-[22px] p-3.5 sm:p-4 flex items-center justify-between h-full">
        <div className="flex items-center gap-3 sm:gap-4 min-w-0">
          {/* Sol Icon */}
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 shrink-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#9945FF] to-[#14F195] rounded-full animate-pulse opacity-20" />
            <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#9945FF] to-[#14F195] flex items-center justify-center shadow-lg border-2 border-[#0C140F]">
              <svg width="18" height="14" viewBox="0 0 398 312" className="sm:w-[22px] sm:h-[17px]" xmlns="http://www.w3.org/2000/svg">
                <path d="M64.6 237.9c2.4-2.4 5.7-3.8 9.2-3.8h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1l62.7-62.7z" fill="white" />
                <path d="M64.6 3.8C67.1 1.4 70.4 0 73.8 0h317.4c5.8 0 8.7 7 4.6 11.1l-62.7 62.7c-2.4 2.4-5.7 3.8-9.2 3.8H6.5c-5.8 0-8.7-7-4.6-11.1L64.6 3.8z" fill="white" />
                <path d="M333.1 120.1c-2.4-2.4-5.7-3.8-9.2-3.8H6.5c-5.8 0-8.7 7-4.6 11.1l62.7 62.7c2.4 2.4 5.7 3.8 9.2 3.8h317.4c5.8 0 8.7-7 4.6-11.1l-62.7-62.7z" fill="white" />
              </svg>
            </div>
          </div>

          <div className="min-w-0">
            <h3 className="text-base sm:text-lg font-bold text-white leading-tight">Solana</h3>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-[10px] sm:text-xs font-bold text-[#8FA396]">SOL</span>
              {changeText && (
                <div className={`px-1.5 py-0.5 rounded-md flex items-center gap-1 ${isPositive ? 'bg-[#D4FF00]/10' : 'bg-red-500/10'}`}>
                  <span className={`text-[9px] sm:text-[10px] font-bold ${isPositive ? 'text-[#D4FF00]' : 'text-red-400'}`}>{changeText}</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="text-right shrink-0 pl-2">
          <p className="text-lg sm:text-2xl font-bold text-white tracking-tight">{displayBalance}</p>
          {usdValue && <p className="text-xs sm:text-sm font-medium text-[#8FA396]">{usdValue}</p>}
        </div>
      </div>
    </div>
  );
};

export default SolanaBalanceCard;
