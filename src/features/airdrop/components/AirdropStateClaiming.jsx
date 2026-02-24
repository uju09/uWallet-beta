import React from 'react';
import { Box, CheckCircle2, Loader2 } from 'lucide-react';

const AirdropStateClaiming = () => {
  return (
    <section className="space-y-4">
      <h2 className="text-[10px] uppercase tracking-widest text-[#8FA396] font-bold border-b border-white/5 pb-2">
        05. Claiming (Transaction Pending)
      </h2>
      <div className="bg-[#142018] rounded-[32px] p-6 border border-[#9945FF]/30 shadow-[0_0_30px_rgba(153,69,255,0.1)] relative overflow-hidden min-h-[400px] flex flex-col items-center justify-center text-center">

        <div className="absolute inset-0 dotted-bg opacity-30"></div>

        <div className="relative z-10 w-20 h-20 mb-8 mx-auto">
          {/* Spinner */}
          <svg className="animate-spin w-full h-full text-[#9945FF]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <Box className="w-6 h-6 text-white" />
          </div>
        </div>

        <h3 className="text-xl font-bold text-white tracking-tight mb-2 relative z-10">Confirming Claim</h3>
        <p className="text-xs text-[#8FA396] max-w-[200px] mx-auto mb-8 relative z-10">
          Please don't close this window. Interacting with smart contract...
        </p>

        <div className="w-full bg-[#0C120F] rounded-2xl p-4 border border-white/5 relative z-10 text-left space-y-4">
          <div className="flex items-center gap-3 opacity-50">
            <CheckCircle2 className="w-4 h-4 text-[#14F195]" />
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">Generating Proof</span>
          </div>
          <div className="flex items-center gap-3">
            <Loader2 className="w-4 h-4 text-[#9945FF] animate-spin" />
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">Awaiting Block Confirmation</span>
          </div>
          <div className="flex items-center gap-3 opacity-30">
            <div className="w-4 h-4 rounded-full border border-white/30"></div>
            <span className="text-[10px] font-bold text-white uppercase tracking-widest">Updating Balance</span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AirdropStateClaiming;
