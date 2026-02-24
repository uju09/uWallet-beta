import React from 'react';
import { Droplet, Wallet, DownloadCloud } from 'lucide-react';

const AirdropStateRequest = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-[10px] uppercase tracking-widest text-[#8FA396] font-bold border-b border-white/5 pb-2">
        01. Initial Input / Request
      </h2>
      <div className="bg-[#142018] rounded-[32px] p-6 border border-white/5 shadow-2xl relative overflow-hidden group hover:border-white/10 transition-colors">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-2xl bg-[#1A2920] border border-white/10 flex items-center justify-center text-[#14F195]">
            <Droplet className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white leading-tight">Solana Faucet</h3>
            <p className="text-[10px] text-[#8FA396] font-mono uppercase tracking-wider mt-0.5">Devnet / Testnet</p>
          </div>
        </div>

        <div className="space-y-5">
          <div className="flex bg-[#0C120F] p-1 rounded-xl border border-white/5">
            <button className="flex-1 py-2 rounded-lg bg-[#1A2920] text-[#D4FF00] text-xs font-bold shadow-sm border border-white/5 transition-colors">
              Devnet
            </button>
            <button className="flex-1 py-2 rounded-lg text-[#8FA396] hover:text-white hover:bg-white/5 text-xs font-bold transition-colors">
              Testnet
            </button>
          </div>

          <div className="space-y-1.5">
            <label className="text-[10px] font-bold text-[#8FA396] uppercase tracking-widest ml-1">Wallet Address</label>
            <div className="relative">
              <input type="text" placeholder="Enter Solana Address" className="w-full bg-[#0C120F] border border-white/5 focus:border-[#D4FF00]/50 rounded-2xl py-3.5 pl-4 pr-10 text-white text-sm font-medium outline-none transition-all placeholder:text-white/20" />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8FA396] hover:text-[#D4FF00] transition-colors p-1">
                <Wallet className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="space-y-1.5">
            <div className="flex justify-between items-center px-1">
              <label className="text-[10px] font-bold text-[#8FA396] uppercase tracking-widest">Amount</label>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <button className="py-3 rounded-xl border border-[#D4FF00]/50 bg-[#D4FF00]/10 text-[#D4FF00] font-bold text-sm transition-all hover:bg-[#D4FF00]/20">
                1 SOL
              </button>
              <button className="py-3 rounded-xl border border-white/5 bg-[#0C120F] text-[#8FA396] hover:border-[#D4FF00]/30 hover:text-white font-bold text-sm transition-all">
                2 SOL
              </button>
              <button className="py-3 rounded-xl border border-white/5 bg-[#0C120F] text-[#8FA396] hover:border-[#D4FF00]/30 hover:text-white font-bold text-sm transition-all">
                5 SOL
              </button>
            </div>
          </div>

          <button className="w-full bg-[#D4FF00] hover:bg-[#bce600] text-black font-bold py-4 rounded-2xl shadow-lg shadow-[#D4FF00]/10 transition-all flex items-center justify-center gap-2 group">
            <DownloadCloud className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            Request Airdrop
          </button>
        </div>
      </div>
    </section>
  );
};

export default AirdropStateRequest;
