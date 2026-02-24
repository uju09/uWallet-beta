import React from 'react';
import { Droplets, Wallet, Hash, ClipboardPaste, Droplet, Terminal } from 'lucide-react';

const AirdropPortal = () => {
  return (
    <section className="space-y-6">
      <div className="text-center mb-8">
        <h2 className="text-xs uppercase tracking-widest text-[#14F195] font-black inline-flex items-center gap-2 mb-2">
          <Droplets className="w-4 h-4" /> Developer Tools
        </h2>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">Solana Faucet</h1>
      </div>

      <div className="max-w-3xl mx-auto bg-[#0C120F] rounded-[48px] border border-white/10 shadow-[0_0_80px_rgba(20,241,149,0.05)] relative overflow-hidden ring-1 ring-white/5">

        {/* Hero Area */}
        <div className="h-80 w-full relative overflow-hidden flex flex-col items-center justify-center pt-8 pb-12">
          <div className="absolute inset-x-[-50%] bottom-[-50%] top-0 perspective-grid z-0"></div>

          <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#9945FF] blur-[100px] rounded-full animate-ambient mix-blend-screen z-0"></div>
          <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#14F195] blur-[100px] rounded-full animate-ambient mix-blend-screen z-0" style={{ animationDelay: '2s' }}></div>

          <div className="absolute inset-0 bg-gradient-to-t from-[#0C120F] via-transparent to-transparent z-10"></div>

          <div className="absolute top-6 right-6 z-20">
            <div className="glass-panel px-4 py-2 rounded-full flex items-center gap-2 shadow-lg border border-[#14F195]/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#14F195] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#14F195]"></span>
              </span>
              <span className="text-[10px] font-black text-white uppercase tracking-widest">Devnet</span>
            </div>
          </div>

          <div className="relative z-20 flex flex-col items-center mt-4">
            <div className="relative animate-float-complex">
              <div className="absolute inset-0 bg-[#D4FF00] blur-[40px] opacity-20"></div>
              <div className="w-28 h-28 bg-gradient-to-br from-white/10 to-white/5 rounded-[32px] border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl relative overflow-hidden transform-gpu">
                <div className="absolute inset-0 bg-gradient-to-br from-[#9945FF]/30 to-[#14F195]/30"></div>
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent"></div>
                <svg viewBox="0 0 24 24" fill="none" className="w-14 h-14 relative z-10 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                  <path d="M4 18h11.9l2.1-2.1H6.1L4 18zM6.1 8.1h11.9l2.1-2.1H8.2L6.1 8.1zM4 12h16l-2.1 2.1H2L4 12z" fill="white" />
                </svg>
              </div>
            </div>
            <h3 className="text-4xl font-black text-white tracking-tighter mt-6 drop-shadow-lg">Airdrop <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9945FF] to-[#14F195]">Portal</span></h3>
            <p className="text-[#8FA396] text-sm font-medium mt-2 drop-shadow-md">Fund your testing environment instantly.</p>
          </div>
        </div>

        {/* Interactive Form Area */}
        <div className="relative z-30 -mt-8 px-6 pb-6 md:px-10 md:pb-10">
          <div className="bg-[#142018] rounded-[32px] border border-white/5 shadow-2xl p-6 md:p-8 space-y-8 backdrop-blur-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {/* Left Column */}
              <div className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between items-end px-1">
                    <label className="text-[10px] uppercase font-black text-[#8FA396] tracking-widest">Target Wallet</label>
                    <button className="text-[10px] text-[#14F195] font-bold hover:underline flex items-center gap-1">
                      <Wallet className="w-3 h-3" /> Connect
                    </button>
                  </div>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#9945FF] to-[#14F195] rounded-2xl blur opacity-0 group-focus-within:opacity-20 transition-opacity duration-500"></div>
                    <div className="relative flex items-center bg-[#0C120F] border border-white/5 group-focus-within:border-[#14F195]/50 rounded-2xl overflow-hidden transition-colors">
                      <div className="pl-4 pr-2 text-[#8FA396]">
                        <Hash className="w-5 h-5" />
                      </div>
                      <input type="text" defaultValue="8x2jRzp...9KmzA1" className="w-full bg-transparent py-4 text-white font-mono text-sm outline-none placeholder:text-white/20" />
                      <button className="px-4 py-4 text-[#8FA396] hover:text-white transition-colors bg-white/5 hover:bg-white/10 border-l border-white/5">
                        <ClipboardPaste className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] uppercase font-black text-[#8FA396] tracking-widest px-1">Network</label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="cursor-pointer">
                      <input type="radio" name="network" className="peer sr-only" defaultChecked />
                      <div className="bg-[#0C120F] border border-white/5 peer-checked:border-[#14F195] peer-checked:bg-[#14F195]/5 p-4 rounded-2xl transition-all flex items-center justify-between">
                        <span className="text-xs font-bold text-white peer-checked:text-[#14F195]">Devnet</span>
                        <div className="w-3 h-3 rounded-full border-2 border-white/20 peer-checked:border-[#14F195] peer-checked:bg-[#14F195] flex items-center justify-center"></div>
                      </div>
                    </label>
                    <label className="cursor-pointer">
                      <input type="radio" name="network" className="peer sr-only" />
                      <div className="bg-[#0C120F] border border-white/5 peer-checked:border-[#9945FF] peer-checked:bg-[#9945FF]/5 p-4 rounded-2xl transition-all flex items-center justify-between">
                        <span className="text-xs font-bold text-[#8FA396] peer-checked:text-[#9945FF]">Testnet</span>
                        <div className="w-3 h-3 rounded-full border-2 border-[#8FA396]/20 peer-checked:border-[#9945FF] peer-checked:bg-[#9945FF] flex items-center justify-center"></div>
                      </div>
                    </label>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex justify-between items-end px-1">
                    <label className="text-[10px] uppercase font-black text-[#8FA396] tracking-widest">Amount (SOL)</label>
                    <span className="text-[9px] font-mono text-[#8FA396] bg-[#0C120F] px-2 py-1 rounded border border-white/5">Max: 5 SOL/day</span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <button className="bg-[#0C120F] text-white py-3.5 rounded-2xl font-bold text-sm border border-white/5 hover:bg-white/5 transition-all">0.5</button>
                    <button className="bg-gradient-to-br from-[#14F195]/10 to-transparent text-[#14F195] py-3.5 rounded-2xl font-black text-sm border border-[#14F195]/50 shadow-[0_0_20px_rgba(20,241,149,0.15)] transition-all">1.0</button>
                    <button className="bg-[#0C120F] text-white py-3.5 rounded-2xl font-bold text-sm border border-white/5 hover:bg-white/5 transition-all">2.0</button>
                  </div>
                </div>

                <div className="pt-2">
                  <button className="w-full bg-[#D4FF00] text-black font-extrabold py-4 rounded-2xl shadow-[0_0_40px_rgba(212,255,0,0.2)] hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 btn-shine">
                    <Droplet className="w-5 h-5 fill-black" />
                    Airdrop 1.0 SOL
                  </button>
                </div>
              </div>
            </div>

            {/* Terminal Output */}
            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="bg-[#050807] rounded-xl border border-white/5 p-4 font-mono text-[10px] leading-relaxed relative overflow-hidden group/term">
                <div className="absolute top-0 left-0 w-1 h-full bg-[#14F195]"></div>
                <div className="flex items-center gap-2 text-[#8FA396] mb-2">
                  <Terminal className="w-3 h-3" />
                  <span>System Status</span>
                </div>
                <div className="space-y-1">
                  <p className="text-[#8FA396]">&gt; Checking network limits... <span className="text-[#14F195]">OK</span></p>
                  <p className="text-[#8FA396]">&gt; Verifying address format... <span className="text-[#14F195]">VALID</span></p>
                  <p className="text-white">&gt; Ready to deploy 1.0 SOL to Devnet <span className="inline-block w-1.5 h-3 bg-[#D4FF00] animate-blink ml-1 align-middle"></span></p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AirdropPortal;
