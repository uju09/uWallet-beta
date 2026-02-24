import { Check, ExternalLink } from 'lucide-react';
import { useWalletStore } from '../../store/useWalletStore';

const TransactionSuccess = ({ amount, toAddress, signature, onExplorer, onClose }) => {

  const net = useWalletStore((state) => state.network)

  const explorerUrl = signature
    ? net === "devnet"
      ? `https://explorer.solana.com/tx/${signature}?cluster=devnet`
      : net === "testnet"
        ? `https://explorer.solana.com/tx/${signature}?cluster=testnet`
        : `https://explorer.solana.com/tx/${signature}`
    : "#";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div className="bg-[#142018] w-full max-w-md lg:max-w-lg rounded-[32px] p-6 lg:p-8 border border-[#14F195]/20 shadow-[0_20px_60px_rgba(20,241,149,0.05)] relative overflow-hidden z-10 animate-in fade-in zoom-in duration-200">

        {/* Background Glow */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#14F195] opacity-10 blur-[80px] rounded-full pointer-events-none" />

        <div className="pt-8 pb-4 flex flex-col items-center relative z-10">

          {/* Success Icon */}
          <div className="w-20 h-20 lg:w-24 lg:h-24 bg-[#14F195]/10 border border-[#14F195]/30 rounded-full flex items-center justify-center mb-6 relative">
            <div className="absolute inset-0 rounded-full border border-[#14F195]/50 animate-ping opacity-20" />
            <Check className="w-10 h-10 lg:w-12 lg:h-12 text-[#14F195]" />
          </div>

          <h3 className="text-2xl lg:text-3xl font-black text-white mb-2">Transfer Complete</h3>
          <p className="text-sm lg:text-base text-[#8FA396] text-center mb-8 px-4">
            Your assets have been successfully sent and confirmed.
          </p>

          {/* Transaction Summary */}
          <div className="w-full bg-[#0C120F] rounded-[24px] p-5 lg:p-6 border border-white/5 space-y-4 mb-8">
            <div className="flex justify-between items-center pb-4 border-b border-white/5">
              <span className="text-[10px] uppercase font-bold text-[#8FA396] tracking-widest">Amount Sent</span>
              <span className="text-lg lg:text-xl font-black text-white">{amount || '0'} SOL</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-[10px] uppercase font-bold text-[#8FA396] tracking-widest">To</span>
              <div className="flex items-center gap-1.5">
                <div className="w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full" />
                <span className="text-xs font-mono text-white">{toAddress || '—'}</span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="w-full space-y-3">
            <a
              href={explorerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-[#1A2920] border border-white/5 hover:bg-[#253d2c] text-white font-bold py-3.5 lg:py-4 rounded-2xl transition-all text-xs uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" /> View on Explorer
            </a>
            <button
              onClick={onClose}
              className="w-full bg-[#D4FF00] hover:bg-[#bce600] text-black font-extrabold py-4 rounded-2xl shadow-lg shadow-[#D4FF00]/10 transition-all text-xs uppercase tracking-widest"
            >
              Back to Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionSuccess;
