import React from 'react';
import {
  AirdropPortal,
  AirdropPromoPoster,
  AirdropTypographyPoster,
  AirdropProfessionalPoster,
  AirdropMinimalCard,
  AirdropStateRequest,
  AirdropStateLoading,
  AirdropStateEligible,
  AirdropStateIneligible,
  AirdropStateClaiming,
  AirdropStateSuccess,
  AirdropStateCountdown
} from '../features/airdrop';

const AirdropTestPage = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 md:px-8 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-blend-overlay">
      <div className="max-w-7xl mx-auto space-y-24">

        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#14F195] to-[#D4FF00]">
            Airdrop UI Component Test Page
          </h1>
          <p className="text-[#8FA396] text-lg max-w-2xl mx-auto">
            Scroll down to view all the isolated components and states for the solana airdrop protocol.
          </p>
        </div>

        {/* POSTERS / FULL CARDS */}
        <section className="space-y-12 border-t border-white/5 pt-12">
          <h2 className="text-2xl font-bold text-white uppercase tracking-widest text-center mb-8">Full Scale Posters</h2>
          <AirdropPortal />
          <AirdropPromoPoster />
          <AirdropTypographyPoster />
          <AirdropProfessionalPoster />
          <AirdropMinimalCard />
        </section>

        {/* INTERACTIVE STATES */}
        <section className="space-y-12 border-t border-white/5 pt-12">
          <h2 className="text-2xl font-bold text-white uppercase tracking-widest text-center mb-12">Interactive Flow States</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <AirdropStateRequest />
            <AirdropStateLoading />
            <AirdropStateEligible />
            <AirdropStateIneligible />
            <AirdropStateClaiming />
            <AirdropStateSuccess />
          </div>

          <div className="mt-8">
            <AirdropStateCountdown />
          </div>
        </section>

      </div>
    </div>
  );
};

export default AirdropTestPage;
