import React from 'react';
import { ArrowRight, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative pt-28 pb-16 px-6 md:px-12 flex flex-col items-center text-center">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-[#D4FF00]/5 via-[#D4FF00]/0 to-transparent pointer-events-none" />
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#D4FF00] opacity-10 blur-[100px] rounded-full pointer-events-none" />

      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4FF00]/30 bg-[#D4FF00]/5 backdrop-blur-sm mb-8 relative z-10">
        <span className="w-2 h-2 rounded-full bg-[#D4FF00] animate-pulse" />
        <span className="text-xs font-bold uppercase tracking-wider text-[#D4FF00]">
          uWallet v1.0 Available Now
        </span>
      </div>

      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter leading-[1.1] mb-8 max-w-4xl mx-auto relative z-10">
        The Only Crypto Wallet <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FF00] to-green-500">
          You'll Ever Need
        </span>
      </h1>

      {/* Subtitle */}
      <p className="text-[#8FA396] text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed relative z-10">
        Experience the next generation of DeFi. Non-custodial, lightning fast,
        and built with advanced security for your peace of mind.
      </p>

      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 relative z-10">
        <Link
          to="/seed-phrase"
          className="inline-flex items-center justify-center gap-2 bg-[#D4FF00] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-[#bce600] transition-transform hover:scale-105 shadow-[0_10px_40px_rgba(212,255,0,0.2)]"
        >
          Get Started
          <ArrowRight className="w-5 h-5" />
        </Link>
        <a
          href="https://github.com/uju09/uWallet-beta"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#1A2920] text-white border border-white/10 px-8 py-4 rounded-full font-bold text-lg hover:bg-[#253d2c] transition-colors"
        >
          <Github className="w-5 h-5" />
          View on GitHub
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
