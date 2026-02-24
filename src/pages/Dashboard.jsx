import React, { useState } from 'react';
import { Search, Bell } from 'lucide-react';
import { Sidebar, WalletChart, StatsCards, TransactionsList, RiskScore } from '@/features/dashboard';

const Dashboard = () => {

  return (
    <div className="min-h-screen bg-[#050807]">
      <Sidebar />

      {/* Main Content - Account for fixed sidebar on desktop */}
      <div className="lg:ml-64 min-h-screen transition-all duration-300">
        {/* Top Bar */}
        <header className="sticky top-0 z-30 bg-[#050807]/95 backdrop-blur-sm flex items-center justify-between px-4 sm:px-6 lg:px-8 py-3 lg:py-4 border-b border-white/5">
          {/* Spacer for mobile menu button */}
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

        {/* Dashboard Content */}
        <main className="p-3 sm:p-4 lg:p-6 xl:p-8">
          <div className="flex flex-col xl:flex-row gap-4 lg:gap-6">
            {/* Main Content Area */}
            <div className="flex-1 space-y-4 lg:space-y-6 min-w-0">
              <WalletChart />
              <StatsCards />
            </div>

            {/* Sidebar Content */}
            <div className="w-full xl:w-80 2xl:w-96 space-y-4 lg:space-y-6 shrink-0">
              <RiskScore />
              <TransactionsList />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
