import React, { useState } from 'react';
import { Box, LayoutDashboard, TrendingUp, ArrowLeftRight, Wallet, Menu, X, ArrowLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { icon: Wallet, label: 'Wallet', path: '/assets' },
  { icon: Wallet, label: 'Swap', path: '/assets/swap' },
  { icon: LayoutDashboard, label: 'Airdrop', path: '/airdrop' },
  { icon: LayoutDashboard, label: 'Profile', path: '/profile' }

];

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Mobile Menu Button - Only show when closed to prevent overlapping sidebar */}
      <button
        onClick={toggleSidebar}
        className={`lg:hidden fixed top-3 sm:top-4 left-4 sm:left-6 z-[60] w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#1A2920] text-[#8FA396] flex items-center justify-center hover:text-white transition-colors ${isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}
      >
        <Menu className="w-4 h-4 sm:w-5 sm:h-5" />
      </button>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/60 z-40 backdrop-blur-sm"
          onClick={toggleSidebar}
        />
      )}

      {/* Desktop Sidebar - Fixed Width */}
      <aside
        className="hidden lg:flex fixed left-0 top-0 h-screen bg-[#0C120F] border-r border-white/5 flex-col z-50 
          w-64 transition-all duration-300 ease-in-out"
      >
        {/* Logo */}
        <div className="p-6 flex items-center gap-2 min-h-[72px]">
          <Box className="w-8 h-8 text-[#D4FF00] stroke-[2.5] shrink-0" />
          <span className="text-xl font-extrabold text-white tracking-tight">
            UWALLET
          </span>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-medium transition-all ${isActive
                      ? 'bg-[#D4FF00] text-black'
                      : 'text-[#8FA396] hover:bg-white/5 hover:text-white'
                      }`}
                  >
                    <item.icon className="w-5 h-5 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

      </aside>

      {/* Mobile Sidebar */}
      <aside
        className={`
          lg:hidden fixed left-0 top-0 h-screen bg-[#0C120F] border-r border-white/5 flex flex-col z-50
          transition-transform duration-300 ease-in-out w-64
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Logo & Close Button */}
        <div className="p-4 sm:p-6 flex items-center justify-between min-h-[72px]">
          <div className="flex items-center gap-2">
            <Box className="w-8 h-8 text-[#D4FF00] stroke-[2.5] shrink-0" />
            <span className="text-xl font-extrabold text-white tracking-tight">UWALLET</span>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#8FA396] hover:text-white hover:bg-white/10 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className={`flex items-center gap-3 px-4 py-3 rounded-2xl font-medium transition-all ${isActive
                      ? 'bg-[#D4FF00] text-black'
                      : 'text-[#8FA396] hover:bg-white/5 hover:text-white'
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <item.icon className="w-5 h-5 shrink-0" />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Safety Score */}
        <div className="p-4 mx-4 mb-4 bg-[#142018] rounded-2xl border border-white/5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-[#8FA396] uppercase font-bold tracking-wider">Safety Score</span>
            <span className="text-xs font-bold text-[#14F195] bg-[#14F195]/10 px-2 py-1 rounded-full">Excellent</span>
          </div>
          <div className="w-full h-2 bg-[#0C120F] rounded-full overflow-hidden">
            <div className="w-[85%] h-full bg-gradient-to-r from-[#14F195] to-[#D4FF00] rounded-full" />
          </div>
        </div>

        {/* Wallet Address */}
        <div className="p-4 border-t border-white/5 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#D4FF00] to-[#14F195] flex items-center justify-center shrink-0">
            <span className="text-black font-bold text-sm">0x</span>
          </div>
          <span className="text-sm text-white font-medium">0x8A...29b</span>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
