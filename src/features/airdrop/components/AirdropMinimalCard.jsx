import React from 'react';
import { Layout } from 'lucide-react';

const AirdropMinimalCard = () => {
  return (
    <div className="w-full bg-[linear-gradient(to_top_right,#8559F3,#64A9E8,#71E1A3)] rounded-[24px] sm:rounded-[32px] p-6 lg:p-8 xl:p-10 shadow-[0_20px_60px_rgba(133,89,243,0.15)] relative overflow-hidden transition-transform duration-500">

      {/* Subtle noise overlay for texture matching the original image */}
      <div className="absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>

      <div className="relative z-10">
        <p className="text-[12px] font-extrabold text-black uppercase tracking-[0.1em] mb-6">
          Developer Faucet
        </p>

        <h2 className="text-[56px] font-black text-black tracking-tighter mb-4 leading-[1.05]">
          Airdrop SOL
        </h2>

        <p className="text-[18px] font-bold text-black/60 mb-10 leading-snug">
          Fund your testnet wallet instantly to build and test applications.
        </p>

        <button className="w-full bg-black text-white font-extrabold py-5 rounded-[28px] text-[16px] hover:bg-gray-900 active:scale-95 transition-all shadow-2xl flex items-center justify-center gap-2">
          Claim Airdrop
        </button>
      </div>
    </div>
  );
};

export default AirdropMinimalCard;
