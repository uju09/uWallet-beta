import { Zap } from 'lucide-react';

const TransactionProcessing = () => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div className="bg-[#142018] w-full max-w-sm lg:max-w-md rounded-[32px] p-8 border border-white/5 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center min-h-[400px] z-10">

        {/* Glowing animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#9945FF]/10 to-[#14F195]/10 animate-pulse" />

        <div className="relative z-10 flex flex-col items-center">

          {/* Animated Loader Ring - Exact match to architect.html */}
          <div className="relative w-28 h-28 flex items-center justify-center mb-8 animate-pulse-ring">
            <svg className="w-full h-full absolute inset-0 -rotate-90 overflow-visible" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="46" fill="transparent" stroke="#1A2920" strokeWidth="8" />
              {/* SVG dasharray creates the partial loading circle */}
              <circle
                cx="50" cy="50" r="46"
                fill="transparent"
                stroke="url(#sol-loader-grad)"
                strokeWidth="8"
                strokeDasharray="289"
                strokeDashoffset="100"
                strokeLinecap="round"
                className="animate-[spin_2s_linear_infinite] origin-[50px_50px]"
              />
              <defs>
                <linearGradient id="sol-loader-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#9945FF" />
                  <stop offset="100%" stopColor="#14F195" />
                </linearGradient>
              </defs>
            </svg>

            {/* Central Icon */}
            <div className="w-14 h-14 bg-[#0C120F] rounded-full border border-white/10 flex items-center justify-center shadow-[0_0_30px_rgba(20,241,149,0.2)]">
              <Zap className="w-6 h-6 text-[#14F195] fill-[#14F195]/20 animate-pulse" />
            </div>
          </div>

          <h3 className="text-2xl font-black text-white tracking-tight mb-2">Processing</h3>
          <p className="text-sm font-medium text-[#8FA396] mb-6 text-center px-4">
            Confirming transaction on the Solana network...
          </p>

          <div className="bg-[#0C120F] border border-white/5 rounded-full px-4 py-2 flex items-center gap-2">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14F195] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#14F195]" />
            </span>
            <span className="text-[10px] font-mono font-bold text-[#14F195] uppercase tracking-widest">Est. ~ 2s</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TransactionProcessing;
