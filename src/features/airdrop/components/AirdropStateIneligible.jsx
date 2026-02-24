import React from 'react';
import { XOctagon, CheckCircle2, XCircle } from 'lucide-react';

const AirdropStateIneligible = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-[10px] uppercase tracking-widest text-[#8FA396] font-bold border-b border-white/5 pb-2">
        04. Ineligible (Criteria Not Met)
      </h2>
      <div className="bg-[#142018] rounded-[32px] p-6 border border-white/5 relative overflow-hidden min-h-[400px] flex flex-col">
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 opacity-5 blur-[40px] rounded-full pointer-events-none"></div>

        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
            <XOctagon className="w-5 h-5 text-red-400" />
          </div>
          <div>
            <h3 className="text-white font-bold text-base leading-tight">Not Eligible</h3>
            <p className="text-[10px] text-[#8FA396] font-mono uppercase tracking-wider mt-0.5">
              Wallet Snapshot Mismatch
            </p>
          </div>
        </div>

        <div className="bg-[#0C120F] rounded-2xl p-4 border border-white/5 mb-6">
          <p className="text-xs text-[#8FA396] leading-relaxed">
            This wallet address does not meet the minimum requirements for the current airdrop phase based on the snapshot taken on <span className="text-white font-bold">Oct 12, 2024</span>.
          </p>
        </div>

        <div className="space-y-3 mb-6 flex-1">
          <p className="text-[10px] font-bold text-[#8FA396] uppercase tracking-widest px-1">Eligibility Checklist</p>

          <div className="flex items-center justify-between px-3 opacity-60">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#8FA396]" />
              <span className="text-xs font-medium text-white line-through">Wallet Created &gt; 30 Days</span>
            </div>
          </div>

          <div className="flex items-center justify-between px-3 bg-red-500/5 py-1.5 rounded-lg border border-red-500/10">
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-xs font-bold text-red-400">Min. 10 Transactions</span>
            </div>
            <span className="text-[10px] font-mono text-red-400">2 / 10</span>
          </div>

          <div className="flex items-center justify-between px-3 bg-red-500/5 py-1.5 rounded-lg border border-red-500/10">
            <div className="flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-400" />
              <span className="text-xs font-bold text-red-400">Held Ecosystem NFT</span>
            </div>
            <span className="text-[10px] font-mono text-red-400">0 Held</span>
          </div>
        </div>

        <button className="w-full bg-[#1A2920] hover:bg-[#1F3325] border border-white/5 text-white font-bold py-3.5 rounded-xl transition-all text-xs uppercase tracking-wider mt-auto">
          View Secondary Tasks
        </button>
      </div>
    </section>
  );
};

export default AirdropStateIneligible;
