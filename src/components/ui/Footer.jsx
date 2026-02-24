import React from 'react';
import { Box, Twitter, Github, Disc } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="px-6 py-16 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Box className="w-8 h-8 text-[#D4FF00]" />
              <span className="text-xl font-extrabold text-white">uWallet</span>
            </div>
            <p className="text-sm text-[#8FA396] leading-relaxed">
              The secure, non-custodial crypto wallet for the Web3 generation.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Product</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-sm text-[#8FA396] hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-sm text-[#8FA396] hover:text-white transition-colors">Security</a></li>
              <li><a href="#" className="text-sm text-[#8FA396] hover:text-white transition-colors">Roadmap</a></li>
              <li><a href="#" className="text-sm text-[#8FA396] hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-sm text-[#8FA396] hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="text-sm text-[#8FA396] hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-sm text-[#8FA396] hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-[#8FA396] hover:text-white transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">Support</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-sm text-[#8FA396] hover:text-white transition-colors">Help Center</a></li>
              <li><a href="#" className="text-sm text-[#8FA396] hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="text-sm text-[#8FA396] hover:text-white transition-colors">Privacy</a></li>
              <li><a href="#" className="text-sm text-[#8FA396] hover:text-white transition-colors">Terms</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-sm text-[#8FA396]">© 2026 uWallet. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#8FA396] hover:text-white hover:border-white/20 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#8FA396] hover:text-white hover:border-white/20 transition-colors">
              <Github className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#8FA396] hover:text-white hover:border-white/20 transition-colors">
              <Disc className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
