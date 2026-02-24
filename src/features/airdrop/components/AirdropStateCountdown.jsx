import React from 'react';
import { Calendar, Bell, Lock } from 'lucide-react';

const AirdropStateCountdown = () => {
  return (
    <section className="space-y-4 md:col-span-2 lg:col-span-3">
      <h2 className="text-[10px] uppercase tracking-widest text-[#8FA396] font-bold border-b border-white/5 pb-2">
        07. Upcoming Drop (Countdown State)
      </h2>

      <div className="w-full bg-[#0C120F] border border-white/10 rounded-[40px] overflow-hidden flex flex-col md:flex-row shadow-2xl relative min-h-[300px]">
        {/* Decorations */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "url('https://grainy-gradients.vercel.app/noise.svg')" }}></div>
        <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#9945FF] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[400px] h-[400px] bg-[#D4FF00] opacity-10 blur-[100px] rounded-full pointer-events-none"></div>

        {/* Left Info Area */}
        <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center relative z-10 border-r border-white/5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm w-max mb-6">
            <Calendar className="w-3 h-3 text-[#8FA396]" />
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#8FA396]">Phase 2 Drop</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tighter mb-4 leading-none">
            Epoch 420 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-[#14F195]">Distribution</span>
          </h2>
          <p className="text-[#8FA396] text-sm max-w-sm mb-8 leading-relaxed">
            The snapshot has been taken. Get ready to claim your ecosystem rewards. Ensure your wallet remains connected.
          </p>

          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#1A2920] border border-white/10 flex items-center justify-center text-[#8FA396]">
              <Bell className="w-4 h-4" />
            </div>
            <span className="text-xs font-bold text-white">Remind me when live</span>
          </div>
        </div>

        {/* Right Countdown Area */}
        <div className="p-8 md:p-12 md:w-1/2 flex flex-col items-center justify-center relative z-10 bg-[#142018]/50 backdrop-blur-sm">
          <p className="text-[10px] font-bold text-[#8FA396] uppercase tracking-widest mb-6 text-center">
            Claim opens in
          </p>

          <div className="flex gap-4 md:gap-6 mb-8 text-center">
            <div className="flex flex-col items-center">
              <div className="bg-[#0C120F] border border-white/10 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-2 shadow-inner">
                <span className="text-3xl md:text-4xl font-black text-white font-mono">02</span>
              </div>
              <span className="text-[10px] text-[#8FA396] font-bold uppercase">Days</span>
            </div>
            <span className="text-2xl text-white/20 font-black mt-4">:</span>
            <div className="flex flex-col items-center">
              <div className="bg-[#0C120F] border border-white/10 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-2 shadow-inner">
                <span className="text-3xl md:text-4xl font-black text-white font-mono">14</span>
              </div>
              <span className="text-[10px] text-[#8FA396] font-bold uppercase">Hrs</span>
            </div>
            <span className="text-2xl text-white/20 font-black mt-4">:</span>
            <div className="flex flex-col items-center">
              <div className="bg-[#0C120F] border border-white/10 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center mb-2 shadow-inner">
                <span className="text-3xl md:text-4xl font-black text-[#D4FF00] font-mono">32</span>
              </div>
              <span className="text-[10px] text-[#8FA396] font-bold uppercase">Mins</span>
            </div>
          </div>

          <button disabled className="w-full max-w-sm bg-white/5 border border-white/10 text-[#8FA396] font-bold py-4 rounded-2xl cursor-not-allowed flex items-center justify-center gap-2">
            <Lock className="w-4 h-4" /> Claim Not Active
          </button>
        </div>
      </div>
    </section>
  );
};

export default AirdropStateCountdown;
