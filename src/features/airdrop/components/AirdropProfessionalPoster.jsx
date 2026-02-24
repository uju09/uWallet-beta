import React from 'react';
import { Briefcase, ArrowRight } from 'lucide-react';

const AirdropProfessionalPoster = () => {
  return (
    <section className="space-y-6 pt-8 border-t border-white/5 relative">
      <div className="text-center mb-10">
        <h2 className="text-xs uppercase tracking-widest text-white font-black inline-flex items-center gap-2 mb-2">
          <Briefcase className="w-4 h-4 text-[#8FA396]" /> Professional
        </h2>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">2D Corporate Poster</h1>
      </div>

      <div className="max-w-4xl mx-auto bg-[#0C120F] border border-white/10 rounded-2xl overflow-hidden relative shadow-2xl flex flex-col md:flex-row min-h-[400px]">
        {/* 2D Geometric Background Patterns */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-full bg-gradient-to-l from-[#14F195]/10 to-transparent skew-x-[-20deg] translate-x-32"></div>
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle, #8FA396 1px, transparent 1px)', backgroundSize: '32px 32px', opacity: 0.1 }}></div>
        </div>

        {/* Left Content */}
        <div className="relative z-10 w-full md:w-3/5 p-10 md:p-14 flex flex-col justify-center border-r border-white/5">
          <div className="inline-flex items-center gap-2 px-2 py-1 border border-[#14F195]/30 bg-[#14F195]/5 text-[#14F195] text-[10px] font-mono uppercase tracking-widest mb-6 w-max">
            <span className="w-1.5 h-1.5 bg-[#14F195]"></span>
            System: Operational
          </div>

          <h2 className="text-4xl md:text-5xl font-black text-white leading-[1.1] tracking-tight uppercase mb-4">
            Solana <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195]">Airdrop Protocol</span>
          </h2>

          <p className="text-[#8FA396] font-mono text-xs md:text-sm leading-relaxed max-w-md mb-8">
            Institutional-grade faucet infrastructure. Securely provision testnet assets for decentralized application development.
          </p>

          <div className="flex items-center gap-4">
            <button className="bg-white text-black hover:bg-[#D4FF00] font-bold font-mono text-xs uppercase tracking-widest px-8 py-4 transition-colors flex items-center gap-2">
              Initialize Drop <ArrowRight className="w-4 h-4" />
            </button>
            <button className="border border-white/20 text-white hover:bg-white/5 font-bold font-mono text-xs uppercase tracking-widest px-6 py-4 transition-colors">
              Docs
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-10 pt-6 border-t border-white/10">
            <div>
              <p className="text-[#8FA396] text-[9px] uppercase tracking-widest font-bold mb-1">Max Allocation</p>
              <p className="text-white font-mono text-sm font-bold">5.00 SOL</p>
            </div>
            <div>
              <p className="text-[#8FA396] text-[9px] uppercase tracking-widest font-bold mb-1">Network</p>
              <p className="text-white font-mono text-sm font-bold">DEV/TEST</p>
            </div>
            <div>
              <p className="text-[#8FA396] text-[9px] uppercase tracking-widest font-bold mb-1">Latency</p>
              <p className="text-[#14F195] font-mono text-sm font-bold">&lt; 400ms</p>
            </div>
          </div>
        </div>

        {/* Right Content (2D Visual) */}
        <div className="relative z-10 w-full md:w-2/5 bg-[#142018] flex items-center justify-center p-10">
          <div className="relative w-full aspect-square max-w-[280px]">
            <div className="absolute inset-0 border border-white/10 rounded-full"></div>
            <div className="absolute inset-4 border border-dashed border-white/10 rounded-full animate-[spin_60s_linear_infinite]"></div>

            <div className="absolute top-0 bottom-0 left-1/2 w-[1px] bg-white/5"></div>
            <div className="absolute left-0 right-0 top-1/2 h-[1px] bg-white/5"></div>

            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#14F195]"></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#14F195]"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#14F195]"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#14F195]"></div>

            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-32 bg-[#0C120F] border-2 border-[#9945FF] rotate-45 flex items-center justify-center overflow-hidden">
                <div className="-rotate-45 w-full h-full flex items-center justify-center bg-gradient-to-br from-[#9945FF]/20 to-[#14F195]/20">
                  <svg viewBox="0 0 24 24" fill="none" className="w-16 h-16">
                    <path d="M4 18h11.9l2.1-2.1H6.1L4 18zM6.1 8.1h11.9l2.1-2.1H8.2L6.1 8.1zM4 12h16l-2.1 2.1H2L4 12z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="absolute top-1/4 -right-4 bg-[#0C120F] border border-white/20 px-2 py-1 text-[8px] font-mono text-[#14F195] flex items-center gap-1 shadow-lg">
              <span className="w-1 h-1 bg-[#14F195]"></span> BLOCK_OK
            </div>
            <div className="absolute bottom-1/4 -left-4 bg-[#0C120F] border border-white/20 px-2 py-1 text-[8px] font-mono text-[#9945FF] flex items-center gap-1 shadow-lg">
              <span className="w-1 h-1 bg-[#9945FF]"></span> SYNCED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirdropProfessionalPoster;
