import React from 'react';
import { Box } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="absolute top-0 w-full flex items-center justify-between px-8 py-6 z-50 bg-transparent">
      <div className="flex items-center gap-2">
        <Box className="w-8 h-8 text-[#D4FF00] stroke-[2.5]" />
        <h1 className="text-2xl font-extrabold text-white tracking-tight">uWallet</h1>
      </div>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#8FA396]">
        <a href="#features" className="hover:text-white transition-colors">Features</a>
        <a href="#security" className="hover:text-white transition-colors">Security</a>
        <a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a>
        <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
      </div>

      <Link
        to="/login"
        className="bg-white/10 hover:bg-white/20 text-white px-6 py-2.5 rounded-full font-bold text-sm backdrop-blur-md transition-all border border-white/10"
      >
        Launch App
      </Link>
    </nav>
  );
};

export default Navbar;
