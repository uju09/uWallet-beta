import React from 'react';
import NetworkSwitcher from './NetworkSwitcher';
import WalletSelector from './WalletSelector';
import SolanaBalanceCard from './SolanaBalanceCard';
import ActionButtons from '../dashboard/ActionButtons';
import { TokenList } from "./index"
import { useWalletStore } from '../../store/useWalletStore';
import { useBalance, useSolPrice } from '../../hooks/useWallet';
import { AirdropMinimalCard } from '../airdrop';

const BalanceCard = ({ activeNetwork, onNetworkChange, onSend, onReceive, onSwap, onScan }) => {
  const activePublicKey = useWalletStore((state) => state.activePublicKey);
  const network = useWalletStore((state) => state.network) || 'mainnet';
  const isMainnet = network === 'mainnet';

  const balance = useBalance(10000);
  const { solPrice } = useSolPrice();

  let totalUsd = '$0.00';
  if (activePublicKey && isMainnet && balance !== null && solPrice !== null) {
    const usd = balance * solPrice;
    totalUsd = usd.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 min-h-[80vh]">
      {/* Wallet Card */}
      <div className="flex-1 min-w-0 bg-[#0C120F] p-4 pt-5 sm:p-6 md:p-10 rounded-[24px] sm:rounded-[32px] flex justify-center border border-white/5 relative overflow-hidden shadow-2xl">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#142018]/50 via-[#0C120F] to-black opacity-80" />
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#D4FF00] opacity-[0.02] blur-[120px]" />

        <div className="relative z-10">
          {/* Network Switcher */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <NetworkSwitcher activeNetwork={activeNetwork} onNetworkChange={onNetworkChange} />
          </div>

          {/* Balance Section */}
          <div className="text-center sm:text-left mb-12 sm:mb-6 mt-14 sm:mt-15 sm:mb-8 flex flex-col justify-center items-center">
            <p className="text-[10px] sm:text-xs font-bold text-[#8FA396] justify-center uppercase tracking-[0.25em] mb-2">Estimated Balance</p>
            <div className="flex items-baseline justify-center gap-2 animate-fade-in-up">
              <h1 className="text-[60px] sm:text-6xl md:text-7xl font-black text-white tracking-tighter leading-none">{totalUsd}</h1>
              <span className="text-base sm:text-xl font-bold text-[#8FA396]/40">USD</span>
            </div>
          </div>

          {/* Wallet Selector */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <WalletSelector />
          </div>

          <SolanaBalanceCard balance={balance} solPrice={solPrice} />
          <ActionButtons
            onSend={onSend}
            onReceive={onReceive}
            onSwap={onSwap}
            onScan={onScan}
          />
        </div>
      </div>

      {/* Stats/Poster Card */}
      <div className="w-full lg:w-[420px] xl:w-[480px] shrink-0 rounded-[24px] sm:rounded-[32px] border border-white/5 relative overflow-hidden shadow-2xl flex flex-col gap-6">
        {/* Background Effects */}
        <TokenList />

        <AirdropMinimalCard />

      </div>
    </div>
  );
};

export default BalanceCard;
