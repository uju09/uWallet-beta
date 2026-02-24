import React from 'react';
import { Search, Loader2 } from 'lucide-react';

const AirdropStateLoading = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-[10px] uppercase tracking-widest text-[#8FA396] font-bold border-b border-white/5 pb-2">
        02. Checking Eligibility (Loading)
      </h2>
      <div className="bg-[#142018] rounded-[32px] p-6 border border-[#D4FF00]/20 shadow-[0_0_30px_rgba(212,255,0,0.05)] relative overflow-hidden flex flex-col items-center justify-center h-full min-h-[400px]">

        {/* Animated Radar Scanner */}
        <div className="relative w-40 h-40 flex items-center justify-center mb-8">
          <div className="absolute inset-0 rounded-full border border-[#D4FF00]/20"></div>
          <div className="absolute inset-4 rounded-full border border-[#D4FF00]/10"></div>
          <div className="absolute inset-8 rounded-full border border-[#D4FF00]/5"></div>

          {/* Sweeping Radar */}
          <div className="absolute inset-0 animate-radar opacity-50"></div>

          {/* Center Node */}
          <div className="relative z-10 w-12 h-12 bg-[#1A2920] border-2 border-[#D4FF00] rounded-xl flex items-center justify-center shadow-[0_0_20px_#D4FF00]">
            <Search className="w-5 h-5 text-[#D4FF00]" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-white tracking-tight mb-2">Scanning Wallet</h3>
        <p className="text-xs text-[#8FA396] font-mono mb-6">0x8a72...929b</p>

        <div className="w-full max-w-[200px] space-y-3">
          <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-widest text-[#8FA396]">
            <span className="flex items-center gap-1.5">
              <Loader2 className="w-3 h-3 animate-spin" /> Snapshot Auth
            </span>
          </div>
          <div className="h-1 w-full bg-[#0C120F] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#D4FF00] to-[#14F195] w-[60%] rounded-full relative">
              <div className="absolute inset-0 bg-white/20 animate-scan"></div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AirdropStateLoading;
