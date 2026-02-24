import React from 'react';
import { Type } from 'lucide-react';

const AirdropTypographyPoster = () => {
  return (
    <section className="space-y-6 pt-8 border-t border-white/5 relative">
      <div className="text-center mb-10">
        <h2 className="text-xs uppercase tracking-widest text-[#D4FF00] font-black inline-flex items-center gap-2 mb-2">
          <Type className="w-4 h-4" /> Pure Typography
        </h2>
        <h1 className="text-3xl font-extrabold text-white tracking-tight">Airdrop Text Banner</h1>
      </div>

      <div className="max-w-4xl mx-auto rounded-[40px] bg-[#050807] relative overflow-hidden group min-h-[500px] flex items-center justify-center border border-white/5 shadow-[0_0_100px_rgba(20,241,149,0.05)]">

        {/* Animated Background Mesh / Grid */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-[#9945FF]/20 via-[#050807] to-[#14F195]/20 blur-[100px] rounded-full animate-spin-slow pointer-events-none"></div>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.2) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        </div>

        {/* Decorative UI Micro-Copy */}
        <div className="absolute top-8 left-8 z-20 text-[#8FA396] font-mono text-[10px] uppercase tracking-widest opacity-50 space-y-1">
          <p>// SYS.ONLINE</p>
          <p>// FAUCET_READY</p>
        </div>
        <div className="absolute bottom-8 right-8 z-20 text-[#8FA396] font-mono text-[10px] uppercase tracking-widest opacity-50 text-right space-y-1">
          <p>NET: DEVNET / TESTNET</p>
          <p>MAX_CLAIM: 5.00 SOL</p>
        </div>
        <div className="absolute top-8 right-8 z-20">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-6 h-6 text-[#14F195] opacity-50 animate-pulse" strokeWidth="1.5">
            <path d="M4 18h11.9l2.1-2.1H6.1L4 18zM6.1 8.1h11.9l2.1-2.1H8.2L6.1 8.1zM4 12h16l-2.1 2.1H2L4 12z" />
          </svg>
        </div>

        {/* Layered Typography Effect */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full mt-4">
          <div className="absolute text-[100px] md:text-[180px] font-black leading-none uppercase tracking-tighter text-stroke-purple select-none opacity-40 blur-[2px] transform -translate-y-10 animate-float-complex">
            AIRDROP
          </div>
          <div className="absolute text-[100px] md:text-[180px] font-black leading-none uppercase tracking-tighter text-stroke-green select-none opacity-50 transform translate-y-12 translate-x-4 animate-float-complex" style={{ animationDelay: '-2s' }}>
            SOL
          </div>
          <div className="relative text-center mix-blend-screen animate-float-complex" style={{ animationDelay: '-4s' }}>
            <h2 className="text-[80px] md:text-[140px] font-black leading-none uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-[#9945FF] via-[#14F195] to-[#D4FF00] drop-shadow-[0_0_60px_rgba(20,241,149,0.3)]">
              AIRDROP<br />SOL
            </h2>
          </div>
        </div>

        {/* Light Flare */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[300px] h-1 bg-gradient-to-r from-transparent via-[#14F195] to-transparent opacity-50 blur-[2px]"></div>
      </div>
    </section>
  );
};

export default AirdropTypographyPoster;
