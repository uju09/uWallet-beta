import React from 'react';
import { User, Shield, Bell, LogOut, Wallet, ChevronRight, Lock, Eye, Key, Trash2, Search } from 'lucide-react';
import { Sidebar } from '../features/dashboard';

const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-[#050807] text-white">
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

        <main className="flex-1 p-3 sm:p-4 lg:p-6 xl:p-8 flex flex-col">
          <div className="w-full max-w-4xl mx-auto flex-1 flex flex-col space-y-12">

            {/* Account Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Account Settings</h3>
                <p className="text-sm text-[#8FA396]">Manage your wallet profile and identity.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[#142018] p-6 rounded-3xl border border-white/5 flex flex-col justify-between h-44 group hover:border-white/20 transition-all">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 bg-[#1A2920] rounded-xl flex items-center justify-center text-[#D4FF00]">
                      <Wallet className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold text-[#8FA396] uppercase tracking-widest">Active</span>
                  </div>
                  <div>
                    <p className="text-xs text-[#8FA396] mb-1 font-medium">Primary Wallet</p>
                    <button className="text-sm font-bold text-white hover:text-[#D4FF00] flex items-center gap-2 transition-colors">
                      Change Wallet <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <div className="bg-[#142018] p-6 rounded-3xl border border-white/5 flex flex-col justify-between h-44 group hover:border-white/20 transition-all">
                  <div className="flex justify-between items-start">
                    <div className="w-10 h-10 bg-[#1A2920] rounded-xl flex items-center justify-center text-[#D4FF00]">
                      <Lock className="w-5 h-5" />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs text-[#8FA396] mb-1 font-medium">Security Credential</p>
                    <button className="text-sm font-bold text-white hover:text-[#D4FF00] flex items-center gap-2 transition-colors">
                      Change Password <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Privacy & Credentials Section */}
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Security Credentials</h3>
                <p className="text-sm text-[#8FA396]">Access your sensitive wallet data. Never share these!</p>
              </div>

              <div className="bg-[#142018] rounded-[32px] border border-white/5 overflow-hidden">
                <button className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors border-b border-white/5">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#1A2920] rounded-xl flex items-center justify-center text-red-400">
                      <Eye className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-white">Reveal Private Key</p>
                      <p className="text-xs text-[#8FA396]">View your wallet's unique secret key.</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#8FA396]" />
                </button>

                <button className="w-full flex items-center justify-between p-6 hover:bg-white/5 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-[#1A2920] rounded-xl flex items-center justify-center text-[#D4FF00]">
                      <Key className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-white">View Seed Phrase</p>
                      <p className="text-xs text-[#8FA396]">Access your 12-word recovery phrase.</p>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-[#8FA396]" />
                </button>
              </div>
            </div>

            {/* Danger Zone */}
            <div className="pt-8 border-t border-white/5">
              <button className="w-full bg-red-500/10 hover:bg-red-500/20 border border-red-500/20 p-6 rounded-3xl flex items-center justify-between transition-all group">
                <div className="text-left">
                  <p className="text-sm font-bold text-red-400">Delete Account Data</p>
                  <p className="text-xs text-[#8FA396]">This will wipe local storage and history.</p>
                </div>
                <Trash2 className="w-5 h-5 text-red-400 group-hover:scale-110 transition-transform" />
              </button>
            </div>

          </div>
        </main>
      </div>
    </div>
  );
};

export default SettingsPage;
