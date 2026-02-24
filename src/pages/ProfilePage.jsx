import React from 'react';
import { User, Mail, Settings, Edit3, Wallet, ArrowLeftRight, Image, Calendar, Shield, Star, Zap, Globe, Share2, Copy } from 'lucide-react';
import { Navbar } from '@/components/ui';

const profile = {
  name: 'Alex Thompson',
  username: '@alexthompson',
  walletAddress: '0x8A7F...Ea29b',
  role: 'DeFi Enthusiast',
  bio: 'Building the future of decentralized finance. Early adopter, liquidity provider, and NFT collector. Always exploring new protocols.',
  avatarUrl: null,
  isOnline: true,
  stats: [
    { label: 'Wallets', value: '12', icon: Wallet },
    { label: 'Transactions', value: '2.4K', icon: ArrowLeftRight },
    { label: 'NFTs Owned', value: '47', icon: Image },
    { label: 'Member Since', value: 'Jan 2024', icon: Calendar },
  ],
  skills: ['DeFi', 'NFTs', 'Trading', 'Staking', 'Liquidity Mining', 'DAO Governance'],
  securityLevel: 'Advanced',
  trustScore: 94,
};

const Component33ProfilePage = () => {
  return (
    <div className="min-h-screen bg-[#050807] text-white">
      <Navbar />

      {/* Background Ambience */}
      <div className="fixed top-20 right-20 w-96 h-96 bg-[#D4FF00] opacity-[0.03] blur-[120px] rounded-full pointer-events-none" />
      <div className="fixed bottom-20 left-20 w-64 h-64 bg-[#14F195] opacity-[0.03] blur-[100px] rounded-full pointer-events-none" />

      {/* Main Container - Centered Two-Column Layout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left Column: Identity Sidebar (4 cols) */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-[#142018] rounded-[32px] border border-white/5 p-6 lg:p-8 flex flex-col items-center text-center relative overflow-hidden group">
              {/* Pattern Overlay */}
              <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(212,255,0,0.02),rgba(212,255,0,0.02)_4px,transparent_4px,transparent_8px)] opacity-50 pointer-events-none" />

              {/* Avatar */}
              <div className="relative mb-6">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#D4FF00] to-[#14F195] p-1 shadow-[0_0_40px_rgba(212,255,0,0.2)] group-hover:shadow-[0_0_60px_rgba(212,255,0,0.4)] transition-all duration-500">
                  <div className="w-full h-full rounded-full bg-[#1A2920] flex items-center justify-center overflow-hidden">
                    {profile.avatarUrl ? (
                      <img src={profile.avatarUrl} alt={profile.name} className="w-full h-full object-cover" />
                    ) : (
                      <User className="w-14 h-14 text-[#8FA396]" />
                    )}
                  </div>
                </div>
                {profile.isOnline && (
                  <span className="absolute bottom-2 right-2 w-6 h-6 bg-[#D4FF00] rounded-full border-4 border-[#142018]" />
                )}
              </div>

              {/* Name & Role */}
              <h1 className="text-2xl font-extrabold text-white tracking-tight mb-1">
                {profile.name}
              </h1>
              <div className="flex items-center justify-center gap-2 mb-4">
                <span className="font-mono text-sm text-[#8FA396] bg-[#0C120F] px-2 py-1 rounded-md border border-white/5 cursor-pointer hover:border-[#D4FF00]/30 hover:text-white transition-colors flex items-center gap-2 group/copy">
                  {profile.walletAddress}
                  <Copy className="w-3 h-3 opacity-0 group-hover/copy:opacity-100 transition-opacity" />
                </span>
              </div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#D4FF00]/10 border border-[#D4FF00]/20 text-xs font-bold text-[#D4FF00] uppercase tracking-wider mb-6">
                <Zap className="w-3 h-3" />
                {profile.role}
              </span>

              {/* Bio */}
              <p className="text-[#8FA396] text-sm leading-relaxed mb-8">
                {profile.bio}
              </p>

              {/* Social/Connection Actions */}
              <div className="flex gap-3 w-full">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-[#D4FF00] text-black font-bold text-sm hover:bg-[#bce600] transition-colors shadow-lg shadow-[#D4FF00]/10 hover:shadow-[#D4FF00]/20">
                  <Edit3 className="w-4 h-4" />
                  <span>Edit</span>
                </button>
                <button className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#0C120F] border border-white/5 text-white hover:border-white/20 hover:bg-[#1A2920] transition-all">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="flex items-center justify-center w-12 h-12 rounded-2xl bg-[#0C120F] border border-white/5 text-white hover:border-white/20 hover:bg-[#1A2920] transition-all">
                  <Settings className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Quick Skills */}
            <div className="bg-[#142018] rounded-[32px] border border-white/5 p-6 lg:p-8">
              <h3 className="text-xs uppercase font-bold tracking-widest text-[#8FA396] mb-4 flex items-center gap-2">
                <Star className="w-3 h-3 text-[#D4FF00]" />
                Top Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 rounded-xl bg-[#0C120F] border border-white/5 text-xs font-bold text-[#8FA396] hover:text-white hover:border-[#D4FF00]/30 hover:bg-[#D4FF00]/5 transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Details & Stats (8 cols) */}
          <div className="lg:col-span-8 space-y-6">

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {profile.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#142018] rounded-3xl border border-white/5 p-5 hover:border-[#D4FF00]/20 hover:translate-y-[-2px] transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-2xl bg-[#0C120F] flex items-center justify-center mb-4 group-hover:bg-[#D4FF00] transition-colors duration-300">
                    <stat.icon className="w-5 h-5 text-[#D4FF00] group-hover:text-black transition-colors duration-300" />
                  </div>
                  <p className="text-2xl font-extrabold text-white tracking-tight mb-1">
                    {stat.value}
                  </p>
                  <p className="text-[10px] uppercase font-bold tracking-widest text-[#8FA396]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Security & Trust Section */}
            <div className="bg-[#142018] rounded-[32px] border border-white/5 p-6 lg:p-8">
              <h3 className="text-sm font-bold text-white mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#14F195]" />
                Security & Trust
              </h3>

              <div className="space-y-6">
                {/* Security Level */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase font-bold tracking-widest text-[#8FA396]">Security Level</span>
                    <span className="text-xs font-bold text-[#14F195] bg-[#14F195]/10 px-2 py-1 rounded-full">{profile.securityLevel}</span>
                  </div>
                  <div className="w-full h-3 bg-[#0C120F] rounded-full overflow-hidden border border-white/5">
                    <div className="w-[90%] h-full bg-gradient-to-r from-[#14F195] to-[#D4FF00] rounded-full" />
                  </div>
                  <p className="text-[10px] text-[#8FA396] mt-2">
                    2FA Enabled • Ledger Connected • Fish-proof
                  </p>
                </div>

                {/* Trust Score */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs uppercase font-bold tracking-widest text-[#8FA396]">Trust Score</span>
                    <span className="text-lg font-bold text-white">{profile.trustScore}<span className="text-[#8FA396] text-sm">/100</span></span>
                  </div>
                  <div className="w-full h-3 bg-[#0C120F] rounded-full overflow-hidden border border-white/5">
                    <div
                      className="h-full bg-[#D4FF00] rounded-full"
                      style={{ width: `${profile.trustScore}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Recent Activity Placeholder (optional but adds completeness) */}
            <div className="bg-[#142018] rounded-[32px] border border-white/5 p-6 lg:p-8 flex items-center justify-between group cursor-pointer hover:border-[#D4FF00]/30 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#0C120F] flex items-center justify-center border border-white/5">
                  <Globe className="w-6 h-6 text-[#8FA396] group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Public Profile Link</h3>
                  <p className="text-xs text-[#8FA396]">uwallet.app/{profile.username}</p>
                </div>
              </div>
              <div className="px-4 py-2 rounded-xl bg-[#0C120F] border border-white/5 text-xs font-bold text-[#8FA396] group-hover:bg-[#D4FF00] group-hover:text-black transition-all">
                Copy Link
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Component33ProfilePage;
