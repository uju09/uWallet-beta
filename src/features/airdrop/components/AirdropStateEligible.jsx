import React from 'react';
import { Gift, ArrowRight } from 'lucide-react';

const AirdropStateEligible = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-[10px] uppercase tracking-widest text-[#8FA396] font-bold border-b border-white/5 pb-2">
        03. Eligible (Ready to Claim)
      </h2>
      <div className="bg-gradient-to-b from-[#142018] to-[#0C120F] rounded-[32px] p-1 border border-white/5 relative overflow-hidden group shadow-2xl hover:border-[#D4FF00]/30 transition-colors min-h-[400px]">

        <div className="absolute inset-0 bg-gradient-to-br from-[#D4FF00]/20 via-transparent to-[#14F195]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

        <div className="bg-[#142018] rounded-[28px] p-6 relative z-10 h-full flex flex-col">
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-[#D4FF00] opacity-10 blur-[60px] rounded-full pointer-events-none"></div>

          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#1A2920] border border-white/10 flex items-center justify-center shadow-lg relative overflow-hidden">
              <Gift className="w-5 h-5 text-[#D4FF00] relative z-10 animate-float" />
            </div>
            <div>
              <h3 className="text-white font-bold text-base leading-tight">Ecosystem Drop</h3>
              <span className="flex items-center gap-1.5 text-[10px] font-bold text-[#14F195] uppercase tracking-widest mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#14F195] animate-ping"></span> Claim Live
              </span>
            </div>
          </div>

          <div className="bg-[#0C120F] rounded-2xl p-5 border border-[#D4FF00]/20 mb-6 text-center relative overflow-hidden flex-1 flex flex-col justify-center animate-pulse-ring-airdrop">
            <div className="absolute inset-0 bg-gradient-to-b from-[#D4FF00]/5 to-transparent"></div>
            <p className="text-[#8FA396] text-[10px] font-bold uppercase tracking-widest mb-1 relative z-10">
              Your Allocation
            </p>
            <h2 className="text-4xl font-black text-white tracking-tighter mb-1 relative z-10">
              2,500 <span className="text-xl text-[#D4FF00] tracking-tight">TKN</span>
            </h2>
            <p className="text-[10px] text-[#8FA396] font-mono relative z-10">≈ $1,250.00 USD</p>
          </div>

          <button className="w-full relative group/btn overflow-hidden rounded-2xl p-[1px] shadow-[0_0_20px_rgba(212,255,0,0.15)] mt-auto">
            <span className="absolute inset-0 bg-gradient-to-r from-[#D4FF00] to-[#14F195] opacity-80 group-hover/btn:opacity-100 transition-opacity"></span>
            <div className="relative bg-[#050807] hover:bg-transparent transition-colors duration-300 py-3.5 px-6 rounded-2xl flex items-center justify-center gap-2">
              <span className="text-white font-bold text-sm group-hover/btn:text-black transition-colors duration-300 tracking-wide">
                Claim Tokens
              </span>
              <ArrowRight className="w-4 h-4 text-white group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all duration-300" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AirdropStateEligible;
