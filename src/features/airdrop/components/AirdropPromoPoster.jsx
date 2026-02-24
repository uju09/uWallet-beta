import React from 'react';
import { Sparkles, Zap, ArrowRight } from 'lucide-react';

const AirdropPromoPoster = () => {
  return (
    <section className="space-y-6 pt-8 border-t border-white/5 relative">
      <div className="text-center mb-10">
        <h2 className="text-xs uppercase tracking-widest text-[#9945FF] font-black inline-flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4" /> Promo Banner
        </h2>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">Airdrop Quick Poster</h1>
      </div>

      <div className="max-w-4xl mx-auto rounded-[40px] p-1.5 bg-gradient-to-br from-white/10 via-white/5 to-transparent relative overflow-hidden group hover:shadow-[0_0_100px_rgba(153,69,255,0.2)] transition-shadow duration-700">
        <div className="bg-[#050807] rounded-[36px] w-full relative overflow-hidden flex flex-col md:flex-row items-center justify-between p-8 md:p-12 min-h-[340px]">

          <div className="absolute inset-0 opacity-[0.15] mix-blend-overlay z-0" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
          <div className="absolute -top-[30%] -left-[10%] w-[80%] h-[120%] bg-[#9945FF] blur-[120px] opacity-40 animate-spin-slow origin-bottom-right z-0 pointer-events-none"></div>
          <div className="absolute -bottom-[40%] -right-[10%] w-[80%] h-[120%] bg-[#14F195] blur-[120px] opacity-40 animate-spin-slow origin-top-left z-0 pointer-events-none" style={{ animationDirection: 'reverse' }}></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#050807]/80 via-transparent to-[#050807]/40 z-0"></div>

          <div className="relative z-20 flex-1 max-w-lg space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse"></span>
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">Testnet & Devnet Active</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter leading-[1.1] drop-shadow-xl">
              Need <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#14F195] to-[#D4FF00]">Test SOL</span> <br />for development?
            </h2>

            <p className="text-white/70 text-sm md:text-base font-medium max-w-sm drop-shadow-md mx-auto md:mx-0">
              Claim up to 5 SOL daily directly to your connected wallet. No hidden fees, instant delivery.
            </p>
          </div>

          <div className="relative z-20 w-full md:w-[320px] mt-10 md:mt-0">
            <div className="bg-black/20 backdrop-blur-2xl border border-white/10 rounded-[32px] p-6 shadow-2xl relative overflow-hidden group-hover:border-white/20 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

              <div className="relative z-10 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-bold text-white/60 tracking-widest">Quick Claim</span>
                  <div className="w-6 h-6 rounded-full bg-[#14F195]/20 flex items-center justify-center">
                    <Zap className="w-3 h-3 text-[#14F195]" />
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#14F195]">
                    <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                      <path d="M4 18h11.9l2.1-2.1H6.1L4 18zM6.1 8.1h11.9l2.1-2.1H8.2L6.1 8.1zM4 12h16l-2.1 2.1H2L4 12z" fill="currentColor" />
                    </svg>
                  </div>
                  <input type="text" placeholder="Wallet Address" defaultValue="8x2j...9Kmz" className="w-full bg-[#050807]/50 border border-white/10 focus:border-[#14F195] rounded-2xl py-4 pl-12 pr-4 text-white font-mono text-xs outline-none transition-all placeholder:text-white/30 backdrop-blur-md" />
                </div>

                <div className="flex bg-[#050807]/50 border border-white/10 p-1 rounded-xl backdrop-blur-md">
                  <button className="flex-1 py-2 bg-white/10 text-white rounded-lg text-[10px] font-bold shadow-sm">Devnet</button>
                  <button className="flex-1 py-2 text-white/50 hover:text-white rounded-lg text-[10px] font-bold transition-colors">Testnet</button>
                </div>

                <button className="w-full bg-gradient-to-r from-[#14F195] to-[#10b981] text-black font-extrabold py-3.5 rounded-xl shadow-[0_0_20px_rgba(20,241,149,0.3)] hover:scale-[1.03] active:scale-[0.98] transition-all flex items-center justify-center gap-2">
                  Send 1.0 SOL
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirdropPromoPoster;
