import React from 'react'
import { ArrowDownUp, ChevronDown, DollarSign, Info, Search, Bell, Settings } from 'lucide-react'
import { Sidebar } from '@/features/dashboard';

const SwapPage = () => {
  return (
    <div className="min-h-screen bg-[#050807]">
      <Sidebar />
      <div className="lg:ml-64 min-h-screen transition-all duration-300 flex flex-col">
        {/* Top Bar - consistent with Dashboard */}
        <header className="sticky top-0 z-30 bg-[#050807]/95 backdrop-blur-sm flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 lg:py-4 border-b border-white/5">
          <div className="w-12 lg:hidden" />
          <div className="flex-1" />
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1A2920] text-[#8FA396] flex items-center justify-center hover:text-white transition-colors">
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <div className="flex items-center gap-2 bg-[#1A2920] rounded-full px-2 sm:px-3 py-1.5 sm:py-2">
              <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-[#D4FF00] to-[#14F195]" />
              <span className="text-xs sm:text-sm font-medium text-white">0xA7F...Ea2</span>
            </div>
            <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1A2920] text-[#8FA396] flex items-center justify-center hover:text-white transition-colors relative">
              <Bell className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 w-2 h-2 bg-[#D4FF00] rounded-full" />
            </button>
          </div>
        </header>

        {/* Main Content - Full Page */}
        <main className="flex-1 p-3 sm:p-4 lg:p-6 xl:p-8 flex flex-col">
          <div className="w-full max-w-3xl mx-auto flex-1 flex flex-col">
            {/* Swap Card - fills remaining height */}
            <div className="bg-[#0C120F] rounded-2xl border border-white/5 p-4 sm:p-6 lg:p-8 flex-1 flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 lg:mb-8">
                <div>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-[#8FA396] mb-1">Swap</p>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight">Swap Tokens</h2>
                </div>
                <button className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1A2920] text-[#8FA396] flex items-center justify-center hover:text-white transition-colors">
                  <Settings className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>

              {/* Swap Inputs */}
              <div className="space-y-2 relative">
                {/* From Input */}
                <div className="bg-[#142018] rounded-2xl p-4 sm:p-5 lg:p-6 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] sm:text-xs font-bold text-[#8FA396] uppercase tracking-wider">You Pay</span>
                    <span className="text-[10px] sm:text-xs font-bold text-[#8FA396]">Balance: 420.69</span>
                  </div>
                  <div className="flex justify-between items-center gap-4">
                    <input
                      type="number"
                      placeholder="0.00"
                      className="bg-transparent text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white w-full outline-none placeholder:text-white/10"
                    />
                    <button className="flex items-center gap-2 sm:gap-3 bg-[#0C120F] hover:bg-[#0C120F]/80 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-white/5 transition-colors shrink-0">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black flex items-center justify-center">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-gradient-to-br from-[#9945FF] to-[#14F195]" />
                      </div>
                      <span className="text-sm sm:text-base font-bold text-white">SOL</span>
                      <ChevronDown className="w-3.5 h-3.5 text-[#8FA396]" />
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-[#8FA396] mt-2">≈ $0.00</p>
                </div>

                {/* Switcher */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 pointer-events-none">
                  <div className="w-11 h-11 sm:w-12 sm:h-12 bg-[#0C120F] border-[4px] border-[#0C120F] rounded-xl flex items-center justify-center text-[#D4FF00] shadow-lg shadow-black/20 pointer-events-auto cursor-pointer hover:scale-110 hover:bg-[#1A2920] transition-all">
                    <ArrowDownUp className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                </div>

                {/* To Input */}
                <div className="bg-[#142018] rounded-2xl p-4 sm:p-5 lg:p-6 border border-white/5 hover:border-white/10 transition-colors">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[10px] sm:text-xs font-bold text-[#8FA396] uppercase tracking-wider">You Receive</span>
                    <span className="text-[10px] sm:text-xs font-bold text-[#8FA396]">Balance: 0.00</span>
                  </div>
                  <div className="flex justify-between items-center gap-4">
                    <input
                      type="number"
                      placeholder="0.00"
                      className="bg-transparent text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white w-full outline-none placeholder:text-white/10"
                    />
                    <button className="flex items-center gap-2 sm:gap-3 bg-[#0C120F] hover:bg-[#0C120F]/80 px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl border border-white/5 transition-colors shrink-0">
                      <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#2775CA] flex items-center justify-center">
                        <DollarSign className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                      <span className="text-sm sm:text-base font-bold text-white">USDC</span>
                      <ChevronDown className="w-3.5 h-3.5 text-[#8FA396]" />
                    </button>
                  </div>
                  <p className="text-xs sm:text-sm text-[#8FA396] mt-2">≈ $0.00</p>
                </div>
              </div>

              {/* Details & CTA - pushed to bottom */}
              <div className="mt-auto pt-6 lg:pt-8 space-y-4">
                <div className="bg-[#142018] rounded-2xl p-4 sm:p-5 border border-white/5 space-y-3">
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-[#8FA396]">Rate</span>
                    <span className="font-medium text-white">1 SOL ≈ 145.20 USDC</span>
                  </div>
                  <div className="w-full h-px bg-white/5" />
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-[#8FA396] flex items-center gap-1">Network Fee <Info className="w-3 h-3" /></span>
                    <span className="font-medium text-white">~$0.001</span>
                  </div>
                  <div className="w-full h-px bg-white/5" />
                  <div className="flex justify-between items-center text-xs sm:text-sm">
                    <span className="text-[#8FA396]">Slippage</span>
                    <span className="font-medium text-[#14F195]">0.5%</span>
                  </div>
                </div>

                <button className="w-full bg-[#D4FF00] hover:bg-[#bce600] text-black font-bold py-4 sm:py-5 rounded-2xl shadow-lg shadow-[#D4FF00]/10 hover:shadow-[#D4FF00]/20 transition-all text-base sm:text-lg">
                  Swap Tokens
                </button>
              </div>
            </div>
          </div>
        </main>
        {/* <div className="bg-gradient-to-br from-[#6366f1] via-[#aa6cff] to-[#14F195] rounded-[32px] p-6 sm:p-8 text-center relative overflow-hidden shadow-2xl group cursor-pointer hover:shadow-[0_0_40px_rgba(153,69,255,0.3)] transition-all duration-500">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-20 blur-[80px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D4FF00] opacity-10 blur-[80px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            <p className="font-bold text-xs text-[#050807]/60 uppercase tracking-[0.2em] mb-3">Earn Rewards</p>
            <h2 className="text-5xl sm:text-6xl font-black text-[#050807] mb-4 tracking-tighter">7.2% APY</h2>
            <p className="text-[#050807]/80 font-bold text-sm mb-8 leading-relaxed max-w-[240px] mx-auto">
              Stake your SOL directly from your mobile wallet.
            </p>
            <button className="w-full bg-[#050807] text-white font-bold py-4 rounded-[24px] shadow-lg shadow-black/10 hover:scale-[1.02] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2">
              Start Staking
            </button>
          </div>
        </div> */}
      </div>
    </div>
  )
}

export default SwapPage