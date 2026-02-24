import { ArrowLeft, Wallet, ArrowDownRight, ShieldAlert, CheckCheck } from 'lucide-react';

const truncateAddress = (addr) => {
  if (!addr) return '—';
  if (addr.length <= 12) return addr;
  return `${addr.slice(0, 6)}...${addr.slice(-6)}`;
};

const TransactionPreview = ({ amount, usdValue, fromAddress, toAddress, network, fee, onSign, onBack }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-[#050e08]/90 backdrop-blur-sm" onClick={onBack} />
      <div className="bg-[#142018] w-full max-w-md lg:max-w-lg rounded-[32px] p-6 lg:p-8 border border-white/5 shadow-2xl relative overflow-hidden z-10 animate-in fade-in zoom-in duration-200">

        {/* Decorative glows */}
        <div className="absolute -top-20 -left-20 w-48 h-48 bg-[#9945FF] opacity-[0.05] blur-[60px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-[#14F195] opacity-[0.05] blur-[60px] rounded-full pointer-events-none" />

        {/* Header */}
        <div className="flex items-center gap-3 mb-6 relative z-10">
          <button
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-[#1A2920] border border-white/5 flex items-center justify-center text-[#8FA396] hover:text-white transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h3 className="text-lg font-bold text-white">Review Order</h3>
        </div>

        {/* Amount Display */}
        <div className="text-center py-6 lg:py-8 relative z-10">
          <p className="text-[10px] text-[#8FA396] uppercase tracking-widest font-bold mb-2">Sending</p>
          <div className="flex items-center justify-center gap-2 mb-1">
            <h2 className="text-5xl lg:text-6xl font-black text-white tracking-tighter">{amount}</h2>
            <span className="text-2xl font-bold text-[#8FA396]">SOL</span>
          </div>
          <p className="text-sm font-medium text-[#8FA396]">≈ ${usdValue} USD</p>
        </div>

        {/* Details Card */}
        <div className="bg-[#0C120F] rounded-[24px] p-5 lg:p-6 border border-white/5 space-y-5 relative z-10 mb-6">
          <div className="relative pl-8">
            <div className="absolute left-3.5 top-5 bottom-5 w-0.5 bg-white/5 border-l border-dashed border-[#8FA396]/30" />

            {/* From */}
            <div className="relative mb-6">
              <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-[#1A2920] border border-white/10 flex items-center justify-center">
                <Wallet className="w-3 h-3 text-[#D4FF00]" />
              </div>
              <p className="text-[10px] font-bold text-[#8FA396] uppercase tracking-widest mb-1">From (My Wallet)</p>
              <p className="text-sm font-mono text-white truncate max-w-[280px]" title={fromAddress}>{truncateAddress(fromAddress)}</p>
            </div>

            {/* To */}
            <div className="relative">
              <div className="absolute -left-8 top-1 w-6 h-6 rounded-full bg-[#1A2920] border border-white/10 flex items-center justify-center">
                <ArrowDownRight className="w-3 h-3 text-[#14F195]" />
              </div>
              <p className="text-[10px] font-bold text-[#8FA396] uppercase tracking-widest mb-1">To (Recipient)</p>
              <div className="flex items-center gap-2">
                <p className="text-sm font-mono text-white truncate max-w-[280px]" title={toAddress}>{truncateAddress(toAddress)}</p>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-white/5" />

          {/* Network Info */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#8FA396] font-medium">Network</span>
              <div className="flex items-center gap-1.5 px-2 py-1 bg-[#142018] rounded-md border border-[#14F195]/20">
                <div className="w-3 h-3 rounded-full bg-gradient-to-br from-[#9945FF] to-[#14F195]" />
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">{network || 'Solana'}</span>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-xs text-[#8FA396] font-medium">Network Fee</span>
              <span className="text-xs font-mono text-white">~{fee || '0.000005'} SOL <span className="text-[#8FA396] font-sans text-[10px]">($0.001)</span></span>
            </div>
          </div>
        </div>

        {/* Security Warning */}
        <div className="flex items-start gap-3 bg-[#1A2920]/50 p-4 rounded-2xl border border-white/5 mb-6 relative z-10">
          <ShieldAlert className="w-5 h-5 text-[#D4FF00] shrink-0 mt-0.5" />
          <p className="text-[10px] text-[#8FA396] leading-relaxed">
            Please verify the destination address carefully. Transactions on the Solana blockchain are permanent and cannot be reversed.
          </p>
        </div>

        {/* Action Button */}
        <button
          onClick={onSign}
          className="w-full bg-[#D4FF00] hover:bg-[#bce600] text-black font-extrabold py-4 rounded-2xl shadow-lg shadow-[#D4FF00]/10 transition-all flex items-center justify-center gap-2 group relative z-10"
        >
          <CheckCheck className="w-5 h-5" />
          Sign Transaction
        </button>
      </div>
    </div>
  );
};

export default TransactionPreview;
