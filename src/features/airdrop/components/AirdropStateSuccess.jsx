import React from 'react';
import { Check, ExternalLink, Wallet } from 'lucide-react';

const AirdropStateSuccess = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-[10px] uppercase tracking-widest text-[#8FA396] font-bold border-b border-white/5 pb-2">
        06. Success (Tokens Claimed)
      </h2>
      <div className="bg-gradient-to-br from-[#142018] to-[#0C120F] rounded-[32px] p-6 border border-[#14F195]/40 shadow-[0_0_40px_rgba(20,241,149,0.15)] relative overflow-hidden min-h-[400px] flex flex-col text-center">

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-[#14F195] opacity-10 blur-[80px] rounded-full pointer-events-none"></div>

        <div className="flex-1 flex flex-col items-center justify-center relative z-10 pt-4">
          <div className="w-20 h-20 bg-[#14F195]/10 rounded-full flex items-center justify-center mb-6 border border-[#14F195]/30 relative animate-float">
            <div className="absolute inset-0 rounded-full border border-[#14F195] animate-ping opacity-20"></div>
            <Check className="w-10 h-10 text-[#14F195] stroke-[3]" />
          </div>

          <p className="text-[10px] font-bold text-[#8FA396] uppercase tracking-widest mb-2">Successfully Claimed</p>
          <h2 className="text-4xl font-black text-white tracking-tighter mb-2">+ 2,500 <span className="text-[#D4FF00]">TKN</span></h2>
          <p className="text-xs text-[#8FA396]">Tokens have been added to your wallet.</p>
        </div>

        <div className="mt-8 space-y-3 relative z-10 w-full">
          <div className="bg-[#0C120F] rounded-xl p-3 border border-white/5 flex justify-between items-center text-left">
            <div>
              <p className="text-[9px] text-[#8FA396] uppercase font-bold tracking-wider">Transaction Hash</p>
              <p className="text-xs font-mono text-white mt-0.5">5xP9...qL2m</p>
            </div>
            <button className="p-2 hover:bg-white/5 rounded-lg text-[#8FA396] hover:text-white transition-colors">
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          <button className="w-full bg-[#1A2920] hover:bg-[#253d2c] border border-white/5 text-white font-bold py-3.5 rounded-xl transition-all text-xs uppercase tracking-wider flex items-center justify-center gap-2">
            <Wallet className="w-4 h-4" /> View in Wallet
          </button>
        </div>

      </div>
    </section>
  );
};

export default AirdropStateSuccess;
